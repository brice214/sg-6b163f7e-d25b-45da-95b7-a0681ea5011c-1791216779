"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Offers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Parfait pour débuter",
      priceMonthly: "3050",
      priceAnnually: "30500",
      urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/starter&billingcycle=monthly",
      urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/starter&billingcycle=annually",
      features: [
        "2 GB Espace Web",
        "Bande passante Illimitée",
        "1 Base de données",
        "1 Sous-domaine",
        "10 Comptes Emails",
        "Certificat SSL Gratuit",
        "WordPress Optimisé",
        "Support 24/7"
      ],
      popular: false
    },
    {
      name: "Evolution",
      description: "Notre meilleure offre",
      priceMonthly: "5800",
      priceAnnually: "58000",
      urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/evolution&billingcycle=monthly",
      urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/evolution&billingcycle=annually",
      features: [
        "300 GB Espace web",
        "Bande passante Illimitée",
        "4 Base de données",
        "4 Sous-domaine",
        "20 Comptes Emails",
        "Certificat SSL Gratuit",
        "WordPress Optimisé",
        "Support 24/7"
      ],
      popular: true
    },
    {
      name: "Premium",
      description: "Performance maximale",
      priceMonthly: "7500",
      priceAnnually: "75000",
      urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/pro&billingcycle=monthly",
      urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/pro&billingcycle=annually",
      features: [
        "500 GB Espace Web",
        "Bande passante Illimitée",
        "10 Base de données",
        "10 Sous-domaine",
        "30 Comptes Emails",
        "Certificat SSL Gratuit",
        "WordPress Optimisé",
        "Support 24/7"
      ],
      popular: false
    }
  ];

  return (
    <section id="offres" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
            Nos offres d'hébergement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choisissez la formule qui correspond à vos besoins. Toutes nos offres incluent SSL gratuit et support 24/7
          </p>

          {/* Billing cycle toggle */}
          <div className="inline-flex items-center gap-2 bg-muted/50 p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === "annually"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annuel
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                  Le plus populaire
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-mono font-bold text-foreground">
                    {billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually}
                  </span>
                  <span className="text-muted-foreground">FCFA</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  /{billingCycle === "monthly" ? "mois" : "an"}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                    : "bg-primary hover:bg-primary/90 text-white"
                }`}
              >
                <a
                  href={billingCycle === "monthly" ? plan.urlMonthly : plan.urlAnnually}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choisir {plan.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Tous les prix sont en Francs CFA. Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces
          </p>
        </div>
      </div>
    </section>
  );
}