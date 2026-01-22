import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Lightbulb } from 'lucide-react';
import { NoiseTexture, GradientMesh } from '../components/effects';
import { GlowCard } from '../components/ui';
import { WaitlistForm } from '../components/sections';
import { BRAND, ENGINES } from '../lib/constants';
import { fadeInUp, staggerContainer, viewportSettings } from '../lib/animations';

const visionPoints = [
  {
    icon: Brain,
    title: 'Continuous Intelligence',
    description: 'Replace static consulting reports with always-on AI that evolves with your business.',
    color: '#00d4ff',
  },
  {
    icon: TrendingUp,
    title: 'Democratized Strategy',
    description: 'Enterprise-grade strategic analysis accessible to companies of all sizes.',
    color: '#00b8a9',
  },
  {
    icon: Target,
    title: 'Actionable Insights',
    description: 'Move from recommendations to execution with integrated tracking and accountability.',
    color: '#0066ff',
  },
  {
    icon: Lightbulb,
    title: 'Compounding Knowledge',
    description: 'Every engagement builds on the last. Your AI gets smarter over time.',
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
              Reimagining how businesses{' '}
              <span className="text-gradient">make decisions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-silver"
            >
              Traditional consulting is broken. We're building the future of strategic intelligence
              - continuous, AI-powered, and accessible to every organization.
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
                The problem with traditional consulting
              </h2>
              <div className="space-y-4 text-silver">
                <p>
                  <span className="text-frost font-semibold">$500K-$5M</span> per engagement,
                  limiting access to large enterprises.
                </p>
                <p>
                  <span className="text-frost font-semibold">Static deliverables</span> that
                  become obsolete within months.
                </p>
                <p>
                  <span className="text-frost font-semibold">No execution tracking</span> -
                  consultants leave, implementation fails.
                </p>
                <p>
                  <span className="text-frost font-semibold">12-16 week projects</span> for
                  time-sensitive decisions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard className="p-8" glowColor="cyan">
                <h3 className="font-display text-xl font-semibold text-frost mb-4">
                  The Magnius approach
                </h3>
                <p className="text-silver mb-6">
                  Eight coordinated AI engines that function as your company's always-on
                  "strategic brain" - continuously learning, monitoring, and adapting.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">90%</div>
                    <div className="text-xs text-muted">Cost reduction</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-graphite/50">
                    <div className="text-2xl font-bold text-gradient">24/7</div>
                    <div className="text-xs text-muted">Continuous intel</div>
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
                Our vision
              </h2>
              <p className="max-w-2xl mx-auto text-silver">
                We believe every organization deserves access to world-class strategic intelligence.
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

      {/* Engines Overview */}
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
                Eight coordinated engines
              </h2>
              <p className="max-w-2xl mx-auto text-silver">
                Working together to deliver comprehensive strategic intelligence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {ENGINES.map((engine) => (
                <div
                  key={engine.id}
                  className="px-4 py-2 rounded-xl bg-graphite/60 border border-slate/40 text-sm text-silver hover:border-cyan/30 hover:text-frost transition-all duration-300"
                >
                  {engine.shortName}
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
              Join us on this journey
            </h2>
            <p className="text-silver mb-8">
              Be among the first to experience the future of strategic intelligence.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm size="lg" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
