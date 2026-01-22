import { Link } from 'react-router-dom';
import logo from '../assets/magnius-logo.svg';

export default function Login() {
  return (
    <div className="bg-brand-mist min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-brand-ice rounded-2xl p-8 space-y-6 shadow-lg shadow-brand-indigo/5">
        <div className="flex flex-col items-center space-y-2">
          <img src={logo} alt="Magnius" className="w-12 h-12" />
          <h1 className="text-3xl font-bold text-brand-dark">Welcome back</h1>
          <p className="text-brand-dark/60 text-sm">Sign in to your account</p>
        </div>
        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 bg-brand-mist border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full px-4 py-3 bg-brand-mist border border-brand-ice rounded-lg text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-indigo transition-colors"
            placeholder="Password"
            type="password"
          />
          <button className="w-full py-3 bg-brand-indigo text-white rounded-lg font-semibold hover:bg-brand-purple transition-colors">
            Sign In
          </button>
        </div>
        <p className="text-center text-sm text-brand-dark/60">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brand-indigo hover:text-brand-purple transition-colors font-medium">
            Start free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
