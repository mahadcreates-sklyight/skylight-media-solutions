import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/MediaComponents';
import { Film, Megaphone, Smartphone, Camera, Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import serviceVideo from '@/assets/service-video.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Film, key: 'services.videoProduction', image: serviceVideo },
    { icon: Megaphone, key: 'services.commercial', image: heroBg },
    { icon: Smartphone, key: 'services.socialMedia', image: servicePhoto },
    { icon: Camera, key: 'services.photography', image: servicePhoto },
    { icon: Calendar, key: 'services.eventCoverage', image: serviceEvent },
    { icon: TrendingUp, key: 'services.mediaMarketing', image: serviceVideo },
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
            className="text-muted-foreground text-lg mt-4"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>
      </section>

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
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={image} alt={t(key)} className="w-full h-full object-cover" loading="lazy" />
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
                  {t('hero.cta.primary')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
