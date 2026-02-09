// Anonymized case studies with metrics

export const proofBlocks = [
  {
    id: 1,
    company: "Aero Precision",
    sector: "Aerospace Components",
    region: "Occitanie",
    challenge: "Long RFQ response times creating uncertainty for decision-makers in urgent procurement scenarios.",
    intervention: "Process visibility module + contextualized entry points",
    metrics: [
      { label: "RFQ Response Time", before: "72h", after: "36h", improvement: "-50%" },
      { label: "Complete RFQ Rate", improvement: "+28%" },
      { label: "URI Score", value: "72" }
    ],
    timeframe: "Q2-Q4 2024"
  },
  {
    id: 2,
    company: "Auto Series",
    sector: "Automotive Parts",
    region: "Grand Est",
    challenge: "Weak after-sales service visibility reducing trust in long-term technical partnerships.",
    intervention: "Service process documentation + proof blocks integration",
    metrics: [
      { label: "SAV Lead Generation", improvement: "+22%" },
      { label: "Technical Meetings Booked", improvement: "+15%" },
      { label: "DRS Score", value: "3.5" }
    ],
    timeframe: "Q1-Q3 2024"
  },
  {
    id: 3,
    company: "Medical Turning",
    sector: "Medical Device Precision",
    region: "Jura / Haute-Savoie",
    challenge: "High initial contact drop-off due to unclear qualification pathways for sensitive medical applications.",
    intervention: "Scenario-based navigation + decision gates",
    metrics: [
      { label: "Contact-to-Call Conversion", improvement: "+18%" },
      { label: "Qualified Lead Rate", improvement: "+24%" },
      { label: "URI Score", value: "68" }
    ],
    timeframe: "Q2-Q4 2024"
  },
  {
    id: 4,
    company: "Workshop Integrator",
    sector: "Turnkey Integration",
    region: "France (National)",
    challenge: "Long-cycle decisions stalling due to uncertainty around project complexity and timelines.",
    intervention: "Process flowcharts + timeline transparency + proof integration",
    metrics: [
      { label: "6-12 Month Pipeline Leads", improvement: "+20%" },
      { label: "Qualification Drop-off", improvement: "-12%" },
      { label: "DRS Score", value: "4.0" }
    ],
    timeframe: "Q1-Q4 2024"
  },
  {
    id: 5,
    company: "Sawing & Storage",
    sector: "Material Handling Systems",
    region: "Hauts-de-France",
    challenge: "Operational decision-makers unable to assess ROI impact from standard product catalogs.",
    intervention: "Industry scenario pages + operational KPI proof blocks",
    metrics: [
      { label: "Material Loss Reduction", improvement: "-6%" },
      { label: "Handling Time Improvement", improvement: "-18%" },
      { label: "URI Score", value: "64" }
    ],
    timeframe: "Q3 2024 - Q1 2025"
  }
];

// Governance rule widget data
export const governanceMetrics = {
  explicit: [
    "Response Timeframes",
    "Conversion Rates",
    "Request Volumes",
    "Navigation Patterns",
    "Appointment Bookings",
    "Processing Times"
  ],
  indexed: [
    "URI (Uncertainty Reduction Index)",
    "DRS (Decision Readiness Score)",
    "IPI (Industrial Pressure Index)",
    "Basket Complexity",
    "Market Share Proxies"
  ]
};
