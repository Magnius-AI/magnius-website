import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Clock, 
  Brain, 
  Globe, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageCircle,
  Users,
  TrendingUp
} from 'lucide-react';
import { BRAND, COLORS } from '../lib/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Hero Section
function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric/10 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/20 text-electric text-sm font-medium mb-8">
            <MessageSquare className="w-4 h-4" />
            AI Support Agent
          </span>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6 leading-tight">
            Customer Support That{' '}
            <span className="bg-gradient-to-r from-electric to-violet bg-clip-text text-transparent">
              Never Forgets
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-silver mb-10 max-w-2xl mx-auto">
            An AI agent with persistent memory that handles your customer support 24/7 — 
            remembering every conversation, learning your products, and escalating only when needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-electric to-violet text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite border border-slate text-frost font-semibold rounded-xl hover:border-electric/50 transition-colors"
            >
              View Pricing
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: '< 1hr', label: 'Response Time' },
              { value: '24/7', label: 'Availability' },
              { value: '90%', label: 'Resolution Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-electric">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Problem Section
function Problem() {
  const problems = [
    {
      icon: Clock,
      title: 'Slow Response Times',
      description: 'Customers wait hours or days for answers, damaging satisfaction and loyalty.',
    },
    {
      icon: Users,
      title: 'Expensive to Scale',
      description: 'Hiring support staff is costly. Training takes months. Turnover is high.',
    },
    {
      icon: Brain,
      title: 'No Memory',
      description: 'Customers hate repeating themselves. Traditional bots forget everything.',
    },
  ];

  return (
    <section className="py-20 bg-night/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
            The Support Problem
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-silver max-w-2xl mx-auto">
            Traditional support doesn't scale. You're stuck choosing between quality and cost.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-graphite/40 border border-slate/40"
            >
              <problem.icon className="w-10 h-10 text-red-400 mb-4" />
              <h3 className="font-display text-xl font-bold text-frost mb-2">{problem.title}</h3>
              <p className="text-silver">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section
function Solution() {
  const features = [
    {
      icon: Brain,
      title: 'Persistent Memory',
      description: 'Remembers every customer interaction. No more "Can you explain that again?"',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Handles incoming support emails with context-aware, personalized responses.',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant responses on your website chat. Seamless handoff to humans when needed.',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Supports customers in their native language. 50+ languages available.',
    },
    {
      icon: Shield,
      title: 'Smart Escalation',
      description: 'Knows when to escalate to humans. Never leaves customers frustrated.',
    },
    {
      icon: Zap,
      title: 'Knowledge Base',
      description: 'Learns your products, docs, and FAQs. Answers get better over time.',
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
            Meet Your AI Support Agent
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-silver max-w-2xl mx-auto">
            An intelligent agent that actually understands context, remembers history, and learns your business.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-graphite/40 border border-slate/40 hover:border-electric/50 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-electric to-violet mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-frost mb-2">{feature.title}</h3>
              <p className="text-silver text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Channels',
      description: 'Link your email, chat widget, and support inbox. Takes 5 minutes.',
    },
    {
      number: '02',
      title: 'Train on Your Knowledge',
      description: 'Upload docs, FAQs, and past tickets. The AI learns your products and voice.',
    },
    {
      number: '03',
      title: 'Set Escalation Rules',
      description: 'Define when humans should step in. Billing issues? VIP customers? You decide.',
    },
    {
      number: '04',
      title: 'Go Live',
      description: 'Your AI agent starts handling support. Monitor, adjust, and watch satisfaction soar.',
    },
  ];

  return (
    <section className="py-20 bg-night/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
            Up and Running in 48 Hours
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div key={step.number} variants={fadeInUp} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-electric/50 to-transparent" />
              )}
              <div className="text-5xl font-display font-bold text-electric/20 mb-4">{step.number}</div>
              <h3 className="font-display text-lg font-bold text-frost mb-2">{step.title}</h3>
              <p className="text-silver text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const features = [
    'Email & chat support coverage',
    'Persistent customer memory',
    'Smart escalation to humans',
    '< 1 hour response time (business hours)',
    'Multi-language support (50+ languages)',
    'Knowledge base integration',
    'Weekly performance reports',
    'Slack/Discord notifications',
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="relative p-8 rounded-2xl bg-graphite/40 border border-electric/50"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold text-frost mb-2">AI Support Agent</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl font-bold text-frost">$500</span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-silver mt-2">Everything you need for 24/7 support</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-silver">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-electric to-violet text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>

            {/* Note */}
            <p className="text-center text-muted text-sm mt-4">
              No long-term commitment. Cancel anytime.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Comparison Section
function Comparison() {
  const rows = [
    { feature: 'Monthly Cost', human: '$4,000+', ai: '$500' },
    { feature: 'Availability', human: 'Business hours', ai: '24/7/365' },
    { feature: 'Response Time', human: '4-24 hours', ai: '< 1 hour' },
    { feature: 'Memory', human: 'Inconsistent', ai: 'Perfect recall' },
    { feature: 'Languages', human: '1-2', ai: '50+' },
    { feature: 'Scaling', human: 'Hire more', ai: 'Instant' },
  ];

  return (
    <section className="py-20 bg-night/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
            AI Agent vs. Human Hire
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-slate/40"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-graphite">
                <th className="px-6 py-4 text-left text-frost font-display">Feature</th>
                <th className="px-6 py-4 text-center text-muted">Human</th>
                <th className="px-6 py-4 text-center text-electric">AI Agent</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? 'bg-graphite/40' : ''}>
                  <td className="px-6 py-4 text-silver">{row.feature}</td>
                  <td className="px-6 py-4 text-center text-muted">{row.human}</td>
                  <td className="px-6 py-4 text-center text-frost font-medium">{row.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-r from-electric/20 to-violet/20 border border-electric/30 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
            Ready to Transform Your Support?
          </h2>
          <p className="text-silver mb-8 max-w-xl mx-auto">
            Book a 15-minute call. We'll show you exactly how the AI Support Agent works and get you set up in 48 hours.
          </p>
          <a
            href={BRAND.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-electric to-violet text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Book Your Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function SupportAgentPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <FinalCTA />
    </main>
  );
}
