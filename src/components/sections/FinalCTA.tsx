import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { GradientMesh } from '../effects';

export function FinalCTA() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Ready to make your agency's data{' '}
            <span className="text-gradient">actually speak</span>?
          </h2>
          <p className="text-lg sm:text-xl text-silver mb-10 max-w-2xl mx-auto">
            Book a demo to see the AI Data Narrative Engine in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan to-teal text-void font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Rocket className="w-5 h-5" />
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Includes a guided walkthrough of our data integrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
