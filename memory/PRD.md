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

### Modules (9 Pages)
1. **System Status** - Executive framing of decision context
2. **COMEX Overview** - Executive summary answering "What does this prove?"
3. **Market Pressure** - Industrial stress indicators with France choropleth map
4. **Decision Readiness Benchmark** - OEM website audit (DRS scores)
5. **Decision Scenarios** - Real operational situations leaders face
6. **Process Visibility** - End-to-end operational clarity
7. **Proof Blocks** - Anonymized operational signals
8. **Decision Gates** - Contextual contact entry points
9. **Sources & Method** - Transparency and governance

### Key Features
- ✅ Full EN/FR translation with language toggle
- ✅ All data embedded locally (no external API dependencies)
- ✅ LinkedIn link for operator
- ✅ Operator Panel always visible

## Tech Stack
- **Frontend**: React.js (create-react-app)
- **Routing**: React Router
- **Data Visualization**: D3.js, React-Simple-Maps
- **Internationalization**: react-i18next
- **Styling**: CSS (mission control dark theme)

## File Structure
```
/app/frontend/src/
├── i18n/
│   ├── config.js
│   └── locales/
│       ├── en.json
│       └── fr.json
├── components/
│   ├── Sidebar.js (with language toggle)
│   ├── OperatorPanel.js
│   ├── DataPanel.js
│   ├── Badge.js
│   └── KPIWidget.js
├── pages/
│   ├── SystemStatus.js
│   ├── COMEXOverview.js
│   ├── MarketPressure.js
│   ├── DecisionReadiness.js
│   ├── DecisionScenarios.js
│   ├── ProcessVisibility.js
│   ├── ProofBlocks.js
│   ├── DecisionGates.js
│   └── SourcesMethod.js
└── data/
    ├── industrial_pressure.js
    ├── oem_audit.js
    ├── scenarios.js
    ├── process_flows.js
    ├── proof_blocks.js
    └── decision_gates.js
```

## What's Implemented (Dec 9, 2025)
- ✅ Full 9-page application with all modules
- ✅ Mission control dark theme styling
- ✅ Complete EN/FR translation system with react-i18next
- ✅ Language toggle in sidebar with localStorage persistence
- ✅ All translation keys for all 9 pages (EN and FR)
- ✅ Operator Panel with contact info and LinkedIn link
- ✅ Footer with operator information
- ✅ Responsive sidebar navigation
- ✅ Data visualizations (KPI widgets, charts, tables)
- ✅ France choropleth map for Market Pressure

## Test Results
- **Translation System**: 100% pass rate
- **All 9 pages**: Translated correctly EN ↔ FR
- **Language Toggle**: Working correctly
- **Sidebar/Footer/Operator Panel**: Translated correctly
- **Language Persistence**: Working via localStorage

## Future Tasks (P2 - Optional)
- Extend benchmarks to additional OEMs or countries
- Add side-by-side comparison between industrial actors
- Integrate additional process scenarios
- Add internal decision scoring or prioritization tools
- Deploy additional localized language versions

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
| `/sources` | Sources & Method |

## Preview URL
https://leadership-ops-hub.preview.emergentagent.com
