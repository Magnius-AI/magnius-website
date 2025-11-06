import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  LucideIcon,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
} from 'lucide-react';
import clsx from 'clsx';

const heroTrustBadges = ['HIPAA Compliant', 'SOC 2 Type II Certified', '99.9% Uptime'];

const heroStats = [
  { metric: '2M+', label: 'Appointments Managed' },
  { metric: '50K+', label: 'Patients Supported' },
  { metric: '98%', label: 'Provider Satisfaction' },
  { metric: '$10M+', label: 'Claims Processed' },
];

const featureCards = [
  {
    title: 'Smart Scheduling',
    description:
      'AI-assisted scheduling with drag-and-drop calendars, online booking, intelligent waitlists, and predictive no-show alerts.',
    icon: CalendarCheck,
  },
  {
    title: 'Patient Management',
    description:
      'Complete HIPAA-compliant patient profiles with MRN tracking, insurance details, documents, and collaborative care notes.',
    icon: Users,
  },
  {
    title: 'Communication Hub',
    description:
      'Secure messaging across email, SMS, and patient portal with templates, automation, and delivery insights.',
    icon: Network,
  },
  {
    title: 'Billing & Claims',
    description:
      'Automated claim submission, eligibility verification, denial management, and revenue intelligence.',
    icon: Wallet,
  },
  {
    title: 'Referral Network',
    description:
      'Streamlined specialist referrals with authorization tracking, priority routing, and closed-loop feedback.',
    icon: Stethoscope,
  },
  {
    title: 'Analytics & Reports',
    description:
      'Real-time dashboards, provider productivity analytics, custom report builder, and export-ready insights.',
    icon: BarChart3,
  },
  {
    title: 'AI Automation',
    description:
      'Intelligent reminders, workflow triggers, predictive outreach, and automated follow-up tasks built on healthcare data.',
    icon: Sparkles,
  },
];

const workflowSteps = [
  {
    title: 'Set Up Your Practice',
    description: 'Configure providers, schedules, care teams, rooms, and preferences in minutes with guided onboarding.',
    icon: ShieldCheck,
  },
  {
    title: 'Manage Your Workflow',
    description:
      'Coordinate appointments, patient care, billing, referrals, and communications from one intuitive workspace.',
    icon: Activity,
  },
  {
    title: 'Grow Your Practice',
    description: 'Use analytics, automation, and satisfaction insights to increase capacity, retention, and revenue.',
    icon: ArrowRight,
  },
];

type PreviewTab = {
  key: string;
  label: string;
  headline: string;
  bullets: string[];
  accent: string;
  icon: LucideIcon;
};

const previewTabs: PreviewTab[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    headline: 'Executive visibility across your entire practice.',
    bullets: [
      'Real-time KPIs for patient flow, financial health, and provider productivity.',
      'Configurable widgets with filters by location, provider, care team, and payer.',
      'AI insights highlight preventable no-shows, revenue leakage, and growth opportunities.',
    ],
    accent: 'from-blue-500 via-blue-400 to-blue-500',
    icon: BarChart3,
  },
  {
    key: 'appointments',
    label: 'Appointments',
    headline: 'AI-powered scheduling and patient engagement.',
    bullets: [
      'Drag-and-drop calendar with day, week, month, and multi-provider views.',
      'Online booking, automated reminders, digital intake forms, and waitlist automation.',
      'Predictive analytics surface gaps, double bookings, and high-risk no-show patterns.',
    ],
    accent: 'from-sky-500 via-sky-400 to-sky-500',
    icon: CalendarCheck,
  },
  {
    key: 'patients',
    label: 'Patients',
    headline: 'Complete patient profiles and care collaboration.',
    bullets: [
      'Centralized demographics, insurance, medical history, documents, and consent forms.',
      'Secure communication preferences and HIPAA-compliant messaging in one timeline.',
      'Care team collaboration with task assignments, shared notes, and follow-up plans.',
    ],
    accent: 'from-purple-500 via-purple-400 to-purple-500',
    icon: Users,
  },
];

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell, MD',
    role: 'Family Medicine',
    practice: 'Mitchell Primary Care',
    quote:
      'Magnius Healthcare AI transformed how we manage our practice. Automated reminders alone reduced no-shows by 40%, and our staff adopted the platform in days.',
    initials: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'Practice Manager',
    practice: 'Cardiology Associates of Texas',
    quote:
      'We replaced three disconnected systems with Magnius. Scheduling, billing, and communication now run in one place - saving us 15 hours every week.',
    initials: 'JR',
  },
  {
    name: 'Dr. Emily Chen, DO',
    role: 'Dermatology Specialist',
    practice: 'Chen Dermatology Group',
    quote:
      'Complex referral management and procedure scheduling are finally simple. The analytics help us make confident, data-driven growth decisions.',
    initials: 'EC',
  },
];

const integrations = [
  'Epic',
  'Cerner',
  'Athenahealth',
  'DrChrono',
  'Availity',
  'Change Healthcare',
  'Stripe',
  'Twilio',
  'Zoom',
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(previewTabs[0].key);
  const activePreview = previewTabs.find((tab) => tab.key === activeTab) ?? previewTabs[0];

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm backdrop-blur">
                Magnius Healthcare AI
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Modern Healthcare Practice Management, Powered by AI.
              </h1>
              <p className="text-lg text-slate-600 lg:text-xl">
                Streamline appointments, billing, patient care, and communications in one intelligent platform built for
                healthcare providers. Automate workflows, deliver compassionate patient experiences, and grow with
                confidence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-500 hover:shadow-lg"
                >
                  Start Free 30-Day Trial
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-8 py-3 text-base font-semibold text-blue-600 transition hover:border-blue-300 hover:text-blue-500"
                >
                  Schedule a Demo
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                {heroTrustBadges.map((badge) => (
                  <span key={badge} className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-blue-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white/70 p-8 shadow-xl backdrop-blur">
              <div className="space-y-6">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <div className="flex items-center gap-3 text-blue-600">
                    <Sparkles size={24} />
                    <span className="text-sm font-semibold uppercase tracking-[0.3em]">Trusted Nationwide</span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">
                    Trusted by 500+ healthcare practices nationwide.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    From single-provider clinics to multi-location health systems, Magnius delivers intelligent
                    operations you can rely on.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {heroStats.map((item) => (
                    <div
                      key={item.metric}
                      className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                    >
                      <p className="text-3xl font-bold text-blue-600">{item.metric}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="features">
        <motion.div {...fadeInProps} className="space-y-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Comprehensive Feature Set
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Everything you need to run a modern healthcare practice.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Seven core modules work together to automate operations, enhance patient engagement, and deliver
              actionable intelligence across your practice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <feature.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
                <Link
                  to="/features"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition group-hover:text-blue-500"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-2 transition group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100/70 py-24" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInProps} className="space-y-12">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">How it works</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Transform your practice in three simple steps.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Launch quickly with guided onboarding, then let AI automation and real-time analytics keep every team in
                sync.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <step.icon size={26} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="platform">
        <motion.div {...fadeInProps} className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Platform Preview
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              See Magnius Healthcare AI in action.
            </h2>
            <p className="text-lg text-slate-600">
              Switch between modules to experience the intuitive workflows providers love and administrators trust.
              Every screen is purpose-built to save time and simplify complex healthcare operations.
            </p>
            <div className="flex flex-wrap gap-3">
              {previewTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={clsx(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition',
                    activeTab === tab.key
                      ? 'border-blue-200 bg-blue-50 text-blue-600'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <Link
              to="/demo"
              className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
            >
              See it in action
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-slate-900">{activePreview.headline}</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {activePreview.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check size={18} className="mt-1 text-blue-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={clsx(
                'relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br p-8 text-white',
                activePreview.accent
              )}
            >
              <div className="flex items-center gap-3 text-white/90">
                <activePreview.icon size={28} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em]">Module Snapshot</p>
                  <p className="text-lg font-semibold">{activePreview.label}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {activePreview.bullets.slice(0, 2).map((bullet) => (
                  <div key={bullet} className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm">
                    {bullet}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-white/30 bg-white/10 p-4 text-sm text-white/80">
                Detailed UI preview coming soon. Request a live demo to explore every workflow.
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-24" id="testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInProps} className="space-y-12">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                Loved by modern healthcare teams
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Providers trust Magnius Healthcare AI to power patient-first care.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-blue-50 text-sm font-semibold text-blue-600">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role} - {testimonial.practice}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-slate-600">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-100/70 py-24" id="integrations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInProps} className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                  Integrations
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  Integrates with your existing tools.
                </h2>
                <p className="mt-3 max-w-lg text-sm text-slate-600">
                  Connect Magnius Healthcare AI with EHR systems, telehealth platforms, payment processors, and payer
                  networks you already use. Keep data flowing securely across your ecosystem.
                </p>
                <Link
                  to="/features#integrations"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  View all integrations
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:w-1/2">
                {integrations.map((integration) => (
                  <div
                    key={integration}
                    className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 shadow-sm"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInProps}
          className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-10 text-white shadow-xl"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
                Final call to action
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to transform your practice?
              </h2>
              <p className="max-w-2xl text-sm text-blue-100/90">
                Start your free 30-day trial or connect with a healthcare technology specialist. No credit card required
                and full onboarding support included.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Start Free 30-Day Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to a Healthcare Expert
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/40 bg-blue-500/40 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-blue-50">
              No credit card required
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
