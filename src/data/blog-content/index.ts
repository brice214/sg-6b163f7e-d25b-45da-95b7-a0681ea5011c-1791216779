import type { BlogArticleContent } from "@/lib/blog-content-types";
import choisirHebergementWebGabon from "./choisir-hebergement-web-gabon";
import optimiserWordpressVitesse from "./optimiser-wordpress-vitesse";
import securiserSiteWebSsl from "./securiser-site-web-ssl";
import vpsVsHebergementPartage from "./vps-vs-hebergement-partage";

export const blogContentMap: Record<string, BlogArticleContent> = {
  [choisirHebergementWebGabon.slug]: choisirHebergementWebGabon,
  [optimiserWordpressVitesse.slug]: optimiserWordpressVitesse,
  [securiserSiteWebSsl.slug]: securiserSiteWebSsl,
  [vpsVsHebergementPartage.slug]: vpsVsHebergementPartage,
};