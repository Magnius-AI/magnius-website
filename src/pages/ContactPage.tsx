import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Headset, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactMethods = [
  {
    title: 'General inquiries',
    email: 'contact@magniushealthcare.ai',
    phone: '1-800-MAGNIUS',
    hours: 'Mon-Fri 8am-6pm EST',
    icon: Mail,
  },
  {
    title: 'Support',
    email: 'support@magniushealthcare.ai',
    phone: '1-800-SUPPORT',
    hours: '24/7 support portal & live chat',
    icon: Headset,
  },
  {
    title: 'Sales',
    email: 'sales@magniushealthcare.ai',
    phone: '1-800-SALES',
    hours: 'Schedule a call with our specialists',
    icon: Phone,
  },
];

const offices = [
  {
    location: 'Headquarters',
    address: ['1200 Market Street', 'Suite 2100', 'San Francisco, CA 94105'],
  },
  {
    location: 'East Coast Operations',
    address: ['575 Lexington Avenue', '10th Floor', 'New York, NY 10022'],
  },
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              Contact
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let's transform your practice together.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              Request a demo, connect with sales, or reach our support team. We're here to help you streamline care,
              elevate patient experiences, and grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="demo">
        <motion.div {...fadeInProps} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Request a personalized demo</h2>
            <p className="mt-3 text-sm text-slate-600">
              Share a few details and we'll schedule a 30-minute session to walk through the platform, tailor workflows,
              and answer your questions.
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
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-600">
                  Practice name
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
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
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-600">
                  Number of providers
                  <select
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-25">11-25</option>
                    <option value="26+">26+</option>
                  </select>
                </label>
                <label className="text-sm text-slate-600">
                  Preferred date/time
                  <input
                    type="datetime-local"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </label>
              </div>
              <div>
                <label className="text-sm text-slate-600">
                  Specific interests or needs
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Tell us about your current workflows, goals, or challenges."
                  />
                </label>
              </div>
              <label className="flex items-center gap-3 text-xs text-slate-500">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200" />
                Subscribe to Magnius Healthcare AI insights and product updates.
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Schedule my demo
              </button>
              {submitted ? (
                <p className="text-sm font-semibold text-emerald-600">Thanks! A Magnius specialist will reach out within one business day.</p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            {contactMethods.map((contact) => (
              <div key={contact.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <contact.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{contact.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  <a href={`mailto:${contact.email}`} className="font-semibold text-blue-600">
                    {contact.email}
                  </a>
                  <br />
                  <a href={`tel:${contact.phone}`} className="font-semibold text-blue-600">
                    {contact.phone}
                  </a>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{contact.hours}</p>
                {contact.title === 'Support' ? (
                  <Link
                    to="/resources/documentation#support-portal"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                  >
                    Open support portal →
                  </Link>
                ) : null}
                {contact.title === 'Sales' ? (
                  <Link
                    to="/demo"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                  >
                    Schedule a call →
                  </Link>
                ) : null}
              </div>
            ))}

            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-sm text-slate-600">
              <h3 className="text-lg font-semibold text-slate-900">Prefer self-service?</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link to="/demo" className="text-blue-600 transition hover:text-blue-500">
                    Explore the interactive demo →
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-blue-600 transition hover:text-blue-500">
                    Compare pricing plans →
                  </Link>
                </li>
                <li>
                  <Link to="/resources/documentation" className="text-blue-600 transition hover:text-blue-500">
                    Visit documentation →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100/70 px-4 py-24 sm:px-6 lg:px-8" id="locations">
        <motion.div {...fadeInProps} className="mx-auto max-w-6xl space-y-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Building size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">Office locations</p>
              <h2 className="text-3xl font-semibold text-slate-900">Connect with Magnius Healthcare AI nationwide</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <div key={office.location} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{office.location}</h3>
                <address className="mt-3 not-italic text-sm text-slate-600">
                  {office.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  <MapPin size={16} /> View map
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="rounded-3xl border border-blue-200 bg-blue-50 p-10 text-sm text-slate-600">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Follow us</h3>
              <p className="mt-3 text-sm text-slate-600">
                Join the Magnius community on social media for product news, events, and customer stories.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  ['LinkedIn', 'https://www.linkedin.com/company/magniushealthcareai'],
                  ['Twitter', 'https://x.com/magniushealthai'],
                  ['Facebook', 'https://www.facebook.com/magniushealthcareai'],
                  ['YouTube', 'https://www.youtube.com/@magniushealthcareai'],
                ].map(([network, href]) => (
                  <a
                    key={network}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:text-blue-500"
                  >
                    {network}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/50 bg-white/60 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Need a quicker response?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Use live chat inside the platform or email us at{' '}
                <a href="mailto:support@magniushealthcare.ai" className="font-semibold text-blue-600">
                  support@magniushealthcare.ai
                </a>{' '}
                for urgent requests.
              </p>
              <Link
                to="/demo"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Launch live chat
                <Send size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
