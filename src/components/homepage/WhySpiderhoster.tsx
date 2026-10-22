import { Shield, Zap, HeadphonesIcon, TrendingUp, Lock, Gauge } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomepageContent } from "@/lib/i18n/content/homepage";

const reasonIcons = [Zap, Shield, HeadphonesIcon, TrendingUp, Lock, Gauge];

export function WhySpiderhoster() {
  const { locale } = useLanguage();
  const content = getHomepageContent(locale).why;

  const reasons = content.reasons.map((reason, index) => ({
    ...reason,
    icon: reasonIcons[index],
  }));

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(207 100% 50%) 1px, transparent 0)",
            backgroundSize: "40px 40px",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />

              <div className="relative flex gap-4 p-6 rounded-2xl border border-transparent group-hover:border-primary/20 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}