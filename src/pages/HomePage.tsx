import { NoiseTexture } from '../components/effects';
import { Hero, EngineShowcase, ValueProp, FinalCTA } from '../components/sections';

export default function HomePage() {
  return (
    <main className="relative">
      {/* Global noise texture overlay */}
      <NoiseTexture opacity={0.025} />

      {/* Hero Section */}
      <Hero />

      {/* Value Proposition Section */}
      <ValueProp />

      {/* Engine Showcase Section */}
      <section id="engines">
        <EngineShowcase />
      </section>

      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}
