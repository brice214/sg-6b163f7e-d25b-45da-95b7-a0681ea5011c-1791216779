import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  id?: string;
  badgeLabel: string;
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export function PageFAQ({ id = "faq", badgeLabel, title, subtitle, faqs }: PageFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <section id={id} className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-mono font-semibold text-accent">{badgeLabel}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card hover:border-primary/30 transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="text-left font-mono font-semibold hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}