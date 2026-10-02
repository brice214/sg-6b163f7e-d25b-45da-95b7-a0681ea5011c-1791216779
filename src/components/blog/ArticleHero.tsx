import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

interface ArticleHeroProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  coverImage: string;
  coverImageAlt: string;
}

export function ArticleHero({
  category,
  title,
  excerpt,
  date,
  author,
  readTime,
  coverImage,
  coverImageAlt,
}: ArticleHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 font-mono"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au blog
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold mb-5">
            {category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{excerpt}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" /> {author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {readTime} de lecture
            </span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-xl">
          <img src={coverImage} alt={coverImageAlt} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}