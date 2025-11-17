import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/magnius-logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'Engines', path: '/engines' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-lg border-b border-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Magnius" className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tight text-white">
              <span className="text-brand-sky">Mag</span>nius
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-sky'
                    : 'text-brand-ice/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/book-demo"
              className="px-6 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/20"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-brand-ice/70 hover:text-white hover:bg-brand-steel/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy/95 backdrop-blur-lg border-t border-brand-blue/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-sky bg-brand-steel/60'
                    : 'text-brand-ice/80 hover:text-white hover:bg-brand-steel/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-demo"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 bg-brand-blue text-white text-center rounded-lg font-medium hover:bg-brand-sky transition-colors shadow-lg shadow-brand-blue/25"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
