"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Zap, TrendingUp, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import type {
  CalculatorAnswers,
  ProjectType,
  TrafficLevel,
  TechnicalLevel,
  PlanRecommendation,
} from "@/lib/calculator-types";
import { calculateRecommendation, getPlanDetails, getPlanPageUrl } from "@/lib/calculator-logic";

const STEPS = 4;

const PROJECT_TYPES: { value: ProjectType; label: string; desc: string }[] = [
  { value: "vitrine", label: "Site Vitrine", desc: "5-20 pages, présentation" },
  { value: "blog", label: "Blog / Magazine", desc: "Articles, actualités" },
  { value: "ecommerce", label: "Boutique E-commerce", desc: "Vente en ligne" },
  { value: "webapp", label: "Application Web / SaaS", desc: "Plateforme interactive" },
  { value: "community", label: "Communauté / Forum", desc: "Espace membres" },
];

const TRAFFIC_LEVELS: { value: TrafficLevel; label: string; desc: string }[] = [
  { value: "low", label: "Moins de 1,000 visiteurs/mois", desc: "Site en démarrage" },
  { value: "medium", label: "1,000 - 10,000 visiteurs/mois", desc: "Croissance modérée" },
  { value: "high", label: "10,000 - 50,000 visiteurs/mois", desc: "Trafic établi" },
  { value: "very-high", label: "50,000 - 200,000 visiteurs/mois", desc: "Fort trafic" },
  { value: "massive", label: "Plus de 200,000 visiteurs/mois", desc: "Trafic massif" },
];

const FEATURE_OPTIONS = [
  { value: "wordpress", label: "WordPress (installation 1-clic)" },
  { value: "ssl", label: "Certificat SSL gratuit" },
  { value: "email", label: "Emails professionnels" },
  { value: "database", label: "Base de données MySQL" },
  { value: "cdn", label: "CDN pour accélérer le site" },
  { value: "priority", label: "Support technique prioritaire" },
];

const TECHNICAL_LEVELS: { value: TechnicalLevel; label: string; desc: string }[] = [
  { value: "beginner", label: "Débutant", desc: "Je préfère un panneau simple et intuitif" },
  { value: "intermediate", label: "Intermédiaire", desc: "J'ai déjà géré des sites web" },
  { value: "advanced", label: "Avancé", desc: "J'ai besoin d'accès SSH/FTP complet" },
];

export function HostingCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<CalculatorAnswers>>({ features: [] });
  const [recommendation, setRecommendation] = useState<PlanRecommendation | null>(null);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const progress = (currentStep / STEPS) * 100;

  const updateAnswer = <K extends keyof CalculatorAnswers>(key: K, value: CalculatorAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const selectProjectType = (type: ProjectType) => {
    setAnswers((prev) => ({
      ...prev,
      projectType: type,
      features: type === "webapp" ? (prev.features || []).filter((f) => f !== "wordpress") : prev.features,
    }));
  };

  const toggleFeature = (feature: string) => {
    setAnswers((prev) => ({
      ...prev,
      features: prev.features?.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...(prev.features || []), feature],
    }));
  };

  const sendRecommendationEmail = async (currentAnswers: CalculatorAnswers, rec: PlanRecommendation) => {
    try {
      const planDetails = getPlanDetails(rec.plan);
      const response = await fetch("/api/send-recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: currentAnswers.email,
          planName: rec.planName,
          price: rec.price,
          category: planDetails.category,
          reasons: rec.reasons,
          projectType: currentAnswers.projectType,
          traffic: currentAnswers.traffic,
        }),
      });
      if (!response.ok) throw new Error("send failed");
      toast({
        title: "Recommandation envoyée !",
        description: "Vous recevrez bientôt un suivi personnalisé par email.",
      });
    } catch (error) {
      console.error("Erreur envoi recommandation:", error);
    }
  };

  const nextStep = () => {
    if (currentStep < STEPS) {
      setCurrentStep(currentStep + 1);
      return;
    }
    if (answers.projectType && answers.traffic && answers.technicalLevel) {
      const rec = calculateRecommendation(answers as CalculatorAnswers);
      setRecommendation(rec);
      if (answers.email) {
        sendRecommendationEmail(answers as CalculatorAnswers, rec);
      }
    }
    setShowResults(true);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!answers.projectType;
      case 2:
        return !!answers.traffic;
      case 3:
        return true;
      case 4:
        return !!answers.technicalLevel;
      default:
        return false;
    }
  };

  const restart = () => {
    setShowResults(false);
    setCurrentStep(1);
    setAnswers({ features: [] });
    setRecommendation(null);
  };

  if (showResults && recommendation) {
    const planDetails = getPlanDetails(recommendation.plan);
    const pageUrl = getPlanPageUrl(recommendation.plan);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            Recommandation Personnalisée
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Recommandation Pour Vous</h2>
          <p className="text-muted-foreground text-lg">
            Basée sur vos réponses, voici le forfait optimal pour votre projet
          </p>
        </div>

        <Card className="p-6 mb-8 bg-muted/30">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            Votre Projet
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Type:</span>{" "}
              <span className="font-medium capitalize">{answers.projectType?.replace("-", " ")}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Trafic estimé:</span>{" "}
              <span className="font-medium">
                {TRAFFIC_LEVELS.find((t) => t.value === answers.traffic)?.label}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Niveau technique:</span>{" "}
              <span className="font-medium capitalize">{answers.technicalLevel}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Fonctionnalités:</span>{" "}
              <span className="font-medium">{answers.features?.length || 0} sélectionnées</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-8 border-primary/50 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <Badge className="mb-2 bg-primary text-primary-foreground">
                <Rocket className="w-3 h-3 mr-1" />
                {planDetails.category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">{recommendation.planName}</h3>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary">
                {recommendation.price.toLocaleString("fr-FR")}
              </div>
              <div className="text-sm text-muted-foreground">FCFA/mois</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-semibold">Pourquoi ce forfait ?</span>
            </div>
            <ul className="space-y-2">
              {recommendation.reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-semibold">Inclus dans ce forfait</span>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {recommendation.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {recommendation.warning && (
            <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-sm text-orange-900 dark:text-orange-200">⚠️ {recommendation.warning}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1 group">
              <a href={planDetails.url} target="_blank" rel="noopener noreferrer">
                Commander Maintenant
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href={pageUrl}>En savoir plus</Link>
            </Button>
          </div>
        </Card>

        {recommendation.upgrade && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/20">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">💡 Upgrade Suggéré</h4>
                <p className="text-sm text-muted-foreground mb-3">{recommendation.upgrade.reason}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div>
                    <span className="font-semibold">{getPlanDetails(recommendation.upgrade.plan).name}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      +{recommendation.upgrade.extraCost.toLocaleString("fr-FR")} FCFA/mois
                    </span>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <a href={getPlanDetails(recommendation.upgrade.plan).url} target="_blank" rel="noopener noreferrer">
                      Voir le forfait
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {recommendation.alternatives.length > 0 && (
          <div className="mb-8">
            <h4 className="font-semibold mb-4">Vous avez aussi considéré :</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendation.alternatives.map((alt) => {
                const altPlan = getPlanDetails(alt.plan);
                return (
                  <Card key={alt.plan} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{altPlan.name}</span>
                      <span className="text-sm font-medium">
                        {altPlan.price.toLocaleString("fr-FR")} FCFA/mois
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{alt.reason}</p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={altPlan.url} target="_blank" rel="noopener noreferrer">
                        Voir cette offre
                      </a>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        <div className="text-center">
          <Button variant="ghost" onClick={restart}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Recommencer le test
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Étape {currentStep} sur {STEPS}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Trouvez Votre Hébergement Idéal</h2>
        <p className="text-muted-foreground">
          Répondez à quelques questions pour une recommandation personnalisée
        </p>
      </div>

      <div className="mb-8">
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 mb-6">
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Quel type de site voulez-vous héberger ?</h3>
            <div className="grid gap-3">
              {PROJECT_TYPES.map((option) => (
                <button
                  key={option.value}
                  onClick={() => selectProjectType(option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.projectType === option.value ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Combien de visiteurs attendez-vous par mois ?</h3>
            <div className="grid gap-3">
              {TRAFFIC_LEVELS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateAnswer("traffic", option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.traffic === option.value ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">De quelles fonctionnalités avez-vous besoin ?</h3>
            <p className="text-sm text-muted-foreground mb-6">Sélectionnez toutes celles qui vous intéressent</p>
            <div className="grid gap-3">
              {FEATURE_OPTIONS.filter(
                (option) => option.value !== "wordpress" || answers.projectType !== "webapp"
              ).map((option) => (
                <button
                  key={option.value}
                  onClick={() => toggleFeature(option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.features?.includes(option.value) ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        answers.features?.includes(option.value)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/30"
                      }`}
                    >
                      {answers.features?.includes(option.value) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Quel est votre niveau technique ?</h3>
            <div className="grid gap-3">
              {TECHNICAL_LEVELS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateAnswer("technicalLevel", option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.technicalLevel === option.value ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted-foreground">{option.desc}</div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t">
              <Label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                📧 Email (optionnel) — Recevez votre recommandation par email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={answers.email || ""}
                onChange={(e) => updateAnswer("email", e.target.value)}
                className="max-w-md"
              />
            </div>
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          Précédent
        </Button>
        <Button onClick={nextStep} disabled={!canProceed()} className="group">
          {currentStep === STEPS ? "Voir Ma Recommandation" : "Suivant"}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}