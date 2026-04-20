import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import skylightLogo from '@/assets/skylight-logo.jpg';

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-surface border-t border-border/50 overflow-hidden">
      {/* Optional brand watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${skylightLogo})` }}
      />
      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" aria-label="Skylight Media Solutions" className="inline-block group">
              <img
                src={skylightLogo}
                alt="Skylight Media Solutions"
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_18px_hsl(var(--primary)/0.5)]"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/SkylightMediaSolutions' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-display text-lg mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { label: t('nav.home'), path: '/' },
                { label: t('nav.about'), path: '/about' },
                { label: t('nav.portfolio'), path: '/portfolio' },
                { label: t('nav.blog'), path: '/blog' },
                { label: t('nav.contact'), path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-display text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {[
                'services.videoProduction',
                'services.promotional',
                'services.socialMedia',
                'services.photography',
                'services.eventCoverage',
                'services.brandMedia',
              ].map((key) => (
                <li key={key}>
                  <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="text-foreground font-display text-lg mb-4">{t('footer.newsletter')}</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 bg-secondary border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" className="btn-primary !px-4 !py-2.5">
                  {t('footer.newsletter.button')}
                </button>
              </form>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{t('contact.info.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{t('contact.info.email')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container-custom px-4 md:px-8 py-6 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
