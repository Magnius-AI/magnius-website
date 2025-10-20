import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, PlayCircle, Podcast, Sparkles } from 'lucide-react';

type ResourceItem = {
  title: string;
  summary: string;
  href: string;
  comingSoon?: boolean;
  type: 'guide' | 'article' | 'case-study' | 'whitepaper' | 'webinar' | 'faq';
};

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const resourceTabs: Array<{
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ResourceItem[];
}> = [
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Implementation guides, API references, and deployment runbooks for your teams.',
    icon: BookOpen,
    items: [
      {
        title: 'MAGNIUS Financial Deployment Guide',
        summary: 'Step-by-step instructions for installing and configuring MAGNIUS Financial locally.',
        href: '#',
        type: 'guide',
      },
      {
        title: 'MAGNIUS Banking Integration Manual',
        summary: 'Core banking, payments, and user provisioning integration patterns.',
        href: '#',
        type: 'guide',
      },
      {
        title: 'API Reference',
        summary: 'REST and event APIs for integrating MAGNIUS with internal systems.',
        href: '#',
        type: 'guide',
        comingSoon: true,
      },
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    description: 'Perspectives on local-first AI, regulatory readiness, and product updates.',
    icon: FileText,
    items: [
      {
        title: 'Local-First AI: The Next Frontier for Financial Services',
        summary: 'Why keeping intelligence on-premise unlocks new regulatory and strategic advantages.',
        href: '#',
        type: 'article',
      },
      {
        title: 'How Bloomberg Became Vulnerable',
        summary: 'Analyzing cost structures, innovation cadence, and privacy gaps in incumbent terminals.',
        href: '#',
        type: 'article',
      },
      {
        title: 'Community Banking AI Roadmap',
        summary: 'Practical steps for launching AI modules without breaking trust or budget.',
        href: '#',
        type: 'article',
      },
    ],
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description: 'Learn how peers are transforming research, compliance, and lending with MAGNIUS.',
    icon: Sparkles,
    items: [
      {
        title: 'RIA unlocks institutional research for every client',
        summary: 'How a 12-person advisory firm replaced legacy terminals and scaled AUM 40%.',
        href: '#',
        type: 'case-study',
        comingSoon: true,
      },
      {
        title: 'Credit union cuts fraud losses by 85%',
        summary: 'Deploying MAGNIUS Banking for multi-channel fraud and AML coverage in eight weeks.',
        href: '#',
        type: 'case-study',
        comingSoon: true,
      },
      {
        title: 'Regional bank modernizes underwriting',
        summary: 'Explainable AI decisions and compliance automation for small business lending.',
        href: '#',
        type: 'case-study',
        comingSoon: true,
      },
    ],
  },
  {
    id: 'whitepapers',
    label: 'Whitepapers',
    description: 'Deep dives into architecture, security, and economic impact.',
    icon: Podcast,
    items: [
      {
        title: 'The Local-First AI Manifesto',
        summary: 'Technical and operational blueprint for sovereign AI in finance.',
        href: '#',
        type: 'whitepaper',
      },
      {
        title: 'Privacy-First AI for Banking',
        summary: 'Security model and examiner alignment for MAGNIUS Banking deployments.',
        href: '#',
        type: 'whitepaper',
      },
      {
        title: 'Total Cost of Ownership Models',
        summary: 'Financial modeling comparing MAGNIUS to Bloomberg, FICO, and cloud AI.',
        href: '#',
        type: 'whitepaper',
        comingSoon: true,
      },
    ],
  },
  {
    id: 'webinars',
    label: 'Webinars',
    description: 'Live and on-demand sessions with MAGNIUS architects and industry leaders.',
    icon: PlayCircle,
    items: [
      {
        title: 'Tour the MAGNIUS Financial Platform',
        summary: 'Live walkthrough of research, modeling, and collaboration workflows.',
        href: '#',
        type: 'webinar',
      },
      {
        title: 'MAGNIUS Banking Fraud & AML Deep Dive',
        summary: 'How community banks deploy local-first AI to stop fraud.',
        href: '#',
        type: 'webinar',
        comingSoon: true,
      },
      {
        title: 'Architecting Local-First AI',
        summary: 'Infrastructure blueprint for CIOs and CISOs bringing AI on-premise.',
        href: '#',
        type: 'webinar',
        comingSoon: true,
      },
    ],
  },
  {
    id: 'faq',
    label: 'FAQs',
    description: 'Get answers to deployment, security, and pricing questions quickly.',
    icon: Podcast,
    items: [
      {
        title: 'Deployment Questions',
        summary: 'Hardware sizing, OS support, and air-gap best practices.',
        href: '#',
        type: 'faq',
      },
      {
        title: 'Security & Compliance',
        summary: 'Encryption, access controls, and examiner-ready documentation.',
        href: '#',
        type: 'faq',
      },
      {
        title: 'Pricing & Licensing',
        summary: 'Ownership model, annual support options, and ROI frameworks.',
        href: '#',
        type: 'faq',
      },
    ],
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState(resourceTabs[0].id);
  const tab = resourceTabs.find((entry) => entry.id === activeTab) ?? resourceTabs[0];

  return (
    <div className="bg-brand-black text-white">
      <Hero />
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Resource Library</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Everything You Need to Evaluate MAGNIUS</h2>
              <p className="mt-4 text-lg text-gray-400">{tab.description}</p>
            </div>
            <div className="flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/[0.03] p-1">
              {resourceTabs.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveTab(entry.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                    activeTab === entry.id ? 'bg-blue-600 text-white shadow-glow' : 'text-gray-400'
                  }`}
                >
                  <entry.icon className="h-4 w-4" />
                  {entry.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {tab.items.map((item) => (
              <motion.article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                {...fadeIn}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-400">{item.type}</p>
                  {item.comingSoon ? (
                    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                      Coming Soon
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.summary}</p>
                <Link
                  to={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 transition hover:text-blue-300"
                >
                  {item.comingSoon ? 'Join waitlist' : 'Read more'}
                  <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
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
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Resources</p>
          <h1 className="mt-6 text-4xl font-black md:text-6xl">Insights, Playbooks, and Product Knowledge</h1>
          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            Explore documentation, case studies, and live sessions that show how MAGNIUS empowers financial
            professionals and community institutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-neutral-950/80">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Need something specific?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our solution architects will curate a resource pack tailored to your team, regulators, and stakeholders.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-blue-500 hover:shadow-glow"
            >
              Request Curated Resources
            </Link>
            <Link
              to="/company"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:border-blue-400 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
