// Decision gates configuration - Bilingual support

export const decisionGates = [
  {
    id: "discreet",
    title: "Discreet",
    titleFr: "Discret",
    description: "Confidential assessment without formal engagement or public disclosure.",
    descriptionFr: "Évaluation confidentielle sans engagement formel ni divulgation publique.",
    badge: "Confidential",
    badgeFr: "Confidentiel",
    whatHappens: [
      "Receive preliminary assessment within 48-72h",
      "No obligation or commitment required",
      "Communication via secure, discreet channels",
      "Information protected under confidentiality protocol"
    ],
    whatHappensFr: [
      "Recevoir une évaluation préliminaire sous 48-72h",
      "Aucune obligation ni engagement requis",
      "Communication via canaux sécurisés et discrets",
      "Information protégée par protocole de confidentialité"
    ],
    responseTimeframe: "48-72 hours",
    responseTimeframeFr: "48-72 heures",
    exchangeFormat: "Encrypted email or secure phone discussion",
    exchangeFormatFr: "Email chiffré ou discussion téléphonique sécurisée",
    requiredInfo: [
      "General asset category (optional: specific models)",
      "Approximate quantity/scale",
      "Timing context (exploratory vs. defined timeline)",
      "Preferred contact method"
    ],
    requiredInfoFr: [
      "Catégorie d'actifs générale (optionnel : modèles spécifiques)",
      "Quantité/échelle approximative",
      "Contexte temporel (exploratoire vs calendrier défini)",
      "Méthode de contact préférée"
    ],
    idealFor: [
      "Pre-decision market assessment",
      "Confidential strategic evaluation",
      "Board-level preliminary analysis"
    ],
    idealForFr: [
      "Évaluation de marché pré-décisionnelle",
      "Évaluation stratégique confidentielle",
      "Analyse préliminaire niveau conseil d'administration"
    ]
  },
  {
    id: "exploratory",
    title: "Exploratory",
    titleFr: "Exploratoire",
    description: "Structured evaluation to understand options, processes, and feasibility without commitment.",
    descriptionFr: "Évaluation structurée pour comprendre les options, processus et faisabilité sans engagement.",
    badge: "No Obligation",
    badgeFr: "Sans Obligation",
    whatHappens: [
      "Detailed options analysis provided",
      "Process walkthrough and timeline clarity",
      "Indicative valuation ranges (if applicable)",
      "Scenario modeling support"
    ],
    whatHappensFr: [
      "Analyse détaillée des options fournie",
      "Parcours processus et clarté calendaire",
      "Fourchettes d'évaluation indicatives (si applicable)",
      "Support de modélisation de scénarios"
    ],
    responseTimeframe: "3-5 business days",
    responseTimeframeFr: "3-5 jours ouvrés",
    exchangeFormat: "Video call, secure documentation, or on-site discussion",
    exchangeFormatFr: "Appel vidéo, documentation sécurisée ou discussion sur site",
    requiredInfo: [
      "Asset details and documentation",
      "Operational constraints and timeline",
      "Specific concerns or priorities",
      "Decision-making context"
    ],
    requiredInfoFr: [
      "Détails et documentation des actifs",
      "Contraintes opérationnelles et calendrier",
      "Préoccupations ou priorités spécifiques",
      "Contexte de prise de décision"
    ],
    idealFor: [
      "Understanding feasibility before internal decision",
      "Comparing strategic options",
      "Building internal business case"
    ],
    idealForFr: [
      "Comprendre la faisabilité avant décision interne",
      "Comparer les options stratégiques",
      "Construire le business case interne"
    ]
  },
  {
    id: "urgent",
    title: "Urgent",
    titleFr: "Urgent",
    description: "Fast-track assessment and execution pathway for time-critical situations.",
    descriptionFr: "Parcours d'évaluation et d'exécution accéléré pour situations critiques en termes de temps.",
    badge: "Priority",
    badgeFr: "Priorité",
    whatHappens: [
      "Immediate triage and priority assignment",
      "Rapid on-site assessment (if required)",
      "Binding proposal within 48-96h",
      "Accelerated execution planning"
    ],
    whatHappensFr: [
      "Triage immédiat et assignation de priorité",
      "Évaluation rapide sur site (si nécessaire)",
      "Proposition ferme sous 48-96h",
      "Planification d'exécution accélérée"
    ],
    responseTimeframe: "12-24 hours (initial contact)",
    responseTimeframeFr: "12-24 heures (contact initial)",
    exchangeFormat: "Phone + expedited documentation + on-site if needed",
    exchangeFormatFr: "Téléphone + documentation accélérée + sur site si nécessaire",
    requiredInfo: [
      "Detailed asset information",
      "Urgency drivers and timeline constraints",
      "Decision authority and approval process",
      "Logistics and site access details"
    ],
    requiredInfoFr: [
      "Information détaillée sur les actifs",
      "Facteurs d'urgence et contraintes calendaires",
      "Autorité de décision et processus d'approbation",
      "Détails logistiques et accès au site"
    ],
    idealFor: [
      "Emergency downtime situations",
      "Judicial deadlines or financial pressures",
      "Critical operational needs"
    ],
    idealForFr: [
      "Situations d'arrêt d'urgence",
      "Échéances judiciaires ou pressions financières",
      "Besoins opérationnels critiques"
    ]
  },
  {
    id: "post-crisis",
    title: "Post-Crisis",
    titleFr: "Post-Crise",
    description: "Structured pathway for stabilizing operations after a major disruption or restructuring.",
    descriptionFr: "Parcours structuré pour stabiliser les opérations après une perturbation majeure ou restructuration.",
    badge: "Recovery Support",
    badgeFr: "Support de Récupération",
    whatHappens: [
      "Comprehensive situation assessment",
      "Multi-option strategic planning",
      "Phased execution roadmap",
      "Ongoing coordination and reporting"
    ],
    whatHappensFr: [
      "Évaluation complète de la situation",
      "Planification stratégique multi-options",
      "Feuille de route d'exécution par phases",
      "Coordination et reporting continus"
    ],
    responseTimeframe: "2-3 business days",
    responseTimeframeFr: "2-3 jours ouvrés",
    exchangeFormat: "In-person strategic session + detailed documentation",
    exchangeFormatFr: "Session stratégique en personne + documentation détaillée",
    requiredInfo: [
      "Current operational state",
      "Asset inventory and condition",
      "Stakeholder landscape (creditors, management, etc.)",
      "Recovery objectives and constraints"
    ],
    requiredInfoFr: [
      "État opérationnel actuel",
      "Inventaire et état des actifs",
      "Paysage des parties prenantes (créanciers, direction, etc.)",
      "Objectifs et contraintes de récupération"
    ],
    idealFor: [
      "Post-restructuring asset optimization",
      "Recovery from major operational disruption",
      "Strategic asset portfolio rationalization"
    ],
    idealForFr: [
      "Optimisation d'actifs post-restructuration",
      "Récupération après perturbation opérationnelle majeure",
      "Rationalisation stratégique du portefeuille d'actifs"
    ]
  }
];
