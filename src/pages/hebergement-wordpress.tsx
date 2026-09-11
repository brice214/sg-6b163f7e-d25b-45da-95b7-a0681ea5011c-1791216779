import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, Database, Layers, RefreshCw, Settings, ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

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
      description: "Système de cache multi-niveaux (page, objet, opcode) pour des performances maximales",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Layers,
      title: "Environnement de Staging",
      description: "Testez vos modifications sur une copie avant de les publier en production",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: RefreshCw,
      title: "Mises à Jour Automatiques",
      description: "WordPress, thèmes et plugins toujours à jour automatiquement pour votre sécurité",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Settings,
      title: "WordPress Manager",
      description: "Interface dédiée pour gérer facilement tous vos sites WordPress depuis un seul endroit",
      gradient: "from-blue-400 to-primary"
    },
    {
      icon: Database,
      title: "Base de Données Optimisée",
      description: "MariaDB optimisé spécifiquement pour WordPress avec query cache",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Firewall applicatif, protection contre les attaques et détection de malware",
      gradient: "from-accent to-orange-600"
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
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-mono font-semibold">Hébergement WordPress Optimisé</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-mono font-bold text-foreground leading-tight">
                  WordPress{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                    Surpuissant
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Hébergement WordPress optimisé avec cache avancé, staging, mises à jour automatiques et gestion simplifiée pour des performances exceptionnelles
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-primary hover:from-purple-700 hover:to-primary/90 text-white font-semibold shadow-lg shadow-purple-500/50 group">
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Choisir mon forfait
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-purple-500/20 hover:bg-purple-500/5">
                    <a href="#optimisations">
                      Voir les optimisations
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-purple-600">3x</div>
                    <div className="text-sm text-muted-foreground">Plus rapide</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-purple-600">Auto</div>
                    <div className="text-sm text-muted-foreground">Mises à jour</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-purple-600">Pro</div>
                    <div className="text-sm text-muted-foreground">WP Manager</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-2xl blur-2xl" />
                <Image 
                  src="/generated/wordpress-performance.png" 
                  alt="Performance WordPress optimisée" 
                  width={600} 
                  height={400}
                  className="relative rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Optimisations Section */}
        <section id="optimisations" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Optimisations WordPress incluses
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des fonctionnalités avancées pour maximiser la performance et la sécurité de vos sites WordPress
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimisations.map((opt, index) => {
                const Icon = opt.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-2 hover:border-purple-500/50 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${opt.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                      {opt.title}
                    </h3>
                    <p className="relative text-muted-foreground leading-relaxed">
                      {opt.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-primary/5" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Nos forfaits WordPress
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Du blog personnel au site e-commerce, trouvez le forfait adapté à votre projet
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {forfaits.map((forfait, index) => (
                <Card 
                  key={index} 
                  className={`group relative p-8 transition-all duration-500 ${
                    forfait.popular 
                      ? 'border-purple-600 border-2 shadow-2xl shadow-purple-500/20 scale-105 bg-gradient-to-br from-purple-500/5 to-transparent' 
                      : 'border-2 hover:border-purple-500/30 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {forfait.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-primary text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Plus populaire
                    </div>
                  )}
                  
                  <div className="text-center mb-6 space-y-2">
                    <h3 className="text-2xl font-mono font-bold text-foreground">
                      {forfait.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {forfait.description}
                    </p>
                    <div className="pt-4">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                          {forfait.price}
                        </span>
                        <span className="text-muted-foreground font-semibold">FCFA</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{forfait.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-600/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      forfait.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-primary hover:shadow-lg hover:shadow-purple-500/50 text-white' 
                        : 'bg-muted hover:bg-purple-500/10 hover:border-purple-500'
                    }`}
                  >
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2">
                      Choisir {forfait.name}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                  Questions fréquentes
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tout ce que vous devez savoir sur notre hébergement WordPress
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-2 rounded-xl px-6 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-purple-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-mono font-bold leading-tight">
                Lancez votre site WordPress dès maintenant
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                WordPress préinstallé, optimisé et sécurisé. Commencez à créer votre site en quelques minutes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold shadow-xl group">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Démarrer avec WordPress
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link href="/contact">
                    Nous contacter
                  </Link>
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