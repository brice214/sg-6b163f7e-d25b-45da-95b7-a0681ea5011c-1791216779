import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Search, Shield, Zap, Check, ArrowRight } from "lucide-react";

export default function Domaines() {
  const extensions = [
    {
      name: ".COM",
      description: "Extension universelle, idéale pour les entreprises",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: true
    },
    {
      name: ".ORG",
      description: "Parfait pour les organisations et associations",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false
    },
    {
      name: ".NET",
      description: "Idéal pour les services réseau et tech",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false
    },
    {
      name: ".INFO",
      description: "Pour les sites d'information",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false
    },
    {
      name: ".GA",
      description: "Extension nationale du Gabon",
      priceFirst: "20,000",
      priceRenewal: "20,000",
      popular: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Protection WHOIS",
      description: "Vos données personnelles restent privées"
    },
    {
      icon: Zap,
      title: "Activation instantanée",
      description: "Votre domaine actif en quelques minutes"
    },
    {
      icon: Globe,
      title: "Gestion complète",
      description: "Interface intuitive pour gérer vos domaines"
    }
  ];

  const faqs = [
    {
      question: "Qu'est-ce qu'un nom de domaine ?",
      answer: "Un nom de domaine est l'adresse unique de votre site web sur internet (ex: votreentreprise.com). C'est votre identité en ligne."
    },
    {
      question: "Combien de temps faut-il pour activer un domaine ?",
      answer: "L'activation est généralement instantanée pour les extensions courantes (.com, .net, .org, .info). Pour le .GA, cela peut prendre jusqu'à 24-48h."
    },
    {
      question: "Puis-je transférer mon domaine existant ?",
      answer: "Oui, nous facilitons le transfert de domaines depuis d'autres registraires. Contactez notre support pour plus d'informations."
    },
    {
      question: "Que se passe-t-il si je ne renouvelle pas mon domaine ?",
      answer: "Votre domaine entre en période de grâce de 30 jours, puis devient disponible pour d'autres. Nous envoyons des rappels avant expiration."
    }
  ];

  return (
    <>
      <SEO 
        title="Noms de Domaine - SPIDERHOSTER"
        description="Enregistrez votre nom de domaine au Gabon et en Afrique. .COM, .ORG, .NET, .INFO, .GA - Prix compétitifs, activation rapide, protection WHOIS incluse."
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 md:pt-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
          
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="animate-slide-up w-full">
                <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white backdrop-blur-md">
                  <Globe className="h-4 w-4 mr-2" />
                  Noms de Domaine
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white mb-6 tracking-tight leading-tight">
                  Trouvez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">nom de domaine</span> parfait
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Créez votre identité en ligne avec un nom de domaine professionnel. Prix compétitifs, enregistrement rapide et protection WHOIS incluse.
                </p>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-base px-8 py-6 shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all"
                >
                  <a href="https://spiderhoster.com/portail/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-5 w-5" />
                    Vérifier la disponibilité
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-mono mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Tarifs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                Extensions disponibles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tous nos domaines incluent la protection WHOIS gratuite et une gestion complète via notre interface
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {extensions.map((ext, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${ext.popular ? "bg-primary/20" : "bg-white/5"} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Card */}
                  <div className={`relative ${ext.popular ? "bg-blue-600" : "bg-slate-900"} border-2 ${ext.popular ? "border-blue-500" : "border-slate-800"} rounded-2xl p-6`}>
                    {ext.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white border-none text-xs">
                        ⭐ Plus populaire
                      </Badge>
                    )}

                    <div className="mb-6">
                      <h3 className="text-3xl font-bold font-mono mb-2 text-white">{ext.name}</h3>
                      <p className="text-sm text-gray-300">{ext.description}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-3xl font-bold font-mono text-white">
                            {ext.priceFirst}
                          </span>
                          <span className="text-gray-300">FCFA</span>
                        </div>
                        <p className="text-xs text-gray-400">1ère année</p>
                      </div>

                      <div className="h-px bg-slate-700" />

                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-2xl font-bold font-mono text-white">
                            {ext.priceRenewal}
                          </span>
                          <span className="text-gray-300">FCFA</span>
                        </div>
                        <p className="text-xs text-gray-400">Renouvellement</p>
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full ${ext.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-slate-800 hover:bg-slate-700 text-white"} group/btn`}
                    >
                      <a 
                        href="https://spiderhoster.com/portail/cart.php?a=add&domain=register"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enregistrer
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                💳 Paiements acceptés : Airtel Money, Moov Money, Carte bancaire, Virement, Chèque, Espèces
              </p>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="https://spiderhoster.com/portail/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">
                  <Search className="mr-2 h-5 w-5" />
                  Vérifier la disponibilité de votre domaine
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                  Pourquoi enregistrer votre domaine chez SPIDERHOSTER ?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-2">Prix transparents</h3>
                    <p className="text-sm text-muted-foreground">Aucun frais caché. Le prix affiché est le prix final, tout compris.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-2">Protection incluse</h3>
                    <p className="text-sm text-muted-foreground">Protection WHOIS gratuite pour garder vos informations privées.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-2">Interface simple</h3>
                    <p className="text-sm text-muted-foreground">Gérez vos domaines facilement depuis un panneau de contrôle intuitif.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold font-mono mb-2">Support local</h3>
                    <p className="text-sm text-muted-foreground">Équipe basée au Gabon disponible 24/7 pour vous assister.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">
                  Questions fréquentes
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                  Tout savoir sur les noms de domaine
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold font-mono mb-2 text-lg">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  D&apos;autres questions ? Notre équipe est là pour vous aider.
                </p>
                <Button asChild variant="outline">
                  <a href="#contact">Contacter le support</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}