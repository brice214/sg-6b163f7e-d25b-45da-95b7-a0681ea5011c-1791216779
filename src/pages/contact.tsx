import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const coordonnees = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "Libreville, Gabon",
      details: "Quartier Glass, Boulevard Triomphal"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+241 XX XX XX XX",
      details: "Du lundi au samedi : 8h - 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@spiderhoster.com",
      details: "Réponse sous 24h ouvrées"
    },
    {
      icon: Clock,
      title: "Support 24/7",
      info: "Assistance technique",
      details: "Disponible jour et nuit"
    }
  ];

  return (
    <>
      <SEO 
        title="Nous Contacter | SPIDERHOSTER"
        description="Contactez SPIDERHOSTER pour toute question sur nos services d'hébergement web, VPS, WordPress ou noms de domaine. Support 24/7 disponible."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-mono font-semibold">Nous Contacter</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                Parlons de votre{" "}
                <span className="text-primary">projet</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {coordonnees.map((coord, index) => {
                const Icon = coord.icon;
                return (
                  <Card key={index} className="p-6 border-2 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {coord.title}
                    </h3>
                    <p className="text-primary font-mono font-semibold mb-1">
                      {coord.info}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {coord.details}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form & Info */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <Card className="p-8 border-2">
                <h2 className="text-2xl font-mono font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+241 XX XX XX XX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Sujet
                    </label>
                    <select className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Question commerciale</option>
                      <option>Support technique</option>
                      <option>Demande de devis</option>
                      <option>Migration de site</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Décrivez votre besoin ou posez votre question..."
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Envoyer le message
                  </Button>
                </form>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card className="p-8 border-2">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                    Support technique 24/7
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Notre équipe de support est disponible à tout moment pour vous assister avec vos problèmes techniques.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <a href="https://spiderhoster.com/portail" target="_blank" rel="noopener noreferrer" className="w-full">
                      Ouvrir un ticket
                    </a>
                  </Button>
                </Card>

                <Card className="p-8 border-2">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                    Documentation
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Consultez notre base de connaissances pour des guides détaillés et tutoriels vidéo.
                  </p>
                  <Button variant="outline" className="w-full border-2">
                    Voir la documentation
                  </Button>
                </Card>

                <Card className="p-8 border-2 bg-muted/30">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-semibold">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-semibold">9h00 - 14h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-semibold">Fermé</span>
                    </div>
                    <div className="pt-3 border-t-2">
                      <p className="text-sm">
                        <strong className="text-primary">Support technique :</strong> Disponible 24h/24, 7j/7
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Créez votre compte maintenant et profitez de nos services d'hébergement professionnel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail" target="_blank" rel="noopener noreferrer">
                    Créer un compte
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Voir nos offres
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