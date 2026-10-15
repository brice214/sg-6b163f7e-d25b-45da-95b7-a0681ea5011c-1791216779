import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { SEO } from "@/components/SEO";
import { Home, ArrowRight, Server, Globe, Cpu, BookOpen } from "lucide-react";

const quickLinks = [
  { label: "Hébergement Web", href: "/hebergement-web", icon: Server },
  { label: "Hébergement WordPress", href: "/hebergement-wordpress", icon: Globe },
  { label: "Serveurs VPS", href: "/hebergement-vps", icon: Cpu },
  { label: "Noms de Domaine", href: "/domaines", icon: Globe },
  { label: "Blog", href: "/blog", icon: BookOpen },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable (404) | SPIDERHOSTER"
        description="Oups, cette page n'existe pas ou a été déplacée. Retrouvez nos services d'hébergement web, WordPress, VPS et noms de domaine au Gabon."
        url="https://spiderhoster.com/404"
      />
      <SpiderWeb />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="relative inline-block mb-8">
              <span className="text-[120px] md:text-[180px] font-mono font-bold leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                404
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-accent rounded-full" />
            </div>
            <h1 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-4">
              Cette page s&apos;est perdue dans le réseau
            </h1>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              La page que vous recherchez n&apos;existe pas, a été déplacée ou renommée. Revenez à l&apos;accueil
              ou explorez nos services d&apos;hébergement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" /> Retour à l&apos;accueil
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/50 font-semibold">
                <Link href="/contact">
                  Contacter le support <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="border-t border-border/50 pt-8">
              <p className="text-sm font-mono text-muted-foreground mb-5 uppercase tracking-wide">
                Pages populaires
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors text-sm font-medium text-foreground"
                  >
                    <link.icon className="w-4 h-4 text-primary" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}