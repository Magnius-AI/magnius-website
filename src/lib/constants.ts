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
  tagline: 'AI Agents That Work 24/7 For Your Business',
  description:
    'Deploy AI agents that handle your sales outreach, customer support, and content marketing — while you focus on closing deals and growing your business.',
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
    id: 'ai-sdr',
    name: 'AI SDR Agent',
    shortName: 'SDR',
    description: 'Automated sales outreach that books meetings while you sleep',
    icon: Mail,
    color: COLORS.cyan,
    gradient: 'from-cyan to-teal',
    price: 750,
    features: [
      '500 personalized outreach emails/month',
      '5-touch automated follow-up sequences',
      'AI-powered lead qualification',
      'Daily performance reports',
      'CRM integration (HubSpot, Salesforce)',
      'Custom email templates & voice',
    ],
    popular: true,
  },
  {
    id: 'ai-support',
    name: 'AI Support Agent',
    shortName: 'Support',
    description: 'Customer support that remembers every conversation',
    icon: MessageSquare,
    color: COLORS.electric,
    gradient: 'from-electric to-violet',
    price: 500,
    features: [
      'Email & chat support coverage',
      'Persistent customer memory',
      'Smart escalation to humans',
      '< 1 hour response time (business hours)',
      'Multi-language support',
      'Knowledge base integration',
    ],
  },
  {
    id: 'ai-content',
    name: 'AI Content Agent',
    shortName: 'Content',
    description: 'Consistent content that builds your brand',
    icon: FileText,
    color: COLORS.violet,
    gradient: 'from-violet to-cyan',
    price: 500,
    features: [
      '4 SEO-optimized blog posts/month',
      '20 social posts (LinkedIn + X)',
      'Scheduled publishing',
      'Brand voice consistency',
      'Content calendar management',
      'Performance analytics',
    ],
  },
];

export const BUNDLE = {
  name: 'Full Stack Bundle',
  description: 'All 3 AI agents working together',
  price: 1500,
  savings: 250,
  features: [
    'Everything in SDR Agent',
    'Everything in Support Agent',
    'Everything in Content Agent',
    'Priority support',
    'Custom integrations',
    'Dedicated success manager',
  ],
};

// ============================================
// HERO CONTENT
// ============================================

export const HERO = {
  badge: 'AI Agents Available Now',
  headline: 'Your AI team that never sleeps.',
  subheadline:
    'Deploy AI agents that handle your sales outreach, customer support, and content marketing — 24/7, at a fraction of the cost of hiring.',
  cta: {
    primary: 'Book a Call',
    secondary: 'See Pricing',
  },
  stats: [
    { value: '24/7', label: 'Always working' },
    { value: '10x', label: 'Cheaper than hiring' },
    { value: '< 1hr', label: 'Response time' },
  ],
} as const;

// ============================================
// VALUE PROPOSITIONS
// ============================================

export const VALUE_PROPS = [
  {
    title: 'Not just automation',
    description: 'AI agents with persistent memory that learn and improve over time',
    icon: Zap,
  },
  {
    title: '10x cheaper than hiring',
    description: 'Get the output of a full team for less than one employee',
    icon: TrendingUp,
  },
  {
    title: 'Always on, never sick',
    description: 'Your AI agents work nights, weekends, and holidays',
    icon: Clock,
  },
] as const;

// ============================================
// SOCIAL PROOF / TARGET CUSTOMERS
// ============================================

export const TARGET_CUSTOMERS = [
  {
    title: 'SaaS Founders',
    description: 'Scale your outreach without scaling headcount',
    icon: Users,
  },
  {
    title: 'Marketing Agencies',
    description: 'Deliver more for clients without hiring more',
    icon: TrendingUp,
  },
  {
    title: 'Consultants & Coaches',
    description: 'Focus on delivery while AI handles lead gen',
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
    question: 'How is this different from regular automation?',
    answer: 'Our AI agents have persistent memory — they remember every interaction with your prospects and customers. They learn your brand voice, understand context, and improve over time. It\'s not just sending emails on a schedule; it\'s intelligent outreach that adapts.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients are up and running within 48-72 hours. We\'ll have an onboarding call to understand your business, configure your AI agents, and you\'ll start seeing results immediately.',
  },
  {
    question: 'What if the AI makes a mistake?',
    answer: 'All sensitive actions go through approval workflows. For support tickets, the AI knows when to escalate to humans. For outreach, you can review and approve messages before they go out. You\'re always in control.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all plans are month-to-month with no long-term commitment. We\'re confident you\'ll see ROI within the first month.',
  },
  {
    question: 'Do you integrate with my existing tools?',
    answer: 'Yes — we integrate with HubSpot, Salesforce, Slack, Discord, Gmail, and many more. If you use a tool we don\'t support yet, let us know and we\'ll add it.',
  },
] as const;
