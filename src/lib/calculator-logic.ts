import type { CalculatorAnswers, PlanRecommendation, PlanType } from "./calculator-types";

const PLANS = {
  starter: {
    name: "Starter",
    price: 3050,
    storage: "20 GB",
    traffic: "Illimité",
    emails: 5,
    features: ["SSL gratuit", "WordPress 1-clic", "Support 24/7"],
  },
  business: {
    name: "Business",
    price: 6050,
    storage: "50 GB",
    traffic: "Illimité",
    emails: 20,
    features: ["SSL gratuit", "WordPress optimisé", "Support prioritaire", "Sauvegardes hebdo"],
  },
  premium: {
    name: "Premium",
    price: 9850,
    storage: "100 GB",
    traffic: "Illimité",
    emails: 50,
    features: ["SSL gratuit", "WordPress + cache", "Support VIP", "Sauvegardes quotidiennes", "CDN inclus"],
  },
  vps: {
    name: "VPS Standard",
    price: 15000,
    storage: "50 GB SSD",
    traffic: "Illimité",
    emails: "Illimité",
    features: ["Accès root", "IP dédiée", "Resources garanties", "Support technique", "Snapshots"],
  },
};

export function calculateRecommendation(answers: CalculatorAnswers): PlanRecommendation {
  const { projectType, traffic, features, technicalLevel } = answers;

  let recommendedPlan: PlanType = "starter";
  const reasons: string[] = [];
  let confidence = 90;

  // Logique principale de recommandation
  if (projectType === "webapp" || technicalLevel === "advanced") {
    recommendedPlan = "vps";
    reasons.push("Application web nécessite des ressources dédiées");
    reasons.push("Accès root complet pour configuration avancée");
    confidence = 95;
  } else if (projectType === "ecommerce") {
    if (traffic === "low") {
      recommendedPlan = "business";
      reasons.push("E-commerce nécessite performance et fiabilité");
      reasons.push("Ressources suffisantes pour démarrer votre boutique");
    } else {
      recommendedPlan = "premium";
      reasons.push("Trafic e-commerce élevé requiert resources maximales");
      reasons.push("CDN inclus pour chargement rapide des produits");
      confidence = 98;
    }
  } else if (traffic === "massive" || traffic === "very-high") {
    recommendedPlan = "premium";
    reasons.push(`Trafic de ${traffic === "massive" ? "+200K" : "50-200K"} visiteurs/mois nécessite Premium`);
    reasons.push("Performance garantie même aux heures de pointe");
    confidence = 95;
  } else if (traffic === "high") {
    recommendedPlan = "business";
    reasons.push("10-50K visiteurs/mois = forfait Business recommandé");
    reasons.push("50GB de stockage pour croissance future");
  } else if (traffic === "medium") {
    recommendedPlan = "business";
    reasons.push("1-10K visiteurs/mois idéal pour Business");
    reasons.push("Équilibre parfait performance/prix");
  } else {
    // traffic === "low"
    if (projectType === "blog" || projectType === "community") {
      recommendedPlan = "business";
      reasons.push("Blog/communauté va croître rapidement");
      reasons.push("Business offre marge de croissance confortable");
    } else {
      recommendedPlan = "starter";
      reasons.push("Trafic modéré = Starter suffisant pour démarrer");
      reasons.push("Possibilité d'upgrade plus tard");
    }
  }

  // Ajustements basés sur fonctionnalités
  const needsBackup = features.includes("backup");
  const needsCDN = features.includes("cdn");
  const needsPriority = features.includes("priority");

  if ((needsBackup || needsCDN || needsPriority) && recommendedPlan === "starter") {
    recommendedPlan = "business";
    reasons.push("Fonctionnalités premium requises");
    confidence = 88;
  }

  if ((needsBackup && needsCDN) && recommendedPlan === "business") {
    recommendedPlan = "premium";
    reasons.push("Sauvegardes quotidiennes + CDN = Premium recommandé");
    confidence = 92;
  }

  // Construire la recommandation
  const plan = PLANS[recommendedPlan];
  const result: PlanRecommendation = {
    plan: recommendedPlan,
    planName: plan.name,
    price: plan.price,
    confidence,
    reasons,
    features: [
      `${plan.storage} stockage SSD`,
      `${plan.traffic} bande passante`,
      `${plan.emails} comptes emails`,
      ...plan.features,
    ],
    alternatives: [],
  };

  // Alternatives
  if (recommendedPlan === "business") {
    result.alternatives.push({
      plan: "starter",
      reason: "Plus économique si budget serré",
    });
    result.alternatives.push({
      plan: "premium",
      reason: "Plus de puissance si croissance rapide prévue",
    });
  } else if (recommendedPlan === "starter") {
    result.alternatives.push({
      plan: "business",
      reason: "Marge de croissance 200% recommandée",
    });
  } else if (recommendedPlan === "premium") {
    result.alternatives.push({
      plan: "business",
      reason: "Suffisant si trafic surestimé",
    });
  }

  // Upgrade suggéré
  if (recommendedPlan === "business" && !needsBackup) {
    result.upgrade = {
      plan: "premium",
      reason: "Sauvegardes quotidiennes automatiques + CDN",
      extraCost: PLANS.premium.price - PLANS.business.price,
    };
  }

  // Warning si sous-dimensionné
  if (recommendedPlan === "starter" && (traffic === "medium" || projectType === "ecommerce")) {
    result.warning = "Ce forfait pourrait être insuffisant si votre trafic augmente rapidement";
  }

  return result;
}

export function getPlanDetails(plan: PlanType) {
  return PLANS[plan];
}