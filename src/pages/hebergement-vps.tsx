import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { PricingSection, type PricingPlan } from "@/components/shared/PricingSection";
import { PageFAQ, type FAQItem } from "@/components/shared/PageFAQ";
import { Server, Cpu, HardDrive, Network, Shield, Zap } from "lucide-react";

const forfaits: PricingPlan[] = [
  {
    name: "VPS Starter",
    description: "Pour projets en croissance nécessitant des ressources dédiées",
    price: "25 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-vps",
    features: [
      "2 vCPU dédiés",
      "4 Go RAM",
      "80 Go SSD NVMe",
      "2 To/mois bande passante",
      "Root SSH complet",
      "IPv4 dédiée",
      "Backups quotidiens",
      "Protection DDoS 1Tbit/s+",
      "Firewall configurable",
      "Support technique 24/7",
    ],
  },
  {
    name: "VPS Business",
    description: "Performance et ressources pour applications exigeantes",
    price: "55 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-vps",
    features: [
      "4 vCPU dédiés",
      "8 Go RAM",
      "160 Go SSD NVMe",
      "4 To/mois bande passante",
      "Root SSH complet",
      "IPv4 dédiée",
      "Backups quotidiens",
      "Protection DDoS 1Tbit/s+",
      "Firewall configurable",
      "Monitoring 24/7",
      "Support prioritaire 24/7",
      "Snapshots illimités",
    ],
    popular: true,
  },
  {
    name: "VPS Premium",
    description: "Ressources maximales pour infrastructures critiques",
    price: "120 000",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-vps",
    features: [
      "8 vCPU dédiés",
      "16 Go RAM",
      "320 Go SSD NVMe",
      "8 To/mois bande passante",
      "Root SSH complet",
      "IPv4 dédiée + IPv6",
      "Backups horaires",
      "Protection DDoS 1Tbit/s+",
      "Firewall avancé",
      "Monitoring 24/7",
      "Support VIP 24/7",
      "Snapshots illimités",
      "Ressources garanties",
    ],
  },
];

const avantages: FeatureItem[] = [
  {
    icon: Cpu,
    title: "Processeurs dédiés",
    description: "vCPU dédiés haute fréquence sans partage de ressources pour des performances constantes",
  },
  {
    icon: HardDrive,
    title: "Stockage NVMe ultra-rapide",
    description: "Disques SSD NVMe offrant des vitesses de lecture/écriture exceptionnelles",
  },
  {
    icon: Network,
    title: "Réseau haute capacité",
    description: "Connectivité réseau redondante avec bande passante garantie et faible latence",
  },
  {
    icon: Shield,
    title: "Sécurité renforcée",
    description: "Protection DDoS 1Tbit/s+, firewall configurable et isolation complète des ressources",
  },
  {
    icon: Zap,
    title: "Provisionnement instantané",
    description: "Votre VPS est déployé et opérationnel en quelques minutes seulement",
  },
  {
    icon: Server,
    title: "Accès root complet",
    description: "Contrôle total de votre serveur avec accès SSH root et choix de votre distribution Linux",
  },
];

const faq: FAQItem[] = [
  {
    question: "Qu'est-ce qu'un VPS et en quoi diffère-t-il de l'hébergement mutualisé ?",
    answer:
      "Un VPS (Serveur Privé Virtuel) vous donne des ressources dédiées (CPU, RAM, stockage) isolées des autres utilisateurs, contrairement à l'hébergement mutualisé où les ressources sont partagées. Vous bénéficiez d'un accès root complet et d'une liberté totale de configuration.",
  },
  {
    question: "Puis-je installer mon propre système d'exploitation ?",
    answer:
      "Oui, nos VPS vous permettent de choisir parmi plusieurs distributions Linux (Ubuntu, Debian, CentOS, AlmaLinux) et de les réinstaller à tout moment depuis votre panneau de contrôle.",
  },
  {
    question: "Les ressources sont-elles vraiment dédiées ?",
    answer:
      "Oui, le CPU et la RAM alloués à votre VPS Business et Premium sont garantis et ne sont jamais partagés en surcapacité avec d'autres clients, contrairement à de nombreux concurrents.",
  },
  {
    question: "Comment fonctionne la protection DDoS ?",
    answer:
      "Tous nos VPS sont protégés par un système de mitigation DDoS capable d'absorber plus de 1Tbit/s de trafic malveillant, filtré automatiquement avant d'atteindre votre serveur.",
  },
  {
    question: "Puis-je faire évoluer mon VPS plus tard ?",
    answer:
      "Oui, vous pouvez upgrader vers un forfait supérieur à tout moment depuis votre panneau client, avec un minimum d'interruption de service.",
  },
  {
    question: "Un support technique est-il inclus pour la gestion du serveur ?",
    answer:
      "Notre support est disponible 24/7 pour les questions liées à l'infrastructure (réseau, matériel, connectivité). La gestion applicative de votre serveur reste sous votre responsabilité, mais notre équipe peut vous conseiller.",
  },
  {
    question: "Quelle est la fréquence des sauvegardes ?",
    answer:
      "Les VPS Starter et Business bénéficient de sauvegardes quotidiennes automatiques, tandis que le forfait Premium inclut des sauvegardes horaires pour une protection maximale de vos données.",
  },
  {
    question: "Puis-je obtenir une adresse IP dédiée supplémentaire ?",
    answer:
      "Oui, des adresses IPv4 et IPv6 supplémentaires peuvent être ajoutées à votre VPS sur demande, moyennant un coût additionnel selon disponibilité.",
  },
];

export default function HebergementVPS() {
  return (
    <>
      <SEO
        title="Hébergement VPS Haute Performance au Gabon | SPIDERHOSTER"
        description="Serveurs VPS avec vCPU dédiés, stockage NVMe, protection DDoS 1Tbit/s+ et accès root complet. Performance et contrôle total pour vos projets critiques."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <PageHero
          badgeIcon={Server}
          badgeLabel="Serveurs VPS Haute Performance"
          titlePrefix="VPS"
          titleHighlight="Puissants"
          description="Des serveurs privés virtuels avec ressources dédiées, stockage NVMe ultra-rapide et accès root complet pour vos applications les plus exigeantes"
          backgroundImage="/generated/vps-infrastructure.png"
          imageAlt="Infrastructure VPS haute performance SPIDERHOSTER"
          primaryCta={{
            label: "Choisir mon VPS",
            href: "https://spiderhoster.com/portail/index.php?rp=/store/hebergement-vps",
          }}
          secondaryCta={{ label: "Voir les forfaits", href: "#offres" }}
          stats={[
            { icon: Server, value: "Root", label: "Accès SSH" },
            { icon: HardDrive, value: "NVMe", label: "SSD rapide" },
            { icon: Shield, value: "1Tb+", label: "Protection DDoS" },
          ]}
        />
        <FeatureGrid
          badgeLabel="Nos Avantages"
          title="Une puissance dédiée à votre"
          highlight="infrastructure"
          subtitle="Des ressources garanties et une liberté totale pour déployer vos applications les plus critiques"
          features={avantages}
        />
        <PricingSection
          id="offres"
          badgeLabel="Nos Forfaits"
          title="Forfaits serveurs VPS"
          subtitle="Des ressources dédiées adaptées à la croissance de votre infrastructure"
          plans={forfaits}
          footnote="💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces"
        />
        <PageFAQ
          badgeLabel="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur nos serveurs VPS"
          faqs={faq}
        />
        <Footer />
      </div>
    </>
  );
}