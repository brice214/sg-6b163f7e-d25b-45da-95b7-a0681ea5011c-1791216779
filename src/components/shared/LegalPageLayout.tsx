import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { Calendar, Check, type LucideIcon } from "lucide-react";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

interface LegalPageLayoutProps {
  badgeIcon: LucideIcon;
  badgeLabel: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

function renderBlock(block: LegalBlock, index: number) {
  if (block.type === "subheading") {
    return (
      <h3 key={index} className="text-lg font-mono font-semibold text-foreground mt-6 mb-3">
        {block.text}
      </h3>
    );
  }
  if (block.type === "list") {
    return (
      <ul key={index} className="space-y-2 mb-4">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
            <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
      {block.text}
    </p>
  );
}

export function LegalPageLayout({
  badgeIcon: BadgeIcon,
  badgeLabel,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <SpiderWeb />
      <div className="relative z-10">
        <Header />

        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-b from-muted/40 to-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BadgeIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-mono font-semibold text-primary">{badgeLabel}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">{description}</p>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Calendar className="h-4 w-4" />
                Dernière mise à jour : {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[260px_1fr] gap-12 max-w-6xl mx-auto">
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-1">
                  <p className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Sommaire
                  </p>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary py-1.5 border-l-2 border-transparent hover:border-primary pl-3 transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </aside>

              <div className="min-w-0">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-12 scroll-mt-28">
                    <h2 className="text-2xl font-mono font-bold text-foreground mb-4 pb-3 border-b border-border/50">
                      {section.title}
                    </h2>
                    {section.blocks.map((block, index) => renderBlock(block, index))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}