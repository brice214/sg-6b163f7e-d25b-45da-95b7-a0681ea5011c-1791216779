import { NextRequest, NextResponse } from "next/server";
import { AVAILABLE_EN_PATHS, toEnglishPath } from "@/lib/i18n/routes";

const LOCALE_COOKIE = "NEXT_LOCALE";
const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|preview|headless/i;

function isLocalized(pathname: string): boolean {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return AVAILABLE_EN_PATHS.includes(normalized);
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
  if (BOT_PATTERN.test(userAgent)) {
    return NextResponse.next();
  }

  if (!isLocalized(pathname)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (cookieLocale === "en") {
    return NextResponse.redirect(new URL(toEnglishPath(pathname), request.url));
  }

  if (cookieLocale === "fr") {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const prefersFrench = /^fr/i.test(acceptLanguage.split(",")[0]?.trim() || "");

  const response = prefersFrench
    ? NextResponse.next()
    : NextResponse.redirect(new URL(toEnglishPath(pathname), request.url));

  response.cookies.set(LOCALE_COOKIE, prefersFrench ? "fr" : "en", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};