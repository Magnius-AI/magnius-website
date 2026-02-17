import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { NAV_LINKS, BRAND } from '../lib/constants';
import { heroNav } from '../lib/animations';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Trigger load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      variants={heroNav}
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-slate/20'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.svg"
            alt="Magnius Logo"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
          <span className="font-display text-xl font-semibold text-frost tracking-wide hidden sm:block">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                clsx(
                  'relative font-body text-sm font-medium transition-colors duration-300',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                  'after:bg-gradient-to-r after:from-cyan after:to-teal',
                  'after:transition-all after:duration-300',
                  'hover:after:w-full',
                  isActive
                    ? 'text-cyan after:w-full'
                    : 'text-silver hover:text-frost'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#pricing"
            className={clsx(
              'relative px-6 py-2.5 rounded-xl',
              'font-body text-sm font-semibold',
              'bg-gradient-to-r from-cyan to-teal text-void',
              'transition-all duration-300',
              'hover:shadow-glow-cyan hover:scale-105',
              'focus:outline-none focus:ring-2 focus:ring-cyan/50'
            )}
          >
            <span className="relative z-10">Start Free</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={clsx(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl',
            'border border-slate/50 bg-graphite/50 backdrop-blur-sm',
            'text-frost transition-all duration-300',
            'hover:border-cyan/30 hover:bg-charcoal',
            'md:hidden'
          )}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate/20 bg-night/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {/* Mobile Nav Links */}
              <nav className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'block py-2 font-body text-lg font-medium transition-colors',
                        isActive ? 'text-cyan' : 'text-silver hover:text-frost'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile CTA */}
              <a
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'w-full py-4 rounded-xl text-center',
                  'font-body text-base font-semibold',
                  'bg-gradient-to-r from-cyan to-teal text-void',
                  'transition-all duration-300',
                  'hover:shadow-glow-cyan'
                )}
              >
                Start Free
              </a>

              {/* Mobile Tagline */}
              <p className="text-xs text-muted text-center pt-4 border-t border-slate/20">
                AI-powered webinars that convert
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
