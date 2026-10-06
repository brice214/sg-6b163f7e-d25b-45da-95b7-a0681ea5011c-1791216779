import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HostingCalculator } from "@/components/calculator/HostingCalculator";

export default function CalculateurPage() {
  return (
    <>
      <SEO
        title="Calculateur d'Hébergement — Trouvez le Forfait Idéal | SPIDERHOSTER"
        description="Répondez à quelques questions simples et obtenez une recommandation personnalisée pour votre hébergement web au Gabon. Gratuit et sans engagement."
        url="https://spiderhoster.com/calculateur"
      />
      <Header />
      <main className="min-h-screen relative">
        {/* Background image avec overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/calculateur-arriere-plan-spiderhoster-gabon.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
        </div>
        
        {/* Contenu par-dessus */}
        <div className="relative z-10">
          <HostingCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}