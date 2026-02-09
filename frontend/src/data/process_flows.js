// Process flow definitions for industrial operations

export const processFlows = [
  {
    id: 1,
    title: "Industrial Restructuring / Judicial Context",
    subtitle: "Informative overview - not legal advice",
    description: "Understanding the operational pathway for machinery asset management during restructuring scenarios.",
    stages: [
      {
        id: "stage1",
        name: "Initial Assessment",
        inputs: ["Asset inventory", "Operational constraints", "Timeline requirements"],
        outputs: ["Preliminary valuation", "Feasibility report", "Process recommendation"],
        timeframe: "2-5 days",
        commitments: ["Confidential evaluation", "No obligation"],
        risks: ["Market volatility", "Timing dependencies"]
      },
      {
        id: "stage2",
        name: "Detailed Evaluation",
        inputs: ["Technical documentation", "Site access", "Maintenance records"],
        outputs: ["Formal valuation", "Logistics plan", "Timeline proposal"],
        timeframe: "5-10 days",
        commitments: ["Written proposal", "Fixed pricing (30d validity)"],
        risks: ["Site access delays", "Documentation gaps"]
      },
      {
        id: "stage3",
        name: "Execution Planning",
        inputs: ["Signed agreement", "Operational calendar", "Stakeholder coordination"],
        outputs: ["Detailed project plan", "Resource allocation", "Risk mitigation protocol"],
        timeframe: "3-7 days",
        commitments: ["Project manager assigned", "Weekly reporting"],
        risks: ["Coordination complexity", "Third-party dependencies"]
      },
      {
        id: "stage4",
        name: "Asset Removal & Transfer",
        inputs: ["Site clearance", "Logistics coordination", "Documentation finalization"],
        outputs: ["Asset transfer", "Site restoration", "Final reporting"],
        timeframe: "Variable (2-8 weeks)",
        commitments: ["Insurance coverage", "Regulatory compliance", "Final settlement"],
        risks: ["Operational interference", "Regulatory delays"]
      }
    ],
    decisionGates: [
      { gate: "Discreet", applicableStages: ["stage1"] },
      { gate: "Exploratory", applicableStages: ["stage1", "stage2"] },
      { gate: "Urgent", applicableStages: ["stage2", "stage3", "stage4"] }
    ]
  },
  {
    id: 2,
    title: "Machinery Park Resale / Fast Disposal",
    subtitle: "Operational process for rapid asset conversion",
    description: "Streamlined pathway for converting industrial equipment to cash with minimal operational disruption.",
    stages: [
      {
        id: "stage1",
        name: "Rapid Assessment",
        inputs: ["Equipment list", "Basic specifications", "Condition overview"],
        outputs: ["Indicative valuation range", "Feasibility confirmation"],
        timeframe: "24-48 hours",
        commitments: ["Confidential", "Non-binding"],
        risks: ["Limited data accuracy"]
      },
      {
        id: "stage2",
        name: "On-Site Validation",
        inputs: ["Site inspection slot", "Equipment access", "Documentation review"],
        outputs: ["Binding offer", "Logistics assessment", "Timeline commitment"],
        timeframe: "2-4 days",
        commitments: ["Written offer (14d validity)", "Logistics plan"],
        risks: ["Condition discrepancies"]
      },
      {
        id: "stage3",
        name: "Transaction & Removal",
        inputs: ["Signed purchase agreement", "Payment terms confirmation"],
        outputs: ["Payment execution", "Asset removal", "Site clearance certificate"],
        timeframe: "1-3 weeks",
        commitments: ["Payment guarantee", "Insurance coverage", "Site restoration"],
        risks: ["Removal logistics", "Site coordination"]
      }
    ],
    decisionGates: [
      { gate: "Urgent", applicableStages: ["stage1", "stage2"] },
      { gate: "Exploratory", applicableStages: ["stage1"] },
      { gate: "Discreet", applicableStages: ["stage1", "stage2"] }
    ]
  }
];
