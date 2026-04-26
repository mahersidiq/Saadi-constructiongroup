export interface ProjectImage {
  src: string;
  alt: string;
  type: 'exterior' | 'aerial' | 'interior' | 'bath' | 'pool';
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  style: string;
  location: string;
  sqft: string;
  coverImage: string;
  coverAlt: string;
  images: ProjectImage[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-contemporary-houston',
    title: 'Modern Contemporary',
    style: 'Contemporary',
    location: 'The Woodlands, TX',
    sqft: '3,800 sq ft',
    coverImage: '/images/p1-exterior-front.png',
    coverAlt: 'Modern contemporary custom home exterior Houston',
    images: [
      { src: '/images/p1-exterior-front.png', alt: 'Modern contemporary home exterior front', type: 'exterior' },
      { src: '/images/p1-exterior-aerial.png', alt: 'Aerial view modern contemporary home', type: 'aerial' },
      { src: '/images/p1-interior-living.png', alt: 'Open concept living and kitchen interior', type: 'interior' },
      { src: '/images/p1-interior-bath.png', alt: 'Modern master bathroom with walk-in shower', type: 'bath' },
    ],
    tags: ['Contemporary', 'New Construction', 'Design-Build'],
  },
  {
    id: 2,
    slug: 'luxury-estate-with-pool',
    title: 'Luxury Estate',
    style: 'Luxury',
    location: 'Sugar Land, TX',
    sqft: '6,200 sq ft',
    coverImage: '/images/p2-exterior-front.png',
    coverAlt: 'Luxury estate custom home exterior Houston',
    images: [
      { src: '/images/p2-exterior-front.png', alt: 'Luxury estate exterior front at dusk', type: 'exterior' },
      { src: '/images/p2-exterior-aerial.png', alt: 'Aerial view luxury estate with pool', type: 'aerial' },
      { src: '/images/p2-interior-living.png', alt: 'Grand open living room with fireplace', type: 'interior' },
      { src: '/images/p2-interior-bath.png', alt: 'Luxury master bathroom with soaking tub', type: 'bath' },
    ],
    tags: ['Luxury', 'New Construction', 'Pool'],
  },
  {
    id: 3,
    slug: 'french-chateau-estate',
    title: 'French Château Estate',
    style: 'French Country',
    location: 'Katy, TX',
    sqft: '7,500 sq ft',
    coverImage: '/images/p3-exterior-front.png',
    coverAlt: 'French château custom home exterior Houston',
    images: [
      { src: '/images/p3-exterior-front.png', alt: 'French château estate exterior front', type: 'exterior' },
      { src: '/images/p3-exterior-aerial.png', alt: 'Aerial view French château estate', type: 'aerial' },
      { src: '/images/p3-interior-living.png', alt: 'Grand formal living room with arched windows', type: 'interior' },
      { src: '/images/p3-interior-bath.png', alt: 'Luxury marble master bathroom with freestanding tub', type: 'bath' },
    ],
    tags: ['French Country', 'Luxury', 'Design-Build'],
  },
  {
    id: 4,
    slug: 'modern-farmhouse',
    title: 'Modern Farmhouse',
    style: 'Farmhouse',
    location: 'Cypress, TX',
    sqft: '4,100 sq ft',
    coverImage: '/images/p4-exterior-front.png',
    coverAlt: 'Modern farmhouse custom home exterior Houston',
    images: [
      { src: '/images/p4-exterior-front.png', alt: 'Modern farmhouse exterior front at dusk', type: 'exterior' },
      { src: '/images/p4-exterior-aerial.png', alt: 'Aerial view modern farmhouse', type: 'aerial' },
      { src: '/images/p4-interior-living.png', alt: 'Vaulted great room with kitchen and dining', type: 'interior' },
      { src: '/images/p4-interior-bath.png', alt: 'Master bathroom with soaking tub and walk-in shower', type: 'bath' },
    ],
    tags: ['Farmhouse', 'New Construction', 'Design-Build'],
  },
  {
    id: 5,
    slug: 'transitional-luxury',
    title: 'Transitional Luxury',
    style: 'Transitional',
    location: 'Pearland, TX',
    sqft: '5,400 sq ft',
    coverImage: '/images/p5-exterior-front.png',
    coverAlt: 'Transitional luxury custom home exterior Houston',
    images: [
      { src: '/images/p5-exterior-front.png', alt: 'Transitional luxury home exterior at dusk', type: 'exterior' },
      { src: '/images/p5-exterior-aerial.png', alt: 'Aerial view transitional luxury home', type: 'aerial' },
      { src: '/images/p5-interior-living.png', alt: 'Open concept living with stone fireplace and kitchen', type: 'interior' },
      { src: '/images/p5-interior-bath.png', alt: 'Master bath with soaking tub and walk-in shower', type: 'bath' },
    ],
    tags: ['Transitional', 'New Construction', 'Design-Build'],
  },
  {
    id: 6,
    slug: 'traditional-brick-stone',
    title: 'Traditional Brick & Stone',
    style: 'Traditional',
    location: 'Spring, TX',
    sqft: '4,800 sq ft',
    coverImage: '/images/p6-exterior-front.png',
    coverAlt: 'Traditional brick and stone custom home Houston',
    images: [
      { src: '/images/p6-exterior-front.png', alt: 'Traditional brick and stone home exterior at dusk', type: 'exterior' },
      { src: '/images/p6-exterior-aerial.png', alt: 'Aerial view traditional brick home', type: 'aerial' },
      { src: '/images/p6-interior-living.png', alt: 'Open living room with built-ins and gourmet kitchen', type: 'interior' },
      { src: '/images/p6-interior-bath.png', alt: 'Master bathroom with soaking tub and walk-in closet', type: 'bath' },
    ],
    tags: ['Traditional', 'New Construction', 'Design-Build'],
  },
  {
    id: 7,
    slug: 'modern-white-brick',
    title: 'Modern White Brick',
    style: 'Modern',
    location: 'League City, TX',
    sqft: '3,600 sq ft',
    coverImage: '/images/p7-exterior-front.png',
    coverAlt: 'Modern white brick custom home Houston',
    images: [
      { src: '/images/p7-exterior-front.png', alt: 'Modern white brick home exterior', type: 'exterior' },
      { src: '/images/p7-exterior-aerial.png', alt: 'Aerial view modern white brick home', type: 'aerial' },
      { src: '/images/p7-interior-living.png', alt: 'Open living room with kitchen and dining', type: 'interior' },
      { src: '/images/p7-interior-bath.png', alt: 'Spa-style master bathroom with soaking tub', type: 'bath' },
    ],
    tags: ['Modern', 'New Construction', 'Design-Build'],
  },
  {
    id: 8,
    slug: 'ultra-modern-with-pool',
    title: 'Ultra-Modern Residence',
    style: 'Ultra-Modern',
    location: 'Houston, TX',
    sqft: '6,800 sq ft',
    coverImage: '/images/p8-exterior-front.png',
    coverAlt: 'Ultra-modern luxury custom home Houston TX',
    images: [
      { src: '/images/p8-exterior-front.png', alt: 'Ultra-modern home exterior front at dusk Houston', type: 'exterior' },
      { src: '/images/p8-exterior-aerial.png', alt: 'Aerial view ultra-modern Houston home with pool', type: 'aerial' },
      { src: '/images/p8-exterior-pool.png', alt: 'Backyard pool and outdoor living ultra-modern home', type: 'pool' },
      { src: '/images/p8-interior-living.png', alt: 'Double-height living room with pool view and fireplace', type: 'interior' },
      { src: '/images/p8-interior-bath.png', alt: 'Spa-inspired master bathroom with freestanding tub', type: 'bath' },
    ],
    tags: ['Ultra-Modern', 'Luxury', 'Pool', 'Design-Build'],
  },
];
