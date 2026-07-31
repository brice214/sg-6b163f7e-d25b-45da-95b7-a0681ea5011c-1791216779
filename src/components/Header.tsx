"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+24101234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+241 01 23 45 67</span>
              </a>
              <a href="mailto:contact@spiderhoster.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">contact@spiderhoster.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://client.spiderhoster.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                <span>Espace Client</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://panel.spiderhoster.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                <span>Panneau</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo_1_.png" alt="SPIDERHOSTER" width={180} height={45} className="h-10 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              Accueil
            </Link>
            <Link href="/hebergement-web" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              Hébergement Web
            </Link>
            <Link href="/hebergement-wordpress" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              WordPress
            </Link>
            <Link href="/hebergement-vps" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              VPS
            </Link>
            <Link href="/domaines" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              Domaines
            </Link>
            <Link href="/blog" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              Blog
            </Link>
            <Link href="/a-propos" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              À propos
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:inline-flex bg-gradient-hero hover:opacity-90 transition-opacity">
              <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                Commander
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link href="/" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Accueil
            </Link>
            <Link href="/hebergement-web" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Hébergement Web
            </Link>
            <Link href="/hebergement-wordpress" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              WordPress
            </Link>
            <Link href="/hebergement-vps" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              VPS
            </Link>
            <Link href="/domaines" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Domaines
            </Link>
            <Link href="/blog" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/a-propos" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              À propos
            </Link>
            <Link href="/contact" className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button asChild className="mt-2 bg-gradient-hero hover:opacity-90 transition-opacity">
              <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                Commander
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}