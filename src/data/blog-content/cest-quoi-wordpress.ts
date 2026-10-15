import type { BlogArticleContent } from "@/lib/blog-content-types";

const content: BlogArticleContent = {
  slug: "cest-quoi-wordpress",
  relatedSlugs: ["optimiser-wordpress-vitesse", "hebergement-wordpress-optimise-a-port-gentil-installez-wordpress-en-5-secondes-avec-spiderhoster-com", "securiser-site-web-ssl"],
  blocks: [
    {
      type: "paragraph",
      content: [
        "Si vous avez commencé à chercher comment créer un site web, vous êtes probablement tombé sur le mot « WordPress » à de nombreuses reprises. Mais concrètement, qu'est-ce que WordPress, et pourquoi équipe-t-il aujourd'hui plus de 40% des sites web dans le monde, entreprises gabonaises comprises ?",
      ],
    },
    {
      type: "heading",
      text: "WordPress, un CMS devenu la référence mondiale",
    },
    {
      type: "paragraph",
      content: [
        "WordPress est un CMS (Content Management System), c'est-à-dire un système de gestion de contenu. Il permet de créer, modifier et publier un site web sans écrire une seule ligne de code. Né en 2003 comme simple outil de blog, il s'est transformé au fil des années en une plateforme capable de gérer des sites vitrines, des boutiques en ligne, des portails d'actualités ou des intranets d'entreprise.",
      ],
    },
    {
      type: "heading",
      text: "Pourquoi WordPress est-il si populaire ?",
    },
    {
      type: "list",
      items: [
        "Gratuit et open-source : le logiciel lui-même ne coûte rien, seuls l'hébergement et le nom de domaine sont à prévoir.",
        "Un écosystème immense : des milliers de thèmes et de plugins permettent d'ajouter facilement de nouvelles fonctionnalités (boutique en ligne, formulaire de contact, réservation, multilingue...).",
        "Facile à prendre en main : l'interface d'administration ne nécessite aucune compétence en développement pour publier du contenu au quotidien.",
        "Pensé pour le référencement : la structure de WordPress facilite le travail de Google pour indexer et comprendre votre contenu.",
        "Une communauté mondiale active : documentation abondante, mises à jour régulières et correctifs de sécurité fréquents.",
      ],
    },
    {
      type: "heading",
      text: "Pour qui est fait WordPress ?",
    },
    {
      type: "paragraph",
      content: [
        "WordPress convient aussi bien à un indépendant qui souhaite un site vitrine simple qu'à une entreprise qui veut lancer une boutique en ligne complète grâce à l'extension WooCommerce. Nous détaillons ce cas d'usage dans notre article ",
        { text: "Créer une boutique en ligne au Gabon avec WooCommerce en acceptant les paiements mobile", href: "/blog/creer-une-boutique-en-ligne-au-gabon-avec-woocommerce-en-acceptant-les-paiements-mobile" },
        ". Les administrations, associations et médias l'utilisent également pour publier du contenu de façon autonome, sans dépendre d'un développeur pour chaque modification.",
      ],
    },
    {
      type: "heading",
      text: "Bien démarrer avec WordPress au Gabon",
    },
    {
      type: "paragraph",
      content: [
        "La qualité de votre hébergement a un impact direct sur les performances de votre site WordPress. Un hébergement généraliste mal configuré peut ralentir considérablement votre installation, tandis qu'un environnement optimisé pour WordPress permet une installation en quelques secondes et des temps de chargement nettement meilleurs. C'est exactement ce que propose notre offre détaillée dans ",
        { text: "Hébergement WordPress optimisé à Port-Gentil : installez WordPress en 5 secondes avec SPIDERHOSTER.com", href: "/blog/hebergement-wordpress-optimise-a-port-gentil-installez-wordpress-en-5-secondes-avec-spiderhoster-com" },
        ".",
      ],
    },
    {
      type: "heading",
      text: "Sécuriser et optimiser votre site WordPress dès le lancement",
    },
    {
      type: "paragraph",
      content: [
        "Une fois votre site en ligne, deux priorités s'imposent : la vitesse et la sécurité. Consultez nos guides ",
        { text: "10 astuces pour accélérer votre site WordPress", href: "/blog/optimiser-wordpress-vitesse" },
        " et ",
        { text: "Pourquoi le certificat SSL est indispensable en 2026", href: "/blog/securiser-site-web-ssl" },
        " pour mettre toutes les chances de votre côté dès les premières semaines.",
      ],
    },
    {
      type: "cta",
      eyebrow: "Hébergement WordPress SPIDERHOSTER",
      title: "Lancez votre site WordPress en 5 secondes",
      description: "Installation automatique, mises à jour, cache et SSL inclus : tout est pensé pour la performance de votre site.",
      buttonLabel: "Découvrir l'hébergement WordPress",
      buttonHref: "/hebergement-wordpress",
    },
  ],
};

export default content;