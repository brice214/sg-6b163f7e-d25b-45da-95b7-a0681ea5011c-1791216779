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
      urlMonthly: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/starter&billingcycle=monthly",
      urlAnnually: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/starter&billingcycle=annually",
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
      priceAnnually: "69600",
      urlMonthly: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/evolution&billingcycle=monthly",
      urlAnnually: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/evolution&billingcycle=annually",
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
      popular: true
    },
    {
      name: "Premium",
      description: "Performance maximale",
      priceMonthly: "7500",
      priceAnnually: "90000",
      urlMonthly: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/pro&billingcycle=monthly",
      urlAnnually: "https://portail.spiderhoster.com/index.php?rp=/store/hebergement-web/pro&billingcycle=annually",
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
    <section id="offers" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <style jsx>{`
        @keyframes attention-shake {
          0%, 88%, 100% {
            transform: translateX(0) rotate(0deg) scale(1);
          }
          89.5% {
            transform: translateX(-5px) rotate(-1.2deg) scale(1.02);
          }
          91% {
            transform: translateX(5px) rotate(1.2deg) scale(1.02);
          }
          92.5% {
            transform: translateX(-4px) rotate(-1deg) scale(1.02);
          }
          94% {
            transform: translateX(4px) rotate(1deg) scale(1.02);
          }
          95.5% {
            transform: translateX(-2px) rotate(0deg) scale(1.01);
          }
          97% {
            transform: translateX(2px) rotate(0deg) scale(1.01);
          }
        }
        .animate-attention-shake {
          animation: attention-shake 6s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-attention-shake {
            animation: none;
          }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Nos Offres
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Plans d&apos;Hébergement
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choisissez la formule qui correspond à vos besoins. Toutes nos offres incluent SSL gratuit et support 24/7
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
              <div className={`absolute inset-0 ${plan.popular ? "bg-primary/20" : "bg-white/5"} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Card */}
              <div className={`relative ${plan.popular ? "bg-blue-600" : "bg-slate-900"} border-2 ${plan.popular ? "border-blue-500" : "border-slate-800"} rounded-2xl p-8 h-full flex flex-col ${plan.popular ? "animate-attention-shake" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white border-none">
                    ⭐ Le plus populaire ⭐
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-mono mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-300">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-mono text-white">
                      {isAnnual ? plan.priceAnnually : plan.priceMonthly}
                    </span>
                    <span className="text-gray-300">FCFA</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {isAnnual ? "/an" : "/mois"}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-slate-800 hover:bg-slate-700 text-white"} group/btn`}
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
            💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces
          </p>
        </div>
      </div>
    </section>
  );
}