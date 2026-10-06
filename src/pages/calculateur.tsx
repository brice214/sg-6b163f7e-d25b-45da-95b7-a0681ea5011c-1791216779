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
      <main className="min-h-screen bg-background">
        <HostingCalculator />
      </main>
      <Footer />
    </>
  );
}