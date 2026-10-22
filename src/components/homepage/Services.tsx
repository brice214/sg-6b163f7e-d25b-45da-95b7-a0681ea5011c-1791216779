import { Server, Package, Cloud, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomepageContent } from "@/lib/i18n/content/homepage";

const serviceIcons = [Server, Package, Cloud, Globe];
const serviceHrefs = ["/hebergement-web", "/hebergement-wordpress", "/hebergement-vps", "/domaines"];

export function Services() {
  const { locale } = useLanguage();
  const content = getHomepageContent(locale).services;

  const services = content.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index],
    href: serviceHrefs[index],
  }));

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(207 100% 50%) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-4">
            <span className="text-sm font-mono font-semibold text-primary">{content.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold text-foreground mb-4 tracking-tight">
            {content.titleBefore}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {content.titleHighlight}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary transition-all duration-500 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              <div className="relative p-6 h-full flex flex-col">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-14 w-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  <Link href={service.href}>
                    {content.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}