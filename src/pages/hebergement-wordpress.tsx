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
    name: "WP Starter",
    description: "Parfait pour débuter avec WordPress",
    price: "7 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress",
    features: [
      "1 site WordPress",
      "15 Go SSD",
      "WordPress préinstallé",
      "Mises à jour automatiques",
      "SSL gratuit",
      "CDN gratuit",
      "Cache WordPress optimisé",
      "Support 24/7",
    ],
  },
  {
    name: "WP Business",
    description: "Pour sites professionnels performants",
    price: "20 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress",
    features: [
      "3 sites WordPress",
      "75 Go SSD",
      "WordPress Manager avancé",
      "Environnement de staging",
      "SSL gratuit",
      "CDN gratuit",
      "Cache + optimisation image",
      "Support prioritaire 24/7",
      "Sauvegarde quotidienne",
      "Migration gratuite",
    ],
    popular: true,
  },
  {
    name: "WP Premium",
    description: "Performance maximale pour WordPress",
    price: "45 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-wordpress",
    features: [
      "Sites WordPress illimités",
      "200 Go SSD",
      "WordPress Manager Pro",
      "Staging illimité",
      "SSL gratuit",
      "CDN + Object Cache",
      "Optimisation avancée",
      "Support VIP 24/7",
      "Sauvegarde horaire",
      "Migration gratuite",
      "Ressources garanties",
      "PHP Worker dédié",
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
        title="Hébergement WordPress Optimisé au Gabon | SPIDERHOSTER"
        description="Hébergement WordPress ultra-rapide avec cache avancé, staging, mises à jour automatiques et WordPress Manager. Performance et sécurité maximales."
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