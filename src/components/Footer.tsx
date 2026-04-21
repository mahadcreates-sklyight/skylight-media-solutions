import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import skylightLogo from '@/assets/skylight-logo.jpg';
import skylightWordmark from '@/assets/skylight-wordmark.png';

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="relative bg-surface border-t border-primary/20 overflow-hidden">
      {/* Brand color accent glows (replaces watermark) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />
      {/* Top brand-color hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="relative container-custom px-4 md:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" aria-label="Skylight Media Solutions" className="inline-flex items-center gap-3 group">
              <img
                src={skylightLogo}
                alt=""
                aria-hidden
                className="h-11 w-auto object-contain rounded-full ring-1 ring-primary/30 transition-all duration-300 group-hover:ring-primary/60 group-hover:drop-shadow-[0_0_18px_hsl(var(--primary)/0.55)]"
              />
              <img
                src={skylightWordmark}
                alt="Skylight Media Solutions"
                className="h-7 md:h-8 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_14px_hsl(var(--primary)/0.55)]"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-2.5">
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
                  className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_18px_hsl(var(--primary)/0.5)] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-display text-base mb-4 relative inline-block">
              {t('footer.quickLinks')}
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t('nav.home'), path: '/' },
                { label: t('nav.about'), path: '/about' },
                { label: t('nav.portfolio'), path: '/portfolio' },
                { label: t('nav.blog'), path: '/blog' },
                { label: t('nav.contact'), path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-display text-base mb-4 relative inline-block">
              {t('footer.services')}
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-2.5">
              {[
                'services.videoProduction',
                'services.promotional',
                'services.socialMedia',
                'services.photography',
                'services.eventCoverage',
                'services.brandMedia',
              ].map((key) => (
                <li key={key}>
                  <Link
                    to="/services"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))] transition-all" />
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="space-y-5">
            <div>
              <h4 className="text-foreground font-display text-base mb-4 relative inline-block">
                {t('footer.newsletter')}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 min-w-0 bg-secondary/60 border border-primary/20 rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 hover:shadow-[0_0_18px_hsl(var(--primary)/0.5)] transition-all"
                >
                  {t('footer.newsletter.button')}
                </button>
              </form>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </span>
                <span>{t('contact.info.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </span>
                <span>{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </span>
                <span>{t('contact.info.email')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-primary/15">
        <div className="container-custom px-4 md:px-8 py-4 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
