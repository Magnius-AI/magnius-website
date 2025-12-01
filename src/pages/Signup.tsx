import { Link } from 'react-router-dom';
import logo from '../assets/magnius-logo-light.svg';

export default function Signup() {
  return (
    <div className="bg-brand-dark text-brand-ice min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-brand-navy/60 border border-brand-indigo/20 rounded-2xl p-8 space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img src={logo} alt="Magnius" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-white">Start Free Trial</h1>
          <p className="text-brand-ice/60 text-sm">14 days free, no credit card required</p>
        </div>
        <div className="space-y-4">
          <input className="input-dark" placeholder="Full Name" />
          <input className="input-dark" placeholder="Work Email" type="email" />
          <input className="input-dark" placeholder="Organization Name" />
          <button className="w-full py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Create Account
          </button>
        </div>
        <p className="text-center text-sm text-brand-ice/60">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-sky hover:text-white transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
