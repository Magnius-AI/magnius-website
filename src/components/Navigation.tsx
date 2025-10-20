import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import clsx from 'clsx';

const primaryLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Company', to: '/company' },
];

const productLinks = [
  {
    name: 'MAGNIUS Financial Platform',
    description: 'For Investment Professionals',
    to: '/financial',
    icon: BarChart3,
  },
  {
    name: 'MAGNIUS Banking',
    description: 'For Community Banks & Credit Unions',
    to: '/banking',
    icon: Building2,
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!productsOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (productsRef.current?.contains(event.target as Node)) {
        return;
      }
      setProductsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [productsOpen]);

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
              Local-First AI
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            ref={productsRef}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={clsx(
                'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] transition-colors',
                productsOpen ? 'text-white' : 'text-gray-300 hover:text-white'
              )}
            >
              Products
              <ChevronDown
                size={16}
                className={clsx(
                  'transition-transform duration-200',
                  productsOpen && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence>
              {productsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-4 w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/95 shadow-2xl backdrop-blur-xl"
                >
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-400">
                      Local-First Platforms
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                      Two enterprise suites engineered for high-stakes financial intelligence.
                    </p>
                  </div>
                  <div className="flex flex-col divide-y divide-white/5">
                    {productLinks.map((product) => (
                      <Link
                        key={product.name}
                        to={product.to}
                        className="flex items-start gap-4 px-6 py-5 transition hover:bg-white/5"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                          <product.icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{product.name}</p>
                          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                            {product.description}
                          </p>
                        </div>
                        <ArrowUpRight className="ml-auto mt-1 h-4 w-4 text-gray-500" />
                      </Link>
                    ))}
                    <Link
                      to="/#products"
                      className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      View All Products
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {primaryLinks.map((link) => (
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
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
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
            Request Demo
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
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
                  Products
                </p>
                <div className="mt-4 space-y-4">
                  {productLinks.map((product) => (
                    <Link
                      key={`mobile-${product.name}`}
                      to={product.to}
                      className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-4 transition hover:border-blue-500/30 hover:bg-blue-500/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                        <product.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/#products"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View All Products
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {primaryLinks.map((link) => (
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
                ))}
                <Link
                  to="/pricing"
                  className="block text-sm font-semibold uppercase tracking-[0.3em] text-gray-300 transition hover:text-white"
                >
                  See Pricing
                </Link>
              </div>

              <div className="pt-2">
                <Link
                  to="/demo"
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-blue-500"
                >
                  Request Demo
                </Link>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Local-first AI for financial intelligence
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
