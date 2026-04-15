import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import portfolioGrid from '@/assets/portfolio-grid.jpg';
import AnimatedCounter from '@/components/AnimatedCounter';
import { ProjectCard, VideoPlayerModal, SectionHeader } from '@/components/MediaComponents';
import { Film, Video, Smartphone, Camera, Calendar, Palette, Star, Quote } from 'lucide-react';

const portfolioItems = [
  { title: 'Community Gala Highlights', category: 'Events', image: '' },
  { title: 'Business Promo — Grand Opening', category: 'Promotional', image: '' },
  { title: 'Brand Story Film', category: 'Commercial', image: '' },
  { title: 'Social Media Campaign', category: 'Social Media', image: '' },
  { title: 'Conference Coverage', category: 'Events', image: '' },
  { title: 'Product Launch Video', category: 'Promotional', image: '' },
];

const testimonials = [
  {
    quote: "Skylight Media Solutions captured our community event beautifully. The video quality was outstanding and they delivered on time. Highly recommend their team!",
    name: 'Abdi Mohamed',
    company: 'Community Organization',
    rating: 5,
  },
  {
    quote: "Professional, creative, and easy to work with. They understood exactly what we needed for our business promotional video and exceeded our expectations.",
    name: 'Fatima Hassan',
    company: 'Local Business Owner',
    rating: 5,
  },
  {
    quote: "From planning to final delivery, Skylight handled everything. Our event coverage looked cinematic and our guests were impressed with the final product.",
    name: 'Omar Ali',
    company: 'Event Organizer',
    rating: 5,
  },
];

const HomePage = () => {
  const { t } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    { icon: Film, key: 'services.videoProduction' },
    { icon: Video, key: 'services.promotional' },
    { icon: Smartphone, key: 'services.socialMedia' },
    { icon: Camera, key: 'services.photography' },
    { icon: Calendar, key: 'services.eventCoverage' },
    { icon: Palette, key: 'services.brandMedia' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Skylight Media Solutions — Professional Video Production" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="relative z-10 container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6">Skylight Media Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
              {t('hero.headline')}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">{t('hero.cta.primary')}</Link>
              <Link to="/portfolio" className="btn-outline">{t('hero.cta.secondary')}</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Recent Productions */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader title={t('featured.title')} subtitle={t('featured.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <ProjectCard
                key={i}
                title={item.title}
                category={item.category}
                image={portfolioGrid}
                onClick={() => setVideoModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-foreground font-display text-xl font-semibold mb-3">{t(key)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(`${key}.desc`)}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase hover:gap-3 transition-all">
                  {t('services.learnMore')} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={150} suffix="+" label={t('stats.projects')} />
            <AnimatedCounter end={80} suffix="+" label={t('stats.clients')} />
            <AnimatedCounter end={5} suffix="+" label={t('stats.years')} />
            <AnimatedCounter end={10} suffix="+" label={t('stats.awards')} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-10 text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].company}</p>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t('cta.title')}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
            <Link to="/contact" className="btn-primary">{t('cta.button')}</Link>
          </motion.div>
        </div>
      </section>

      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Project Video"
      />
    </>
  );
};

export default HomePage;
