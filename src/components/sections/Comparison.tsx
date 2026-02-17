import { motion } from 'framer-motion';
import { COMPARISON_DATA } from '../../lib/constants';
import { staggerContainer, fadeInUp } from '../../lib/animations';

export function Comparison() {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-frost mb-4">
            Why Coaches Are{' '}
            <span className="text-gradient">Switching to Magnius</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-silver">
            See how we stack up against the alternatives.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate/40"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-graphite p-4 sm:p-6 gap-4">
            <div className="font-display font-semibold text-frost text-sm sm:text-base">Feature</div>
            <div className="text-center font-display font-semibold text-muted text-sm sm:text-base">WebinarJam</div>
            <div className="text-center font-display font-semibold text-muted text-sm sm:text-base">Zoom</div>
            <div className="text-center font-display font-semibold text-cyan text-sm sm:text-base">Magnius</div>
          </div>

          {/* Rows */}
          {COMPARISON_DATA.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 p-4 sm:p-6 gap-4 ${
                idx % 2 === 0 ? 'bg-graphite/40' : 'bg-graphite/20'
              }`}
            >
              <div className="text-silver text-sm sm:text-base font-medium">{row.feature}</div>
              <div className={`text-center text-sm sm:text-base ${row.webinarjam.negative ? 'text-muted' : 'text-silver'}`}>
                {row.webinarjam.value}
              </div>
              <div className={`text-center text-sm sm:text-base ${row.zoom.negative ? 'text-muted' : 'text-silver'}`}>
                {row.zoom.value}
              </div>
              <div className={`text-center text-sm sm:text-base ${row.magnius.positive ? 'text-cyan font-medium' : 'text-frost'}`}>
                {row.magnius.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Comparison;
