import { Shield, Zap, HeadphonesIcon, TrendingUp, Lock, Gauge } from "lucide-react";

export function WhySpiderhoster() {
  const reasons = [
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Serveurs SSD NVMe, CDN intégré et cache avancé pour des temps de chargement ultra-rapides.",
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Pare-feu WAF, protection DDoS, SSL gratuit et sauvegardes automatiques quotidiennes.",
    },
    {
      icon: HeadphonesIcon,
      title: "Support expert 24/7",
      description: "Équipe technique locale disponible jour et nuit par téléphone, email et chat en direct.",
    },
    {
      icon: TrendingUp,
      title: "Scalabilité instantanée",
      description: "Évoluez en toute simplicité selon vos besoins sans interruption de service.",
    },
    {
      icon: Lock,
      title: "Confidentialité garantie",
      description: "Vos données hébergées en Afrique, conformité RGPD et politique de confidentialité stricte.",
    },
    {
      icon: Gauge,
      title: "Uptime 99.9%",
      description: "Infrastructure redondante et monitoring 24/7 pour une disponibilité maximale garantie.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm font-mono font-semibold text-accent">Pourquoi nous choisir</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
            L'excellence au service de votre réussite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SPIDERHOSTER combine technologie de pointe et expertise locale pour vous offrir le meilleur hébergement en Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}