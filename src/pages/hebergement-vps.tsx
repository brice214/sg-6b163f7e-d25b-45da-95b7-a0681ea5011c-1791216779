import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Cpu, HardDrive, Network, Shield, Zap, Server, ArrowRight, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

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
      description: "CPU Intel Xeon ou AMD EPYC dernière génération avec fréquences élevées",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: HardDrive,
      title: "Stockage SSD NVMe",
      description: "Disques SSD NVMe ultra-rapides en RAID 10 pour performances et fiabilité maximales",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: Network,
      title: "Bande Passante Généreuse",
      description: "Trafic mensuel élevé sur réseau multi-gigabit avec garantie de disponibilité",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection DDoS 1Tbit/s+, firewall configurable et isolation totale entre VPS",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Zap,
      title: "Scalabilité Instantanée",
      description: "Augmentez vos ressources (CPU, RAM, SSD) en quelques clics sans interruption",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Server,
      title: "Accès Root Complet",
      description: "Contrôle total de votre serveur avec accès SSH root et choix du système d'exploitation",
      gradient: "from-primary to-accent"
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
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 border border-red-500/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-mono font-semibold">Serveurs VPS Haute Performance</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-mono font-bold text-foreground leading-tight">
                  VPS{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-primary">
                    Puissants
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Serveurs virtuels privés avec ressources dédiées, SSD NVMe ultra-rapide, protection DDoS 1Tbit/s+ et contrôle root complet
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-primary hover:from-red-700 hover:to-primary/90 text-white font-semibold shadow-lg shadow-red-500/50 group">
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Choisir mon VPS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-red-500/20 hover:bg-red-500/5">
                    <a href="#avantages">
                      Découvrir les avantages
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-red-600">Root</div>
                    <div className="text-sm text-muted-foreground">Accès SSH</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-red-600">NVMe</div>
                    <div className="text-sm text-muted-foreground">SSD rapide</div>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-red-600">1Tb+</div>
                    <div className="text-sm text-muted-foreground">DDoS protect</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-primary/20 rounded-2xl blur-2xl" />
                <Image 
                  src="/generated/vps-infrastructure.png" 
                  alt="Infrastructure VPS haute performance" 
                  width={600} 
                  height={400}
                  className="relative rounded-2xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Pourquoi choisir nos VPS ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Infrastructure de pointe pour performance, sécurité et fiabilité maximales
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative p-8 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border-2 hover:border-red-500/50 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${avantage.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-red-600 transition-colors">
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-background to-primary/5" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
                Nos forfaits VPS
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ressources dédiées et performances garanties pour vos projets exigeants
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {forfaits.map((forfait, index) => (
                <Card 
                  key={index} 
                  className={`group relative p-8 transition-all duration-500 ${
                    forfait.popular 
                      ? 'border-red-600 border-2 shadow-2xl shadow-red-500/20 scale-105 bg-gradient-to-br from-red-500/5 to-transparent' 
                      : 'border-2 hover:border-red-500/30 hover:shadow-xl hover:-translate-y-1'
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
                      <div className="flex items-baseline justify-center gap-1 mb-6">
                        <span className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-primary">
                          {forfait.price}
                        </span>
                        <span className="text-muted-foreground font-semibold">FCFA</span>
                      </div>
                      <div className="bg-gradient-to-br from-muted/50 to-red-500/5 rounded-xl p-4 mb-6 border border-red-500/10">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="text-left space-y-1">
                            <span className="text-muted-foreground text-xs">CPU</span>
                            <div className="font-mono font-bold text-foreground text-base">{forfait.specs.cpu}</div>
                          </div>
                          <div className="text-left space-y-1">
                            <span className="text-muted-foreground text-xs">RAM</span>
                            <div className="font-mono font-bold text-foreground text-base">{forfait.specs.ram}</div>
                          </div>
                          <div className="text-left space-y-1">
                            <span className="text-muted-foreground text-xs">SSD</span>
                            <div className="font-mono font-bold text-foreground text-base">{forfait.specs.ssd}</div>
                          </div>
                          <div className="text-left space-y-1">
                            <span className="text-muted-foreground text-xs">Bande passante</span>
                            <div className="font-mono font-bold text-foreground text-base">{forfait.specs.bandwidth}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {forfait.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-red-600" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      forfait.popular 
                        ? 'bg-gradient-to-r from-red-600 to-primary hover:shadow-lg hover:shadow-red-500/50 text-white' 
                        : 'bg-muted hover:bg-red-500/10 hover:border-red-500'
                    }`}
                  >
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2">
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
                  Tout ce que vous devez savoir sur nos VPS
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faq.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-2 rounded-xl px-6 bg-card/50 backdrop-blur-sm hover:border-red-500/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-red-600">
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-8">
              <h2 className="text-4xl md:text-5xl font-mono font-bold leading-tight">
                Déployez votre VPS en quelques minutes
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Ressources dédiées, performance garantie et contrôle total pour vos projets exigeants
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 font-semibold shadow-xl group">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/vps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Commander un VPS
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