import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type FeatureItem } from "@/components/shared/FeatureGrid";
import { PricingSection, type PricingPlan } from "@/components/shared/PricingSection";
import { PageFAQ, type FAQItem } from "@/components/shared/PageFAQ";
import { Server, Cpu, HardDrive, Network, Shield, Zap, LayoutDashboard } from "lucide-react";

const commonFeatures = [
  "Stockage SSD d'entreprise",
  "Approvisionnement rapide",
  "Bande passante illimitée",
  "Garantie de niveau de service",
  "RAID matériel",
  "Console hors bande",
  "1 Tbit/s+ Anti-DDoS",
  "Prise en charge Windows et Linux",
  "Aucun contrat",
];

const forfaits: PricingPlan[] = [
  {
    name: "VPS Start",
    description: "Pour démarrer avec des ressources dédiées",
    price: "23 900",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/serveur-prive-virtuel/vps2",
    features: [
      "2 GB de CPU",
      "2 Go de RAM",
      "50 Go d'espace disque",
      "100 Mbps de vitesse des ports",
      ...commonFeatures,
    ],
  },
  {
    name: "VPS Business",
    description: "Performance et ressources pour applications exigeantes",
    price: "37 900",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/serveur-prive-virtuel/vps4",
    features: [
      "4 GB de CPU",
      "4 Go de RAM",
      "75 Go d'espace disque",
      "250 Mbps de vitesse des ports",
      ...commonFeatures,
    ],
    popular: true,
  },
  {
    name: "VPS Performance",
    description: "Ressources maximales pour infrastructures critiques",
    price: "70 900",
    period: "/mois",
    url: "https://spiderhoster.com/portail/index.php?rp=/store/serveur-prive-virtuel/vps6-1",
    features: [
      "6 cores de CPU",
      "8 Go de RAM",
      "100 Go d'espace disque",
      "500 Mbps de vitesse des ports",
      ...commonFeatures,
    ],
  },
];

const operatingSystems = [
  { name: "CentOS", slug: "centos" },
  { name: "AlmaLinux 9", slug: "almalinux" },
  { name: "Debian 11", slug: "debian" },
  { name: "Ubuntu 22.04", slug: "ubuntu" },
  { name: "Oracle Linux 9", slug: "oracle" },
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
          backgroundImage="/hebergement-vps-gabon.png"
          imageAlt="Hébergement VPS au Gabon - SPIDERHOSTER"
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

        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
                <span className="text-sm font-mono font-semibold text-primary">Systèmes d&apos;exploitation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
                Choisissez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OS préféré</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tous nos VPS sont compatibles avec les distributions Linux les plus utilisées, installées en quelques clics depuis votre panneau de contrôle
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16">
              {operatingSystems.map((os) => (
                <div key={os.name} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 group-hover:border-primary/30 transition-all bg-card text-center h-full">
                    <img src={`https://cdn.simpleicons.org/${os.slug}`} alt={os.name} className="h-10 w-10" />
                    <span className="text-sm font-mono font-semibold text-foreground">{os.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-10 blur-xl rounded-2xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-white mb-3">
                    Besoin d&apos;une interface de gestion ? Ajoutez cPanel
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Vous préférez administrer votre serveur via une interface graphique plutôt qu&apos;en ligne de commande ? Commandez une licence cPanel/WHM en complément de votre VPS pour gérer facilement vos sites, bases de données, comptes emails et sauvegardes, sans compétences techniques avancées. Idéal pour les agences et équipes qui gèrent plusieurs clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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