"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, User, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";

interface NavItem {
  path: string;
  label: string;
  highlight?: boolean;
}

function localizedHref(path: string, locale: Locale): string {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, t, hasTranslation, switchHref } = useLanguage();

  const navItems: NavItem[] = [
    { path: "/", label: t.header.nav.home },
    { path: "/hebergement-web", label: t.header.nav.webHosting },
    { path: "/hebergement-wordpress", label: t.header.nav.wordpress },
    { path: "/hebergement-vps", label: t.header.nav.vps },
    { path: "/emails-professionnels", label: t.header.nav.professionalEmails },
    { path: "/domaines", label: t.header.nav.domains },
    { path: "/calculateur", label: t.header.nav.calculator, highlight: true },
    { path: "/blog", label: t.header.nav.blog },
    { path: "/a-propos", label: t.header.nav.about },
    { path: "/contact", label: t.header.nav.contact },
  ];

  const otherLocaleLabel = locale === "fr" ? t.languageSwitcher.en : t.languageSwitcher.fr;

  return (
    <header className="fixed top-[60px] left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <a href="tel:+24174436343" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="hidden md:inline">+241 74 43 63 43</span>
                </a>
                <a
                  href="mailto:contact@spiderhoster.com"
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">contact@spiderhoster.com</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {hasTranslation && (
                <Link
                  href={switchHref}
                  className="flex items-center gap-1.5 text-white hover:text-primary transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>{otherLocaleLabel}</span>
                </Link>
              )}
              <a
                href="https://portail.spiderhoster.com/index.php?rp=/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-primary transition-colors"
              >
                <User className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t.header.clientArea}</span>
              </a>
              <a
                href="https://panel.spiderhoster.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-primary transition-colors"
              >
                <Settings className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t.header.panel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={localizedHref("/", locale)} className="flex items-center gap-3">
            <Image src="/logo_1_.png" alt="SPIDERHOSTER" width={180} height={45} className="h-10 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={localizedHref(item.path, locale)}
                className={
                  item.highlight
                    ? "px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors rounded-md"
                    : "px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:inline-flex bg-gradient-hero hover:opacity-90 transition-opacity">
              <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                {t.header.orderCta}
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={t.header.toggleMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={localizedHref(item.path, locale)}
                className={
                  item.highlight
                    ? "px-4 py-3 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
                    : "px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-hero hover:opacity-90 transition-opacity">
              <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                {t.header.orderCta}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}