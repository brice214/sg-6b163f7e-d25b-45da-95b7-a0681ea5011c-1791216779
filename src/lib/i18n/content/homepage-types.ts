export interface HomepageServiceItem {
  title: string;
  description: string;
  features: string[];
}

export interface HomepageReason {
  title: string;
  description: string;
}

export interface HomepagePlan {
  name: string;
  description: string;
  features: string[];
}

export interface HomepageTestimonial {
  role: string;
  company: string;
  content: string;
}

export interface HomepageFaqItem {
  question: string;
  answer: string;
}

export interface HomepageContent {
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    statUptimeLabel: string;
    statSslLabel: string;
    statSupportLabel: string;
  };
  services: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    learnMore: string;
    items: HomepageServiceItem[];
  };
  why: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    subtitle: string;
    reasons: HomepageReason[];
  };
  offers: {
    badge: string;
    title: string;
    subtitle: string;
    monthly: string;
    annually: string;
    popularBadge: string;
    perMonth: string;
    perYear: string;
    choosePrefix: string;
    paymentNote: string;
    plans: HomepagePlan[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: HomepageTestimonial[];
  };
  blogPreview: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    read: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: HomepageFaqItem[];
  };
  clientsPartners: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
}