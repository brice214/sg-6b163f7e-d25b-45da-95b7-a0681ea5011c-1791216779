"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Zap, TrendingUp, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import type { CalculatorAnswers, ProjectType, TrafficRange, TechnicalLevel } from "@/lib/calculator-types";
import { calculateRecommendation, getPlanDetails } from "@/lib/calculator-logic";

const STEPS = 4;

export function HostingCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<CalculatorAnswers>>({
    features: [],
  });
  const [showResults, setShowResults] = useState(false);

  const progress = (currentStep / STEPS) * 100;

  const updateAnswer = <K extends keyof CalculatorAnswers>(
    key: K,
    value: CalculatorAnswers[K]
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const toggleFeature = (feature: string) => {
    setAnswers((prev) => ({
      ...prev,
      features: prev.features?.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...(prev.features || []), feature],
    }));
  };

  const nextStep = () => {
    if (currentStep < STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!answers.projectType;
      case 2:
        return !!answers.traffic;
      case 3:
        return true; // Features are optional
      case 4:
        return !!answers.technicalLevel;
      default:
        return false;
    }
  };

  if (showResults && answers.projectType && answers.traffic && answers.technicalLevel) {
    const recommendation = calculateRecommendation(answers as CalculatorAnswers);
    const planDetails = getPlanDetails(recommendation.plan);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            Recommandation Personnalisée
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Recommandation Pour Vous
          </h2>
          <p className="text-muted-foreground text-lg">
            Basée sur vos réponses, voici le forfait optimal pour votre projet
          </p>
        </div>

        {/* Résumé des réponses */}
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
                {answers.traffic === "low" && "Moins de 1,000/mois"}
                {answers.traffic === "medium" && "1,000-10,000/mois"}
                {answers.traffic === "high" && "10,000-50,000/mois"}
                {answers.traffic === "very-high" && "50,000-200,000/mois"}
                {answers.traffic === "massive" && "Plus de 200,000/mois"}
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

        {/* Recommandation principale */}
        <Card className="p-8 mb-8 border-primary/50 shadow-lg bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Badge className="mb-2 bg-primary text-primary-foreground">
                <Rocket className="w-3 h-3 mr-1" />
                Recommandé
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">{recommendation.planName}</h3>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-primary">{recommendation.price.toLocaleString()}</div>
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
              <p className="text-sm text-orange-900 dark:text-orange-200">
                ⚠️ {recommendation.warning}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 group">
              Commander Maintenant
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              En savoir plus
            </Button>
          </div>
        </Card>

        {/* Upgrade suggéré */}
        {recommendation.upgrade && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/20">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">💡 Upgrade Suggéré</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {recommendation.upgrade.reason}
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-semibold">
                      {getPlanDetails(recommendation.upgrade.plan).name}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      +{recommendation.upgrade.extraCost.toLocaleString()} FCFA/mois
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    Voir le forfait
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Alternatives */}
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
                        {altPlan.price.toLocaleString()} FCFA/mois
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{alt.reason}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions finales */}
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => {
              setShowResults(false);
              setCurrentStep(1);
              setAnswers({ features: [] });
            }}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Recommencer le test
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          Étape {currentStep} sur {STEPS}
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Trouvez Votre Hébergement Idéal
        </h2>
        <p className="text-muted-foreground">
          Répondez à quelques questions pour une recommandation personnalisée
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Questions */}
      <Card className="p-8 mb-6">
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quel type de site voulez-vous héberger ?
            </h3>
            <div className="grid gap-3">
              {[
                { value: "vitrine" as ProjectType, label: "Site Vitrine", desc: "5-20 pages, présentation" },
                { value: "blog" as ProjectType, label: "Blog / Magazine", desc: "Articles, actualités" },
                { value: "ecommerce" as ProjectType, label: "Boutique E-commerce", desc: "Vente en ligne" },
                { value: "webapp" as ProjectType, label: "Application Web / SaaS", desc: "Plateforme interactive" },
                { value: "community" as ProjectType, label: "Communauté / Forum", desc: "Espace membres" },
                { value: "portfolio" as ProjectType, label: "Portfolio Personnel", desc: "Showcase créatif" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateAnswer("projectType", option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.projectType === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border"
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
            <h3 className="text-xl font-semibold mb-6">
              Combien de visiteurs attendez-vous par mois ?
            </h3>
            <div className="grid gap-3">
              {[
                { value: "low" as TrafficRange, label: "Moins de 1,000 visiteurs/mois", desc: "Site en démarrage" },
                { value: "medium" as TrafficRange, label: "1,000 - 10,000 visiteurs/mois", desc: "Croissance modérée" },
                { value: "high" as TrafficRange, label: "10,000 - 50,000 visiteurs/mois", desc: "Trafic établi" },
                { value: "very-high" as TrafficRange, label: "50,000 - 200,000 visiteurs/mois", desc: "Fort trafic" },
                { value: "massive" as TrafficRange, label: "Plus de 200,000 visiteurs/mois", desc: "Trafic massif" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateAnswer("traffic", option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.traffic === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border"
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
            <h3 className="text-xl font-semibold mb-2">
              De quelles fonctionnalités avez-vous besoin ?
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Sélectionnez toutes celles qui vous intéressent
            </p>
            <div className="grid gap-3">
              {[
                { value: "wordpress", label: "WordPress (installation 1-clic)" },
                { value: "ssl", label: "Certificat SSL gratuit" },
                { value: "email", label: "Emails professionnels" },
                { value: "database", label: "Base de données MySQL" },
                { value: "cdn", label: "CDN pour accélérer le site" },
                { value: "priority", label: "Support technique prioritaire" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => toggleFeature(option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.features?.includes(option.value)
                      ? "border-primary bg-primary/5"
                      : "border-border"
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
                      {answers.features?.includes(option.value) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
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
            <h3 className="text-xl font-semibold mb-6">
              Quel est votre niveau technique ?
            </h3>
            <div className="grid gap-3">
              {[
                { value: "beginner" as TechnicalLevel, label: "Débutant", desc: "Je préfère un panneau simple et intuitif" },
                { value: "intermediate" as TechnicalLevel, label: "Intermédiaire", desc: "J'ai déjà géré des sites web" },
                { value: "advanced" as TechnicalLevel, label: "Avancé", desc: "J'ai besoin d'accès SSH/FTP complet" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateAnswer("technicalLevel", option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${
                    answers.technicalLevel === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border"
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

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Précédent
        </Button>
        <Button
          onClick={nextStep}
          disabled={!canProceed()}
          className="group"
        >
          {currentStep === STEPS ? "Voir Ma Recommandation" : "Suivant"}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}