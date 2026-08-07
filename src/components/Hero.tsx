import Image from "next/image";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(207 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(207 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-mono font-semibold text-primary">Hébergement Premium en Afrique</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold mb-6 leading-tight text-balance tracking-tight">
              Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">hébergement web</span> rapide, sécurisé
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Infrastructure cloud de classe mondiale au Gabon et en Afrique. Support expert 24/7, performances optimales, sécurité maximale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-base font-semibold shadow-2xl hover:shadow-primary/50 hover:scale-105 border-0">
                <a href="https://order.spiderhoster.com" target="_blank" rel="noopener noreferrer">
                  Commander maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-white text-base font-semibold hover:bg-white/10 backdrop-blur-sm">
                <a href="#services">
                  Découvrir nos services
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, value: "99.9%", label: "Uptime garanti" },
                { icon: Clock, value: "24/7", label: "Support expert" },
                { icon: Zap, value: "5000+", label: "Clients satisfaits" }
              ].map((stat, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-primary/50 transition-all">
                    <stat.icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-3xl font-mono font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-3xl rounded-full animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10" />
              
              <Image 
                src="/generated/hero-datacenter.png" 
                alt="Infrastructure cloud SPIDERHOSTER - Data center moderne en Afrique" 
                width={800} 
                height={600}
                className="w-full h-auto"
                priority
              />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 z-20 hover:bg-white/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-mono font-bold text-white">Infrastructure Tier III</div>
                    <div className="text-sm text-gray-300">Datacenter Libreville, Gabon</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative lines */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/20 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-secondary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}