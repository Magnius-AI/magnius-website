import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  Building,
  CheckCircle2,
  LucideIcon,
  Sparkles,
  Stethoscope,
  Users,
  Video,
} from 'lucide-react';
import clsx from 'clsx';

type SolutionCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  challenges: string[];
  benefits: string[];
  caseStudy: { label: string; to: string };
};

const solutionCategories: SolutionCategory[] = [
  {
    id: 'primary-care',
    name: 'Primary Care Practices',
    icon: Stethoscope,
    summary: 'Keep high-volume primary care teams coordinated, compliant, and patient-first.',
    description:
      'Deliver consistent preventative, chronic, and acute care experiences while automating administrative work that slows down your day.',
    challenges: [
      'Managing high patient volumes and panel sizes with limited staff.',
      'Coordinating preventative screenings, care gaps, and chronic disease management.',
      'Ensuring timely follow-ups, medication refills, and care plan adherence.',
      'Balancing in-person and virtual visits while maintaining documentation quality.',
    ],
    benefits: [
      'Smart scheduling fills gaps, reduces no-shows, and keeps continuity with primary providers.',
      'Population health campaigns trigger outreach for preventative visits and chronic care protocols.',
      'Integrated tasks, reminders, and care plans keep every clinician aligned.',
      'Patient portal and automated communications improve satisfaction and retention.',
    ],
    caseStudy: { label: 'See how Mitchell Primary Care scaled access', to: '/resources/case-studies#mitchell-primary-care' },
  },
  {
    id: 'specialty',
    name: 'Specialty Practices',
    icon: Activity,
    summary: 'Run complex procedure-based specialties with precision and predictable revenue.',
    description:
      'Cardiology, orthopedics, dermatology, and other specialty groups get the tools they need for complex scheduling, specialized billing, and coordinated referrals.',
    challenges: [
      'Coordinating procedure rooms, equipment, pre-op, and post-op checklists.',
      'Managing specialized billing codes, prior authorizations, and documentation.',
      'Synchronizing referrals, imaging, labs, and external consults.',
      'Maintaining consistent patient communications before and after procedures.',
    ],
    benefits: [
      'Resource-aware scheduling aligns providers, rooms, equipment, and anesthesia teams.',
      'Claim scrubbing and payer rules reduce denials for specialty-specific codes.',
      'Referral management keeps specialists, PCPs, and patients connected.',
      'Automated perioperative communications deliver better patient preparation and recovery.',
    ],
    caseStudy: { label: 'Read how Chen Dermatology accelerated referrals', to: '/resources/case-studies#chen-dermatology' },
  },
  {
    id: 'multi-provider',
    name: 'Multi-Provider Clinics',
    icon: Building,
    summary: 'Coordinate schedules, staff, and data across multiple providers and locations.',
    description:
      'Streamline operations for multi-provider, multi-location clinics with unified patient records, analytics, and revenue cycle management.',
    challenges: [
      'Orchestrating schedules across multiple disciplines, rooms, and support staff.',
      'Maintaining data consistency across locations, providers, and service lines.',
      'Delivering executive visibility into performance, revenue, and growth opportunities.',
      'Scaling onboarding, training, and change management for new teams.',
    ],
    benefits: [
      'Single source of truth for patient records, communications, and billing across the organization.',
      'Role-based permissions, approval workflows, and audit trails protect PHI in every location.',
      'Executive dashboards highlight volume, revenue, quality, and staffing metrics.',
      'Built-in onboarding checklists, playbooks, and automation accelerate new site launches.',
    ],
    caseStudy: { label: 'Explore how Allied MultiCare unified operations', to: '/resources/case-studies#allied-multicare' },
  },
  {
    id: 'telehealth',
    name: 'Telehealth Practices',
    icon: Video,
    summary: 'Deliver virtual-first care with seamless scheduling, documentation, and compliance.',
    description:
      'Support virtual visits, remote patient monitoring, and cross-state provider coordination with HIPAA-compliant workflows.',
    challenges: [
      'Handling virtual appointment logistics, connection links, and patient readiness.',
      'Monitoring licensing, credentialing, and compliance across state lines.',
      'Managing remote patient monitoring data, escalations, and interventions.',
      'Keeping virtual teams connected with shared notes and asynchronous communication.',
    ],
    benefits: [
      'Telehealth scheduling with automatic video links and bandwidth checks.',
      'Licensing management, credential expirations, and compliance alerts built-in.',
      'RPM data integration with thresholds, alerts, and escalation pathways.',
      'Unified communications and knowledge base keep distributed teams aligned.',
    ],
    caseStudy: { label: 'Discover how Horizon Telehealth scaled nationwide', to: '/resources/case-studies#horizon-telehealth' },
  },
];

const priorities = [
  { value: 'efficiency', label: 'Operational efficiency & automation' },
  { value: 'revenue', label: 'Revenue cycle performance' },
  { value: 'growth', label: 'Patient acquisition & retention' },
  { value: 'care', label: 'Clinical quality & patient outcomes' },
];

type Recommendation = {
  title: string;
  modules: string[];
  summary: string;
  plan: 'Starter' | 'Professional' | 'Enterprise';
};

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function SolutionsPage() {
  const [practiceType, setPracticeType] = useState('primary-care');
  const [providerCount, setProviderCount] = useState('1-5');
  const [priority, setPriority] = useState('efficiency');
  const [submitted, setSubmitted] = useState(false);

  const recommendation: Recommendation = useMemo(() => {
    const baseRecommendation: Recommendation = {
      title: 'Starter Plan with Smart Scheduling & Patient Management',
      modules: [
        'Smart Scheduling',
        'Patient Management',
        'Communication Hub',
      ],
      summary:
        'Streamline day-to-day operations with AI-assisted scheduling, central patient records, and automated communications.',
      plan: 'Starter',
    };

    if (practiceType === 'multi-provider' || providerCount === '11-25') {
      return {
        title: 'Professional Plan with Billing, Referrals, and Analytics',
        modules: [
          'Smart Scheduling',
          'Patient Management',
          'Billing & Claims',
          'Referral Management',
          'Analytics & Reports',
        ],
        summary:
          'Coordinate multi-provider teams, manage complex revenue cycles, and gain real-time visibility across every location.',
        plan: 'Professional',
      };
    }

    if (practiceType === 'telehealth' || providerCount === '25+') {
      return {
        title: 'Enterprise Plan with AI Automation & Advanced Security',
        modules: [
          'Telehealth Scheduling',
          'AI Automation',
          'Communication Hub',
          'Analytics & Reports',
          'Security & Compliance Suite',
        ],
        summary:
          'Scale virtual care programs nationwide with intelligent automation, compliance guardrails, and enterprise-grade analytics.',
        plan: 'Enterprise',
      };
    }

    if (priority === 'revenue') {
      return {
        title: 'Professional Plan with Revenue Cycle Automation',
        modules: [
          'Billing & Claims',
          'Analytics & Reports',
          'AI Automation',
          'Patient Management',
        ],
        summary:
          'Accelerate revenue cycle performance with automated claims, denial prevention, and actionable payer insights.',
        plan: 'Professional',
      };
    }

    if (priority === 'care') {
      return {
        title: 'Starter Plan with Care Coordination Enhancements',
        modules: [
          'Patient Management',
          'Communication Hub',
          'Referral Management',
          'Analytics & Reports',
        ],
        summary:
          'Deliver patient-first care with collaborative care plans, automated outreach, and quality measurement tools.',
        plan: 'Starter',
      };
    }

    if (priority === 'growth') {
      return {
        title: 'Professional Plan with Engagement & Referral Insights',
        modules: [
          'Smart Scheduling',
          'Communication Hub',
          'Referral Management',
          'Analytics & Reports',
        ],
        summary:
          'Grow patient panels and keep referrals in-network with intelligent outreach, marketing automation, and network analytics.',
        plan: 'Professional',
      };
    }

    return baseRecommendation;
  }, [practiceType, providerCount, priority]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12)_0%,_rgba(59,130,246,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 shadow-sm">
              Tailored Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Solutions tailored to your practice type.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              Whether you are a solo practitioner, specialty group, multi-provider clinic, or telehealth leader, Magnius
              Healthcare AI adapts to your workflows, compliance needs, and growth goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="space-y-24">
        {solutionCategories.map((solution, index) => (
          <div
            key={solution.id}
            id={solution.id}
            className={clsx(
              index % 2 === 0 ? 'bg-white' : 'bg-slate-100/70',
              'px-4 py-24 sm:px-6 lg:px-8'
            )}
          >
            <motion.div
              {...fadeInProps}
              className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start"
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  <solution.icon size={18} />
                  {solution.name}
                </div>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{solution.name}</h2>
                <p className="text-base text-slate-600">{solution.summary}</p>
                <p className="text-sm text-slate-500">{solution.description}</p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                      Challenges addressed
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600">
                      {solution.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      Magnius benefits
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={solution.caseStudy.to}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  {solution.caseStudy.label}
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
                <div className="rounded-2xl bg-slate-50 p-8">
                  <h3 className="text-xl font-semibold text-slate-900">Featured workflows</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    Combine modules to create the perfect configuration for your team, from scheduling to billing and
                    patient engagement.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm">
                    {[
                      'AI-optimized scheduling templates tailored to your specialty.',
                      'Automated outreach campaigns that close care gaps and fill cancellations.',
                      'Revenue analytics show reimbursement trends and payer performance.',
                      'Referrals tracked from intake to outcomes for a full patient journey view.',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                        <Sparkles size={18} className="mt-1 text-blue-500" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8" id="solution-finder">
        <motion.div {...fadeInProps} className="mx-auto max-w-4xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
              Interactive solution finder
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Find your perfect configuration.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
              Answer a few questions and we'll recommend the best plan, modules, and onboarding path for your practice.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div>
                <label htmlFor="practice-type" className="text-sm font-semibold text-slate-700">
                  1. What type of practice are you?
                </label>
                <select
                  id="practice-type"
                  value={practiceType}
                  onChange={(event) => setPracticeType(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {solutionCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="provider-count" className="text-sm font-semibold text-slate-700">
                  2. How many providers are on your team?
                </label>
                <select
                  id="provider-count"
                  value={providerCount}
                  onChange={(event) => setProviderCount(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {[
                    { value: '1-5', label: '1 - 5 providers' },
                    { value: '6-10', label: '6 - 10 providers' },
                    { value: '11-25', label: '11 - 25 providers' },
                    { value: '25+', label: '25+ providers' },
                  ].map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="text-sm font-semibold text-slate-700">
                  3. What's your top priority right now?
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {priorities.map((option) => (
                    <label
                      key={option.value}
                      className={clsx(
                        'flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition',
                        priority === option.value
                          ? 'border-blue-300 bg-blue-50 text-blue-600'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200'
                      )}
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={option.value}
                        checked={priority === option.value}
                        onChange={(event) => setPriority(event.target.value)}
                        className="hidden"
                      />
                      <Users size={18} />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Get recommendation
              </button>
            </form>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">
              {submitted ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                      Recommended plan
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                      {recommendation.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">{recommendation.summary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
                      Must-have modules
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {recommendation.modules.map((module) => (
                        <li key={module} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-500" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/60 bg-white/60 p-4 text-sm text-slate-600">
                    <p>
                      We recommend the{' '}
                      <span className="font-semibold text-blue-600">{recommendation.plan}</span> plan based on your
                      inputs. Our team can tailor onboarding around your specialty, payer mix, and compliance needs.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-slate-600">
                    <Link
                      to="/demo"
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                      Schedule discovery call
                    </Link>
                    <Link
                      to="/pricing"
                      className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 transition hover:border-blue-300"
                    >
                      View pricing plans
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center text-sm text-blue-700">
                  <Sparkles size={32} />
                  <p className="mt-4 font-semibold">Answer the questions to see your tailored recommendation.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
