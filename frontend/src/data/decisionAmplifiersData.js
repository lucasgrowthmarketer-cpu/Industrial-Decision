// Decision Amplifiers Data
// Strategic framework for integrated decision systems

// Intent Clusters - Industrial decision-intent clusters
export const intentClusters = [
  {
    id: "capacity-expansion",
    label: "Capacity Expansion",
    labelFr: "Expansion de Capacité",
    signals: [
      "New production line",
      "Machine replacement",
      "Lead time reduction",
      "Automation integration"
    ],
    signalsFr: [
      "Nouvelle ligne de production",
      "Remplacement de machines",
      "Réduction des délais",
      "Intégration automatisation"
    ],
    decisionRisk: "Capex misallocation",
    decisionRiskFr: "Mauvaise allocation du Capex",
    urgencyLevel: 3
  },
  {
    id: "operational-stress",
    label: "Operational Stress",
    labelFr: "Stress Opérationnel",
    signals: [
      "Downtime increase",
      "Maintenance overload",
      "Skill shortage",
      "Process bottlenecks"
    ],
    signalsFr: [
      "Augmentation des arrêts",
      "Surcharge maintenance",
      "Pénurie de compétences",
      "Goulets d'étranglement"
    ],
    decisionRisk: "Productivity erosion",
    decisionRiskFr: "Érosion de productivité",
    urgencyLevel: 4
  },
  {
    id: "strategic-restructuring",
    label: "Strategic Restructuring",
    labelFr: "Restructuration Stratégique",
    signals: [
      "Asset divestment",
      "Site closure",
      "Transfer of activity",
      "Discreet exit"
    ],
    signalsFr: [
      "Cession d'actifs",
      "Fermeture de site",
      "Transfert d'activité",
      "Sortie discrète"
    ],
    decisionRisk: "Value destruction",
    decisionRiskFr: "Destruction de valeur",
    urgencyLevel: 5
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    labelFr: "Transformation Digitale",
    signals: [
      "Legacy system replacement",
      "Data integration needs",
      "Process digitization",
      "Industry 4.0 readiness"
    ],
    signalsFr: [
      "Remplacement systèmes legacy",
      "Besoins intégration données",
      "Digitalisation des processus",
      "Préparation Industrie 4.0"
    ],
    decisionRisk: "Technology debt",
    decisionRiskFr: "Dette technologique",
    urgencyLevel: 3
  }
];

// Network Metrics - Trust Layer data
export const networkMetrics = {
  avgB2BDecisionMakersInfluenced: 6.8,
  linkedInTouchpointsBeforeContact: 4,
  avgTrustBuildingTimeDays: 21,
  executiveContentEngagementRate: 0.034,
  thoughtLeadershipInfluence: 0.78,
  networkValidationRate: 0.66
};

// Reference sources for Trust Layer
export const trustSources = [
  {
    name: "Edelman Trust Barometer",
    metric: "78% of B2B buyers say thought leadership influences purchase decisions",
    metricFr: "78% des acheteurs B2B disent que le thought leadership influence leurs décisions d'achat"
  },
  {
    name: "LinkedIn B2B Institute",
    metric: "Average 6.8 decision-makers involved in B2B purchasing",
    metricFr: "En moyenne 6,8 décideurs impliqués dans les achats B2B"
  },
  {
    name: "Gartner B2B Buying Study",
    metric: "66% of decision-makers more willing to consider vendors with quality thought leadership",
    metricFr: "66% des décideurs plus enclins à considérer des fournisseurs avec un thought leadership de qualité"
  }
];

// Activation Logic
export const activationLogic = {
  inboundIntent: "Captured via owned infrastructure",
  inboundIntentFr: "Capturé via infrastructure possédée",
  amplification: "Validated via professional network",
  amplificationFr: "Validé via réseau professionnel",
  outboundTrigger: "Activated through targeted approach",
  outboundTriggerFr: "Activé par approche ciblée",
  decisionAcceleration: "Reduced uncertainty before human call",
  decisionAccelerationFr: "Incertitude réduite avant l'appel humain"
};

// Layer definitions for architecture map
export const layerDefinitions = [
  {
    id: "infrastructure",
    name: "Owned Infrastructure",
    nameFr: "Infrastructure Possédée",
    description: "Decision-grade website with clarity, proof, and structured entry points",
    descriptionFr: "Site web de niveau décisionnel avec clarté, preuves et points d'entrée structurés",
    metrics: ["DRS", "Content Clarity", "Entry Point Coverage"],
    metricsFr: ["DRS", "Clarté du Contenu", "Couverture Points d'Entrée"],
    color: "#e89565"
  },
  {
    id: "visibility",
    name: "Visibility Layer",
    nameFr: "Couche de Visibilité",
    description: "Intent capture through SEO, content clusters, and data-driven PR",
    descriptionFr: "Capture d'intention via SEO, clusters de contenu et PR data-driven",
    metrics: ["Intent Coverage", "Search Authority", "Backlink Quality"],
    metricsFr: ["Couverture d'Intention", "Autorité de Recherche", "Qualité Backlinks"],
    color: "#5fa05f"
  },
  {
    id: "trust",
    name: "Trust Layer",
    nameFr: "Couche de Confiance",
    description: "Credibility distribution through thought leadership and network signals",
    descriptionFr: "Distribution de crédibilité via thought leadership et signaux réseau",
    metrics: ["Trust Signal Strength", "Network Reach", "Engagement Rate"],
    metricsFr: ["Force du Signal de Confiance", "Portée Réseau", "Taux d'Engagement"],
    color: "#5f8fa0"
  },
  {
    id: "activation",
    name: "Activation Layer",
    nameFr: "Couche d'Activation",
    description: "Controlled trigger through personalized, context-aware outreach",
    descriptionFr: "Déclenchement contrôlé via approche personnalisée et contextuelle",
    metrics: ["Activation Readiness", "Response Rate", "Meeting Conversion"],
    metricsFr: ["Préparation à l'Activation", "Taux de Réponse", "Conversion en Réunion"],
    color: "#d9a041"
  }
];

// Index definitions
export const indexDefinitions = {
  SCI: {
    name: "System Coherence Index",
    nameFr: "Indice de Cohérence Système",
    description: "Measures alignment between infrastructure, visibility, trust and activation layers.",
    descriptionFr: "Mesure l'alignement entre les couches infrastructure, visibilité, confiance et activation.",
    formula: "Weighted composite of DRS, URI, Intent Coverage, Trust Signal Strength, Activation Readiness",
    formulaFr: "Composite pondéré du DRS, URI, Couverture d'Intention, Force du Signal de Confiance, Préparation à l'Activation",
    scale: "0–100 normalized",
    scaleFr: "0–100 normalisé"
  },
  DRS: {
    name: "Decision Readiness Score",
    nameFr: "Score de Maturité Décisionnelle",
    weight: 0.25
  },
  URI: {
    name: "Uncertainty Reduction Index",
    nameFr: "Indice de Réduction d'Incertitude",
    weight: 0.25
  },
  IntentCoverage: {
    name: "Intent Coverage Score",
    nameFr: "Score de Couverture d'Intention",
    weight: 0.20
  },
  TrustSignal: {
    name: "Trust Signal Strength",
    nameFr: "Force du Signal de Confiance",
    weight: 0.15
  },
  ActivationReadiness: {
    name: "Activation Readiness",
    nameFr: "Préparation à l'Activation",
    weight: 0.15
  }
};

// Sample metrics for demonstration (simulated current state)
export const currentMetrics = {
  DRS: 72,
  URI: 68,
  IntentCoverage: 55,
  TrustSignal: 48,
  ActivationReadiness: 62
};

// SCI calculation utility
export const calculateSCI = (metrics) => {
  const weights = {
    DRS: 0.25,
    URI: 0.25,
    IntentCoverage: 0.20,
    TrustSignal: 0.15,
    ActivationReadiness: 0.15
  };
  
  return Math.round(
    (metrics.DRS * weights.DRS) +
    (metrics.URI * weights.URI) +
    (metrics.IntentCoverage * weights.IntentCoverage) +
    (metrics.TrustSignal * weights.TrustSignal) +
    (metrics.ActivationReadiness * weights.ActivationReadiness)
  );
};

// Governance principles
export const governancePrinciples = [
  {
    rule: "Explicit metrics only when robust",
    ruleFr: "Métriques explicites uniquement quand robustes",
    description: "Use precise figures only for repeatable, committee-discussable KPIs",
    descriptionFr: "Utiliser des chiffres précis uniquement pour des KPI répétables et discutables en comité"
  },
  {
    rule: "Indexed metrics for sensitive areas",
    ruleFr: "Métriques indexées pour les domaines sensibles",
    description: "Apply indexed values when data is context-dependent or confidential",
    descriptionFr: "Appliquer des valeurs indexées quand les données sont contextuelles ou confidentielles"
  },
  {
    rule: "Architecture before tools",
    ruleFr: "Architecture avant les outils",
    description: "System design precedes tool selection",
    descriptionFr: "La conception système précède la sélection des outils"
  },
  {
    rule: "Coherence before amplification",
    ruleFr: "Cohérence avant amplification",
    description: "Ensure base layer integrity before scaling visibility",
    descriptionFr: "Assurer l'intégrité de la couche de base avant d'amplifier la visibilité"
  }
];

// Fragmentation risks
export const fragmentationRisks = [
  {
    area: "Lost intention capture",
    areaFr: "Perte d'intention captée",
    impact: "Potential leads never reach decision point",
    impactFr: "Les leads potentiels n'atteignent jamais le point de décision"
  },
  {
    area: "Non-capitalized proof",
    areaFr: "Preuve non capitalisée",
    impact: "Trust signals remain isolated and underutilized",
    impactFr: "Les signaux de confiance restent isolés et sous-utilisés"
  },
  {
    area: "Unqualified visibility",
    areaFr: "Visibilité non qualifiée",
    impact: "Traffic without conversion pathway",
    impactFr: "Trafic sans parcours de conversion"
  },
  {
    area: "Contradictory signals",
    areaFr: "Signaux contradictoires",
    impact: "Inconsistent messaging increases uncertainty",
    impactFr: "Messages incohérents augmentent l'incertitude"
  }
];
