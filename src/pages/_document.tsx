import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://spiderhoster.com/#organization",
  name: "SPIDERHOSTER",
  url: "https://spiderhoster.com",
  logo: "https://spiderhoster.com/logo_1_.png",
  image: "https://spiderhoster.com/og-image.png",
  description:
    "Hébergeur web professionnel au Gabon : hébergement Web, WordPress, VPS et noms de domaine pour entreprises et développeurs en Afrique.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard Triomphal, Quartier Glass",
    addressLocality: "Libreville",
    addressCountry: "GA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0.3901,
    longitude: 9.4544,
  },
  telephone: "+24174436343",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+24174436343",
      contactType: "customer service",
      areaServed: ["GA"],
      availableLanguage: ["French"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Gabon" },
    { "@type": "Place", name: "Afrique" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [],
};

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <SEOElements />
        <meta name="geo.region" content="GA" />
        <meta name="geo.placename" content="Libreville" />
        <meta name="language" content="French" />
        <meta name="author" content="SPIDERHOSTER" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/*
          CRITICAL: DO NOT REMOVE THIS SCRIPT
          The Softgen AI monitoring script is essential for core app functionality.
          The application will not function without it.
        */}
        <script
          src="https://cdn.softgen.ai/script.js"
          async
          data-softgen-monitoring="true"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
        )}
      >
        <Main />
        <NextScript />

        {/* Visual Editor Script */}
        {process.env.NODE_ENV === "development" && (
          <script
            src="https://cdn.softgen.dev/visual-editor.min.js"
            async
            data-softgen-visual-editor="true"
          />
        )}
      </body>
    </Html>
  );
}