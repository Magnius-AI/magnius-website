import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CalendarClock, Check, ShieldCheck } from 'lucide-react';

type DemoForm = {
  firstName: string;
  lastName: string;
  workEmail: string;
  institution: string;
  assetSize: string;
  regulator: string;
  coreProvider: string;
  objectives: string;
};

const assetSizes = [
  'Under $500M',
  '$500M - $1B',
  '$1B - $5B',
  '$5B - $10B',
  '$10B - $50B',
  '$50B - $100B',
  '$100B+',
];

const regulators = ['Federal Reserve', 'OCC', 'FDIC', 'NCUA', 'State Regulator', 'Other'];

const cores = ['Jack Henry', 'Fiserv', 'FIS', 'Finastra', 'CSI', 'Q2', 'Thought Machine', 'Other'];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function DemoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<DemoForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      institution: '',
      assetSize: '',
      regulator: '',
      coreProvider: '',
      objectives: '',
    },
  });

  const onSubmit = async (data: DemoForm) => {
    console.log('Demo request submitted', data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset();
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32">
          <motion.div {...fadeIn} className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
              Schedule a demo
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              See how MAGNIUS Banking delivers real-time risk intelligence for every commercial bank.
            </h1>
            <p className="text-lg text-gray-300 lg:text-xl">
              Share details about your institution, and our team will tailor a live session that covers data ingestion,
              AI anomaly detection, early warning workflows, and regulator collaboration specific to your needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Cloud-native, multi-tenant SaaS
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Implementation in 4 weeks
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName ? (
                    <p className="mt-2 text-xs text-red-400">{errors.firstName.message}</p>
                  ) : null}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName ? (
                    <p className="mt-2 text-xs text-red-400">{errors.lastName.message}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Work email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  {...register('workEmail', {
                    required: 'Work email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
                {errors.workEmail ? (
                  <p className="mt-2 text-xs text-red-400">{errors.workEmail.message}</p>
                ) : null}
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Bank or institution
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  {...register('institution', { required: 'Institution name is required' })}
                />
                {errors.institution ? (
                  <p className="mt-2 text-xs text-red-400">{errors.institution.message}</p>
                ) : null}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                    Asset size
                  </label>
                  <select
                    className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                    {...register('assetSize', { required: 'Select asset size' })}
                  >
                    <option value="">Select</option>
                    {assetSizes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.assetSize ? (
                    <p className="mt-2 text-xs text-red-400">{errors.assetSize.message}</p>
                  ) : null}
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                    Primary regulator
                  </label>
                  <select
                    className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                    {...register('regulator', { required: 'Select regulator' })}
                  >
                    <option value="">Select</option>
                    {regulators.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.regulator ? (
                    <p className="mt-2 text-xs text-red-400">{errors.regulator.message}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Core banking provider
                </label>
                <select
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  {...register('coreProvider', { required: 'Select core provider' })}
                >
                  <option value="">Select</option>
                  {cores.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.coreProvider ? (
                  <p className="mt-2 text-xs text-red-400">{errors.coreProvider.message}</p>
                ) : null}
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  What do you want to explore?
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
                  placeholder="Example: Daily liquidity reporting, early warning automation, regulator collaboration..."
                  {...register('objectives', { required: 'Tell us what matters most' })}
                />
                {errors.objectives ? (
                  <p className="mt-2 text-xs text-red-400">{errors.objectives.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
                <ArrowRight size={16} className="ml-2" />
              </button>
              {isSubmitSuccessful ? (
                <p className="text-xs text-blue-300">
                  Thanks for reaching out. A MAGNIUS specialist will contact you within one business day.
                </p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <CalendarClock size={20} className="text-blue-300" />
                <h3 className="text-lg font-semibold text-white">What to expect</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  60-minute live demo tailored to your regulatory cadence, risk profile, and asset size.
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  Deep dive into data ingestion, validation rules, alerting, and regulator collaboration features.
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  Discussion of implementation plan, security documentation, and pricing aligned to your balance sheet.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 text-sm text-blue-100">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-200" />
                <p className="font-semibold text-white">Security first</p>
              </div>
              <p className="mt-3">
                We include SOC 2 Type II reports, penetration test summaries, and shared responsibility matrices with
                every evaluation so your teams can accelerate due diligence.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <Building2 size={18} className="text-blue-300" />
                <h3 className="text-lg font-semibold text-white">Who should join</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  Chief Risk Officers, CFOs, Treasurers, and Heads of Regulatory Reporting.
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  Supervisory examiners evaluating technology modernization plans.
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-blue-400" />
                  Technology and security teams responsible for cloud governance.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
