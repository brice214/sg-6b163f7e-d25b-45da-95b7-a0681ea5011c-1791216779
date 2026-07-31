import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/homepage/Services";
import { WhySpiderhoster } from "@/components/homepage/WhySpiderhoster";
import { Offers } from "@/components/homepage/Offers";
import { FAQ } from "@/components/homepage/FAQ";

export default function Home() {
  return (
    <>
      <SEO 
        title="SPIDERHOSTER - Hébergement Web Premium au Gabon et en Afrique"
        description="Solutions d'hébergement web professionnelles au Gabon et en Afrique. Hébergement Web, WordPress, VPS et noms de domaine. Infrastructure moderne, support 24/7, performances optimales."
      />
      <Header />
      <Hero />
      <Services />
      <WhySpiderhoster />
      <Offers />
      <FAQ />
    </>
  );
}