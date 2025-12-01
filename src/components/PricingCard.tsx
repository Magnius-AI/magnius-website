interface PricingCardProps {
  name: string;
  price: string;
  annualPrice?: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  annualPrice,
  description,
  features,
  ctaLabel = 'Start Free Trial',
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={`p-8 rounded-2xl border transition-all ${
        highlighted
          ? 'bg-brand-indigo/10 border-brand-indigo shadow-xl shadow-brand-indigo/15 scale-[1.02]'
          : 'bg-brand-navy/60 border-brand-indigo/20'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        {highlighted && <span className="text-xs px-3 py-1 rounded-full bg-brand-indigo text-white">Popular</span>}
      </div>
      <div className="text-4xl font-bold text-white mb-2">{price}</div>
      {annualPrice && <div className="text-sm text-brand-ice/70 mb-4">Annual: {annualPrice}</div>}
      <p className="text-brand-ice/70 mb-6">{description}</p>
      <button className="w-full py-3 rounded-lg bg-brand-indigo text-white font-semibold hover:bg-brand-purple transition-colors mb-6">
        {ctaLabel}
      </button>
      <ul className="space-y-2 text-sm text-brand-ice/80">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-brand-sky mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
