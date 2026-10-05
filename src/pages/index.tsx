import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/homepage/Services";
import { WhySpiderhoster } from "@/components/homepage/WhySpiderhoster";
import { Offers } from "@/components/homepage/Offers";
import { Testimonials } from "@/components/homepage/Testimonials";
import { BlogPreview } from "@/components/homepage/BlogPreview";
import { FAQ } from "@/components/homepage/FAQ";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";

export default function Home() {
  return (
    <>
      <SEO 
        title="Hébergement Web Gabon | SPIDERHOSTER - Hébergeur N°1 en Afrique Centrale"
        description="Hébergement Web, WordPress, VPS et noms de domaine au Gabon. Datacenter à Libreville, support 24/7, SSL gratuit, paiement Airtel Money & Moov Money. Devis gratuit."
        url="https://spiderhoster.com/"
      />
      <SpiderWeb />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <WhySpiderhoster />
        <Offers />
        <Testimonials />
        <BlogPreview />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}