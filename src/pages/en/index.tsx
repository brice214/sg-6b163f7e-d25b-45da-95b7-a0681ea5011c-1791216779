import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/homepage/Services";
import { WhySpiderhoster } from "@/components/homepage/WhySpiderhoster";
import { Offers } from "@/components/homepage/Offers";
import { Testimonials } from "@/components/homepage/Testimonials";
import { BlogPreview } from "@/components/homepage/BlogPreview";
import { ClientsPartners } from "@/components/homepage/ClientsPartners";
import { FAQ } from "@/components/homepage/FAQ";
import { Footer } from "@/components/Footer";
import { SpiderWeb } from "@/components/SpiderWeb";

export default function HomeEn() {
  return (
    <>
      <SEO
        title="Web Hosting in Gabon & Africa | SPIDERHOSTER - Reliable Hosting for Your Business"
        description="Fast, secure web, WordPress and VPS hosting powering Africa's digital growth. UK-based datacenters, 24/7 expert support, free SSL, and global card payments."
        url="https://spiderhoster.com/en"
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
        <ClientsPartners />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}