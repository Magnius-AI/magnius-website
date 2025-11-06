import { ChangeEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Filter, Newspaper, Search, Sparkles } from 'lucide-react';
import clsx from 'clsx';

type ResourceItem = {
  title: string;
  description: string;
  category: 'Blog' | 'Guide' | 'Case Study' | 'Documentation';
  to: string;
  tag: string;
};

const resources: ResourceItem[] = [
  {
    title: 'Guide: Launching AI-powered scheduling in 30 days',
    description: 'Step-by-step framework to roll out online booking, automated reminders, and waitlist automation.',
    category: 'Guide',
    to: '/resources/documentation#ai-scheduling',
    tag: 'Best Practices',
  },
  {
    title: 'Case Study: Mitchell Primary Care reduces no-shows by 40%',
    description: 'See how a family medicine clinic automated outreach and improved patient satisfaction in weeks.',
    category: 'Case Study',
    to: '/resources/case-studies#mitchell-primary-care',
    tag: 'Success Story',
  },
  {
    title: 'Product Update: New analytics dashboards for payer trends',
    description: 'Benchmark reimbursement velocity, denials, and revenue leakage with our latest analytics release.',
    category: 'Blog',
    to: '/resources/blog#analytics-update',
    tag: 'Product Updates',
  },
  {
    title: 'Documentation: Getting started with Magnius Healthcare AI',
    description: 'Configure providers, permissions, locations, and integrations with guided onboarding checklists.',
    category: 'Documentation',
    to: '/resources/documentation#getting-started',
    tag: 'Documentation',
  },
  {
    title: 'Case Study: Horizon Telehealth scales nationwide with Magnius',
    description: 'Discover how a telehealth pioneer launched cross-state programs with seamless compliance.',
    category: 'Case Study',
    to: '/resources/case-studies#horizon-telehealth',
    tag: 'Telehealth',
  },
  {
    title: 'Blog: Navigating HIPAA compliance for virtual care',
    description: 'Practical checklist for telehealth teams managing multi-state privacy and security requirements.',
    category: 'Blog',
    to: '/resources/blog#hipaa-virtual-care',
    tag: 'Compliance',
  },
];

const blogPosts = [
  {
    title: '5 strategies to improve patient retention in 2025',
    excerpt:
      'Transform follow-up engagement, deliver personalized outreach, and measure satisfaction with actionable data.',
    category: 'Best Practices',
    to: '/resources/blog#patient-retention',
  },
  {
    title: 'How AI automation reduces administrative burnout',
    excerpt:
      'Learn how practices use intelligence to reclaim time for care while maintaining compliance guardrails.',
    category: 'Industry News',
    to: '/resources/blog#ai-automation-burnout',
  },
  {
    title: 'Measuring ROI on practice management investments',
    excerpt:
      'Benchmark revenue lift, staff utilization, and patient experience improvements with our ROI framework.',
    category: 'Updates',
    to: '/resources/blog#roi-practice-management',
  },
];

const documentationSections = [
  {
    title: 'Getting started',
    summary: 'Launch Magnius Healthcare AI with guided setup for providers, roles, locations, and templates.',
    items: ['Onboarding checklist', 'Provider import guide', 'Role-based permissions', 'Scheduling configuration'],
  },
  {
    title: 'User manuals',
    summary: 'Deep dive manuals for each module with video walkthroughs and workflow playbooks.',
    items: [
      'Scheduling & waitlist operations',
      'Patient management best practices',
      'Billing & claims workflows',
      'Referral management playbooks',
    ],
  },
  {
    title: 'API & integrations',
    summary: 'Developer guides, schema references, and webhook tutorials for custom integrations.',
    items: [
      'REST API reference',
      'Webhooks & event subscriptions',
      'EHR integration patterns (FHIR/HL7)',
      'Authentication & security best practices',
    ],
  },
];

const caseStudies = [
  {
    title: 'Mitchell Primary Care',
    background: 'High-volume family medicine practice with 8 providers and 3 locations.',
    results: ['40% drop in no-shows', '15% increase in patient satisfaction', '2 weeks to go-live'],
    to: '/resources/case-studies#mitchell-primary-care',
  },
  {
    title: 'Cardiology Associates of Texas',
    background: 'Specialty group replacing multiple legacy systems with unified automation.',
    results: ['15 hours saved weekly', '$600K annual revenue lift', 'Single source of truth for referrals'],
    to: '/resources/case-studies#cardiology-associates',
  },
  {
    title: 'Horizon Telehealth',
    background: 'Virtual-first practice delivering care across 12 states with remote teams.',
    results: ['99.9% uptime for virtual visits', '35% faster licensing compliance', 'Unified communication hub'],
    to: '/resources/case-studies#horizon-telehealth',
  },
];

const filters = ['All', 'Blog', 'Guide', 'Case Study', 'Documentation'] as const;

const fadeInProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

type FilterType = (typeof filters)[number];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15)_0%,_rgba(255,255,255,0)_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
          <motion.div {...fadeInProps} className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 shadow-sm">
              Resource Hub
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Learn, launch, and scale with Magnius Healthcare AI.
            </h1>
            <p className="text-lg text-slate-600 lg:text-xl">
              Access product guides, best-practice playbooks, customer stories, and documentation designed for healthcare
              innovators.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInProps} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              <Search size={18} className="text-blue-500" />
              <input
                type="search"
                placeholder="Search resources, topics, or keywords"
                value={searchTerm}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Filter size={16} />
              Filter by category:
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={clsx(
                      'rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]',
                      activeFilter === filter
                        ? 'border-blue-300 bg-blue-50 text-blue-600'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-500'
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredResources.map((resource) => (
              <Link
                key={resource.title}
                to={resource.to}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  <Sparkles size={16} />
                  {resource.category} | {resource.tag}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
                <span className="mt-5 text-sm font-semibold text-blue-600">Read more →</span>
              </Link>
            ))}
            {filteredResources.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-sm text-slate-500">
                No resources match “{searchTerm}”. Try a different keyword or filter.
              </div>
            ) : null}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="blog">
        <motion.div {...fadeInProps} className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Newspaper size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">Blog</p>
              <h2 className="text-3xl font-semibold text-slate-900">Healthcare technology insights & updates</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                to={post.to}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{post.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                <span className="mt-6 text-sm font-semibold text-blue-600">Read article →</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="documentation">
        <motion.div {...fadeInProps} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">Documentation</p>
              <h2 className="text-3xl font-semibold text-slate-900">Guided documentation for every module</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {documentationSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{section.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FileText className="mt-1 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            to="/resources/documentation"
            className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-500"
          >
            Browse full documentation →
          </Link>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="case-studies">
        <motion.div {...fadeInProps} className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Case studies</p>
              <h2 className="text-3xl font-semibold text-slate-900">Customer success stories with measurable impact</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.title}
                to={study.to}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{study.background}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-blue-500" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 text-sm font-semibold text-blue-600">Read story →</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" id="newsletter">
        <motion.div
          {...fadeInProps}
          className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-10 text-white shadow-xl"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100">Stay ahead</p>
              <h2 className="text-3xl font-semibold leading-tight">
                Join the Magnius Healthcare AI insights newsletter.
              </h2>
              <p className="max-w-xl text-sm text-blue-100/90">
                Receive monthly product updates, best practice guides, webinar invitations, and exclusive industry
                research curated for healthcare leaders.
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@practice.com"
                  className="w-full rounded-full border border-white/40 bg-white/20 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex h-full items-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-50">
              No spam. Unsubscribe anytime.
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
