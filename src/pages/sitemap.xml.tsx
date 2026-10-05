import type { GetServerSideProps } from "next";
import { blogArticles } from "@/lib/blog-articles";

const BASE_URL = "https://spiderhoster.com";

const staticPages = [
  { path: "", priority: "1.0", freq: "weekly" },
  { path: "hebergement-web", priority: "0.9", freq: "weekly" },
  { path: "hebergement-wordpress", priority: "0.9", freq: "weekly" },
  { path: "hebergement-vps", priority: "0.9", freq: "weekly" },
  { path: "domaines", priority: "0.9", freq: "weekly" },
  { path: "emails-professionnels", priority: "0.7", freq: "weekly" },
  { path: "a-propos", priority: "0.6", freq: "monthly" },
  { path: "blog", priority: "0.8", freq: "daily" },
  { path: "contact", priority: "0.6", freq: "monthly" },
];

function generateSiteMap(): string {
  const staticUrls = staticPages
    .map(
      (p) =>
        `  <url>\n    <loc>${BASE_URL}/${p.path}</loc>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    )
    .join("\n");

  const articleUrls = blogArticles
    .map(
      (a) =>
        `  <url>\n    <loc>${BASE_URL}/${a.urlCategory}/${a.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${staticUrls}\n${articleUrls}\n</urlset>`;
}

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
};