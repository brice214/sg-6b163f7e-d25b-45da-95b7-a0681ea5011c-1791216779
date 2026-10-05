interface PartnerLogo {
  src: string;
  alt: string;
  label: string;
}

const partners: PartnerLogo[] = [
  {
    src: "/la-solde.png",
    alt: "Trésor Public Gabon - partenaire institutionnel SPIDERHOSTER",
    label: "Trésor Public",
  },
  {
    src: "/logo-moov-money.png",
    alt: "Moov Money - paiement mobile accepté par SPIDERHOSTER",
    label: "Moov Money",
  },
  {
    src: "/logo-airtel-money.png",
    alt: "Airtel Money - paiement mobile accepté par SPIDERHOSTER",
    label: "Airtel Money",
  },
  {
    src: "/digitech-africa-logo.png",
    alt: "Digitech Africa - partenaire technologique SPIDERHOSTER",
    label: "Digitech Africa",
  },
  {
    src: "/finamgabon-logo.png",
    alt: "FINAM Gabon - La Financière Africaine de Micro-Projets, partenaire SPIDERHOSTER",
    label: "FINAM Gabon",
  },
  {
    src: "/nks-gabon.png",
    alt: "NKS La Tech Service - partenaire technique SPIDERHOSTER",
    label: "NKS La Tech Service",
  },
  {
    src: "/XETA-DIGITAL-CORP-LOGO-MARKETING-1.png",
    alt: "Xeta Digital Corp - Agence Web Gabon, partenaire SPIDERHOSTER",
    label: "Xeta Digital Corp",
  },
  {
    src: "/exodus_transports_logo.png",
    alt: "Exodus Transports Logistique - partenaire SPIDERHOSTER",
    label: "Exodus Transports",
  },
];

export function ClientsPartners() {
  return (
    <section className="py-20 md:py-28 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-sm text-primary font-semibold tracking-wide">
            ~/partenaires
          </span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Clients &amp; Partenaires
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Institutions publiques, opérateurs mobiles et entreprises technologiques
            qui nous font confiance au Gabon et en Afrique Centrale.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.label}
              className="group flex flex-col items-center w-40 md:w-48"
            >
              <div className="w-full h-24 md:h-28 bg-card border border-border rounded-xl shadow-sm p-5 md:p-6 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/30">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xs font-medium text-muted-foreground text-center">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}