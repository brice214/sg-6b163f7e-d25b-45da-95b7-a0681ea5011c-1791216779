import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Database, Layers, RefreshCw, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HebergementWordPress() {
  const forfaits = [
    {
      name: "WP Starter",
      price: "7 000",
      period: "/mois",
      description: "Parfait pour débuter avec WordPress",
      features: [
        "1 site WordPress",
        "15 Go SSD",
        "WordPress préinstallé",
        "Mises à jour automatiques",
        "SSL gratuit",
        "CDN gratuit",
        "Cache WordPress optimisé",
        "Support 24/7"
      ],
      popular: false
    },
    {
      name: "WP Business",
      price: "20 000",
      period: "/mois",
      description: "Pour sites professionnels performants",
      features: [
        "3 sites WordPress",
        "75 Go SSD",
        "WordPress Manager avancé",
        "Environnement de staging",
        "SSL gratuit",
        "CDN gratuit",
        "Cache + optimisation image",
        "Support prioritaire 24/7",
        "Sauvegarde quotidienne",
        "Migration gratuite"
      ],
      popular: true
    },
    {
      name: "WP Premium",
      price: "45 000",
      period: "/mois",
      description: "Performance maximale pour WordPress",
      features: [
        "Sites WordPress illimités",
        "200 Go SSD",
        "WordPress Manager Pro",
        "Staging illimité",
        "SSL gratuit",
        "CDN + Object Cache",
        "Optimisation avancée",
        "Support VIP 24/7",
        "Sauvegarde horaire",
        "Migration gratuite",
        "Ressources garanties",
        "PHP Worker dédié"
      ],
      popular: false
    }
  ];

  const optimisations = [
    {
      icon: Zap,
      title: "Cache WordPress Avancé",
      description: "Système de cache multi-niveaux (page, objet, opcode) pour des performances maximales"
    },
    {
      icon: Layers,
      title: "Environnement de Staging",
      description: "Testez vos modifications sur une copie avant de les publier en production"
    },
    {
      icon: RefreshCw,
      title: "Mises à Jour Automatiques",
      description: "WordPress, thèmes et plugins toujours à jour automatiquement pour votre sécurité"
    },
    {
      icon: Settings,
      title: "WordPress Manager",
      description: "Interface dédiée pour gérer facilement tous vos sites WordPress depuis un seul endroit"
    },
    {
      icon: Database,
      title: "Base de Données Optimisée",
      description: "MariaDB optimisé spécifiquement pour WordPress avec query cache"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Firewall applicatif, protection contre les attaques et détection de malware"
    }
  ];

  const faq = [
    {
      question: "Qu'est-ce que l'hébergement WordPress optimisé ?",
      answer: "C'est un hébergement spécialement configuré pour WordPress avec cache avancé, mises à jour automatiques, environnement de staging et outils de gestion dédiés pour garantir performance et sécurité maximales."
    },
    {
      question: "WordPress est-il préinstallé ?",
      answer: "Oui, WordPress est préinstallé et prêt à l'emploi. Vous pouvez commencer à créer votre site immédiatement après la commande."
    },
    {
      question: "Qu'est-ce qu'un environnement de staging ?",
      answer: "C'est une copie de votre site où vous pouvez tester vos modifications (thèmes, plugins, contenus) avant de les appliquer sur votre site en production. Disponible à partir du forfait Business."
    },
    {
      question: "Les mises à jour sont-elles automatiques ?",
      answer: "Oui, WordPress, vos thèmes et plugins sont mis à jour automatiquement pour garantir la sécurité. Vous pouvez également gérer manuellement les mises à jour si vous préférez."
    },
    {
      question: "Puis-je migrer mon site WordPress existant ?",
      answer: "Absolument ! Nous offrons un service de migration gratuit. Notre équipe technique transfère votre site sans interruption de service."
    },
    {
      question: "Quels plugins sont recommandés ?",
      answer: "Nous recommandons des plugins légers et bien codés. Notre équipe peut vous conseiller sur les meilleurs plugins pour vos besoins tout en maintenant les performances optimales."
    },
    {
      question: "Le cache WordPress est-il inclus ?",
      answer: "Oui, nous intégrons un système de cache multi-niveaux (page, objet, opcode) optimisé spécifiquement pour WordPress, sans besoin de plugin supplémentaire."
    },
    {
      question: "Puis-je utiliser n'importe quel thème ou plugin ?",
      answer: "Oui, vous pouvez installer n'importe quel thème ou plugin WordPress. Nous recommandons cependant des extensions bien codées pour maintenir les performances."
    }
  ];

  return (
    <>
      <SEO 
        title="Hébergement WordPress Optimisé au Gabon | SPIDERHOSTER"
        description="Hébergement WordPress ultra-rapide avec cache avancé, staging, mises à jour automatiques et WordPress Manager. Performance et sécurité maximales."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-mono font-semibold">Hébergement WordPress Optimisé</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                WordPress{" "}
                <span className="text-primary">Surpuissant</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Hébergement WordPress optimisé avec cache avancé, staging, mises à jour automatiques et gestion simplifiée
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer">
                    Choisir mon forfait
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <a href="#optimisations">
                    Voir les optimisations
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Optimisations Section */}
        <section id="optimisations" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Optimisations WordPress incluses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des fonctionnalités avancées pour maximiser la performance et la sécurité de vos sites WordPress
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {optimisations.map((opt, index) => {
                const Icon = opt.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {opt.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {opt.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Nos forfaits WordPress
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Du blog personnel au site e-commerce, trouvez le forfait adapté à votre projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {forfaits.map((forfait, index) => (
                <Card 
                  key={index} 
                  className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                    forfait.popular 
                      ? 'border-primary border-2 shadow-lg scale-105' 
                      : 'border-2'
                  }`}
                >
                  {forfait.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Plus populaire
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
                      {forfait.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {forfait.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-mono font-bold text-primary">
                        {forfait.price}
                      </span>
                      <span className="text-muted-foreground">FCFA</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{forfait.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      forfait.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer" className="w-full">
                      Choisir {forfait.name}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                  Questions fréquentes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tout ce que vous devez savoir sur notre hébergement WordPress
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
                Lancez votre site WordPress dès maintenant
              </h2>
              <p className="text-xl mb-8 opacity-90">
                WordPress préinstallé, optimisé et sécurisé. Commencez à créer votre site en quelques minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer">
                    Démarrer avec WordPress
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <a href="/contact">
                    Nous contacter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}