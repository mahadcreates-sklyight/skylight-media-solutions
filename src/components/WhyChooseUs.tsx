import { motion } from 'framer-motion';
import { Award, Camera, Sparkles, Clock, Layers } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from './MediaComponents';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Award, title: t('why.experienced'), desc: t('why.experienced.desc') },
    { icon: Camera, title: t('why.equipment'), desc: t('why.equipment.desc') },
    { icon: Sparkles, title: t('why.creative'), desc: t('why.creative.desc') },
    { icon: Clock, title: t('why.reliable'), desc: t('why.reliable.desc') },
    { icon: Layers, title: t('why.complete'), desc: t('why.complete.desc') },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader title={t('why.title')} subtitle={t('why.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-7 hover-lift group"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
