interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-xl bg-brand-steel/60 border border-brand-blue/20">
      <p className="text-brand-ice/80 text-lg leading-relaxed mb-4">“{quote}”</p>
      <div className="text-white font-semibold">{name}</div>
      <div className="text-brand-ice/60 text-sm">{title}</div>
    </div>
  );
}
