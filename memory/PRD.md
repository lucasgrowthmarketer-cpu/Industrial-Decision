# Industrial Decision Interface - PRD

## Original Problem Statement
Build a sophisticated web application called "Industrial Decision Interface" - a board-level synthesis and decision support system for CEOs and senior industrial leadership (COMEX). Not a marketing site, but an operational decision intelligence tool.

## Target Audience
- COMEX / CEO / Managing Director / Industrial leadership
- Tone: Corporate, factual, risk-oriented, strategic clarity

## Core Requirements

### Layout
- "Mission control" style dashboard
- Left sidebar for navigation
- Central canvas for content
- Right column for Operator Panel

### Modules (11 Pages)
1. **System Status** - Executive framing of decision context
2. **COMEX Overview** - Executive summary answering "What does this prove?"
3. **Market Pressure** - Industrial stress indicators with France choropleth map
4. **Decision Readiness Benchmark** - OEM website audit (DRS scores)
5. **Decision Scenarios** - Real operational situations leaders face
6. **Process Visibility** - End-to-end operational clarity
7. **Proof Blocks** - Anonymized operational signals
8. **Decision Gates** - Contextual contact entry points (4 gates + introduction form)
9. **Decision Amplifiers** - Four-layer system architecture
10. **Team** - Core team members (Lucas Ansel, Ayoub Bouzalmad, David Ansel)
11. **Sources & Method** - Transparency and governance

### Key Features
- ✅ Full EN/FR translation with language toggle
- ✅ All data embedded locally (no external API dependencies)
- ✅ LinkedIn link for operators
- ✅ Operator Panel always visible
- ✅ SMTP contact form integration

## Tech Stack
- **Frontend**: React.js (create-react-app)
- **Backend**: FastAPI (Python)
- **Routing**: React Router
- **Data Visualization**: D3.js, React-Simple-Maps
- **Internationalization**: react-i18next
- **Styling**: CSS (mission control dark theme with blue accent #207BFF)
- **Email**: aiosmtplib (SMTP via OVH)

## Design System
- **Primary Color**: #207BFF
- **Accent Color**: #4EA5FF
- **Background Colors**: #1a1f2e, #0f1320, #252b3d
- **Text Color**: #F5F7FA
- **Font**: Manrope

## What's Implemented (Feb 27, 2026)

### Latest Updates ✅
- **Design Refresh**: New blue color palette (#207BFF), new logo, new slogan "Engineering Better Decisions"
- **Team Page**: New page with 3 expandable member cards (Lucas, Ayoub, David)
- **Decision Gates Rewrite**: Complete rewrite with 4 contextual gates + introduction contact form
- **Backend Contact API**: FastAPI endpoint `/api/contact` with SMTP email sending
- **Sources & Method Update**: Added Jean-Baptiste Borron & ALMA Machines outils acknowledgments
- **Footer Update**: Changed to "Industrial Decision" company name, dual contacts display

### Core Features ✅
- ✅ Full 11-page application with all modules
- ✅ Mission control dark theme with blue accent
- ✅ Complete EN/FR translation system with react-i18next
- ✅ Language toggle in sidebar with localStorage persistence
- ✅ All translation keys for all pages (EN and FR)
- ✅ Operator Panel with both contacts (Lucas & Ayoub)
- ✅ Footer with operator information
- ✅ Responsive sidebar navigation
- ✅ Data visualizations (KPI widgets, charts, tables)
- ✅ France choropleth map for Market Pressure
- ✅ Decision Amplifiers module with four-layer architecture

## Test Results (Feb 27, 2026)
- **Backend**: 100% pass rate (5/5 tests passed)
- **Frontend**: 100% pass rate (30/30 tests passed)
- **Translation System**: Working correctly on all pages
- **Contact Form API**: Working (sends emails via SMTP)

## Routes
| Path | Page |
|------|------|
| `/` | System Status |
| `/comex-overview` | COMEX Overview |
| `/market-pressure` | Market Pressure |
| `/decision-readiness` | Decision Readiness Benchmark |
| `/scenarios` | Decision Scenarios |
| `/process` | Process Visibility |
| `/proof` | Proof Blocks |
| `/gates` | Decision Gates |
| `/amplifiers` | Decision Amplifiers |
| `/team` | Team |
| `/sources` | Sources & Method |

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Health check |
| GET | `/api/status` | Get status checks |
| POST | `/api/status` | Create status check |
| POST | `/api/contact` | Submit contact form (sends email via SMTP) |

## Future Tasks (P2 - Optional)
- Extend benchmarks to additional OEMs or countries
- Add side-by-side comparison between industrial actors
- Integrate additional process scenarios
- Add internal decision scoring or prioritization tools
- Deploy additional localized language versions

## Preview URL
https://strategy-desk-26.preview.emergentagent.com
