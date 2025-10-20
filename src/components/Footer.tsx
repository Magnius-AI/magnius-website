import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/magnius-ai',
    icon: Linkedin,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/magniusai',
    icon: Twitter,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/magnius-ai',
    icon: Github,
  },
];

const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'MAGNIUS Financial Platform', to: '/financial' },
      { label: 'MAGNIUS Banking', to: '/banking' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Request Demo', to: '/demo' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Financial Advisors', to: '/solutions' },
      { label: 'For Hedge Funds', to: '/solutions' },
      { label: 'For Family Offices', to: '/solutions' },
      { label: 'For Community Banks', to: '/solutions' },
      { label: 'For Credit Unions', to: '/solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: '/resources' },
      { label: 'Blog', to: '/resources' },
      { label: 'Case Studies', to: '/resources' },
      { label: 'FAQs', to: '/resources' },
      { label: 'System Status', to: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/company' },
      { label: 'Careers', to: '/company' },
      { label: 'Contact', to: '/company' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[320px_repeat(4,minmax(0,1fr))] lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/magnius-icon.png"
                alt="MAGNIUS"
                className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 p-1.5"
              />
              <div>
                <p className="text-xl font-semibold uppercase tracking-[0.4em] text-white">
                  Magnius
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
                  Local-First AI for Financial Intelligence
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-gray-400">
              Local-first, privacy-first AI platforms engineered exclusively for financial professionals
              and regulated institutions.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-200 transition hover:border-blue-500 hover:text-blue-400"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-gray-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex flex-col items-center gap-3 px-4 py-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:max-w-7xl lg:px-8">
          <span>© 2025 MAGNIUS. All rights reserved.</span>
          <span>Built with privacy in mind.</span>
          <span>Your data stays yours.</span>
        </div>
      </div>
    </footer>
  );
}
