export type ProjectType = 
  | "vitrine"
  | "blog"
  | "ecommerce"
  | "webapp"
  | "community";

export type TrafficLevel = 
  | "low"        // < 1K
  | "medium"     // 1K-10K
  | "high"       // 10K-50K
  | "very-high"  // 50K-200K
  | "massive";   // 200K+

export type TechnicalLevel = 
  | "beginner"
  | "intermediate"
  | "advanced";

export interface CalculatorAnswers {
  projectType?: ProjectType;
  traffic?: TrafficLevel;
  features?: string[];
  technicalLevel?: TechnicalLevel;
  email?: string;
}

export type PlanType = 
  | "starter"
  | "evolution"
  | "premium"
  | "wp-lanceur"
  | "wp-pro"
  | "wp-premium"
  | "vps-start"
  | "vps-business"
  | "vps-performance";

export interface PlanRecommendation {
  plan: PlanType;
  planName: string;
  price: number;
  confidence: number;
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