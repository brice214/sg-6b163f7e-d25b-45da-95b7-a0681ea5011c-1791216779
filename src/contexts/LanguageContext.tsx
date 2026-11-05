import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/router";
import { getDictionary, type Dictionary, type Locale } from "@/lib/i18n";
import {
  getLocaleFromPath,
  isPathLocalized,
  toEnglishPath,
  toFrenchPath,
} from "@/lib/i18n/routes";
import { withPortalParams, formatPlanPrice, type Region } from "@/lib/i18n/portal";

interface LanguageContextValue {
  locale: Locale;
  region: Region;
  t: Dictionary;
  hasTranslation: boolean;
  switchHref: string;
  withPortalParams: (url: string) => string;
  formatPlanPrice: (amountFcfa: number) => { amount: string; label: string };
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readRegionCookie(): Region {
  if (typeof document === "undefined") return "africa";
  const match = document.cookie.match(/(?:^|; )NEXT_REGION=([^;]*)/);
  return match && match[1] === "eu" ? "eu" : "africa";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const currentPath = (router.asPath || "/").split("?")[0].split("#")[0];
  const [region, setRegion] = useState<Region>("africa");

  useEffect(() => {
    setRegion(readRegionCookie());
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const locale = getLocaleFromPath(currentPath);
    const t = getDictionary(locale);

    const base = {
      t,
      region,
      withPortalParams: (url: string) => withPortalParams(url, locale, region),
      formatPlanPrice: (amountFcfa: number) => formatPlanPrice(amountFcfa, locale, region),
    };

    if (locale === "en") {
      return {
        ...base,
        locale,
        hasTranslation: true,
        switchHref: toFrenchPath(currentPath),
      };
    }

    const localized = isPathLocalized(currentPath);
    return {
      ...base,
      locale,
      hasTranslation: localized,
      switchHref: localized ? toEnglishPath(currentPath) : toEnglishPath("/"),
    };
  }, [currentPath, region]);

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