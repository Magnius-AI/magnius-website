import { Link } from 'react-router-dom';
import logo from '../assets/magnius-logo.svg';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'Solutions', path: '/solutions' },
      { label: 'Pricing', path: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Help Center', path: '/resources' },
      { label: 'Privacy', path: '/privacy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/about#careers' },
    ],
  },
  {
    title: 'Impact',
    links: [
      { label: 'Case Studies', path: '/resources#case-studies' },
      { label: 'Security', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
    ],
  },
];

export default function MarketingFooter() {
  return (
    <footer className="bg-brand-mist border-t border-brand-ice/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Magnius" className="w-10 h-10" />
              <span className="text-2xl font-bold lowercase tracking-tight text-brand-dark">
                magnius
              </span>
            </Link>
            <p className="text-brand-dark/70 text-sm max-w-md leading-relaxed">
              AI-powered CRM for nonprofits. Unite donor data, automation, and impact reporting inside one modern operating
              system.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-brand-dark font-semibold">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-brand-dark/70 hover:text-brand-indigo transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-brand-ice/30 pt-6 text-sm text-brand-dark/60">
          <div>© 2025 Magnius. AI for Good.</div>
          <div className="flex items-center space-x-4">
            <Link to="/privacy" className="hover:text-brand-indigo transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-brand-indigo transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
