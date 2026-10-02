import Head from "next/head";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogArticles, type BlogArticleMeta } from "@/lib/blog-articles";
import { blogContentMap } from "@/data/blog-content";
import type { BlogArticleContent } from "@/lib/blog-content-types";
import { legacyArticles, legacyCategoryLabels, type LegacyArticleMeta } from "@/lib/legacy-articles";

const categoryHubLinks: Record<string, { label: string; href: string }> = {
  "hebergement-web": { label: "Voir nos offres d'hébergement web", href: "/hebergement-web" },
  wordpress: { label: "Voir nos offres d'hébergement WordPress", href: "/hebergement-wordpress" },
  domaine: { label: "Rechercher un nom de domaine", href: "/domaines" },
  securite: { label: "Voir nos offres d'hébergement sécurisé", href: "/hebergement-web" },
  "e-commerce": { label: "Démarrer votre boutique en ligne", href: "/hebergement-web" },
};

interface PublishedProps {
  kind: "published";
  meta: BlogArticleMeta;
  content: BlogArticleContent | null;
  related: BlogArticleMeta[];
}

interface LegacyProps {
  kind: "legacy";
  meta: LegacyArticleMeta;
}

type ArticlePageProps = PublishedProps | LegacyProps;

function ComingSoon({ hubHref, hubLabel }: { hubHref?: string; hubLabel?: string }) {
  return (
    <div className="text-center py-10">
      <p className="text-muted-foreground font-mono mb-6">
        Cet article est en cours de rédaction. Revenez bientôt pour le découvrir !
      </p>
      <div className="flex flex-col items-center gap-3">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          <ArrowLeft className="h-4 w-4" /> Retour au blog
        </Link>
        {hubHref ? (
          <Link href={hubHref} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {hubLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function ArticlePage(props: ArticlePageProps) {
  if (props.kind === "published") {
    const { meta, content, related } = props;
    const hub = categoryHubLinks[meta.urlCategory];

    return (
      <>
        <SEO
          title={`${meta.title} | Blog SPIDERHOSTER`}
          description={meta.metaDescription || meta.excerpt}
          image={meta.coverImage}
          url={`https://spiderhoster.com/${meta.urlCategory}/${meta.slug}`}
        />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: meta.title,
                description: meta.metaDescription || meta.excerpt,
                author: { "@type": "Organization", name: meta.author },
                publisher: { "@type": "Organization", name: "SPIDERHOSTER" },
                datePublished: meta.date,
              }),
            }}
          />
        </Head>
        <SpiderWeb />
        <div className="relative z-10">
          <Header />
          <ArticleHero
            category={meta.category}
            title={meta.title}
            excerpt={meta.excerpt}
            date={meta.date}
            author={meta.author}
            readTime={meta.readTime || "5 min"}
            coverImage={meta.coverImage || "/generated/blog-editorial.png"}
            coverImageAlt={meta.coverImageAlt || meta.title}
          />
          <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
                <div className="min-w-0">
                  {content ? <ArticleBody blocks={content.blocks} /> : <ComingSoon hubHref={hub?.href} hubLabel={hub?.label} />}
                </div>
                <BlogSidebar />
              </div>
            </div>
          </section>
          <RelatedArticles articles={related} />
          <Footer />
        </div>
      </>
    );
  }

  const { meta } = props;
  const hub = categoryHubLinks[meta.category];
  const categoryLabel = legacyCategoryLabels[meta.category] || meta.category;

  return (
    <>
      <SEO
        title={`${meta.title} | Blog SPIDERHOSTER`}
        description={`${meta.title} — Découvrez cet article sur le blog SPIDERHOSTER, votre hébergeur web au Gabon.`}
        url={`https://spiderhoster.com/${meta.category}/${meta.slug}`}
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <ArticleHero
          category={categoryLabel}
          title={meta.title}
          excerpt="Article à paraître prochainement sur le blog SPIDERHOSTER."
          date={meta.date}
          author="Équipe SPIDERHOSTER"
          readTime="5 min"
          coverImage="/generated/blog-editorial.png"
          coverImageAlt={meta.title}
        />
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
              <ComingSoon hubHref={hub?.href} hubLabel={hub?.label} />
              <BlogSidebar />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (context) => {
  const category = context.params?.category as string;
  const slug = context.params?.slug as string;

  const publishedMeta = blogArticles.find((article) => article.urlCategory === category && article.slug === slug);

  if (publishedMeta) {
    const content = blogContentMap[slug] || null;
    const relatedSlugs = content?.relatedSlugs || [];
    const related = blogArticles.filter((article) => relatedSlugs.includes(article.slug));

    return {
      props: {
        kind: "published",
        meta: publishedMeta,
        content,
        related,
      },
    };
  }

  const legacyMeta = legacyArticles.find((article) => article.category === category && article.slug === slug);

  if (legacyMeta) {
    return {
      props: {
        kind: "legacy",
        meta: legacyMeta,
      },
    };
  }

  return { notFound: true };
};