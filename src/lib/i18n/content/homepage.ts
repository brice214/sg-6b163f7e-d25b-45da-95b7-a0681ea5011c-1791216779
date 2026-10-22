import type { Locale } from "@/lib/i18n/types";
import type { HomepageContent } from "@/lib/i18n/content/homepage-types";
import { homepageFr } from "@/lib/i18n/content/homepage-fr";
import { homepageEn } from "@/lib/i18n/content/homepage-en";

const homepageDictionaries: Record<Locale, HomepageContent> = {
  fr: homepageFr,
  en: homepageEn,
};

export function getHomepageContent(locale: Locale): HomepageContent {
  return homepageDictionaries[locale] ?? homepageDictionaries.fr;
}

export type { HomepageContent };