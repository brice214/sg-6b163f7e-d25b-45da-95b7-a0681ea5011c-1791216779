import type { GetServerSideProps } from "next";
import { blogArticles } from "@/lib/blog-articles";

export default function LegacyBlogSlugRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const meta = blogArticles.find((article) => article.slug === slug);

  if (!meta) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: `/${meta.urlCategory}/${meta.slug}`,
      permanent: true,
    },
  };
};