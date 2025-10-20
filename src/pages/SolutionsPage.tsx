import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Check,
  Compass,
  FileSearch,
  Landmark,
  LineChart,
  ShieldCheck,
  Users,
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const roleSolutions = [
  {
    title: 'Financial Advisors',
    description:
      'Deliver institutional-grade diligence and client-ready insights without paying for legacy terminals.',
    painPoints: [
      'High data subscription costs',
      'Manual portfolio reviews',
      'Client reporting overhead',
    ],
    solution: [
      'Automated 10-K and earnings extraction',
      'Portfolio health dashboards with alerts',
      'On-demand client presentation generation',
    ],
    roi: 'Advisory teams save 20+ hours per week while elevating fiduciary reporting.',
    icon: LineChart,
    ctaLabel: 'Explore MAGNIUS Financial',
    ctaHref: '/financial',
  },
  {
    title: 'Portfolio Managers',
    description:
      'Consolidate research, modeling, and risk in one local-first platform that adapts to your mandate.',
    painPoints: [
      'Fragmented tools across asset classes',
      'Slow scenario analysis',
      'Limited AI support for proprietary models',
    ],
    solution: [
      'Integrated modeling and scenario engine',
      'Real-time risk metrics with explainability',
      'AI co-pilot tuned to your strategy',
    ],
    roi: 'Reclaim analyst cycles and move from idea to allocation in minutes.',
    icon: BarChart3,
    ctaLabel: 'See portfolio workflows',
    ctaHref: '/financial',
  },
  {
    title: 'Research Analysts',
    description:
      'Streamline idea generation and diligence with AI that respects your proprietary insight pipeline.',
    painPoints: [
      'Information overload across filings and transcripts',
      'Limited collaboration tools',
      'Fear of leaking alpha to cloud AI',
    ],
    solution: [
      'Local AI research assistant with citations',
      'Shared workspaces with version control',
      'Private embeddings for proprietary datasets',
    ],
    roi: 'Analysts cover more ideas with less context switching and zero data leakage.',
    icon: FileSearch,
    ctaLabel: 'Review analyst toolkit',
    ctaHref: '/financial',
  },
  {
    title: 'Compliance Officers',
    description:
      'Meet regulatory obligations with built-in audit trails, explainable decisions, and automated reporting.',
    painPoints: [
      'Manual surveillance reviews',
      'Siloed documentation',
      'Difficulty evidencing AI decisions',
    ],
    solution: [
      'Automated audit logs for every action',
      'Explainable AI narratives and validation packages',
      'One-click regulator-ready reporting exports',
    ],
    roi: 'Reduce compliance review time by up to 60% while strengthening examiner confidence.',
    icon: ShieldCheck,
    ctaLabel: 'Understand governance capabilities',
    ctaHref: '/banking',
  },
  {
    title: 'Loan & Credit Officers',
    description:
      'Deliver faster lending decisions with explainable AI underwriting that aligns with policy and regulators.',
    painPoints: [
      'Paper-heavy applications',
      'Slow manual underwriting',
      'Regulator scrutiny over AI decisions',
    ],
    solution: [
      'Automated document ingestion and verification',
      'Explainable risk scoring tuned to your policies',
      'Pipeline views with bottleneck detection',
    ],
    roi: 'Process 3-5x more applications with consistent decisions and audit-ready documentation.',
    icon: Compass,
    ctaLabel: 'See underwriting module',
    ctaHref: '/banking',
  },
  {
    title: 'Bank Executives',
    description:
      'Gain a unified intelligence layer for fraud, compliance, lending, and customer growth while preserving privacy.',
    painPoints: [
      'Fragmented vendor stack',
      'Rising operating costs',
      'Delayed insights for strategic decisions',
    ],
    solution: [
      'Executive dashboards across risk, growth, and operations',
      'Unified data model with governance safeguards',
      'Modular expansion to support strategic priorities',
    ],
    roi: 'Save millions on vendor spend and accelerate strategic initiatives without new headcount.',
    icon: Landmark,
    ctaLabel: 'Evaluate MAGNIUS Banking',
    ctaHref: '/banking',
  },
];

const industrySolutions = [
  {
    title: 'RIAs & Financial Advisors',
    summary:
      'Deliver deeper coverage for every client with local AI research, automated diligence, and high-touch reporting.',
    benefits: [
      'Portfolio diagnostics with action items',
      'Client-ready presentations in minutes',
      'Secure collaboration across partners',
    ],
    cta: 'See how advisors use MAGNIUS',
    href: '/financial',
  },
  {
    title: 'Hedge Funds & Asset Managers',
    summary:
      'Protect proprietary research while accelerating idea velocity across fundamental, quant, and macro teams.',
    benefits: [
      'Custom AI tuned to your strategy',
      'Integrated modeling with version history',
      'Side-by-side collaboration with role controls',
    ],
    cta: 'Explore hedge fund workflows',
    href: '/financial',
  },
  {
    title: 'Family Offices',
    summary:
      'Steward multi-generational wealth with AI that adapts to unique asset mixes, direct investments, and privacy mandates.',
    benefits: [
      'Local data vault for sensitive holdings',
      'Cross-asset analytics and scenario planning',
      'Role-based access for internal and external partners',
    ],
    cta: 'Tailor MAGNIUS for family offices',
    href: '/financial',
  },
  {
    title: 'Corporate Finance & Treasury',
    summary:
      'Support capital allocation, M&A diligence, and investor relations with always-on intelligence and modeling.',
    benefits: [
      'Deal room with automated document analysis',
      'Scenario modeling for capital planning',
      'Executive-ready reporting packages',
    ],
    cta: 'Review corporate finance use cases',
    href: '/financial',
  },
  {
    title: 'Community Banks',
    summary:
      'Stop fraud losses, automate AML, and modernize underwriting with an on-premise platform regulators trust.',
    benefits: [
      'Real-time fraud and AML coverage',
      'Explainable AI underwriting',
      'Examiner-ready governance and reporting',
    ],
    cta: 'Tour MAGNIUS Banking for community banks',
    href: '/banking',
  },
  {
    title: 'Credit Unions',
    summary:
      'Deliver member-first experiences with predictive intelligence, proactive retention, and compliant AI operations.',
    benefits: [
      'Member churn and next-best-action insights',
      'Automated compliance workflows',
      'CX enhancements without sacrificing trust',
    ],
    cta: 'See credit union solutions',
    href: '/banking',
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <RoleSection />
      <IndustrySection />
      <CallToAction />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-emerald-500/10 opacity-[0.35]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Solutions</p>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            MAGNIUS for Every Financial Workflow
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Whether you manage portfolios, underwrite credit, or lead compliance, MAGNIUS adapts to your workflow while
            keeping data sovereign and regulators confident.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-blue-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">By Role</p>
        </div>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Solutions Tuned to Your Seat</h2>
        <p className="mt-5 max-w-3xl text-lg text-gray-400">
          Empower every team member with local-first AI that mirrors their responsibilities and enhances their impact.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {roleSolutions.map((role) => (
            <motion.article
              key={role.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{role.description}</p>
                </div>
                <role.icon className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Pain Points</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {role.painPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Solution</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    {role.solution.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                {role.roi}
              </div>
              <Link
                to={role.ctaHref}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
              >
                {role.ctaLabel}
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Building2 className="h-6 w-6 text-blue-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">By Industry</p>
        </div>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Industry Playbooks</h2>
        <p className="mt-5 max-w-3xl text-lg text-gray-400">
          MAGNIUS adapts to the mandates, compliance requirements, and growth targets of every financial vertical.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {industrySolutions.map((industry) => (
            <motion.article
              key={industry.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{industry.title}</h3>
                  <p className="mt-3 text-sm text-gray-300">{industry.summary}</p>
                </div>
                <Briefcase className="h-7 w-7 text-blue-400" />
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-300">
                {industry.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={industry.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
              >
                {industry.cta}
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Activate MAGNIUS</p>
        <h2 className="mt-6 text-4xl font-black md:text-5xl">
          Ready to Deploy Local-First AI Across Your Institution?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Pick the module that solves your biggest bottleneck and expand when you are ready. Our team will guide your
          launch end-to-end.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
          >
            Book a Solution Workshop
          </Link>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </section>
  );
}
