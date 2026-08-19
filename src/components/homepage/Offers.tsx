import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "15 000",
    period: "/mois",
    description: "Parfait pour débuter votre présence en ligne",
    features: [
      "10 GB d'espace disque",
      "100 GB de bande passante",
      "5 comptes email",
      "1 nom de domaine gratuit",
      "SSL gratuit",
      "Support 24/7"
    ],
    popular: false
  },
  {
    name: "Business",
    price: "35 000",
    period: "/mois",
    description: "Idéal pour les sites professionnels",
    features: [
      "50 GB d'espace disque",
      "500 GB de bande passante",
      "25 comptes email",
      "3 noms de domaine gratuits",
      "SSL gratuit",
      "Sauvegardes quotidiennes",
      "Support prioritaire 24/7"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "65 000",
    period: "/mois",
    description: "Pour les sites à fort trafic",
    features: [
      "200 GB d'espace disque",
      "Bande passante illimitée",
      "Comptes email illimités",
      "5 noms de domaine gratuits",
      "SSL gratuit",
      "Sauvegardes quotidiennes",
      "CDN inclus",
      "Support VIP 24/7"
    ],
    popular: false
  }
];

export function Offers() {
  return (
    <section id="offres" className="py-20 bg-gradient-to-b from-background to-muted/30">
    </section>
  );
}