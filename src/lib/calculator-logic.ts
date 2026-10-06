import type { CalculatorAnswers, PlanRecommendation, PlanType } from "./calculator-types";

const PLANS = {
  // Hébergement Web
  starter: {
    name: "Starter",
    category: "Hébergement Web",
    price: 3050,
    storage: "2 GB",
    traffic: "Illimité",
    emails: 10,
    databases: 1,
    features: ["SSL gratuit", "WordPress optimisé", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/starter",
  },
  evolution: {
    name: "Evolution",
    category: "Hébergement Web",
    price: 5800,
    storage: "300 GB",
    traffic: "Illimité",
    emails: 20,
    databases: 4,
    features: ["SSL gratuit", "WordPress optimisé", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/evolution",
  },
  premium: {
    name: "Premium",
    category: "Hébergement Web",
    price: 7500,
    storage: "500 GB",
    traffic: "Illimité",
    emails: 30,
    databases: 10,
    features: ["SSL gratuit", "WordPress optimisé", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/pro",
  },
  
  // Hébergement WordPress
  "wp-lanceur": {
    name: "WP Lanceur",
    category: "WordPress",
    price: 4700,
    storage: "10 GB",
    traffic: "Illimité",
    emails: 10,
    databases: 1,
    features: ["SSL gratuit", "Mise en scène WordPress", "WP-CLI & SSH", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-wordpress/wordpress-lanceur",
  },
  "wp-pro": {
    name: "WP Pro",
    category: "WordPress",
    price: 6200,
    storage: "30 GB",
    traffic: "Illimité",
    emails: 20,
    databases: 1,
    features: ["SSL gratuit", "Mise en scène WordPress", "WP-CLI & SSH", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-wordpress/wordpress-pro",
  },
  "wp-premium": {
    name: "WP Premium",
    category: "WordPress",
    price: 10500,
    storage: "Illimité",
    traffic: "Illimité",
    emails: 30,
    databases: 1,
    features: ["SSL gratuit", "Mise en scène WordPress", "WP-CLI & SSH", "Support 24/7"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-wordpress/wordpress-premium",
  },
  
  // VPS
  "vps-start": {
    name: "VPS Start",
    category: "VPS",
    price: 23900,
    storage: "50 GB SSD",
    traffic: "Illimité",
    emails: "Illimité",
    cpu: "2 cores",
    ram: "2 GB",
    features: ["Accès root SSH", "Anti-DDoS 1Tbit/s+", "RAID matériel", "Approvisionnement rapide"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/serveur-prive-virtuel/vps2",
  },
  "vps-business": {
    name: "VPS Business",
    category: "VPS",
    price: 37900,
    storage: "75 GB SSD",
    traffic: "Illimité",
    emails: "Illimité",
    cpu: "4 cores",
    ram: "4 GB",
    features: ["Accès root SSH", "Anti-DDoS 1Tbit/s+", "RAID matériel", "Approvisionnement rapide"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/serveur-prive-virtuel/vps4",
  },
  "vps-performance": {
    name: "VPS Performance",
    category: "VPS",
    price: 70900,
    storage: "100 GB SSD",
    traffic: "Illimité",
    emails: "Illimité",
    cpu: "6 cores",
    ram: "8 GB",
    features: ["Accès root SSH", "Anti-DDoS 1Tbit/s+", "RAID matériel", "Approvisionnement rapide"],
    url: "https://portail.spiderhoster.com/index.php?rp=/store/serveur-prive-virtuel/vps6-1",
  },
};

export function calculateRecommendation(answers: CalculatorAnswers): PlanRecommendation {
  const { projectType, traffic, features, technicalLevel } = answers;

  let recommendedPlan: PlanType = "starter";
  const reasons: string[] = [];
  let confidence = 90;
  
  const needsWordPress = features?.includes("wordpress") || false;

  // Logique principale de recommandation
  if (projectType === "webapp" || technicalLevel === "advanced") {
    recommendedPlan = "vps-business";
    reasons.push("Application web nécessite des ressources dédiées VPS");
    reasons.push("4 cores CPU + 4 GB RAM pour applications performantes");
    reasons.push("Accès root complet pour configuration avancée");
    confidence = 95;
  } else if (projectType === "ecommerce") {
    if (needsWordPress) {
      if (traffic === "low" || traffic === "medium") {
        recommendedPlan = "wp-pro";
        reasons.push("WordPress optimisé pour boutique WooCommerce");
        reasons.push("Mise en scène incluse pour tester avant publication");
      } else {
        recommendedPlan = "wp-premium";
        reasons.push("Trafic e-commerce élevé = WordPress Premium");
        reasons.push("Espace illimité pour produits et médias");
        confidence = 98;
      }
    } else {
      if (traffic === "low") {
        recommendedPlan = "evolution";
        reasons.push("E-commerce nécessite performance et fiabilité");
        reasons.push("300 GB pour catalogue produits et photos");
      } else {
        recommendedPlan = "premium";
        reasons.push("Trafic e-commerce élevé requiert Premium");
        reasons.push("500 GB + 30 emails pour équipe commerciale");
        confidence = 98;
      }
    }
  } else if (traffic === "massive" || traffic === "very-high") {
    if (needsWordPress) {
      recommendedPlan = "wp-premium";
      reasons.push("Trafic massif = WordPress Premium avec espace illimité");
      reasons.push("Performance maximale même aux heures de pointe");
    } else {
      recommendedPlan = "premium";
      reasons.push(`Trafic de ${traffic === "massive" ? "+200K" : "50-200K"} visiteurs/mois = Premium`);
      reasons.push("500 GB stockage + ressources optimales");
    }
    confidence = 95;
  } else if (traffic === "high") {
    if (needsWordPress) {
      recommendedPlan = "wp-pro";
      reasons.push("10-50K visiteurs/mois = WP Pro recommandé");
      reasons.push("30 GB + outils de gestion WordPress avancés");
    } else {
      recommendedPlan = "evolution";
      reasons.push("10-50K visiteurs/mois = Evolution recommandé");
      reasons.push("300 GB pour croissance future");
    }
  } else if (traffic === "medium") {
    if (needsWordPress) {
      recommendedPlan = "wp-lanceur";
      reasons.push("1-10K visiteurs/mois idéal pour WP Lanceur");
      reasons.push("Hébergement WordPress optimisé à prix accessible");
    } else {
      recommendedPlan = "evolution";
      reasons.push("1-10K visiteurs/mois = Evolution recommandé");
      reasons.push("Équilibre parfait performance/prix");
    }
  } else {
    // traffic === "low"
    if (needsWordPress) {
      if (projectType === "blog" || projectType === "community") {
        recommendedPlan = "wp-lanceur";
        reasons.push("Blog/communauté WordPress à petit budget");
        reasons.push("10 GB suffisant pour démarrer");
      } else {
        recommendedPlan = "wp-lanceur";
        reasons.push("WordPress optimisé pour site vitrine");
      }
    } else {
      if (projectType === "blog" || projectType === "community") {
        recommendedPlan = "evolution";
        reasons.push("Blog/communauté va croître rapidement");
        reasons.push("Evolution offre marge de croissance confortable");
      } else {
        recommendedPlan = "starter";
        reasons.push("Trafic modéré = Starter suffisant pour démarrer");
        reasons.push("2 GB pour site vitrine simple");
      }
    }
  }

  // Ajustements basés sur fonctionnalités
  const needsCDN = features?.includes("cdn") || false;
  const needsPriority = features?.includes("priority") || false;

  if ((needsCDN || needsPriority) && recommendedPlan === "starter") {
    recommendedPlan = "evolution";
    reasons.push("Fonctionnalités avancées requises");
    confidence = 88;
  }

  // Construire la recommandation
  const plan = PLANS[recommendedPlan];
  const featuresList = [
    `${plan.storage} stockage`,
    `${plan.traffic} bande passante`,
    `${plan.emails} comptes emails`,
  ];
  
  if (plan.category === "VPS") {
    featuresList.unshift(`${plan.cpu} CPU`, `${plan.ram} RAM`);
  } else {
    featuresList.push(`${plan.databases} base(s) de données`);
  }
  
  const result: PlanRecommendation = {
    plan: recommendedPlan,
    planName: plan.name,
    price: plan.price,
    confidence,
    reasons,
    features: [...featuresList, ...plan.features],
    alternatives: [],
  };

  // Alternatives basées sur la catégorie
  if (plan.category === "Hébergement Web") {
    if (recommendedPlan === "evolution") {
      result.alternatives.push({
        plan: "starter",
        reason: "Plus économique si budget très serré (2 GB)",
      });
      result.alternatives.push({
        plan: "premium",
        reason: "Plus de puissance si croissance rapide prévue (500 GB)",
      });
    } else if (recommendedPlan === "starter") {
      result.alternatives.push({
        plan: "evolution",
        reason: "Marge de croissance recommandée (300 GB vs 2 GB)",
      });
    } else if (recommendedPlan === "premium") {
      result.alternatives.push({
        plan: "evolution",
        reason: "Suffisant si trafic surestimé (300 GB)",
      });
    }
  } else if (plan.category === "WordPress") {
    if (recommendedPlan === "wp-pro") {
      result.alternatives.push({
        plan: "wp-lanceur",
        reason: "Plus économique pour démarrer (10 GB)",
      });
      result.alternatives.push({
        plan: "wp-premium",
        reason: "Espace illimité si forte croissance prévue",
      });
    } else if (recommendedPlan === "wp-lanceur") {
      result.alternatives.push({
        plan: "wp-pro",
        reason: "Plus d'espace si beaucoup de médias (30 GB vs 10 GB)",
      });
    } else if (recommendedPlan === "wp-premium") {
      result.alternatives.push({
        plan: "wp-pro",
        reason: "Suffisant si trafic surestimé (30 GB)",
      });
    }
  } else if (plan.category === "VPS") {
    if (recommendedPlan === "vps-business") {
      result.alternatives.push({
        plan: "vps-start",
        reason: "Plus économique si besoins modérés (2 cores, 2 GB RAM)",
      });
      result.alternatives.push({
        plan: "vps-performance",
        reason: "Maximum de puissance si infrastructure critique (6 cores, 8 GB RAM)",
      });
    } else if (recommendedPlan === "vps-start") {
      result.alternatives.push({
        plan: "vps-business",
        reason: "Plus de ressources recommandées (4 cores, 4 GB RAM)",
      });
    }
  }

  // Upgrade suggéré
  if (recommendedPlan === "evolution" && !needsPriority) {
    result.upgrade = {
      plan: "premium",
      reason: "500 GB + 30 emails + 10 bases de données",
      extraCost: PLANS.premium.price - PLANS.evolution.price,
    };
  } else if (recommendedPlan === "wp-pro") {
    result.upgrade = {
      plan: "wp-premium",
      reason: "Espace illimité + 30 emails professionnels",
      extraCost: PLANS["wp-premium"].price - PLANS["wp-pro"].price,
    };
  }

  // Warning si sous-dimensionné
  if (recommendedPlan === "starter" && (traffic === "medium" || projectType === "ecommerce")) {
    result.warning = "Ce forfait pourrait être insuffisant si votre trafic augmente rapidement. Evolution recommandé.";
  } else if (recommendedPlan === "wp-lanceur" && traffic === "high") {
    result.warning = "10 GB pourrait être limité avec ce trafic. WP Pro ou Premium recommandé.";
  }

  return result;
}

export function getPlanDetails(plan: PlanType) {
  return PLANS[plan];
}