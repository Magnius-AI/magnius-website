import {
  Database,
  Sun,
  AlertTriangle,
  Network,
  DollarSign,
  Target,
  Zap,
  TrendingUp,
  Clock,
  type LucideIcon,
} from 'lucide-react';

// ============================================
// BRAND CONSTANTS
// ============================================

export const BRAND = {
  name: 'Magnius',
  tagline: 'Make Your Agency\'s Data Speak',
  description:
    'The AI-powered analytics platform for sales agencies. Aggregate Meta, Hyros, GHL, and SendBlue data into an AI Narrative Engine that generates actionable daily briefings and catches hidden funnel leaks.',
  email: 'hello@magnius.ai',
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
  void: '#050508',
  night: '#0a0a0f',
  charcoal: '#141419',
  graphite: '#1c1c24',
  slate: '#2a2a35',
  cyan: '#00d4ff',
  teal: '#00b8a9',
  electric: '#0066ff',
  violet: '#7c3aed',
  frost: '#e8eaed',
  silver: '#9ca3af',
  muted: '#6b7280',
} as const;

// ============================================
// FEATURES DATA
// ============================================

export interface Feature {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  details: string[];
}

export const FEATURES: Feature[] = [
  {
    id: 'data-aggregation',
    name: 'Multi-Source Aggregation',
    shortName: 'Integrations',
    description: 'Connect all your tools seamlessly. Meta Ads, Hyros, GoHighLevel, and SendBlue integration out of the box.',
    icon: Database,
    color: COLORS.cyan,
    gradient: 'from-cyan to-teal',
    details: [
      'Native integration with Meta Ads and Hyros',
      'GoHighLevel (GHL) funnel metrics sync',
      'SendBlue iMessage analytics tracking',
      'Unified data warehouse for your agency',
      'Real-time data freshness',
    ],
  },
  {
    id: 'ai-briefings',
    name: 'AI Morning Briefings',
    shortName: 'Briefings',
    description: 'Start your day with an AI-generated CEO briefing summarizing your top metrics and North Star progress.',
    icon: Sun,
    color: COLORS.teal,
    gradient: 'from-teal to-cyan',
    details: [
      'Daily summaries delivered automatically',
      'Top 5 leverage metrics highlighted',
      'No more scrambling through dashboards',
      'Plain business language without jargon',
      'Actionable recommendations included',
    ],
  },
  {
    id: 'anomaly-detection',
    name: 'Anomaly Detection',
    shortName: 'Anomalies',
    description: 'Catch funnel leaks instantly. Our AI monitors your metrics 24/7 and alerts you when things break.',
    icon: AlertTriangle,
    color: COLORS.electric,
    gradient: 'from-electric to-violet',
    details: [
      '24/7 monitoring of all core metrics',
      'Statistical bounds and trend deviation alerts',
      'Slack and email notifications',
      'Root cause analysis generated instantly',
      'Prioritized by severity',
    ],
  },
  {
    id: 'cross-metric',
    name: 'Cross-Metric Insights',
    shortName: 'Graph AI',
    description: 'Understand the "why". Magnius walks the causal graph to show how top-of-funnel changes impact the bottom.',
    icon: Network,
    color: COLORS.violet,
    gradient: 'from-violet to-electric',
    details: [
      'Proprietary Metric Graph technology',
      'Upstream and downstream impact tracking',
      'See how ad spend changes affect close rates',
      'Feedback loop identification',
      'RAG-enhanced historical pattern recognition',
    ],
  },
  {
    id: 'revenue-impact',
    name: 'Revenue Impact Quantification',
    shortName: 'ROI Calc',
    description: 'Stop guessing. Every anomaly and recommendation comes with a calculated dollar impact on your revenue.',
    icon: DollarSign,
    color: COLORS.cyan,
    gradient: 'from-cyan to-electric',
    details: [
      'Estimated revenue impact per anomaly',
      'Sensitivity analysis across the funnel',
      'Dollar quantification using edge formulas',
      'Clear prioritization of what to fix first',
      'Hard ROI tracking for your agency',
    ],
  },
  {
    id: 'team-performance',
    name: 'Team Performance Tracking',
    shortName: 'Team Ops',
    description: 'Track your setters and closers. Deep dive into individual performance and conversion rates.',
    icon: Target,
    color: COLORS.teal,
    gradient: 'from-teal to-violet',
    details: [
      'Setter to Closer matrix',
      'Call outcome tracking',
      'Individual rep leaderboards',
      'Identify coaching opportunities',
      'Real-time team dashboards',
    ],
  },
];

// ============================================
// PRICING TIERS
// ============================================

export interface PricingTier {
  id: string;
  name: string;
  price: number | string;
  period: string;
  description: string;
  attendees: string;
  features: string[];
  popular?: boolean;
  cta: string;
  gradient: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'agency',
    name: 'Agency Partner',
    price: 'Custom',
    period: '',
    description: 'Transform how your agency uses data',
    attendees: 'Unlimited Clients',
    features: [
      'Full Narrative Engine Access',
      'GHL, Hyros, Meta & SendBlue Integrations',
      'Daily AI CEO Briefings',
      'Real-time Anomaly Detection',
      'Cross-Metric Graph Analysis',
      'Dedicated Slack Support',
      'White-label options available',
    ],
    popular: true,
    cta: 'Book a Demo',
    gradient: 'from-electric to-violet',
  },
];

// ============================================
// HERO CONTENT
// ============================================

export const HERO = {
  badge: 'Now in Beta — Book a Demo',
  headline: 'Make your agency\'s data **speak**.',
  subheadline:
    'Stop scrambling through spreadsheets. Magnius aggregates your Meta, Hyros, and GHL data into an AI Narrative Engine that generates actionable daily briefings and catches funnel leaks before they cost you.',
  cta: {
    primary: 'Book a Demo',
    secondary: 'See Features',
  },
  stats: [
    { value: '4+', label: 'Core Integrations' },
    { value: '24/7', label: 'Anomaly Detection' },
    { value: 'AI', label: 'Narrative Engine' },
  ],
} as const;

// ============================================
// VALUE PROPOSITIONS
// ============================================

export const VALUE_PROPS = [
  {
    title: 'Automated Briefings',
    description: 'Start your day with an AI-generated CEO briefing. Know your numbers without opening a single dashboard.',
    icon: Sun,
  },
  {
    title: 'Instant Anomaly Detection',
    description: 'Catch funnel leaks the moment they happen. Get alerts with calculated dollar impacts so you know what to fix.',
    icon: AlertTriangle,
  },
  {
    title: 'Cross-Metric Causality',
    description: 'Our Narrative Engine walks the data graph to show you exactly how ad spend upstream affects close rates downstream.',
    icon: Network,
  },
] as const;

// ============================================
// COMPARISON DATA
// ============================================

export const COMPARISON_DATA = [
  {
    feature: 'Data Access',
    standardBI: { value: 'Manual exports', negative: true },
    spreadsheets: { value: 'Siloed tools', negative: true },
    magnius: { value: '✅ Meta, Hyros, GHL', positive: true },
  },
  {
    feature: 'Data Interpretation',
    standardBI: { value: 'You figure it out', negative: true },
    spreadsheets: { value: 'Complex charts', negative: true },
    magnius: { value: '✅ AI Narratives', positive: true },
  },
  {
    feature: 'Anomaly Detection',
    standardBI: { value: '❌ None', negative: true },
    spreadsheets: { value: '❌ None', negative: true },
    magnius: { value: '✅ Real-time Alerts', positive: true },
  },
];

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/features' },
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
    question: 'How exactly does the AI read my data?',
    answer: 'Magnius uses a proprietary "Metric Graph" that maps the causal relationships between your KPIs. When data flows in from GHL or Meta, our Narrative Engine walks this graph upstream and downstream to understand context, then uses an LLM to generate plain-English insights.',
  },
  {
    question: 'What integrations do you natively support?',
    answer: 'We currently natively integrate with Meta Ads, Hyros, GoHighLevel (GHL), and SendBlue (for iMessage analytics). This covers the entire funnel from ad click to signed contract.',
  },
  {
    question: 'Does it just give me charts, or does it tell me what to do?',
    answer: 'The core value of Magnius is the Narrative Engine. Instead of just showing you a chart that dipped, Magnius generates a Morning Briefing or Anomaly Alert that tells you: "Close rates dropped 15%, which is costing you $4,000/week. This was caused by a drop in show rates from the Meta Ads campaign." It gives you the "so what" and "now what."',
  },
  {
    question: 'Is it hard to set up?',
    answer: 'Not at all. Once you connect your data sources via OAuth or API keys, Magnius begins syncing historical data and establishing baselines. The AI starts generating narratives within 24 hours.',
  },
  {
    question: 'Can I track individual team members?',
    answer: 'Yes. Our platform includes a Setter-Closer matrix and call outcome tracking, so you can see exactly which reps are performing and who needs coaching based on the data.',
  },
  {
    question: 'How is this different from tools like Databox or Looker?',
    answer: 'Standard BI tools are "dumb" dashboards—they show you numbers and force you to interpret them. Magnius is an active intelligence platform. It analyzes the data for you, writes the reports, and calculates the dollar impact of issues before you even log in.',
  },
] as const;

// ============================================
// TARGET CUSTOMERS
// ============================================

export const TARGET_CUSTOMERS = [
  {
    title: 'Sales Agencies',
    description: 'Track client performance, prove ROI, and stop wasting hours pulling reports.',
    icon: Target,
  },
  {
    title: 'Growth Teams',
    description: 'Unify ad spend with sales outcomes to see the true cost of acquisition.',
    icon: TrendingUp,
  },
  {
    title: 'RevOps Leaders',
    description: 'Get automated anomaly detection across your entire GHL and Hyros funnel.',
    icon: Zap,
  },
] as const;
