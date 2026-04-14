import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Skylight Media transformed our brand's visual identity. Their cinematic approach to our commercial campaign exceeded all expectations and delivered results beyond our projections.",
    name: 'Sarah Johnson',
    company: 'TechVision Inc.',
    role: 'Chief Marketing Officer',
    rating: 5,
  },
  {
    quote: "Working with Skylight was an incredible experience. They understood our vision perfectly and delivered content that truly resonates with our audience across all platforms.",
    name: 'Ahmed Hassan',
    company: 'Global Ventures',
    role: 'Brand Director',
    rating: 5,
  },
  {
    quote: "The quality of production and attention to detail is unmatched. Skylight Media is our go-to partner for all media projects. Their team is professional, creative, and reliable.",
    name: 'Maria Rodriguez',
    company: 'Luxe Brands',
    role: 'VP of Marketing',
    rating: 5,
  },
  {
    quote: "From concept to final delivery, the team at Skylight demonstrated exceptional creativity and professionalism. Our event coverage was absolutely stunning.",
    name: 'James Mitchell',
    company: 'Apex Events',
    role: 'CEO',
    rating: 5,
  },
  {
    quote: "Our social media presence was completely transformed after partnering with Skylight. The content they create is engaging, on-brand, and consistently delivers results.",
    name: 'Fatima Al-Rashid',
    company: 'Bloom Digital',
    role: 'Social Media Director',
    rating: 5,
  },
  {
    quote: "Skylight's documentary work for our foundation was deeply moving and effective. It helped us raise over $2 million in donations and attracted hundreds of new volunteers.",
    name: 'Dr. Amina Osman',
    company: 'Global Impact Foundation',
    role: 'Executive Director',
    rating: 5,
  },
];

const TestimonialsPage = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('testimonials.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4">
            {t('testimonials.subtitle')}
          </motion.p>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-12 md:p-16 text-center"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
              <p className="text-foreground text-xl md:text-2xl leading-relaxed italic mb-8">
                "{testimonials[currentSlide].quote}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[currentSlide].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground font-display text-xl font-semibold">{testimonials[currentSlide].name}</p>
              <p className="text-primary text-sm mt-1">{testimonials[currentSlide].role}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentSlide].company}</p>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground font-semibold">{t.name}</p>
                  <p className="text-primary text-xs">{t.role}</p>
                  <p className="text-muted-foreground text-xs">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
