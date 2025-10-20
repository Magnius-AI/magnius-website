import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Brain,
  ChevronDown,
  Check,
  FileBarChart,
  FileSearch,
  Filter,
  Globe2,
  Layers,
  LineChart,
  PieChart,
  Presentation,
  Sparkles,
  Users,
} from 'lucide-react';

const problemCards = [
  {
    title: 'Prohibitive Cost',
    points: [
      '$32,000 per user per year',
      'Small firms and independent advisors priced out',
      'Enterprise tools should not require enterprise budgets',
    ],
  },
  {
    title: 'Privacy Concerns',
    points: [
      'Research activity visible to platform vendors',
      'Proprietary strategies at risk',
      'Cloud infrastructure creates competitive intelligence leaks',
    ],
  },
  {
    title: 'Vendor Lock-in',
    points: [
      'Two-year contracts with forced upgrades',
      'Data trapped in proprietary formats',
      'Limited control over workflow evolution',
    ],
  },
];

const solutionCompare = {
  before: [
    'Expensive ($32K per user annually)',
    'Cloud dependent with shared infrastructure',
    'Limited privacy controls and data ownership',
    'Vendor-driven product roadmap',
    'Manual workflows with dated UX',
    'Basic AI add-ons bolted onto legacy systems',
  ],
  after: [
    'Affordable ($2,999 one-time or annual plan)',
    '100% local-first deployment',
    'Absolute privacy and full sovereignty',
    'Own the platform forever with open architecture',
    'Modern, streamlined analyst experience',
    'Advanced, finance-tuned AI from day one',
  ],
};

const heroHighlights = [
  'Local-first deployment with zero data exhaust',
  'Bloomberg-grade intelligence without the per-seat tax',
  'Privacy-first AI workflows with full explainability',
];

const featureList = [
  {
    title: 'AI Research Assistant',
    description:
      'Ask questions in natural language and receive instant answers with citations across filings, transcripts, and internal research.',
    icon: Sparkles,
  },
  {
    title: 'Document Intelligence',
    description:
      'Process 10-Ks, earnings transcripts, analyst reports, and private documents with automated insight extraction.',
    icon: FileSearch,
  },
  {
    title: 'Portfolio Analytics',
    description:
      'Monitor multiple portfolios with real-time risk metrics, scenario modeling, and performance attribution.',
    icon: PieChart,
  },
  {
    title: 'Company Research',
    description:
      'Generate deep company profiles, comparables, and financial summaries without leaving your private workspace.',
    icon: BarChart3,
  },
  {
    title: 'Financial Modeling',
    description:
      'Build DCF, LBO, and merger models with AI assistance, Excel export, and version control baked in.',
    icon: LineChart,
  },
  {
    title: 'Market Intelligence',
    description:
      'Track sectors, macro trends, and geopolitical events with configurable alerts and historical context.',
    icon: Globe2,
  },
  {
    title: 'Screening & Discovery',
    description:
      'Screen thousands of securities with complex criteria and AI suggested opportunities tailored to your thesis.',
    icon: Filter,
  },
  {
    title: 'Risk Management',
    description:
      'View portfolio exposure, stress test scenarios, and monitor VaR, drawdowns, and correlation drift.',
    icon: Layers,
  },
  {
    title: 'Data Visualization',
    description:
      'Build interactive charts and dashboards ready for client presentations without leaving the platform.',
    icon: Presentation,
  },
  {
    title: 'Integration Ecosystem',
    description:
      'Connect to brokers, CRMs, portfolio management systems, and internal data warehouses through an open API.',
    icon: Users,
  },
  {
    title: 'Collaboration',
    description:
      'Create shared workspaces, annotations, and version history to keep analysts and partners aligned.',
    icon: FileBarChart,
  },
  {
    title: 'Custom Training',
    description:
      'Fine-tune local AI models on proprietary datasets for differentiated insights without handing over your edge.',
    icon: Brain,
  },
];

const personas = [
  {
    title: 'Registered Investment Advisors',
    points: [
      'Serve clients with institutional-grade intelligence',
      'Justify fiduciary recommendations with defendable analysis',
      'Automate diligence across portfolios and models',
    ],
  },
  {
    title: 'Hedge Funds & Asset Managers',
    points: [
      'Protect proprietary strategies inside your own perimeter',
      'Empower analysts with advanced AI without per-seat costs',
      'Accelerate fundamental, quant, and macro research together',
    ],
  },
  {
    title: 'Family Offices',
    points: [
      'Maintain absolute privacy for multi-generational wealth',
      'Customize analytics for unique asset mixes and KPIs',
      'Collaborate securely across internal and external teams',
    ],
  },
  {
    title: 'Corporate Finance Teams',
    points: [
      'Support M&A, capital allocation, and investor relations',
      'Model strategic scenarios with explainable AI assistance',
      'Package insights for executive and board audiences',
    ],
  },
];

const pricingTiers = [
  {
    name: 'Individual',
    price: '$2,999 one-time or $999/year',
    description: 'Designed for independent advisors and solo analysts.',
    features: [
      'Single user license',
      'All core research features',
      'AI research assistant',
      'Up to 10 portfolios',
      '100 documents per month',
      'Community support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Team',
    price: '$4,999 one-time or $1,999/year',
    description: 'Ideal for boutique firms collaborating across desks.',
    features: [
      '2-5 users included',
      'Unlimited portfolios',
      '500 documents per month',
      'Shared workspaces and annotations',
      'Priority support',
      'Workflow automation toolkit',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Professional',
    price: '$9,999 one-time or $3,999/year',
    description: 'For multi-team organizations with advanced requirements.',
    features: [
      '6-15 users included',
      'Custom model training',
      'White-label option',
      'API and integration access',
      'Dedicated account strategist',
      'Governance and audit controls',
    ],
    cta: 'Contact Sales',
  },
];

const pricingAddOns = [
  'Premium data feeds: $500-$2,000/year',
  'Advanced analytics pack: $1,000/year',
  'Trading and order management integration: $1,500/year',
];

const technicalSpecs = {
  systemRequirements: [
    'Windows 10+, macOS 12+, or modern Linux distribution',
    '16GB RAM minimum (32GB recommended)',
    '100GB available storage',
    'Optional NVIDIA RTX 3060+ for accelerated AI workloads',
    'Internet optional for data updates',
  ],
  deploymentOptions: [
    'Desktop application (Electron-based)',
    'Local server deployment for multi-user teams',
    'Air-gapped environments fully supported',
    'Multi-user network installation with role-based access',
  ],
  securityFeatures: [
    'AES-256 encryption at rest',
    'TLS 1.3 for optional network communication',
    'No telemetry or tracking of user activity',
    'Comprehensive audit logging with export',
    'Role-based access control and MFA',
  ],
  dataSources: [
    'Free: Yahoo Finance, Alpha Vantage, Quandl',
    'Premium connectors for Bloomberg, FactSet, S&P (optional)',
    'Import custom data via CSV, Excel, APIs, and databases',
    'Private data vault for proprietary datasets',
  ],
};

const faqItems = [
  {
    question: 'How does MAGNIUS compare to Bloomberg Terminal?',
    answer:
      'MAGNIUS offers comparable research depth with private AI workflows at a fraction of the cost. Deploy locally, keep full control of your data, and avoid per-seat pricing.',
  },
  {
    question: 'Is my data really private?',
    answer:
      'Yes. All processing occurs on hardware you operate. Nothing leaves your environment unless you explicitly configure outbound connections.',
  },
  {
    question: 'What AI models are included?',
    answer:
      'MAGNIUS ships with finance-tuned LLMs, embeddings, and analytics agents optimized for investment research. You can fine-tune or replace models to match your strategies.',
  },
  {
    question: 'Can I use MAGNIUS offline?',
    answer:
      'Absolutely. The platform is designed for fully offline operation with optional data updates when connectivity is available.',
  },
  {
    question: 'How do I get financial data?',
    answer:
      'Choose from built-in free feeds, connect premium providers, or import your own datasets via CSV, Excel, or APIs.',
  },
  {
    question: "What's included in the one-time purchase?",
    answer:
      'Lifetime software license, all core modules, AI research assistant, and ongoing updates delivered to your local environment.',
  },
  {
    question: 'Can I try before buying?',
    answer:
      'Yes. Start a free 30-day trial with full feature access. No credit card required and no data leaves your infrastructure.',
  },
  {
    question: 'Do you offer training?',
    answer:
      'Professional onboarding, live workshops, and role-based training library are included for Team tiers and above.',
  },
  {
    question: 'How does the AI work without cloud access?',
    answer:
      'Inference and fine-tuning run locally using optimized models. Optional GPU acceleration delivers near real-time responses.',
  },
  {
    question: 'What about updates and support?',
    answer:
      'Secure update packages are delivered on your cadence. Support tiers range from community forums to dedicated strategists.',
  },
];

type TrialFormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  assets?: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function FinancialPage() {
  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PersonaSection />
      <PricingSection />
      <TechnicalSection />
      <FAQSection />
      <TrialCtaSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.1]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 via-transparent to-emerald-500/10 opacity-[0.4]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-20 lg:px-12">
        <motion.div
          className="w-full max-w-2xl space-y-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            MAGNIUS Financial Platform
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Replace Bloomberg. Keep Your Privacy.
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Institutional-grade research, analysis, and portfolio intelligence for investment professionals who refuse
            to compromise on data privacy or control.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Request Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white"
            >
              See Pricing
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-gray-300"
              >
                {highlight}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="w-full max-w-xl"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Analyst Command Center</p>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-300">
                Local-Only
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">AI Research Chat</p>
                <p className="mt-3 text-sm text-gray-200">
                  "Identify undervalued regional banks with improving NIM and low CRE exposure."
                </p>
                <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-600/10 p-4 text-xs text-blue-100">
                  14 candidates scored. Top signals: deposit growth, CRE mix &lt; 12%, forward PE &lt; 8.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Portfolio Pulse</p>
                <div className="mt-4 space-y-3 text-sm text-gray-200">
                  <div className="flex items-center justify-between">
                    <span>Global Multi-Asset</span>
                    <span className="text-green-400">+3.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Credit Opportunities</span>
                    <span className="text-blue-300">VaR 1.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Macro Hedge</span>
                    <span className="text-amber-300">Stress +4.5%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                <span>Task Queue</span>
                <span>Auto-Prioritized</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-200">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Process 15 earnings transcripts</span>
                  <span className="text-blue-300">Queued</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Draft client-ready memo</span>
                  <span className="text-blue-300">In Progress</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Scenario: rate shock +150bps</span>
                  <span className="text-green-300">Complete</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            The Bloomberg Problem
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Why Legacy Terminals Fail Modern Firms</h2>
          <p className="mt-6 text-lg text-gray-400">
            Incumbent platforms were never designed for local-first, privacy-obsessed workflows. They tax growth,
            expose proprietary strategies, and limit innovation.
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problemCards.map((card) => (
            <motion.article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              {...fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10"
            {...fadeIn}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Before</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Bloomberg Era</h3>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {solutionCompare.before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeDollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-blue-500/40 bg-blue-600/10 p-10 shadow-[0_20px_50px_rgba(14,116,255,0.25)]"
            {...fadeIn}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">After</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">MAGNIUS Financial Platform</h3>
            <ul className="mt-6 space-y-3 text-sm text-blue-100">
              {solutionCompare.after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Everything You Need
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Full-Stack Intelligence for Modern Investment Teams
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            MAGNIUS consolidates every workflow -- research, modeling, compliance, and collaboration -- into a single
            local-first platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <motion.article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-blue-500/40"
              {...fadeIn}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                <feature.icon size={20} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Built for Investment Professionals
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Tailored to Every Desk That Moves Capital</h2>
          <p className="mt-6 text-lg text-gray-400">
            Whether you manage client portfolios, run a hedge fund, or steer corporate finance, MAGNIUS adapts to your
            workflows without exposing your edge.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {personas.map((persona) => (
            <motion.article
              key={persona.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
              {...fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white">{persona.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {persona.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Transparent Pricing
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Own Your Platform Without Surprise Fees</h2>
          <p className="mt-6 text-lg text-gray-400">
            Choose a licensing model that fits your team today and scale without per-seat penalties tomorrow. Upgrade or
            expand on your timeline.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <motion.article
              key={tier.name}
              className={`rounded-3xl border p-8 ${
                tier.highlighted
                  ? 'border-blue-500/40 bg-blue-600/10 shadow-[0_25px_55px_rgba(14,116,255,0.25)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
              {...fadeIn}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{tier.name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{tier.price}</h3>
              <p className="mt-3 text-sm text-gray-300">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-200">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'border border-white/20 text-gray-200 hover:border-blue-400 hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-sm text-gray-300">
          <h3 className="text-lg font-semibold text-white">Enterprise</h3>
          <p className="mt-3">
            Custom pricing for 16+ users, hybrid deployments, and global institutions. Includes on-site onboarding,
            dedicated solutions architect, and bespoke model governance.
          </p>
          <Link
            to="/company"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 hover:text-blue-300"
          >
            Talk to our team
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h4 className="text-lg font-semibold text-white">Add-ons</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {pricingAddOns.map((addOn) => (
                <li key={addOn}>- {addOn}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-500/30 bg-blue-600/10 p-8 text-sm text-blue-100">
            <h4 className="text-lg font-semibold text-white">See Your Savings</h4>
            <p className="mt-3">
              Plug in headcount and years of use to compare MAGNIUS against Bloomberg, FactSet, and cloud AI vendors.
            </p>
            <Link
              to="/pricing"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200 hover:text-white"
            >
              Launch savings calculator
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Technical Specifications
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Engineered for Security-Critical Environments</h2>
          <p className="mt-6 text-lg text-gray-400">
            Deploy MAGNIUS on analyst workstations, private servers, or fully air-gapped networks with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <TechCard title="System Requirements" items={technicalSpecs.systemRequirements} />
          <TechCard title="Deployment Options" items={technicalSpecs.deploymentOptions} />
          <TechCard title="Security Features" items={technicalSpecs.securityFeatures} />
          <TechCard title="Data Sources" items={technicalSpecs.dataSources} />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Frequently Asked Questions
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Everything You Want to Know</h2>
          <p className="mt-6 text-lg text-gray-400">
            Still evaluating? These are the most common questions we hear from investment professionals.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <motion.div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 transition-transform ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                {open ? (
                  <div className="border-t border-white/10 px-6 py-5 text-sm text-gray-300">{item.answer}</div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrialCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrialFormValues>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
      assets: '',
    },
  });

  const onSubmit = (values: TrialFormValues) => {
    // In production, forward to backend or CRM.
    console.info('Trial request submitted', values);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="bg-neutral-950/90">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              Start Your Free 30-Day Trial
            </p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Test Drive MAGNIUS with Full Analyst Access
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              No credit card required. Spin up a local-first environment, ingest your data, and experience the entire
              research stack with your team.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>Full platform access for 30 days</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>Guided onboarding session with a product strategist</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>Migration playbook for retiring legacy terminals</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label="Name"
                placeholder="Jordan Matthews"
                error={errors.name?.message}
                register={register('name', { required: 'Name is required.' })}
              />
              <InputField
                type="email"
                label="Email"
                placeholder="jordan@firm.com"
                error={errors.email?.message}
                register={register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
              />
              <InputField
                label="Company"
                placeholder="Atlas Investment Partners"
                error={errors.company?.message}
                register={register('company', { required: 'Company is required.' })}
              />
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Role
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  {...register('role', { required: 'Select your role.' })}
                >
                  <option value="">Select a role</option>
                  <option value="Financial Advisor">Financial Advisor</option>
                  <option value="Portfolio Manager">Portfolio Manager</option>
                  <option value="Analyst">Analyst</option>
                  <option value="CIO">CIO</option>
                  <option value="Other">Other</option>
                </select>
                {errors.role ? (
                  <p className="mt-2 text-xs text-amber-300">{errors.role.message}</p>
                ) : null}
              </div>
              <InputField
                label="Assets Under Management (optional)"
                placeholder="$850M"
                register={register('assets')}
              />

              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Trial Access'}
              </button>
              <p className="text-xs text-gray-400">No credit card required. Cancel anytime.</p>
              {submitted ? (
                <p className="rounded-2xl border border-green-500/40 bg-green-600/10 px-4 py-3 text-xs text-green-200">
                  Thank you. A MAGNIUS strategist will reach out within one business day.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8" {...fadeIn}>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-gray-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type InputFieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
};

function InputField({ label, placeholder, type = 'text', register, error }: InputFieldProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
        {...register}
      />
      {error ? <p className="mt-2 text-xs text-amber-300">{error}</p> : null}
    </div>
  );
}
