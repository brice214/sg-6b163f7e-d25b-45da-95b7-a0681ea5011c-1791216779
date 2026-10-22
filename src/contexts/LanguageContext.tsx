import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useRouter } from "next/router";
import { getDictionary, type Dictionary, type Locale } from "@/lib/i18n";
import {
  getLocaleFromPath,
  isPathLocalized,
  toEnglishPath,
  toFrenchPath,
} from "@/lib/i18n/routes";

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  hasTranslation: boolean;
  switchHref: string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const currentPath = (router.asPath || "/").split("?")[0].split("#")[0];

  const value = useMemo<LanguageContextValue>(() => {
    const locale = getLocaleFromPath(currentPath);
    const t = getDictionary(locale);

    if (locale === "en") {
      return {
        locale,
        t,
        hasTranslation: true,
        switchHref: toFrenchPath(currentPath),
      };
    }

    const localized = isPathLocalized(currentPath);
    return {
      locale,
      t,
      hasTranslation: localized,
      switchHref: localized ? toEnglishPath(currentPath) : toEnglishPath("/"),
    };
  }, [currentPath]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}