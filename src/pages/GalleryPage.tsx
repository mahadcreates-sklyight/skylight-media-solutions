import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from '@/components/MediaComponents';
import { X, Play } from 'lucide-react';
import portfolioGrid from '@/assets/portfolio-grid.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import aboutHero from '@/assets/about-hero.jpg';

const photos = [
  { src: heroBg, alt: 'Production Set' },
  { src: serviceVideo, alt: 'Commercial Shoot' },
  { src: servicePhoto, alt: 'Photography Session' },
  { src: serviceEvent, alt: 'Event Coverage' },
  { src: aboutHero, alt: 'Behind The Scenes' },
  { src: portfolioGrid, alt: 'Project Collage' },
  { src: heroBg, alt: 'Studio Setup' },
  { src: serviceVideo, alt: 'On Location' },
  { src: serviceEvent, alt: 'Live Event' },
  { src: aboutHero, alt: 'Creative Direction' },
  { src: servicePhoto, alt: 'Product Photography' },
  { src: portfolioGrid, alt: 'Final Cut' },
];

const GalleryPage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const masonrySizes = ['aspect-square', 'aspect-[3/4]', 'aspect-video', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]'];

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="Media Gallery" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('gallery.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4">
            {t('gallery.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {(['photos', 'videos'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-sm text-xs tracking-widest uppercase transition-all ${
                  activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(`gallery.${tab}`)}
              </button>
            ))}
          </div>

          {activeTab === 'photos' ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <div className={masonrySizes[i % masonrySizes.length]}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.slice(0, 6).map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-video relative rounded-lg overflow-hidden cursor-pointer group"
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/60 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
