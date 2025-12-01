import { ReactNode } from 'react';

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: ReactNode;
  secondaryCta?: ReactNode;
  trustBadges?: string[];
  illustration?: ReactNode;
}

export default function Hero({ eyebrow, title, subtitle, primaryCta, secondaryCta, trustBadges, illustration }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-navy" id="top">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {eyebrow && <div className="text-brand-sky font-semibold text-sm uppercase tracking-widest">{eyebrow}</div>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">{title}</h1>
          <p className="text-lg md:text-xl text-brand-ice/80 leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
          {trustBadges && (
            <div className="flex flex-wrap gap-4 text-sm text-brand-ice/70">
              {trustBadges.map((badge) => (
                <span key={badge} className="px-3 py-2 rounded-full bg-brand-steel/40 border border-brand-blue/20">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full" />
          <div className="relative bg-brand-steel/60 border border-brand-blue/30 rounded-2xl shadow-2xl shadow-brand-blue/10 p-8">
            {illustration ?? (
              <div className="grid grid-cols-2 gap-4 text-sm text-brand-ice/80">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-brand-navy/70 border border-brand-blue/20">
                    <div className="h-3 w-16 bg-brand-ice/30 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-brand-ice/20 rounded" />
                      <div className="h-2 w-3/4 bg-brand-ice/10 rounded" />
                      <div className="h-2 w-1/2 bg-brand-ice/20 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
