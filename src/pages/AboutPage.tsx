import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Lightbulb, Calendar } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { BRAND, SERVICES } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportSettings } from '../lib/animations';

const visionPoints = [
  {
    icon: Brain,
    title: 'Persistent Memory',
    description: 'Our AI agents remember every interaction, building context over time.',
    color: '#00d4ff',
  },
  {
    icon: TrendingUp,
    title: 'Democratized Automation',
    description: 'Enterprise-grade AI agents accessible to companies of all sizes.',
    color: '#00b8a9',
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'We measure success by leads booked, tickets resolved, and content published.',
    color: '#0066ff',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Improvement',
    description: 'Your AI agents learn and improve with every interaction.',
    color: '#7c3aed',
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      {/* Noise overlay */}
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GradientMesh />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/60 backdrop-blur-sm border border-slate/40 mb-8"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-silver">
                About {BRAND.name}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6"
            >
              AI agents that work{' '}
              <span className="text-gradient">while you sleep</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-silver"
            >
              We deploy AI agents that handle your sales outreach, customer support, and content marketing — 
              so you can focus on what matters most: growing your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/50" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-6">
                The problem with hiring
              </h2>
              <div className="space-y-4 text-silver">
                <p>
                  <span className="text-frost font-semibold">$50-100K/year</span> for a single
                  SDR, support rep, or content marketer.
                </p>
                <p>
                  <span className="text-frost font-semibold">Limited hours</span> — humans
                  need sleep, vacations, and sick days.
                </p>
                <p>
                  <span className="text-frost font-semibold">Training overhead</span> — 
                  3-6 months before new hires become productive.
                </p>
                <p>
                  <span className="text-frost font-semibold">Inconsistent output</span> — 
                  quality varies by mood, motivation, and tenure.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard className="p-8" glowColor="cyan">
                <h3 className="font-display text-xl font-semibold text-frost mb-4">
                  The Magnius approach
                </h3>
                <p className="text-silver mb-6">
                  AI agents with persistent memory that work 24/7, learn from every interaction,
                  and deliver consistent, high-quality output at a fraction of the cost.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">10x</div>
                    <div className="text-xs text-muted">Cheaper than hiring</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">24/7</div>
                    <div className="text-xs text-muted">Always working</div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
                What makes us different
              </h2>
              <p className="max-w-2xl mx-auto text-silver">
                We're not just another automation tool. We deploy AI agents that think, learn, and adapt.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPoints.map((point, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <GlowCard
                    className="h-full p-6"
                    glowColor={
                      index % 4 === 0 ? 'cyan' :
                      index % 4 === 1 ? 'teal' :
                      index % 4 === 2 ? 'electric' : 'violet'
                    }
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${point.color}20, transparent)`,
                        border: `1px solid ${point.color}30`,
                      }}
                    >
                      <point.icon className="w-6 h-6" style={{ color: point.color }} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-frost mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-silver">{point.description}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 60%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-frost mb-4">
                Three specialized agents
              </h2>
              <p className="max-w-2xl mx-auto text-silver">
                Each designed to excel at one job. Deploy one or all three.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="px-6 py-3 rounded-xl bg-graphite/60 border border-slate/40 text-silver hover:border-cyan/30 hover:text-frost transition-all duration-300"
                >
                  <span className="font-semibold">{service.name}</span>
                  <span className="text-muted ml-2">${service.price}/mo</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
          >
            <h2 className="font-display text-3xl font-bold text-frost mb-6">
              Ready to deploy your AI team?
            </h2>
            <p className="text-silver mb-8">
              Book a 15-minute call. We'll show you exactly how it works.
            </p>
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
