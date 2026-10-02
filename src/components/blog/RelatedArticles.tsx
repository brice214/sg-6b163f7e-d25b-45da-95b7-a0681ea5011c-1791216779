import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogArticleMeta } from "@/lib/blog-articles";

interface RelatedArticlesProps {
  articles: BlogArticleMeta[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground text-center mb-10">À lire aussi</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
              <div className="h-full p-6 rounded-xl border border-border/50 bg-card group-hover:border-primary/30 transition-all">
                <span className="text-xs font-mono font-semibold text-primary">{article.category}</span>
                <h3 className="font-mono font-bold text-foreground mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Lire l&apos;article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}