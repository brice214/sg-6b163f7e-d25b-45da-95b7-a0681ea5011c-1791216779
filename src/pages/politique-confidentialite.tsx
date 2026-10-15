import { SEO } from "@/components/SEO";
import { ShieldCheck } from "lucide-react";
import { LegalPageLayout, type LegalSection } from "@/components/shared/LegalPageLayout";

const sections: LegalSection[] = [
  {
    id: "preambule",
    title: "1. Préambule",
    blocks: [
      {
        type: "paragraph",
        text: "SPIDERHOSTER s'engage à protéger la vie privée des visiteurs et utilisateurs du site spiderhoster.com, conformément aux bonnes pratiques reconnues en matière de protection des données personnelles. La présente politique explique quelles données sont collectées sur ce site, pourquoi, et comment vous pouvez exercer vos droits.",
      },
    ],
  },
  {
    id: "responsable",
    title: "2. Responsable du traitement",
    blocks: [
      {
        type: "paragraph",
        text: "Le présent site est édité par Spiderhoster Ltd, Entreprise Individuelle immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) de Libreville sous le numéro GA-LBV-01-2021-A10-02662, Numéro d'Identification Fiscale (NIF) 181208 V, représentée par M. Brice Emery MBENDJE, propriétaire.",
      },
      {
        type: "paragraph",
        text: "Siège social : Nzeng-Ayong, Libreville, BP 20142, Gabon. Bureaux : Immeuble ASCOMA, 7ème étage, Centre-ville, Libreville, Gabon. Contact : contact@spiderhoster.com — +241 74 43 63 43.",
      },
    ],
  },
  {
    id: "donnees-collectees",
    title: "3. Données collectées",
    blocks: [
      {
        type: "paragraph",
        text: "Le site spiderhoster.com ne dispose d'aucune base de données de comptes clients. Les seules données personnelles collectées sur ce site le sont via :",
      },
      {
        type: "list",
        items: [
          "Le formulaire de contact (page Contact) : nom, adresse email, numéro de téléphone (facultatif), sujet et message.",
          "Le widget de discussion en direct (chat) fourni par notre prestataire Tawk.to, si vous choisissez de l'utiliser : données de navigation et toute information renseignée volontairement.",
          "Les formulaires de demande de devis ou de recommandation (ex : calculateur d'hébergement).",
        ],
      },
      {
        type: "paragraph",
        text: "Aucune donnée bancaire ou de paiement n'est collectée ou stockée sur ce site vitrine. Les commandes, paiements et données de facturation sont exclusivement traités sur notre portail client sécurisé (portail.spiderhoster.com), soumis à ses propres conditions d'utilisation.",
      },
    ],
  },
  {
    id: "finalites",
    title: "4. Finalités du traitement",
    blocks: [
      {
        type: "list",
        items: [
          "Répondre à vos demandes d'information, de devis ou de support technique.",
          "Vous recontacter dans le cadre du suivi commercial de votre demande.",
          "Améliorer la qualité de nos services et de notre site web.",
          "Assurer la sécurité et le bon fonctionnement du site.",
        ],
      },
    ],
  },
  {
    id: "base-legale",
    title: "5. Base légale du traitement",
    blocks: [
      {
        type: "paragraph",
        text: "Le traitement de vos données repose sur votre consentement explicite, exprimé lors de la soumission d'un formulaire sur le site, ainsi que sur l'intérêt légitime de SPIDERHOSTER à répondre aux demandes de ses visiteurs et prospects.",
      },
    ],
  },
  {
    id: "destinataires",
    title: "6. Destinataires des données",
    blocks: [
      {
        type: "paragraph",
        text: "Les données collectées via les formulaires du site sont transmises par email sécurisé (SMTP) à l'équipe SPIDERHOSTER uniquement et ne sont stockées dans aucune base de données sur le serveur du site. Elles ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.",
      },
      {
        type: "paragraph",
        text: "Tawk.to, fournisseur du widget de chat en ligne, peut avoir accès aux échanges réalisés via le chat en tant que sous-traitant technique, conformément à sa propre politique de confidentialité.",
      },
    ],
  },
  {
    id: "conservation",
    title: "7. Durée de conservation",
    blocks: [
      {
        type: "paragraph",
        text: "Les messages envoyés via le formulaire de contact sont conservés le temps nécessaire au traitement de votre demande, puis archivés ou supprimés de nos boîtes email dans un délai raisonnable. Aucune donnée n'est conservée indéfiniment sans finalité précise.",
      },
    ],
  },
  {
    id: "securite",
    title: "8. Sécurité des données",
    blocks: [
      {
        type: "paragraph",
        text: "Le site n'utilise aucune base de données pour stocker les informations issues des formulaires : celles-ci sont transmises directement par email via une connexion SMTP sécurisée. Nous mettons en œuvre des mesures techniques raisonnables (connexion HTTPS, hébergement sur notre propre infrastructure à Libreville) pour protéger les informations transmises contre tout accès non autorisé.",
      },
    ],
  },
  {
    id: "cookies",
    title: "9. Cookies et traceurs",
    blocks: [
      {
        type: "paragraph",
        text: "Ce site utilise un minimum de cookies strictement nécessaires à son bon fonctionnement. Aucun outil de suivi publicitaire ou d'analyse tierce (type Google Analytics) n'est actuellement installé sur le site.",
      },
      {
        type: "list",
        items: [
          "Cookies techniques : nécessaires à la navigation et aux préférences d'affichage.",
          "Tawk.to : si vous utilisez le chat en ligne, ce service tiers peut déposer ses propres cookies pour assurer la continuité de la conversation.",
        ],
      },
      {
        type: "paragraph",
        text: "Cette politique sera mise à jour si de nouveaux outils de mesure d'audience venaient à être installés sur le site.",
      },
    ],
  },
  {
    id: "droits",
    title: "10. Vos droits",
    blocks: [
      {
        type: "paragraph",
        text: "Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant les données personnelles vous concernant que nous détenons. Pour exercer ces droits, contactez-nous à l'adresse contact@spiderhoster.com en précisant l'objet de votre demande. Nous nous engageons à répondre dans un délai raisonnable.",
      },
    ],
  },
  {
    id: "portail-client",
    title: "11. Portail client et services tiers",
    blocks: [
      {
        type: "paragraph",
        text: "La souscription, la gestion et le paiement de nos services d'hébergement, VPS, emails professionnels et noms de domaine s'effectuent sur notre portail client externe, accessible à l'adresse portail.spiderhoster.com. Les données saisies sur ce portail (facturation, informations de compte, moyens de paiement) sont traitées selon les conditions et la politique de confidentialité propres à cette plateforme, distinctes du présent document.",
      },
    ],
  },
  {
    id: "modifications",
    title: "12. Modifications de la politique",
    blocks: [
      {
        type: "paragraph",
        text: "SPIDERHOSTER se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à l'évolution de la réglementation ou de ses outils techniques. La date de dernière mise à jour figure en haut de cette page.",
      },
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    blocks: [
      {
        type: "paragraph",
        text: "Pour toute question relative à cette politique de confidentialité ou à l'utilisation de vos données personnelles, contactez-nous : contact@spiderhoster.com — +241 74 43 63 43 — Immeuble ASCOMA, 7ème étage, Centre-ville, Libreville, Gabon.",
      },
    ],
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité | SPIDERHOSTER"
        description="Politique de confidentialité de SPIDERHOSTER : données collectées, finalités, cookies et vos droits concernant vos informations personnelles."
        url="https://spiderhoster.com/politique-confidentialite"
      />
      <LegalPageLayout
        badgeIcon={ShieldCheck}
        badgeLabel="Protection des données"
        title="Politique de Confidentialité"
        description="Comment SPIDERHOSTER collecte, utilise et protège vos données personnelles sur ce site."
        lastUpdated="15 octobre 2026"
        sections={sections}
      />
    </>
  );
}