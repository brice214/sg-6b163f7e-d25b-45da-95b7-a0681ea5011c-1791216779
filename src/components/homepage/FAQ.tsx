import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Quel type d'hébergement choisir pour mon site ?",
      answer: "Pour un site vitrine ou blog, l'hébergement Web Starter suffit. Pour un site WordPress, optez pour notre hébergement WordPress optimisé. Pour des projets plus exigeants nécessitant ressources dédiées et contrôle total, choisissez un VPS.",
    },
    {
      question: "Puis-je migrer mon site existant vers SPIDERHOSTER ?",
      answer: "Oui, absolument ! Notre équipe technique vous assiste gratuitement dans la migration de votre site. Contactez notre support avec les détails de votre hébergement actuel et nous nous occupons du transfert sans interruption de service.",
    },
    {
      question: "Les sauvegardes sont-elles incluses ?",
      answer: "Oui, toutes nos offres Business et Premium incluent des sauvegardes automatiques quotidiennes. Vos données sont sauvegardées sur des serveurs distincts et vous pouvez restaurer votre site à tout moment depuis cPanel.",
    },
    {
      question: "Comment fonctionne le support 24/7 ?",
      answer: "Notre équipe technique est disponible 24h/24 et 7j/7 par téléphone, email et chat en direct. Les clients Business et Premium bénéficient d'un support prioritaire avec temps de réponse garanti sous 30 minutes.",
    },
    {
      question: "Quels moyens de paiement acceptez-vous ?",
      answer: "Nous acceptons Airtel Money, Moov Money, cartes bancaires (Visa, Mastercard), virements bancaires, chèques et paiement en espèces à nos bureaux de Libreville. Le renouvellement peut être automatisé via carte bancaire ou mobile money.",
    },
    {
      question: "Puis-je upgrader mon offre ultérieurement ?",
      answer: "Oui, vous pouvez upgrader vers une offre supérieure à tout moment. Le changement est instantané et vous ne payez que la différence au prorata pour la période restante. Aucune interruption de service pendant la migration.",
    },
    {
      question: "Où sont situés vos serveurs ?",
      answer: "Nos serveurs sont situés dans un datacenter Tier III certifié à Libreville, Gabon. Cette localisation garantit latence minimale pour vos visiteurs africains, conformité avec les réglementations locales, et souveraineté de vos données.",
    },
    {
      question: "Offrez-vous une garantie satisfait ou remboursé ?",
      answer: "Oui, nous offrons une garantie 30 jours satisfait ou remboursé sur tous nos plans d'hébergement. Si vous n'êtes pas satisfait dans les 30 premiers jours, nous vous remboursons intégralement sans poser de questions.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm font-mono font-semibold text-accent">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos services d'hébergement
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card hover:border-primary/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-mono font-semibold hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}