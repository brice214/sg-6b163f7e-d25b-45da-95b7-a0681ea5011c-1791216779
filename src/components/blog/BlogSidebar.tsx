import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AdWidget {
  image: string;
  alt: string;
  href: string;
  eyebrow: string;
  title: string;
}

const ads: AdWidget[] = [
  {
    image: "/generated/banniere-hebergement-web-promo.png",
    alt: "Promotion hébergement web SPIDERHOSTER",
    href: "/hebergement-web",
    eyebrow: "Offre du mois",
    title: "Hébergement Web dès 3 050 FCFA/mois",
  },
  {
    image: "/generated/banniere-serveur-vps-promo.png",
    alt: "Promotion serveurs VPS SPIDERHOSTER",
    href: "/hebergement-vps",
    eyebrow: "Performance",
    title: "VPS dédiés dès 23 900 FCFA/mois",
  },
  {
    image: "/generated/banniere-nom-domaine-promo.png",
    alt: "Promotion noms de domaine SPIDERHOSTER",
    href: "/domaines",
    eyebrow: "Identité en ligne",
    title: "Réservez votre nom de domaine",
  },
];

export function BlogSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <p className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider px-1">
        Nos offres
      </p>
      {ads.map((ad) => (
        <Link
          key={ad.href}
          href={ad.href}
          className="group block relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
            <img
              src={ad.image}
              alt={ad.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider">
                {ad.eyebrow}
              </span>
              <p className="text-white font-mono font-bold text-base mt-1 leading-snug">{ad.title}</p>
              <span className="inline-flex items-center gap-1 text-sm text-white/90 mt-3 group-hover:gap-2 transition-all">
                Découvrir <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </aside>
  );
}