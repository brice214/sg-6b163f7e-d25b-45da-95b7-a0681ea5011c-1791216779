import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function APropos() {
  const valeurs = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque service que nous offrons, avec une infrastructure de pointe et un support technique réactif."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Une équipe locale au Gabon, disponible 24/7, qui comprend les besoins spécifiques des entreprises africaines."
    },
    {
      icon: Award,
      title: "Fiabilité",
      description: "Infrastructure redondante, garantie uptime 99.9% et sauvegardes automatiques pour la continuité de vos activités."
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Tarifs clairs sans frais cachés, et communication transparente sur nos services et notre infrastructure."
    }
  ];

  const equipe = [
    {
      role: "Direction",
      description: "Une équipe de passionnés avec plus de 10 ans d'expérience dans l'hébergement web et les infrastructures cloud"
    },
    {
      role: "Support Technique",
      description: "Ingénieurs certifiés disponibles 24/7 pour vous accompagner et résoudre tous vos problèmes techniques"
    },
    {
      role: "Datacenter",
      description: "Infrastructure de pointe à Libreville avec connexions redondantes et systèmes de refroidissement optimisés"
    }
  ];

  return (
    <>
      <SEO 
        title="À propos de SPIDERHOSTER | Hébergeur Web Professionnel au Gabon"
        description="SPIDERHOSTER est le premier hébergeur web professionnel gabonais. Infrastructure fiable, support local 24/7 et expertise reconnue depuis 2015."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                À propos de{" "}
                <span className="text-primary">SPIDERHOSTER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Leader de l'hébergement web professionnel au Gabon et en Afrique centrale
              </p>
            </div>
          </div>
        </section>

        {/* Histoire Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-6">
                    Notre histoire
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Fondé en 2015 à Libreville, SPIDERHOSTER est né de la volonté de proposer des solutions d'hébergement web professionnelles adaptées aux besoins des entreprises africaines.
                    </p>
                    <p>
                      Nous avons construit notre propre infrastructure datacenter au Gabon, garantissant une latence minimale pour nos clients locaux tout en offrant une connectivité internationale optimale.
                    </p>
                    <p>
                      Aujourd'hui, nous hébergeons des centaines de sites web et applications pour des entreprises, startups, administrations et particuliers à travers le Gabon et l'Afrique centrale.
                    </p>
                  </div>
                </div>
                
                <Card className="p-8 border-2">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-mono font-bold text-primary mb-2">2015</div>
                      <p className="text-muted-foreground">Création de SPIDERHOSTER</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-primary mb-2">500+</div>
                      <p className="text-muted-foreground">Clients satisfaits</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-primary mb-2">99.9%</div>
                      <p className="text-muted-foreground">Garantie de disponibilité</p>
                    </div>
                    <div>
                      <div className="text-4xl font-mono font-bold text-primary mb-2">24/7</div>
                      <p className="text-muted-foreground">Support technique</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
                    Notre mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fournir des solutions d'hébergement web fiables, performantes et abordables aux entreprises africaines, en garantissant un support technique de qualité et une infrastructure à la hauteur des standards internationaux.
                  </p>
                </Card>
                
                <Card className="p-8 border-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-mono font-bold text-foreground mb-4">
                    Notre vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Devenir le leader régional de l'hébergement web en Afrique centrale, en accompagnant la transformation digitale des entreprises avec des infrastructures cloud de nouvelle génération et une expertise technique reconnue.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Nos valeurs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre action au quotidien
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {valeurs.map((valeur, index) => {
                const Icon = valeur.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {valeur.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {valeur.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Équipe Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-4">
                Notre équipe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des experts dédiés à votre réussite
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {equipe.map((membre, index) => (
                <Card key={index} className="p-6 border-2 text-center hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-mono font-bold text-foreground mb-3">
                    {membre.role}
                  </h3>
                  <p className="text-muted-foreground">
                    {membre.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
                Rejoignez-nous
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Faites confiance à l'expertise locale pour héberger vos projets web
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href="https://spiderhoster.com/portail" target="_blank" rel="noopener noreferrer">
                    Commencer maintenant
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