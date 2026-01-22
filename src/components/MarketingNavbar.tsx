import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/magnius-logo.svg';

const navLinks = [
  { name: 'Features', path: '/features' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Resources', path: '/resources' },
  { name: 'Pricing', path: '/pricing' },
];

export default function MarketingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-brand-indigo' : 'text-brand-dark/70 hover:text-brand-dark'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-brand-ice/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Magnius" className="w-10 h-10" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold lowercase tracking-tight text-brand-dark">magnius</span>
              <span className="text-xs text-brand-dark/60">AI CRM for Nonprofits</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClasses}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-indigo' : 'text-brand-dark/70 hover:text-brand-dark'
                }`
              }
            >
              Log In
            </NavLink>
            <Link
              to="/signup"
              className="px-5 py-2.5 bg-brand-indigo hover:bg-brand-purple text-white font-medium rounded-full transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-brand-dark/70 hover:text-brand-dark hover:bg-brand-mist"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-brand-ice/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive ? 'text-brand-indigo bg-brand-mist' : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-mist'
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
                    isActive ? 'text-brand-indigo bg-brand-mist' : 'text-brand-dark/70 hover:text-brand-dark hover:bg-brand-mist'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Log In
              </NavLink>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 text-center bg-brand-indigo hover:bg-brand-purple text-white rounded-full font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
