import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  url: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  id?: string;
  badgeLabel: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  footnote?: string;
}

export function PricingSection({ id, badgeLabel, title, subtitle, plans, footnote }: PricingSectionProps) {
  return (
    <section id={id} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            {badgeLabel}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative group ${plan.popular ? "md:-mt-4" : ""}`}>
              <div
                className={`absolute inset-0 ${
                  plan.popular ? "bg-primary/20" : "bg-white/5"
                } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              <div
                className={`relative ${plan.popular ? "bg-blue-600" : "bg-slate-900"} border-2 ${
                  plan.popular ? "border-blue-500" : "border-slate-800"
                } rounded-2xl p-8 h-full flex flex-col`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white border-none">
                    ⭐ Le plus populaire ⭐
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-mono mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-300">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold font-mono text-white">{plan.price}</span>
                    <span className="text-gray-300">FCFA</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-slate-800 hover:bg-slate-700 text-white"
                  } group/btn`}
                >
                  <a href={plan.url} target="_blank" rel="noopener noreferrer">
                    Choisir {plan.name}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {footnote && (
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">{footnote}</p>
          </div>
        )}
      </div>
    </section>
  );
}