// Regional industrial failure data for France (2021-2025)
// Realistic proxy data based on economic patterns

export const regionalData = [
  {
    region: "Auvergne-Rhône-Alpes",
    code: "ARA",
    years: {
      2021: { altares: 1240, banqueDeFrance: 1180 },
      2022: { altares: 1310, banqueDeFrance: 1265 },
      2023: { altares: 1455, banqueDeFrance: 1398 },
      2024: { altares: 1620, banqueDeFrance: 1572 },
      2025: { altares: 1780, banqueDeFrance: 1720 }
    }
  },
  {
    region: "Bourgogne-Franche-Comté",
    code: "BFC",
    years: {
      2021: { altares: 420, banqueDeFrance: 398 },
      2022: { altares: 445, banqueDeFrance: 428 },
      2023: { altares: 492, banqueDeFrance: 475 },
      2024: { altares: 548, banqueDeFrance: 532 },
      2025: { altares: 595, banqueDeFrance: 578 }
    }
  },
  {
    region: "Bretagne",
    code: "BRE",
    years: {
      2021: { altares: 310, banqueDeFrance: 295 },
      2022: { altares: 328, banqueDeFrance: 315 },
      2023: { altares: 365, banqueDeFrance: 352 },
      2024: { altares: 412, banqueDeFrance: 398 },
      2025: { altares: 445, banqueDeFrance: 432 }
    }
  },
  {
    region: "Centre-Val de Loire",
    code: "CVL",
    years: {
      2021: { altares: 285, banqueDeFrance: 272 },
      2022: { altares: 298, banqueDeFrance: 288 },
      2023: { altares: 335, banqueDeFrance: 322 },
      2024: { altares: 375, banqueDeFrance: 362 },
      2025: { altares: 410, banqueDeFrance: 398 }
    }
  },
  {
    region: "Corse",
    code: "COR",
    years: {
      2021: { altares: 18, banqueDeFrance: 16 },
      2022: { altares: 20, banqueDeFrance: 18 },
      2023: { altares: 22, banqueDeFrance: 21 },
      2024: { altares: 25, banqueDeFrance: 24 },
      2025: { altares: 28, banqueDeFrance: 27 }
    }
  },
  {
    region: "Grand Est",
    code: "GES",
    years: {
      2021: { altares: 820, banqueDeFrance: 785 },
      2022: { altares: 872, banqueDeFrance: 842 },
      2023: { altares: 968, banqueDeFrance: 935 },
      2024: { altares: 1085, banqueDeFrance: 1052 },
      2025: { altares: 1190, banqueDeFrance: 1158 }
    }
  },
  {
    region: "Hauts-de-France",
    code: "HDF",
    years: {
      2021: { altares: 945, banqueDeFrance: 902 },
      2022: { altares: 998, banqueDeFrance: 962 },
      2023: { altares: 1105, banqueDeFrance: 1068 },
      2024: { altares: 1238, banqueDeFrance: 1202 },
      2025: { altares: 1355, banqueDeFrance: 1320 }
    }
  },
  {
    region: "Île-de-France",
    code: "IDF",
    years: {
      2021: { altares: 1580, banqueDeFrance: 1520 },
      2022: { altares: 1672, banqueDeFrance: 1625 },
      2023: { altares: 1855, banqueDeFrance: 1798 },
      2024: { altares: 2085, banqueDeFrance: 2022 },
      2025: { altares: 2290, banqueDeFrance: 2228 }
    }
  },
  {
    region: "Normandie",
    code: "NOR",
    years: {
      2021: { altares: 425, banqueDeFrance: 408 },
      2022: { altares: 452, banqueDeFrance: 438 },
      2023: { altares: 502, banqueDeFrance: 485 },
      2024: { altares: 562, banqueDeFrance: 545 },
      2025: { altares: 615, banqueDeFrance: 598 }
    }
  },
  {
    region: "Nouvelle-Aquitaine",
    code: "NAQ",
    years: {
      2021: { altares: 685, banqueDeFrance: 652 },
      2022: { altares: 725, banqueDeFrance: 698 },
      2023: { altares: 805, banqueDeFrance: 778 },
      2024: { altares: 905, banqueDeFrance: 878 },
      2025: { altares: 990, banqueDeFrance: 962 }
    }
  },
  {
    region: "Occitanie",
    code: "OCC",
    years: {
      2021: { altares: 720, banqueDeFrance: 688 },
      2022: { altares: 762, banqueDeFrance: 735 },
      2023: { altares: 845, banqueDeFrance: 818 },
      2024: { altares: 948, banqueDeFrance: 922 },
      2025: { altares: 1040, banqueDeFrance: 1012 }
    }
  },
  {
    region: "Pays de la Loire",
    code: "PDL",
    years: {
      2021: { altares: 445, banqueDeFrance: 425 },
      2022: { altares: 472, banqueDeFrance: 455 },
      2023: { altares: 525, banqueDeFrance: 508 },
      2024: { altares: 590, banqueDeFrance: 572 },
      2025: { altares: 645, banqueDeFrance: 628 }
    }
  },
  {
    region: "Provence-Alpes-Côte d'Azur",
    code: "PAC",
    years: {
      2021: { altares: 892, banqueDeFrance: 852 },
      2022: { altares: 945, banqueDeFrance: 912 },
      2023: { altares: 1048, banqueDeFrance: 1015 },
      2024: { altares: 1175, banqueDeFrance: 1142 },
      2025: { altares: 1285, banqueDeFrance: 1252 }
    }
  }
];

// National trend data (all sectors)
export const nationalTrendData = [
  {
    year: 2021,
    sauvegardes: 380,
    rjDirectes: 6842,
    ljDirectes: 28450,
    total: 35672
  },
  {
    year: 2022,
    sauvegardes: 412,
    rjDirectes: 7285,
    ljDirectes: 30128,
    total: 37825
  },
  {
    year: 2023,
    sauvegardes: 458,
    rjDirectes: 8092,
    ljDirectes: 33542,
    total: 42092
  },
  {
    year: 2024,
    sauvegardes: 512,
    rjDirectes: 9082,
    ljDirectes: 37685,
    total: 47279
  },
  {
    year: 2025,
    sauvegardes: 562,
    rjDirectes: 9958,
    ljDirectes: 41252,
    total: 51772
  }
];

// Calculate IPI (Industrial Pressure Index) for a region/year
export const calculateIPI = (region, year, source = 'altares') => {
  const regionData = regionalData.find(r => r.region === region);
  if (!regionData) return 0;

  const currentValue = regionData.years[year]?.[source] || 0;
  const previousValue = regionData.years[year - 1]?.[source] || currentValue;
  
  // Calculate YoY variation
  const yoyVariation = previousValue > 0 
    ? ((currentValue - previousValue) / previousValue) * 100 
    : 0;
  
  // Normalize to 0-100 scale (simplified composite)
  // Base value normalized + YoY impact
  const baseScore = Math.min((currentValue / 2500) * 60, 60);
  const variationScore = Math.min(Math.max(yoyVariation * 2, 0), 40);
  
  return Math.round(baseScore + variationScore);
};
