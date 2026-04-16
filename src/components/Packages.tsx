import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, GraduationCap, Building2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from './MediaComponents';

export const DigitalMarketingPackages = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('packages.starter'),
      featured: false,
      items: ['Facebook Ads Campaign', '10 Social Media Posters', '1 Video Clip', '1 Photography Session'],
    },
    {
      name: t('packages.standard'),
      featured: true,
      items: ['Facebook Ads Campaign', '15 Social Media Posters', '2 Video Clips', '1 Photography Session'],
    },
    {
      name: t('packages.premium'),
      featured: false,
      items: ['Facebook Ads Campaign', '30 Social Media Posters', '3 Video Clips', '2 Photography Sessions'],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader title={t('packages.title')} subtitle={t('packages.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative glass-card p-8 hover-lift flex flex-col ${
                plan.featured ? 'border-primary/60 ring-1 ring-primary/30' : ''
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-sm font-semibold">
                  {t('packages.popular')}
                </span>
              )}
              <h3 className="text-foreground font-display text-2xl font-semibold mb-6 text-center">{plan.name}</h3>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={plan.featured ? 'btn-primary text-center' : 'btn-outline text-center'}>
                {t('packages.cta')}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EventPackages = () => {
  const { t } = useLanguage();

  const plans = [
    {
      icon: GraduationCap,
      name: t('packages.school'),
      items: [
        'T-Shirts & Hats',
        'Protocol Team',
        'Full Video Coverage',
        'Photo Streaming',
        'Honorary Certificates',
        'Graduation Event Branding',
      ],
    },
    {
      icon: Building2,
      name: t('packages.university'),
      items: [
        'T-Shirts & Hats',
        'Protocol Team',
        'Full Video Coverage with Live Streaming',
        'Photo Streaming',
        'Graduation Boards',
        'Honorary Certificates',
        'Invitations (200 pcs)',
      ],
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeader title={t('packages.event.title')} subtitle={t('packages.event.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map(({ icon: Icon, name, items }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 hover-lift flex flex-col"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground font-display text-2xl font-semibold mb-6">{name}</h3>
              <ul className="space-y-3 flex-1 mb-8">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary text-center">
                {t('packages.cta')}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
