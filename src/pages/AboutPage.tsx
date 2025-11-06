import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CalendarCheck, Globe, HeartPulse, ShieldCheck, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: HeartPulse,
    title: 'Patient-first approach',
    description:
      'Every decision we make centers on creating exceptional patient experiences and outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Innovation with integrity',
    description:
      'We deliver intelligent automation that is transparent, explainable, and responsible.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & compliance',
    description:
      'HIPAA compliance, privacy, and trust are built into the fabric of our platform and culture.',
  },
  {
    icon: Users,
    title: 'Provider empowerment',
    description:
      'We partner with clinicians and staff to design workflows that reduce burnout and boost satisfaction.',
  },
  {
    icon: Globe,
    title: 'Inclusive care',
    description:
      'We serve diverse communities by building accessible, inclusive technology for every patient journey.',
  },
];

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  linkedin: string;
};

const leadership: TeamMember[] = [
  {
    name: 'Avery Lawson',
    role: 'Co-founder & CEO',
    initials: 'AL',
    bio: 'Healthcare technologist and former hospital COO focused on creating compassionate digital experiences.',
    linkedin: 'https://www.linkedin.com/in/averylawson',
  },
  {
    name: 'Dr. Maya Chen',
    role: 'Chief Medical Officer',
    initials: 'MC',
    bio: 'Board-certified internist with 15+ years leading value-based care initiatives and clinical informatics.',
    linkedin: 'https://www.linkedin.com/in/mayachen',
  },
  {
    name: 'Julian Patel',
    role: 'Chief Technology Officer',
    initials: 'JP',
    bio: 'Previously led engineering at leading health tech companies, scaling AI platforms and cloud infrastructure.',
    linkedin: 'https://www.linkedin.com/in/julianpatel',
  },
  {
    name: 'Leah Thompson',
    role: 'Chief Security & Compliance Officer',
    initials: 'LT',
    bio: 'Cybersecurity leader with experience across HIPAA, SOC 2, and HITRUST compliance programs.',
    linkedin: 'https://www.linkedin.com/in/leahthompson',
  },
];

const milestones = [
  { year: '2019', event: 'Magnius Healthcare AI founded to modernize practice operations with intelligent automation.' },
  { year: '2020', event: 'Launched first AI scheduling engine; onboarded 50 founding practices.' },
  { year: '2021', event: 'Introduced Magnius Communication Hub and billing automation features.' },
  { year: '2022', event: 'Achieved SOC 2 Type II certification and expanded to multi-location clinics nationwide.' },
  { year: '2023', event: 'Series B funding to accelerate product innovation and healthcare partnerships.' },
  { year: '2024', event: 'Released AI Automation suite and surpassed 500 healthcare customers.' },
];

const pressLogos = [
  'Modern Healthcare',
  'Becker\'s Hospital Review',
  'HealthTech Weekly',
  'HIMSS Insights',
  'Fast Company',
];

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              About Magnius
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Transforming healthcare, one practice at a time.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              We empower healthcare providers with intelligent technology that simplifies operations, elevates patient
              experiences, and supports compassionate care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-slate-900">Our story</h2>
            <p className="text-sm text-slate-600">
              Magnius Healthcare AI was founded by healthcare operators, clinicians, and technologists who believe that
              modern patient care requires modern practice infrastructure. After witnessing the strain that manual
              workflows, disconnected tools, and compliance burdens place on providers, we set out to create a platform
              that combines intelligent automation with a deeply human experience.
            </p>
            <p className="text-sm text-slate-600">
              Today, Magnius Healthcare AI supports hundreds of practices across the United States, helping them streamline
              operations, power digital experiences, and unlock actionable insights - all while staying compliant and
              secure.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Our mission</h3>
            <p className="mt-3 text-sm text-slate-600">
              Empower healthcare providers with intelligent technology that reduces administrative burden, strengthens
              financial performance, and enables exceptional patient care.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Our vision</h3>
            <p className="mt-3 text-sm text-slate-600">
              Make practice management effortless for every provider, so they can focus on delivering the compassionate
              care their patients deserve.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-center text-3xl font-semibold text-slate-900">Our values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="team">
        <motion.div {...fadeInProps} className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <Users size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-600">Leadership</p>
              <h2 className="text-3xl font-semibold text-slate-900">Meet the team behind Magnius Healthcare AI</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-blue-50 text-base font-semibold text-blue-600">
                    {member.initials}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50 p-8 text-center text-sm text-blue-700" id="careers">
            We're hiring across engineering, customer success, product, and clinical operations.{' '}
            <a href="https://careers.magniushealthcare.ai" className="font-semibold text-blue-600">
              View open roles →
            </a>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-100/70 px-4 sm:px-6 lg:px-8" id="milestones">
        <motion.div {...fadeInProps} className="mx-auto max-w-6xl space-y-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <CalendarCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">Milestones</p>
              <h2 className="text-3xl font-semibold text-slate-900">Highlights from our journey</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">{milestone.year}</p>
                <p className="mt-3 text-sm text-slate-600">{milestone.event}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="press">
        <motion.div {...fadeInProps} className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
              <Award size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Press & media</p>
              <h2 className="text-3xl font-semibold text-slate-900">Magnius Healthcare AI in the news</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pressLogos.map((logo) => (
              <div key={logo} className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {logo}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id="partners">
            <h3 className="text-lg font-semibold text-slate-900">Media kit & press inquiries</h3>
            <p className="mt-2 text-sm text-slate-600">
              Access our brand assets, executive bios, and product overviews. For interviews or speaking engagements,
              reach out to press@magniushealthcare.ai.
            </p>
            <Link
              to="/resources/documentation#media-kit"
              className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
            >
              Download media kit →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
