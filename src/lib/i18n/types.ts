export type Locale = "fr" | "en";

export interface Dictionary {
  header: {
    clientArea: string;
    panel: string;
    nav: {
      home: string;
      webHosting: string;
      wordpress: string;
      vps: string;
      professionalEmails: string;
      domains: string;
      calculator: string;
      blog: string;
      about: string;
      contact: string;
    };
    orderCta: string;
    toggleMenu: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    services: {
      webHosting: string;
      wordpress: string;
      vps: string;
      professionalEmails: string;
      domains: string;
    };
    companyTitle: string;
    company: {
      about: string;
      blog: string;
      contact: string;
      clientArea: string;
      privacyPolicy: string;
      terms: string;
    };
    contactTitle: string;
    addressLine1: string;
    addressLine2: string;
    copyright: string;
    paymentMethodsLabel: string;
    paymentMethods: {
      airtel: string;
      moov: string;
      card: string;
      transfer: string;
      check: string;
      cash: string;
    };
  };
  languageSwitcher: {
    label: string;
    fr: string;
    en: string;
  };
}