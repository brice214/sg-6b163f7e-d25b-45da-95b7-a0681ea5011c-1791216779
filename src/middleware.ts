import { NextRequest, NextResponse } from "next/server";
import { AVAILABLE_EN_PATHS, toEnglishPath } from "@/lib/i18n/routes";

const LOCALE_COOKIE = "NEXT_LOCALE";
const REGION_COOKIE = "NEXT_REGION";
const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|preview|headless/i;

const EUROPE_COUNTRIES = new Set([
  "FR", "BE", "LU", "CH", "MC", "DE", "IT", "ES", "PT", "NL", "AT", "IE", "GB",
  "DK", "SE", "NO", "FI", "PL", "CZ", "SK", "HU", "RO", "BG", "GR", "HR", "SI",
  "EE", "LV", "LT", "CY", "MT", "IS", "LI", "AD", "SM", "VA", "BA", "RS", "MK",
  "AL", "ME", "UA", "MD",
]);

const FRANCOPHONE_COUNTRIES = new Set([
  "FR", "BE", "CH", "LU", "MC", "CA",
  "GA", "SN", "CI", "CM", "ML", "BF", "NE", "TD", "CG", "CD", "BJ", "TG",
  "MG", "RW", "BI", "DJ", "KM", "GN", "MR", "HT", "VU", "SC", "GQ", "CF",
]);

function isLocalized(pathname: string): boolean {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return AVAILABLE_EN_PATHS.includes(normalized);
}

function detectPrefersFrench(request: NextRequest, country: string): boolean {
  if (country) {
    return FRANCOPHONE_COUNTRIES.has(country);
  }
  const acceptLanguage = request.headers.get("accept-language") || "";
  return /^fr/i.test(acceptLanguage.split(",")[0]?.trim() || "");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/en") ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") || "";
  const isBot = BOT_PATTERN.test(userAgent);
  const country = request.headers.get("x-vercel-ip-country") || "";

  let response: NextResponse;

  if (isBot || !isLocalized(pathname)) {
    response = NextResponse.next();
  } else {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

    if (cookieLocale === "en") {
      response = NextResponse.redirect(new URL(toEnglishPath(pathname), request.url));
    } else if (cookieLocale === "fr") {
      response = NextResponse.next();
    } else {
      const prefersFrench = detectPrefersFrench(request, country);

      response = prefersFrench
        ? NextResponse.next()
        : NextResponse.redirect(new URL(toEnglishPath(pathname), request.url));

      response.cookies.set(LOCALE_COOKIE, prefersFrench ? "fr" : "en", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
    }
  }

  if (!isBot && !request.cookies.get(REGION_COOKIE)?.value) {
    const region = EUROPE_COUNTRIES.has(country) ? "eu" : "africa";
    response.cookies.set(REGION_COOKIE, region, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};