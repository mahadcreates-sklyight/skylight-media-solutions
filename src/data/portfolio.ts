export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: 'EVENT' | 'PROMOTIONAL' | 'COMMERCIAL' | 'BRAND CAMPAIGN';
  description: string;
  videoUrl: string;
  thumbnail: string;
  featured: boolean;
}

// Append ImageKit "original" flag so videos are served from the source file
// without consuming the account's video-transformation quota.
const orig = (url: string) => (url.includes('?') ? `${url}&tr=orig-true` : `${url}?tr=orig-true`);

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: 'community-gala-highlights',
    title: 'Community Gala Highlights',
    category: 'EVENT',
    description:
      'Professional event coverage capturing the atmosphere, key moments, and audience experience of a high-profile community gala.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Event%20Community%20Gala%20Highlights.mp4'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Communitu%20Gala%20Highlights.webp?updatedAt=1776565020293',
    featured: true,
  },
  {
    id: 2,
    slug: 'business-grand-opening-promo',
    title: 'Business Grand Opening Promo',
    category: 'PROMOTIONAL',
    description:
      'A dynamic promotional video showcasing the excitement and branding of a business grand opening event.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/PROMOTIONAL%20business%20grand%20opening%20promo.mp4?updatedAt=1776439130657'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Business%20Grand%20Opening%20Promo.webp?updatedAt=1776565020537',
    featured: true,
  },
  {
    id: 3,
    slug: 'conference-seminar-highlights',
    title: 'Conference & Seminar Highlights',
    category: 'EVENT',
    description:
      'Professional multi-camera coverage capturing keynote speakers, audience engagement, and the energy of a major conference.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Event%20conference%20and%20seminar%20highlights.mp4?updatedAt=1776439142998'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Conference%20and%20Seminar%20Highlights.webp?updatedAt=1776565019999',
    featured: true,
  },
  {
    id: 4,
    slug: 'real-estate-showcase',
    title: 'Real Estate Showcase',
    category: 'COMMERCIAL',
    description:
      'A cinematic real estate promotional video highlighting property design, architecture, and lifestyle appeal.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Commercial%20Real%20Estate%20Showcase.mp4?updatedAt=1776439152571'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Real%20Estate%20Showcase.webp?updatedAt=1776565020305',
    featured: true,
  },
  {
    id: 5,
    slug: 'product-launch-campaign',
    title: 'Product Launch Campaign',
    category: 'BRAND CAMPAIGN',
    description:
      'A visually compelling product launch campaign designed to introduce a new brand product to the market.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Brand%20Campaigns-Product%20Launch%20campaign.mp4?updatedAt=1776439119590'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Product%20launch%20campaign.webp?updatedAt=1776565020709',
    featured: true,
  },
  {
    id: 6,
    slug: 'corporate-brand-story',
    title: 'Corporate Brand Story',
    category: 'COMMERCIAL',
    description:
      'A brand storytelling film that communicates company values, mission, and business identity.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Commercial%20Corporate%20Brand%20Story.mp4?updatedAt=1776439119414'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Corporate%20Brand%20Story.webp?updatedAt=1776565020051',
    featured: true,
  },
  {
    id: 7,
    slug: 'school-documentary',
    title: 'School Documentary',
    category: 'PROMOTIONAL',
    description:
      'A documentary-style production showcasing a school’s programs, achievements, and learning environment.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Documentary%20School.mp4?updatedAt=1776439159364'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Documentary%20School%20Story.webp?updatedAt=1776565020602',
    featured: false,
  },
  {
    id: 8,
    slug: 'non-profit-awareness-video',
    title: 'Non-Profit Awareness Video',
    category: 'PROMOTIONAL',
    description:
      'A social awareness campaign film designed to highlight the mission and impact of a non-profit organization.',
    videoUrl: orig(
      'https://ik.imagekit.io/byyg2uqjs/Portfolio/Promotional%20Non%20profit%20awareness%20video.mp4?updatedAt=1776439159655'
    ),
    thumbnail:
      'https://ik.imagekit.io/byyg2uqjs/Portfolio%20Thumbnails/Non-Profit%20Awareness.webp?updatedAt=1776565020385',
    featured: false,
  },
];

export const portfolioCategories = [
  'All',
  'EVENT',
  'PROMOTIONAL',
  'COMMERCIAL',
  'BRAND CAMPAIGN',
] as const;

export const getFeaturedPortfolio = (limit = 6) =>
  portfolioItems.filter((p) => p.featured).slice(0, limit);
