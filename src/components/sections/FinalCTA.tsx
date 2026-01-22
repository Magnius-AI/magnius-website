import { motion } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';
import { fadeInUp, viewportSettings } from '../../lib/animations';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 100% at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 80% 100%, rgba(0, 184, 169, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 50% at 20% 80%, rgba(0, 102, 255, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-frost mb-6">
            Ready to{' '}
            <span className="text-gradient">transform</span>
            {' '}your business?
          </h2>

          <p className="text-lg sm:text-xl text-silver mb-12 max-w-2xl mx-auto">
            Be among the first to experience AI-powered consulting intelligence.
            Join our exclusive waitlist today.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-lg mx-auto">
            <WaitlistForm size="lg" />
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-slate/20">
            <p className="text-sm text-muted mb-6">Trusted by forward-thinking enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              {/* Placeholder logos - using text for now */}
              {['Fortune 500', 'Tech Leaders', 'Growth Companies', 'Innovators'].map((text) => (
                <span
                  key={text}
                  className="text-sm font-semibold text-silver uppercase tracking-wider"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
