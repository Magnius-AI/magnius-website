import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Calendar,
  TrendingUp,
  User,
  FileText,
  Sparkles,
  Zap,
} from 'lucide-react';
import { GradientMesh } from '../components/effects';
import { BRAND } from '../lib/constants';

const steps = [
  {
    number: '01',
    title: 'Intelligent Outreach',
    subtitle: '500 personalized emails/month',
    description:
      'Our AI crafts highly personalized cold emails based on your ICP, industry, and value proposition. Each email is unique — not templates with {first_name} swapped in.',
    icon: Mail,
    gradient: 'from-cyan to-teal',
    features: [
      'AI-written personalized subject lines',
      'Industry-specific pain point targeting',
      'Optimal send timing (business hours, time zones)',
      'A/B testing for continuous improvement',
    ],
  },
  {
    number: '02',
    title: 'Smart Follow-Up Sequences',
    subtitle: '5-touch automated sequences',
    description:
      'Most deals close after 5+ touches. Our AI orchestrates a multi-touch sequence with varied angles — value-first, social proof, direct ask, pattern interrupt, and soft close.',
    icon: MessageSquare,
    gradient: 'from-electric to-violet',
    features: [
      'Multi-angle messaging (value, proof, urgency)',
      'Intelligent spacing (3-5 days between touches)',
      'Auto-pause on reply detection',
      'Breakup email that converts fence-sitters',
    ],
  },
  {
    number: '03',
    title: 'Reply Classification',
    subtitle: 'AI-powered intent detection',
    description:
      'When prospects reply, our AI instantly classifies their intent — positive interest, objection, OOO, or not interested. Positive replies immediately enter the triage flow.',
    icon: Sparkles,
    gradient: 'from-teal to-cyan',
    features: [
      '10+ reply categories detected',
      'Sentiment analysis (positive/neutral/negative)',
      'Automatic sequence pausing',
      'Real-time Slack/email notifications',
    ],
  },
  {
    number: '04',
    title: 'AI Triage & Qualification',
    subtitle: 'Premium: Conversational qualification',
    description:
      'Positive replies don\'t go straight to your calendar. Our AI engages in a natural conversation to qualify — confirming decision-maker status, budget, timeline, and pain points.',
    icon: User,
    gradient: 'from-violet to-electric',
    features: [
      'Decision-maker verification',
      'Pain point discovery questions',
      'Budget/timeline qualification',
      'Disqualification of bad fits',
    ],
    premium: true,
  },
  {
    number: '05',
    title: 'Pre-Call Assets',
    subtitle: 'Premium: Prospect warming',
    description:
      'Before your discovery call, qualified prospects receive a personalized landing page with your video pitch, FAQ, case studies, and competitor comparisons. They arrive educated and ready.',
    icon: FileText,
    gradient: 'from-cyan to-electric',
    features: [
      'Personalized video landing page',
      'FAQ addressing common objections',
      'Case studies matched to their industry',
      'Engagement tracking (video watch %, clicks)',
    ],
    premium: true,
  },
  {
    number: '06',
    title: 'Ready-to-Close Appointments',
    subtitle: 'Show up. Close. Repeat.',
    description:
      'The result? Prospects who book with you already know who you are, what you do, why you\'re different, and why they should work with you. Discovery calls become closing calls.',
    icon: Calendar,
    gradient: 'from-teal to-violet',
    features: [
      '2-3x higher close rates',
      'Shorter sales cycles',
      'No more tire-kickers',
      'One-call closes become normal',
    ],
  },
];

const metrics = [
  { value: '500', label: 'Emails/month', icon: Mail },
  { value: '5', label: 'Touch sequence', icon: MessageSquare },
  { value: '2-3x', label: 'Close rate lift', icon: TrendingUp },
  { value: '48h', label: 'Setup time', icon: Zap },
];

export function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <GradientMesh />
        </div>
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/60 backdrop-blur-sm border border-slate/40 mb-6">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-silver">
                The Magnius Engine
              </span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6 leading-tight">
              How We Turn Cold Outreach Into
              <br />
              <span className="text-gradient">Ready-to-Close Appointments</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-silver mb-12">
              Not another email blaster. A full-funnel AI system that qualifies,
              warms, and delivers prospects who show up ready to buy.
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <metric.icon className="w-5 h-5 text-cyan" />
                    <span className="font-display text-3xl font-bold text-gradient">
                      {metric.value}
                    </span>
                  </div>
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 sm:py-32 bg-night">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-bold text-graphite">
                      {step.number}
                    </span>
                    {step.premium && (
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-violet/20 text-violet rounded-full">
                        Premium
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-frost">
                    {step.title}
                  </h3>
                  <p className="text-lg text-cyan font-medium">{step.subtitle}</p>
                  <p className="text-silver text-lg leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-silver">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-90`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-graphite/80 backdrop-blur-sm" />
                    <div className="relative flex items-center justify-center h-64">
                      <step.icon className="w-24 h-24 text-frost opacity-80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Diagram Section */}
      <section className="py-20 sm:py-32 bg-void">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
              The Complete Pipeline
            </h2>
            <p className="text-silver text-lg max-w-2xl mx-auto">
              From cold prospect to closed deal — automated.
            </p>
          </motion.div>

          {/* Simplified flow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2"
          >
            {[
              { label: 'Cold List', icon: User },
              { label: 'AI Outreach', icon: Mail },
              { label: 'Follow-ups', icon: MessageSquare },
              { label: 'Reply Detected', icon: Sparkles },
              { label: 'AI Triage', icon: CheckCircle2 },
              { label: 'Pre-Call Asset', icon: FileText },
              { label: 'Booked Call', icon: Calendar },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-xl bg-graphite/60 border border-slate/40 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate hidden md:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-night to-void">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-silver text-lg mb-8 max-w-2xl mx-auto">
              Book a call and we'll show you exactly how Magnius can transform
              your outbound into a predictable appointment machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-5 h-5" />
                Book a Demo Call
              </a>
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite/60 backdrop-blur-sm border border-slate/40 text-frost font-semibold rounded-lg hover:bg-graphite/80 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorksPage;
