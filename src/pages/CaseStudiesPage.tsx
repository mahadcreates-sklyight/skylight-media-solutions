import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from '@/components/MediaComponents';
import portfolioGrid from '@/assets/portfolio-grid.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import { TrendingUp, Quote, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    title: 'Global Tech Brand Launch',
    client: 'TechVision Inc.',
    problem: 'A leading tech company needed to launch their flagship product to a global audience with a campaign that would generate massive engagement and brand awareness.',
    strategy: 'We developed a multi-platform content strategy combining cinematic hero films, social media micro-content, and influencer partnerships.',
    production: 'Over 3 weeks of production across 4 locations, our team captured 200+ hours of footage with a crew of 25 professionals.',
    results: ['300% increase in brand awareness', '2.5M views in first week', '45% increase in product inquiries', '15 industry awards'],
    image: portfolioGrid,
    quote: 'Skylight Media delivered beyond our wildest expectations. The campaign was a game-changer for our brand.',
    quoteName: 'James Mitchell, CMO',
    metrics: { views: '2.5M', engagement: '45%', roi: '320%' },
  },
  {
    title: 'Luxury Fashion Campaign',
    client: 'Luxe Brands',
    problem: 'A luxury fashion house needed to reposition their brand for a younger demographic without losing their premium identity.',
    strategy: 'We created an immersive visual narrative that blended traditional craftsmanship with modern lifestyle, targeting Gen Z and Millennials.',
    production: 'A week-long production in Paris and Milan featuring top models and cutting-edge cinematography techniques.',
    results: ['500% social media growth', '1.8M campaign impressions', '28% increase in sales', 'Featured in Vogue'],
    image: serviceVideo,
    quote: 'The team understood our brand DNA perfectly and translated it into content that resonated with our new audience.',
    quoteName: 'Sofia Laurent, Brand Director',
    metrics: { views: '1.8M', engagement: '62%', roi: '280%' },
  },
  {
    title: 'Non-Profit Awareness Film',
    client: 'Global Impact Foundation',
    problem: 'A non-profit organization needed to raise awareness and drive donations for clean water initiatives in East Africa.',
    strategy: 'We produced a powerful documentary-style film that told real stories of communities impacted by water scarcity.',
    production: '2 weeks of on-location filming in Kenya, capturing authentic stories with a small, agile crew.',
    results: ['$2.1M in donations raised', '5M+ views across platforms', '200% increase in volunteers', 'Sundance Film Festival selection'],
    image: serviceEvent,
    quote: 'This film changed lives. Skylight Media captured the essence of our mission beautifully.',
    quoteName: 'Dr. Amina Osman, Executive Director',
    metrics: { views: '5M+', engagement: '78%', roi: '450%' },
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
              {/* Hero Image */}
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <p className="text-primary text-sm tracking-widest uppercase mb-2">{study.client}</p>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{study.title}</h2>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(study.metrics).map(([key, val]) => (
                  <div key={key} className="glass-card p-6 text-center">
                    <div className="text-3xl font-display font-bold gradient-text mb-1">{val}</div>
                    <p className="text-muted-foreground text-xs tracking-widest uppercase">{key}</p>
                  </div>
                ))}
              </div>

              {/* Content */}
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

              {/* Quote */}
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
