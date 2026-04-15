import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { SectionHeader } from '@/components/MediaComponents';
import { Search, ArrowRight, Clock } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import aboutHero from '@/assets/about-hero.jpg';
import portfolioGrid from '@/assets/portfolio-grid.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Why Every Business Needs Professional Video Content',
    excerpt: 'In today\'s digital world, video is the most powerful way to connect with your audience. Here\'s why investing in professional video production pays off for businesses of all sizes.',
    category: 'Business Tips',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image: heroBg,
  },
  {
    id: 2,
    title: 'How to Prepare for Your Event Coverage',
    excerpt: 'Getting the most out of professional event coverage starts with preparation. These tips will help ensure your event is captured perfectly from every angle.',
    category: 'Production Tips',
    date: 'March 10, 2026',
    readTime: '4 min read',
    image: serviceEvent,
  },
  {
    id: 3,
    title: 'The Power of Storytelling in Brand Media',
    excerpt: 'People connect with stories, not sales pitches. Learn how storytelling-driven media content helps businesses build deeper connections with their audience.',
    category: 'Creative Insights',
    date: 'March 5, 2026',
    readTime: '6 min read',
    image: serviceVideo,
  },
  {
    id: 4,
    title: 'Behind the Scenes: How We Produce a Promotional Video',
    excerpt: 'Ever wondered what goes into creating a promotional video? We take you through our process from initial consultation to final delivery.',
    category: 'Behind The Scenes',
    date: 'February 28, 2026',
    readTime: '5 min read',
    image: servicePhoto,
  },
  {
    id: 5,
    title: 'Social Media Video Tips for Small Businesses',
    excerpt: 'You don\'t need a Hollywood budget to create great social media content. Here are practical tips to help your business stand out online with video.',
    category: 'Business Tips',
    date: 'February 20, 2026',
    readTime: '4 min read',
    image: aboutHero,
  },
  {
    id: 6,
    title: 'Why Community Events Deserve Professional Coverage',
    excerpt: 'Community events bring people together and create lasting memories. Professional coverage ensures those moments are preserved and shared with the wider community.',
    category: 'Creative Insights',
    date: 'February 15, 2026',
    readTime: '5 min read',
    image: portfolioGrid,
  },
];

const categories = ['All', 'Business Tips', 'Production Tips', 'Behind The Scenes', 'Creative Insights'];

const BlogPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-display font-bold text-foreground">
            {t('blog.title')}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg mt-4">
            {t('blog.subtitle')}
          </motion.p>
          <div className="w-20 h-0.5 bg-primary mx-auto mt-6" />
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('blog.search')}
                className="w-full bg-secondary border border-border rounded-sm pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-sm text-xs tracking-widest uppercase transition-all ${
                    activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer hover-lift"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs tracking-widest uppercase">{post.category}</span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-foreground font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-primary text-xs tracking-wider uppercase group-hover:gap-2 transition-all">
                      {t('blog.readMore')} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
