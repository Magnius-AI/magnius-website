export default function Contact() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="text-brand-sky font-semibold text-sm uppercase tracking-wide">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Talk with our team</h1>
          <p className="text-brand-ice/80">Schedule a demo, ask about pricing, or get help with migration.</p>
        </div>

        <form className="space-y-4 bg-brand-steel/60 border border-brand-blue/20 p-6 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-brand-ice/70 mb-1">Name</label>
              <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-brand-ice/70 mb-1">Email</label>
              <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="you@org.org" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-brand-ice/70 mb-1">Organization</label>
            <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="Your nonprofit" />
          </div>
          <div>
            <label className="block text-sm text-brand-ice/70 mb-1">How can we help?</label>
            <textarea className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" rows={4} placeholder="Tell us about your goals" />
          </div>
          <button className="w-full py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
