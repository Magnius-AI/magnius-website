export default function Signup() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-brand-steel/60 border border-brand-blue/20 rounded-2xl p-6 space-y-4">
        <h1 className="text-3xl font-bold text-white text-center">Start Free Trial</h1>
        <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="Name" />
        <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="Email" />
        <input className="w-full px-3 py-2 rounded-lg bg-brand-navy/70 border border-brand-blue/20" placeholder="Organization" />
        <button className="w-full py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors">Create Account</button>
        <p className="text-xs text-brand-ice/60 text-center">14-day free trial. No credit card required.</p>
      </div>
    </div>
  );
}
