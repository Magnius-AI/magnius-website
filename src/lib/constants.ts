import {
  Brain,
  TrendingUp,
  Building2,
  Cog,
  Radar,
  Users,
  Target,
  FileText,
  type LucideIcon,
} from 'lucide-react';

// ============================================
// BRAND CONSTANTS
// ============================================

export const BRAND = {
  name: 'Magnius',
  tagline: 'AI-powered consulting for the modern enterprise',
  description:
    'Replace traditional consulting with continuous AI-powered intelligence. Eight coordinated engines that function as your company\'s always-on strategic brain.',
  email: 'hello@magnius.ai',
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
// ENGINE DATA (The 8 Consulting OS Engines)
// ============================================

export interface Engine {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export const ENGINES: Engine[] = [
  {
    id: 'strategy',
    name: 'Strategy Engine',
    shortName: 'Strategy',
    description: 'Competitive analysis, market landscapes, and strategic scenarios',
    icon: TrendingUp,
    color: COLORS.cyan,
    gradient: 'from-cyan to-teal',
  },
  {
    id: 'financial',
    name: 'Financial Simulation',
    shortName: 'Financial',
    description: 'Living financial models with scenario simulation and forecasting',
    icon: TrendingUp,
    color: COLORS.teal,
    gradient: 'from-teal to-electric',
  },
  {
    id: 'org-dynamics',
    name: 'Organizational Dynamics',
    shortName: 'Org Dynamics',
    description: 'Structure, culture, and influence network modeling',
    icon: Building2,
    color: COLORS.electric,
    gradient: 'from-electric to-violet',
  },
  {
    id: 'operational',
    name: 'Operational Engine',
    shortName: 'Operations',
    description: 'Process simulation and optimization recommendations',
    icon: Cog,
    color: COLORS.violet,
    gradient: 'from-violet to-cyan',
  },
  {
    id: 'competitive',
    name: 'Competitive Intelligence',
    shortName: 'Competitive',
    description: 'Continuous monitoring of competitive landscape',
    icon: Radar,
    color: COLORS.cyan,
    gradient: 'from-cyan to-electric',
  },
  {
    id: 'stakeholder',
    name: 'Stakeholder & Political',
    shortName: 'Stakeholder',
    description: 'Organizational politics and resistance prediction',
    icon: Users,
    color: COLORS.teal,
    gradient: 'from-teal to-violet',
  },
  {
    id: 'execution',
    name: 'Execution Engine',
    shortName: 'Execution',
    description: 'Strategy to action with tracking and accountability',
    icon: Target,
    color: COLORS.electric,
    gradient: 'from-electric to-cyan',
  },
  {
    id: 'narrative',
    name: 'Narrative Engine',
    shortName: 'Narrative',
    description: 'Executive-ready deliverables and presentations',
    icon: FileText,
    color: COLORS.violet,
    gradient: 'from-violet to-teal',
  },
];

// ============================================
// HERO CONTENT
// ============================================

export const HERO = {
  badge: 'AI-Powered Intelligence',
  headline: 'The future of consulting is here.',
  subheadline:
    'Replace expensive consultants with continuous AI-powered intelligence. Eight coordinated engines that function as your company\'s always-on strategic brain.',
  cta: {
    primary: 'Join the waitlist',
    secondary: 'Learn more',
  },
  stats: [
    { value: '90%', label: 'Cost reduction vs traditional consulting' },
    { value: '24/7', label: 'Continuous intelligence' },
    { value: '8', label: 'Coordinated AI engines' },
  ],
} as const;

// ============================================
// VALUE PROPOSITIONS
// ============================================

export const VALUE_PROPS = [
  {
    title: 'Not a one-time report',
    description: 'Continuous intelligence that evolves with your business',
    icon: Brain,
  },
  {
    title: '90% cost reduction',
    description: 'Fraction of the cost of McKinsey, BCG, or Bain',
    icon: TrendingUp,
  },
  {
    title: 'Real-time insights',
    description: 'Not 6 months later when the market has already shifted',
    icon: Radar,
  },
] as const;

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// ============================================
// FOOTER
// ============================================

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Magnius. All rights reserved.`,
  links: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
} as const;
