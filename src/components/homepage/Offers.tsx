import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Offers() {
  const offers = [
    {
      name: "Starter",
      description: "Parfait pour débuter",
      price: "9.990",
      currency: "FCFA",
      period: "/mois",
      features: [
        "10 GB d'espace disque",
        "1 nom de domaine gratuit",
        "5 comptes email",
        "Bande passante illimitée",
        "SSL gratuit",
        "Support 24/7",
      ],
      cta: "Choisir Starter",
      popular: false,
    },
    {
      name: "Business",
      description: "Notre meilleure offre",
      price: "19.990",
      currency: "FCFA",
      period: "/mois",
      features: [
        "50 GB d'espace disque",
        "3 noms de domaine gratuits",
        "Comptes email illimités",
        "Bande passante illimitée",
        "SSL gratuit",
        "Support 24/7",
        "Sauvegardes automatiques",
      ],
      cta: "Choisir Business",
      popular: true,
    },
    {
      name: "Premium",
      description: "Performance maximale",
      price: "39.990",
      currency: "FCFA",
      period: "/mois",
      features: [
        "100 GB d'espace disque",
        "5 noms de domaine gratuits",
        "Comptes email illimités",
        "Bande passante illimitée",
        "SSL gratuit",
        "Support prioritaire 24/7",
        "Sauvegardes automatiques",
        "CDN gratuit",
      ],
      cta: "Choisir Premium",
      popular: false,
    },
  ];

  return (
    <section id="offres" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Tech grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(207 100% 50% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(207 100% 50% / 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <span className="text-sm font-mono font-semibold text-primary">Nos Offres</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold text-white mb-4 tracking-tight">
            Des tarifs <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">adaptés</span> à chaque projet
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choisissez la formule qui correspond à vos besoins. Toutes nos offres incluent SSL gratuit et support 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={offer.name}
              className={`relative overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all duration-500 animate-slide-up ${offer.popular ? 'lg:scale-105 border-primary/50 shadow-2xl shadow-primary/20' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
              
              {offer.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary via-secondary to-primary text-white text-center py-3">
                  <div className="flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 fill-white" />
                    <span className="text-sm font-mono font-bold">LE PLUS POPULAIRE</span>
                    <Star className="h-4 w-4 fill-white" />
                  </div>
                </div>
              )}
              
              <div className={`relative p-8 ${offer.popular ? 'pt-16' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {offer.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {offer.price}
                    </span>
                    <span className="text-lg text-gray-400">
                      {offer.currency}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{offer.period}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full group ${offer.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:scale-105 shadow-lg shadow-primary/50' : 'bg-white/10 hover:bg-white/20 text-white border-white/20'}`}
                  size="lg"
                >
                  <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                    {offer.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-400 text-sm">
            💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces
          </p>
        </div>
      </div>
    </section>
  );
}