import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  CloudOff,
  Gauge,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Timer,
  Wallet,
} from 'lucide-react';
import clsx from 'clsx';

const heroIndicators = [
  { icon: ShieldCheck, label: '100% Local Processing' },
  { icon: Wallet, label: '90% Cost Savings' },
  { icon: CloudOff, label: 'No Cloud Dependencies' },
  { icon: BadgeCheck, label: 'Full Regulatory Compliance' },
];

const socialStats = [
  {
    value: '$1.5M+',
    label: 'In subscription fees saved annually',
  },
  {
    value: '100% Private',
    label: 'Data never leaves your infrastructure',
  },
  {
    value: '<10 Minutes',
    label: 'To analyze 100+ financial documents',
  },
  {
    value: 'Zero Cloud Risk',
    label: 'Complete air-gapped operation',
  },
];

const products = [
  {
    name: 'MAGNIUS Financial Platform',
    tagline: 'For Investment Professionals',
    description:
      'Replace Bloomberg Terminal and enterprise research platforms with local-first AI. Research, analyze, and act with absolute privacy.',
    features: [
      'AI-powered company research & analysis',
      'Automated document processing (10-Ks, earnings, filings)',
      'Portfolio analytics & risk management',
      'Natural language financial queries',
      'Proprietary model protection',
    ],
    users: 'RIAs, Hedge Funds, Family Offices, Analysts',
    cta: '/financial',
    pricing: 'Starting at $2,999',
    icon: LineChart,
  },
  {
    name: 'MAGNIUS Banking',
    tagline: 'For Community Banks & Credit Unions',
    description:
      'Mission-critical AI for fraud detection, AML compliance, and credit underwriting. Enterprise security for institutions that cannot compromise.',
    features: [
      'Real-time fraud detection & prevention',
      'Automated AML/BSA compliance',
      'AI-powered credit underwriting',
      'Regulatory reporting automation',
      'Customer intelligence & insights',
    ],
    users: 'Community Banks, Credit Unions, Regional Banks',
    cta: '/banking',
    pricing: 'Starting at $75,000',
    icon: Building2,
  },
];

const localFirstAdvantages = [
  {
    title: 'Your Data Never Leaves',
    description:
      'Process sensitive financial data, proprietary strategies, and customer information entirely on your infrastructure.',
    icon: Lock,
  },
  {
    title: 'Built for Compliance',
    description:
      'Meet SEC, FINRA, FDIC, and NCUA requirements with complete audit trails. Data sovereignty guaranteed.',
    icon: ShieldCheck,
  },
  {
    title: '90% Cost Savings',
    description:
      'One-time purchase vs. endless subscriptions. No cloud compute fees. Pay once, own forever.',
    icon: Wallet,
  },
  {
    title: 'Own Your Stack',
    description:
      'Open architecture, local deployment, your hardware. No dependency on external APIs or platforms.',
    icon: BadgeCheck,
  },
  {
    title: 'Fine-Tune on Your Data',
    description:
      'Train models on your proprietary data without ever uploading it. AI that understands your edge.',
    icon: BrainCircuit,
  },
  {
    title: 'Millisecond Latency',
    description:
      'No network roundtrips. Instant analysis, real-time fraud detection, unbeatable speed.',
    icon: Gauge,
  },
];

const comparisonRows = [
  {
    label: 'Annual Cost',
    bloomberg: '$32,000 / user',
    cloud: '$12,000-$20,000 / user',
    magnius: '$2,999 one-time',
  },
  {
    label: 'Data Privacy',
    bloomberg: 'Shared infrastructure',
    cloud: 'Cloud servers',
    magnius: '100% local',
  },
  {
    label: 'Offline Capability',
    bloomberg: 'Limited',
    cloud: 'None',
    magnius: 'Full functionality',
  },
  {
    label: 'AI Capabilities',
    bloomberg: 'Basic (added 2023)',
    cloud: 'Advanced',
    magnius: 'Advanced + Custom',
  },
  {
    label: 'Vendor Lock-in',
    bloomberg: 'High',
    cloud: 'High',
    magnius: 'None',
  },
  {
    label: 'Deployment Time',
    bloomberg: 'Days',
    cloud: 'Hours',
    magnius: 'Minutes',
  },
  {
    label: 'Regulatory Control',
    bloomberg: 'Limited',
    cloud: 'Complex',
    magnius: 'Complete',
  },
  {
    label: '10-Year TCO',
    bloomberg: '$320,000',
    cloud: '$120,000',
    magnius: '$3,000',
  },
];

const useCaseTabs = [
  {
    id: 'advisors',
    title: 'Financial Advisors & RIAs',
    scenario:
      'Deliver institutional-grade insights to every client without $32K licenses or cloud risk.',
    painPoints: [
      'Expensive data platforms erode margins',
      'Manual document review slows diligence',
      'Compliance teams require full audit trails',
    ],
    features: [
      'Automated 10-K, earnings, and filing analysis',
      'Client-ready presentations in minutes',
      'Portfolio monitoring with regulatory logging',
    ],
    roi: 'Typical advisory firms cut research spend by 70% while elevating client reporting.',
    cta: '/financial',
    ctaLabel: 'See MAGNIUS Financial ->',
  },
  {
    id: 'hedge-funds',
    title: 'Hedge Funds & Asset Managers',
    scenario:
      'Protect proprietary research while uncovering opportunities faster than incumbents.',
    painPoints: [
      'Cloud AI leaks investment strategies',
      'Legacy terminals lack advanced AI',
      'Team licenses compound costs',
    ],
    features: [
      'Secure internal data ingestion and modeling',
      'Multi-analyst collaboration without overages',
      'Alpha discovery with private fine-tuning',
    ],
    roi: 'Firms reclaim 20+ hours per week and redeploy spend to alpha-generating talent.',
    cta: '/financial',
    ctaLabel: 'Explore Financial Platform ->',
  },
  {
    id: 'family-offices',
    title: 'Family Offices',
    scenario:
      'Steward multigenerational wealth with bespoke analysis, zero exposure, and complete control.',
    painPoints: [
      'Confidential holdings require local computation',
      'Alternative assets demand custom models',
      'Vendor lock-in limits multigenerational planning',
    ],
    features: [
      'Cross-asset intelligence and scenario planning',
      'Private data vault with role-based access',
      'Custom AI training on proprietary KPIs',
    ],
    roi: 'Family offices unlock institutional tooling without exposing sensitive portfolios.',
    cta: '/financial',
    ctaLabel: 'Discover MAGNIUS Financial ->',
  },
  {
    id: 'community-banks',
    title: 'Community Banks',
    scenario:
      'Combat fraud, automate AML, and modernize underwriting with on-prem AI built for your budget.',
    painPoints: [
      'Enterprise fraud tools cost $500K+ per year',
      'Manual AML reviews overwhelm compliance teams',
      'Fintech competitors deploy AI faster',
    ],
    features: [
      'Real-time fraud scoring across every channel',
      'SAR and CTR automation with examiner audit trails',
      'AI-assisted underwriting and customer intelligence',
    ],
    roi: 'Banks realize 90% savings vs. enterprise vendors and launch in under eight weeks.',
    cta: '/banking',
    ctaLabel: 'See MAGNIUS Banking ->',
  },
  {
    id: 'credit-unions',
    title: 'Credit Unions',
    scenario:
      'Deliver member-first experiences with predictive intelligence and privacy-first architecture.',
    painPoints: [
      'Limited IT staff to deploy and maintain AI',
      'Legacy systems block data-driven member insights',
      'Regulators demand transparent decisioning',
    ],
    features: [
      'Member churn prediction and next-best-action',
      'Explainable AI for lending and compliance',
      'Staff-friendly workflows with no cloud risk',
    ],
    roi: 'Credit unions boost member retention 10-20% with a platform they fully own.',
    cta: '/banking',
    ctaLabel: 'Explore MAGNIUS Banking ->',
  },
];

const technologyColumns = [
  {
    title: 'Local AI Models',
    points: [
      'Fine-tuned LLMs engineered for finance',
      'Runs on your hardware -- desktop or data center',
      'No external API dependencies',
      'Models: Llama 3, Mistral, MAGNIUS custom stacks',
    ],
  },
  {
    title: 'Secure Architecture',
    points: [
      'Air-gapped deployment available',
      'End-to-end encryption with full audit trails',
      'Role-based access plus hardware attestation',
      'SOC 2 Type II compliant processes',
    ],
  },
  {
    title: 'Open Platform',
    points: [
      'API-first design for internal integrations',
      'Custom plugins and data connectors supported',
      'Import private data sources with full control',
      'No proprietary formats. You own everything.',
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function HomePage() {
  const [activeUseCase, setActiveUseCase] = useState(useCaseTabs[0].id);
  const activeTab = useCaseTabs.find((tab) => tab.id === activeUseCase) ?? useCaseTabs[0];

  return (
    <div className="bg-brand-black text-white">
      <HeroSection />

      <motion.section
        {...fadeIn}
        viewport={{ once: true, amount: 0.2 }}
        className="border-y border-white/5 bg-neutral-950/70"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.4em] text-gray-400">
            Trusted by Financial Professionals Who Demand Privacy
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {socialStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <p className="text-4xl font-black text-white">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-xl border border-dashed border-white/10 px-6 py-4 text-center text-xs uppercase tracking-[0.4em] text-gray-500">
            Trusted by leading RIAs, hedge funds, and community banks
          </div>
        </div>
      </motion.section>

      <ProductSection />

      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              Why Local-First
            </p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Why Local-First AI Matters in Finance
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Privacy, control, and performance are not negotiable. MAGNIUS keeps every calculation inside your
              environment so compliance officers, CISOs, and investment teams stay aligned.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localFirstAdvantages.map((advantage) => (
              <motion.article
                key={advantage.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-blue-500/40"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                  <advantage.icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{advantage.title}</h3>
                <p className="mt-3 text-sm text-gray-400">{advantage.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 opacity-0 transition group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              The MAGNIUS Advantage
            </p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">Compare MAGNIUS to Legacy Platforms</h2>
            <p className="mt-6 text-lg text-gray-400">
              Stop renting cloud intelligence. Own a platform tailored to financial privacy, regulatory rigor, and ROI.
            </p>
          </header>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[700px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.3em] text-gray-400">
                  <th className="px-6 py-4 font-semibold text-white">Feature</th>
                  <th className="px-6 py-4 font-semibold">Bloomberg Terminal</th>
                  <th className="px-6 py-4 font-semibold">Cloud AI Platforms</th>
                  <th className="px-6 py-4 font-semibold text-blue-400">MAGNIUS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.label}
                    className={clsx(
                      'text-sm text-gray-300',
                      index % 2 === 0 ? 'bg-white/[0.015]' : 'bg-transparent'
                    )}
                  >
                    <td className="px-6 py-5 font-semibold text-white">{row.label}</td>
                    <td className="px-6 py-5">{row.bloomberg}</td>
                    <td className="px-6 py-5">{row.cloud}</td>
                    <td className="px-6 py-5 font-semibold text-green-400">{row.magnius}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Own your intelligence stack and reclaim your margins.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:border-blue-400 hover:text-blue-300"
            >
              See how much you will save
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950" id="use-cases">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              Built for Finance
            </p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">Built for How You Actually Work</h2>
            <p className="mt-6 text-lg text-gray-400">
              Configure MAGNIUS to every desk across your institution -- wealth, hedge, banking, and compliance -- with
              true local control.
            </p>
          </div>

          <div className="mt-12 flex gap-3 overflow-x-auto pb-4">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveUseCase(tab.id)}
                className={clsx(
                  'relative flex-shrink-0 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition',
                  activeUseCase === tab.id
                    ? 'border-blue-500/60 bg-blue-600/10 text-blue-300'
                    : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-blue-500/40 hover:text-blue-200'
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 lg:grid-cols-2"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">{activeTab.title}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Scenario</p>
                  <p className="text-base text-gray-300">{activeTab.scenario}</p>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Pain Points Solved</p>
                    <ul className="mt-4 space-y-3 text-sm text-gray-300">
                      {activeTab.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Key Features</p>
                    <ul className="mt-4 space-y-3 text-sm text-gray-300">
                      {activeTab.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-green-400/30 bg-green-500/10 p-6 text-sm text-green-200">
                    <p className="uppercase tracking-[0.3em] text-green-300">ROI Snapshot</p>
                    <p className="mt-3">{activeTab.roi}</p>
                  </div>
                  <Link
                    to={activeTab.cta}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
                  >
                    {activeTab.ctaLabel}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950/80">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
                Technology Stack
              </p>
              <h2 className="mt-6 text-4xl font-black md:text-5xl">Enterprise-Grade Technology Stack</h2>
              <p className="mt-6 text-lg text-gray-400">
                Engineered to satisfy CIOs, CISOs, and regulators without sacrificing analyst speed or product flexibility.
              </p>

              <div className="mt-10 space-y-6">
                {technologyColumns.map((column) => (
                  <div
                    key={column.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-gray-300">
                      {column.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -translate-y-8 translate-x-8 rounded-3xl bg-blue-600/10 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
                  Local Deployment Blueprint
                </p>
                <div className="mt-6 space-y-4">
                  <ArchitectureRow
                    title="Secure Data Plane"
                    description="Encrypted data lake, proprietary models, and document intelligence -- all on hardware you control."
                  />
                  <ArchitectureRow
                    title="Intelligence Layer"
                    description="MAGNIUS orchestration of LLMs, embeddings, and vector stores with explainability built in."
                  />
                  <ArchitectureRow
                    title="Application Layer"
                    description="Research workspace, compliance cockpit, and banking operations modules with role-based access."
                  />
                  <ArchitectureRow
                    title="Integration Fabric"
                    description="API-first connectors into core banking, CRMs, data warehouses, and private market feeds."
                  />
                </div>
                <div className="mt-8 rounded-2xl border border-blue-500/40 bg-blue-600/10 p-6 text-sm text-blue-100">
                  <p className="uppercase tracking-[0.3em] text-blue-300">Deployment Options</p>
                  <ul className="mt-3 space-y-2">
                    <li>- Desktop application (Windows, macOS, Linux)</li>
                    <li>- Local server for team deployments</li>
                    <li>- Air-gapped and regulator-ready environments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950/95">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Take Control
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Ready to Take Control of Your Financial Intelligence?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Swap cloud dependencies for sovereign intelligence. Deploy MAGNIUS on your terms and bring enterprise AI to
            every decision-maker.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Request a Demo
            </Link>
            <Link
              to="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-500/40 hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            Or explore our products:
            <span className="ml-2 inline-flex gap-2 text-blue-300">
              <Link to="/financial" className="hover:text-blue-200">
                MAGNIUS Financial
              </Link>
              <span>|</span>
              <Link to="/banking" className="hover:text-blue-200">
                MAGNIUS Banking
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-28 pb-24 lg:pt-32">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-[0.45]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 sm:px-8 lg:flex-row lg:items-stretch lg:gap-16 lg:px-12">
        <motion.div
          className="w-full max-w-2xl space-y-8 lg:max-w-xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Local-First AI for Finance
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Enterprise AI That Never Leaves Your Premises
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Institutional-grade financial intelligence for investment professionals and banks. All the power of
            Bloomberg and enterprise platforms - 100% local, 90% less cost, absolute privacy.
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroIndicators.map((indicator) => (
              <div
                key={indicator.label}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-blue-400">
                  <indicator.icon size={18} />
                </span>
                <span className="uppercase tracking-[0.25em]">{indicator.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full max-w-xl"
        >
          <PlatformMockup />
        </motion.div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="bg-neutral-950" id="products">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Products
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Two Platforms. One Mission: Your Data, Your Control.
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Financial institutions choose MAGNIUS for privacy-proof analytics and operational AI that live entirely on
            their own infrastructure.
          </p>
        </header>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <motion.article
              key={product.name}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400">
                  <product.icon size={22} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">{product.tagline}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{product.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-300">{product.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 text-sm text-gray-400">
                <p className="uppercase tracking-[0.3em] text-gray-500">Target Users</p>
                <p>{product.users}</p>
                <p className="font-semibold text-white">{product.pricing}</p>
              </div>

              <Link
                to={product.cta}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-blue-600/0" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformMockup() {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-green-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-400">Portfolio Snapshot</p>
            <p className="text-sm font-semibold text-white">Cross-Asset Overview</p>
          </div>
          <Timer className="h-5 w-5 text-blue-400" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Risk Radar</p>
            <p className="mt-3 text-3xl font-black text-white">0.82</p>
            <p className="text-xs text-green-400">Sharpe Ratio</p>
            <div className="mt-5 h-32 rounded-xl bg-gradient-to-tr from-blue-500/20 via-blue-500/5 to-transparent" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Compliance Queue</p>
            <div className="mt-3 space-y-3">
              {['SAR drafts ready', 'KYC refresh', 'Model validation'].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
                >
                  <span className="text-sm text-gray-200">{item}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
                    {index === 0 ? '4' : index === 1 ? '7' : '3'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 rounded-2xl border border-blue-500/40 bg-blue-600/10 p-5"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Natural Language Query</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
              <p className="text-sm text-white">
                Summarize liquidity risk for regional banks under the new proposed Basel III endgame rules.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-gray-100">
              Identified 12 material factors across capital adequacy, liquidity coverage, and retail funding. Key risk
              drivers include unrealized losses (-8.2%), deposit concentration, and wholesale funding rollover exposure.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ArchitectureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}
