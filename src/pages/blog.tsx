import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "Comment choisir son hébergement web au Gabon",
      excerpt: "Guide complet pour sélectionner l'hébergement adapté à votre projet : critères essentiels, types d'hébergement et conseils pratiques.",
      date: "15 Janvier 2026",
      author: "Équipe SPIDERHOSTER",
      category: "Guide",
      image: "/generated/blog-hebergement.png",
      slug: "choisir-hebergement-web-gabon"
    },
    {
      title: "Optimiser la vitesse de votre site WordPress",
      excerpt: "10 techniques éprouvées pour accélérer votre site WordPress et améliorer l'expérience utilisateur : cache, CDN, optimisation images.",
      date: "8 Janvier 2026",
      author: "Équipe SPIDERHOSTER",
      category: "WordPress",
      image: "/generated/blog-wordpress.png",
      slug: "optimiser-vitesse-wordpress"
    },
    {
      title: "Sécurité web : Protéger votre site contre les attaques",
      excerpt: "Les meilleures pratiques de sécurité pour protéger votre site web : SSL, pare-feu, sauvegardes, mises à jour et authentification.",
      date: "2 Janvier 2026",
      author: "Équipe SPIDERHOSTER",
      category: "Sécurité",
      image: "/generated/blog-securite.png",
      slug: "securite-web-protection"
    },
    {
      title: "VPS vs Hébergement mutualisé : Que choisir ?",
      excerpt: "Comparaison détaillée entre VPS et hébergement mutualisé pour vous aider à choisir la solution adaptée à vos besoins et budget.",
      date: "28 Décembre 2025",
      author: "Équipe SPIDERHOSTER",
      category: "Infrastructure",
      image: "/generated/blog-vps.png",
      slug: "vps-vs-hebergement-mutualise"
    },
    {
      title: "E-commerce au Gabon : Lancer sa boutique en ligne",
      excerpt: "Guide pratique pour créer et héberger votre boutique en ligne au Gabon : plateformes, paiements mobiles, logistique et marketing.",
      date: "20 Décembre 2025",
      author: "Équipe SPIDERHOSTER",
      category: "E-commerce",
      image: "/generated/blog-ecommerce.png",
      slug: "ecommerce-gabon-guide"
    },
    {
      title: "Noms de domaine : Tout ce qu'il faut savoir",
      excerpt: "Guide complet sur les noms de domaine : choix, enregistrement, gestion DNS, transfert et renouvellement. Devenez expert !",
      date: "15 Décembre 2025",
      author: "Équipe SPIDERHOSTER",
      category: "Domaines",
      image: "/generated/blog-domaine.png",
      slug: "noms-de-domaine-guide-complet"
    }
  ];

  const categories = ["Tous", "Guide", "WordPress", "Sécurité", "Infrastructure", "E-commerce", "Domaines"];

  return (
    <>
      <SEO 
        title="Blog SPIDERHOSTER | Actualités et Guides Hébergement Web"
        description="Découvrez nos articles sur l'hébergement web, WordPress, sécurité, noms de domaine et transformation digitale au Gabon et en Afrique."
      />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground mb-6 leading-tight">
                Blog{" "}
                <span className="text-primary">SPIDERHOSTER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Actualités, guides et conseils sur l'hébergement web, WordPress et la transformation digitale
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary text-white" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 flex flex-col">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Tag className="w-16 h-16 text-primary/30" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                        {article.category}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-mono font-bold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Lire <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" disabled>
                Précédent
              </Button>
              <Button className="bg-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">
                Suivant
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
                Restez informé
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Recevez nos derniers articles et actualités directement dans votre boîte email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  S'abonner
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