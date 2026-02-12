// Anonymized case studies with metrics - Bilingual support

export const proofBlocks = [
  {
    id: 1,
    company: "Aero Precision",
    sector: "Aerospace Components",
    sectorFr: "Composants Aéronautiques",
    region: "Occitanie",
    challenge: "Long RFQ response times creating uncertainty for decision-makers in urgent procurement scenarios.",
    challengeFr: "Délais de réponse aux RFQ longs créant de l'incertitude pour les décideurs dans des scénarios d'approvisionnement urgent.",
    intervention: "Process visibility module + contextualized entry points",
    interventionFr: "Module de visibilité processus + points d'entrée contextualisés",
    metrics: [
      { label: "RFQ Response Time", labelFr: "Délai de Réponse RFQ", before: "72h", after: "36h", improvement: "-50%" },
      { label: "Complete RFQ Rate", labelFr: "Taux de RFQ Complètes", improvement: "+28%" },
      { label: "URI Score", labelFr: "Score URI", value: "72", isIndex: true }
    ],
    timeframe: "Q2-Q4 2024"
  },
  {
    id: 2,
    company: "Auto Series",
    sector: "Automotive Parts",
    sectorFr: "Pièces Automobiles",
    region: "Grand Est",
    challenge: "Weak after-sales service visibility reducing trust in long-term technical partnerships.",
    challengeFr: "Faible visibilité du service après-vente réduisant la confiance dans les partenariats techniques à long terme.",
    intervention: "Service process documentation + proof blocks integration",
    interventionFr: "Documentation du processus de service + intégration des blocs de preuve",
    metrics: [
      { label: "SAV Lead Generation", labelFr: "Génération de Leads SAV", improvement: "+22%" },
      { label: "Technical Meetings Booked", labelFr: "Réunions Techniques Réservées", improvement: "+15%" },
      { label: "DRS Score", labelFr: "Score DRS", value: "3.5", isIndex: true }
    ],
    timeframe: "Q1-Q3 2024"
  },
  {
    id: 3,
    company: "Medical Turning",
    sector: "Medical Device Precision",
    sectorFr: "Précision Dispositifs Médicaux",
    region: "Jura / Haute-Savoie",
    challenge: "High initial contact drop-off due to unclear qualification pathways for sensitive medical applications.",
    challengeFr: "Fort taux d'abandon au contact initial dû à des parcours de qualification peu clairs pour les applications médicales sensibles.",
    intervention: "Scenario-based navigation + decision gates",
    interventionFr: "Navigation basée sur les scénarios + portes de décision",
    metrics: [
      { label: "Contact-to-Call Conversion", labelFr: "Conversion Contact-Appel", improvement: "+18%" },
      { label: "Qualified Lead Rate", labelFr: "Taux de Leads Qualifiés", improvement: "+24%" },
      { label: "URI Score", labelFr: "Score URI", value: "68", isIndex: true }
    ],
    timeframe: "Q2-Q4 2024"
  },
  {
    id: 4,
    company: "Workshop Integrator",
    sector: "Turnkey Integration",
    sectorFr: "Intégration Clé en Main",
    region: "France (National)",
    challenge: "Long-cycle decisions stalling due to uncertainty around project complexity and timelines.",
    challengeFr: "Décisions à cycle long bloquées par l'incertitude autour de la complexité des projets et des calendriers.",
    intervention: "Process flowcharts + timeline transparency + proof integration",
    interventionFr: "Diagrammes de flux processus + transparence calendaire + intégration des preuves",
    metrics: [
      { label: "6-12 Month Pipeline Leads", labelFr: "Leads Pipeline 6-12 Mois", improvement: "+20%" },
      { label: "Qualification Drop-off", labelFr: "Abandon de Qualification", improvement: "-12%" },
      { label: "DRS Score", labelFr: "Score DRS", value: "4.0", isIndex: true }
    ],
    timeframe: "Q1-Q4 2024"
  },
  {
    id: 5,
    company: "Sawing & Storage",
    sector: "Material Handling Systems",
    sectorFr: "Systèmes de Manutention",
    region: "Hauts-de-France",
    challenge: "Operational decision-makers unable to assess ROI impact from standard product catalogs.",
    challengeFr: "Décideurs opérationnels incapables d'évaluer l'impact ROI à partir de catalogues produits standard.",
    intervention: "Industry scenario pages + operational KPI proof blocks",
    interventionFr: "Pages scénarios sectoriels + blocs de preuve KPI opérationnels",
    metrics: [
      { label: "Material Loss Reduction", labelFr: "Réduction des Pertes Matières", improvement: "-6%" },
      { label: "Handling Time Improvement", labelFr: "Amélioration Temps de Manutention", improvement: "-18%" },
      { label: "URI Score", labelFr: "Score URI", value: "64", isIndex: true }
    ],
    timeframe: "Q3 2024 - Q1 2025"
  }
];

// Governance rule widget data - Bilingual
export const governanceMetrics = {
  explicit: [
    { label: "Response Timeframes", labelFr: "Délais de Réponse" },
    { label: "Conversion Rates", labelFr: "Taux de Conversion" },
    { label: "Request Volumes", labelFr: "Volumes de Demandes" },
    { label: "Navigation Patterns", labelFr: "Schémas de Navigation" },
    { label: "Appointment Bookings", labelFr: "Réservations de Rendez-vous" },
    { label: "Processing Times", labelFr: "Temps de Traitement" }
  ],
  indexed: [
    { label: "URI (Uncertainty Reduction Index)", labelFr: "URI (Indice de Réduction d'Incertitude)" },
    { label: "DRS (Decision Readiness Score)", labelFr: "DRS (Score de Maturité Décisionnelle)" },
    { label: "IPI (Industrial Pressure Index)", labelFr: "IPI (Indice de Pression Industrielle)" },
    { label: "Basket Complexity", labelFr: "Complexité du Panier" },
    { label: "Market Share Proxies", labelFr: "Proxies de Part de Marché" }
  ]
};
