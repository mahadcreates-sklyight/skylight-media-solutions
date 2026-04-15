import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Skylight Media Solutions captured our community gala perfectly. Every key moment was filmed beautifully and the highlight video was ready faster than we expected. Our community loved it!",
    name: 'Abdi Mohamed',
    company: 'Community Organization',
    role: 'Event Coordinator',
    rating: 5,
  },
  {
    quote: "We needed a promotional video for our business grand opening. Skylight delivered a professional, engaging video that we shared on social media and it brought real customers through our doors.",
    name: 'Fatima Hassan',
    company: 'Local Business',
    role: 'Business Owner',
    rating: 5,
  },
  {
    quote: "Professional and reliable. They understood our vision from the first meeting and the final product was exactly what we needed. The quality speaks for itself.",
    name: 'Omar Ali',
    company: 'Corporate Client',
    role: 'Marketing Manager',
    rating: 5,
  },
  {
    quote: "We hired Skylight for our conference coverage and they were incredible. Multi-camera setup, speaker highlights, attendee interviews — everything was captured and edited to perfection.",
    name: 'Amina Yusuf',
    company: 'Professional Association',
    role: 'Conference Director',
    rating: 5,
  },
  {
    quote: "Our nonprofit needed a powerful awareness video on a limited budget. Skylight went above and beyond — the documentary-style film moved people to donate and volunteer.",
    name: 'Hassan Ibrahim',
    company: 'Nonprofit Organization',
    role: 'Executive Director',
    rating: 5,
  },
  {
    quote: "The social media content Skylight creates for us consistently drives engagement. They understand our brand and know how to make content that connects with our audience.",
    name: 'Sahra Ahmed',
    company: 'E-commerce Business',
    role: 'Social Media Manager',
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

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground font-semibold">{testimonial.name}</p>
                  <p className="text-primary text-xs">{testimonial.role}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.company}</p>
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
