import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

const coordonnees: FeatureItem[] = [
  {
    icon: MapPin,
    title: "Adresse",
    description: "Libreville, Gabon — Quartier Glass, Boulevard Triomphal",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "+241 XX XX XX XX — Du lundi au samedi, 8h à 18h",
  },
  {
    icon: Mail,
    title: "Email",
    description: "contact@spiderhoster.com — Réponse sous 24h ouvrées",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description: "Assistance technique disponible jour et nuit, toute l'année",
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Nous Contacter | SPIDERHOSTER"
        description="Contactez SPIDERHOSTER pour toute question sur nos services d'hébergement web, VPS, WordPress ou noms de domaine. Support 24/7 disponible."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={MessageSquare}
          badgeLabel="Nous Contacter"
          titlePrefix="Parlons de votre"
          titleHighlight="projet"
          description="Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans votre réussite digitale"
          backgroundImage="/generated/contact-support.png"
          imageAlt="Centre de support SPIDERHOSTER"
          primaryCta={{ label: "Envoyer un message", href: "#form" }}
          secondaryCta={{ label: "Ouvrir un ticket", href: "https://spiderhoster.com/portail" }}
          stats={[
            { icon: Clock, value: "24/7", label: "Support disponible" },
            { icon: Mail, value: "<24h", label: "Réponse email" },
            { icon: MapPin, value: "Libreville", label: "Siège social" },
          ]}
        />

        <FeatureGrid
          badgeLabel="Nos Coordonnées"
          title="Plusieurs façons de nous"
          highlight="joindre"
          subtitle="Choisissez le canal qui vous convient le mieux, notre équipe répond rapidement"
          features={coordonnees}
          columns={4}
        />

        <section id="form" className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-10 blur-xl rounded-2xl" />
                <div className="relative bg-card border border-border/50 rounded-2xl p-8">
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
                          className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+241 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Sujet
                      </label>
                      <select className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
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
                        className="w-full px-4 py-3 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Décrivez votre besoin ou posez votre question..."
                      />
                    </div>

                    <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
                      Envoyer le message
                    </Button>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card">
                    <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                      Support technique 24/7
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Notre équipe de support est disponible à tout moment pour vous assister avec vos problèmes techniques.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                      <a href="https://spiderhoster.com/portail" target="_blank" rel="noopener noreferrer">
                        Ouvrir un ticket
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card">
                    <h3 className="text-xl font-mono font-bold text-foreground mb-4">
                      Documentation
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Consultez notre base de connaissances pour des guides détaillés et tutoriels vidéo.
                    </p>
                    <Button variant="outline" className="w-full border-border/50">
                      Voir la documentation
                    </Button>
                  </div>
                </div>

                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <h3 className="text-xl font-mono font-bold text-white mb-4">
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-semibold text-white">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-semibold text-white">9h00 - 14h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-semibold text-white">Fermé</span>
                    </div>
                    <div className="pt-3 border-t border-slate-800">
                      <p className="text-sm text-gray-300">
                        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                          Support technique :
                        </strong>{" "}
                        Disponible 24h/24, 7j/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}