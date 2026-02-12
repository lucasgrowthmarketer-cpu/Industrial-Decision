// Process flow definitions for industrial operations - Bilingual support

export const processFlows = [
  {
    id: 1,
    title: "Industrial Restructuring / Judicial Context",
    titleFr: "Restructuration Industrielle / Contexte Judiciaire",
    subtitle: "Informative overview - not legal advice",
    subtitleFr: "Vue d'ensemble informative - pas de conseil juridique",
    description: "Understanding the operational pathway for machinery asset management during restructuring scenarios.",
    descriptionFr: "Comprendre le parcours opérationnel pour la gestion des actifs machines en contexte de restructuration.",
    stages: [
      {
        id: "stage1",
        name: "Initial Assessment",
        nameFr: "Évaluation Initiale",
        inputs: ["Asset inventory", "Operational constraints", "Timeline requirements"],
        inputsFr: ["Inventaire des actifs", "Contraintes opérationnelles", "Exigences calendaires"],
        outputs: ["Preliminary valuation", "Feasibility report", "Process recommendation"],
        outputsFr: ["Évaluation préliminaire", "Rapport de faisabilité", "Recommandation de processus"],
        timeframe: "2-5 days",
        timeframeFr: "2-5 jours",
        commitments: ["Confidential evaluation", "No obligation"],
        commitmentsFr: ["Évaluation confidentielle", "Sans obligation"],
        risks: ["Market volatility", "Timing dependencies"],
        risksFr: ["Volatilité du marché", "Dépendances calendaires"]
      },
      {
        id: "stage2",
        name: "Detailed Evaluation",
        nameFr: "Évaluation Détaillée",
        inputs: ["Technical documentation", "Site access", "Maintenance records"],
        inputsFr: ["Documentation technique", "Accès au site", "Registres de maintenance"],
        outputs: ["Formal valuation", "Logistics plan", "Timeline proposal"],
        outputsFr: ["Évaluation formelle", "Plan logistique", "Proposition de calendrier"],
        timeframe: "5-10 days",
        timeframeFr: "5-10 jours",
        commitments: ["Written proposal", "Fixed pricing (30d validity)"],
        commitmentsFr: ["Proposition écrite", "Prix fixe (validité 30j)"],
        risks: ["Site access delays", "Documentation gaps"],
        risksFr: ["Retards d'accès au site", "Lacunes documentaires"]
      },
      {
        id: "stage3",
        name: "Execution Planning",
        nameFr: "Planification de l'Exécution",
        inputs: ["Signed agreement", "Operational calendar", "Stakeholder coordination"],
        inputsFr: ["Accord signé", "Calendrier opérationnel", "Coordination des parties prenantes"],
        outputs: ["Detailed project plan", "Resource allocation", "Risk mitigation protocol"],
        outputsFr: ["Plan de projet détaillé", "Allocation des ressources", "Protocole d'atténuation des risques"],
        timeframe: "3-7 days",
        timeframeFr: "3-7 jours",
        commitments: ["Project manager assigned", "Weekly reporting"],
        commitmentsFr: ["Chef de projet assigné", "Reporting hebdomadaire"],
        risks: ["Coordination complexity", "Third-party dependencies"],
        risksFr: ["Complexité de coordination", "Dépendances tierces"]
      },
      {
        id: "stage4",
        name: "Asset Removal & Transfer",
        nameFr: "Enlèvement & Transfert des Actifs",
        inputs: ["Site clearance", "Logistics coordination", "Documentation finalization"],
        inputsFr: ["Dégagement du site", "Coordination logistique", "Finalisation documentaire"],
        outputs: ["Asset transfer", "Site restoration", "Final reporting"],
        outputsFr: ["Transfert des actifs", "Restauration du site", "Rapport final"],
        timeframe: "Variable (2-8 weeks)",
        timeframeFr: "Variable (2-8 semaines)",
        commitments: ["Insurance coverage", "Regulatory compliance", "Final settlement"],
        commitmentsFr: ["Couverture assurance", "Conformité réglementaire", "Règlement final"],
        risks: ["Operational interference", "Regulatory delays"],
        risksFr: ["Interférence opérationnelle", "Retards réglementaires"]
      }
    ],
    decisionGates: [
      { gate: "Discreet", gateFr: "Discret", applicableStages: ["stage1"] },
      { gate: "Exploratory", gateFr: "Exploratoire", applicableStages: ["stage1", "stage2"] },
      { gate: "Urgent", gateFr: "Urgent", applicableStages: ["stage2", "stage3", "stage4"] }
    ]
  },
  {
    id: 2,
    title: "Machinery Park Resale / Fast Disposal",
    titleFr: "Revente Parc Machines / Cession Rapide",
    subtitle: "Operational process for rapid asset conversion",
    subtitleFr: "Processus opérationnel pour conversion rapide d'actifs",
    description: "Streamlined pathway for converting industrial equipment to cash with minimal operational disruption.",
    descriptionFr: "Parcours simplifié pour convertir des équipements industriels en liquidités avec perturbation opérationnelle minimale.",
    stages: [
      {
        id: "stage1",
        name: "Rapid Assessment",
        nameFr: "Évaluation Rapide",
        inputs: ["Equipment list", "Basic specifications", "Condition overview"],
        inputsFr: ["Liste d'équipements", "Spécifications de base", "Aperçu de l'état"],
        outputs: ["Indicative valuation range", "Feasibility confirmation"],
        outputsFr: ["Fourchette d'évaluation indicative", "Confirmation de faisabilité"],
        timeframe: "24-48 hours",
        timeframeFr: "24-48 heures",
        commitments: ["Confidential", "Non-binding"],
        commitmentsFr: ["Confidentiel", "Non engageant"],
        risks: ["Limited data accuracy"],
        risksFr: ["Précision limitée des données"]
      },
      {
        id: "stage2",
        name: "On-Site Validation",
        nameFr: "Validation Sur Site",
        inputs: ["Site inspection slot", "Equipment access", "Documentation review"],
        inputsFr: ["Créneau d'inspection site", "Accès équipements", "Revue documentaire"],
        outputs: ["Binding offer", "Logistics assessment", "Timeline commitment"],
        outputsFr: ["Offre ferme", "Évaluation logistique", "Engagement calendaire"],
        timeframe: "2-4 days",
        timeframeFr: "2-4 jours",
        commitments: ["Written offer (14d validity)", "Logistics plan"],
        commitmentsFr: ["Offre écrite (validité 14j)", "Plan logistique"],
        risks: ["Condition discrepancies"],
        risksFr: ["Écarts d'état"]
      },
      {
        id: "stage3",
        name: "Transaction & Removal",
        nameFr: "Transaction & Enlèvement",
        inputs: ["Signed purchase agreement", "Payment terms confirmation"],
        inputsFr: ["Contrat d'achat signé", "Confirmation des conditions de paiement"],
        outputs: ["Payment execution", "Asset removal", "Site clearance certificate"],
        outputsFr: ["Exécution du paiement", "Enlèvement des actifs", "Certificat de dégagement site"],
        timeframe: "1-3 weeks",
        timeframeFr: "1-3 semaines",
        commitments: ["Payment guarantee", "Insurance coverage", "Site restoration"],
        commitmentsFr: ["Garantie de paiement", "Couverture assurance", "Restauration du site"],
        risks: ["Removal logistics", "Site coordination"],
        risksFr: ["Logistique d'enlèvement", "Coordination site"]
      }
    ],
    decisionGates: [
      { gate: "Urgent", gateFr: "Urgent", applicableStages: ["stage1", "stage2"] },
      { gate: "Exploratory", gateFr: "Exploratoire", applicableStages: ["stage1"] },
      { gate: "Discreet", gateFr: "Discret", applicableStages: ["stage1", "stage2"] }
    ]
  }
];
