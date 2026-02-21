import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, DollarSign, Rocket } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { BRAND, TARGET_CUSTOMERS } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportSettings } from '../lib/animations';

const visionPoints = [
  {
    icon: Shield,
    title: 'Data Integrity',
    description: 'Robust integrations with Meta, Hyros, and GHL. No more dropped metrics or mismatched attribution.',
    color: '#00d4ff',
  },
  {
    icon: Sparkles,
    title: 'AI-Native Insights',
    description: 'Narratives aren\'t bolted on — our engine reads the metric graph to generate actionable CEO briefings.',
    color: '#00b8a9',
  },
  {
    icon: Target,
    title: 'Built for Agencies',
    description: 'Stop guessing what\'s breaking. Automated anomaly detection tells your team exactly where the funnel is leaking.',
    color: '#0066ff',
  },
  {
    icon: DollarSign,
    title: 'ROI Focused',
    description: 'We quantify the exact dollar impact of every drop-off in your funnel, so you know exactly what to fix.',
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
              <span className="text-gradient">agency data deserves better</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-silver"
            >
              Tired of duct-taping tools together to understand your agency's performance.
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
                The analytics industry is broken
              </h2>
              <div className="space-y-4 text-silver">
                <p>
                  <span className="text-frost font-semibold">Standard BI Tools</span> give you complex charts but no actual answers on what to do.
                </p>
                <p>
                  <span className="text-frost font-semibold">Spreadsheets</span> are great for accounting but terrible for real-time decision making — prone to errors and always outdated.
                </p>
                <p>
                  <span className="text-frost font-semibold">Nobody has AI interpretations</span> — you're still manually analyzing data, trying to figure out why your close rate dropped this week.
                </p>
                <p>
                  <span className="text-frost font-semibold">Attribution is a mess</span> — connecting top-of-funnel ad spend to bottom-of-funnel booked calls is a nightmare.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard className="p-8" glowColor="cyan">
                <h3 className="font-display text-xl font-semibold text-frost mb-4">
                  The Magnius approach
                </h3>
                <p className="text-silver mb-6">
                  Deep native integrations, causal graph walking, and AI-powered narratives — all in one platform built for sales teams.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">AI</div>
                    <div className="text-xs text-muted">Daily Briefings</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">Data</div>
                    <div className="text-xs text-muted">Deep Integrations</div>
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
                Not another Looker Studio dashboard. A fundamentally different approach to analytics.
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
                Built for scaling agencies
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
              Ready to make your data speak?
            </h2>
            <p className="text-silver mb-8">
              Book a demo today.
            </p>
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-5 h-5" />
              Book a Demo
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
