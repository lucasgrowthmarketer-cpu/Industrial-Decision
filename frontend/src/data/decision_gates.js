// Decision gates configuration

export const decisionGates = [
  {
    id: "discreet",
    title: "Discreet",
    description: "Confidential assessment without formal engagement or public disclosure.",
    badge: "Confidential",
    whatHappens: [
      "Receive preliminary assessment within 48-72h",
      "No obligation or commitment required",
      "Communication via secure, discreet channels",
      "Information protected under confidentiality protocol"
    ],
    responseTimeframe: "48-72 hours",
    exchangeFormat: "Encrypted email or secure phone discussion",
    requiredInfo: [
      "General asset category (optional: specific models)",
      "Approximate quantity/scale",
      "Timing context (exploratory vs. defined timeline)",
      "Preferred contact method"
    ],
    idealFor: [
      "Pre-decision market assessment",
      "Confidential strategic evaluation",
      "Board-level preliminary analysis"
    ]
  },
  {
    id: "exploratory",
    title: "Exploratory",
    description: "Structured evaluation to understand options, processes, and feasibility without commitment.",
    badge: "No Obligation",
    whatHappens: [
      "Detailed options analysis provided",
      "Process walkthrough and timeline clarity",
      "Indicative valuation ranges (if applicable)",
      "Scenario modeling support"
    ],
    responseTimeframe: "3-5 business days",
    exchangeFormat: "Video call, secure documentation, or on-site discussion",
    requiredInfo: [
      "Asset details and documentation",
      "Operational constraints and timeline",
      "Specific concerns or priorities",
      "Decision-making context"
    ],
    idealFor: [
      "Understanding feasibility before internal decision",
      "Comparing strategic options",
      "Building internal business case"
    ]
  },
  {
    id: "urgent",
    title: "Urgent",
    description: "Fast-track assessment and execution pathway for time-critical situations.",
    badge: "Priority",
    whatHappens: [
      "Immediate triage and priority assignment",
      "Rapid on-site assessment (if required)",
      "Binding proposal within 48-96h",
      "Accelerated execution planning"
    ],
    responseTimeframe: "12-24 hours (initial contact)",
    exchangeFormat: "Phone + expedited documentation + on-site if needed",
    requiredInfo: [
      "Detailed asset information",
      "Urgency drivers and timeline constraints",
      "Decision authority and approval process",
      "Logistics and site access details"
    ],
    idealFor: [
      "Emergency downtime situations",
      "Judicial deadlines or financial pressures",
      "Critical operational needs"
    ]
  },
  {
    id: "post-crisis",
    title: "Post-Crisis",
    description: "Structured pathway for stabilizing operations after a major disruption or restructuring.",
    badge: "Recovery Support",
    whatHappens: [
      "Comprehensive situation assessment",
      "Multi-option strategic planning",
      "Phased execution roadmap",
      "Ongoing coordination and reporting"
    ],
    responseTimeframe: "2-3 business days",
    exchangeFormat: "In-person strategic session + detailed documentation",
    requiredInfo: [
      "Current operational state",
      "Asset inventory and condition",
      "Stakeholder landscape (creditors, management, etc.)",
      "Recovery objectives and constraints"
    ],
    idealFor: [
      "Post-restructuring asset optimization",
      "Recovery from major operational disruption",
      "Strategic asset portfolio rationalization"
    ]
  }
];
