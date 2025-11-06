import { ChangeEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  DollarSign,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from 'lucide-react';
import clsx from 'clsx';

type PricingTier = {
  name: string;
  price: string;
  subtitle: string;
  description: string;
  badge?: string;
  features: string[];
  cta: { label: string; to: string };
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$199',
    subtitle: 'Per month',
    description: 'Perfect for solo practitioners or small practices modernizing operations.',
    features: [
      'Up to 2 providers & 500 patients',
      'Unlimited appointments & online booking',
      'Smart scheduling & waitlist automation',
      'Patient management & secure portal',
      'Email support & onboarding concierge',
      'HIPAA-compliant messaging and storage',
    ],
    cta: { label: 'Start Free Trial', to: '/demo' },
  },
  {
    name: 'Professional',
    price: '$399',
    subtitle: 'Per month',
    description: 'Best for growing practices expanding services and care teams.',
    badge: 'Most Popular',
    features: [
      'Up to 5 providers & 2,000 patients',
      'Everything in Starter',
      'Communication hub with SMS & campaigns',
      'Billing & claims automation',
      'Referral management & analytics',
      'Phone & priority support + API access',
    ],
    cta: { label: 'Start Free Trial', to: '/demo' },
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'Tailored pricing',
    description: 'Ideal for large clinics and health systems needing advanced automation.',
    features: [
      'Unlimited providers & patients',
      'Everything in Professional',
      'Advanced analytics & data warehouse sync',
      'Custom integrations & SSO',
      'Dedicated account team & SLA guarantees',
      'White-label options and premium support',
    ],
    cta: { label: 'Contact Sales', to: '/contact' },
  },
];

const comparisonFeatures = [
  { feature: 'Appointment scheduling & online booking', starter: true, professional: true, enterprise: true },
  { feature: 'Patient management & document storage', starter: true, professional: true, enterprise: true },
  { feature: 'HIPAA-compliant messaging (email & portal)', starter: true, professional: true, enterprise: true },
  { feature: 'SMS & voice communications', starter: false, professional: true, enterprise: true },
  { feature: 'Billing & claims automation', starter: false, professional: true, enterprise: true },
  { feature: 'Referral management workflows', starter: false, professional: true, enterprise: true },
  { feature: 'Analytics & reporting suite', starter: false, professional: true, enterprise: true },
  { feature: 'AI automation & predictive insights', starter: false, professional: true, enterprise: true },
  { feature: 'Custom integrations & API access', starter: false, professional: true, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
  { feature: 'White-label & advanced security controls', starter: false, professional: false, enterprise: true },
];

const addOns = [
  { label: 'Additional providers', description: '$50/month per provider beyond plan limit' },
  { label: 'Additional storage', description: '$20/month per additional 50GB' },
  { label: 'Advanced reporting', description: '$99/month for predictive dashboards & exports' },
  { label: 'Custom training', description: 'Starting at $500 for on-site or live virtual sessions' },
];

const faqItems = [
  {
    question: 'Do you offer a free trial?',
    answer:
      'Yes. Every plan includes a 30-day free trial with full access so you can onboard providers, import data, and test automations risk-free.',
  },
  {
    question: 'What billing cycles are available?',
    answer:
      'Choose monthly or annual billing. Annual plans receive a 20% discount and include enhanced onboarding support.',
  },
  {
    question: "What's your refund policy?",
    answer:
      'If Magnius Healthcare AI is not the right fit within the first 30 days of a paid subscription, we offer a full refund - no questions asked.',
  },
  {
    question: 'Which payment methods are accepted?',
    answer:
      'We accept all major credit cards, ACH, and invoiced purchase orders for Enterprise customers. HIPAA-compliant billing and receipts are included.',
  },
];

const trustSignals = [
  'No long-term contracts',
  '30-day money-back guarantee',
  'Free migration assistance',
  '99.9% uptime SLA',
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const ROI_DEFAULTS = {
  providers: 5,
  dailyAppointments: 18,
  hourlyRate: 180,
};

type ROIInputs = {
  providers: number;
  dailyAppointments: number;
  hourlyRate: number;
};

type ROIResult = {
  hoursSaved: number;
  annualValue: number;
  automationScore: number;
};

const calculateRoi = ({ providers, dailyAppointments, hourlyRate }: ROIInputs): ROIResult => {
  const automationEfficiency = 0.28; // 28% time savings benchmark
  const minutesPerAppointment = 8; // admin time saved per appointment
  const annualWorkdays = 240;

  const appointmentsPerYear = providers * dailyAppointments * annualWorkdays;
  const totalMinutesSaved = appointmentsPerYear * minutesPerAppointment * automationEfficiency;
  const hoursSaved = totalMinutesSaved / 60;
  const annualValue = hoursSaved * hourlyRate;
  const automationScore = Math.min(100, Math.round(automationEfficiency * 100 + providers * 2));

  return {
    hoursSaved,
    annualValue,
    automationScore,
  };
};

export default function PricingPage() {
  const [roiInputs, setRoiInputs] = useState<ROIInputs>(ROI_DEFAULTS);

  const roiResult = useMemo(() => calculateRoi(roiInputs), [roiInputs]);

  const handleRoiChange =
    (field: keyof ROIInputs) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(event.target.value, 10) || 0;
      setRoiInputs((prev) => ({ ...prev, [field]: Math.max(0, value) }));
    };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              Pricing
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Transparent pricing that grows with your practice.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              No hidden fees. Cancel anytime. Every plan includes HIPAA compliance, AI automation, and world-class
              support tailored for healthcare providers.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-600">
                30-day free trial
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 font-semibold text-blue-600">
                Annual billing saves 20%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={clsx(
                'relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg',
                tier.badge ? 'border-blue-400 ring-2 ring-blue-100' : ''
              )}
            >
              {tier.badge ? (
                <span className="absolute -top-4 right-6 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                  {tier.badge}
                </span>
              ) : null}
              <h2 className="text-2xl font-semibold text-slate-900">{tier.name}</h2>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{tier.subtitle}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={tier.cta.to}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-center">
                {comparisonFeatures.map((row) => (
                  <tr key={row.feature} className="align-middle">
                    <td className="px-6 py-4 text-left text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="px-6 py-4">{row.starter ? <BadgeCheck className="mx-auto h-5 w-5 text-emerald-500" /> : '-'}</td>
                    <td className="px-6 py-4">
                      {row.professional ? <BadgeCheck className="mx-auto h-5 w-5 text-blue-500" /> : '-'}
                    </td>
                    <td className="px-6 py-4">
                      {row.enterprise ? <BadgeCheck className="mx-auto h-5 w-5 text-purple-500" /> : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Flexible add-ons</h3>
            <p className="mt-3 text-sm text-slate-600">
              Build the perfect plan with optional add-ons that scale with your practice.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              {addOns.map((addOn) => (
                <li key={addOn.label} className="flex items-start gap-3">
                  <Sparkles size={18} className="mt-1 text-blue-500" />
                  <div>
                    <p className="font-semibold text-slate-900">{addOn.label}</p>
                    <p>{addOn.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
            >
              Talk to sales about customization
            </Link>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Accepted payment methods</h3>
            <p className="mt-3 text-sm text-slate-600">
              Secure, compliant billing with automated receipts and invoicing.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                ['Credit cards (Visa, Mastercard, AMEX, Discover)', CreditCard],
                ['ACH & bank transfers', DollarSign],
                ['Invoiced purchase orders (Enterprise)', ShieldCheck],
              ].map(([item, Icon]) => (
                <li key={item} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Frequently asked questions</h3>
            <div className="mt-6 space-y-5">
              {faqItems.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h4 className="text-sm font-semibold text-slate-900">{faq.question}</h4>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">ROI calculator</h3>
              <p className="mt-2 text-sm text-slate-600">Estimate hours saved and revenue impact.</p>
              <div className="mt-4 space-y-4 text-sm">
                <label className="block">
                  <span className="text-slate-600">Number of providers</span>
                  <input
                    type="number"
                    min={0}
                    value={roiInputs.providers}
                    onChange={handleRoiChange('providers')}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-600">Appointments per provider each day</span>
                  <input
                    type="number"
                    min={0}
                    value={roiInputs.dailyAppointments}
                    onChange={handleRoiChange('dailyAppointments')}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
                <label className="block">
                  <span className="text-slate-600">Average revenue per hour ($)</span>
                  <input
                    type="number"
                    min={0}
                    value={roiInputs.hourlyRate}
                    onChange={handleRoiChange('hourlyRate')}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
            </div>
            <div className="mt-6 space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm text-slate-700">
              <div className="flex items-center gap-3 text-blue-600">
                <TimerReset />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Estimated impact
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">
                  {roiResult.hoursSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })} hrs
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-600">Hours saved per year</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">
                  ${roiResult.annualValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Estimated annual value</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">{roiResult.automationScore}/100</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Automation readiness score</p>
              </div>
              <p>
                These estimates are based on customer benchmarks. Talk with our team for a tailored ROI assessment that
                factors in payer mix, specialties, and staffing models.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-10 text-white shadow-xl">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">
                Trust & assurances
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Healthcare providers trust Magnius Healthcare AI.
              </h2>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-100" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Start Free 30-Day Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
