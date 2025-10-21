import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'MAGNIUS Banking', to: '/#risk-intelligence', isAnchor: true },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Company', to: '/company' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/60'
          : 'bg-neutral-950/85 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/magnius-icon.png"
            alt="MAGNIUS"
            className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 p-1"
          />
          <div>
            <span className="block text-base font-semibold uppercase tracking-[0.3em] text-white">
              Magnius
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.35em] text-blue-400">
              Cloud-Native Risk Intelligence
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => {
            if (link.isAnchor) {
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  clsx(
                    'text-sm font-semibold uppercase tracking-[0.25em] transition',
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  )
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/pricing"
            className="hidden text-sm font-semibold uppercase tracking-[0.25em] text-gray-400 transition hover:text-white lg:block"
          >
            See Pricing
          </Link>
          <Link
            to="/demo"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-500 hover:shadow-glow"
          >
            Schedule Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-neutral-950/98 px-6 pb-12 pt-6 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-7">
              <div className="space-y-4">
                {navLinks.map((link) =>
                  link.isAnchor ? (
                    <Link
                      key={`mobile-${link.label}`}
                      to={link.to}
                      className="block text-sm font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={`mobile-${link.label}`}
                      to={link.to}
                      className={({ isActive }) =>
                        clsx(
                          'block text-sm font-semibold uppercase tracking-[0.3em] transition',
                          isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </div>

              <div className="space-y-3">
                <Link
                  to="/pricing"
                  className="block text-sm font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:text-white"
                >
                  See Pricing
                </Link>
                <Link
                  to="/demo"
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-500"
                >
                  Schedule Demo
                </Link>
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Cloud-native risk intelligence for every commercial bank
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
