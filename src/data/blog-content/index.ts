import type { BlogArticleContent } from "@/lib/blog-content-types";
import choisirHebergementWebGabon from "./choisir-hebergement-web-gabon";

export const blogContentMap: Record<string, BlogArticleContent> = {
  [choisirHebergementWebGabon.slug]: choisirHebergementWebGabon,
};