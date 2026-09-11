import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Server, Globe, Shield, Zap, HardDrive } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HebergementWeb() {
  const forfaits = [
    {
      name: "Starter",
      price: "5 000",
      period: "/mois",
      description: "Idéal pour sites vitrines et blogs",
      features: [
        "1 site web",
        "10 Go SSD",
        "Trafic illimité",
        "5 comptes email",
        "SSL gratuit",
        "CDN gratuit",
        "Sauvegarde quotidienne",
        "Support 24/7"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "15 000",
      period: "/mois",
      description: "Pour sites professionnels et e-commerce",
      features: [
        "5 sites web",
        "50 Go SSD",
        "Trafic illimité",
        "25 comptes email",
        "SSL gratuit",
        "CDN gratuit",
        "Sauvegarde quotidienne",
        "Support prioritaire 24/7",
        "Protection DDoS",
        "Migration gratuite"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "35 000",
      period: "/mois",
      description: "Pour projets à fort trafic",
      features: [
        "Sites illimités",
        "150 Go SSD",
        "Trafic illimité",
        "Emails illimités",
        "SSL gratuit",
        "CDN gratuit",
        "Sauvegarde quotidienne",
        "Support VIP 24/7",
        "Protection DDoS",
        "Migration gratuite",
        "IP dédiée",
        "Ressources garanties"
      ],
      popular: false
    }
  ];

  const avantages = [
    {
      icon: Zap,
      title: "Performance Ultra-Rapide",
      description: "Serveurs SSD NVMe et CDN mondial pour des temps de chargement éclair"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "SSL gratuit, protection DDoS 1Tbit/s+, firewall applicatif et antimalware automatique"
    },
    {
      icon: Server,
      title: "Infrastructure Fiable",
      description: "Garantie uptime 99.9%, serveurs redondants et datacenters certifiés"
    },
    {
      icon: Globe,
      title: "CDN Mondial Gratuit",
      description: "Diffusion de contenu depuis des datacenters mondiaux sans limite de bande passante"
    },
    {
      icon: HardDrive,
      title: "Stockage SSD Rapide",
      description: "Disques SSD NVMe ultra-rapides pour des performances optimales"
    },
    {
      icon: Check,
      title: "Migration Gratuite",
      description: "Notre équipe migre votre site gratuitement sans interruption de service"
    }
  ];

  const faq = [
    {
      question: "Qu'est-ce que l'hébergement web ?",
      answer: "L'hébergement web est un service qui permet de rendre votre site internet accessible sur le web 24h/24. Nous stockons vos fichiers sur nos serveurs ultra-performants et assurons leur disponibilité continue."
    },
    {
      question: "Puis-je héberger plusieurs sites avec un seul forfait ?",
      answer: "Oui ! Le forfait Business permet d'héberger jusqu'à 5 sites, et le forfait Premium offre un nombre illimité de sites web."
    },
    {
      question: "Le SSL est-il inclus ?",
      answer: "Oui, tous nos forfaits incluent un certificat SSL gratuit pour sécuriser votre site avec le protocole HTTPS."
    },
    {
      question: "Proposez-vous des sauvegardes automatiques ?",
      answer: "Oui, nous effectuons des sauvegardes quotidiennes automatiques de tous vos sites et données. Vous pouvez restaurer vos fichiers en quelques clics depuis votre panneau de contrôle."
    },
    {
      question: "Quelle est la garantie de disponibilité ?",
      answer: "Nous garantissons une disponibilité de 99.9% grâce à notre infrastructure redondante et nos serveurs de haute performance."
    },
    {
      question: "Puis-je migrer mon site existant gratuitement ?",
      answer: "Absolument ! Nous offrons un service de migration gratuit pour tous nos forfaits. Notre équipe technique se charge de transférer votre site sans interruption de service."
    },
    {
      question: "Quels systèmes de paiement acceptez-vous ?",
      answer: "Nous acceptons Airtel Money, Moov Money, cartes bancaires, virements bancaires, chèques et paiements en espèces."
    },
    {
      question: "Puis-je changer de forfait plus tard ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment selon vos besoins. Les changements sont effectifs immédiatement."
    }
  ];

  return (
    <>
      <SEO 
        title="Hébergement Web Professionnel au Gabon | SPIDERHOSTER"
        description="Hébergement web ultra-rapide avec SSL gratuit, CDN mondial, protection DDoS et garantie uptime 99.9%. Parfait pour sites vitrines, blogs et e-commerce."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Server className="w-4 h-4" />
                <span className="text-sm font-mono font-semibold">Hébergement Web Professionnel</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                Hébergement Web{" "}
                <span className="text-primary">Ultra-Rapide</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Infrastructure fiable et performante pour héberger vos sites web avec SSL gratuit, CDN mondial et garantie de disponibilité 99.9%
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer">
                    Choisir mon forfait
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <a href="#faq">
                    En savoir plus
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Pourquoi choisir notre hébergement web ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une infrastructure de pointe pour garantir performance, sécurité et disponibilité
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {avantage.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {avantage.description}
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
                Nos forfaits d'hébergement web
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions adaptées à tous vos besoins, du simple blog au site e-commerce
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
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer" className="w-full">
                      Choisir {forfait.name}
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                  Questions fréquentes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tout ce que vous devez savoir sur notre hébergement web
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
                Prêt à héberger votre site web ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Rejoignez des centaines de clients satisfaits qui nous font confiance pour héberger leurs sites web
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer">
                    Démarrer maintenant
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