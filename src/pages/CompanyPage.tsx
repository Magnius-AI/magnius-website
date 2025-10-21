import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Network, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: '2022',
    title: 'Founded to prevent the next banking crisis',
    description:
      'Former regulators, bank operators, and cloud engineers joined forces after regional bank turmoil exposed gaps in daily supervision.',
  },
  {
    year: '2023',
    title: 'Cloud-native platform launched',
    description:
      'First multi-tenant release delivered secure data ingestion, AI anomaly detection, and regulator workspaces for pilot banks.',
  },
  {
    year: '2024',
    title: 'Network intelligence at scale',
    description:
      'Expanded to dozens of commercial banks and credit unions, delivering shared benchmarking and predictive early warning analytics.',
  },
  {
    year: '2025',
    title: 'National rollout',
    description:
      'Partnering with regulators and core providers to bring MAGNIUS to all 13,700+ US institutions with 24/7 coverage.',
  },
];

const principles = [
  {
    title: 'Preventative by design',
    description:
      'We measure success by the crises that never happen. Every product decision focuses on surfacing signals early and making action inevitable.',
    icon: Compass,
  },
  {
    title: 'Cloud-native infrastructure',
    description:
      'Global-grade resilience, security, and speed demand cloud delivery. We invest in automation, observability, and compliance so banks do not have to.',
    icon: Network,
  },
  {
    title: 'Regulator partnership',
    description:
      'We co-develop workflows with supervisors to streamline examinations, strengthen collaboration, and standardize expectations for every institution.',
    icon: Building2,
  },
  {
    title: 'Trusted intelligence',
    description:
      'AI is only useful when transparent. Our models are explainable, routinely validated, and governed in partnership with our customers.',
    icon: Sparkles,
  },
];

const teams = [
  {
    title: 'Risk & regulatory experts',
    description:
      'Former OCC, FDIC, and Federal Reserve supervisors translate evolving guidance into product capabilities and documentation.',
  },
  {
    title: 'Cloud engineering',
    description:
      'Site reliability engineers and security architects deliver 99.9% uptime, multi-region redundancy, and bank-grade controls.',
  },
  {
    title: 'Applied AI research',
    description:
      'Data scientists and ML engineers focus on explainable anomaly detection, scenario simulation, and continuous model calibration.',
  },
  {
    title: 'Customer success',
    description:
      'Dedicated implementation specialists partner with each bank to align playbooks, onboard teams, and deliver examiner-ready packages.',
  },
];

const implementationPhases = [
  {
    week: 'Week 1',
    focus: 'Connectivity + compliance',
    details:
      'Provision tenant, complete security questionnaires, and configure secure ingestion from cores, data warehouses, and manual exports.',
  },
  {
    week: 'Week 2',
    focus: 'Historical calibration',
    details:
      'Load historical filings, calibrate benchmark cohorts, and align early warning thresholds with treasury and risk teams.',
  },
  {
    week: 'Week 3',
    focus: 'Workflow automation',
    details:
      'Enable collaboration workspaces, escalation paths, and regulator access. Integrate alerts with email, SMS, Slack, and Teams.',
  },
  {
    week: 'Week 4',
    focus: 'Launch & enablement',
    details:
      'Train users, complete go-live rehearsals, finalize examiner documentation, and transition to ongoing success coverage.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function CompanyPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              About MAGNIUS
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Preventing bank failures through real-time intelligence and collaboration.
            </h1>
            <p className="text-lg text-gray-300 lg:text-xl">
              MAGNIUS Banking was created to become the secure cloud layer between every commercial bank and the Federal
              Reserve. We unify data quality, AI-powered analytics, and regulator communication so stability is never an
              afterthought.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Cloud-native, multi-tenant SaaS
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Built with regulators and banks
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Mission</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A safer banking system through shared insight.</h2>
            <p className="text-base text-gray-300">
              Banks, credit unions, and regulators deserve the same real-time intelligence that fintechs take for
              granted. We believe a multi-tenant, cloud-native platform is the only way to deliver speed, resilience, and
              shared context across the entire financial system.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 transition hover:border-blue-400 hover:text-blue-100"
            >
              Talk to our team
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <principle.icon size={20} className="text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Story</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">{item.year}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Team</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Experts from banking, regulation, and cloud engineering.</h2>
            <p className="text-base text-gray-300">
              We are headquartered in New York with a distributed team across the United States. Our backgrounds span
              supervisory agencies, top commercial banks, hyperscale cloud providers, and leading AI research labs.
            </p>
          </div>
          <div className="grid gap-5">
            {teams.map((team) => (
              <div key={team.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-white">{team.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{team.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="implementation">
        <motion.div {...fadeIn} className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">Implementation</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Four-week onboarding run by former bank operators.
              </h2>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Review pricing tiers
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {implementationPhases.map((phase) => (
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeIn}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent p-10 text-center backdrop-blur"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">Join the mission</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Help us build the intelligence layer safeguarding the financial system.
          </h2>
          <p className="mt-4 text-base text-gray-200">
            We are hiring across engineering, risk, data science, and customer success. Reach out if you are passionate
            about strengthening the global banking ecosystem.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Talk to leadership
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-blue-400 hover:text-blue-200"
            >
              Explore resources
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
