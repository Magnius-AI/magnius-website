import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  Files,
  LucideIcon,
  Mail,
  Network,
  Settings2,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';
import clsx from 'clsx';

type FeatureSection = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  visual: string;
  bullets: string[];
  cta: { label: string; to: string };
};

const featureSections: FeatureSection[] = [
  {
    id: 'appointment-management',
    name: 'Appointment Management',
    description:
      'AI-powered scheduling with multi-provider calendar views, waitlist automation, and predictive no-show alerts.',
    icon: CalendarClock,
    color: 'from-sky-500 via-blue-500 to-blue-600',
    visual: 'Provider availability, patient preferences, and location requirements managed in real time.',
    bullets: [
      'Drag-and-drop scheduling with day, week, month, and split provider views.',
      'Online booking portal with customizable intake forms and screening questions.',
      'Automated reminders via email, SMS, and patient portal with multilingual support.',
      'Waitlist management with smart fill to backfill cancellations rapidly.',
      'Recurring appointment templates and smart slot recommendations.',
      'No-show tracking, proactive prevention alerts, and recovery workflows.',
      'Color-coded appointment types, rooms, equipment, and visit status.',
      'Integrated telehealth links and virtual room management.',
    ],
    cta: { label: 'Learn more about scheduling', to: '/demo' },
  },
  {
    id: 'patient-management',
    name: 'Patient Management',
    description:
      'Comprehensive patient profiles with medical history, insurance, documentation, and communication preferences.',
    icon: Users,
    color: 'from-emerald-500 via-teal-500 to-emerald-600',
    visual: 'Unified records keep every clinician and staff member aligned for patient-first care.',
    bullets: [
      'Centralized demographics, MRN tracking, payer eligibility, and coverage limits.',
      'Document storage with e-signature support, tagging, and version control.',
      'Care plans, chronic condition tracking, and preventative care reminders.',
      'Patient communication preferences and consent management within HIPAA guardrails.',
      'Dynamic filters by diagnosis, provider, insurance, risk level, or engagement status.',
      'Emergency contacts, preferred pharmacy, and referring provider linkage.',
      'Patient portal integration with secure messaging and visit summaries.',
      'Audit-ready access logs and minimum necessary data permissions.',
    ],
    cta: { label: 'Explore patient management', to: '/demo' },
  },
  {
    id: 'communication-hub',
    name: 'Communication Hub',
    description:
      'Unified inbox covering email, SMS, secure messages, and internal chat with automation and analytics.',
    icon: Mail,
    color: 'from-purple-500 via-indigo-500 to-purple-600',
    visual: 'Deliver personalized outreach, population health campaigns, and one-to-one care coordination at scale.',
    bullets: [
      'Multi-channel messaging with shared inbox and assignment workflows.',
      'Template library for recalls, campaigns, education, and follow-up journeys.',
      'Bulk messaging with population segment filters and A/B testing.',
      'Delivery tracking, read receipts, and escalation workflows.',
      'Automated appointment reminders, pre-visit instructions, and satisfaction surveys.',
      'HIPAA-compliant portal messaging with attachments and secure replies.',
      'Trigger-based workflows connected to diagnoses, billing, or care plans.',
      'Patient engagement insights with response scoring and outreach recommendations.',
    ],
    cta: { label: 'See communication features', to: '/demo' },
  },
  {
    id: 'billing-claims',
    name: 'Billing & Claims Management',
    description:
      'Optimize revenue cycle performance with automated claim submission, denial prevention, and payer analytics.',
    icon: ClipboardCheck,
    color: 'from-amber-500 via-orange-500 to-amber-600',
    visual: 'Gain revenue clarity with claim lifecycle visibility, exceptions, and payer benchmarks.',
    bullets: [
      'Electronic claim submission with clearinghouse integrations and rejections queue.',
      'CPT, HCPCS, and ICD-10 code libraries with favorites, suggestions, and validation.',
      'Insurance verification, coverage checks, and prior authorization automation.',
      'Payments and reconciliation with card-on-file, auto-posting, and batch processing.',
      'Denial management with root-cause analytics, appeals workflows, and follow-up tasks.',
      'Patient billing portal with statements, payment plans, and financial assistance tracking.',
      'Revenue analytics for payer mix, cost to collect, and reimbursement velocity.',
      'Support for multiple legal entities, locations, and payer-specific rules.',
    ],
    cta: { label: 'Discover billing features', to: '/demo' },
  },
  {
    id: 'referrals',
    name: 'Referral Management',
    description:
      'Coordinate incoming and outgoing referrals with prioritization, authorization, and closed-loop communication.',
    icon: Stethoscope,
    color: 'from-rose-500 via-pink-500 to-rose-600',
    visual: 'Track every referral from initiation to specialist feedback and patient follow-up.',
    bullets: [
      'Specialist directory with credentials, insurance participation, and availability data.',
      'Digital referral submission with required documentation and reason codes.',
      'Authorization tracking, status updates, and expiring approvals alerts.',
      'Priority flagging for routine, urgent, and emergent referrals with SLA monitoring.',
      'Feedback loop to capture outcomes, recommendations, and next steps.',
      'Patient status tracking with communication automation and reminders.',
      'Referral analytics for leakage, turnaround time, and provider performance.',
      'Integration with primary EHR and inbound referrals from partner networks.',
    ],
    cta: { label: 'Manage referrals better', to: '/demo' },
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    description:
      'Real-time dashboards, operational analytics, and custom reporting for administrators and care teams.',
    icon: BarChart3,
    color: 'from-blue-600 via-cyan-500 to-blue-600',
    visual: 'Monitor performance, identify trends, and share insights that drive better outcomes.',
    bullets: [
      'Out-of-the-box dashboards for patient flow, revenue, population health, and quality metrics.',
      'Provider productivity analytics with visit volume, RVUs, cancellations, and documentation status.',
      'Revenue tracking by location, payer, service line, and reimbursement variance.',
      'Patient demographics, condition prevalence, and social determinants visibility.',
      'Custom report builder with drag-and-drop fields and scheduling to email or SFTP.',
      'Export to PDF, Excel, or secure API for downstream analytics and EHR data lakes.',
      'Interactive visualizations with filters, drill-downs, and cohort comparison.',
      'AI insights highlight anomalies, rising risk, and growth opportunities.',
    ],
    cta: { label: 'View analytics capabilities', to: '/demo' },
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description:
      'Intelligence woven into every workflow with predictive insights, automated outreach, and smart routing.',
    icon: Sparkles,
    color: 'from-slate-900 via-slate-700 to-slate-900',
    visual: 'Purpose-built healthcare AI accelerates staff productivity while keeping humans in control.',
    bullets: [
      'Automated appointment reminders across channels with best-time-to-send optimization.',
      'Predictive no-show alerts, gap analysis, and targeted outreach recommendations.',
      'Smart scheduling suggestions that align provider, room, and equipment availability.',
      'Automated billing follow-ups, payment plan reminders, and past-due escalations.',
      'Patient communication journeys triggered by diagnoses, care plans, or inactivity.',
      'Workflow triggers for task assignments, documentation reminders, and compliance checks.',
      'Custom rule builder to create and A/B test automation sequences.',
      'Machine learning models monitored for explainability, fairness, and outcomes.',
    ],
    cta: { label: 'See AI in action', to: '/demo' },
  },
];

const comparisonRows = [
  {
    feature: 'AI Scheduling & Waitlists',
    magnius: 'Included across all plans with predictive no-show scoring.',
    competitors: 'Limited automation, manual waitlist management.',
  },
  {
    feature: 'HIPAA-Compliant Communications',
    magnius: 'Secure messaging, SMS, email, and portal with audit trails.',
    competitors: 'Requires multiple vendors; auditing is fragmented.',
  },
  {
    feature: 'End-to-End Billing & Claims',
    magnius: 'Integrated clearinghouse, denial analytics, and payment plans.',
    competitors: 'Basic invoice tools with no denial prevention.',
  },
  {
    feature: 'Referral Management',
    magnius: 'Digital workflow with outcomes tracking and network analytics.',
    competitors: 'Manual tracking, spreadsheets, or separate tools.',
  },
  {
    feature: 'Analytics & Reporting',
    magnius: 'Real-time dashboards, custom reporting, and exports.',
    competitors: 'Static reports, limited filters, delayed insights.',
  },
  {
    feature: 'AI Automation',
    magnius: 'Predictive and rules-based automation across every module.',
    competitors: 'Manual staff follow-up required, no AI insights.',
  },
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function FeaturesPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18)_0%,_rgba(255,255,255,0)_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              Product Overview
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Everything you need to run a modern healthcare practice.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              From appointment scheduling to billing, Magnius Healthcare AI unifies every workflow into one intuitive,
              intelligent, and compliant platform built for providers, administrators, and patients.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-600">
                HIPAA compliant from day one
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-600">
                AI-driven automation included
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-20">
        {featureSections.map((feature, index) => (
          <div
            key={feature.id}
            id={feature.id}
            className={clsx(
              'bg-white px-4 sm:px-6 lg:px-8',
              index % 2 === 1 ? 'bg-slate-100/70 py-24' : 'py-24'
            )}
          >
            <motion.div
              {...fadeInProps}
              className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  <feature.icon size={18} />
                  {feature.name}
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{feature.name}</h2>
                <p className="text-lg text-slate-600">{feature.description}</p>
                <ul className="space-y-3 text-sm text-slate-600">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Activity size={12} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={feature.cta.to}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  {feature.cta.label}
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div
                  className={clsx(
                    'absolute inset-0 opacity-80',
                    'bg-gradient-to-br',
                    feature.color
                  )}
                />
                <div className="relative space-y-4 p-10 text-white">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    Intelligent Control Center
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight">{feature.name}</h3>
                  <p className="text-sm text-white/85">{feature.visual}</p>
                  <div className="rounded-2xl border border-white/30 bg-white/10 p-6 text-sm text-white/85">
                    <p>
                      {feature.name} in Magnius Healthcare AI helps you go live faster with guided configurations,
                      reusable templates, and automation out of the box. Connect calendars, EHRs, billing, telehealth,
                      and communication channels without extra middleware.
                    </p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-white/80">
                      <Settings2 size={18} className="mb-3 text-white" />
                      Configurable workflows tuned to your specialty.
                    </div>
                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm text-white/80">
                      <Network size={18} className="mb-3 text-white" />
                      Integrates with EHR, telehealth, and payer systems.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8" id="integrations">
        <motion.div {...fadeInProps} className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Connected ecosystem
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Integrates with the tools healthcare teams rely on.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
              Plug into EHRs, billing partners, payer portals, telehealth platforms, patient engagement tools, and
              business intelligence systems with open APIs, webhooks, and out-of-the-box adapters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Epic', 'HL7, FHIR, and SFTP data interfaces with schedule sync.'],
              ['Cerner', 'Bidirectional demographics, orders, and clinical documents.'],
              ['Athenahealth', 'Visit data, billing events, and patient communications.'],
              ['DrChrono', 'Realtime appointment and claims integration for ambulatory care.'],
              ['Availity', 'Eligibility verification, claims status, and payer responses.'],
              ['Stripe & Square', 'Card-on-file, payment plans, and reconciliation automation.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:text-blue-500"
          >
            View integrations catalog
            <Files size={16} />
          </Link>
        </motion.div>
      </section>

      <section className="bg-slate-100/70 px-4 py-24 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Why Magnius Healthcare AI
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Healthcare teams choose Magnius for intelligent, compliant automation.
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-600">Capability</th>
                  <th className="px-6 py-4 font-semibold text-blue-600">Magnius Healthcare AI</th>
                  <th className="px-6 py-4 font-semibold text-slate-500">Traditional Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="align-top">
                    <td className="px-6 py-5 font-semibold text-slate-900">{row.feature}</td>
                    <td className="px-6 py-5 text-sm text-slate-700">{row.magnius}</td>
                    <td className="px-6 py-5 text-sm text-slate-500">{row.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-600">
              Still have questions about the platform? Our healthcare technology specialists can walk you through every
              module and create a tailored success plan.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Schedule a personalized demo
              <Sparkles size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
