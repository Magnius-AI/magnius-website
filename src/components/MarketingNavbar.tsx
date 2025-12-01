import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/magnius-logo.svg';

const navLinks = [
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Resources', path: '/resources' },
];

export default function MarketingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-brand-ice/80 hover:text-white'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur border-b border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Magnius" className="w-10 h-10" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white">Magnius</span>
              <span className="text-xs text-brand-ice/70">AI-First Nonprofit CRM</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <NavLink to="/login" className={linkClasses}>
              Login
            </NavLink>
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/25"
            >
              Start Free Trial
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-brand-ice/80 hover:text-white hover:bg-brand-steel/50"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-navy/95 border-t border-brand-blue/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive ? 'text-white bg-brand-steel/70' : 'text-brand-ice/80 hover:text-white hover:bg-brand-steel/50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="grid gap-3">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block w-full px-4 py-3 text-center rounded-lg font-medium transition-colors ${
                    isActive ? 'text-white bg-brand-steel/70' : 'text-brand-ice/80 hover:text-white hover:bg-brand-steel/50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 text-center bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-sky transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
