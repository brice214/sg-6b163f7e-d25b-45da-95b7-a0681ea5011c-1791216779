import { Server, Wordpress, Cloud, Globe } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      icon: Server,
      title: "Hébergement Web",
      description: "Solutions d'hébergement partagé performantes avec cPanel, SSL gratuit et sauvegardes quotidiennes. Parfait pour sites vitrine et blogs.",
      features: ["cPanel inclus", "SSL gratuit", "Sauvegardes auto"],
      href: "/hebergement-web",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Wordpress,
      title: "Hébergement WordPress",
      description: "Hébergement optimisé pour WordPress avec installation 1-clic, cache intégré et mises à jour automatiques. Performance maximale garantie.",
      features: ["Installation 1-clic", "Cache LiteSpeed", "Mises à jour auto"],
      href: "/hebergement-wordpress",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: Cloud,
      title: "Serveurs VPS",
      description: "Serveurs privés virtuels avec ressources dédiées, accès root complet et scalabilité instantanée. Contrôle total sur votre infrastructure.",
      features: ["Ressources dédiées", "Accès root", "Scalabilité"],
      href: "/hebergement-vps",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: Globe,
      title: "Noms de Domaine",
      description: "Enregistrez votre nom de domaine avec toutes les extensions (.ga, .com, .net, .org). Gestion DNS avancée et transferts simplifiés.",
      features: ["Toutes extensions", "DNS avancé", "Transfert facile"],
      href: "/domaines",
      gradient: "from-accent/10 to-accent/5",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-mono font-semibold text-primary">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
            Solutions d'hébergement complètes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De l'hébergement partagé aux serveurs dédiés, trouvez la solution parfaite pour votre projet web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-mono font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  <Link href={service.href}>
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}