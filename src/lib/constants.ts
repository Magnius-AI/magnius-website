import {
  Mail,
  MessageSquare,
  FileText,
  Users,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  type LucideIcon,
} from 'lucide-react';

// ============================================
// BRAND CONSTANTS
// ============================================

export const BRAND = {
  name: 'Magnius',
  tagline: 'AI SDR That Delivers Ready-to-Close Appointments',
  description:
    'Not just cold email. Our AI SDR qualifies prospects, warms them with pre-call assets, and delivers appointments where they already want to work with you.',
  email: 'kishor@relius.ai',
  calendly: 'https://calendly.com/kishor-relius',
  parent: 'A Relius Company',
  social: {
    twitter: 'https://twitter.com/magnius_ai',
    linkedin: 'https://linkedin.com/company/magnius-ai',
  },
} as const;

// ============================================
// COLORS (matching Tailwind config)
// ============================================

export const COLORS = {
  // Dark backgrounds
  void: '#050508',
  night: '#0a0a0f',
  charcoal: '#141419',
  graphite: '#1c1c24',
  slate: '#2a2a35',

  // Brand gradients
  cyan: '#00d4ff',
  teal: '#00b8a9',
  electric: '#0066ff',
  violet: '#7c3aed',

  // Text
  frost: '#e8eaed',
  silver: '#9ca3af',
  muted: '#6b7280',
} as const;

// ============================================
// SERVICE DATA (The 3 AI Agent Services)
// ============================================

export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'ai-sdr-standard',
    name: 'AI SDR Standard',
    shortName: 'Standard',
    description: 'Automated outreach that gets you qualified replies',
    icon: Mail,
    color: COLORS.cyan,
    gradient: 'from-cyan to-teal',
    price: 750,
    features: [
      '500 personalized outreach emails/month',
      '5-touch automated follow-up sequences',
      'AI-powered lead scoring',
      'Reply detection & classification',
      'Daily performance reports',
      'CRM integration (HubSpot, Salesforce)',
    ],
  },
  {
    id: 'ai-sdr-premium',
    name: 'AI SDR Premium',
    shortName: 'Premium',
    description: 'Full-funnel system that delivers ready-to-close appointments',
    icon: Users,
    color: COLORS.electric,
    gradient: 'from-electric to-violet',
    price: 1500,
    features: [
      'Everything in Standard, plus:',
      'AI triage & qualification calls',
      'Pre-call asset landing pages',
      'Prospect warming automation',
      'Engagement tracking & scoring',
      'Appointment setting (not just replies)',
    ],
    popular: true,
  },
];

// Legacy bundle removed - now single product with tiers
export const BUNDLE = {
  name: 'AI SDR Premium',
  description: 'Full-funnel appointment setting',
  price: 1500,
  savings: 0,
  features: [
    'Everything in Standard',
    'AI triage & qualification',
    'Pre-call asset system',
    'Prospect warming automation',
    'Engagement tracking',
    'Ready-to-close appointments',
  ],
};

// ============================================
// HERO CONTENT
// ============================================

export const HERO = {
  badge: 'AI SDR — Now with Triage & Pre-Call Assets',
  headline: 'Stop chasing leads. Start closing deals.',
  subheadline:
    'Our AI SDR doesn\'t just send emails — it qualifies prospects, warms them up, and delivers ready-to-buy appointments. Show up to discovery calls where they already know they want to work with you.',
  cta: {
    primary: 'Book a Call',
    secondary: 'See How It Works',
  },
  stats: [
    { value: '500', label: 'Emails/month' },
    { value: '2-3x', label: 'Close rate lift' },
    { value: '$750', label: 'Starting price' },
  ],
} as const;

// ============================================
// VALUE PROPOSITIONS
// ============================================

export const VALUE_PROPS = [
  {
    title: 'Beyond cold email',
    description: 'Triage calls + pre-call assets = prospects show up warmed, informed, and ready to buy',
    icon: Zap,
  },
  {
    title: 'One-call closes',
    description: 'Stop doing 3-4 calls to close. Our system delivers qualified, educated prospects',
    icon: TrendingUp,
  },
  {
    title: '10x cheaper than hiring',
    description: 'Full SDR output for $750-1,500/mo vs $60K+/year for a human',
    icon: Clock,
  },
] as const;

// ============================================
// SOCIAL PROOF / TARGET CUSTOMERS
// ============================================

export const TARGET_CUSTOMERS = [
  {
    title: 'SaaS Founders',
    description: 'Fill your pipeline without hiring expensive SDRs',
    icon: Users,
  },
  {
    title: 'Agency Owners',
    description: 'Get client acquisition on autopilot',
    icon: TrendingUp,
  },
  {
    title: 'Consultants & Coaches',
    description: 'Stop chasing leads, start closing deals',
    icon: Shield,
  },
] as const;

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
] as const;

// ============================================
// FOOTER
// ============================================

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Magnius. All rights reserved.`,
  parent: 'A Relius Company',
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;

// ============================================
// FAQ
// ============================================

export const FAQ = [
  {
    question: 'How is this different from other AI SDR tools?',
    answer: 'Most AI SDR tools just blast emails. We go further: AI-powered triage qualifies prospects, then pre-call assets educate them before your discovery call. By the time you talk to them, they know who you are, what you do, and they\'re ready to buy. It\'s the difference between cold outreach and warm appointments.',
  },
  {
    question: 'What are pre-call assets?',
    answer: 'A personalized landing page sent between booking and your discovery call. It includes a video explaining your offer, FAQ, case studies, and "why not" content that eliminates competing options. Prospects show up informed and ready to make a decision.',
  },
  {
    question: 'How does the AI triage work?',
    answer: 'When a prospect replies positively, our AI engages in a qualifying conversation — confirming they\'re the decision-maker, understanding their current situation, and identifying pain points. Only qualified leads get booked on your calendar.',
  },
  {
    question: 'What\'s the difference between Standard and Premium?',
    answer: 'Standard ($750/mo) gives you AI-powered cold email sequences that generate replies. Premium ($1,500/mo) adds triage automation, pre-call assets, and appointment setting — so you get ready-to-close appointments, not just replies.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients are live within 48-72 hours. We\'ll have an onboarding call to understand your ICP, configure your sequences, and you\'ll start seeing outreach go out immediately.',
  },
  {
    question: 'Do you integrate with my CRM?',
    answer: 'Yes — we integrate with HubSpot, Salesforce, and other major CRMs. Leads, engagement data, and meeting bookings all sync automatically.',
  },
] as const;
