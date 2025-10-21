import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Layers,
  Sparkles,
  UploadCloud,
} from 'lucide-react';
import clsx from 'clsx';

const tiers = [
  {
    name: 'Credit Unions',
    subtitle: 'Assets under $1B',
    price: '$50K - $125K / year',
    notes: 'Designed for credit unions modernizing overnight reporting and liquidity oversight.',
    highlights: [
      'Full MAGNIUS Banking platform with all seven modules',
      'SFTP or secure upload ingestion adapters',
      'Up to 50 named users with role-based access',
      'Quarterly regulator readiness reviews',
    ],
  },
  {
    name: 'Community Banks',
    subtitle: '$1B - $10B in assets',
    price: '$150K - $350K / year',
    notes: 'Perfect for banks needing early warning intelligence without enterprise overhead.',
    highlights: [
      'Everything in Credit Unions tier',
      'Real-time streaming ingestion (Kafka/Kinesis)',
      'Unlimited alert integrations (email, SMS, Teams/Slack, webhook)',
      'Dedicated customer success manager',
    ],
  },
  {
    name: 'Regional Banks',
    subtitle: '$10B - $100B in assets',
    price: '$400K - $900K / year',
    notes: 'Comprehensive platform for multi-branch institutions coordinating with regulators daily.',
    highlights: [
      'Everything in Community Banks tier',
      'Regulator collaboration workspace and examiner seats',
      'Custom data science sandbox with secure notebooks',
      '24/7 priority response and quarterly on-site reviews',
    ],
  },
  {
    name: 'Large Banks',
    subtitle: '$100B+ in assets',
    price: '$1.2M - $2.0M / year',
    notes: 'Enterprise program for systemically important institutions requiring global coverage.',
    highlights: [
      'Everything in Regional Banks tier',
      'Global multi-region deployment with data residency controls',
      'Dedicated war room and joint incident response program',
      'Custom model governance workflows and validation support',
    ],
  },
];

const inclusions = [
  {
    icon: UploadCloud,
    title: 'Secure ingestion & validation',
    body: 'Automated schema validation, exception management, and encrypted storage with per-tenant keys.',
  },
  {
    icon: BellRing,
    title: 'Early warning system',
    body: 'Critical through informational alert tiers across liquidity, capital, and concentration risks.',
  },
  {
    icon: Layers,
    title: 'Regulatory communication hub',
    body: 'Forward clean filings, share examiner workspaces, and maintain immutable audit trails.',
  },
  {
    icon: Sparkles,
    title: 'AI intelligence upgrades',
    body: 'Continuous ML improvements powered by anonymized network data and GPU-accelerated training.',
  },
];

const services = [
  {
    label: 'Implementation',
    details: 'Included in every tier. Done-for-you onboarding, security review support, and user enablement.',
  },
  {
    label: 'Security & compliance package',
    details: 'Examiner-ready documentation, penetration test reports, and shared responsibility matrix.',
  },
  {
    label: 'Executive reporting',
    details: 'Automated board and ALCO reporting packs customized to your governance cadence.',
  },
  {
    label: 'Predictive simulation add-on',
    details: 'Stress testing scenarios leveraging cross-network data to simulate market and liquidity shocks.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function PricingPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Pricing
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transparent annual pricing aligned to your balance sheet.
            </h1>
            <p className="text-lg text-gray-300 lg:text-xl">
              MAGNIUS Banking is a cloud-native SaaS platform. Pay a single annual subscription that unlocks all seven
              modules, continuous AI upgrades, and a four-week implementation delivered by our onboarding team.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                No hardware or legacy installs required
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Unlimited updates and enhancements
              </span>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
              >
                Schedule Pricing Review
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
              >
                Download ROI overview
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-6 lg:grid-cols-2">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={clsx(
                'rounded-3xl border p-8',
                index >= 2
                  ? 'border-blue-500/40 bg-blue-500/10 text-blue-50'
                  : 'border-white/10 bg-white/[0.03] text-gray-200'
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{tier.subtitle}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{tier.name}</h2>
                </div>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  Annual SaaS
                </span>
              </div>
              <p className="mt-6 text-3xl font-semibold text-white">{tier.price}</p>
              <p className="mt-3 text-sm">{tier.notes}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {tier.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck size={16} className="mt-1 text-blue-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:text-white"
                >
                  Request proposal
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
              Included with every subscription
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">All seven modules, always on.</h2>
            <p className="text-base text-gray-300">
              MAGNIUS Banking is delivered as a complete platform. There are no module add-ons or hidden fees—every
              customer receives the full stack of ingestion, intelligence, early warning, collaboration, and mobile
              access.
            </p>
            <Link
              to="/#risk-intelligence"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Explore modules in depth
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {inclusions.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <item.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="services">
        <motion.div {...fadeIn} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Implementation & services</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Everything required to onboard, operate, and prove compliance.
              </h2>
            </div>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Meet the onboarding team
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {services.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeIn}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent p-10 text-center backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
            Ready to tailor MAGNIUS Banking to your institution?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            We align pricing to your asset size, regulatory cadence, and growth plans.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Schedule a pricing review to explore the platform, understand implementation effort, and co-develop a launch
            plan with our team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Schedule Pricing Review
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              View Resource Library
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
