import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { locale, t } = useLanguage();

  const localizedHref = (path: string): string => {
    if (locale === "fr") return path;
    return path === "/" ? "/en" : `/en${path}`;
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Image src="/logo_1_.png" alt="SPIDERHOSTER" width={160} height={40} className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/spiderhoster" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/spiderhoster" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/spiderhoster" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/spiderhoster" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono font-bold mb-6">{t.footer.servicesTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={localizedHref("/hebergement-web")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.services.webHosting}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/hebergement-wordpress")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.services.wordpress}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/hebergement-vps")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.services.vps}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/emails-professionnels")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.services.professionalEmails}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/domaines")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.services.domains}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-bold mb-6">{t.footer.companyTitle}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={localizedHref("/a-propos")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.about}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/blog")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.blog}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/contact")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.contact}
                </Link>
              </li>
              <li>
                <a href="https://portail.spiderhoster.com/index.php?rp=/login" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.clientArea}
                </a>
              </li>
              <li>
                <Link href={localizedHref("/politique-confidentialite")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={localizedHref("/cgu")} className="text-background/70 hover:text-background transition-colors">
                  {t.footer.company.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-bold mb-6">{t.footer.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/70 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  {t.footer.addressLine1}<br />
                  {t.footer.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-background/70 flex-shrink-0" />
                <div className="space-y-3">
                  <a href="tel:+24174436343" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    +241 74 43 63 43
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-background/70 flex-shrink-0" />
                <a href="mailto:contact@spiderhoster.com" className="text-background/70 hover:text-background transition-colors">
                  contact@spiderhoster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-background/70 text-center md:text-left">
              © {new Date().getFullYear()} SPIDERHOSTER. {t.footer.copyright}
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm text-background/70">{t.footer.paymentMethodsLabel}</span>
              <div className="flex items-center gap-3 text-xs font-mono text-background/70">
                <span className="px-2 py-1 bg-background/10 rounded">{t.footer.paymentMethods.airtel}</span>
                <span className="px-2 py-1 bg-background/10 rounded">{t.footer.paymentMethods.moov}</span>
                <span className="px-2 py-1 bg-background/10 rounded">{t.footer.paymentMethods.card}</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">{t.footer.paymentMethods.transfer}</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">{t.footer.paymentMethods.check}</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">{t.footer.paymentMethods.cash}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}