import Link from "next/link";
import type { GetServerSideProps } from "next";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { legacyArticles, legacyCategoryLabels, type LegacyArticleMeta } from "@/lib/legacy-articles";
import { ArrowLeft } from "lucide-react";

const categoryHubLinks: Record<string, { label: string; href: string }> = {
  "hebergement-web": { label: "Voir nos offres d'hébergement web", href: "/hebergement-web" },
  wordpress: { label: "Voir nos offres d'hébergement WordPress", href: "/hebergement-wordpress" },
  domaine: { label: "Rechercher un nom de domaine", href: "/domaines" },
  securite: { label: "Voir nos offres d'hébergement sécurisé", href: "/hebergement-web" },
  "e-commerce": { label: "Démarrer votre boutique en ligne", href: "/hebergement-web" },
};

interface LegacyArticlePageProps {
  meta: LegacyArticleMeta;
}

export default function LegacyArticlePage({ meta }: LegacyArticlePageProps) {
  const hub = categoryHubLinks[meta.category];
  const categoryLabel = legacyCategoryLabels[meta.category] || meta.category;

  return (
    <>
      <SEO
        title={`${meta.title} | Blog SPIDERHOSTER`}
        description={`${meta.title} - Decouvrez cet article sur le blog SPIDERHOSTER, votre hebergeur web au Gabon.`}
        url={`https://spiderhoster.com/${meta.category}/${meta.slug}`}
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <ArticleHero
          category={categoryLabel}
          title={meta.title}
          excerpt="Article a paraitre prochainement sur le blog SPIDERHOSTER."
          date={meta.date}
          author="Equipe SPIDERHOSTER"
          readTime="5 min"
          coverImage="/generated/blog-editorial.png"
          coverImageAlt={meta.title}
        />
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
              <div className="min-w-0 text-center py-10">
                <p className="text-muted-foreground font-mono mb-6">
                  Cet article est en cours de redaction. Revenez bientot pour le decouvrir !
                </p>
                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="h-4 w-4" /> Retour au blog
                  </Link>
                  {hub ? (
                    <Link
                      href={hub.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {hub.label}
                    </Link>
                  ) : null}
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<LegacyArticlePageProps> = async (context) => {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;

  const meta = legacyArticles.find((item) => item.category === category && item.slug === slug);

  if (!meta) {
    return { notFound: true };
  }

  return {
    props: {
      meta,
    },
  };
};