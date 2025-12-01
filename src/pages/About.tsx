import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">We believe every nonprofit deserves powerful tools.</h1>
          <p className="text-brand-dark/70 text-lg max-w-3xl mx-auto">
            After watching nonprofits struggle with $50,000/year software budgets or cobble together six different apps, we built something better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-brand-mist border border-brand-ice space-y-3">
            <h3 className="text-2xl font-semibold text-brand-dark">Magnius is the nonprofit CRM we wished existed:</h3>
            <ul className="text-brand-dark/70 space-y-2">
              <li className="flex items-start"><span className="text-brand-indigo mr-2">•</span> Affordable (not $60/user/month)</li>
              <li className="flex items-start"><span className="text-brand-indigo mr-2">•</span> Unified (not 6 disconnected tools)</li>
              <li className="flex items-start"><span className="text-brand-indigo mr-2">•</span> Modern (not built in 2005)</li>
              <li className="flex items-start"><span className="text-brand-indigo mr-2">•</span> AI-powered (not "AI-washed")</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-brand-mist border border-brand-ice space-y-3">
            <h3 className="text-2xl font-semibold text-brand-dark">Mission</h3>
            <p className="text-brand-dark/70">
              Magnius empowers nonprofits with enterprise-grade AI tools at a fraction of the cost—so you can focus on your mission, not your software.
            </p>
            <p className="text-brand-dark/70">
              We ship fast, listen closely, and partner with teams to ensure technology never holds back impact.
            </p>
          </div>
        </div>

        <div id="careers" className="rounded-2xl bg-brand-indigo/5 border border-brand-indigo/20 p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-brand-dark">Careers</h3>
          <p className="text-brand-dark/70">We are hiring engineers, nonprofit success managers, and content specialists who care deeply about the sector.</p>
          <button className="px-6 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            View Open Roles
          </button>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto rounded-2xl bg-brand-mist border border-brand-ice p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Join us in modernizing nonprofit software</h2>
          <p className="text-brand-dark/70 mb-8 max-w-3xl mx-auto">
            Start a trial or reach out to partner on product feedback, integrations, and success stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-brand-dark rounded-lg font-semibold border border-brand-ice hover:border-brand-indigo transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
