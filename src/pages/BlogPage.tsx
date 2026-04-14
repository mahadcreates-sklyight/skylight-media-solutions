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
    title: '10 Cinematic Techniques That Elevate Brand Videos',
    excerpt: 'Discover the professional cinematography techniques that transform ordinary brand videos into compelling visual stories.',
    category: 'Production Tips',
    date: 'March 15, 2026',
    readTime: '8 min read',
    image: heroBg,
  },
  {
    id: 2,
    title: 'The Future of Social Media Video Content',
    excerpt: 'How short-form video is reshaping brand communication and what it means for your marketing strategy.',
    category: 'Industry Insights',
    date: 'March 10, 2026',
    readTime: '6 min read',
    image: serviceVideo,
  },
  {
    id: 3,
    title: 'Behind The Scenes: Our Latest Commercial Shoot',
    excerpt: 'Take a look behind the curtain at the creative process that goes into producing a high-end commercial.',
    category: 'Behind The Scenes',
    date: 'March 5, 2026',
    readTime: '5 min read',
    image: servicePhoto,
  },
  {
    id: 4,
    title: 'Event Coverage: Best Practices for 2026',
    excerpt: 'Essential tips for capturing unforgettable event moments with professional quality.',
    category: 'Production Tips',
    date: 'February 28, 2026',
    readTime: '7 min read',
    image: serviceEvent,
  },
  {
    id: 5,
    title: 'How Video Marketing Drives ROI',
    excerpt: 'Data-driven insights on how video content delivers measurable business results.',
    category: 'Industry Insights',
    date: 'February 20, 2026',
    readTime: '9 min read',
    image: aboutHero,
  },
  {
    id: 6,
    title: 'The Art of Visual Storytelling',
    excerpt: 'Exploring the principles that make visual narratives compelling and memorable.',
    category: 'Creative',
    date: 'February 15, 2026',
    readTime: '6 min read',
    image: portfolioGrid,
  },
];

const categories = ['All', 'Production Tips', 'Industry Insights', 'Behind The Scenes', 'Creative'];

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
          {/* Search & Filters */}
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

          {/* Blog Grid */}
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
