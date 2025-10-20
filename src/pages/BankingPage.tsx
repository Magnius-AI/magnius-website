import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ClipboardList, ShieldCheck, Sparkles } from 'lucide-react';

const problemStatements = [
  {
    title: 'Enterprise Cost, Community Budget',
    bullets: [
      'FICO Falcon costs $500K+ per year',
      'NICE Actimize often exceeds $750K per year',
      'Disproportionate cost for $500M-$5B institutions',
    ],
  },
  {
    title: 'Regulatory Pressure',
    bullets: [
      'AML/BSA compliance workloads soaring',
      'Fraud sophistication increasing every quarter',
      'Manual investigation processes do not scale',
    ],
  },
  {
    title: 'Fintech Competition',
    bullets: [
      'Neobanks deploy AI-driven experiences instantly',
      'Big banks reinvent operations with internal AI teams',
      'Community institutions risk losing market relevance',
    ],
  },
];

const solutionHighlights = [
  '90% cost savings versus enterprise vendors',
  'Deploy in weeks, not multi-year projects',
  'Single platform for fraud, compliance, underwriting, and intelligence',
  'On-premise or private cloud so regulators stay satisfied',
];

const heroHighlights = [
  'Air-gapped optional deployment',
  'Fraud, AML, and underwriting in one platform',
  'Examiner-ready explainability out of the box',
];

const coreModules = [
  {
    name: 'Fraud Detection & Prevention',
    badge: 'Immediate ROI',
    description:
      'Real-time transaction monitoring with AI-powered anomaly detection across cards, ACH, wires, and digital payments.',
    features: [
      'Real-time transaction scoring',
      'Cross-channel pattern recognition',
      'Card and ACH fraud prevention',
      'Risk scoring from 0-100',
      'Configurable rules engine',
    ],
    roi: 'Banks save 0.1-0.5% of transaction volume annually.',
    status: 'Available now',
  },
  {
    name: 'AML/BSA Compliance',
    badge: 'Regulatory Must-Have',
    description:
      'Automate suspicious activity monitoring, SAR drafting, and CTR filing while maintaining examiner-friendly audit trails.',
    features: [
      'Continuous transaction monitoring',
      'Suspicious activity detection',
      'SAR auto-drafting and workflow',
      'CTR filing automation',
      'Customer risk scoring',
      'Sanction and watchlist screening',
    ],
    roi: 'Reduce compliance staff time by 40-60%.',
    status: 'Available now',
  },
  {
    name: 'Credit Underwriting',
    badge: 'Revenue Generator',
    description:
      'AI-assisted underwriting for consumer and small business credit with explainable decisioning and portfolio analytics.',
    features: [
      'Automated application ingestion',
      'Credit risk scoring with explainability',
      'Income and document verification',
      'Decision recommendations',
      'Portfolio-level analytics',
    ],
    roi: 'Reduce loan losses 15-25% and increase throughput 3-5x.',
    status: 'Available now',
  },
  {
    name: 'Customer Intelligence',
    badge: 'Relationship Building',
    description:
      '360-degree view of members and customers with predictive insights to reduce churn and increase cross-sell.',
    features: [
      'Customer profiling and segmentation',
      'Behavior and churn prediction',
      'Next-best-action recommendations',
      'Relationship scoring',
      'Life-event prediction',
    ],
    roi: 'Increase revenue per customer 10-20%.',
    status: 'Available Q2 2025',
  },
  {
    name: 'Document Processing',
    badge: 'Efficiency Gains',
    description:
      'Automate OCR and data extraction for statements, pay stubs, IDs, and loan packets to eliminate manual keying.',
    features: [
      'OCR for financial documents',
      'Bank statement analysis',
      'Income and ID verification',
      'Loan document processing',
      'Tax return extraction',
    ],
    roi: 'Save 1,000+ manual hours per month.',
    status: 'Available Q2 2025',
  },
  {
    name: 'Regulatory Reporting',
    badge: 'Compliance Simplified',
    description:
      'Generate Call Reports, HMDA, and CRA submissions in hours while maintaining complete audit trails.',
    features: [
      'Automated Call Report assembly',
      'HMDA filing preparation',
      'CRA data aggregation',
      'Validation and exception workflows',
      'Historical comparisons and audit logs',
    ],
    roi: 'Reduce reporting time by 60-80%.',
    status: 'Available Q3 2025',
  },
];

const differentiators = [
  {
    title: 'Purpose-Built for Community Institutions',
    description:
      'Workflows designed for $500M-$10B banks and credit unions. Everything you need, nothing bloated.',
  },
  {
    title: 'On-Premise Deployment',
    description:
      'Meet examiner expectations with local-first, air-gapped ready infrastructure that never exports customer data.',
  },
  {
    title: 'Fast Implementation',
    description:
      'Launch in 8 weeks with professional services, training, and integrations handled by MAGNIUS delivery teams.',
  },
  {
    title: 'All-in-One Platform',
    description:
      'Eliminate vendor fragmentation. Fraud, AML, underwriting, intelligence, and reporting operate on a unified stack.',
  },
];

const audienceSegments = [
  {
    title: 'Community Banks',
    description:
      '$500M-$10B in assets seeking enterprise capability without enterprise price tags. Balance sheet focused with limited IT staff.',
  },
  {
    title: 'Credit Unions',
    description:
      'Member-owned institutions that need AI-driven experiences while protecting member trust and privacy.',
  },
  {
    title: 'Regional Banks',
    description:
      '$10B-$50B institutions competing with national and fintech players for deposit, lending, and digital engagement.',
  },
];

const complianceFeatures = [
  'Comprehensive audit logging for every action',
  'Configurable data retention with legal holds',
  'Role-based access control and MFA enforcement',
  'Model validation documentation and governance',
  'Explainable AI narratives for underwriting and fraud decisions',
  'Regulator-ready reporting exports (FDIC, OCC, NCUA, Federal Reserve, state agencies)',
];

const pricingPlans = [
  {
    name: 'Essential',
    price: '$75,000/year',
    target: '$500M-$1B in assets',
    includes: [
      'Fraud Detection & Prevention',
      'AML/BSA Compliance',
      'Up to 50 users',
      'Standard support',
      '8-week implementation',
      'Annual model updates',
    ],
  },
  {
    name: 'Professional',
    price: '$150,000/year',
    target: '$1B-$5B in assets',
    includes: [
      'Everything in Essential',
      'Credit Underwriting',
      'Customer Intelligence',
      'Up to 150 users',
      'Priority support',
      'Custom model training',
      'Quarterly business reviews',
    ],
  },
  {
    name: 'Enterprise',
    price: '$250,000/year',
    target: '$5B-$10B in assets',
    includes: [
      'Everything in Professional',
      'Document Processing',
      'Regulatory Reporting',
      'Unlimited users',
      'White-glove support and dedicated manager',
      'Custom integrations and on-site training',
    ],
  },
];

const implementationTimeline = [
  {
    phase: 'Weeks 1-2',
    title: 'Discovery & Setup',
    bullets: [
      'Kickoff workshop with stakeholders',
      'Infrastructure assessment and sizing',
      'Integration planning for core systems',
      'Access provisioning and governance design',
    ],
  },
  {
    phase: 'Weeks 3-4',
    title: 'Installation & Configuration',
    bullets: [
      'Software installation on bank-controlled infrastructure',
      'Core banking and payments integration',
      'Model calibration to historical data',
      'Initial data import and validation',
    ],
  },
  {
    phase: 'Weeks 5-6',
    title: 'Training & Testing',
    bullets: [
      'Role-based training sessions across teams',
      'Parallel run with existing workflows',
      'Rule tuning and alert optimization',
      'Performance validation with compliance',
    ],
  },
  {
    phase: 'Weeks 7-8',
    title: 'Launch & Support',
    bullets: [
      'Production cutover with monitoring',
      'Optimization of workflows post-launch',
      'Dedicated support stand-up',
      'Knowledge transfer and success planning',
    ],
  },
];

const techSpecs = {
  deployment: [
    'On-premise server clusters',
    'Private cloud within your infrastructure',
    'Hybrid architecture with split workloads',
    'Air-gapped, fully isolated configuration',
  ],
  integrations: [
    'Core banking: Jack Henry, Fiserv, FIS, Finastra',
    'Credit bureaus: Equifax, Experian, TransUnion',
    'OFAC and sanctions screening systems',
    'Document management and loan origination systems',
    'Case management and ticketing tools',
  ],
  performance: [
    'Process 100,000 transactions per hour',
    'Real-time fraud scoring under 100ms latency',
    '99.9% uptime SLA with redundant nodes',
    'Horizontally scalable for higher volumes',
  ],
  security: [
    'Bank-grade encryption and key management',
    'Multi-factor authentication and SSO integration',
    'Quarterly penetration testing and remediation',
    'Disaster recovery with warm standby options',
    'Documented incident response procedures',
  ],
};

const faqItems = [
  {
    question: 'How does MAGNIUS integrate with our core banking system?',
    answer:
      'We provide certified connectors for major cores (Jack Henry, Fiserv, FIS, Finastra) and support custom integrations through our API and professional services team.',
  },
  {
    question: "What is the typical implementation timeline?",
    answer:
      'Most community institutions go live in eight weeks, including integration, configuration, training, and parallel testing.',
  },
  {
    question: 'Do we need specialized hardware?',
    answer:
      'A modern server footprint is recommended. We size compute and storage during discovery and can leverage existing infrastructure.',
  },
  {
    question: 'How are model updates handled?',
    answer:
      'Models receive quarterly updates delivered as signed packages. Updates can be tested in sandbox before production rollout.',
  },
  {
    question: 'Will regulators accept local AI deployments?',
    answer:
      'Yes. We provide examiner-ready documentation, explainability reports, and validation packages aligned with FFIEC guidance.',
  },
  {
    question: 'Can we customize rules and workflows?',
    answer:
      'Absolutely. Fraud and compliance teams can adjust thresholds, review paths, and reporting to mirror your policies.',
  },
  {
    question: 'What support levels are available?',
    answer:
      'Support ranges from standard business-hour coverage to dedicated 24/7 response with on-site assistance for Enterprise plans.',
  },
  {
    question: 'How does pricing compare to FICO, NICE, or SAS?',
    answer:
      'MAGNIUS delivers end-to-end capability for $75K-$250K per year. Equivalent enterprise stacks routinely exceed $3M annually.',
  },
  {
    question: 'How is data privacy enforced?',
    answer:
      'All data stays within your infrastructure. MAGNIUS operates on managed hardware or private cloud you control, with full encryption and access controls.',
  },
  {
    question: 'Can we pilot a single module first?',
    answer:
      'Yes. Many institutions begin with fraud or AML modules, then expand to underwriting and intelligence as they realize the savings.',
  },
];

type DemoFormValues = {
  name: string;
  email: string;
  institution: string;
  assets: string;
  role: string;
};

type DownloadFormValues = {
  name: string;
  email: string;
  institution: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function BankingPage() {
  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CoreModulesSection />
      <DifferentiatorsSection />
      <AudienceSection />
      <ComplianceSection />
      <PricingSection />
      <ImplementationSection />
      <CaseStudiesSection />
      <TechnicalSection />
      <FAQSection />
      <ContactSection />
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
            MAGNIUS Banking Platform
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            AI-Powered Banking Operations for Community Institutions
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Mission-critical fraud detection, AML compliance, and credit underwriting delivered locally. Enterprise
            security without enterprise cost.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Schedule Demo
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white"
            >
              View Pricing
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
              <p className="text-xs uppercase tracking-[0.3em] text-blue-300">MAGNIUS Banking Command Center</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                On-Prem Ready
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Fraud Alerts</p>
                <div className="mt-4 space-y-3 text-sm text-gray-200">
                  <div className="flex items-center justify-between">
                    <span>ACH Anomaly</span>
                    <span className="text-amber-300">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Card Velocity</span>
                    <span className="text-emerald-300">Resolved</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Wire Pattern</span>
                    <span className="text-blue-300">Investigate</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">AML Queue</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  <li className="flex items-center justify-between">
                    <span>SAR Drafts</span>
                    <span className="text-blue-300">12</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>CTR Pending</span>
                    <span className="text-blue-300">7</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>High-Risk Customers</span>
                    <span className="text-amber-300">18</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                <span>Loan Pipeline</span>
                <span>Explainable AI</span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-gray-200">
                <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Small Business Working Capital</span>
                  <span className="text-emerald-300">Approved</span>
                </div>
                <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Mortgage Refinance</span>
                  <span className="text-amber-300">Review</span>
                </div>
                <div className="flex items-start justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <span>Commercial Equipment Line</span>
                  <span className="text-blue-300">In Analysis</span>
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
            The Community Banking Technology Gap
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Why Status Quo Vendor Stacks Fail</h2>
          <p className="mt-6 text-lg text-gray-400">
            Community institutions are asked to pay enterprise prices for software that was never designed for their
            scale or regulatory reality.
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problemStatements.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              {...fadeIn}
            >
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{bullet}</span>
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
        <div className="rounded-3xl border border-blue-500/30 bg-blue-600/10 p-10 shadow-[0_25px_55px_rgba(14,116,255,0.25)]">
          <h3 className="text-3xl font-semibold text-white">Enterprise AI at Community Bank Pricing</h3>
          <p className="mt-4 text-lg text-blue-100">
            MAGNIUS Banking bundles fraud, compliance, underwriting, and intelligence into one local-first platform so
            your teams can focus on members and customers, not vendor invoices.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {solutionHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-blue-100">
                <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreModulesSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Complete Banking Intelligence Platform
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Six Core Modules. One Unified Platform.</h2>
          <p className="mt-6 text-lg text-gray-400">
            Deploy exactly what you need today and activate new capabilities on your schedule. Every module operates on
            the same secure, local-first foundation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {coreModules.map((module) => (
            <motion.article
              key={module.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
              {...fadeIn}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{module.name}</h3>
                <span className="rounded-full bg-blue-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
                  {module.badge}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-300">{module.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                {module.roi}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">Status: {module.status}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Why Community Banks Choose MAGNIUS Banking
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Built for Your Scale. Priced for Your Budget.</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {differentiators.map((item) => (
            <motion.article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm text-gray-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Serving Community Banking</p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Engineered for Banks, Credit Unions, and Regionals</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {audienceSegments.map((segment) => (
            <motion.article
              key={segment.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-white">{segment.title}</h3>
              <p className="mt-4 text-sm text-gray-300">{segment.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Built for Bank Examiners</p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Compliance Features That Keep Regulators Confident
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Every module ships with governance, auditability, and documentation aligned to FDIC, OCC, Federal Reserve,
              NCUA, and state regulator expectations.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <ul className="space-y-3 text-sm text-gray-300">
              {complianceFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
            Enterprise Capability. Community Pricing.
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Predictable Annual Licensing</h2>
          <p className="mt-6 text-lg text-gray-400">
            Budget with confidence. No surprise overages. User counts and module bundles scale with your institution.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.article
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.3)]"
              {...fadeIn}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{plan.name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{plan.price}</h3>
              <p className="mt-2 text-sm text-gray-300">{plan.target}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-200">
                {plan.includes.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500"
              >
                Request Proposal
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-sm text-gray-300">
          <h3 className="text-lg font-semibold text-white">Compare Against Legacy Vendors</h3>
          <p className="mt-3">
            FICO Falcon: $500K+ per year (fraud only) - NICE Actimize: $750K+ per year (AML only) - Full enterprise
            stack: $3M-$10M per year. MAGNIUS: $75K-$250K per year for everything.
          </p>
          <p className="mt-4 text-green-300 font-semibold">Savings: 92-97% with no vendor lock-in.</p>
        </div>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            From Contract to Launch in 8 Weeks
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Structured Implementation. Zero Guesswork.</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {implementationTimeline.map((phase) => (
            <motion.article
              key={phase.phase}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">{phase.phase}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{phase.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                {phase.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <ClipboardList className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-300">
          <strong className="text-white">Post-Launch:</strong> Ongoing support, quarterly model updates, performance
          reviews, and continuous feature enhancements tailored to your institution.
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Proven Results for Community Banks
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Early Adopters Are Transforming Operations</h2>
          <p className="mt-6 text-lg text-gray-400">
            Full case studies are in progress. Join the institutions already deploying MAGNIUS to be featured in our
            launch cohort.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            'Credit union reduced card fraud losses by 85% within six months.',
            'Community bank cut AML compliance costs in half while improving examiner ratings.',
            'Regional bank tripled small business loan throughput with explainable AI underwriting.',
          ].map((item) => (
            <motion.article
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <p className="text-sm text-gray-300">{item}</p>
            </motion.article>
          ))}
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
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Runs Where Examiners Expect You to Operate</h2>
          <p className="mt-6 text-lg text-gray-400">
            MAGNIUS integrates with existing banking infrastructure and delivers the performance regulators demand.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <SpecCard title="Deployment Options" items={techSpecs.deployment} />
          <SpecCard title="Integration Capabilities" items={techSpecs.integrations} />
          <SpecCard title="Performance" items={techSpecs.performance} />
          <SpecCard title="Security" items={techSpecs.security} />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Frequently Asked Questions
          </p>
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Answers for Compliance, Risk, and IT</h2>
          <p className="mt-6 text-lg text-gray-400">
            If you do not see your question, we are ready to walk through requirements alongside your regulators.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqItems.map((item, index) => {
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
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {expanded ? (
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

function ContactSection() {
  const {
    register: demoRegister,
    handleSubmit: handleDemoSubmit,
    reset: resetDemo,
    formState: { errors: demoErrors, isSubmitting: demoSubmitting },
  } = useForm<DemoFormValues>({
    defaultValues: { name: '', email: '', institution: '', assets: '', role: '' },
  });
  const {
    register: downloadRegister,
    handleSubmit: handleDownloadSubmit,
    reset: resetDownload,
    formState: { errors: downloadErrors, isSubmitting: downloadSubmitting },
  } = useForm<DownloadFormValues>({
    defaultValues: { name: '', email: '', institution: '' },
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);

  const onDemoSubmit = (values: DemoFormValues) => {
    console.info('Schedule demo', values);
    setDemoSubmitted(true);
    resetDemo();
  };

  const onDownloadSubmit = (values: DownloadFormValues) => {
    console.info('Download overview', values);
    setDownloadSubmitted(true);
    resetDownload();
  };

  return (
    <section className="bg-neutral-950/90">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-2xl font-semibold text-white">Schedule a Live Demo</h3>
            <p className="mt-3 text-sm text-gray-300">
              30-minute walkthrough tailored to your institution with Q&A from our banking specialists.
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleDemoSubmit(onDemoSubmit)}>
              <InputField
                label="Name"
                placeholder="Morgan Lee"
                register={demoRegister('name', { required: 'Name is required.' })}
                error={demoErrors.name?.message}
              />
              <InputField
                type="email"
                label="Email"
                placeholder="morgan@bank.com"
                register={demoRegister('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
                error={demoErrors.email?.message}
              />
              <InputField
                label="Institution"
                placeholder="River Valley Bank"
                register={demoRegister('institution', { required: 'Institution is required.' })}
                error={demoErrors.institution?.message}
              />
              <InputField
                label="Assets"
                placeholder="$2.1B"
                register={demoRegister('assets', { required: 'Assets under management are required.' })}
                error={demoErrors.assets?.message}
              />
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Role</label>
                <select
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  {...demoRegister('role', { required: 'Select your role.' })}
                >
                  <option value="">Select a role</option>
                  <option value="CEO/President">CEO / President</option>
                  <option value="CRO/Compliance">CRO / Compliance</option>
                  <option value="CIO/Technology">CIO / Technology</option>
                  <option value="Lending Leader">Lending Leader</option>
                  <option value="Other">Other</option>
                </select>
                {demoErrors.role ? (
                  <p className="mt-2 text-xs text-amber-300">{demoErrors.role.message}</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 disabled:opacity-60"
                disabled={demoSubmitting}
              >
                {demoSubmitting ? 'Scheduling...' : 'Schedule Demo'}
              </button>
              {demoSubmitted ? (
                <p className="rounded-2xl border border-green-500/40 bg-green-600/10 px-4 py-3 text-xs text-green-200">
                  Thank you. We will confirm your demo time within one business day.
                </p>
              ) : null}
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-2xl font-semibold text-white">Download Product Overview</h3>
            <p className="mt-3 text-sm text-gray-300">
              Includes pricing, ROI calculator, integration specifications, and security documentation.
            </p>
            <form className="mt-6 space-y-5" onSubmit={handleDownloadSubmit(onDownloadSubmit)}>
              <InputField
                label="Name"
                placeholder="Alex Johnson"
                register={downloadRegister('name', { required: 'Name is required.' })}
                error={downloadErrors.name?.message}
              />
              <InputField
                type="email"
                label="Email"
                placeholder="alex@creditunion.org"
                register={downloadRegister('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
                error={downloadErrors.email?.message}
              />
              <InputField
                label="Institution"
                placeholder="Community First Credit Union"
                register={downloadRegister('institution', { required: 'Institution is required.' })}
                error={downloadErrors.institution?.message}
              />
              <button
                type="submit"
                className="w-full rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white disabled:opacity-60"
                disabled={downloadSubmitting}
              >
                {downloadSubmitting ? 'Sending...' : 'Download Overview'}
              </button>
              {downloadSubmitted ? (
                <p className="rounded-2xl border border-blue-500/40 bg-blue-600/10 px-4 py-3 text-xs text-blue-100">
                  Check your inbox for a secure download link.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
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

function SpecCard({ title, items }: { title: string; items: string[] }) {
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
