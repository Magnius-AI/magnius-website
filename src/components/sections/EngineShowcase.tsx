import { motion } from 'framer-motion';
import { ENGINES } from '../../lib/constants';
import { staggerContainer, fadeInUp, viewportSettings } from '../../lib/animations';
import { GlowCard } from '../ui';

export function EngineShowcase() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite/80 border border-slate/40 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
              8 Coordinated Engines
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6"
          >
            Your always-on{' '}
            <span className="text-gradient">strategic brain</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg text-silver"
          >
            Eight specialized AI engines working in coordination to deliver continuous
            intelligence across every dimension of your business.
          </motion.p>
        </motion.div>

        {/* Engine Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ENGINES.map((engine, index) => (
            <motion.div key={engine.id} variants={fadeInUp}>
              <GlowCard
                className="h-full group"
                glowColor={
                  index % 4 === 0 ? 'cyan' :
                  index % 4 === 1 ? 'teal' :
                  index % 4 === 2 ? 'electric' : 'violet'
                }
              >
                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${engine.color}20, ${engine.color}10)`,
                      border: `1px solid ${engine.color}30`,
                    }}
                  >
                    <engine.icon
                      className="w-6 h-6"
                      style={{ color: engine.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold text-frost mb-2">
                    {engine.shortName}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed">
                    {engine.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 text-muted text-sm"
        >
          All engines working together, learning from your organization continuously.
        </motion.p>
      </div>
    </section>
  );
}

export default EngineShowcase;
