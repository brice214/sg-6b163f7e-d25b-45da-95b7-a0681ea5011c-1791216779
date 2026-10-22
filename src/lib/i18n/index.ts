import type { Dictionary, Locale } from "@/lib/i18n/types";
import { fr } from "@/lib/i18n/fr";
import { en } from "@/lib/i18n/en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Dictionary, Locale };
export * from "@/lib/i18n/routes";