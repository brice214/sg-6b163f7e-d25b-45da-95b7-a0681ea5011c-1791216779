import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomepageContent } from "@/lib/i18n/content/homepage";

export function Hero() {
  const { locale } = useLanguage();
  const content = getHomepageContent(locale).hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated/hero-datacenter.png"
          alt="Infrastructure SPIDERHOSTER"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
      </div>

      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="animate-slide-up w-full">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-mono font-semibold text-primary flex items-center gap-2">
                <Zap className="h-4 w-4" />
                {content.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold text-white mb-6 tracking-tight leading-tight">
              {content.titleBefore}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                {content.titleHighlight}
              </span>
              {content.titleAfter}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-base px-8 py-6 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all"
              >
                <a href="#offers">
                  {content.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 text-base px-8 py-6 backdrop-blur-md"
              >
                <Link href="/calculateur">
                  {content.ctaSecondary}
                  <Calculator className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="group text-white hover:bg-white/10 text-base px-8 py-6 backdrop-blur-md"
              >
                <a href="#services">
                  {content.ctaTertiary}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">99.9%</div>
                  </div>
                  <div className="text-xs text-gray-300 font-medium">{content.statUptimeLabel}</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SSL</div>
                  </div>
                  <div className="text-xs text-gray-300 font-medium">{content.statSslLabel}</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">24/7</div>
                  </div>
                  <div className="text-xs text-gray-300 font-medium">{content.statSupportLabel}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-bounce">
              <div className="h-12 w-8 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                <div className="h-2 w-2 rounded-full bg-white/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}