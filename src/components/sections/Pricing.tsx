import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Pricing() {
  const tier = PRICING_TIERS[0]; // the single Agency Partner tier

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-night/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-frost mb-4">
            Custom <span className="text-gradient">Agency</span> Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            Transform how your agency uses data to drive ROI for your clients.
          </p>
        </motion.div>

        {/* Pricing Card (Single Wide Card) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative max-w-2xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="relative p-8 sm:p-10 rounded-2xl backdrop-blur-sm border border-cyan bg-gradient-to-br from-cyan/10 to-violet/10 flex flex-col md:flex-row gap-8"
          >
            <div className="absolute -top-3 left-1/2 md:left-8 -translate-x-1/2 md:-translate-x-0">
              <span className="px-4 py-1 bg-gradient-to-r from-cyan to-teal text-void text-xs font-semibold rounded-full">
                Enterprise Grade
              </span>
            </div>

            {/* Left Column (Info) */}
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-frost mb-2">
                {tier.name}
              </h3>
              <p className="text-silver mb-6">{tier.description}</p>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-frost">{tier.price}</span>
                <span className="text-muted text-lg">{tier.period}</span>
              </div>

              <p className="text-cyan text-sm font-medium mb-6 uppercase tracking-wider">{tier.attendees}</p>

              <button
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden md:flex items-center justify-center gap-2 w-full py-4 text-center font-semibold rounded-lg transition-all text-base bg-gradient-to-r from-cyan to-teal text-void hover:opacity-90"
              >
                {tier.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column (Features) */}
            <div className="flex-1 md:pl-8 md:border-l border-slate/30">
              <h4 className="text-frost font-medium mb-4">Everything included:</h4>
              <ul className="space-y-4 mb-8 md:mb-0">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-silver">
                    <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="md:hidden flex items-center justify-center gap-2 w-full py-4 text-center font-semibold rounded-lg transition-all text-base bg-gradient-to-r from-cyan to-teal text-void hover:opacity-90"
            >
              {tier.cta}
              <ArrowRight className="w-5 h-5" />
            </button>

          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted text-sm space-x-6">
            <span>✓ Bespoke integrations</span>
            <span>✓ Dedicated support</span>
            <span>✓ Predictable pricing</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
