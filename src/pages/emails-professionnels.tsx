import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { PricingSection, type PricingPlan } from "@/components/shared/PricingSection";
import { PageFAQ, type FAQItem } from "@/components/shared/PageFAQ";
import { Mail, Shield, Lock, Cloud, HardDrive, Globe } from "lucide-react";

const forfaits: PricingPlan[] = [
  {
    name: "Email Individuel",
    description: "Pour un usage personnel ou indépendant",
    price: "18 000",
    period: "/an",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-emails/solo",
    features: [
      "1 Compte Email",
      "Webmail",
      "10 GB de stockage/compte",
      "Migration automatique",
      "SSL Gratuit",
      "Protection Hotlink",
      "Analyse Logiciels Malveillants",
    ],
  },
  {
    name: "Emails Business",
    description: "Pour petites équipes",
    price: "34 800",
    period: "/an",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-emails/pme",
    features: [
      "10 Comptes Email",
      "Webmail",
      "10 GB de stockage/compte",
      "Migration automatique",
      "SSL Gratuit",
      "Protection Hotlink",
      "Analyse Logiciels Malveillants",
    ],
    popular: true,
  },
  {
    name: "Emails Entreprise",
    description: "Pour grandes organisations",
    price: "108 000",
    period: "/an",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-emails/companies",
    features: [
      "100 Comptes Emails",
      "Webmail",
      "10 GB de stockage/compte",
      "Migration automatique",
      "SSL Gratuit",
      "Protection Hotlink",
      "Analyse Logiciels Malveillants",
    ],
  },
];

const fonctionnalites: FeatureItem[] = [
  {
    icon: Mail,
    title: "Webmail Moderne",
    description: "Interface webmail responsive accessible partout, compatible mobile, tablette et ordinateur",
  },
  {
    icon: Shield,
    title: "Protection Antispam",
    description: "Filtrage intelligent des spams et phishing pour une boîte de réception propre",
  },
  {
    icon: Lock,
    title: "Sécurité Maximale",
    description: "Chiffrement SSL/TLS, authentification sécurisée et protection contre les malwares",
  },
  {
    icon: Cloud,
    title: "Synchronisation Cloud",
    description: "Emails, contacts et calendrier synchronisés sur tous vos appareils en temps réel",
  },
  {
    icon: HardDrive,
    title: "Stockage Généreux",
    description: "Jusqu'à 50 Go par compte email pour stocker tous vos messages et pièces jointes",
  },
  {
    icon: Globe,
    title: "Nom de Domaine Personnalisé",
    description: "Adresses email professionnelles avec votre propre nom de domaine (@votreentreprise.com)",
  },
];

const faq: FAQItem[] = [
  {
    question: "Qu'est-ce que l'hébergement email professionnel ?",
    answer: "C'est un service qui vous permet d'avoir des adresses email personnalisées avec votre nom de domaine (ex: contact@votreentreprise.com) au lieu d'utiliser des services gratuits génériques (@gmail.com, @yahoo.fr).",
  },
  {
    question: "Puis-je utiliser mon client email préféré ?",
    answer: "Oui ! Nos emails sont compatibles avec tous les clients : Outlook, Thunderbird, Apple Mail, Gmail app, et tout client supportant IMAP/POP3/SMTP.",
  },
  {
    question: "Le webmail est-il accessible sur mobile ?",
    answer: "Absolument ! Notre webmail est entièrement responsive et optimisé pour mobile. Vous pouvez aussi configurer votre email sur l'application mail native de votre smartphone.",
  },
  {
    question: "Comment fonctionne la protection antispam ?",
    answer: "Nous utilisons des filtres antispam avancés avec apprentissage automatique qui analysent chaque email et bloquent les spams, phishing et malwares avant qu'ils n'atteignent votre boîte de réception.",
  },
  {
    question: "Puis-je créer des alias email ?",
    answer: "Oui, vous pouvez créer des alias illimités (contact@, info@, support@, etc.) qui redirigent vers vos comptes email principaux.",
  },
  {
    question: "Puis-je migrer mes emails existants ?",
    answer: "Oui, nous offrons un service de migration gratuit pour transférer tous vos emails, contacts et calendriers depuis votre ancien fournisseur sans perte de données.",
  },
  {
    question: "Quelle est la taille maximale des pièces jointes ?",
    answer: "Vous pouvez envoyer des pièces jointes jusqu'à 50 Mo par email. Pour les fichiers plus volumineux, nous recommandons d'utiliser un service de partage de fichiers.",
  },
];

export default function EmailsProfessionnels() {
  return (
    <>
      <SEO
        title="Hébergement Email Professionnel au Gabon | SPIDERHOSTER"
        description="Emails professionnels sécurisés avec webmail moderne, protection antispam, antivirus et synchronisation cloud. Votre nom de domaine."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Mail}
          badgeLabel="Hébergement Email Professionnel"
          titlePrefix="Email"
          titleHighlight="Professionnel"
          description="Adresses email avec votre nom de domaine, webmail moderne, protection antispam et synchronisation cloud"
          backgroundImage="/generated/email-professional.png"
          imageAlt="Email professionnel pour entreprises - SPIDERHOSTER"
          primaryCta={{ label: "Choisir mon forfait", href: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-email" }}
          secondaryCta={{ label: "Voir les forfaits", href: "#offres" }}
          stats={[
            { icon: Shield, value: "Anti-spam", label: "Protection avancée" },
            { icon: Cloud, value: "Cloud", label: "Synchronisation" },
            { icon: HardDrive, value: "50 Go", label: "Stockage/compte" },
          ]}
        />
        <FeatureGrid
          badgeLabel="Fonctionnalités incluses"
          title="Une messagerie pensée pour la"
          highlight="productivité"
          subtitle="Tout ce dont vous avez besoin pour une communication email professionnelle"
          features={fonctionnalites}
        />
        <PricingSection
          id="offres"
          badgeLabel="Nos Forfaits"
          title="Forfaits email professionnel"
          subtitle="Des solutions email adaptées à la taille de votre équipe"
          plans={forfaits}
          footnote="💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces"
        />
        <PageFAQ
          badgeLabel="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur notre hébergement email"
          faqs={faq}
        />
        <Footer />
      </div>
    </>
  );
}