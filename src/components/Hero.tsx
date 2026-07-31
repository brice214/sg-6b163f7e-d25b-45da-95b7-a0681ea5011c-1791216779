import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono font-semibold text-primary">Hébergement Premium en Afrique</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-foreground mb-6 leading-tight text-balance">
              Votre hébergement web rapide, sécurisé et adapté à vos ambitions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              SPIDERHOSTER vous offre des solutions d'hébergement web professionnelles au Gabon et en Afrique. Infrastructure moderne, support expert 24/7, et performances optimales pour votre réussite en ligne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-base font-semibold shadow-lg hover:shadow-xl">
                <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                  Commander maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 text-base font-semibold hover:bg-muted/50">
                <a href="#services">
                  Découvrir nos services
                </a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime garanti</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support expert</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="/generated/hero-datacenter.png" 
                alt="Infrastructure cloud SPIDERHOSTER - Data center moderne en Afrique" 
                width={800} 
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card-hover animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-mono font-bold text-foreground">Infrastructure Tier III</div>
                  <div className="text-sm text-muted-foreground">Datacenter Libreville</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}