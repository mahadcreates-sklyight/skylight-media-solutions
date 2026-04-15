import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader, ProjectCard, VideoPlayerModal } from '@/components/MediaComponents';
import portfolioGrid from '@/assets/portfolio-grid.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import serviceEvent from '@/assets/service-event.jpg';

const projects = [
  { id: 1, title: 'Community Gala — Full Coverage', category: 'Events', image: serviceEvent },
  { id: 2, title: 'Business Grand Opening Promo', category: 'Promotional', image: serviceVideo },
  { id: 3, title: 'Corporate Brand Story', category: 'Commercial', image: portfolioGrid },
  { id: 4, title: 'Social Media Series — Restaurant', category: 'Social Media', image: servicePhoto },
  { id: 5, title: 'Conference & Seminar Highlights', category: 'Events', image: heroBg },
  { id: 6, title: 'Product Launch Campaign', category: 'Brand Campaigns', image: portfolioGrid },
  { id: 7, title: 'Wedding Highlight Film', category: 'Events', image: serviceEvent },
  { id: 8, title: 'Nonprofit Awareness Video', category: 'Promotional', image: serviceVideo },
  { id: 9, title: 'Real Estate Showcase', category: 'Commercial', image: servicePhoto },
];

const categories = ['All', 'Commercial', 'Promotional', 'Social Media', 'Events', 'Brand Campaigns'];

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const catKeys: Record<string, string> = {
    'All': 'portfolio.all',
    'Commercial': 'portfolio.commercial',
    'Promotional': 'portfolio.promotional',
    'Social Media': 'portfolio.socialMedia',
    'Events': 'portfolio.events',
    'Brand Campaigns': 'portfolio.brandCampaigns',
  };

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={portfolioGrid} alt="Our Work" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('portfolio.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4">
            {t('portfolio.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-sm text-xs tracking-widest uppercase transition-all ${
                  activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(catKeys[cat])}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                onClick={() => { setSelectedProject(project); setVideoOpen(true); }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <VideoPlayerModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        title={selectedProject?.title}
      />
    </>
  );
};

export default PortfolioPage;
