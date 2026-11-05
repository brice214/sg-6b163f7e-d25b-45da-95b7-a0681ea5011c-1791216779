export type Region = "eu" | "africa";

const XAF_PER_EUR = 655.957;
const XAF_PER_USD = 610;

export interface PortalParams {
  language: "english" | "french";
  currency: number;
}

export function getPortalParams(locale: "fr" | "en", region: Region): PortalParams {
  if (locale === "en") {
    return { language: "english", currency: 5 };
  }
  if (region === "eu") {
    return { language: "french", currency: 4 };
  }
  return { language: "french", currency: 1 };
}

export function withPortalParams(url: string, locale: "fr" | "en", region: Region): string {
  if (!url) return url;
  const { language, currency } = getPortalParams(locale, region);
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}language=${language}&currency=${currency}`;
}

export function convertFromFcfa(
  amountFcfa: number,
  locale: "fr" | "en",
  region: Region
): { amount: number; symbol: string; code: string } {
  if (locale === "en") {
    return { amount: Math.round(amountFcfa / XAF_PER_USD), symbol: "$", code: "USD" };
  }
  if (region === "eu") {
    return { amount: Math.round(amountFcfa / XAF_PER_EUR), symbol: "\u20ac", code: "EUR" };
  }
  return { amount: amountFcfa, symbol: "FCFA", code: "XAF" };
}

export function formatPlanPrice(
  amountFcfa: number,
  locale: "fr" | "en",
  region: Region
): { amount: string; label: string } {
  const { amount, symbol, code } = convertFromFcfa(amountFcfa, locale, region);
  const localeTag = locale === "en" ? "en-US" : "fr-FR";
  return {
    amount: amount.toLocaleString(localeTag),
    label: code === "XAF" ? symbol : symbol,
  };
}

export function parsePriceToNumber(price: string): number {
  if (!price) return 0;
  return parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
}