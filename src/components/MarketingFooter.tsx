import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Solutions', path: '/solutions' },
      { label: 'Security', path: '/privacy' },
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
    title: 'Resources',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Help Center', path: '/resources' },
      { label: 'Changelog', path: '/resources#changelog' },
    ],
  },
];

export default function MarketingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-blue/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-bold text-white block mb-3">
              Magnius
            </Link>
            <p className="text-brand-ice/70 text-sm max-w-xs">
              The AI-first CRM built exclusively for nonprofits. Manage donors, grants, fundraising, and events in one platform.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-brand-ice/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-brand-blue/10 pt-6">
          <div className="text-brand-ice/60 text-sm">© {currentYear} Magnius. All rights reserved.</div>
          <div className="flex items-center space-x-4 text-sm text-brand-ice/60">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
