import { useMemo, useState } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag, Rss, BookOpen, Layers } from "lucide-react";
import { blogArticles as articles } from "@/lib/blog-articles";

const categories = ["Tous", "Guide", "WordPress", "Sécurité", "Infrastructure", "E-commerce", "Domaines"];
const ARTICLES_PER_PAGE = 3;

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(
    () => (selectedCategory === "Tous" ? articles : articles.filter((a) => a.category === selectedCategory)),
    [selectedCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));

  const paginatedArticles = useMemo(
    () => filteredArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE),
    [filteredArticles, currentPage]
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Blog SPIDERHOSTER | Actualités et Guides Hébergement Web"
        description="Découvrez nos articles sur l'hébergement web, WordPress, sécurité, noms de domaine et transformation digitale au Gabon et en Afrique."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Rss}
          badgeLabel="Blog SPIDERHOSTER"
          titlePrefix="Guides &"
          titleHighlight="Actualités"
          description="Conseils d'experts, guides pratiques et actualités sur l'hébergement web, WordPress et la transformation digitale en Afrique"
          backgroundImage="/generated/blog-editorial.png"
          imageAlt="Rédaction blog SPIDERHOSTER"
          primaryCta={{ label: "Découvrir les articles", href: "#articles" }}
          secondaryCta={{ label: "Voir nos offres", href: "/hebergement-web" }}
          stats={[
            { icon: BookOpen, value: "50+", label: "Articles publiés" },
            { icon: Tag, value: "6", label: "Catégories" },
            { icon: Layers, value: "Hebdo", label: "Nouvelles parutions" },
          ]}
        />

        <section className="py-10 bg-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(cat)}
                  className={
                    selectedCategory === cat
                      ? "bg-primary hover:bg-primary/90 text-white font-mono"
                      : "border-border/50 font-mono hover:border-primary/40"
                  }
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            {paginatedArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {paginatedArticles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group relative block animate-slide-up"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl" />
                    <Card className="relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
                      <div className="h-44 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden flex items-center justify-center">
                        {article.coverImage ? (
                          <img
                            src={article.coverImage}
                            alt={article.coverImageAlt || article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <Tag className="w-14 h-14 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{article.date}</span>
                          </div>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded font-mono font-semibold">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-mono font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="w-3.5 h-3.5" />
                            <span>{article.author}</span>
                          </div>
                          <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                            Lire <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-mono">Aucun article dans cette catégorie pour le moment.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  className="border-border/50"
                >
                  Précédent
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    variant={page === currentPage ? "default" : "outline"}
                    className={page === currentPage ? "bg-primary text-white hover:bg-primary/90" : "border-border/50"}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  className="border-border/50"
                >
                  Suivant
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
              <div className="relative z-10 text-center text-white p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
                  Restez <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">informé</span>
                </h2>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Recevez nos derniers articles et actualités directement dans votre boîte email
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8">
                    S&apos;abonner
                  </Button>
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