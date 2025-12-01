import CTASection from '../components/CTASection';

export default function About() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-brand-sky font-semibold text-sm uppercase tracking-wide">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">We believe every nonprofit deserves powerful tools.</h1>
          <p className="text-brand-ice/80 text-lg">
            After watching nonprofits struggle with $50,000/year software budgets or cobble together six different apps, we built something better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-brand-navy/60 border border-brand-indigo/20 space-y-3">
            <h3 className="text-2xl font-semibold text-white">Magnius is the nonprofit CRM we wished existed:</h3>
            <ul className="text-brand-ice/80 space-y-2">
              <li>• Affordable (not $60/user/month)</li>
              <li>• Unified (not 6 disconnected tools)</li>
              <li>• Modern (not built in 2005)</li>
              <li>• AI-powered (not "AI-washed")</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-brand-navy/60 border border-brand-indigo/20 space-y-3">
            <h3 className="text-2xl font-semibold text-white">Mission</h3>
            <p className="text-brand-ice/80">
              Magnius empowers nonprofits with enterprise-grade AI tools at a fraction of the cost—so you can focus on your mission, not your software.
            </p>
            <p className="text-brand-ice/80">
              We ship fast, listen closely, and partner with teams to ensure technology never holds back impact.
            </p>
          </div>
        </div>

        <div id="careers" className="rounded-2xl bg-brand-navy/50 border border-brand-indigo/20 p-6 space-y-3">
          <h3 className="text-2xl font-semibold text-white">Careers</h3>
          <p className="text-brand-ice/80">We are hiring engineers, nonprofit success managers, and content specialists who care deeply about the sector.</p>
          <button className="px-6 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            View Open Roles
          </button>
        </div>
      </div>

      <CTASection
        title="Join us in modernizing nonprofit software"
        subtitle="Start a trial or reach out to partner on product feedback, integrations, and success stories."
        primaryAction={
          <button className="px-8 py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Start Free Trial
          </button>
        }
        secondaryAction={
          <button className="px-8 py-3 bg-brand-navy text-white rounded-lg font-semibold border border-brand-indigo/30 hover:bg-brand-navy/80 transition-colors">
            Contact Us
          </button>
        }
      />
    </div>
  );
}
