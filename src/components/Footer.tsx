import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Image src="/logo_1_.png" alt="SPIDERHOSTER" width={160} height={40} className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Solutions d'hébergement web professionnelles au Gabon et en Afrique. Performance, sécurité et support expert 24/7.
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
            <h3 className="text-lg font-mono font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hebergement-web" className="text-background/70 hover:text-background transition-colors">
                  Hébergement Web
                </Link>
              </li>
              <li>
                <Link href="/hebergement-wordpress" className="text-background/70 hover:text-background transition-colors">
                  Hébergement WordPress
                </Link>
              </li>
              <li>
                <Link href="/hebergement-vps" className="text-background/70 hover:text-background transition-colors">
                  Serveurs VPS
                </Link>
              </li>
              <li>
                <Link href="/domaines" className="text-background/70 hover:text-background transition-colors">
                  Noms de Domaine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-bold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-background/70 hover:text-background transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://client.spiderhoster.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                  Espace Client
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-background/70 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Boulevard Triomphal, Quartier Louis<br />
                  Libreville, Gabon
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
              © {new Date().getFullYear()} SPIDERHOSTER. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-background/70">Moyens de paiement :</span>
              <div className="flex items-center gap-3 text-xs font-mono text-background/70">
                <span className="px-2 py-1 bg-background/10 rounded">Airtel Money</span>
                <span className="px-2 py-1 bg-background/10 rounded">Moov Money</span>
                <span className="px-2 py-1 bg-background/10 rounded">CB</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">Virement</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">Chèque</span>
                <span className="px-2 py-1 bg-background/10 rounded hidden lg:inline">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}