import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { PricingSection, type PricingPlan } from "@/components/shared/PricingSection";
import { PageFAQ, type FAQItem } from "@/components/shared/PageFAQ";
import { Sparkles, Zap, Shield, Database, Layers, RefreshCw, Settings } from "lucide-react";

const forfaits: PricingPlan[] = [
  {
    name: "WP Lanceur",
    description: "Parfait pour débuter avec WordPress",
    priceMonthly: "4700",
    priceAnnually: "56400",
    urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-lanceur&billingcycle=monthly",
    urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-lanceur&billingcycle=annually",
    features: [
      "10 GB de stockage",
      "Bande passante Illimitée",
      "1 Base de données",
      "1 Sous-domaine",
      "10 Comptes Emails",
      "Mise en scène WordPress",
      "Outils de gestion WordPress",
      "Certificat SSL Gratuit",
      "WP-CLI et SSH",
      "Support 24/7",
    ],
  },
  {
    name: "WP Pro",
    description: "Pour sites professionnels performants",
    priceMonthly: "6200",
    priceAnnually: "74400",
    urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-pro&billingcycle=monthly",
    urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-pro&billingcycle=annually",
    features: [
      "30 GB de stockage",
      "Bande passante Illimitée",
      "1 Base de données",
      "2 Sous-domaine",
      "20 Comptes Emails",
      "Mise en scène WordPress",
      "Outils de gestion WordPress",
      "Certificat SSL Gratuit",
      "WP-CLI et SSH",
      "Support 24/7",
    ],
    popular: true,
  },
  {
    name: "WP Premium",
    description: "Performance maximale pour WordPress",
    priceMonthly: "10500",
    priceAnnually: "126000",
    urlMonthly: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-premium&billingcycle=monthly",
    urlAnnually: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress/wordpress-premium&billingcycle=annually",
    features: [
      "Espace web Illimité",
      "Bande passante Illimitée",
      "1 Base de données",
      "5 Sous-domaine",
      "30 Comptes Emails",
      "Mise en scène WordPress",
      "Outils de gestion WordPress",
      "Certificat SSL Gratuit",
      "WP-CLI et SSH",
      "Support 24/7",
    ],
  },
];

const optimisations: FeatureItem[] = [
  {
    icon: Zap,
    title: "Cache WordPress avancé",
    description: "Système de cache multi-niveaux (page, objet, opcode) pour des performances maximales",
  },
  {
    icon: Layers,
    title: "Environnement de staging",
    description: "Testez vos modifications sur une copie avant de les publier en production",
  },
  {
    icon: RefreshCw,
    title: "Mises à jour automatiques",
    description: "WordPress, thèmes et plugins toujours à jour automatiquement pour votre sécurité",
  },
  {
    icon: Settings,
    title: "WordPress Manager",
    description: "Interface dédiée pour gérer facilement tous vos sites WordPress depuis un seul endroit",
  },
  {
    icon: Database,
    title: "Base de données optimisée",
    description: "MariaDB optimisé spécifiquement pour WordPress avec query cache",
  },
  {
    icon: Shield,
    title: "Sécurité renforcée",
    description: "Firewall applicatif, protection contre les attaques et détection de malware",
  },
];

const faq: FAQItem[] = [
  {
    question: "Qu'est-ce que l'hébergement WordPress optimisé ?",
    answer: "C'est un hébergement spécialement configuré pour WordPress avec cache avancé, mises à jour automatiques, environnement de staging et outils de gestion dédiés pour garantir performance et sécurité maximales.",
  },
  {
    question: "WordPress est-il préinstallé ?",
    answer: "Oui, WordPress est préinstallé et prêt à l'emploi. Vous pouvez commencer à créer votre site immédiatement après la commande.",
  },
  {
    question: "Qu'est-ce qu'un environnement de staging ?",
    answer: "C'est une copie de votre site où vous pouvez tester vos modifications (thèmes, plugins, contenus) avant de les appliquer sur votre site en production. Disponible à partir du forfait Business.",
  },
  {
    question: "Les mises à jour sont-elles automatiques ?",
    answer: "Oui, WordPress, vos thèmes et plugins sont mis à jour automatiquement pour garantir la sécurité. Vous pouvez également gérer manuellement les mises à jour si vous préférez.",
  },
  {
    question: "Puis-je migrer mon site WordPress existant ?",
    answer: "Absolument ! Nous offrons un service de migration gratuit. Notre équipe technique transfère votre site sans interruption de service.",
  },
  {
    question: "Quels plugins sont recommandés ?",
    answer: "Nous recommandons des plugins légers et bien codés. Notre équipe peut vous conseiller sur les meilleurs plugins pour vos besoins tout en maintenant les performances optimales.",
  },
  {
    question: "Le cache WordPress est-il inclus ?",
    answer: "Oui, nous intégrons un système de cache multi-niveaux (page, objet, opcode) optimisé spécifiquement pour WordPress, sans besoin de plugin supplémentaire.",
  },
  {
    question: "Puis-je utiliser n'importe quel thème ou plugin ?",
    answer: "Oui, vous pouvez installer n'importe quel thème ou plugin WordPress. Nous recommandons cependant des extensions bien codées pour maintenir les performances.",
  },
];

export default function HebergementWordPress() {
  return (
    <>
      <SEO
        title="Hébergement WordPress Gabon | Optimisé & Ultra-Rapide - SPIDERHOSTER"
        description="Hébergement WordPress au Gabon dès 4 700 FCFA/mois : cache avancé, staging, mises à jour automatiques, WP Manager. Installation en 5 secondes."
        url="https://spiderhoster.com/hebergement-wordpress"
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Sparkles}
          badgeLabel="Hébergement WordPress Optimisé"
          titlePrefix="WordPress"
          titleHighlight="Surpuissant"
          description="Hébergement WordPress optimisé avec cache avancé, staging, mises à jour automatiques et gestion simplifiée pour des performances exceptionnelles"
          backgroundImage="/Hebergement-WordPress-Gabon.png"
          imageAlt="Hébergement WordPress au Gabon avec logo WordPress - SPIDERHOSTER"
          primaryCta={{
            label: "Choisir mon forfait",
            href: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress",
          }}
          secondaryCta={{ label: "Voir les forfaits", href: "#offres" }}
          stats={[
            { icon: Zap, value: "3x", label: "Plus rapide" },
            { icon: RefreshCw, value: "Auto", label: "Mises à jour" },
            { icon: Settings, value: "Pro", label: "WP Manager" },
          ]}
        />
        <FeatureGrid
          badgeLabel="Optimisations incluses"
          title="Conçu pour la"
          highlight="performance WordPress"
          subtitle="Des fonctionnalités avancées pour maximiser la performance et la sécurité de vos sites WordPress"
          features={optimisations}
        />
        <PricingSection
          id="offres"
          badgeLabel="Nos Forfaits"
          title="Forfaits d'hébergement WordPress"
          subtitle="Du blog personnel au site e-commerce, trouvez le forfait adapté à votre projet"
          plans={forfaits}
          billingToggle
          footnote="💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces"
        />
        <PageFAQ
          badgeLabel="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur notre hébergement WordPress"
          faqs={faq}
        />
        <Footer />
      </div>
    </>
  );
}