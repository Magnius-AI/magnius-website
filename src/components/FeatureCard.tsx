import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-brand-navy/60 border border-brand-indigo/25 hover:border-brand-indigo transition-colors">
      <div className="w-12 h-12 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-brand-ice/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
