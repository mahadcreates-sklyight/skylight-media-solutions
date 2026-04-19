import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/MediaComponents';
import { DigitalMarketingPackages, EventPackages } from '@/components/Packages';
import {
  Film, Megaphone, Smartphone, Camera, Calendar, Printer, ArrowRight,
  CreditCard, Award, FileText, Mail, Stamp, BookOpen, Shirt, Coffee, ShoppingBag,
} from 'lucide-react';
import serviceVideo from '@/assets/service-video.jpg';

const SERVICE_IMAGES = {
  videoProduction: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/VIDEO%20PRODUCTION.png?updatedAt=1776473404236',
  digitalMarketing: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/DIGITAL%20MARKETING.png?updatedAt=1776473404773',
  socialMedia: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/Social%20Media%20Content.png?updatedAt=1776473404363',
  photography: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/Photography.png?updatedAt=1776473404401',
  eventCoverage: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/Event%20Coverage.png?updatedAt=1776473404335',
  printing: 'https://ik.imagekit.io/byyg2uqjs/SERVICES/Printing%20and%20Advertising.png?updatedAt=1776473403873',
};

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Film, key: 'services.videoProduction', image: SERVICE_IMAGES.videoProduction },
    { icon: Megaphone, key: 'services.promotional', image: SERVICE_IMAGES.digitalMarketing },
    { icon: Smartphone, key: 'services.socialMedia', image: SERVICE_IMAGES.socialMedia },
    { icon: Camera, key: 'services.photography', image: SERVICE_IMAGES.photography },
    { icon: Calendar, key: 'services.eventCoverage', image: SERVICE_IMAGES.eventCoverage },
    { icon: Printer, key: 'services.brandMedia', image: SERVICE_IMAGES.printing },
  ];

  const printingItems = [
    { icon: Printer, label: 'Signboards' },
    { icon: Printer, label: '3D Letters' },
    { icon: Printer, label: 'Billboards' },
    { icon: FileText, label: 'Brochures' },
    { icon: Mail, label: 'Invitations' },
    { icon: CreditCard, label: 'Business Cards' },
    { icon: Award, label: 'Certificates' },
    { icon: CreditCard, label: 'ID Cards' },
    { icon: Stamp, label: 'Stamps' },
    { icon: Calendar, label: 'Calendars' },
    { icon: BookOpen, label: 'Notebooks' },
    { icon: BookOpen, label: 'Graduation Books' },
    { icon: Shirt, label: 'T-Shirts' },
    { icon: Coffee, label: 'Cups' },
    { icon: ShoppingBag, label: 'Shopping Bags' },
    { icon: FileText, label: 'Desk Name Plates' },
  ];

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceVideo} alt="Our Services" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground"
          >
            {t('services.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {services.map(({ icon: Icon, key, image }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <img src={image} alt={t(key)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-background/20" />
                </div>
              </div>
              <div className="flex-1">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t(key)}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t(`${key}.desc`)}</p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  {t('hero.cta.secondary')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Printing & Branding Materials */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader title={t('services.printing.title')} subtitle={t('services.printing.subtitle')} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {printingItems.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-card p-5 flex flex-col items-center text-center hover-lift group"
              >
                <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <DigitalMarketingPackages />
      <EventPackages />
    </>
  );
};

export default ServicesPage;
