import type { Locale } from "@/lib/i18n/types";

export const AVAILABLE_EN_PATHS: string[] = [];

function normalize(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

export function isPathLocalized(path: string): boolean {
  return AVAILABLE_EN_PATHS.includes(normalize(path));
}

export function toEnglishPath(frPath: string): string {
  const normalized = normalize(frPath);
  if (normalized === "/") return "/en";
  return `/en${normalized}`;
}

export function toFrenchPath(enPath: string): string {
  const normalized = normalize(enPath);
  if (normalized === "/en") return "/";
  const stripped = normalized.replace(/^\/en/, "");
  return stripped === "" ? "/" : stripped;
}

export function getLocaleFromPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "fr";
}