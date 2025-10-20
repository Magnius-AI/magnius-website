import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, AtSign, Building2, Mail, MapPin, ShieldCheck, Users } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const teamHighlights = [
  { label: 'Capital One', detail: 'Risk, data science, and credit innovation leadership.' },
  { label: 'Navy Federal', detail: 'Large-scale member operations and compliance expertise.' },
  { label: 'Microsoft & USPS', detail: 'Secure infrastructure and mission-critical deployments.' },
];

const values = [
  {
    title: 'Mission-Driven',
    description:
      'Make institutional-grade AI accessible to financial professionals without sacrificing privacy or control.',
  },
  {
    title: 'Local-First by Design',
    description:
      'Architect everything to run where your policies demand: on-premise, air-gapped, and under your governance.',
  },
  {
    title: 'Trust as a Feature',
    description:
      'Build transparency, explainability, and compliance tooling into every product surface and workflow.',
  },
];

const openRoles = [
  {
    title: 'Senior Solutions Architect - Banking',
    location: 'Remote (US)',
    summary: 'Design and deploy MAGNIUS Banking architectures for community and regional banks.',
  },
  {
    title: 'AI Engineer - Financial Research',
    location: 'Hybrid (New York, NY)',
    summary: 'Tune local models, build research agents, and extend analytics for MAGNIUS Financial.',
  },
  {
    title: 'Product Designer - Analyst Experience',
    location: 'Remote (US)',
    summary: 'Shape workflows that help analysts move faster without compromising compliance.',
  },
];

const contactChannels = [
  {
    label: 'Sales',
    value: 'sales@magnius.ai',
    icon: Mail,
  },
  {
    label: 'Support',
    value: 'support@magnius.ai',
    icon: AtSign,
  },
  {
    label: 'General Inquiries',
    value: 'hello@magnius.ai',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+1 (202) 555-0199',
    icon: Users,
  },
  {
    label: 'Headquarters',
    value: 'Washington, DC & Remote-first',
    icon: MapPin,
  },
];

export default function CompanyPage() {
  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <CareersSection />
      <ContactSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24">
      <div className="absolute inset-0 bg-hex-grid bg-[length:32px_32px] opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-emerald-500/15 opacity-[0.35]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">About MAGNIUS</p>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Local-First AI for Financial Intelligence
          </h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            We build sovereign intelligence platforms that empower financial professionals and institutions to work
            faster, smarter, and with absolute privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="space-y-6" {...fadeIn}>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Mission</p>
            <h2 className="text-4xl font-black md:text-5xl">Deliver Institutional AI Without Compromise</h2>
            <p className="text-lg text-gray-300">
              Financial professionals deserve the power of advanced AI without surrendering client data or proprietary
              strategies. MAGNIUS was founded to make that reality possible, starting with local-first products that meet
              compliance and security requirements by default.
            </p>
          </motion.div>
          <motion.div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8" {...fadeIn}>
            <p className="text-sm text-gray-300">
              We have operated inside global banks, credit unions, and high-growth fintechs. We have witnessed the risk
              of shipping sensitive data to cloud platforms and the frustration of paying legacy vendors for slow,
              inflexible tools. MAGNIUS combines deep financial domain knowledge with modern AI and infrastructure
              discipline to deliver a better path forward.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Building2 className="h-6 w-6 text-blue-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Team Background</p>
        </div>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Built by Operators Who Have Been in the Trenches</h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-400">
          Our leadership comes from organizations where security, compliance, and speed coexist: Capital One, Navy
          Federal Credit Union, Microsoft, USPS, community banks, and advisory firms. We know how to launch AI safely in
          regulated environments because we have done it before.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamHighlights.map((highlight) => (
            <motion.article
              key={highlight.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-white">{highlight.label}</h3>
              <p className="mt-4 text-sm text-gray-300">{highlight.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-blue-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Our Principles</p>
        </div>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Privacy Is Not a Feature. It Is the Foundation.</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <motion.article
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              {...fadeIn}
            >
              <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-4 text-sm text-gray-300">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-blue-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Careers</p>
        </div>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Join Us in Redefining Financial Intelligence</h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-400">
          We are a remote-first team with hubs in Washington, DC, and New York City. We value builders who care deeply
          about security, craft, and customer outcomes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {openRoles.map((role) => (
            <motion.article
              key={role.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              {...fadeIn}
            >
              <h3 className="text-lg font-semibold text-white">{role.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">{role.location}</p>
              <p className="mt-3 text-sm text-gray-300">{role.summary}</p>
              <Link
                to="/company"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
              >
                View role
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Do not see your role? We are always looking for builders across AI engineering, data security, solutions
          architecture, and go-to-market. Email careers@magnius.ai.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Contact MAGNIUS</h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you need a security review, pricing proposal, or co-selling plan, we are ready to collaborate.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <motion.div
                key={channel.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                {...fadeIn}
              >
                <div className="flex items-center gap-3">
                  <channel.icon className="h-5 w-5 text-blue-400" />
                  <p className="text-sm font-semibold text-white">{channel.label}</p>
                </div>
                <p className="mt-2 text-sm text-gray-300">{channel.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
            <span>© 2025 MAGNIUS. Built with privacy in mind. Your data stays yours.</span>
            <Link to="/demo" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
              Request a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
