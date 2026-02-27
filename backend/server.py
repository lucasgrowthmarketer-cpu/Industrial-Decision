from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from collections import defaultdict


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ── Simple in-memory rate limiter ─────────────────────────────────────────────
# { ip: [timestamp, timestamp, ...] }
_rate_limit_store: dict[str, list[datetime]] = defaultdict(list)
RATE_LIMIT_MAX = int(os.environ.get('RATE_LIMIT_MAX', 5))        # max requests
RATE_LIMIT_WINDOW = int(os.environ.get('RATE_LIMIT_WINDOW', 60)) # per N seconds

def _is_rate_limited(ip: str) -> bool:
    """Return True if this IP has exceeded the rate limit."""
    now = datetime.now(timezone.utc)
    window_start = now - timedelta(seconds=RATE_LIMIT_WINDOW)
    # Keep only timestamps within the current window
    _rate_limit_store[ip] = [
        ts for ts in _rate_limit_store[ip] if ts > window_start
    ]
    if len(_rate_limit_store[ip]) >= RATE_LIMIT_MAX:
        return True
    _rate_limit_store[ip].append(now)
    return False


# ── Models ────────────────────────────────────────────────────────────────────

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    name: str
    company: str
    email: str
    context: str
    preferred_contact: Optional[str] = "email"
    gate_type: Optional[str] = "introduction"   # discreet | exploratory | urgent | postcrisis | introduction
    website: Optional[str] = None               # honeypot — must stay empty

class ContactResponse(BaseModel):
    success: bool
    message: str


# ── Routes ────────────────────────────────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactRequest, request: Request):
    """Handle contact form submission: honeypot check → rate limit → save to DB → send email."""

    # ── 1. Honeypot check ─────────────────────────────────────────────────────
    # Real users never fill the hidden `website` field. Bots usually do.
    if contact.website:
        logger.warning(f"Honeypot triggered from email={contact.email}")
        # Return a fake success so bots don't know they were blocked
        return ContactResponse(success=True, message="Your request has been received. We will contact you shortly.")

    # ── 2. IP rate limit ──────────────────────────────────────────────────────
    client_ip = request.client.host if request.client else "unknown"
    if _is_rate_limited(client_ip):
        logger.warning(f"Rate limit exceeded for IP={client_ip}")
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please wait a moment before trying again."
        )

    # ── 3. Save lead to MongoDB ───────────────────────────────────────────────
    lead_doc = {
        "id": str(uuid.uuid4()),
        "name": contact.name,
        "company": contact.company,
        "email": contact.email,
        "context": contact.context,
        "preferred_contact": contact.preferred_contact,
        "gate_type": contact.gate_type,
        "ip": client_ip,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "email_sent": False,
    }
    await db.leads.insert_one(lead_doc)
    logger.info(f"Lead saved to DB: id={lead_doc['id']} gate={contact.gate_type} email={contact.email}")

    # ── 4. Send email via SMTP ────────────────────────────────────────────────
    try:
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.mail.ovh.net')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_pass = os.environ.get('SMTP_PASS')
        to_email = os.environ.get('LEAD_TO_EMAIL', 'direction@industrialdecision.com')
        from_email = os.environ.get('LEAD_FROM_EMAIL', 'direction@industrialdecision.com')

        if not smtp_user or not smtp_pass:
            logger.error("SMTP credentials not configured")
            # Lead is already saved in DB — don't fail the whole request
            return ContactResponse(success=True, message="Your request has been received. We will contact you shortly.")

        # Gate label for subject line
        gate_labels = {
            "discreet":    "Discreet Gate",
            "exploratory": "Exploratory Gate",
            "urgent":      "Urgent Gate",
            "postcrisis":  "Post-Crisis Gate",
            "introduction": "Direct Introduction",
        }
        gate_label = gate_labels.get(contact.gate_type or "introduction", contact.gate_type or "Introduction")

        message = MIMEMultipart("alternative")
        message["From"] = from_email
        message["To"] = to_email
        message["Subject"] = f"[Industrial Decision] Gate: {gate_label} — Request from {contact.name}"

        text_content = f"""
New Contact Request - Industrial Decision Interface

Gate: {gate_label}
Name: {contact.name}
Company: {contact.company}
Email: {contact.email}
Decision Context: {contact.context}
Preferred Contact Method: {contact.preferred_contact}

---
This message was sent via the Industrial Decision Interface contact form.
        """

        # Gate badge color for the email header
        gate_colors = {
            "discreet":    "#d9a041",
            "exploratory": "#5f8fa0",
            "urgent":      "#c45454",
            "postcrisis":  "#5fa05f",
            "introduction": "#207BFF",
        }
        gate_color = gate_colors.get(contact.gate_type or "introduction", "#207BFF")

        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: 'Manrope', Arial, sans-serif; background-color: #F5F7FA; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; }}
        .header {{ background: #207BFF; color: white; padding: 20px; text-align: center; }}
        .gate-badge {{ display: inline-block; background: {gate_color}; color: white; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 600; margin-top: 8px; }}
        .content {{ padding: 30px; }}
        .field {{ margin-bottom: 20px; }}
        .label {{ font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }}
        .value {{ font-size: 16px; color: #1a1a1a; margin-top: 4px; }}
        .footer {{ background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #888; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin:0;">New Contact Request</h1>
            <p style="margin:5px 0 0 0; opacity: 0.9;">Industrial Decision Interface</p>
            <div class="gate-badge">{gate_label}</div>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">{contact.name}</div>
            </div>
            <div class="field">
                <div class="label">Company</div>
                <div class="value">{contact.company}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">{contact.email}</div>
            </div>
            <div class="field">
                <div class="label">Decision Context</div>
                <div class="value">{contact.context}</div>
            </div>
            <div class="field">
                <div class="label">Preferred Contact Method</div>
                <div class="value">{contact.preferred_contact}</div>
            </div>
            <div class="field">
                <div class="label">Entry Gate</div>
                <div class="value">{gate_label}</div>
            </div>
        </div>
        <div class="footer">
            Sent via Industrial Decision Interface
        </div>
    </div>
</body>
</html>
        """

        message.attach(MIMEText(text_content, "plain"))
        message.attach(MIMEText(html_content, "html"))

        await aiosmtplib.send(
            message,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_pass,
            start_tls=True
        )

        # Mark email as sent in DB
        await db.leads.update_one(
            {"id": lead_doc["id"]},
            {"$set": {"email_sent": True}}
        )
        logger.info(f"Email sent successfully for lead id={lead_doc['id']}")

    except aiosmtplib.SMTPException as e:
        # Lead saved, email failed — log but don't crash
        logger.error(f"SMTP error for lead id={lead_doc['id']}: {str(e)}")

    except Exception as e:
        logger.error(f"Unexpected error during email send for lead id={lead_doc['id']}: {str(e)}")

    return ContactResponse(success=True, message="Your request has been received. We will contact you shortly.")


# ── App setup ─────────────────────────────────────────────────────────────────

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
