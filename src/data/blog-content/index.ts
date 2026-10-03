import type { BlogArticleContent } from "@/lib/blog-content-types";
import vendreEtAcheterEnLigneAuGabon from "./vendre-et-acheter-en-ligne-au-gabon";
import acheterUnNomDeDomaineGaAuGabon from "./acheter-un-nom-de-domaine-ga-au-gabon";
import creerUneBoutiqueEnLigneAuGabonAvecWoocommerce from "./creer-une-boutique-en-ligne-au-gabon-avec-woocommerce-en-acceptant-les-paiements-mobile";
import creezVosFacturesEnLigneAuGabonAvecFactugabonCom from "./creez-vos-factures-en-ligne-au-gabon-avec-factugabon-com";
import choisirHebergementWebGabon from "./choisir-hebergement-web-gabon";
import optimiserWordpressVitesse from "./optimiser-wordpress-vitesse";
import securiserSiteWebSsl from "./securiser-site-web-ssl";
import vpsVsHebergementPartage from "./vps-vs-hebergement-partage";
import lancerBoutiqueEnLigneGabon from "./lancer-boutique-en-ligne-gabon";
import choisirNomDeDomaine from "./choisir-nom-de-domaine";

export const blogContentMap: Record<string, BlogArticleContent> = {
  [vendreEtAcheterEnLigneAuGabon.slug]: vendreEtAcheterEnLigneAuGabon,
  [acheterUnNomDeDomaineGaAuGabon.slug]: acheterUnNomDeDomaineGaAuGabon,
  [creerUneBoutiqueEnLigneAuGabonAvecWoocommerce.slug]: creerUneBoutiqueEnLigneAuGabonAvecWoocommerce,
  [creezVosFacturesEnLigneAuGabonAvecFactugabonCom.slug]: creezVosFacturesEnLigneAuGabonAvecFactugabonCom,
  [choisirHebergementWebGabon.slug]: choisirHebergementWebGabon,
  [optimiserWordpressVitesse.slug]: optimiserWordpressVitesse,
  [securiserSiteWebSsl.slug]: securiserSiteWebSsl,
  [vpsVsHebergementPartage.slug]: vpsVsHebergementPartage,
  [lancerBoutiqueEnLigneGabon.slug]: lancerBoutiqueEnLigneGabon,
  [choisirNomDeDomaine.slug]: choisirNomDeDomaine,
};