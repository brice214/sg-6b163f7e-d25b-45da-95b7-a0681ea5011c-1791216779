import type { BlogArticleContent } from "@/lib/blog-content-types";
import creezVosFacturesEnLigneAuGabonAvecFactugabonCom from "./creez-vos-factures-en-ligne-au-gabon-avec-factugabon-com";
import choisirHebergementWebGabon from "./choisir-hebergement-web-gabon";
import optimiserWordpressVitesse from "./optimiser-wordpress-vitesse";
import securiserSiteWebSsl from "./securiser-site-web-ssl";
import vpsVsHebergementPartage from "./vps-vs-hebergement-partage";
import lancerBoutiqueEnLigneGabon from "./lancer-boutique-en-ligne-gabon";
import choisirNomDeDomaine from "./choisir-nom-de-domaine";

export const blogContentMap: Record<string, BlogArticleContent> = {
  [creezVosFacturesEnLigneAuGabonAvecFactugabonCom.slug]: creezVosFacturesEnLigneAuGabonAvecFactugabonCom,
  [choisirHebergementWebGabon.slug]: choisirHebergementWebGabon,
  [optimiserWordpressVitesse.slug]: optimiserWordpressVitesse,
  [securiserSiteWebSsl.slug]: securiserSiteWebSsl,
  [vpsVsHebergementPartage.slug]: vpsVsHebergementPartage,
  [lancerBoutiqueEnLigneGabon.slug]: lancerBoutiqueEnLigneGabon,
  [choisirNomDeDomaine.slug]: choisirNomDeDomaine,
};