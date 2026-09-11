import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Server, Globe, Shield, Zap, HardDrive, ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

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
      description: "Serveurs SSD NVMe et CDN mondial pour des temps de chargement éclair",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "SSL gratuit, protection DDoS 1Tbit/s+, firewall applicatif et antimalware automatique",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Server,
      title: "Infrastructure Fiable",
      description: "Garantie uptime 99.9%, serveurs redondants et datacenters certifiés",
      gradient: "from-blue-400 to-primary"
    },
    {
      icon: Globe,
      title: "CDN Mondial Gratuit",
      description: "Diffusion de contenu depuis des datacenters mondiaux sans limite de bande passante",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: HardDrive,
      title: "Stockage SSD Rapide",
      description: "Disques SSD NVMe ultra-rapides pour des performances optimales",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Check,
      title: "Migration Gratuite",
      description: "Notre équipe migre votre site gratuitement sans interruption de service",
      gradient: "from-accent to-orange-600"
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
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,128,255,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-mono font-semibold">Hébergement Web Professionnel</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-mono font-bold text-foreground leading-tight">
                  Hébergement Web{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Ultra-Rapide
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Infrastructure fiable et performante pour héberger vos sites web avec SSL gratuit, CDN mondial et garantie de disponibilité 99.9%
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/50 group">
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Choisir mon forfait
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:bg-primary/5">
                    <a href="#faq">
                      En savoir plus
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime garanti</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support technique</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-primary">SSL</div>
                    <div className="text-sm text-muted-foreground">Gratuit inclus</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                <Image 
                  src="/generated/web-hosting-network.png" 
                  alt="Infrastructure hébergement web" 
                  width={600} 
                  height={400}
                  className="relative rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Pourquoi choisir notre hébergement web ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une infrastructure de pointe pour garantir performance, sécurité et disponibilité
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 hover:border-primary/50 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${avantage.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {avantage.title}
                    </h3>
                    <p className="relative text-muted-foreground leading-relaxed">
                      {avantage.description}
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Nos forfaits d'hébergement web
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des solutions adaptées à tous vos besoins, du simple blog au site e-commerce
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {forfaits.map((forfait, index) => (
                <Card 
                  key={index} 
                  className={`group relative p-8 transition-all duration-500 ${
                    forfait.popular 
                      ? 'border-primary border-2 shadow-2xl shadow-primary/20 scale-105 bg-gradient-to-br from-primary/5 to-transparent' 
                      : 'border-2 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {forfait.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
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
                        <span className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
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
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      forfait.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white' 
                        : 'bg-muted hover:bg-primary/10 hover:border-primary'
                    }`}
                  >
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2">
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
        <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                  Questions fréquentes
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tout ce que vous devez savoir sur notre hébergement web
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-2 rounded-xl px-6 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-mono font-bold leading-tight">
                Prêt à héberger votre site web ?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Rejoignez des centaines de clients satisfaits qui nous font confiance pour héberger leurs sites web
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl group">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Démarrer maintenant
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