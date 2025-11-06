import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, Clock, Mail, Phone, Sparkles } from 'lucide-react';

const featureOptions = [
  'Smart Scheduling & Waitlist Automation',
  'Patient Management & Portal',
  'Communication Hub & Campaigns',
  'Billing & Claims Automation',
  'Referral Management',
  'Analytics & Reporting',
  'AI Automation & Predictive Insights',
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
                Schedule a demo
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                See Magnius Healthcare AI in action.
              </h1>
              <p className="text-lg text-slate-600 lg:text-xl">
                Schedule a personalized demo with our healthcare experts. We'll review your workflows, configure a
                tailored environment, and outline a plan to launch in as little as 30 days.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  <Clock className="mb-2 h-5 w-5 text-blue-600" />
                  30-minute guided tour with platform specialist.
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  <Sparkles className="mb-2 h-5 w-5 text-blue-600" />
                  Custom recommendations based on specialty and size.
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-blue-600" />
                  Free 30-day trial setup with full onboarding support.
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-white/90 p-8 shadow-xl backdrop-blur">
              <h2 className="text-xl font-semibold text-slate-900">What to expect</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'Guided platform walkthrough tailored to your specialty.',
                  'Live Q&A with healthcare technology expert.',
                  'Benchmarking insights from 500+ practices nationwide.',
                  'Free trial setup and implementation roadmap.',
                  'No sales pressure - just actionable recommendations.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Demo request form</h2>
            <p className="mt-3 text-sm text-slate-600">
              Tell us about your practice and areas of interest. We'll match you with the right specialist for your demo.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-600">
                  First name
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
                <label className="text-sm text-slate-600">
                  Last name
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-600">
                  Email
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
                <label className="text-sm text-slate-600">
                  Phone
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
              <div>
                <label className="text-sm text-slate-600">
                  Practice name
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-600">
                  Practice type
                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select type</option>
                    <option value="primary-care">Primary care</option>
                    <option value="specialty">Specialty practice</option>
                    <option value="multi-provider">Multi-provider clinic</option>
                    <option value="telehealth">Telehealth</option>
                    <option value="health-system">Health system</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="text-sm text-slate-600">
                  Practice size
                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select size</option>
                    <option value="1-5">1-5 providers</option>
                    <option value="6-10">6-10 providers</option>
                    <option value="11-25">11-25 providers</option>
                    <option value="26-50">26-50 providers</option>
                    <option value="50+">50+ providers</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="text-sm text-slate-600">
                  Preferred demo date
                  <input
                    type="date"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
              <div>
                <p className="text-sm text-slate-600">Which features are you most interested in?</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {featureOptions.map((feature) => (
                    <label key={feature} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-600">
                  Additional questions or comments
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Share goals, timeline, or current systems you are replacing."
                  />
                </label>
              </div>
              <label className="flex items-center gap-3 text-xs text-slate-500">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                I'd like to receive product updates and best practices.
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Request my demo
                <Calendar size={16} />
              </button>
              {submitted ? (
                <p className="text-sm font-semibold text-emerald-600">
                  Thank you! We'll reach out within one business day to confirm your demo time.
                </p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Need something else?</h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                <li>
                  Prefer a self-guided tour?{' '}
                  <Link to="/demo#self-guided" className="font-semibold text-blue-600">
                    Launch the interactive demo →
                  </Link>
                </li>
                <li>
                  Want to try it yourself?{' '}
                  <Link to="/demo#free-trial" className="font-semibold text-blue-600">
                    Start your free trial →
                  </Link>
                </li>
                <li>
                  Have questions first?{' '}
                  <Link to="/contact" className="font-semibold text-blue-600">
                    Talk to a specialist →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-sm text-slate-600">
              <h3 className="text-lg font-semibold text-slate-900">Questions before your demo?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Email{' '}
                <a href="mailto:demo@magniushealthcare.ai" className="font-semibold text-blue-600">
                  demo@magniushealthcare.ai
                </a>{' '}
                or call{' '}
                <a href="tel:1800MAGNIUS" className="font-semibold text-blue-600">
                  1-800-MAGNIUS
                </a>. Our team can help align stakeholders and prepare data for a meaningful session.
              </p>
              <Link
                to="/resources/documentation#demo-prep"
                className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
              >
                Download demo preparation checklist →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
