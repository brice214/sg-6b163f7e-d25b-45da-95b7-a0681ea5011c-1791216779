import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomepageContent } from "@/lib/i18n/content/homepage";

const testimonialMeta = [
  { name: "Jean-Marc Ndong", initials: "JN" },
  { name: "Marie Koumba", initials: "MK" },
  { name: "Paul Obiang", initials: "PO" },
  { name: "Sophie Mboumba", initials: "SM" },
];

export function Testimonials() {
  const { locale } = useLanguage();
  const content = getHomepageContent(locale).testimonials;

  const testimonials = content.items.map((item, index) => ({
    ...item,
    ...testimonialMeta[index],
  }));

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-mono font-semibold text-primary">{content.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover animate-slide-up p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              <div className="relative">
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-primary/20 to-accent/20">
                    <AvatarFallback className="font-mono font-bold text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-mono font-bold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}