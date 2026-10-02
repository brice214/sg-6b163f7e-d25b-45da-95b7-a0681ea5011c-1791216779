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

interface ArticlePageProps {
  meta: BlogArticleMeta;
  content: BlogArticleContent | null;
  related: BlogArticleMeta[];
}

export default function ArticlePage({ meta, content, related }: ArticlePageProps) {
  return (
    <>
      <SEO
        title={`${meta.title} | Blog SPIDERHOSTER`}
        description={meta.metaDescription || meta.excerpt}
        image={meta.coverImage}
        url={`https://spiderhoster.com/blog/${meta.slug}`}
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
                {content ? (
                  <ArticleBody blocks={content.blocks} />
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground font-mono mb-6">
                      Cet article est en cours de rédaction. Revenez bientôt pour le découvrir !
                    </p>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                      <ArrowLeft className="h-4 w-4" /> Retour au blog
                    </Link>
                  </div>
                )}
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

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (context) => {
  const slug = context.params?.slug as string;
  const meta = blogArticles.find((article) => article.slug === slug);

  if (!meta) {
    return { notFound: true };
  }

  const content = blogContentMap[slug] || null;
  const relatedSlugs = content?.relatedSlugs || [];
  const related = blogArticles.filter((article) => relatedSlugs.includes(article.slug));

  return {
    props: {
      meta,
      content,
      related,
    },
  };
};