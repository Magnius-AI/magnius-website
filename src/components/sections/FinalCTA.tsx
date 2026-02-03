import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { GradientMesh } from '../effects';
import { BRAND } from '../../lib/constants';

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <GradientMesh />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-frost mb-6">
            Ready to deploy your <span className="text-gradient">AI team</span>?
          </h2>
          <p className="text-lg sm:text-xl text-silver mb-10 max-w-2xl mx-auto">
            Book a 15-minute call. We'll show you exactly how our AI agents can work for your business — and have you up and running within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-5 h-5" />
              Book Your Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            No commitment required. See if we're a fit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
