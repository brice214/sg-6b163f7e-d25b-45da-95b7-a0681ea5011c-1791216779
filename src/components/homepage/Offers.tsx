"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Offers() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Parfait pour débuter",
      priceMonthly: "3050",
      priceAnnually: "36600",
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
      popular: false,
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Evolution",
      description: "Notre meilleure offre",
      priceMonthly: "5800",
      priceAnnually: "69600",
      urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/evolution&billingcycle=monthly",
      urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web/evolution&billingcycle=annually",
      features: [
        "300 GB Espace Web",
        "Bande passante Illimitée",
        "4 Base de données",
        "4 Sous-domaine",
        "20 Comptes Emails",
        "Certificat SSL Gratuit",
        "WordPress Optimisé",
        "Support 24/7"
      ],
      popular: true,
      gradient: "from-primary/20 to-secondary/20",
      borderGradient: "from-primary to-secondary"
    },
    {
      name: "Premium",
      description: "Performance maximale",
      priceMonthly: "7500",
      priceAnnually: "90000",
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
      popular: false,
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Nos Offres
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Plans d&apos;Hébergement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent un support 24/7.
          </p>

          {/* Toggle Mensuel/Annuel */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                isAnnual ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annuel
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? "md:-mt-4" : ""}`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Card */}
              <div className={`relative bg-card border-2 ${plan.popular ? `border-transparent bg-gradient-to-br ${plan.gradient}` : "border-border"} rounded-2xl p-8 h-full flex flex-col`}>
                {plan.popular && (
                  <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r ${plan.borderGradient} text-white border-none`}>
                    Le plus populaire
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-mono mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold font-mono bg-gradient-to-r ${plan.borderGradient} bg-clip-text text-transparent`}>
                      {isAnnual ? plan.priceAnnually : plan.priceMonthly}
                    </span>
                    <span className="text-muted-foreground">FCFA</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {isAnnual ? "par an" : "par mois"}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${plan.borderGradient} hover:opacity-90 text-white group/btn`}
                >
                  <a 
                    href={isAnnual ? plan.urlAnnually : plan.urlMonthly}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choisir {plan.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            💳 Moyens de paiement : Airtel Money, Moov Money, Carte Bancaire, Virement, Chèque, Espèces
          </p>
        </div>
      </div>
    </section>
  );
}