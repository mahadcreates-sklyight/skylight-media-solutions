import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Video, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from './MediaComponents';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageSquare, title: t('process.step1'), desc: t('process.step1.desc') },
    { icon: ClipboardList, title: t('process.step2'), desc: t('process.step2.desc') },
    { icon: Video, title: t('process.step3'), desc: t('process.step3.desc') },
    { icon: Send, title: t('process.step4'), desc: t('process.step4.desc') },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeader title={t('process.title')} subtitle={t('process.subtitle')} />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <Icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-foreground font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
