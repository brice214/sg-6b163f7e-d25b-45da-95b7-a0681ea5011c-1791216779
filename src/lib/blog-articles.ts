export interface BlogArticleMeta {
  slug: string;
  urlCategory: string;
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
    urlCategory: "hebergement-web",
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
    urlCategory: "wordpress",
    title: "10 astuces pour accélérer votre site WordPress",
    excerpt:
      "Des techniques concrètes pour réduire le temps de chargement de votre site WordPress et améliorer l'expérience utilisateur.",
    category: "WordPress",
    date: "22 Sept 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "6 min",
    metaDescription:
      "10 astuces concrètes pour accélérer votre site WordPress : hébergement optimisé, cache, images, CDN. Guide complet SPIDERHOSTER pour améliorer votre vitesse et votre SEO.",
    keywords: ["optimiser WordPress", "accélérer site WordPress", "vitesse WordPress", "hébergement WordPress Gabon"],
    coverImage: "/generated/wordpress-vitesse-optimisation.png",
    coverImageAlt: "Astuces pour optimiser la vitesse d'un site WordPress",
  },
  {
    slug: "securiser-site-web-ssl",
    urlCategory: "securite",
    title: "Pourquoi le certificat SSL est indispensable en 2026",
    excerpt:
      "Comprendre l'importance du HTTPS pour la sécurité, le référencement et la confiance de vos visiteurs.",
    category: "Sécurité",
    date: "15 Sept 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "5 min",
    metaDescription:
      "Découvrez pourquoi le certificat SSL est indispensable en 2026 : sécurité, confiance, référencement Google. SSL gratuit inclus sur tous les forfaits SPIDERHOSTER.",
    keywords: ["certificat SSL", "HTTPS site web", "sécuriser site internet", "SSL gratuit Gabon"],
    coverImage: "/generated/certificat-ssl-securite-site.png",
    coverImageAlt: "Importance du certificat SSL pour sécuriser un site web",
  },
  {
    slug: "vps-vs-hebergement-partage",
    urlCategory: "hebergement-web",
    title: "VPS ou hébergement partagé : quel choix pour votre projet ?",
    excerpt:
      "Analyse comparative des deux solutions pour vous aider à choisir l'infrastructure adaptée à votre croissance.",
    category: "Infrastructure",
    date: "08 Sept 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "7 min",
    metaDescription:
      "VPS ou hébergement mutualisé : comparatif complet pour choisir la solution adaptée à votre projet (performance, coût, évolutivité). Guide SPIDERHOSTER.",
    keywords: ["VPS vs hébergement mutualisé", "serveur privé virtuel", "hébergement partagé", "choisir VPS Gabon"],
    coverImage: "/generated/vps-hebergement-partage-comparatif.png",
    coverImageAlt: "Comparatif entre VPS et hébergement partagé",
  },
  {
    slug: "lancer-boutique-en-ligne-gabon",
    urlCategory: "e-commerce",
    title: "Lancer sa boutique en ligne au Gabon : le guide complet",
    excerpt:
      "Étapes essentielles pour créer un e-commerce performant, de l'hébergement au paiement mobile money.",
    category: "E-commerce",
    date: "01 Sept 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "8 min",
    metaDescription:
      "Guide complet pour lancer sa boutique en ligne au Gabon : hébergement, nom de domaine, SSL, paiement mobile money. Conseils pratiques SPIDERHOSTER.",
    keywords: ["boutique en ligne Gabon", "e-commerce Gabon", "créer site e-commerce", "paiement mobile money Gabon"],
    coverImage: "/generated/boutique-en-ligne-gabon-ecommerce.png",
    coverImageAlt: "Guide pour lancer une boutique en ligne au Gabon",
  },
  {
    slug: "choisir-nom-de-domaine",
    urlCategory: "domaine",
    title: "Comment bien choisir son nom de domaine",
    excerpt:
      "Les critères essentiels pour sélectionner un nom de domaine qui renforce votre identité de marque.",
    category: "Domaines",
    date: "25 Août 2026",
    author: "Équipe SPIDERHOSTER",
    readTime: "6 min",
    metaDescription:
      "Comment bien choisir son nom de domaine : critères essentiels, extensions (.ga, .com, .africa), protection de marque. Guide SPIDERHOSTER.",
    keywords: ["choisir nom de domaine", "nom de domaine Gabon", "extension .ga", "réserver domaine"],
    coverImage: "/generated/choisir-nom-domaine-gabon.png",
    coverImageAlt: "Comment bien choisir son nom de domaine",
  },
];