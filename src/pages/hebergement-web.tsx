import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { PricingSection, type PricingPlan } from "@/components/shared/PricingSection";
import { PageFAQ, type FAQItem } from "@/components/shared/PageFAQ";
import { Check, Server, Globe, Shield, Zap, HardDrive, Clock } from "lucide-react";

const forfaits: PricingPlan[] = [
  {
    name: "Starter",
    description: "Idéal pour sites vitrines et blogs",
    price: "5 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web",
    features: [
      "1 site web",
      "10 Go SSD",
      "Trafic illimité",
      "5 comptes email",
      "SSL gratuit",
      "CDN gratuit",
      "Sauvegarde quotidienne",
      "Support 24/7",
    ],
  },
  {
    name: "Business",
    description: "Pour sites professionnels et e-commerce",
    price: "15 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web",
    features: [
      "5 sites web",
      "50 Go SSD",
      "Trafic illimité",
      "25 comptes email",
      "SSL gratuit",
      "CDN gratuit",
      "Sauvegarde quotidienne",
      "Support prioritaire 24/7",
      "Protection DDoS",
      "Migration gratuite",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Pour projets à fort trafic",
    price: "35 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web",
    features: [
      "Sites illimités",
      "150 Go SSD",
      "Trafic illimité",
      "Emails illimités",
      "SSL gratuit",
      "CDN gratuit",
      "Sauvegarde quotidienne",
      "Support VIP 24/7",
      "Protection DDoS",
      "Migration gratuite",
      "IP dédiée",
      "Ressources garanties",
    ],
  },
];

const avantages: FeatureItem[] = [
  {
    icon: Zap,
    title: "Performance ultra-rapide",
    description: "Serveurs SSD NVMe et CDN mondial pour des temps de chargement éclair.",
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "SSL gratuit, protection DDoS 1Tbit/s+, firewall applicatif et antimalware automatique.",
  },
  {
    icon: Server,
    title: "Infrastructure fiable",
    description: "Garantie uptime 99.9%, serveurs redondants et datacenters certifiés.",
  },
  {
    icon: Globe,
    title: "CDN mondial gratuit",
    description: "Diffusion de contenu depuis des datacenters mondiaux sans limite de bande passante.",
  },
  {
    icon: HardDrive,
    title: "Stockage SSD rapide",
    description: "Disques SSD NVMe ultra-rapides pour des performances optimales.",
  },
  {
    icon: Check,
    title: "Migration gratuite",
    description: "Notre équipe migre votre site gratuitement sans interruption de service.",
  },
];

const faq: FAQItem[] = [
  {
    question: "Qu'est-ce que l'hébergement web ?",
    answer:
      "L'hébergement web est un service qui permet de rendre votre site internet accessible sur le web 24h/24. Nous stockons vos fichiers sur nos serveurs ultra-performants et assurons leur disponibilité continue.",
  },
  {
    question: "Puis-je héberger plusieurs sites avec un seul forfait ?",
    answer:
      "Oui ! Le forfait Business permet d'héberger jusqu'à 5 sites, et le forfait Premium offre un nombre illimité de sites web.",
  },
  {
    question: "Le SSL est-il inclus ?",
    answer: "Oui, tous nos forfaits incluent un certificat SSL gratuit pour sécuriser votre site avec le protocole HTTPS.",
  },
  {
    question: "Proposez-vous des sauvegardes automatiques ?",
    answer:
      "Oui, nous effectuons des sauvegardes quotidiennes automatiques de tous vos sites et données. Vous pouvez restaurer vos fichiers en quelques clics depuis votre panneau de contrôle.",
  },
  {
    question: "Quelle est la garantie de disponibilité ?",
    answer: "Nous garantissons une disponibilité de 99.9% grâce à notre infrastructure redondante et nos serveurs de haute performance.",
  },
  {
    question: "Puis-je migrer mon site existant gratuitement ?",
    answer:
      "Absolument ! Nous offrons un service de migration gratuit pour tous nos forfaits. Notre équipe technique se charge de transférer votre site sans interruption de service.",
  },
  {
    question: "Quels systèmes de paiement acceptez-vous ?",
    answer: "Nous acceptons Airtel Money, Moov Money, cartes bancaires, virements bancaires, chèques et paiements en espèces.",
  },
  {
    question: "Puis-je changer de forfait plus tard ?",
    answer:
      "Oui, vous pouvez upgrader ou downgrader votre forfait à tout moment selon vos besoins. Les changements sont effectifs immédiatement.",
  },
];

export default function HebergementWeb() {
  return (
    <>
      <SEO
        title="Hébergement Web Professionnel au Gabon | SPIDERHOSTER"
        description="Hébergement web ultra-rapide avec SSL gratuit, CDN mondial, protection DDoS et garantie uptime 99.9%. Parfait pour sites vitrines, blogs et e-commerce."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Globe}
          badgeLabel="Hébergement Web Professionnel"
          titlePrefix="Hébergement Web"
          titleHighlight="Ultra-Rapide"
          description="Infrastructure fiable et performante pour héberger vos sites web avec SSL gratuit, CDN mondial et garantie de disponibilité 99.9%"
          backgroundImage="/generated/web-hosting-network.png"
          imageAlt="Infrastructure hébergement web SPIDERHOSTER"
          primaryCta={{ label: "Choisir mon forfait", href: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-web" }}
          secondaryCta={{ label: "Voir les forfaits", href: "#offres" }}
          stats={[
            { icon: Clock, value: "99.9%", label: "Uptime garanti" },
            { icon: Shield, value: "SSL", label: "Certificat gratuit" },
            { icon: Zap, value: "24/7", label: "Support expert" },
          ]}
        />
        <FeatureGrid
          badgeLabel="Nos Avantages"
          title="Une infrastructure pensée pour la"
          highlight="performance"
          subtitle="Une infrastructure de pointe pour garantir performance, sécurité et disponibilité"
          features={avantages}
        />
        <PricingSection
          id="offres"
          badgeLabel="Nos Forfaits"
          title="Forfaits d'hébergement web"
          subtitle="Des solutions adaptées à tous vos besoins, du simple blog au site e-commerce"
          plans={forfaits}
          footnote="💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces"
        />
        <PageFAQ
          badgeLabel="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur notre hébergement web"
          faqs={faq}
        />
        <Footer />
      </div>
    </>
  );
}