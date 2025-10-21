import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BadgeCheck, BellRing, Cloud, Lock, ShieldCheck } from 'lucide-react';

const resourceGroups = [
  {
    title: 'Implementation & onboarding',
    items: [
      {
        name: 'Implementation playbook',
        description: 'Detailed four-week plan covering connectivity, calibration, workflow automation, and launch.',
      },
      {
        name: 'Security & compliance questionnaire template',
        description: 'Pre-filled responses covering SOC 2, FFIEC mapping, encryption, and operational resilience.',
      },
      {
        name: 'Data ingestion integration guide',
        description: 'Technical walkthrough for SFTP, API, and streaming connectors with sample scripts.',
      },
    ],
    icon: BadgeCheck,
  },
  {
    title: 'Risk intelligence insights',
    items: [
      {
        name: 'Early warning benchmarks',
        description: 'Anonymized alert data showcasing leading indicators observed across the MAGNIUS network.',
      },
      {
        name: 'Liquidity stress response handbook',
        description: 'Playbooks for treasury, ALCO, and board coordination when liquidity pressure mounts.',
      },
      {
        name: 'Peer benchmarking report',
        description: 'Quarterly view of capital, liquidity, and concentration trends segmented by asset size.',
      },
    ],
    icon: Activity,
  },
  {
    title: 'Regulator collaboration',
    items: [
      {
        name: 'Examiner workspace overview',
        description: 'Explain how regulators gain read-only dashboards, audit trails, and shared task tracking.',
      },
      {
        name: 'Model governance documentation kit',
        description: 'Sample documentation covering model inventory, validation, and monitoring artifacts.',
      },
      {
        name: 'FFIEC technology modernization brief',
        description: 'Overview of cloud adoption guidance from FFIEC, OCC, FDIC, and Federal Reserve.',
      },
    ],
    icon: BellRing,
  },
];

const securityDocs = [
  {
    title: 'SOC 2 Type II report',
    body: 'Independent audit attesting to security, availability, and confidentiality controls across the MAGNIUS platform.',
  },
  {
    title: 'Penetration testing summary',
    body: 'Executive overview and methodology of annual assessments performed by third-party security firms.',
  },
  {
    title: 'Shared responsibility matrix',
    body: 'Clarifies how MAGNIUS, cloud providers, and customer teams collaborate on controls and operations.',
  },
];

const cloudResources = [
  {
    title: 'Reference architecture',
    description:
      'Layer-by-layer diagram of ingestion, processing, storage, AI/ML, and experience tiers deployed across AWS regions.',
    icon: Cloud,
  },
  {
    title: 'Resilience & disaster recovery plan',
    description:
      'Details of multi-region failover, backup retention policies, and quarterly disaster recovery testing cadence.',
    icon: ShieldCheck,
  },
  {
    title: 'Data residency & isolation guide',
    description:
      'Explains tenant isolation, encryption key management, and options for regional residency requirements.',
    icon: Lock,
  },
];

const statusUpdates = [
  {
    title: 'Real-time platform status',
    description: 'Monitor uptime, planned maintenance, and incident history. Subscribe to alerts for changes.',
    action: 'status.magnius.ai',
  },
  {
    title: 'Release notes',
    description: 'Bi-weekly updates outlining new capabilities, security enhancements, and AI model improvements.',
    action: 'View release feed',
  },
  {
    title: 'Support center',
    description:
      'Submit tickets, review knowledge base articles, and engage with customer success and security teams.',
    action: 'Open portal',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ResourcesPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Resources
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything you need to evaluate, deploy, and operate MAGNIUS Banking.
            </h1>
            <p className="text-lg text-gray-300 lg:text-xl">
              Explore implementation playbooks, security documentation, and risk intelligence insights crafted for
              commercial banks, credit unions, and regulators modernizing their supervisory workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Cloud-native SaaS resources
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Security & compliance center
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Resource library</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Guides written by former regulators and bank operators.
              </h2>
            </div>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Request tailored packet
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <group.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-4 text-sm text-gray-300">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-300">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="security">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Security documentation</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Bank-grade controls, fully transparent.</h2>
            <p className="text-base text-gray-300">
              Access detailed documentation prepared for boards, security teams, and regulators. Every customer receives
              up-to-date assessments, certifications, and shared responsibility guidance.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Request security whitepaper
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5">
            {securityDocs.map((doc) => (
              <div key={doc.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{doc.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{doc.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="cloud">
        <motion.div {...fadeIn} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Cloud operations</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Understand the architecture powering MAGNIUS Banking.
              </h2>
            </div>
            <Link
              to="/#critical-layer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Explore architecture
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {cloudResources.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <item.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="status">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Status & support</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Real-time transparency and expert assistance.
            </h2>
            <p className="text-base text-gray-300">
              Stay up to date on platform health, feature releases, and support resources. Our customer success and
              security teams operate 24/7 to ensure institutions and regulators have what they need.
            </p>
          </div>
          <div className="grid gap-5">
            {statusUpdates.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-blue-200">{item.action}</p>
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
            Need a curated package for your stakeholders?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            We assemble custom resource bundles for boards, regulators, and investment committees.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Tell us what your teams need—security attestations, model governance, implementation plans—and we will
            deliver a tailored set of documents.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Request custom packet
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/#risk-intelligence"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Explore platform
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
