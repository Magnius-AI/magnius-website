export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-brand-indigo uppercase tracking-[0.14em]">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Talk with our team</h1>
          <p className="text-brand-dark/70">Schedule a demo, ask about pricing, or get help with migration.</p>
        </div>

        <form className="space-y-4 bg-brand-mist border border-brand-ice p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-brand-dark/70 mb-1 font-medium">Name</label>
              <input
                className="w-full px-4 py-3 bg-white border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-brand-dark/70 mb-1 font-medium">Email</label>
              <input
                className="w-full px-4 py-3 bg-white border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
                placeholder="you@org.org"
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-brand-dark/70 mb-1 font-medium">Organization</label>
            <input
              className="w-full px-4 py-3 bg-white border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
              placeholder="Your nonprofit"
            />
          </div>
          <div>
            <label className="block text-sm text-brand-dark/70 mb-1 font-medium">How can we help?</label>
            <textarea
              className="w-full px-4 py-3 bg-white border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors resize-none"
              rows={4}
              placeholder="Tell us about your goals"
            />
          </div>
          <button className="w-full py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
