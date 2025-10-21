import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  Building2,
  Check,
  Gauge,
  Layers,
  LineChart,
  Sparkles,
  UploadCloud,
} from 'lucide-react';

const solutionCards = [
  {
    title: 'Liquidity & funding risk',
    description:
      'Monitor deposit flows, wholesale funding, and collateral positions in real time. Compare coverage ratios against network peers to spot compression early.',
    icon: Gauge,
  },
  {
    title: 'Capital adequacy & stress',
    description:
      'Track Tier 1, leverage, and risk-weighted capital across entities. Simulate projected impacts of scenario shocks using multi-bank intelligence.',
    icon: LineChart,
  },
  {
    title: 'Data validation & quality',
    description:
      'Automate schema checks, reconciliation, and exception handling before filings reach regulators. Provide auditors full lineage and context.',
    icon: BadgeCheck,
  },
  {
    title: 'Regulatory coordination',
    description:
      'Give regulators read-only dashboards, alert subscriptions, and examiner workspaces so supervision cycles accelerate and duplication disappears.',
    icon: Building2,
  },
  {
    title: 'Peer benchmarking',
    description:
      'Understand how liquidity, capital, and concentration metrics compare to anonymized peers by size, region, and business model.',
    icon: BarChart3,
  },
  {
    title: 'Crisis playbooks',
    description:
      'Coordinate incident response across risk, treasury, communications, and regulators with shared plans, alerts, and accountability.',
    icon: BellRing,
  },
];

const earlyWarningScenarios = [
  {
    name: 'Regional liquidity shock',
    signal: 'Deposit concentration spikes 22% week-over-week across banks within the same state.',
    response: [
      'MAGNIUS flags Critical alert with peer benchmarking context.',
      'Treasury team triggers contingency funding plan and notifies the board.',
      'Regulators receive shared briefing and can monitor remediation in real time.',
    ],
  },
  {
    name: 'Wholesale funding stress',
    signal: 'Secured borrowing costs rise 180 bps in two days while collateral availability shrinks.',
    response: [
      'High severity alert prompts review of contingent liquidity sources.',
      'Scenario simulation estimates impact on liquidity coverage ratios.',
      'Automated report distributed to ALCO with recommended actions.',
    ],
  },
  {
    name: 'Capital deterioration',
    signal: 'Tier 1 capital ratio projected to breach thresholds within 30 days based on loan growth and credit performance.',
    response: [
      'Medium alert escalates to CFO and Chief Risk Officer with AI narrative.',
      'Model suggests capital raising options and highlights peer approaches.',
      'Regulator workspace updated with remediation plan and milestones.',
    ],
  },
];

const validationPillars = [
  {
    title: 'Automated ingestion',
    description:
      'SFTP, API, and secure upload methods normalize Excel, XML, and JSON files. Schema drifts trigger real-time exception workflows.',
    icon: UploadCloud,
  },
  {
    title: 'Rules & AI checks',
    description:
      'Business rules, statistical outlier detection, and machine learning flag inconsistencies before data leaves the bank.',
    icon: Sparkles,
  },
  {
    title: 'Evidence & audit',
    description:
      'Every change is versioned with user attribution, justification notes, and supporting documents for examiners.',
    icon: Layers,
  },
];

const regulatorBenefits = [
  {
    title: 'Shared situational awareness',
    body: 'Supervisors see the same dashboards and alerts as the bank, eliminating spreadsheet back-and-forth and accelerating reviews.',
  },
  {
    title: 'Examiner-ready documentation',
    body: 'Auto-generated packages include data lineage, model governance evidence, and change history for each filing.',
  },
  {
    title: 'Coordinated resolutions',
    body: 'Assign actions, deadlines, and follow-up tasks between regulators and bank stakeholders with full transparency.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function SolutionsPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Solutions
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built for every commercial bank reporting to the Federal Reserve.
            </h1>
            <p className="text-lg text-gray-300 lg:text-xl">
              MAGNIUS Banking delivers the cloud-native intelligence layer that treasury, risk, finance, and compliance
              teams need to spot stress early, communicate with regulators, and keep institutions stable.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Liquidity, capital, and systemic risk in one platform
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Cloud-native SaaS with zero legacy installs
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Use cases</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Modernize the entire regulatory risk workflow.
              </h2>
            </div>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Schedule strategy session
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <card.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="early-warning">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Early warning playbooks</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Detect stress early, execute playbooks fast.
            </h2>
            <p className="text-base text-gray-300">
              MAGNIUS monitors every submission, peer benchmark, and industry signal. When risk appears, alert tiers
              trigger coordinated workflows across risk, treasury, finance, and regulators.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <BellRing size={18} className="text-blue-300" />
                <p className="font-semibold text-white">Alert tiers</p>
              </div>
              <p className="mt-3">
                Critical (board + regulators), High (executive + risk), Medium (analyst review), Informational (trend
                updates). Delivery through dashboard, email, SMS, Teams/Slack, and API webhooks.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            {earlyWarningScenarios.map((scenario) => (
              <div key={scenario.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{scenario.name}</h3>
                <p className="mt-3 text-sm text-blue-200">Signal: {scenario.signal}</p>
                <ul className="mt-4 space-y-3 text-sm text-gray-300">
                  {scenario.response.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="mt-1 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Data integrity</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Eliminate manual data prep and focus on judgement.
            </h2>
            <p className="text-base text-gray-300">
              Banks no longer wrangle spreadsheets or reconcile inconsistent exports. MAGNIUS automates ingestion,
              validation, and exception management so teams can focus on analysis and action.
            </p>
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 text-sm text-blue-100">
              <p className="font-semibold text-white">Audit ready from day zero</p>
              <p className="mt-2">
                Every change is logged with user, timestamp, before/after values, and supporting documentation. Examiners
                and auditors receive read-only access with full context.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            {validationPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <pillar.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Regulator coordination</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              One workspace for banks and supervisors to collaborate.
            </h2>
            <p className="text-base text-gray-300">
              Regulators get the same high-fidelity data, alerts, and context as the bank—without waiting for manual
              updates. MAGNIUS ensures transparency and shared accountability.
            </p>
          </div>
          <div className="space-y-5">
            {regulatorBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{benefit.body}</p>
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
            Ready to modernize your regulatory stack?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Join the cloud-native banking network preventing the next crisis.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            MAGNIUS Banking unifies data quality, risk analytics, and regulator collaboration so you can stay ahead of
            emerging risk. Let us tailor a rollout plan for your institution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Schedule Demo
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/#risk-intelligence"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Explore Platform
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
