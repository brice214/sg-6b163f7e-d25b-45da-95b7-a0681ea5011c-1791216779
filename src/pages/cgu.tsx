import { SEO } from "@/components/SEO";
import { Scale } from "lucide-react";
import { LegalPageLayout, type LegalSection } from "@/components/shared/LegalPageLayout";

const sections: LegalSection[] = [
  {
    id: "objet",
    title: "1. Objet",
    blocks: [
      {
        type: "paragraph",
        text: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site web spiderhoster.com (ci-après « le Site »), édité par Spiderhoster Ltd. Elles ne constituent pas un contrat de vente : la souscription, la commande et le paiement des services d'hébergement, de noms de domaine, de VPS ou d'emails professionnels s'effectuent exclusivement sur notre portail client dédié (portail.spiderhoster.com), qui applique ses propres Conditions Générales de Vente, acceptées lors de la commande.",
      },
    ],
  },
  {
    id: "mentions-legales",
    title: "2. Mentions légales",
    blocks: [
      {
        type: "paragraph",
        text: "Éditeur du site : Spiderhoster Ltd, Entreprise Individuelle. Numéro RCCM : GA-LBV-01-2021-A10-02662. Numéro NIF : 181208 V. Représentant légal : M. Brice Emery MBENDJE, propriétaire, de nationalité gabonaise.",
      },
      {
        type: "paragraph",
        text: "Activité déclarée : Conseil et autres activités informatiques — Fournisseur d'hébergement web, design et développement d'applications web et mobile.",
      },
      {
        type: "paragraph",
        text: "Siège social : Nzeng-Ayong, Libreville, BP 319, Gabon. Bureaux : Immeuble ASCOMA, 7ème étage, Centre-ville, Libreville, Gabon. Contact : contact@spiderhoster.com — +241 74 43 63 43.",
      },
      {
        type: "subheading",
        text: "Hébergement du site",
      },
      {
        type: "paragraph",
        text: "Le site spiderhoster.com est hébergé par SPIDERHOSTER lui-même, sur sa propre infrastructure serveur basée à Libreville, Gabon.",
      },
    ],
  },
  {
    id: "acces-site",
    title: "3. Accès au Site",
    blocks: [
      {
        type: "paragraph",
        text: "Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. SPIDERHOSTER met tout en œuvre pour assurer un accès continu au Site, mais ne peut garantir une disponibilité absolue et pourra interrompre temporairement l'accès pour des opérations de maintenance, sans que sa responsabilité puisse être engagée.",
      },
    ],
  },
  {
    id: "propriete-intellectuelle",
    title: "4. Propriété intellectuelle",
    blocks: [
      {
        type: "paragraph",
        text: "L'ensemble des éléments du Site (textes, logo, charte graphique, illustrations, structure) est la propriété exclusive de SPIDERHOSTER, sauf mentions contraires. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite et pourra faire l'objet de poursuites.",
      },
    ],
  },
  {
    id: "services",
    title: "5. Services présentés",
    blocks: [
      {
        type: "paragraph",
        text: "Le Site présente à titre informatif les services proposés par SPIDERHOSTER :",
      },
      {
        type: "list",
        items: [
          "Hébergement Web mutualisé (forfaits Starter, Business, Premium)",
          "Hébergement WordPress optimisé",
          "Serveurs privés virtuels (VPS)",
          "Noms de domaine (.com, .org, .net, .info, .ga)",
          "Emails professionnels",
        ],
      },
      {
        type: "paragraph",
        text: "Les descriptions, caractéristiques techniques et tarifs figurant sur le Site sont fournis à titre indicatif et peuvent être mis à jour sans préavis. Seules les informations affichées sur le portail client au moment de la commande font foi.",
      },
    ],
  },
  {
    id: "commande-paiement",
    title: "6. Commande et paiement",
    blocks: [
      {
        type: "paragraph",
        text: "Toute commande de service s'effectue exclusivement via notre portail client (portail.spiderhoster.com). Les moyens de paiement acceptés sont : Airtel Money, Moov Money, Carte Bancaire, Virement bancaire, Chèque et Espèces.",
      },
      {
        type: "subheading",
        text: "Politique de remboursement",
      },
      {
        type: "paragraph",
        text: "Sauf mention contraire explicite dans une offre promotionnelle, tous les paiements effectués pour nos services sont fermes et définitifs. Aucun remboursement ne sera accordé après l'activation d'un service (hébergement, VPS, email professionnel) ou l'enregistrement d'un nom de domaine, y compris en cas de résiliation anticipée, de changement d'avis ou de non-utilisation du service souscrit. Nous vous invitons à bien vérifier vos besoins avant toute commande, ou à contacter notre équipe pour être conseillé.",
      },
    ],
  },
  {
    id: "responsabilite",
    title: "7. Responsabilité",
    blocks: [
      {
        type: "paragraph",
        text: "SPIDERHOSTER s'engage à fournir ses services avec diligence et met en œuvre une infrastructure visant une disponibilité de 99,9 %. Toutefois, SPIDERHOSTER ne saurait être tenu responsable des interruptions de service dues à un cas de force majeure, une défaillance des réseaux de télécommunication nationaux, une cyberattaque, ou tout événement échappant à son contrôle raisonnable.",
      },
      {
        type: "paragraph",
        text: "L'utilisateur reste seul responsable du contenu qu'il héberge et de son usage conforme à la législation gabonaise en vigueur.",
      },
    ],
  },
  {
    id: "liens-hypertextes",
    title: "8. Liens hypertextes",
    blocks: [
      {
        type: "paragraph",
        text: "Le Site peut contenir des liens vers des sites tiers, notamment notre portail client et notre espace de support. SPIDERHOSTER n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
      },
    ],
  },
  {
    id: "droit-applicable",
    title: "9. Droit applicable et juridiction",
    blocks: [
      {
        type: "paragraph",
        text: "Les présentes CGU sont soumises au droit gabonais. En cas de litige, et à défaut de résolution amiable, les tribunaux de Libreville seront seuls compétents.",
      },
    ],
  },
  {
    id: "modification-cgu",
    title: "10. Modification des CGU",
    blocks: [
      {
        type: "paragraph",
        text: "SPIDERHOSTER se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement. La date de dernière mise à jour figure en haut de cette page.",
      },
    ],
  },
  {
    id: "contact-cgu",
    title: "11. Contact",
    blocks: [
      {
        type: "paragraph",
        text: "Pour toute question relative aux présentes CGU, contactez-nous : contact@spiderhoster.com — +241 74 43 63 43 — Immeuble ASCOMA, 7ème étage, Centre-ville, Libreville, Gabon.",
      },
    ],
  },
];

export default function CGU() {
  return (
    <>
      <SEO
        title="Conditions Générales d'Utilisation | SPIDERHOSTER"
        description="Conditions Générales d'Utilisation du site SPIDERHOSTER : mentions légales, accès au site, commandes, paiement et droit applicable."
        url="https://spiderhoster.com/cgu"
      />
      <LegalPageLayout
        badgeIcon={Scale}
        badgeLabel="Conditions d'utilisation"
        title="Conditions Générales d'Utilisation"
        description="Les règles d'accès et d'utilisation du site spiderhoster.com, ainsi que nos mentions légales."
        lastUpdated="15 octobre 2026"
        sections={sections}
      />
    </>
  );
}