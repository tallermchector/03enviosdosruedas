export interface Zone {
  id: string;
  name: string;
  basePrice: number;
}

export interface PackageType {
  id: string;
  label: string;
  multiplier: number;
  icon: string;
}

export interface DeliveryService {
  id: string;
  name: string;
  badge?: string;
  icon: string;
  description: string;
  baseDeliveryFee: number;
  timeframe: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
}

export interface Capability {
  id: string;
  title: string;
  desc: string;
  icon: string;
  metric: string;
  detail: string;
}

export interface CorpPlan {
  id: string;
  title: string;
  asset: string;
  icon: string;
  bullets: string[];
  link: string;
}
