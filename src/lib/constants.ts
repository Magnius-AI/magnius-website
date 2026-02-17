import {
  Video,
  Layout,
  MessageSquare,
  Sparkles,
  PlayCircle,
  BarChart3,
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
  tagline: 'AI-Powered Webinars That Convert',
  description:
    'The modern webinar platform with AI-powered content generation, high-converting registration pages, and reliable streaming. Built for coaches, creators, and businesses.',
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
    id: 'live-streaming',
    name: 'Live Streaming',
    shortName: 'Streaming',
    description: 'Low-latency WebRTC streaming with automatic HLS fallback. Reliable at any scale.',
    icon: Video,
    color: COLORS.cyan,
    gradient: 'from-cyan to-teal',
    details: [
      'WebRTC-powered sub-second latency for presenters',
      'Automatic HLS fallback for large audiences (500+)',
      'Multi-presenter support (up to 6 on screen)',
      'Screen sharing and slide presentation mode',
      'Automatic recording of every session',
    ],
  },
  {
    id: 'registration-pages',
    name: 'Registration Pages',
    shortName: 'Reg Pages',
    description: 'Beautiful, high-converting landing pages with templates, countdown timers, and social proof.',
    icon: Layout,
    color: COLORS.teal,
    gradient: 'from-teal to-cyan',
    details: [
      'Pre-built high-converting templates',
      'Custom fields and branding',
      'Countdown timers and urgency elements',
      'Social proof widgets (attendee count, testimonials)',
      'A/B testing for optimization',
    ],
  },
  {
    id: 'interactive-tools',
    name: 'Interactive Tools',
    shortName: 'Engagement',
    description: 'Live chat, polls, Q&A, hand raises, and timed CTA overlays to keep your audience engaged.',
    icon: MessageSquare,
    color: COLORS.electric,
    gradient: 'from-electric to-violet',
    details: [
      'Real-time live chat with moderation',
      'Interactive polls with live results',
      'Q&A with upvoting and moderator view',
      'Hand raises and attendee spotlighting',
      'Timed CTA overlays and offer popups',
    ],
  },
  {
    id: 'ai-content',
    name: 'AI Content Assistant',
    shortName: 'AI Content',
    description: 'Generate webinar slides, scripts, follow-up emails, and recap docs from a topic outline.',
    icon: Sparkles,
    color: COLORS.violet,
    gradient: 'from-violet to-electric',
    details: [
      'Generate slide decks from a topic or outline',
      'AI-written presenter scripts with talking points',
      'Automated follow-up email sequences',
      'Post-webinar recap docs from transcripts',
      'Personalized content for attendees vs no-shows',
    ],
  },
  {
    id: 'automated-webinars',
    name: 'Automated Webinars',
    shortName: 'Evergreen',
    description: 'Pre-recorded evergreen webinars that feel live. Schedule replays with simulated chat and timed offers.',
    icon: PlayCircle,
    color: COLORS.cyan,
    gradient: 'from-cyan to-electric',
    details: [
      'Record once, replay on any schedule',
      'Simulated live chat for authentic feel',
      'Timed CTA overlays and offer popups',
      'Urgency elements (limited seats, countdown)',
      'On-demand replay pages with gated access',
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    shortName: 'Analytics',
    description: 'Attendance rates, drop-off points, engagement scores, and conversion tracking in real-time.',
    icon: BarChart3,
    color: COLORS.teal,
    gradient: 'from-teal to-violet',
    details: [
      'Real-time attendee count and engagement metrics',
      'Drop-off curve visualization',
      'Engagement scoring per attendee',
      'CTA click and conversion tracking',
      'Export reports and integrate with your CRM',
    ],
  },
];

// ============================================
// PRICING TIERS
// ============================================

export interface PricingTier {
  id: string;
  name: string;
  price: number;
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
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Try Magnius with no commitment',
    attendees: '25 attendees',
    features: [
      '1 webinar/month',
      '30 min max duration',
      'Basic analytics',
      'Live chat',
      'Magnius branding',
    ],
    cta: 'Get Started Free',
    gradient: 'from-slate to-graphite',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 39,
    period: '/mo',
    description: 'Everything you need to start hosting',
    attendees: '100 attendees',
    features: [
      'Unlimited webinars',
      '2 hour max duration',
      'Registration pages',
      'Chat, polls & Q&A',
      'Email reminders',
      'AI content (5/mo)',
      'Custom branding',
      'Recording & replay',
    ],
    popular: true,
    cta: 'Start Free Trial',
    gradient: 'from-cyan to-teal',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 79,
    period: '/mo',
    description: 'For growing businesses that need more',
    attendees: '500 attendees · 3 hosts',
    features: [
      'Everything in Starter, plus:',
      'Evergreen webinars',
      'CTA overlays & offers',
      'Conversion tracking',
      'AI content (unlimited)',
      'Integrations (HubSpot, GHL, Zapier)',
      'Advanced analytics',
      'Follow-up automation',
    ],
    cta: 'Start Free Trial',
    gradient: 'from-electric to-violet',
  },
  {
    id: 'business',
    name: 'Business',
    price: 149,
    period: '/mo',
    description: 'For agencies and enterprises',
    attendees: '2,000 attendees · 6 hosts',
    features: [
      'Everything in Pro, plus:',
      'White-label branding',
      'Priority support',
      'API access',
      'SSO authentication',
      'Custom integrations',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    gradient: 'from-violet to-cyan',
  },
];

// ============================================
// HERO CONTENT
// ============================================

export const HERO = {
  badge: 'Now in Beta — Join the Waitlist',
  headline: 'Webinars that sell.',
  subheadline:
    'The AI-powered webinar platform built for coaches, creators, and businesses. Reliable streaming, high-converting pages, and AI that writes your content.',
  cta: {
    primary: 'Start Free',
    secondary: 'See Features',
  },
  stats: [
    { value: '500+', label: 'Attendees supported' },
    { value: '99.9%', label: 'Uptime' },
    { value: 'AI', label: 'Powered' },
  ],
} as const;

// ============================================
// VALUE PROPOSITIONS
// ============================================

export const VALUE_PROPS = [
  {
    title: 'Streaming that doesn\'t crash',
    description: 'WebRTC-powered streaming with HLS fallback. Your webinar stays live even at 500+ attendees.',
    icon: Zap,
  },
  {
    title: 'Pages that convert',
    description: 'High-converting registration pages with countdown timers, social proof, and A/B testing built in.',
    icon: TrendingUp,
  },
  {
    title: 'AI does the heavy lifting',
    description: 'Generate slides, scripts, follow-up emails, and recap docs from just a topic. Your AI content assistant.',
    icon: Sparkles,
  },
] as const;

// ============================================
// COMPARISON DATA
// ============================================

export const COMPARISON_DATA = [
  {
    feature: 'Reliable streaming',
    webinarjam: { value: '❌ Crashes often', negative: true },
    zoom: { value: '✅ Solid', positive: true },
    magnius: { value: '✅ WebRTC + HLS', positive: true },
  },
  {
    feature: 'AI content generation',
    webinarjam: { value: '❌ None', negative: true },
    zoom: { value: '❌ None', negative: true },
    magnius: { value: '✅ Built-in', positive: true },
  },
  {
    feature: 'Sales CTAs & offers',
    webinarjam: { value: '✅ Basic', positive: true },
    zoom: { value: '❌ None', negative: true },
    magnius: { value: '✅ Advanced', positive: true },
  },
  {
    feature: 'Registration pages',
    webinarjam: { value: '⚠️ Basic', negative: false },
    zoom: { value: '❌ None', negative: true },
    magnius: { value: '✅ Builder', positive: true },
  },
  {
    feature: 'Evergreen webinars',
    webinarjam: { value: '✅ EverWebinar', positive: true },
    zoom: { value: '❌ None', negative: true },
    magnius: { value: '✅ Built-in', positive: true },
  },
  {
    feature: 'Starting price',
    webinarjam: { value: '$49/mo', negative: false },
    zoom: { value: '$79/mo add-on', negative: true },
    magnius: { value: 'Free', positive: true },
  },
];

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
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
    question: 'How is Magnius different from WebinarJam?',
    answer: 'We\'re built on modern infrastructure (WebRTC + HLS), so your webinars don\'t crash mid-presentation. Plus, we have native AI content generation — generate slides, scripts, and follow-up emails automatically. And our pricing starts at free.',
  },
  {
    question: 'What about Zoom Webinars?',
    answer: 'Zoom is great for meetings but wasn\'t built for sales webinars. No registration page builder, no CTA overlays, no evergreen webinars, no AI content assistant. Magnius is purpose-built for webinars that convert.',
  },
  {
    question: 'How does the AI content assistant work?',
    answer: 'Give it a topic or outline, and it generates webinar slide decks, a full presenter script with talking points, follow-up email sequences (different for attendees vs no-shows), and post-webinar recap docs from the recording transcript.',
  },
  {
    question: 'Can I run automated/evergreen webinars?',
    answer: 'Yes. Record once, then schedule automated replays that feel live — complete with simulated chat, timed CTA overlays, urgency elements, and offer popups. Perfect for evergreen funnels.',
  },
  {
    question: 'What integrations do you support?',
    answer: 'HubSpot, GoHighLevel (GHL), Stripe, Mailchimp, ConvertKit, ActiveCampaign, Zapier, and more. Plus webhooks and a public API for custom integrations on our Business plan.',
  },
  {
    question: 'How many attendees can I host?',
    answer: 'Up to 2,000 on our Business plan, with custom capacity for Enterprise. Our WebRTC + HLS hybrid architecture ensures smooth, reliable streaming regardless of audience size.',
  },
] as const;

// ============================================
// TARGET CUSTOMERS
// ============================================

export const TARGET_CUSTOMERS = [
  {
    title: 'Coaches & Creators',
    description: 'Host weekly webinars that convert viewers into clients and course buyers.',
    icon: Sparkles,
  },
  {
    title: 'Marketing Agencies',
    description: 'White-label webinar hosting for your clients. Scale without limits.',
    icon: TrendingUp,
  },
  {
    title: 'SaaS Companies',
    description: 'Product demos, onboarding webinars, and customer education at scale.',
    icon: Zap,
  },
] as const;
