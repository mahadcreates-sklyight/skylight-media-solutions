import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import AnimatedCounter from '@/components/AnimatedCounter';
import { ProjectCard, VideoPlayerModal, SectionHeader } from '@/components/MediaComponents';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import { DigitalMarketingPackages, EventPackages } from '@/components/Packages';
import { Star, Quote } from 'lucide-react';
import { getFeaturedPortfolio, type PortfolioItem } from '@/data/portfolio';

// `tr=orig-true` serves the original MP4 from ImageKit and bypasses the
// account's video-transformation quota (which was returning 403 errors).
const HERO_VIDEO_URL =
  'https://ik.imagekit.io/byyg2uqjs/HOME%20PAGE%20HERO%20VIDEO/OUR%20BRAND%20VIDEO.mp4?updatedAt=1776473723260&tr=orig-true';

const SERVICE_ICONS = {
  videoProduction: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Video%20Production%20icon.webp?updatedAt=1776473595749',
  digitalMarketing: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Digital%20Marketing%20Icon.webp?updatedAt=1776473595692',
  socialMedia: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Social%20Media%20Icon.webp?updatedAt=1776473595751',
  photography: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Photography%20Icon.webp?updatedAt=1776473596199',
  eventCoverage: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Event%20Coverage%20Icon.webp?updatedAt=1776473595522',
  printing: 'https://ik.imagekit.io/byyg2uqjs/Service%20Icons/Printing%20Icon.webp?updatedAt=1776473596466',
};

const featuredProductions = getFeaturedPortfolio(6);

const testimonials = [
  {
    quote: "Skylight covered our graduation from start to finish — the live stream, photos, and edited video were all top quality. Our families abroad watched everything live.",
    name: 'School Administrator',
    company: 'Education Sector',
    rating: 5,
  },
  {
    quote: "Professional, creative, and easy to work with. Their Facebook ad campaign and posters helped us reach more customers than ever before.",
    name: 'Business Owner',
    company: 'Local Business',
    rating: 5,
  },
  {
    quote: "From the signboard to the brochures and the launch video — Skylight handled everything in one place. Saved us so much time.",
    name: 'Event Organizer',
    company: 'Community Event',
    rating: 5,
  },
];

const HomePage = () => {
  const { t } = useLanguage();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProduction, setSelectedProduction] = useState<PortfolioItem | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroMuted, setHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  const toggleHeroSound = () => {
    const v = heroVideoRef.current;
    if (!v) return;
    const next = !heroMuted;
    v.muted = next;
    if (!next) {
      v.play().catch(() => {});
    }
    setHeroMuted(next);
  };

  const services = [
    { icon: Film, key: 'services.videoProduction' },
    { icon: Megaphone, key: 'services.promotional' },
    { icon: Smartphone, key: 'services.socialMedia' },
    { icon: Camera, key: 'services.photography' },
    { icon: Calendar, key: 'services.eventCoverage' },
    { icon: Printer, key: 'services.brandMedia' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        >
          <video
            ref={heroVideoRef}
            src={HERO_VIDEO_URL}
            poster={heroBg}
            autoPlay
            muted={heroMuted}
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Cinematic dark layer + brand-tinted gradient */}
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/60 mix-blend-multiply" />
          <div className="absolute inset-0 cinematic-overlay" />
        </motion.div>

        {/* Sound toggle for hero video (autoplay must start muted per browser policy) */}
        <button
          type="button"
          onClick={toggleHeroSound}
          aria-label={heroMuted ? 'Unmute hero video' : 'Mute hero video'}
          className="absolute bottom-8 right-6 md:right-10 z-20 w-12 h-12 rounded-full bg-background/60 backdrop-blur-md border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center shadow-lg"
        >
          {heroMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
        <div className="relative z-10 container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-primary text-xs md:text-sm tracking-[0.5em] uppercase font-medium">
                Skylight Media Solutions
              </span>
              <span className="h-px w-10 bg-primary/60" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 max-w-5xl mx-auto">
              <span className="block text-foreground">Creative Media &amp;</span>
              <span className="block gradient-text">Advertising Solutions</span>
              <span className="block text-foreground/90 text-3xl md:text-4xl lg:text-5xl mt-3 font-display italic font-medium">
                that elevate your brand
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Professional videography, digital marketing, and printing services
              <span className="text-foreground/80"> crafted to bring your ideas to life.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio" className="btn-primary">{t('hero.cta.primary')}</Link>
              <Link to="/contact" className="btn-outline">{t('hero.cta.secondary')}</Link>
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
            {featuredProductions.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.thumbnail}
                videoUrl={item.videoUrl}
                onClick={() => {
                  setSelectedProduction(item);
                  setVideoModalOpen(true);
                }}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
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

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process */}
      <ProcessSection />

      {/* Digital Marketing Packages */}
      <DigitalMarketingPackages />

      {/* Event & Graduation Packages */}
      <EventPackages />

      {/* Stats */}
      <section className="section-padding">
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
      <section className="section-padding bg-surface">
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
                  className={`h-3 rounded-full transition-all ${i === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-3'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
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
        videoUrl={selectedProduction?.videoUrl}
        title={selectedProduction?.title || 'Project Video'}
      />
    </>
  );
};

export default HomePage;
