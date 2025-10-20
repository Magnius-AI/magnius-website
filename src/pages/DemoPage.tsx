import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { Check, Phone } from 'lucide-react';

type DemoFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  industry: string;
  platform: string;
  assets: string;
  users: string;
  timeline: string;
  message: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const industryOptions = ['Financial Services', 'Banking', 'Credit Union', 'Family Office', 'Corporate Finance', 'Other'];
const roleOptions = ['Executive', 'Portfolio Manager', 'Analyst', 'Compliance Officer', 'IT / Security', 'Other'];
const timelineOptions = ['Evaluating', 'Ready to buy', 'Just exploring'];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<DemoFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      industry: '',
      platform: 'MAGNIUS Financial',
      assets: '',
      users: '',
      timeline: '',
      message: '',
    },
  });

  const onSubmit = (values: DemoFormValues) => {
    console.info('Demo request', values);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:px-8 lg:px-12">
          <motion.form
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
            onSubmit={handleSubmit(onSubmit)}
            {...fadeIn}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <InputField
                label="First Name"
                placeholder="Jordan"
                register={register('firstName', { required: 'First name is required.' })}
                error={errors.firstName?.message}
              />
              <InputField
                label="Last Name"
                placeholder="Lee"
                register={register('lastName', { required: 'Last name is required.' })}
                error={errors.lastName?.message}
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <InputField
                type="email"
                label="Email"
                placeholder="jordan@institution.com"
                register={register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
                    message: 'Enter a valid email address.',
                  },
                })}
                error={errors.email?.message}
              />
              <InputField
                label="Phone"
                placeholder="+1 202 555 0123"
                register={register('phone', { required: 'Phone number is required.' })}
                error={errors.phone?.message}
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <InputField
                label="Company / Institution"
                placeholder="Summit Ridge Bank"
                register={register('company', { required: 'Company is required.' })}
                error={errors.company?.message}
              />
              <SelectField
                label="Role / Title"
                options={roleOptions}
                register={register('role', { required: 'Select your role.' })}
                error={errors.role?.message}
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <SelectField
                label="Industry"
                options={industryOptions}
                register={register('industry', { required: 'Select an industry.' })}
                error={errors.industry?.message}
              />
              <SelectField
                label="Platform Interest"
                options={['MAGNIUS Financial', 'MAGNIUS Banking', 'Both']}
                register={register('platform', { required: 'Select a platform.' })}
                error={errors.platform?.message}
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <InputField
                label="Assets Under Management / Assets"
                placeholder="$2.3B"
                register={register('assets', { required: 'Provide an estimate.' })}
                error={errors.assets?.message}
              />
              <InputField
                label="Number of Potential Users"
                placeholder="25"
                register={register('users', { required: 'Provide an estimate.' })}
                error={errors.users?.message}
              />
            </div>

            <div className="mt-6">
              <SelectField
                label="Timeline"
                options={timelineOptions}
                register={register('timeline', { required: 'Select a timeline.' })}
                error={errors.timeline?.message}
              />
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="Share priorities, required modules, or regulatory considerations."
                className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400"
                {...register('message')}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Request Demo'}
            </button>
            <p className="mt-4 text-xs text-gray-400">Thanks! We will contact you within 24 hours.</p>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-green-500/40 bg-green-600/10 px-4 py-3 text-sm text-green-200">
                <Check className="mr-2 inline h-4 w-4" />
                We received your request. A MAGNIUS strategist will follow up shortly.
              </div>
            ) : null}
          </motion.form>

          <motion.div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8" {...fadeIn}>
            <h3 className="text-lg font-semibold text-white">Prefer to talk now?</h3>
            <p className="mt-2 text-sm text-gray-300">
              Call our team Monday-Friday, 9am-6pm ET. We can walk through requirements, pricing, and deployment
              timelines.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-blue-200">
              <Phone className="h-4 w-4" />
              <span>+1 (202) 555-0199</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-20">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-purple-600/15 opacity-[0.35]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Request a Demo</p>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">Experience MAGNIUS in Your Environment</h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            See how local-first AI transforms your research, compliance, or banking workflows. Sessions are tailored to
            your priorities and regulatory requirements.
          </p>
        </motion.div>
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

type SelectFieldProps = {
  label: string;
  options: string[];
  register: UseFormRegisterReturn;
  error?: string;
};

function SelectField({ label, options, register, error }: SelectFieldProps) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">{label}</label>
      <select
        className="mt-2 w-full rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
        {...register}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-xs text-amber-300">{error}</p> : null}
    </div>
  );
}
