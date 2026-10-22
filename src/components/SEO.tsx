import Head from 'next/head';
import { useRouter } from 'next/router';
import { getLocaleFromPath, isPathLocalized, toEnglishPath, toFrenchPath } from '@/lib/i18n/routes';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "SPIDERHOSTER - Hébergement Web, WordPress, VPS & Noms de Domaine au Gabon",
  description = "Hébergeur web n°1 au Gabon : hébergement Web, WordPress, VPS et noms de domaine. Infrastructure fiable à Libreville, support 24/7, paiement Airtel Money & Moov Money.",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="SPIDERHOSTER" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Viewport and mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

// Default SEO component for use in pages/_app.tsx or individual pages (uses next/head)
export function SEO(props: SEOProps) {
  const router = useRouter();
  const currentPath = (router.asPath || "/").split("?")[0].split("#")[0];
  const locale = getLocaleFromPath(currentPath);
  const baseUrl = "https://spiderhoster.com";
  const buildUrl = (path: string) => (path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`);

  let hreflangLinks: { hrefLang: string; href: string }[] = [];
  if (locale === "en") {
    const frPath = toFrenchPath(currentPath);
    hreflangLinks = [
      { hrefLang: "en", href: buildUrl(currentPath) },
      { hrefLang: "fr", href: buildUrl(frPath) },
      { hrefLang: "x-default", href: buildUrl(frPath) },
    ];
  } else if (isPathLocalized(currentPath)) {
    const enPath = toEnglishPath(currentPath);
    hreflangLinks = [
      { hrefLang: "fr", href: buildUrl(currentPath) },
      { hrefLang: "en", href: buildUrl(enPath) },
      { hrefLang: "x-default", href: buildUrl(currentPath) },
    ];
  }

  return (
    <Head>
      <SEOElements {...props} />
      {hreflangLinks.map((link) => (
        <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
      ))}
    </Head>
  );
}
