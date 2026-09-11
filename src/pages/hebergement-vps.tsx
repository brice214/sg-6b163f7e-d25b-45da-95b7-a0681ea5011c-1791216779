import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Cpu, HardDrive, Network, Shield, Zap, Server } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function HebergementVPS() {
  const forfaits = [
    {
      name: "VPS Starter",
      price: "25 000",
      period: "/mois",
      description: "Pour projets en croissance",
      specs: {
        cpu: "2 vCPU",
        ram: "4 Go RAM",
        ssd: "80 Go SSD NVMe",
        bandwidth: "2 To/mois"
      },
      features: [
        "Root SSH complet",
        "IPv4 dédiée",
        "Backups quotidiens",
        "Protection DDoS 1Tbit/s+",
        "Firewall configurable",
        "Monitoring 24/7",
        "Support technique 24/7"
      ],
      popular: false
    },
    {
      name: "VPS Business",
      price: "50 000",
      period: "/mois",
      description: "Performance professionnelle",
      specs: {
        cpu: "4 vCPU",
        ram: "8 Go RAM",
        ssd: "160 Go SSD NVMe",
        bandwidth: "4 To/mois"
      },
      features: [
        "Root SSH complet",
        "IPv4 + IPv6 dédiées",
        "Backups quotidiens",
        "Protection DDoS 1Tbit/s+",
        "Firewall avancé",
        "Monitoring 24/7",
        "Support prioritaire 24/7",
        "Snapshots gratuits",
        "API d'administration"
      ],
      popular: true
    },
    {
      name: "VPS Premium",
      price: "100 000",
      period: "/mois",
      description: "Puissance maximale",
      specs: {
        cpu: "8 vCPU",
        ram: "16 Go RAM",
        ssd: "320 Go SSD NVMe",
        bandwidth: "8 To/mois"
      },
      features: [
        "Root SSH complet",
        "IPv4 + IPv6 dédiées",
        "Backups horaires",
        "Protection DDoS 1Tbit/s+",
        "Firewall entreprise",
        "Monitoring temps réel",
        "Support VIP 24/7",
        "Snapshots illimités",
        "API d'administration",
        "Migration assistée",
        "Ressources garanties"
      ],
      popular: false
    }
  ];

  const avantages = [
    {
      icon: Cpu,
      title: "Processeurs Puissants",
      description: "CPU Intel Xeon ou AMD EPYC dernière génération avec fréquences élevées"
    },
    {
      icon: HardDrive,
      title: "Stockage SSD NVMe",
      description: "Disques SSD NVMe ultra-rapides en RAID 10 pour performances et fiabilité maximales"
    },
    {
      icon: Network,
      title: "Bande Passante Généreuse",
      description: "Trafic mensuel élevé sur réseau multi-gigabit avec garantie de disponibilité"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection DDoS 1Tbit/s+, firewall configurable et isolation totale entre VPS"
    },
    {
      icon: Zap,
      title: "Scalabilité Instantanée",
      description: "Augmentez vos ressources (CPU, RAM, SSD) en quelques clics sans interruption"
    },
    {
      icon: Server,
      title: "Accès Root Complet",
      description: "Contrôle total de votre serveur avec accès SSH root et choix du système d'exploitation"
    }
  ];

  const faq = [
    {
      question: "Qu'est-ce qu'un VPS ?",
      answer: "Un VPS (Virtual Private Server) est un serveur virtuel privé qui vous offre des ressources dédiées (CPU, RAM, SSD) et un contrôle total avec accès root. C'est comme avoir votre propre serveur dédié, mais à moindre coût."
    },
    {
      question: "Quels systèmes d'exploitation sont disponibles ?",
      answer: "Nous proposons Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux, et Windows Server. Vous pouvez installer le système de votre choix depuis votre panneau de contrôle."
    },
    {
      question: "Ai-je un accès root complet ?",
      answer: "Oui, vous disposez d'un accès SSH root complet pour installer et configurer tout ce que vous souhaitez sur votre VPS."
    },
    {
      question: "Les backups sont-ils inclus ?",
      answer: "Oui, nous effectuons des sauvegardes quotidiennes automatiques (horaires pour le forfait Premium). Vous pouvez également créer des snapshots manuels à tout moment."
    },
    {
      question: "Puis-je augmenter les ressources plus tard ?",
      answer: "Absolument ! Vous pouvez upgrader votre VPS à tout moment (plus de CPU, RAM ou SSD) sans réinstallation ni interruption de service."
    },
    {
      question: "Comment fonctionne la protection DDoS ?",
      answer: "Nous offrons une protection DDoS de plus de 1Tbit/s incluse gratuitement. Votre VPS est protégé automatiquement contre les attaques sans configuration requise."
    },
    {
      question: "Puis-je héberger plusieurs sites sur mon VPS ?",
      answer: "Oui, avec l'accès root vous pouvez configurer votre VPS comme vous le souhaitez et héberger autant de sites ou applications que vos ressources le permettent."
    },
    {
      question: "Offrez-vous un support technique ?",
      answer: "Oui, notre équipe est disponible 24/7 pour vous assister. Nous offrons un support système (disponibilité, performance) mais pas d'assistance sur vos applications personnalisées."
    }
  ];

  return (
    <>
      <SEO 
        title="VPS Haute Performance au Gabon | SPIDERHOSTER"
        description="Serveurs VPS puissants avec SSD NVMe, protection DDoS 1Tbit/s+, accès root complet et ressources dédiées. Scalabilité instantanée."
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
                <span className="text-sm font-mono font-semibold">Serveurs VPS Haute Performance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                VPS{" "}
                <span className="text-primary">Puissants</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Serveurs virtuels privés avec ressources dédiées, SSD NVMe ultra-rapide et protection DDoS incluse
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer">
                    Choisir mon VPS
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <a href="#avantages">
                    Découvrir les avantages
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Pourquoi choisir nos VPS ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Infrastructure de pointe pour performance, sécurité et fiabilité maximales
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
                Nos forfaits VPS
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ressources dédiées et performances garanties pour vos projets exigeants
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
                    <div className="flex items-baseline justify-center gap-1 mb-6">
                      <span className="text-4xl font-mono font-bold text-primary">
                        {forfait.price}
                      </span>
                      <span className="text-muted-foreground">FCFA</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="text-left">
                          <span className="text-muted-foreground">CPU:</span>
                          <div className="font-mono font-semibold text-foreground">{forfait.specs.cpu}</div>
                        </div>
                        <div className="text-left">
                          <span className="text-muted-foreground">RAM:</span>
                          <div className="font-mono font-semibold text-foreground">{forfait.specs.ram}</div>
                        </div>
                        <div className="text-left">
                          <span className="text-muted-foreground">SSD:</span>
                          <div className="font-mono font-semibold text-foreground">{forfait.specs.ssd}</div>
                        </div>
                        <div className="text-left">
                          <span className="text-muted-foreground">Trafic:</span>
                          <div className="font-mono font-semibold text-foreground">{forfait.specs.bandwidth}</div>
                        </div>
                      </div>
                    </div>
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
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer" className="w-full">
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
                  Tout ce que vous devez savoir sur nos VPS
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
                Déployez votre VPS en quelques minutes
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ressources dédiées, performance garantie et contrôle total pour vos projets
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer">
                    Commander un VPS
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
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