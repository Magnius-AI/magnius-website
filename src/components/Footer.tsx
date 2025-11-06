import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/magniushealthcareai',
    icon: Linkedin,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/magniushealthai',
    icon: Twitter,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/magniushealthcareai',
    icon: Facebook,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@magniushealthcareai',
    icon: Youtube,
  },
];

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Scheduling', to: '/features#appointment-management' },
      { label: 'Patient Management', to: '/features#patient-management' },
      { label: 'Communication Hub', to: '/features#communication-hub' },
      { label: 'Integrations', to: '/features#integrations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Primary Care', to: '/solutions#primary-care' },
      { label: 'Specialty Practices', to: '/solutions#specialty' },
      { label: 'Multi-Provider Clinics', to: '/solutions#multi-provider' },
      { label: 'Telehealth', to: '/solutions#telehealth' },
      { label: 'See All Solutions', to: '/solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resource Hub', to: '/resources' },
      { label: 'Blog', to: '/resources#blog' },
      { label: 'Documentation', to: '/resources#documentation' },
      { label: 'Case Studies', to: '/resources#case-studies' },
      { label: 'Help Center', to: '/resources#help-center' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/about#careers' },
      { label: 'Press', to: '/about#press' },
      { label: 'Partners', to: '/about#partners' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'HIPAA Compliance', to: '/security#hipaa' },
      { label: 'Security Overview', to: '/security' },
      { label: 'Cookie Policy', to: '/security#privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[320px_repeat(5,minmax(0,1fr))] lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/Magnius%20Emblem.png"
                alt="Magnius Healthcare emblem"
                className="h-16 w-16"
              />
            </div>
            <p className="max-w-xs text-sm text-slate-600">
              Magnius Healthcare AI is a comprehensive, HIPAA-compliant practice management platform that combines
              intelligent automation, compassionate patient experiences, and trusted operations in one place.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-500 hover:text-blue-600"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-600 transition hover:text-blue-600"
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

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex flex-col items-center gap-3 px-4 py-6 text-xs font-medium uppercase tracking-[0.28em] text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:max-w-7xl lg:px-8">
          <span>© 2024 Magnius Healthcare AI. All rights reserved.</span>
          <span>HIPAA Compliant | SOC 2 Type II | 99.9% Uptime</span>
          <span>USA-Based Support | Inclusive Care for Every Patient</span>
        </div>
      </div>
    </footer>
  );
}
