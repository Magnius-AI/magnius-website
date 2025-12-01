import CTASection from '../components/CTASection';

const solutions = [
  { title: 'Small Nonprofits', description: 'Launch quickly with templates for donor journeys, campaigns, and events.' },
  { title: 'Foundations', description: 'Track grants, reporting, and multi-entity relationships in one view.' },
  { title: 'Education', description: 'Manage alumni, parent giving, and events with AI-powered insights.' },
  { title: 'Religious Orgs', description: 'Support congregant engagement, recurring gifts, and volunteer tasks.' },
  { title: 'Healthcare', description: 'Coordinate grateful patient programs with constituent-based pricing.' },
  { title: 'Arts & Culture', description: 'Engage members, run galas and auctions, and report on impact.' },
];

export default function Solutions() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-brand-sky font-semibold text-sm uppercase tracking-wide">Solutions</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Purpose-built for nonprofits</h1>
        <p className="text-brand-ice/80 max-w-3xl mx-auto">From small teams to national networks, Magnius adapts to your workflows with unlimited users on every plan.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((solution) => (
          <div key={solution.title} className="p-6 rounded-xl bg-brand-steel/60 border border-brand-blue/20 h-full">
            <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
            <p className="text-brand-ice/70 text-sm leading-relaxed">{solution.description}</p>
          </div>
        ))}
      </div>

      <CTASection
        title="See how Magnius fits your team"
        subtitle="Tell us about your mission and we’ll tailor a walkthrough for your programs, data, and goals."
        primaryAction={
          <button className="px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
            Schedule a Demo
          </button>
        }
        secondaryAction={
          <button className="px-8 py-3 bg-brand-steel text-white rounded-lg font-semibold border border-brand-blue/30 hover:bg-brand-steel/80">
            Start Free Trial
          </button>
        }
      />
    </div>
  );
}
