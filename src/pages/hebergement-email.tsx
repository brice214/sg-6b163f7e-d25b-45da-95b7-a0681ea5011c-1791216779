import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Mail, Shield, HardDrive, Globe, Lock, Cloud } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HebergementEmail() {
  const forfaits = [
    {
      name: "Email Starter",
      price: "3 000",
      period: "/mois",
      description: "Pour petites équipes",
      features: [
        "5 comptes email",
        "5 Go par compte",
        "Webmail responsive",
        "Protection antispam",
        "Antivirus intégré",
        "SSL/TLS sécurisé",
        "IMAP/POP3/SMTP",
        "Support 24/7"
      ],
      popular: false
    },
    {
      name: "Email Business",
      price: "10 000",
      period: "/mois",
      description: "Pour entreprises",
      features: [
        "25 comptes email",
        "25 Go par compte",
        "Webmail responsive",
        "Protection antispam avancée",
        "Antivirus premium",
        "SSL/TLS sécurisé",
        "IMAP/POP3/SMTP",
        "Support prioritaire 24/7",
        "Calendrier partagé",
        "Contacts synchronisés",
        "Alias illimités"
      ],
      popular: true
    },
    {
      name: "Email Premium",
      price: "25 000",
      period: "/mois",
      description: "Solutions sur-mesure",
      features: [
        "Comptes illimités",
        "50 Go par compte",
        "Webmail responsive",
        "Protection antispam IA",
        "Antivirus premium",
        "SSL/TLS sécurisé",
        "IMAP/POP3/SMTP",
        "Support VIP 24/7",
        "Calendrier partagé",
        "Contacts synchronisés",
        "Alias illimités",
        "Archivage email",
        "API d'administration"
      ],
      popular: false
    }
  ];

  const fonctionnalites = [
    {
      icon: Mail,
      title: "Webmail Moderne",
      description: "Interface webmail responsive accessible partout, compatible mobile, tablette et ordinateur"
    },
    {
      icon: Shield,
      title: "Protection Antispam",
      description: "Filtrage intelligent des spams et phishing pour une boîte de réception propre"
    },
    {
      icon: Lock,
      title: "Sécurité Maximale",
      description: "Chiffrement SSL/TLS, authentification sécurisée et protection contre les malwares"
    },
    {
      icon: Cloud,
      title: "Synchronisation Cloud",
      description: "Emails, contacts et calendrier synchronisés sur tous vos appareils en temps réel"
    },
    {
      icon: HardDrive,
      title: "Stockage Généreux",
      description: "Jusqu'à 50 Go par compte email pour stocker tous vos messages et pièces jointes"
    },
    {
      icon: Globe,
      title: "Nom de Domaine Personnalisé",
      description: "Adresses email professionnelles avec votre propre nom de domaine (@votreentreprise.com)"
    }
  ];

  const faq = [
    {
      question: "Qu'est-ce que l'hébergement email professionnel ?",
      answer: "C'est un service qui vous permet d'avoir des adresses email personnalisées avec votre nom de domaine (ex: contact@votreentreprise.com) au lieu d'utiliser des services gratuits générique (@gmail.com, @yahoo.fr)."
    },
    {
      question: "Puis-je utiliser mon client email préféré ?",
      answer: "Oui ! Nos emails sont compatibles avec tous les clients : Outlook, Thunderbird, Apple Mail, Gmail app, et tout client supportant IMAP/POP3/SMTP."
    },
    {
      question: "Le webmail est-il accessible sur mobile ?",
      answer: "Absolument ! Notre webmail est entièrement responsive et optimisé pour mobile. Vous pouvez aussi configurer votre email sur l'application mail native de votre smartphone."
    },
    {
      question: "Comment fonctionne la protection antispam ?",
      answer: "Nous utilisons des filtres antispam avancés avec apprentissage automatique qui analysent chaque email et bloquent les spams, phishing et malwares avant qu'ils n'atteignent votre boîte de réception."
    },
    {
      question: "Puis-je créer des alias email ?",
      answer: "Oui, vous pouvez créer des alias illimités (contact@, info@, support@, etc.) qui redirigent vers vos comptes email principaux."
    },
    {
      question: "Les emails sont-ils sauvegardés ?",
      answer: "Oui, nous effectuons des sauvegardes quotidiennes de tous vos emails. Le forfait Premium inclut également un système d'archivage automatique."
    },
    {
      question: "Puis-je migrer mes emails existants ?",
      answer: "Oui, nous offrons un service de migration gratuit pour transférer tous vos emails, contacts et calendriers depuis votre ancien fournisseur sans perte de données."
    },
    {
      question: "Quelle est la taille maximale des pièces jointes ?",
      answer: "Vous pouvez envoyer des pièces jointes jusqu'à 50 Mo par email. Pour les fichiers plus volumineux, nous recommandons d'utiliser un service de partage de fichiers."
    }
  ];

  return (
    <>
      <SEO 
        title="Hébergement Email Professionnel au Gabon | SPIDERHOSTER"
        description="Emails professionnels sécurisés avec webmail moderne, protection antispam, antivirus et synchronisation cloud. Votre nom de domaine."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-mono font-semibold">Hébergement Email Professionnel</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                Email{" "}
                <span className="text-primary">Professionnel</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Adresses email avec votre nom de domaine, webmail moderne, protection antispam et synchronisation cloud
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-email" target="_blank" rel="noopener noreferrer">
                    Choisir mon forfait
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <a href="#fonctionnalites">
                    Découvrir les fonctionnalités
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités Section */}
        <section id="fonctionnalites" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Fonctionnalités incluses
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour une communication email professionnelle
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fonctionnalites.map((fonc, index) => {
                const Icon = fonc.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {fonc.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {fonc.description}
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
                Nos forfaits email
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des solutions email adaptées à la taille de votre équipe
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
                    <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-email" target="_blank" rel="noopener noreferrer" className="w-full">
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
                  Tout ce que vous devez savoir sur notre hébergement email
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
                Professionnalisez votre communication
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Des adresses email avec votre nom de domaine pour renforcer votre image de marque
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail/index.php?rp=/store/hebergement-email" target="_blank" rel="noopener noreferrer">
                    Créer mes emails
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