import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import aboutHero from '@/assets/about-hero.jpg';
import { SectionHeader } from '@/components/MediaComponents';
import { Target, Eye, Lightbulb, BookOpen } from 'lucide-react';

const teamMembers = [
  { name: 'Creative Director', role: 'Vision & Strategy', image: '' },
  { name: 'Lead Videographer', role: 'Production & Filming', image: '' },
  { name: 'Editor', role: 'Post-Production', image: '' },
  { name: 'Media Coordinator', role: 'Client Relations', image: '' },
];

const timeline = [
  { year: 'Founded', title: 'The Beginning', desc: 'Started with a passion for visual storytelling and a commitment to quality media production' },
  { year: 'Growth', title: 'Building Our Portfolio', desc: 'Expanded into event coverage, promotional videos, and brand media for diverse clients' },
  { year: 'Community', title: 'Trusted Partner', desc: 'Became the go-to production team for community events, businesses, and organizations' },
  { year: 'Today', title: 'Full-Service Production', desc: 'Offering comprehensive media solutions from concept to delivery across multiple industries' },
];

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    { icon: BookOpen, title: t('about.story.title'), text: t('about.story.text') },
    { icon: Target, title: t('about.mission.title'), text: t('about.mission.text') },
    { icon: Eye, title: t('about.vision.title'), text: t('about.vision.text') },
    { icon: Lightbulb, title: t('about.philosophy.title'), text: t('about.philosophy.text') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="About Skylight Media Solutions" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground"
          >
            {t('about.title')}
          </motion.h1>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-display text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader title="Our Journey" subtitle="How we grew from a small creative team into a trusted media production partner" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2" />
                <div className="flex-1 ml-12 md:ml-0">
                  <span className="text-primary text-sm tracking-widest font-semibold">{item.year}</span>
                  <h4 className="text-foreground font-display text-xl font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader title={t('about.team.title')} subtitle="The creative professionals behind every production" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-6xl font-display">
                    {member.name[0]}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-foreground font-display text-lg font-semibold">{member.name}</h4>
                  <p className="text-primary text-sm mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
