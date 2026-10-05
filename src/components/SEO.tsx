import Head from 'next/head';

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
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
