import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, DollarSign, Rocket } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { BRAND, TARGET_CUSTOMERS } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportSettings } from '../lib/animations';

const visionPoints = [
  {
    icon: Shield,
    title: 'Reliability First',
    description: 'Built on WebRTC with HLS fallback. No more mid-webinar crashes that cost you sales.',
    color: '#00d4ff',
  },
  {
    icon: Sparkles,
    title: 'AI-Native',
    description: 'Content generation isn\'t bolted on — it\'s built into every workflow from slides to follow-ups.',
    color: '#00b8a9',
  },
  {
    icon: Target,
    title: 'Built for Conversion',
    description: 'Every feature exists to help you sell. CTAs, offers, urgency timers, and follow-up automation.',
    color: '#0066ff',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Start free. No $500/mo surprises. Scale your plan as your audience grows.',
    color: '#7c3aed',
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
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
              We built Magnius because{' '}
              <span className="text-gradient">webinars deserve better</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-silver"
            >
              Tired of paying $500/mo for webinar software that crashes mid-presentation.
              We're building the modern, AI-native alternative.
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
                The webinar industry is broken
              </h2>
              <div className="space-y-4 text-silver">
                <p>
                  <span className="text-frost font-semibold">WebinarJam</span> crashes during your most important presentations and feels like software from 2015.
                </p>
                <p>
                  <span className="text-frost font-semibold">Zoom Webinars</span> is great for meetings but wasn't built for sales — no CTAs, no registration pages, no conversion tools.
                </p>
                <p>
                  <span className="text-frost font-semibold">Nobody has AI</span> — you're still manually creating slides, writing scripts, and crafting follow-up emails for every webinar.
                </p>
                <p>
                  <span className="text-frost font-semibold">Pricing is absurd</span> — $500+/mo for basic webinar features that should cost a fraction of that.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard className="p-8" glowColor="cyan">
                <h3 className="font-display text-xl font-semibold text-frost mb-4">
                  The Magnius approach
                </h3>
                <p className="text-silver mb-6">
                  Modern streaming infrastructure, AI-powered content generation, and conversion tools — all in one platform that starts free.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">Free</div>
                    <div className="text-xs text-muted">To get started</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">AI</div>
                    <div className="text-xs text-muted">Content assistant</div>
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
                Not another WebinarJam clone. A fundamentally different approach to webinar hosting.
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

      {/* Who It's For */}
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
                Built for people who sell with webinars
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {TARGET_CUSTOMERS.map((customer) => (
                <div
                  key={customer.title}
                  className="px-6 py-6 rounded-xl bg-graphite/60 border border-slate/40 text-center"
                >
                  <customer.icon className="w-8 h-8 text-cyan mx-auto mb-3" />
                  <span className="font-display font-semibold text-frost block mb-2">{customer.title}</span>
                  <p className="text-silver text-sm">{customer.description}</p>
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
              Ready to host webinars that convert?
            </h2>
            <p className="text-silver mb-8">
              Start free. No credit card required.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-5 h-5" />
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
