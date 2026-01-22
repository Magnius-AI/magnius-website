import { Link } from 'react-router-dom';

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
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">Solutions</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Purpose-built for nonprofits</h1>
        <p className="text-brand-dark/70 max-w-3xl mx-auto">
          From small teams to national networks, Magnius adapts to your workflows with unlimited users on every plan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {solutions.map((solution) => (
          <div
            key={solution.title}
            className="p-6 rounded-xl bg-white border border-brand-ice h-full hover:border-brand-indigo hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-brand-dark mb-2">{solution.title}</h3>
            <p className="text-brand-dark/70 text-sm leading-relaxed">{solution.description}</p>
          </div>
        ))}
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto rounded-2xl bg-brand-mist border border-brand-ice p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">See how Magnius fits your team</h2>
          <p className="text-brand-dark/70 mb-8 max-w-3xl mx-auto">
            Tell us about your mission and we'll tailor a walkthrough for your programs, data, and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-brand-dark rounded-lg font-semibold border border-brand-ice hover:border-brand-indigo transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
