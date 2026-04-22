import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Search, ArrowRight, Clock, X } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import serviceVideo from '@/assets/service-video.jpg';
import servicePhoto from '@/assets/service-photo.jpg';
import serviceEvent from '@/assets/service-event.jpg';
import aboutHero from '@/assets/about-hero.jpg';
import portfolioGrid from '@/assets/portfolio-grid.jpg';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: { heading?: string; body: string }[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Why Every Business Needs Professional Video Content',
    excerpt:
      "In today's digital world, video is the most powerful way to connect with your audience. Here's why investing in professional video production pays off for businesses of all sizes.",
    category: 'Business Tips',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image: heroBg,
    content: [
      {
        body: "Video has become the most consumed form of content on the internet. From short clips on social media to long-form storytelling on websites, audiences expect motion, sound, and emotion when they engage with a brand. For businesses, this shift is no longer optional — it is the difference between being scrolled past and being remembered.",
      },
      {
        heading: 'Video builds instant trust',
        body: "A professionally produced video communicates credibility within the first few seconds. Lighting, framing, audio quality, and editing all signal to viewers that your brand takes itself seriously. When customers see a polished video, they unconsciously associate that quality with the products or services you offer.",
      },
      {
        heading: 'Higher engagement and conversions',
        body: "Studies consistently show that pages with video content keep visitors on site longer and convert at significantly higher rates than text-only pages. A single 60-second brand video can replace paragraphs of copy and deliver the message more effectively.",
      },
      {
        heading: 'Versatile content for every channel',
        body: "One professional shoot can produce dozens of assets — a hero film for your homepage, short cuts for Instagram and TikTok, testimonials for your sales pipeline, and ad creatives for paid campaigns. The investment compounds over time.",
      },
      {
        heading: 'The bottom line',
        body: "If your competitors are publishing professional video and you are not, you are falling behind in the channels where your customers spend most of their attention. Investing in professional production is no longer a luxury — it is a core part of modern marketing.",
      },
    ],
  },
  {
    id: 2,
    title: 'How to Prepare for Your Event Coverage',
    excerpt:
      'Getting the most out of professional event coverage starts with preparation. These tips will help ensure your event is captured perfectly from every angle.',
    category: 'Production Tips',
    date: 'March 10, 2026',
    readTime: '4 min read',
    image: serviceEvent,
    content: [
      {
        body: "A great event film does not start when the cameras roll — it starts weeks before, in the planning room. The more context the production team has, the better the final coverage will be.",
      },
      {
        heading: '1. Share a clear run of show',
        body: "Provide a minute-by-minute schedule highlighting key moments: opening remarks, awards, performances, surprise reveals, and closing. This allows the crew to position cameras strategically and never miss a critical scene.",
      },
      {
        heading: '2. Identify your VIPs',
        body: "Tell the team who must be captured — speakers, sponsors, founders, special guests. A short list with photos prevents missed shots in a crowded room.",
      },
      {
        heading: '3. Walk the venue in advance',
        body: "Lighting, sound, and angles all depend on the space. A pre-event walkthrough lets the crew plan power, audio feeds from the soundboard, and camera placements that avoid blocking sightlines for guests.",
      },
      {
        heading: '4. Define the deliverables upfront',
        body: "Do you need a 60-second highlight reel for social, a long-form recap for sponsors, vertical clips for Reels, or all of the above? Clarifying this before the shoot ensures the crew captures the right footage in the right format.",
      },
      {
        heading: '5. Trust the team',
        body: "Once production starts, focus on hosting your event. A professional crew is trained to read the room, adapt to changes, and capture authentic moments without direction.",
      },
    ],
  },
  {
    id: 3,
    title: 'The Power of Storytelling in Brand Media',
    excerpt:
      'People connect with stories, not sales pitches. Learn how storytelling-driven media content helps businesses build deeper connections with their audience.',
    category: 'Creative Insights',
    date: 'March 5, 2026',
    readTime: '6 min read',
    image: serviceVideo,
    content: [
      {
        body: "The brands that win attention today are not the ones shouting the loudest — they are the ones telling the most compelling stories. Storytelling transforms a product into a movement and a service into a promise.",
      },
      {
        heading: 'Why stories work',
        body: "The human brain is wired for narrative. When we hear a story, multiple regions of the brain activate, releasing oxytocin and creating emotional memory. A list of features fades quickly; a story about a real customer overcoming a real challenge stays with us.",
      },
      {
        heading: 'The anatomy of a brand story',
        body: "Every strong brand story has three elements: a relatable character (often the customer), a meaningful conflict or challenge, and a transformation that your brand makes possible. Position the customer as the hero — your brand is the guide.",
      },
      {
        heading: 'Show, do not tell',
        body: "Instead of saying 'we are passionate about quality,' show a craftsman at 5 a.m. perfecting a detail no one will notice. Instead of saying 'our customers love us,' film a real customer talking about how the product changed their day.",
      },
      {
        heading: 'Consistency builds the universe',
        body: "Great brand storytelling is not one video — it is an ongoing series of moments that reinforce the same values across every touchpoint. Over time, the audience does not just buy your product, they buy into the world you have built.",
      },
    ],
  },
  {
    id: 4,
    title: 'Behind the Scenes: How We Produce a Promotional Video',
    excerpt:
      'Ever wondered what goes into creating a promotional video? We take you through our process from initial consultation to final delivery.',
    category: 'Behind The Scenes',
    date: 'February 28, 2026',
    readTime: '5 min read',
    image: servicePhoto,
    content: [
      {
        body: "A 60-second promotional video may look effortless on screen, but behind every polished frame is a structured process that turns ideas into cinematic results. Here is how we approach every project.",
      },
      {
        heading: 'Phase 1 — Discovery',
        body: "We start with a detailed conversation about your business, audience, goals, and brand personality. This shapes the creative direction and ensures the final video aligns with your marketing strategy, not just your aesthetic preferences.",
      },
      {
        heading: 'Phase 2 — Concept and script',
        body: "Our team develops a clear concept, a tight script, and a shot list. You approve every detail before a single camera is set up, so there are no surprises on production day.",
      },
      {
        heading: 'Phase 3 — Pre-production',
        body: "Locations are scouted, talent is cast, equipment is prepared, and a detailed shooting schedule is built. Pre-production is where great projects are won — careful planning means a smooth, efficient shoot.",
      },
      {
        heading: 'Phase 4 — Production day',
        body: "Cameras roll. Our crew handles lighting, sound, directing, and capture. We shoot more coverage than we need to give the editor maximum flexibility in post.",
      },
      {
        heading: 'Phase 5 — Post-production',
        body: "Editing, color grading, sound design, music, and motion graphics come together. You receive a first cut, share feedback, and we refine the video until it is exactly right.",
      },
      {
        heading: 'Phase 6 — Delivery',
        body: "We export the final video in every format you need — landscape for YouTube, square for Instagram, vertical for Reels and TikTok — ready to publish across all your channels.",
      },
    ],
  },
  {
    id: 5,
    title: 'Social Media Video Tips for Small Businesses',
    excerpt:
      "You don't need a Hollywood budget to create great social media content. Here are practical tips to help your business stand out online with video.",
    category: 'Business Tips',
    date: 'February 20, 2026',
    readTime: '4 min read',
    image: aboutHero,
    content: [
      {
        body: "Social media rewards consistency more than perfection. With a few smart habits, even a small business with limited resources can build a video presence that drives real engagement.",
      },
      {
        heading: '1. Hook viewers in the first 3 seconds',
        body: "Attention is the most expensive currency online. Open with a surprising visual, a bold statement, or a question that makes scrollers stop. If you lose them in the first 3 seconds, you lose them entirely.",
      },
      {
        heading: '2. Shoot vertical first',
        body: "More than 80% of social video is consumed on mobile in vertical format. Frame your shots for 9:16 from the start instead of cropping landscape footage afterwards.",
      },
      {
        heading: '3. Add captions',
        body: "Most users watch video with the sound off. Burned-in captions or animated text dramatically increase watch time and accessibility.",
      },
      {
        heading: '4. Keep it short and focused',
        body: "One idea per video. 15 to 45 seconds is the sweet spot for most platforms. Save the longer storytelling for YouTube and your website.",
      },
      {
        heading: '5. Post consistently',
        body: "Three good videos per week beats one perfect video per month. The algorithm and your audience both reward brands that show up regularly.",
      },
      {
        heading: '6. Invest in one professional anchor video',
        body: "While most of your content can be self-shot, having one professionally produced brand video as the centerpiece of your profile dramatically raises perceived quality across all your content.",
      },
    ],
  },
  {
    id: 6,
    title: 'Why Community Events Deserve Professional Coverage',
    excerpt:
      'Community events bring people together and create lasting memories. Professional coverage ensures those moments are preserved and shared with the wider community.',
    category: 'Creative Insights',
    date: 'February 15, 2026',
    readTime: '5 min read',
    image: portfolioGrid,
    content: [
      {
        body: "Community events are more than gatherings — they are milestones in the life of a neighborhood, a school, a church, or an organization. Capturing them professionally ensures those moments live on long after the last guest leaves.",
      },
      {
        heading: 'Preserve the energy',
        body: "Smartphone clips capture moments, but professional coverage captures atmosphere — the lighting, the crowd reactions, the speeches, the laughter. A well-edited highlight film can transport viewers back to the room years later.",
      },
      {
        heading: 'Build momentum for next year',
        body: "A polished recap video is the most powerful tool for promoting your next event. It shows sponsors what their support helped create and gives potential attendees a reason to register early.",
      },
      {
        heading: 'Honor sponsors and partners',
        body: "Professional coverage allows you to deliver branded recap content to sponsors, demonstrating real value and strengthening relationships for future partnerships.",
      },
      {
        heading: 'Share the story widely',
        body: "Short clips for social media, a full recap for your website, and individual speaker reels for outreach — one event shoot becomes weeks of high-quality content that extends the impact of a single afternoon.",
      },
      {
        heading: 'Document the legacy',
        body: "Communities grow and change. The events you host today are the history future members will look back on. Professional coverage is an investment in the legacy of your organization.",
      },
    ],
  },
];

const categories = ['All', 'Business Tips', 'Production Tips', 'Behind The Scenes', 'Creative Insights'];

const BlogPage = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filtered = blogPosts.filter((post) => {
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
              {categories.map((cat) => (
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
                onClick={() => setActivePost(post)}
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
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePost(post);
                      }}
                      className="inline-flex items-center gap-1 text-primary text-xs tracking-wider uppercase group-hover:gap-2 transition-all"
                    >
                      {t('blog.readMore')} <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setActivePost(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl mx-auto my-10 bg-card border border-border rounded-lg overflow-hidden shadow-[0_25px_70px_-15px_hsl(var(--primary)/0.4)]"
            >
              <button
                onClick={() => setActivePost(null)}
                aria-label="Close article"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video overflow-hidden">
                <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-xs tracking-widest uppercase">{activePost.category}</span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {activePost.readTime}
                  </span>
                  <span className="text-muted-foreground text-xs">• {activePost.date}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                  {activePost.title}
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8 italic border-l-2 border-primary pl-4">
                  {activePost.excerpt}
                </p>

                <div className="space-y-6">
                  {activePost.content.map((block, idx) => (
                    <div key={idx}>
                      {block.heading && (
                        <h3 className="text-foreground font-display text-xl font-semibold mb-2">
                          {block.heading}
                        </h3>
                      )}
                      <p className="text-muted-foreground leading-relaxed">{block.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-border flex justify-end">
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-6 py-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogPage;
