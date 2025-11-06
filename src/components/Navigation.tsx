import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import clsx from 'clsx';

type NavItem = {
  label: string;
  to: string;
  description?: string;
  items?: Array<{ label: string; to: string; description?: string }>;
  external?: boolean;
};

const navItems: NavItem[] = [
  {
    label: 'Features',
    to: '/features',
    description: 'Explore the complete practice management suite.',
    items: [
      { label: 'Appointment Management', to: '/features#appointment-management', description: 'AI-powered scheduling and online booking.' },
      { label: 'Patient Management', to: '/features#patient-management', description: 'Comprehensive patient records and history.' },
      { label: 'Communication Hub', to: '/features#communication-hub', description: 'Multi-channel outreach with templates and tracking.' },
      { label: 'Billing & Claims', to: '/features#billing-claims', description: 'End-to-end revenue cycle automation.' },
      { label: 'Referral Management', to: '/features#referrals', description: 'Coordinate specialists with authorization workflows.' },
      { label: 'Analytics & Reports', to: '/features#analytics', description: 'Real-time KPIs and productivity dashboards.' },
      { label: 'AI Automation', to: '/features#ai-automation', description: 'Predictive insights and workflow triggers.' },
    ],
  },
  {
    label: 'Solutions',
    to: '/solutions',
    description: 'Tailored configurations for every practice type.',
    items: [
      { label: 'Primary Care Practices', to: '/solutions#primary-care' },
      { label: 'Specialty Practices', to: '/solutions#specialty' },
      { label: 'Multi-Provider Clinics', to: '/solutions#multi-provider' },
      { label: 'Telehealth Practices', to: '/solutions#telehealth' },
    ],
  },
  { label: 'Pricing', to: '/pricing' },
  {
    label: 'Resources',
    to: '/resources',
    description: 'Guides, documentation, and customer stories.',
    items: [
      { label: 'Resource Hub', to: '/resources' },
      { label: 'Blog', to: '/resources#blog' },
      { label: 'Documentation', to: '/resources#documentation' },
      { label: 'Case Studies', to: '/resources#case-studies' },
      { label: 'Security & Compliance', to: '/security' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const externalLinks = [
  { label: 'Login', href: 'https://app.magniushealthcare.ai/login' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white/80 backdrop-blur'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Magnius%20Emblem.png"
            alt="Magnius Healthcare emblem"
            className="h-12 w-12 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
          />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="text-sm font-semibold tracking-[0.3em] text-slate-900 uppercase">
              Magnius Healthcare Platform
            </span>
            <span className="text-xs font-medium tracking-[0.22em] text-slate-500 uppercase">
              Intelligent Practice Management
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            if (item.items) {
              const isOpen = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        'inline-flex items-center gap-1 rounded-full px-3 py-2 transition-colors',
                        isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown size={16} className={clsx('transition-transform', isOpen && 'rotate-180')} />
                  </NavLink>

                  <AnimatePresence>
                    {isOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-xl"
                      >
                        {item.description ? (
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                            {item.description}
                          </p>
                        ) : null}
                        <ul className="space-y-2">
                          {item.items.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                to={subItem.to}
                                className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                              >
                                <p className="font-semibold">{subItem.label}</p>
                                {subItem.description ? (
                                  <span className="text-xs text-slate-500">
                                    {subItem.description}
                                  </span>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  clsx(
                    'rounded-full px-3 py-2 transition-colors',
                    isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  )
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/demo"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 hover:shadow-md"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
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
            className="border-t border-slate-200 bg-white px-6 pb-12 pt-6 md:hidden"
          >
            <div className="space-y-7">
              <div className="space-y-4">
                {navItems.map((item) =>
                  item.items ? (
                    <div key={`mobile-${item.label}`} className="space-y-2">
                      <Link
                        to={item.to}
                        className="block text-sm font-semibold text-slate-700"
                      >
                        {item.label}
                      </Link>
                      <div className="space-y-2 border-l border-slate-200 pl-4">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.to}
                            className="block text-sm text-slate-500 transition hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={`mobile-${item.label}`}
                      to={item.to}
                      className={({ isActive }) =>
                        clsx(
                          'block text-sm font-semibold transition',
                          isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </div>

              <div className="space-y-3">
                {externalLinks.map((link) => (
                  <a
                    key={`mobile-${link.label}`}
                    href={link.href}
                    className="block text-sm font-semibold text-slate-700 transition hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  to="/demo"
                  className="flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Start Free Trial
                </Link>
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Healthcare-grade practice management | HIPAA compliant | 99.9% uptime
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
