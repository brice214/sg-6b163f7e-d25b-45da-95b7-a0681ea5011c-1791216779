import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Search, Shield, Zap, Check, ArrowRight, CheckCircle2, Clock, Users } from "lucide-react";

export default function Domaines() {
  const extensions = [
    {
      name: ".COM",
      description: "Extension universelle, idéale pour votre site",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: true,
      savings: null
    },
    {
      name: ".ORG",
      description: "Parfait pour les organisations et associations",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false,
      savings: null
    },
    {
      name: ".NET",
      description: "Idéal pour les services réseau et tech",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false,
      savings: null
    },
    {
      name: ".INFO",
      description: "Pour les sites d'information",
      priceFirst: "12,000",
      priceRenewal: "15,000",
      popular: false,
      savings: null
    },
    {
      name: ".GA",
      description: "Extension nationale du Gabon",
      priceFirst: "20,000",
      priceRenewal: "20,000",
      popular: false,
      savings: "Prix fixe"
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
        
        {/* Hero Section with Search Simulation */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900" />
          
          {/* Animated orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white backdrop-blur-md inline-flex">
                <Globe className="h-4 w-4 mr-2" />
                Noms de Domaine Professionnels
              </Badge>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-white mb-6 tracking-tight leading-tight">
                Trouvez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-secondary to-blue-400 animate-pulse">nom de domaine</span> parfait
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Votre identité en ligne commence ici. Enregistrement rapide, protection WHOIS incluse.
              </p>
              
              {/* Search Bar Simulation */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Search bar */}
                  <div className="relative bg-white rounded-xl p-2 flex items-center gap-2 shadow-2xl">
                    <div className="flex-1 flex items-center gap-3 px-4 py-4 bg-gray-50 rounded-lg">
                      <Globe className="h-6 w-6 text-gray-400" />
                      <span className="text-lg text-gray-400 font-mono">votreentreprise</span>
                      <span className="text-lg font-bold text-primary font-mono">.com</span>
                    </div>
                    <Button 
                      asChild
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-base font-semibold shadow-lg"
                    >
                      <a href="https://spiderhoster.com/portail/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">
                        <Search className="mr-2 h-5 w-5" />
                        Vérifier la disponibilité
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Protection WHOIS gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Activation instantanée</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Priority #1 */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Tarifs Transparents
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
                Extensions disponibles
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tous nos domaines incluent la protection WHOIS et une gestion complète
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
              {extensions.map((ext, index) => (
                <div
                  key={index}
                  className="relative group h-full"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-0.5 ${ext.popular ? "bg-gradient-to-r from-primary to-secondary" : "bg-gradient-to-r from-primary/50 to-secondary/50"} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />

                  {/* Card */}
                  <div className={`relative h-full flex flex-col ${ext.popular ? "bg-gradient-to-br from-blue-600 to-blue-700" : "bg-slate-900"} border ${ext.popular ? "border-blue-400" : "border-slate-800"} rounded-2xl p-6 backdrop-blur-sm ${ext.popular ? "shadow-2xl shadow-primary/50" : "shadow-xl"} transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    
                    {/* Popular badge */}
                    {ext.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-white text-blue-600 border-none text-xs font-bold px-3 py-1 shadow-lg">
                          ⭐ Plus populaire
                        </Badge>
                      </div>
                    )}

                    {/* Extension name */}
                    <div className="mb-auto">
                      <h3 className="text-4xl font-bold font-mono mb-3 text-white tracking-tight">
                        {ext.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300 mb-4">
                        {ext.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-4 mb-6">
                      {/* First year */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <p className="text-xs text-gray-300 mb-1">1ère année</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold font-mono text-white">
                            {ext.priceFirst}
                          </span>
                          <span className="text-gray-300 font-semibold">FCFA</span>
                        </div>
                      </div>

                      {/* Renewal */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <p className="text-xs text-gray-400 mb-1">Renouvellement</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold font-mono text-white">
                            {ext.priceRenewal}
                          </span>
                          <span className="text-gray-300 font-semibold">FCFA</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className={`w-full ${ext.popular ? "bg-white text-blue-600 hover:bg-gray-100 shadow-lg" : "bg-white/10 hover:bg-white/20 text-white border border-white/20"} font-semibold group/btn transition-all`}
                      size="lg"
                    >
                      <a 
                        href="https://spiderhoster.com/portail/cart.php?a=add&domain=register"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enregistrer maintenant
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Paiements sécurisés : Airtel Money • Moov Money • CB • Virement • Espèces</span>
              </div>
              
              <div>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="group border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <a href="https://spiderhoster.com/portail/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-5 w-5" />
                    Vérifier la disponibilité de votre domaine
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose - Condensed */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                  Pourquoi choisir SPIDERHOSTER ?
                </h2>
                <p className="text-lg text-muted-foreground">
                  La confiance de centaines d&apos;entreprises africaines
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold font-mono mb-2">Protection WHOIS</h3>
                    <p className="text-sm text-muted-foreground">Vos données personnelles protégées gratuitement</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold font-mono mb-2">Activation rapide</h3>
                    <p className="text-sm text-muted-foreground">Votre domaine actif en quelques minutes</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold font-mono mb-2">Gestion simple</h3>
                    <p className="text-sm text-muted-foreground">Interface intuitive pour tous vos domaines</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-bold font-mono mb-2">Support local 24/7</h3>
                    <p className="text-sm text-muted-foreground">Équipe gabonaise disponible en permanence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Compact */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">
                  FAQ
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
                  Questions fréquentes
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold font-mono mb-2 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Qu&apos;est-ce qu&apos;un nom de domaine ?
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">
                    C&apos;est l&apos;adresse unique de votre site web (ex: votreentreprise.com). Votre identité en ligne.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold font-mono mb-2 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Combien de temps pour l&apos;activation ?
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">
                    Instantané pour .COM, .NET, .ORG, .INFO. Jusqu&apos;à 48h pour le .GA.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold font-mono mb-2 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Puis-je transférer mon domaine ?
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">
                    Oui, nous facilitons le transfert depuis d&apos;autres registraires. Support dédié.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold font-mono mb-2 text-lg flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    Que se passe-t-il sans renouvellement ?
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">
                    Période de grâce de 30 jours, puis le domaine redevient disponible. Rappels automatiques.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6 text-lg">
                  Prêt à lancer votre projet ?
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-xl shadow-primary/30 group"
                >
                  <a href="https://spiderhoster.com/portail/cart.php?a=add&domain=register" target="_blank" rel="noopener noreferrer">
                    <Search className="mr-2 h-5 w-5" />
                    Enregistrer votre domaine maintenant
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
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