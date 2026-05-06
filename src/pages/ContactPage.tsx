import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin, Send, Facebook, Youtube, MessageCircle } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.5 3a5.5 5.5 0 0 0 5.5 5.5v3a8.5 8.5 0 0 1-5-1.62V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.18a3 3 0 1 0 2 2.83V3h2.5z"/>
  </svg>
);

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('contact.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </motion.p>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="glass-card p-8 md:p-10 space-y-6"
              >
                <input type="hidden" name="access_key" value="88900911-a741-4210-bb75-63ebd706bdd5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">{t('contact.name')}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">{t('contact.email')}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-foreground text-sm font-medium mb-2 block">{t('contact.message')}</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass-card p-8">
                <h3 className="text-foreground font-display text-xl font-semibold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">Address</p>
                      <p className="text-muted-foreground text-sm">{t('contact.info.address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">Phone & WhatsApp</p>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm flex-wrap">
                        <a href="tel:+252619977885" className="hover:text-primary transition-colors">+252 619 977 885</a>
                        <a
                          href="https://wa.me/252619977885"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.7)] transition"
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">Email</p>
                      <a href="mailto:info@skylightmediasolutions.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                        info@skylightmediasolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="glass-card p-8">
                <h3 className="text-foreground font-display text-xl font-semibold mb-4">{t('footer.connect')}</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/SkylightMediaSolutions', label: 'Facebook' },
                    { icon: Youtube, href: 'https://youtube.com/@iimaansax?si=C6qsSp0l8nZs3plN', label: 'YouTube' },
                    { icon: TiktokIcon, href: 'https://www.tiktok.com/@skylightmediamolution?_r=1&_t=ZS-95eII2Pt6Fl', label: 'TikTok' },
                  ].map(({ icon: Icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="glass-card aspect-video rounded-lg overflow-hidden">
                <iframe
                  title="Skylight Media Solutions Location"
                  src="https://www.google.com/maps?q=Howlwadaag+Street+Mogadishu&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
