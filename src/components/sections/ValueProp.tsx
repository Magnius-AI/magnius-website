import { motion } from 'framer-motion';
import { VALUE_PROPS, COLORS } from '../../lib/constants';
import { staggerContainer, fadeInUp, viewportSettings } from '../../lib/animations';

const colorMap = [COLORS.cyan, COLORS.teal, COLORS.electric];

export function ValueProp() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute inset-0 -skew-y-3 bg-charcoal/50 origin-top-left" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALUE_PROPS.map((prop, index) => {
            const color = colorMap[index % colorMap.length];
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl bg-graphite/30 border border-slate/20 hover:border-slate/40 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${color}15, transparent)`,
                    border: `1px solid ${color}25`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-frost mb-3">
                  {prop.title}
                </h3>
                <p className="text-silver leading-relaxed">
                  {prop.description}
                </p>

                {/* Decorative line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ValueProp;
