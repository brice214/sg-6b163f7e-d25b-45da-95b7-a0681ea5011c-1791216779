export type ProjectType = 
  | "vitrine"
  | "blog"
  | "ecommerce"
  | "webapp"
  | "community"
  | "portfolio";

export type TrafficRange = 
  | "low"      // < 1K
  | "medium"   // 1K-10K
  | "high"     // 10K-50K
  | "very-high"// 50K-200K
  | "massive"; // > 200K

export type TechnicalLevel = "beginner" | "intermediate" | "advanced";

export interface CalculatorAnswers {
  projectType: ProjectType;
  traffic: TrafficRange;
  features: string[];
  technicalLevel: TechnicalLevel;
  email?: string;
}

export type PlanType = "starter" | "business" | "premium" | "vps";

export interface PlanRecommendation {
  plan: PlanType;
  planName: string;
  price: number;
  confidence: number; // 0-100
  reasons: string[];
  features: string[];
  warning?: string;
  upgrade?: {
    plan: PlanType;
    reason: string;
    extraCost: number;
  };
  alternatives: {
    plan: PlanType;
    reason: string;
  }[];
}