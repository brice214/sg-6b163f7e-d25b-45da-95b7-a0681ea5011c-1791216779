import { Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/lib/blog-articles";

const FRENCH_MONTHS: Record<string, number> = {
  jan: 0,
  fev: 1,
  mar: 2,
  avr: 3,
  mai: 4,
  juin: 5,
  juil: 6,
  aout: 7,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseFrenchDate(dateStr: string): number {
  const parts = dateStr.trim().split(" ");
  const day = parseInt(parts[0], 10);
  const monthKey = parts[1]
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const month = FRENCH_MONTHS[monthKey] ?? 0;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day).getTime();
}

export function BlogPreview() {
  const articles = [...blogArticles]
    .sort((a, b) => parseFrenchDate(b.date) - parseFrenchDate(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16 animate-slide-up">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-mono font-semibold text-accent">Blog</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
              Derniers articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Conseils, tutoriels et actualités pour optimiser votre présence en ligne
            </p>
          </div>

          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/blog">
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={article.slug}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime ?? "5 min"}</span>
                  </div>
                </div>

                <h3 className="text-xl font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Lire
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button asChild variant="outline">
            <Link href="/blog">
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}