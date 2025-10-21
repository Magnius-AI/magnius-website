import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  Check,
  Cloud,
  Gauge,
  Layers,
  Lock,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UploadCloud,
  Users,
} from 'lucide-react';
import clsx from 'clsx';

const heroIndicators = [
  { icon: Cloud, label: 'Cloud-native, multi-tenant SaaS' },
  { icon: ShieldCheck, label: 'SOC 2 Type II + FFIEC aligned' },
  { icon: Gauge, label: 'Real-time ingestion & validation' },
  { icon: Sparkles, label: 'AI-driven early warnings' },
];

const platformCoverageStats = [
  { value: '4 Weeks', label: 'From kickoff to production' },
  { value: '13,700+', label: 'Bank & credit union targets' },
  { value: '99.9%', label: 'Uptime backed by SLA' },
  { value: '24/7', label: 'Security operations coverage' },
];

const modules = [
  {
    name: 'Secure Cloud Data Ingestion',
    icon: UploadCloud,
    headline: 'Bank-to-Fed data arrives clean, complete, and encrypted.',
    bullets: [
      'Connect via SFTP, API, or secure upload for Excel, XML, JSON, CSV.',
      'Automated schema validation, version control, and exception handling.',
      'Realtime virus, malware, and PII scanning before data is committed.',
    ],
  },
  {
    name: 'AI-Powered Anomaly Detection',
    icon: Activity,
    headline: 'Machine learning trained on the entire MAGNIUS network.',
    bullets: [
      'Detect liquidity drops, capital deterioration, deposit flight, loan spikes.',
      'Peer benchmarking across all institutions on the platform.',
      'GPU-accelerated models retrained continuously on aggregated data.',
    ],
  },
  {
    name: 'Real-Time Risk Intelligence Dashboard',
    icon: BarChart3,
    headline: 'Executive dashboards for treasury, risk, and regulators.',
    bullets: [
      'Liquidity, capital adequacy, asset quality, concentration risk modules.',
      'Explainable AI narratives with drill-down to account-level detail.',
      'Chat assistant for natural-language queries across historical submissions.',
    ],
  },
  {
    name: 'Early Warning System',
    icon: BellRing,
    headline: 'Automated alerting before thresholds are breached.',
    bullets: [
      'Critical, High, Medium, and Informational alert tiers.',
      'Escalations via dashboard, email, SMS, Teams/Slack, and webhook.',
      'Predictive failure probability driven by multi-bank data patterns.',
    ],
  },
  {
    name: 'Collaborative Intelligence',
    icon: Users,
    headline: 'Anonymous network benchmarks power smarter decisions.',
    bullets: [
      'Peer comparison across asset size, geography, and portfolio mix.',
      'Regional early warning indicators sourced from anonymized signals.',
      'Opt-in data contribution with strict data privacy guardrails.',
    ],
  },
  {
    name: 'Regulatory Communication Hub',
    icon: Layers,
    headline: 'One source of truth for regulators and examiners.',
    bullets: [
      'Clean, validated filings forwarded automatically to Central Banks.',
      'Complete audit trail of every submission, change, and approval.',
      'Examiner-ready workspaces with read-only access for oversight.',
    ],
  },
  {
    name: 'Mobile Experience',
    icon: Smartphone,
    headline: 'Executive visibility from anywhere.',
    bullets: [
      'Native iOS and Android apps with biometric authentication.',
      'Push notifications for critical alerts and trend changes.',
      'Mobile-optimized dashboards mirroring the desktop experience.',
    ],
  },
];

const networkEffects = [
  {
    title: 'Shared Intelligence',
    description:
      'Every new bank strengthens anomaly detection models and improves peer benchmarking accuracy across the entire network.',
  },
  {
    title: 'Regulator Confidence',
    description:
      'Supervisors gain a common operating picture across all participating banks, improving systemic oversight and response time.',
  },
  {
    title: 'Faster Innovation',
    description:
      'Cloud delivery enables weekly feature releases, instant security patches, and coordinated response to emerging risk patterns.',
  },
];

const alertBands = [
  {
    tier: 'Critical',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    description:
      'Immediate executive and board escalation. Indicators of imminent failure risk or regulatory breach detected.',
    channels: 'Dashboard, phone, SMS, email, Teams/Slack, API webhook.',
  },
  {
    tier: 'High',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    description:
      'Material deviation from liquidity, capital, or concentration thresholds. Requires action within 24 hours.',
    channels: 'Dashboard, email digest, Teams/Slack.',
  },
  {
    tier: 'Medium',
    color: 'text-yellow-300',
    bg: 'bg-yellow-500/10',
    description:
      'Emerging risk patterns or data quality concerns flagged for analyst review. Automatically tracked until resolution.',
    channels: 'Dashboard tasks, weekly briefing, API webhook.',
  },
  {
    tier: 'Informational',
    color: 'text-blue-300',
    bg: 'bg-blue-500/10',
    description:
      'Positive or neutral signals such as improving liquidity ratios or peer performance benchmarks.',
    channels: 'Dashboard feed, monthly executive briefing.',
  },
];

const implementation = [
  {
    week: 'Week 1',
    focus: 'Connectivity & Data Discovery',
    details:
      'Provision tenant, establish secure connections, catalog data exports, and complete compliance onboarding.',
  },
  {
    week: 'Week 2',
    focus: 'Model Calibration & Benchmarking',
    details:
      'Ingest historical submissions, calibrate AI models with peer data, validate results with risk and treasury teams.',
  },
  {
    week: 'Week 3',
    focus: 'Workflow & Alert Tuning',
    details:
      'Configure alert thresholds, escalation paths, collaboration workspaces, and regulatory notification templates.',
  },
  {
    week: 'Week 4',
    focus: 'Go-Live & Examiner Readiness',
    details:
      'Train end users, hand over runbooks, activate mobile access, and provide examiner-ready documentation.',
  },
];

const securityPillars = [
  {
    title: 'Bank-Grade Controls',
    description:
      'SOC 2 Type II, ISO 27001 aligned, with continuous penetration testing and third-party audits.',
    icon: ShieldCheck,
  },
  {
    title: 'Granular Data Isolation',
    description:
      'Logical tenant isolation with dedicated encryption keys per institution managed via AWS KMS.',
    icon: Lock,
  },
  {
    title: 'Resilient Infrastructure',
    description:
      'Multi-region Kubernetes clusters with automated failover and immutable audit logging.',
    icon: Network,
  },
  {
    title: 'Data Lifecycle Governance',
    description:
      'Versioning, retention policies, and federated access controls ensure regulators can trace every change.',
    icon: Layers,
  },
  {
    title: 'Continuous Monitoring',
    description:
      'Real-time telemetry across application, network, and data layers with 24/7 security operations.',
    icon: Gauge,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function HomePage() {
  const [activeModule, setActiveModule] = useState(0);
  const activeModuleData = modules[activeModule];
  const ActiveModuleIcon = activeModuleData.icon;

  return (
    <div className="space-y-24 pb-28">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                MAGNIUS Banking
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cloud-native risk intelligence between every bank and the Federal Reserve.
              </h1>
              <p className="text-lg text-gray-300 lg:text-xl">
                MAGNIUS intercepts daily regulatory submissions in the cloud, validates and analyzes every line, and
                activates AI-powered early warnings before instability cascades across the financial system.
              </p>
              <div className="flex flex-wrap gap-3">
                {heroIndicators.map((indicator) => (
                  <div
                    key={indicator.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                  >
                    <indicator.icon size={16} className="text-blue-400" />
                    {indicator.label}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
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
            </div>

            <div className="mt-4 space-y-6 rounded-3xl border border-white/5 bg-white/[0.04] p-8 backdrop-blur lg:mt-0">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-300">Platform coverage</p>
              <div className="grid gap-4 md:grid-cols-2">
                {platformCoverageStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 text-sm text-blue-100">
                Designed for commercial banks, credit unions, and regulators that demand real-time visibility into
                liquidity, capital, and systemic risk across the financial system.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="critical-layer">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The critical layer between banks and the Fed</h2>
            <p className="text-base text-gray-300">
              Legacy workflows push Excel or XML files directly to regulators. MAGNIUS provides the secure, cloud-native
              layer that validates every submission, applies AI-driven analytics, and forwards clean, actionable
              intelligence to supervisors.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Check size={18} className="mt-1 text-blue-400" />
                Multi-tenant architecture with per-tenant encryption, ensuring rapid onboarding without sacrificing
                isolation.
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="mt-1 text-blue-400" />
                Streaming ingestion via Kafka/Kinesis and batch pipelines via Airflow keep data synchronized in minutes.
              </li>
              <li className="flex items-start gap-3">
                <Check size={18} className="mt-1 text-blue-400" />
                Regulators gain read-only dashboards, reducing examiner cycles and accelerating supervisory response.
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-300">
              <p className="font-semibold text-white">Data Flow:</p>
              <p className="mt-3">
                Bank core systems {'->'} MAGNIUS Secure Ingest {'->'} AI Validation {'->'} Risk Intelligence Dashboard {'->'} Central
                Bank and Federal Reserve portals.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-blue-500/20 via-transparent to-transparent p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Cloud architecture</p>
              <div className="mt-6 space-y-4 text-sm text-gray-200">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-semibold text-white">AWS / Azure foundation</p>
                  <p className="mt-1">
                    Kubernetes, Terraform-managed infrastructure with automated compliance baselines and secrets
                    management.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-semibold text-white">Data platform</p>
                  <p className="mt-1">
                    PostgreSQL, TimescaleDB, and object storage enable historical replay, scenario analysis, and long-term
                    retention.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="font-semibold text-white">AI/ML operations</p>
                  <p className="mt-1">
                    Centralized training pipelines with SageMaker and GPU pools ensure models continually adapt as new
                    banks join.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="risk-intelligence">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Seven mission-critical capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Everything a modern risk office needs in one platform.
              </h2>
            </div>
            <Link
              to="/#risk-intelligence"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              View detailed product overview
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
            <div className="space-y-3">
              {modules.map((module, index) => (
                <button
                  key={module.name}
                  onClick={() => setActiveModule(index)}
                  type="button"
                  className={clsx(
                    'w-full rounded-2xl border px-5 py-4 text-left transition',
                    activeModule === index
                      ? 'border-blue-500/40 bg-blue-500/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-gray-300 hover:border-blue-500/30 hover:text-white'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <module.icon size={18} className="text-blue-300" />
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                      {module.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-8">
              <div className="flex items-center gap-3">
                <ActiveModuleIcon size={20} className="text-blue-300" />
                <h3 className="text-xl font-semibold text-white">{activeModuleData.name}</h3>
              </div>
              <p className="mt-4 text-lg text-gray-200">{activeModuleData.headline}</p>
              <ul className="mt-6 space-y-4 text-sm text-gray-300">
                {activeModuleData.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check size={16} className="mt-1 text-blue-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="early-warning">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Early warning system</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Alerts calibrated to prevent the next bank failure.
            </h2>
            <p className="text-base text-gray-300">
              MAGNIUS continuously scores liquidity, capital, and concentration exposures with context from the
              entire network. Alerts escalate automatically based on severity and reach every stakeholder needed to
              respond before contagion spreads.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-200">
              <p className="font-semibold text-white">Predictive Failure Probability</p>
              <p className="mt-2">
                Gradient boosting ensembles trained on anonymized, multi-institution data track leading indicators of
                distress and simulate stress scenarios across deposits, loans, and securities portfolios.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {alertBands.map((band) => (
              <div
                key={band.tier}
                className={clsx(
                  'rounded-3xl border border-white/5 p-6 text-sm transition',
                  band.bg
                )}
              >
                <div className={clsx('text-lg font-semibold uppercase tracking-[0.3em]', band.color)}>
                  {band.tier}
                </div>
                <p className="mt-3 text-gray-100">{band.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-300">
                  Delivery: {band.channels}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="network-effects">
        <motion.div {...fadeIn} className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Network effects</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A platform that gets smarter with every institution.
            </h2>
            <p className="text-base text-gray-300">
              On-premise deployments fragment insight. MAGNIUS Banking unifies the financial ecosystem on a single
              cloud platform so banks, credit unions, and regulators benefit from collective intelligence without
              compromising privacy.
            </p>
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 text-sm text-blue-100">
              <p className="font-semibold text-white">Opt-in data collaboration</p>
              <p className="mt-2">
                Banks maintain full ownership of raw data. Only anonymized, aggregated signals contribute to network
                models, enabling competitive insights while protecting confidentiality.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            {networkEffects.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="implementation">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Go live in 4 weeks</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                From kickoff to regulator-ready in a month.
              </h2>
            </div>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Talk to implementation team
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {implementation.map((phase) => (
              <div key={phase.week} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                  {phase.week}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{phase.focus}</h3>
                <p className="mt-3 text-sm text-gray-300">{phase.details}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="security">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Security & compliance</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Built for the most scrutinized institutions on earth.
              </h2>
            </div>
            <Link
              to="/resources#security"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Download security whitepaper
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {securityPillars.map((pillar) => (
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
        <motion.div
          {...fadeIn}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent p-10 text-center backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">Ready to see it live?</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Prevent the next banking crisis with real-time intelligence.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Join the growing network of institutions using MAGNIUS Banking to modernize regulatory reporting, protect
            their balance sheet, and give supervisors the clarity they expect.
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
              to="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
