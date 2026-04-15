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
  { src: heroBg, alt: 'On Location — Event Setup', caption: 'Setting up for a community gala coverage' },
  { src: serviceVideo, alt: 'Video Production', caption: 'Behind the scenes — promotional video shoot' },
  { src: servicePhoto, alt: 'Photography Session', caption: 'Professional headshot session for a local business' },
  { src: serviceEvent, alt: 'Event Coverage', caption: 'Multi-camera setup for conference coverage' },
  { src: aboutHero, alt: 'Behind The Scenes', caption: 'Our team in action during a brand shoot' },
  { src: portfolioGrid, alt: 'Final Production', caption: 'Color grading and editing in post-production' },
  { src: heroBg, alt: 'Outdoor Shoot', caption: 'Golden hour filming for a promotional campaign' },
  { src: serviceVideo, alt: 'Interview Setup', caption: 'Client interview setup with professional lighting' },
  { src: serviceEvent, alt: 'Live Event', caption: 'Capturing the energy of a live community event' },
  { src: aboutHero, alt: 'Creative Direction', caption: 'Planning the visual narrative for a brand story' },
  { src: servicePhoto, alt: 'Product Photography', caption: 'Clean product shots for social media content' },
  { src: portfolioGrid, alt: 'Post-Production', caption: 'Reviewing footage in the editing suite' },
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
                  className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
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
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                    <p className="text-foreground text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.caption}</p>
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
                  <p className="absolute bottom-0 left-0 right-0 p-4 text-foreground text-sm bg-gradient-to-t from-background/80 to-transparent">{photo.caption}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

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
