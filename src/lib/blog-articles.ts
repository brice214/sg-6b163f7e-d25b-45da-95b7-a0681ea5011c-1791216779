export interface BlogArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime?: string;
  metaDescription?: string;
  keywords?: string[];
  coverImage?: string;
  coverImageAlt?: string;
}

export const blogArticles: BlogArticleMeta[] = [
  {
    slug: "choisir-hebergement-web-gabon",
    title: "Comment choisir son hébergement web au Gabon en 2026",
    excerpt:
      "Guide complet pour sélectionner l'hébergeur idéal selon vos besoins : performance, support local, sécurité et budget.",
    category: "Guide",
    date: "28 Sept 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "7 min",
    metaDescription:
      "Découvrez comment choisir le meilleur hébergement web au Gabon en 2026 : performance, sécurité, support local et paiement mobile money. Guide complet SPIDERHOSTER.",
    keywords: [
      "hébergement web Gabon",
      "hébergeur Gabon",
      "choisir hébergement web",
      "hébergement professionnel Afrique",
    ],
    coverImage: "/generated/hebergement-web-gabon-guide.png",
    coverImageAlt: "Guide pour choisir son hébergement web au Gabon en 2026",
  },
  {
    slug: "optimiser-wordpress-vitesse",
    title: "10 astuces pour accélérer votre site WordPress",
    excerpt:
      "Des techniques concrètes pour réduire le temps de chargement de votre site WordPress et améliorer l'expérience utilisateur.",
    category: "WordPress",
    date: "22 Sept 2026",
    author: "Équipe SPIDERHOSTER",
  },
  {
    slug: "securiser-site-web-ssl",
    title: "Pourquoi le certificat SSL est indispensable en 2026",
    excerpt:
      "Comprendre l'importance du HTTPS pour la sécurité, le référencement et la confiance de vos visiteurs.",
    category: "Sécurité",
    date: "15 Sept 2026",
    author: "Équipe SPIDERHOSTER",
  },
  {
    slug: "vps-vs-hebergement-partage",
    title: "VPS ou hébergement partagé : quel choix pour votre projet ?",
    excerpt:
      "Analyse comparative des deux solutions pour vous aider à choisir l'infrastructure adaptée à votre croissance.",
    category: "Infrastructure",
    date: "08 Sept 2026",
    author: "Équipe SPIDERHOSTER",
  },
  {
    slug: "lancer-boutique-en-ligne-gabon",
    title: "Lancer sa boutique en ligne au Gabon : le guide complet",
    excerpt:
      "Étapes essentielles pour créer un e-commerce performant, de l'hébergement au paiement mobile money.",
    category: "E-commerce",
    date: "01 Sept 2026",
    author: "Équipe SPIDERHOSTER",
  },
  {
    slug: "choisir-nom-de-domaine",
    title: "Comment bien choisir son nom de domaine",
    excerpt:
      "Les critères essentiels pour sélectionner un nom de domaine qui renforce votre identité de marque.",
    category: "Domaines",
    date: "25 Août 2026",
    author: "Équipe SPIDERHOSTER",
  },
];