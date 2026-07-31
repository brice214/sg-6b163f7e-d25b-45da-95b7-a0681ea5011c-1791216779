import { Check, ArrowRight } from "lucide-react";
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
        "10 GB Stockage SSD",
        "1 Site web",
        "Bande passante illimitée",
        "SSL gratuit",
        "5 Comptes email",
        "cPanel inclus",
        "Support 24/7",
      ],
      cta: "Choisir Starter",
      popular: false,
      gradient: "from-primary/5 to-primary/10",
    },
    {
      name: "Business",
      description: "Notre meilleure offre",
      price: "19.990",
      currency: "FCFA",
      period: "/mois",
      features: [
        "50 GB Stockage SSD NVMe",
        "Sites illimités",
        "Bande passante illimitée",
        "SSL gratuit",
        "Emails illimités",
        "cPanel + Softaculous",
        "Sauvegardes quotidiennes",
        "Support prioritaire 24/7",
      ],
      cta: "Choisir Business",
      popular: true,
      gradient: "from-accent/10 to-primary/10",
    },
    {
      name: "Premium",
      description: "Performance maximale",
      price: "39.990",
      currency: "FCFA",
      period: "/mois",
      features: [
        "100 GB Stockage SSD NVMe",
        "Sites illimités",
        "Bande passante illimitée",
        "SSL gratuit",
        "Emails illimités",
        "cPanel + Softaculous",
        "Sauvegardes quotidiennes",
        "Support dédié 24/7",
        "CDN inclus",
      ],
      cta: "Choisir Premium",
      popular: false,
      gradient: "from-primary/10 to-accent/5",
    },
  ];

  return (
    <section id="offres" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-mono font-semibold text-primary">Nos Offres</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
            Des tarifs adaptés à chaque projet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Toutes nos offres incluent SSL gratuit et support 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card 
              key={offer.name}
              className={`relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover animate-slide-up ${offer.popular ? 'lg:scale-105 border-primary/50 shadow-lg' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {offer.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-white text-center py-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    Le plus populaire
                  </Badge>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-50`} />
              
              <div className={`relative p-8 ${offer.popular ? 'pt-12' : ''}`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-mono font-bold text-primary">
                      {offer.price}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      {offer.currency}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{offer.period}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${offer.popular ? 'bg-gradient-hero hover:opacity-90' : ''}`}
                  variant={offer.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                    {offer.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}