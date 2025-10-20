import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Info, LineChart, PiggyBank } from 'lucide-react';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  actionLabel: string;
  actionHref: string;
};

const financialPlans: PricingPlan[] = [
  {
    name: 'Individual',
    price: '$2,999 one-time or $999/year',
    description: 'Perfect for independent advisors or solo analysts.',
    features: [
      'Single user license',
      'All core MAGNIUS Financial features',
      'AI research assistant',
      'Up to 10 portfolios',
      '100 documents per month',
      'Community support',
    ],
    actionLabel: 'Get Started',
    actionHref: '/demo',
  },
  {
    name: 'Team',
    price: '$4,999 one-time or $1,999/year',
    description: 'Built for boutique firms collaborating across desks.',
    features: [
      '2-5 users included',
      'Unlimited portfolios',
      '500 documents per month',
      'Shared workspaces and annotations',
      'Priority support and onboarding workshop',
      'Workflow automation toolkit',
    ],
    highlight: true,
    actionLabel: 'Start Free Trial',
    actionHref: '/demo',
  },
  {
    name: 'Professional',
    price: '$9,999 one-time or $3,999/year',
    description: 'For multi-team organizations with advanced governance.',
    features: [
      '6-15 users included',
      'Custom model training',
      'White-label option',
      'API and integration access',
      'Dedicated account strategist',
      'Governance and audit controls',
    ],
    actionLabel: 'Talk to Sales',
    actionHref: '/demo',
  },
];

const financialAddOns = [
  'Premium data feeds: $500-$2,000/year',
  'Advanced analytics pack: $1,000/year',
  'Trading and OMS integration: $1,500/year',
];

const bankingPlans: PricingPlan[] = [
  {
    name: 'Essential',
    price: '$75,000/year',
    description: 'Ideal for $500M-$1B community banks and credit unions.',
    features: [
      'Fraud Detection & Prevention',
      'AML/BSA Compliance',
      'Up to 50 users',
      'Standard support',
      '8-week implementation',
      'Annual model updates',
    ],
    actionLabel: 'Request Proposal',
    actionHref: '/demo',
  },
  {
    name: 'Professional',
    price: '$150,000/year',
    description: 'Designed for $1B-$5B institutions expanding AI coverage.',
    features: [
      'Everything in Essential',
      'Credit Underwriting module',
      'Customer Intelligence module',
      'Up to 150 users',
      'Priority support',
      'Custom model training',
    ],
    highlight: true,
    actionLabel: 'Schedule Demo',
    actionHref: '/demo',
  },
  {
    name: 'Enterprise',
    price: '$250,000/year',
    description: 'For $5B-$10B regional banks with complex operations.',
    features: [
      'Everything in Professional',
      'Document Processing module',
      'Regulatory Reporting automation',
      'Unlimited users',
      'White-glove support and dedicated manager',
      'Custom integrations and on-site training',
    ],
    actionLabel: 'Contact Sales',
    actionHref: '/demo',
  },
];

const pricingFaqs = [
  {
    question: "What's included in the one-time purchase?",
    answer:
      'Lifetime license, core platform modules, AI assistants, and update packages delivered directly to your infrastructure.',
  },
  {
    question: 'Do we have to pay annually or can we buy outright?',
    answer:
      'Both options are available. Many clients purchase once and add optional annual support and data updates.',
  },
  {
    question: 'What about updates and support?',
    answer:
      'Support tiers range from community channels to dedicated strategists. Updates are delivered as signed packages on your cadence.',
  },
  {
    question: 'Are there hidden fees?',
    answer:
      'No surprise fees. Optional add-ons (premium data, advanced analytics, integrations) are listed upfront.',
  },
  {
    question: 'Can we upgrade later?',
    answer:
      'Yes. You can add users, modules, or move to a higher tier without re-platforming or losing prior investment.',
  },
  {
    question: "What's your refund policy?",
    answer:
      'Annual subscriptions can be cancelled at renewal. One-time licenses are non-refundable once delivered because software is deployed locally.',
  },
];

type CalculatorPlatform = 'financial' | 'banking';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function PricingPage() {
  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <PlansSection />
      <CalculatorSection />
      <FaqSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.1]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/15 via-transparent to-purple-600/10 opacity-[0.35]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Transparent Pricing. Predictable Costs.
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Choose the Platform That Fits Your Institution
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Local-first AI for financial professionals and community institutions. No hidden fees, no per-seat penalties,
            and ownership from day one.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Request Pricing Review
            </Link>
            <Link
              to="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlansSection() {
  const [product, setProduct] = useState<CalculatorPlatform>('financial');
  const plans = product === 'financial' ? financialPlans : bankingPlans;
  const addOns = product === 'financial' ? financialAddOns : null;

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 text-center">
          <div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            <button
              type="button"
              onClick={() => setProduct('financial')}
              className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                product === 'financial' ? 'bg-blue-600 text-white shadow-glow' : 'text-gray-400'
              }`}
            >
              MAGNIUS Financial
            </button>
            <button
              type="button"
              onClick={() => setProduct('banking')}
              className={`rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                product === 'banking' ? 'bg-blue-600 text-white shadow-glow' : 'text-gray-400'
              }`}
            >
              MAGNIUS Banking
            </button>
          </div>
          <p className="text-sm text-gray-400">
            {product === 'financial'
              ? 'Own your research platform outright or subscribe annually. Scale seats without per-user penalties.'
              : 'License per institution with unlimited transactions and clear user bands. Modules activate as you grow.'}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.highlight
                  ? 'border-blue-500/40 bg-blue-600/10 shadow-[0_25px_55px_rgba(14,116,255,0.25)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
              {...fadeIn}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{plan.name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{plan.price}</h3>
              <p className="mt-3 text-sm text-gray-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.actionHref}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'border border-white/20 text-gray-200 hover:border-blue-400 hover:text-white'
                }`}
              >
                {plan.actionLabel}
              </Link>
            </motion.article>
          ))}
        </div>

        {addOns ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8" {...fadeIn}>
              <h3 className="text-lg font-semibold text-white">Add-ons</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {addOns.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-gray-300" {...fadeIn}>
              <h3 className="text-lg font-semibold text-white">Enterprise & Custom</h3>
              <p className="mt-3">
                For global teams, hybrid deployments, or bespoke compliance requirements, we scope a custom plan with
                transparent milestones and pricing.
              </p>
              <Link
                to="/company"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 hover:text-blue-300"
              >
                Speak with procurement
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        ) : (
          <motion.div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-gray-300" {...fadeIn}>
            <h3 className="text-lg font-semibold text-white">Modular Rollout</h3>
            <p className="mt-3">
              Activate additional MAGNIUS Banking modules as you expand your program. Pricing scales linearly with assets and
              user bands--no penalties for adoption.
            </p>
            <p className="mt-4 text-blue-200">
              Professional and Enterprise tiers include roadmap reviews and quarterly business reviews with our banking strategists.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [platform, setPlatform] = useState<CalculatorPlatform>('financial');
  const [users, setUsers] = useState(5);
  const [years, setYears] = useState(3);

  const results = useMemo(() => {
    const normalizedUsers = Math.max(users, 1);
    const normalizedYears = Math.max(years, 1);

    if (platform === 'financial') {
      const competitorAnnual = 32000 * normalizedUsers;
      let magniusAnnual: number;
      if (normalizedUsers <= 1) {
        magniusAnnual = 999;
      } else if (normalizedUsers <= 5) {
        magniusAnnual = 1999;
      } else if (normalizedUsers <= 15) {
        magniusAnnual = 3999;
      } else {
        const additionalBlocks = Math.ceil((normalizedUsers - 15) / 10);
        magniusAnnual = 3999 + additionalBlocks * 2500;
      }
      const competitorTotal = competitorAnnual * normalizedYears;
      const magniusTotal = magniusAnnual * normalizedYears;
      const savings = Math.max(competitorTotal - magniusTotal, 0);
      return {
        competitorTotal,
        magniusTotal,
        savings,
        savingsPercent: competitorTotal > 0 ? (savings / competitorTotal) * 100 : 0,
      };
    }

    const blocks = Math.ceil(normalizedUsers / 50); // approximate enterprise licensing blocks
    const competitorAnnual = 500000 + Math.max(0, blocks - 1) * 300000;
    let magniusAnnual: number;
    if (normalizedUsers <= 50) {
      magniusAnnual = 75000;
    } else if (normalizedUsers <= 150) {
      magniusAnnual = 150000;
    } else {
      magniusAnnual = 250000 + Math.max(0, Math.ceil((normalizedUsers - 150) / 100)) * 100000;
    }
    const competitorTotal = competitorAnnual * normalizedYears;
    const magniusTotal = magniusAnnual * normalizedYears;
    const savings = Math.max(competitorTotal - magniusTotal, 0);
    return {
      competitorTotal,
      magniusTotal,
      savings,
      savingsPercent: competitorTotal > 0 ? (savings / competitorTotal) * 100 : 0,
    };
  }, [platform, users, years]);

  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Calculate Your Savings
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">See How MAGNIUS Resets Your Cost Structure</h2>
          <p className="mt-6 text-lg text-gray-400">
            Input your team size and planning horizon to compare the total cost of ownership against legacy vendors.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8" {...fadeIn}>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Platform
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  value={platform}
                  onChange={(event) => setPlatform(event.target.value as CalculatorPlatform)}
                >
                  <option value="financial">MAGNIUS Financial</option>
                  <option value="banking">MAGNIUS Banking</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Users / Seats
                </label>
                <input
                  type="number"
                  min={1}
                  value={users}
                  onChange={(event) => setUsers(Number(event.target.value))}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Years
                </label>
                <input
                  type="number"
                  min={1}
                  value={years}
                  onChange={(event) => setYears(Number(event.target.value))}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                />
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Info className="h-4 w-4 text-blue-400" />
              Estimates assume typical usage patterns and average vendor quotes.
            </p>
          </motion.div>

          <motion.div className="rounded-3xl border border-blue-500/30 bg-blue-600/10 p-8 text-sm text-blue-100" {...fadeIn}>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <LineChart className="h-5 w-5 text-blue-300" />
              Savings Overview
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white">
                <span>Legacy Vendor Total</span>
                <span>${results.competitorTotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white">
                <span>MAGNIUS Total</span>
                <span>${results.magniusTotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-200">
                <span>Total Savings</span>
                <span>${results.savings.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-200">
                <span>Percent Saved</span>
                <span>{results.savingsPercent.toFixed(1)}%</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-blue-200">
              Want an exact analysis? Share your current invoices and usage. We will deliver a line-item comparison with
              deployment milestones.
            </p>
            <Link
              to="/demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 transition hover:text-blue-500"
            >
              Request detailed analysis
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Pricing FAQs
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Clarity Before You Commit</h2>
          <p className="mt-6 text-lg text-gray-400">
            These are the questions we answer most when institutions evaluate MAGNIUS.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {pricingFaqs.map((item, index) => {
            const expanded = open === index;
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
                  onClick={() => setOpen(expanded ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white">{item.question}</span>
                  <PiggyBank
                    className={`h-5 w-5 text-blue-400 transition-transform ${expanded ? 'rotate-12' : ''}`}
                  />
                </button>
                {expanded ? (
                  <div className="border-t border-white/10 px-6 py-5 text-sm text-gray-300">
                    {item.answer}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
