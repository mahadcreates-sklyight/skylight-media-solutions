import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from '@/components/MediaComponents';
import portfolioGrid from '@/assets/portfolio-grid.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import { Quote, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    title: 'Community Cultural Gala — Full Event Production',
    client: 'Community Organization',
    problem: 'A community organization was hosting a large cultural gala and needed professional multi-camera coverage, a highlight reel, and social media content to share with attendees and sponsors afterward.',
    strategy: 'We planned a comprehensive coverage approach with multiple camera angles, dedicated photographer, and a post-event editing timeline that delivered a polished highlight film within one week.',
    production: 'Full-day event coverage with 3 camera setups, roaming photographer, interview segments with organizers and guests, and live-event audio capture.',
    results: ['Professional highlight film delivered in 7 days', 'Social media clips generated thousands of views', 'Client booked us for their next 3 events', 'Sponsors received branded recap content'],
    image: serviceEvent,
    quote: 'Skylight captured every important moment. The highlight video was shared widely and helped us attract more sponsors for next year.',
    quoteName: 'Event Organizer',
    metrics: { views: '15K+', clips: '12', turnaround: '7 days' },
  },
  {
    title: 'Business Grand Opening — Promotional Video',
    client: 'Local Business',
    problem: 'A new business needed a professional promotional video to announce their grand opening, showcase their space, and drive foot traffic from the local community.',
    strategy: 'We created a cinematic promotional video that highlighted the business atmosphere, products, and the owner\'s story — designed for Facebook, Instagram, and in-store display.',
    production: 'Half-day shoot with interior and exterior footage, owner interview, product close-ups, and music-driven editing for maximum engagement.',
    results: ['Video reached 10,000+ people on Facebook', 'Strong opening week foot traffic', 'Content repurposed for ongoing social media', 'Client ordered monthly content package'],
    image: serviceVideo,
    quote: 'The promotional video made our grand opening feel like a real event. People told us they came because they saw the video on Facebook.',
    quoteName: 'Business Owner',
    metrics: { reach: '10K+', engagement: '850+', sales: 'Strong' },
  },
  {
    title: 'Nonprofit Awareness Campaign — Documentary Style',
    client: 'Nonprofit Organization',
    problem: 'A nonprofit needed a compelling awareness video to communicate their mission, attract donors, and recruit volunteers — but had a limited budget.',
    strategy: 'We produced a documentary-style short film featuring real stories from people the organization has helped, combined with interviews from leadership and footage of their programs in action.',
    production: 'Two days of filming across multiple locations, interviews with beneficiaries and staff, b-roll of programs, and professional color grading for a cinematic feel.',
    results: ['Fundraising video helped raise significant donations', 'Volunteer sign-ups increased after video launch', 'Video featured on organization website and events', 'Content shared widely across community networks'],
    image: portfolioGrid,
    quote: 'Skylight understood our mission and told our story in a way that moved people to action. The video was the centerpiece of our entire campaign.',
    quoteName: 'Executive Director',
    metrics: { donations: 'Significant', volunteers: '40+', shares: '500+' },
  },
  {
    title: 'Corporate Conference — Multi-Day Coverage',
    client: 'Professional Association',
    problem: 'A professional association hosting a 2-day conference needed comprehensive video coverage for post-event content, speaker highlight reels, and attendee testimonials.',
    strategy: 'We deployed a two-person crew for full coverage, capturing keynote speakers, panel discussions, networking moments, and short attendee interviews for a complete content package.',
    production: 'Two full days of filming with dual camera setups for main stage, roaming coverage for breakout sessions, and on-site interviews.',
    results: ['Complete event recap video delivered', 'Individual speaker clips for social media', 'Attendee testimonial compilation', 'Organization used content for next year\'s marketing'],
    image: heroBg,
    quote: 'The team was professional and unobtrusive. They captured the energy of our conference perfectly.',
    quoteName: 'Conference Director',
    metrics: { hours: '20+', clips: '25', satisfaction: '100%' },
  },
];

const CaseStudiesPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={serviceVideo} alt="Case Studies" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('caseStudies.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4">
            {t('caseStudies.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-32">
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <p className="text-primary text-sm tracking-widest uppercase mb-2">{study.client}</p>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{study.title}</h2>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {Object.entries(study.metrics).map(([key, val]) => (
                  <div key={key} className="glass-card p-6 text-center">
                    <div className="text-3xl font-display font-bold gradient-text mb-1">{val}</div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase">{key}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8">
                  <h3 className="text-primary text-sm tracking-widest uppercase mb-3">{t('caseStudies.problem')}</h3>
                  <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                </div>
                <div className="glass-card p-8">
                  <h3 className="text-primary text-sm tracking-widest uppercase mb-3">{t('caseStudies.strategy')}</h3>
                  <p className="text-muted-foreground leading-relaxed">{study.strategy}</p>
                </div>
                <div className="glass-card p-8">
                  <h3 className="text-primary text-sm tracking-widest uppercase mb-3">{t('caseStudies.production')}</h3>
                  <p className="text-muted-foreground leading-relaxed">{study.production}</p>
                </div>
                <div className="glass-card p-8">
                  <h3 className="text-primary text-sm tracking-widest uppercase mb-3">{t('caseStudies.results')}</h3>
                  <ul className="space-y-2">
                    {study.results.map((r, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-card p-10 text-center max-w-3xl mx-auto">
                <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                <p className="text-foreground text-lg italic leading-relaxed mb-4">"{study.quote}"</p>
                <p className="text-primary text-sm">{study.quoteName}</p>
              </div>

              {i < caseStudies.length - 1 && <div className="w-20 h-px bg-border mx-auto" />}
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
