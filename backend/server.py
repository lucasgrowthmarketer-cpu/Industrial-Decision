from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Contact form model
class ContactRequest(BaseModel):
    name: str
    company: str
    email: str
    context: str
    preferred_contact: Optional[str] = "email"

class ContactResponse(BaseModel):
    success: bool
    message: str

# Contact form endpoint
@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactRequest):
    """Handle contact form submission and send email via SMTP"""
    try:
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.mail.ovh.net')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_pass = os.environ.get('SMTP_PASS')
        to_email = os.environ.get('LEAD_TO_EMAIL', 'direction@industrialdecision.com')
        from_email = os.environ.get('LEAD_FROM_EMAIL', 'direction@industrialdecision.com')
        
        if not smtp_user or not smtp_pass:
            logger.error("SMTP credentials not configured")
            raise HTTPException(status_code=500, detail="Email service not configured")
        
        # Create email message
        message = MIMEMultipart("alternative")
        message["From"] = from_email
        message["To"] = to_email
        message["Subject"] = f"[Industrial Decision] New Contact Request from {contact.name}"
        
        # Plain text version
        text_content = f"""
New Contact Request - Industrial Decision Interface

Name: {contact.name}
Company: {contact.company}
Email: {contact.email}
Decision Context: {contact.context}
Preferred Contact Method: {contact.preferred_contact}

---
This message was sent via the Industrial Decision Interface contact form.
        """
        
        # HTML version
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: 'Manrope', Arial, sans-serif; background-color: #F5F7FA; padding: 20px; }}
        .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; }}
        .header {{ background: #207BFF; color: white; padding: 20px; text-align: center; }}
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
        
        # Send email
        await aiosmtplib.send(
            message,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_pass,
            start_tls=True
        )
        
        logger.info(f"Contact form email sent successfully for {contact.name}")
        return ContactResponse(success=True, message="Your request has been received. We will contact you shortly.")
        
    except aiosmtplib.SMTPException as e:
        logger.error(f"SMTP error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email. Please try again later.")
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred. Please try again.")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()