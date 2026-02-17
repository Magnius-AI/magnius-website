import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-night/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-frost mb-4">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeInUp}
              className="relative"
            >
              <div className={`relative p-6 rounded-2xl backdrop-blur-sm border h-full flex flex-col ${
                tier.popular
                  ? 'bg-gradient-to-br from-cyan/10 to-violet/10 border-cyan'
                  : 'bg-graphite/40 border-slate/40'
              }`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-cyan to-teal text-void text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-frost">
                    {tier.name}
                  </h3>
                  <p className="text-silver text-sm mt-1">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  {tier.price === 0 ? (
                    <span className="font-display text-4xl font-bold text-frost">Free</span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-bold text-frost">${tier.price}</span>
                      <span className="text-muted text-lg">{tier.period}</span>
                    </>
                  )}
                </div>

                {/* Attendees */}
                <p className="text-cyan text-sm font-medium mb-4">{tier.attendees}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-silver">
                      <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`flex items-center justify-center gap-2 w-full py-3 text-center font-semibold rounded-lg transition-all text-sm ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan to-teal text-void hover:opacity-90'
                      : 'border border-slate/60 text-frost hover:bg-slate/20'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center space-y-3"
        >
          <p className="text-muted text-sm">
            ✓ No credit card required &nbsp;&nbsp; ✓ 14-day free trial &nbsp;&nbsp; ✓ Cancel anytime
          </p>
          <p className="text-cyan text-sm font-medium">
            💰 Annual billing: save 20%
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
