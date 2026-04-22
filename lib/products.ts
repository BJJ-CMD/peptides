export const products = [
  {
    id: "fat-loss-1",
    name: "Fat Loss Peptide",
    dosage: "20mg",
    price: "₼79.99",
    description: "Supports metabolism and appetite control",
  },
  {
    id: "recovery-1",
    name: "Recovery Peptide",
    dosage: "10mg",
    price: "₼59.99",
    description: "Accelerates tissue repair and recovery",
  },
  {
    id: "longevity-1",
    name: "Longevity Peptide",
    dosage: "15mg",
    price: "₼69.99",
    description: "Supports cellular health and aging",
  },
  {
    id: "performance-1",
    name: "Performance Peptide",
    dosage: "10mg",
    price: "₼64.99",
    description: "Enhances physical performance and endurance",
  },
]

export interface Product {
  id: string
  name: string
  dosage: string
  price: number
  /** Product photo path or URL; empty string = no image (placeholder in UI). */
  image: string
  shortDescription: string
  benefits: string[]
  purity: string
  category: string
  protocol: {
    dosage: string
    frequency: string
    intendedUse: string
  }
  safety: {
    avoid: string[]
    notes: string
  }
  detailedBenefits: {
    title: string
    description: string
  }[]
  relatedProducts: string[]
}

const productCatalog: Record<string, Product> = {
  "retatrutide-20mg": {
    id: "retatrutide-20mg",
    name: "Retatrutide",
    dosage: "20 mg",
    price: 400,
    image: "/retatrutide.png",
    shortDescription:
      "A triple-agonist peptide targeting GLP-1, GIP, and glucagon receptors for comprehensive metabolic support. It is studied for its potential to improve appetite regulation, increase energy expenditure, and support healthy blood glucose control.",
    benefits: ["GLP-1 / GIP / Glucagon", "Fat Loss", "Appetite Control"],
    purity: "99%+",
    category: "fat-loss",
    protocol: {
      dosage: "0.5mg - 12mg weekly (titrated)",
      frequency: "Once weekly subcutaneous injection",
      intendedUse: "Research into metabolic regulation and body composition",
    },
    safety: {
      avoid: ["Individuals with history of medullary thyroid carcinoma", "Those with MEN2 syndrome", "Pregnant or nursing individuals"],
      notes: "Start with lower doses and titrate gradually. Monitor for GI effects during initial phase.",
    },
    detailedBenefits: [
      {
        title: "Triple Receptor Activation",
        description: "Targets GLP-1, GIP, and glucagon receptors simultaneously for enhanced metabolic effects.",
      },
      {
        title: "Appetite Regulation",
        description: "Supports natural appetite control through multiple signaling pathways.",
      },
      {
        title: "Metabolic Enhancement",
        description: "Research suggests improved glucose metabolism and lipid profiles.",
      },
      {
        title: "Body Composition",
        description: "Studies indicate potential for significant fat mass reduction while preserving lean tissue.",
      },
    ],
    relatedProducts: ["aod-9604", "bpc-157-10mg", "cjc-1295-ipamorelin"],
  },
  "bpc-157-10mg": {
    id: "bpc-157-10mg",
    name: "BPC-157",
    dosage: "10 mg",
    price: 49.99,
    image: "/bpc-157.png",
    shortDescription:
      "Body Protection Compound-157, a pentadecapeptide derived from human gastric juice with tissue-protective properties. It is also researched for soft-tissue healing, tendon and ligament support, gut-health pathways, and angiogenesis-related recovery signaling.",
    benefits: ["Tissue Repair", "Gut Health", "Recovery"],
    purity: "99%+",
    category: "recovery",
    protocol: {
      dosage: "250-500mcg per day",
      frequency: "Once or twice daily, subcutaneous or intramuscular",
      intendedUse: "Research into tissue healing, gut health, and recovery mechanisms",
    },
    safety: {
      avoid: ["Those with active cancer", "Individuals on blood thinners without medical supervision"],
      notes: "Generally well-tolerated in research settings. Can be administered locally near injury site.",
    },
    detailedBenefits: [
      {
        title: "Accelerated Tissue Repair",
        description: "Supports healing of tendons, ligaments, muscles, and other connective tissues.",
      },
      {
        title: "Gut Health Support",
        description: "Research indicates protective effects on gastric mucosa and intestinal lining.",
      },
      {
        title: "Anti-Inflammatory Properties",
        description: "May help modulate inflammatory responses during recovery.",
      },
      {
        title: "Neuroprotective Potential",
        description: "Emerging research suggests benefits for nerve regeneration and brain health.",
      },
    ],
    relatedProducts: ["tb-500-10mg", "wolverine-10mg", "cjc-1295-ipamorelin"],
  },
  "tb-500-10mg": {
    id: "tb-500-10mg",
    name: "TB-500",
    dosage: "10 mg",
    price: 54.99,
    image: "/tb-500.png",
    shortDescription:
      "Thymosin Beta-4 fragment, a naturally occurring peptide involved in tissue repair and cell migration. It is studied to support injury recovery, inflammation control, angiogenesis, and muscle, tendon, and ligament repair pathways.",
    benefits: ["Muscle Repair", "Flexibility", "Recovery"],
    purity: "99%+",
    category: "recovery",
    protocol: {
      dosage: "2-5mg twice weekly (loading), 2mg weekly (maintenance)",
      frequency: "Subcutaneous injection, loading phase followed by maintenance",
      intendedUse: "Research into tissue regeneration, flexibility, and systemic healing",
    },
    safety: {
      avoid: ["Those with active cancer", "Individuals with cardiovascular conditions without supervision"],
      notes: "Often used in combination with BPC-157 for synergistic effects.",
    },
    detailedBenefits: [
      {
        title: "Systemic Healing",
        description: "Travels throughout the body to support healing wherever needed.",
      },
      {
        title: "Flexibility Improvement",
        description: "Research suggests improved tissue elasticity and range of motion.",
      },
      {
        title: "Cardiac Protection",
        description: "Studies indicate potential cardioprotective properties.",
      },
      {
        title: "Hair Growth Support",
        description: "Some research suggests benefits for hair follicle health.",
      },
    ],
    relatedProducts: ["bpc-157-10mg", "wolverine-10mg", "cjc-1295-ipamorelin"],
  },
  "wolverine-10mg": {
    id: "wolverine-10mg",
    name: "Wolverine",
    dosage: "20 mg",
    price: 250,
    image: "/wolverine.png",
    shortDescription:
      "A synergistic blend of BPC-157 (5mg) and TB-500 (5mg) for comprehensive recovery support. This stack is researched for faster injury recovery, tissue repair, inflammation reduction, and both local and systemic healing responses.",
    benefits: ["Tissue Repair", "Recovery", "Healing"],
    purity: "99%+",
    category: "recovery",
    protocol: {
      dosage: "250-500mcg daily or 2-5mg twice weekly",
      frequency: "Subcutaneous injection, flexible dosing based on research goals",
      intendedUse: "Research into synergistic healing effects of combined peptides",
    },
    safety: {
      avoid: ["Those with active cancer", "Individuals on blood thinners without supervision"],
      notes: "Combines the localized effects of BPC-157 with systemic benefits of TB-500.",
    },
    detailedBenefits: [
      {
        title: "Synergistic Recovery",
        description: "Combines local and systemic healing mechanisms for enhanced results.",
      },
      {
        title: "Convenient Dosing",
        description: "Pre-mixed formula eliminates the need for separate reconstitution.",
      },
      {
        title: "Comprehensive Healing",
        description: "Addresses both targeted and whole-body recovery needs.",
      },
      {
        title: "Research Efficiency",
        description: "Ideal for studies examining combined peptide effects.",
      },
    ],
    relatedProducts: ["bpc-157-10mg", "tb-500-10mg", "cjc-1295-ipamorelin"],
  },
  "mots-c-10mg": {
    id: "mots-c-10mg",
    name: "MOTS-c",
    dosage: "30 mg",
    price: 250,
    image: "/motsc.png",
    shortDescription:
      "A mitochondrial-derived peptide studied for metabolic regulation, cellular energy signaling, and resilience. MOTS-c is a 16-amino-acid mitochondrial peptide explored for fat-burning support, insulin sensitivity, oxidative-stress resistance, bone-metabolism signaling, and exercise-mimicking metabolic flexibility.",
    benefits: ["Mitochondrial Support", "Metabolic Health", "Endurance"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "5-10mg per week",
      frequency: "2-3 subcutaneous injections weekly",
      intendedUse: "Research into metabolic adaptation, endurance signaling, and healthy aging",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with uncontrolled metabolic conditions"],
      notes:
        "Research protocols often use progressive titration and periodic metabolic monitoring for consistency.",
    },
    detailedBenefits: [
      {
        title: "Mitochondrial Signaling",
        description:
          "Investigated for its role in mitochondrial communication and cellular energy optimization.",
      },
      {
        title: "Metabolic Regulation",
        description:
          "Research suggests potential support for glucose handling and broader metabolic flexibility.",
      },
      {
        title: "Exercise Adaptation",
        description:
          "Explored for improved adaptation to physical stress and endurance-related pathways.",
      },
      {
        title: "Healthy Aging Support",
        description:
          "Studied for possible benefits in age-related declines in metabolic and cellular function.",
      },
    ],
    relatedProducts: ["retatrutide-20mg", "cjc-1295-ipamorelin", "aod-9604"],
  },
  "glow-10mg": {
    id: "glow-10mg",
    name: "GLOW",
    dosage: "70 mg",
    price: 250,
    image: "/GLOW.png",
    shortDescription:
      "A multi-pathway peptide blend researched for skin quality, cellular renewal, and cosmetic wellness support. GLOW combines GHK-Cu, BPC-157, and TB-500 in research protocols focused on collagen support, tissue repair, and skin appearance.",
    benefits: ["Skin Support", "Cellular Renewal", "Radiance"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 subcutaneous injections weekly",
      intendedUse: "Research into skin appearance, recovery signaling, and anti-aging pathways",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with active dermatologic conditions without supervision"],
      notes:
        "Research protocols generally begin with conservative dosing and consistent observation windows.",
    },
    detailedBenefits: [
      {
        title: "Skin Texture Support",
        description:
          "Studied for support of collagen-related pathways associated with smoother skin texture.",
      },
      {
        title: "Cellular Renewal",
        description:
          "Investigated for potential benefits to cellular turnover and visible skin vitality.",
      },
      {
        title: "Recovery Signaling",
        description:
          "Explored for support of restorative signaling relevant to healthy tissue appearance.",
      },
      {
        title: "Cosmetic Wellness",
        description:
          "May complement broader research protocols focused on anti-aging and skin radiance outcomes.",
      },
    ],
    relatedProducts: ["mots-c-10mg", "cjc-1295-ipamorelin", "retatrutide-20mg"],
  },
  "epithalon-10mg": {
    id: "epithalon-10mg",
    name: "Epithalon",
    dosage: "50 mg",
    price: 280,
    image: "/epithalon.png",
    shortDescription:
      "A synthetic tetrapeptide studied for cellular regulation, longevity pathways, and recovery-focused research protocols. Epithalon is also investigated for telomerase expression, melatonin regulation, immune support, and stress-resilience signaling.",
    benefits: ["Longevity Research", "Cellular Support", "Recovery"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "5-10mg weekly",
      frequency: "2-3 subcutaneous administrations per week",
      intendedUse: "Research into cellular signaling, recovery dynamics, and healthy aging support",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with unresolved endocrine conditions without supervision"],
      notes:
        "Research use generally favors consistent timing, controlled storage, and routine observation windows.",
    },
    detailedBenefits: [
      {
        title: "Cellular Signaling Support",
        description:
          "Investigated for interaction with pathways involved in cellular resilience and adaptive balance.",
      },
      {
        title: "Longevity Pathway Research",
        description:
          "Explored in studies focused on healthy aging markers and long-term cellular maintenance.",
      },
      {
        title: "Recovery Optimization",
        description:
          "Studied for potential support of recovery-related signaling after metabolic or physical stress.",
      },
      {
        title: "Research Versatility",
        description:
          "Compatible with broader peptide research stacks targeting vitality and cellular performance.",
      },
    ],
    relatedProducts: ["mots-c-10mg", "glow-10mg", "cjc-1295-ipamorelin"],
  },
  "tesamorelin-10mg": {
    id: "tesamorelin-10mg",
    name: "TESAMORELIN",
    dosage: "10 mg",
    price: 200,
    image: "/tesamorelin.png",
    shortDescription:
      "A growth hormone-releasing peptide studied for metabolic signaling, body-composition support, and recovery-focused research. Tesamorelin is a synthetic GHRH analog researched for natural growth-hormone stimulation and visceral-fat reduction pathways.",
    benefits: ["Metabolic Research", "Body Composition", "Cellular Support"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into metabolic pathways, visceral-fat signaling, and cellular resilience",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with unmanaged endocrine conditions without supervision"],
      notes:
        "Standard research handling emphasizes controlled storage, consistent timing, and structured observation windows.",
    },
    detailedBenefits: [
      {
        title: "Metabolic Signaling",
        description:
          "Explored for influence on growth-hormone-related pathways associated with metabolic regulation.",
      },
      {
        title: "Body Composition Support",
        description:
          "Investigated in studies focused on visceral-fat and lean-mass balance over structured timelines.",
      },
      {
        title: "Cellular Resilience",
        description:
          "Studied for potential support of cellular recovery processes under metabolic stress conditions.",
      },
      {
        title: "Protocol Compatibility",
        description:
          "Frequently included in broader research stacks targeting long-term metabolic and wellness outcomes.",
      },
    ],
    relatedProducts: ["retatrutide-20mg", "epithalon-10mg", "mots-c-10mg"],
  },
  "ss-31-10mg": {
    id: "ss-31-10mg",
    name: "SS-31",
    dosage: "10 mg",
    price: 109.99,
    image: "/ss-31.png",
    shortDescription:
      "A mitochondria-targeted peptide researched for cellular energy performance, oxidative-stress signaling, and recovery support. SS-31 (Elamipretide) is explored as a mitochondrial antioxidant linked to ATP-support and oxidative-stress reduction pathways.",
    benefits: ["Mitochondrial Support", "Cellular Energy", "Recovery"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into mitochondrial function, recovery signaling, and cellular resilience",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with unresolved mitochondrial disorders without supervision"],
      notes:
        "Research workflows prioritize controlled storage, precise handling, and consistent observation timelines.",
    },
    detailedBenefits: [
      {
        title: "Mitochondrial Targeting",
        description:
          "Investigated for selective interaction with mitochondrial pathways tied to cellular efficiency.",
      },
      {
        title: "Energy Pathway Support",
        description:
          "Explored for support of ATP-related signaling and broader metabolic energy balance.",
      },
      {
        title: "Oxidative Stress Research",
        description:
          "Studied for potential modulation of oxidative-stress markers in high-demand conditions.",
      },
      {
        title: "Recovery Dynamics",
        description:
          "May support research models focused on faster recovery after metabolic or physical load.",
      },
    ],
    relatedProducts: ["nad-plus-10mg", "mots-c-10mg", "epithalon-10mg"],
  },
  "thymosin-alpha-10mg": {
    id: "thymosin-alpha-10mg",
    name: "Thymosin-Alpha",
    dosage: "10 mg",
    price: 250,
    image: "/thymosin-alpha.png",
    shortDescription:
      "A thymic peptide analog studied for immune-system signaling, recovery pathways, and cellular regulation. Thymosin-Alpha is a 28-amino-acid thymus-derived peptide investigated for immune modulation, infection-response support, angiogenesis, wound-healing dynamics, and inflammation control.",
    benefits: ["Immune Research", "Recovery", "Cellular Support"],
    purity: "99%+",
    category: "recovery",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into immune modulation, tissue recovery, and adaptive cellular responses",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with active autoimmune instability without supervision"],
      notes:
        "Use controlled handling and temperature-stable storage across all research cycles.",
    },
    detailedBenefits: [
      {
        title: "Immune Signaling Support",
        description:
          "Explored for modulation of immune-related signaling pathways in controlled models.",
      },
      {
        title: "Cellular Coordination",
        description:
          "Investigated for effects on coordinated cellular responses during stress and recovery.",
      },
      {
        title: "Recovery Pathway Research",
        description:
          "Studied for support of post-stress recovery and physiological balance markers.",
      },
      {
        title: "Adaptive Response Potential",
        description:
          "May complement broader studies focused on immune resilience and long-term stability.",
      },
    ],
    relatedProducts: ["wolverine-10mg", "bpc-157-10mg", "ss-31-10mg"],
  },
  "nad-plus-10mg": {
    id: "nad-plus-10mg",
    name: "NAD+",
    dosage: "1000 mg",
    price: 300,
    image: "/nad-plus.png",
    shortDescription:
      "A central metabolic coenzyme studied for cellular energy turnover, redox balance, and healthy-aging pathways. NAD+ is essential in cellular ATP production, DNA-repair systems, and mitochondrial function, and is researched for age-related metabolic decline and chronic-inflammation resilience.",
    benefits: ["Cellular Energy", "Longevity Research", "Metabolic Support"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into energy metabolism, redox signaling, and longevity-focused cellular pathways",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with unmanaged metabolic conditions without supervision"],
      notes:
        "Maintain consistent protocol timing and controlled storage conditions for reliable observations.",
    },
    detailedBenefits: [
      {
        title: "Energy Metabolism Research",
        description:
          "Studied for involvement in ATP production and downstream energy-signaling pathways.",
      },
      {
        title: "Redox Balance",
        description:
          "Investigated for contribution to cellular redox regulation and oxidative equilibrium.",
      },
      {
        title: "Longevity Signaling",
        description:
          "Explored in models assessing age-related cellular performance and maintenance.",
      },
      {
        title: "Metabolic Resilience",
        description:
          "May support broader studies on adaptive metabolic response under physiological stress.",
      },
    ],
    relatedProducts: ["ss-31-10mg", "epithalon-10mg", "mots-c-10mg"],
  },
  "melanotan-2-10mg": {
    id: "melanotan-2-10mg",
    name: "Melanotan 2",
    dosage: "10 mg",
    price: 100,
    image: "/melanotan-2.png",
    shortDescription:
      "A melanocortin-pathway peptide researched for receptor signaling, pigmentation studies, and cellular response analysis. Melanotan 2 is often researched for melanin-production pathways associated with tanning response.",
    benefits: ["Peptide Research", "Skin Pathways", "Cellular Study"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into melanocortin signaling, receptor activity, and skin-pathway dynamics",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with active dermatologic instability without supervision"],
      notes:
        "Follow standardized handling and controlled-storage procedures across all research batches.",
    },
    detailedBenefits: [
      {
        title: "Melanocortin Pathway Study",
        description:
          "Investigated for receptor-level signaling relevant to pigmentation and adaptive responses.",
      },
      {
        title: "Cellular Response Mapping",
        description:
          "Explored for pathway-level effects under controlled environmental and metabolic conditions.",
      },
      {
        title: "Skin Biology Research",
        description:
          "Studied as part of broader programs on skin-associated signaling and cellular behavior.",
      },
      {
        title: "Protocol Compatibility",
        description:
          "Often included in peptide-research stacks focused on pathway interaction and resilience.",
      },
    ],
    relatedProducts: ["ghk-cu-10mg", "glow-10mg", "epithalon-10mg"],
  },
  "ghk-cu-10mg": {
    id: "ghk-cu-10mg",
    name: "GHK-CU",
    dosage: "50 mg",
    price: 100,
    image: "/ghk-cu.png",
    shortDescription:
      "A copper-peptide complex studied for tissue signaling, skin-related pathways, and cellular renewal support. GHK-Cu is a naturally occurring copper tripeptide explored for collagen support, skin appearance, antioxidant signaling, anti-inflammatory effects, and hair-follicle research.",
    benefits: ["Skin Research", "Cellular Renewal", "Tissue Support"],
    purity: "99%+",
    category: "longevity",
    protocol: {
      dosage: "2-5mg weekly",
      frequency: "1-2 administrations weekly in controlled research settings",
      intendedUse: "Research into tissue signaling, extracellular matrix support, and skin-pathway resilience",
    },
    safety: {
      avoid: ["Pregnant or nursing individuals", "Those with unresolved copper-metabolism conditions without supervision"],
      notes:
        "Use temperature-controlled storage and documented handling steps for protocol consistency.",
    },
    detailedBenefits: [
      {
        title: "Tissue Signaling Support",
        description:
          "Investigated for pathway support associated with tissue remodeling and structural balance.",
      },
      {
        title: "Cellular Renewal",
        description:
          "Explored for contribution to cellular turnover and recovery-linked signaling.",
      },
      {
        title: "Skin Pathway Research",
        description:
          "Studied for effects on skin-associated extracellular matrix and appearance-related markers.",
      },
      {
        title: "Peptide Stack Versatility",
        description:
          "May integrate into broader research protocols focused on resilience and regenerative signaling.",
      },
    ],
    relatedProducts: ["glow-10mg", "melanotan-2-10mg", "thymosin-alpha-10mg"],
  },
  "bacteriostatic-water": {
    id: "bacteriostatic-water",
    name: "Bacteriostatic Water",
    dosage: "3 ml / 10 ml",
    price: 10,
    image: "/bacteriostatic-water.png",
    shortDescription:
      "Sterile bacteriostatic water for peptide reconstitution in controlled research protocols.",
    benefits: ["Reconstitution", "Lab Support", "Sterile Handling"],
    purity: "Sterile",
    category: "recovery",
    protocol: {
      dosage: "As required by protocol",
      frequency: "Use only during peptide reconstitution",
      intendedUse: "Laboratory peptide preparation and dilution workflows",
    },
    safety: {
      avoid: ["Non-sterile handling environments", "Use outside intended research handling practices"],
      notes: "Use sterile technique and follow laboratory handling standards.",
    },
    detailedBenefits: [
      {
        title: "Sterile Reconstitution Support",
        description: "Used to dissolve lyophilized peptides under controlled lab conditions.",
      },
      {
        title: "Protocol Consistency",
        description: "Helps maintain standardized preparation procedures across research cycles.",
      },
      {
        title: "Flexible Volume Options",
        description: "Available in 3 ml and 10 ml formats for different reconstitution needs.",
      },
      {
        title: "Lab Workflow Utility",
        description: "Supports clean and repeatable handling in peptide research setups.",
      },
    ],
    relatedProducts: ["retatrutide-20mg", "wolverine-10mg", "tb-500-10mg"],
  },
}

export function getProduct(id: string): Product | undefined {
  return productCatalog[id]
}

export function getRelatedProducts(productIds: string[]): Product[] {
  return productIds.map((id) => productCatalog[id]).filter(Boolean)
}

export function getAllProducts(): Product[] {
  return Object.values(productCatalog)
}
