import { ReactNode } from 'react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryAction: ReactNode;
  secondaryAction?: ReactNode;
}

export default function CTASection({ title, subtitle, primaryAction, secondaryAction }: CTASectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-sky/10 border border-brand-blue/30 p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-brand-ice/80 mb-8 max-w-3xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryAction}
          {secondaryAction}
        </div>
      </div>
    </section>
  );
}
