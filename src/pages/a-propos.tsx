import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { Target, Eye, Award, Users, Calendar, Shield, Landmark } from "lucide-react";

const valeurs: FeatureItem[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque service, avec une infrastructure de pointe et un support technique réactif.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Une équipe locale au Gabon, disponible 24/7, qui comprend les besoins spécifiques des entreprises africaines.",
  },
  {
    icon: Award,
    title: "Fiabilité",
    description: "Infrastructure redondante, garantie uptime 99.9% et sauvegardes automatiques pour la continuité de vos activités.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Tarifs clairs sans frais cachés, et communication transparente sur nos services et notre infrastructure.",
  },
];

const equipe = [
  {
    role: "Direction",
    description: "Une équipe de passionnés avec plus de 10 ans d'expérience dans l'hébergement web et les infrastructures cloud",
  },
  {
    role: "Support Technique",
    description: "Ingénieurs certifiés disponibles 24/7 pour vous accompagner et résoudre tous vos problèmes techniques",
  },
  {
    role: "Datacenter",
    description: "Infrastructure de pointe à Libreville avec connexions redondantes et systèmes de refroidissement optimisés",
  },
];

export default function APropos() {
  return (
    <>
      <SEO
        title="Hébergeur Web Gabon depuis 2015 | À Propos - SPIDERHOSTER"
        description="SPIDERHOSTER, premier hébergeur web professionnel gabonais depuis 2015. Datacenter à Libreville, 500+ clients, support local 24/7."
        url="https://spiderhoster.com/a-propos"
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Landmark}
          badgeLabel="À propos de nous"
          titlePrefix="À propos de"
          titleHighlight="SPIDERHOSTER"
          description="Leader de l'hébergement web professionnel au Gabon et en Afrique centrale depuis 2015"
          backgroundImage="/generated/datacenter-libreville.png"
          imageAlt="Datacenter SPIDERHOSTER à Libreville"
          primaryCta={{ label: "Nous contacter", href: "/contact" }}
          secondaryCta={{ label: "Notre mission", href: "#mission" }}
          stats={[
            { icon: Calendar, value: "2015", label: "Fondation" },
            { icon: Users, value: "500+", label: "Clients satisfaits" },
            { icon: Shield, value: "99.9%", label: "Disponibilité" },
          ]}
        />

        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
                  <span className="text-sm font-mono font-semibold text-primary">Notre histoire</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6">
                  Bâtir la confiance,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    un serveur à la fois
                  </span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fondé en 2015 à Libreville, SPIDERHOSTER est né de la volonté de proposer des solutions d&apos;hébergement web professionnelles adaptées aux besoins des entreprises africaines.
                  </p>
                  <p>
                    Nous avons construit notre propre infrastructure datacenter au Gabon, garantissant une latence minimale pour nos clients locaux tout en offrant une connectivité internationale optimale.
                  </p>
                  <p>
                    Aujourd&apos;hui, nous hébergeons des centaines de sites web et applications pour des entreprises, startups, administrations et particuliers à travers le Gabon et l&apos;Afrique centrale.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl rounded-2xl" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                        2015
                      </div>
                      <p className="text-sm text-gray-300">Création</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                        500+
                      </div>
                      <p className="text-sm text-gray-300">Clients satisfaits</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                        99.9%
                      </div>
                      <p className="text-sm text-gray-300">Disponibilité</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                        24/7
                      </div>
                      <p className="text-sm text-gray-300">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card h-full">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-4">Notre mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fournir des solutions d&apos;hébergement web fiables, performantes et abordables aux entreprises africaines, en garantissant un support technique de qualité et une infrastructure à la hauteur des standards internationaux.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card h-full">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-4">Notre vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Devenir le leader régional de l&apos;hébergement web en Afrique centrale, en accompagnant la transformation digitale des entreprises avec des infrastructures cloud de nouvelle génération et une expertise technique reconnue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          badgeLabel="Nos Valeurs"
          title="Les principes qui guident"
          highlight="notre action"
          subtitle="Des valeurs fortes qui façonnent chacune de nos décisions, au quotidien"
          features={valeurs}
          columns={4}
        />

        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-mono font-semibold text-accent">Notre équipe</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
                Des experts dédiés à votre réussite
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {equipe.map((membre) => (
                <div key={membre.role} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card text-center h-full">
                    <h3 className="text-xl font-mono font-bold text-foreground mb-3">{membre.role}</h3>
                    <p className="text-muted-foreground leading-relaxed">{membre.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}