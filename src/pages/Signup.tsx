import { Link } from 'react-router-dom';
import logo from '../assets/magnius-logo.svg';

export default function Signup() {
  return (
    <div className="bg-brand-mist min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-brand-ice rounded-2xl p-8 space-y-6 shadow-lg shadow-brand-indigo/5">
        <div className="flex flex-col items-center space-y-2">
          <img src={logo} alt="Magnius" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-brand-dark">Start Free Trial</h1>
          <p className="text-brand-dark/60 text-sm">14 days free, no credit card required</p>
        </div>
        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 bg-brand-mist border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Full Name"
          />
          <input
            className="w-full px-4 py-3 bg-brand-mist border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Work Email"
            type="email"
          />
          <input
            className="w-full px-4 py-3 bg-brand-mist border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Organization Name"
          />
          <button className="w-full py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Create Account
          </button>
        </div>
        <p className="text-center text-sm text-brand-dark/60">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-indigo hover:text-brand-purple transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
