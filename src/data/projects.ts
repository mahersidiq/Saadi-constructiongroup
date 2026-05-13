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

const commonTags = ['New Construction', 'Design-Build'];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-contemporary-houston',
    title: 'Modern Contemporary',
    style: 'Contemporary',
    location: 'The Woodlands, TX',
    sqft: '3,800 sq ft',
    coverImage: '/images/p1-interior-bath.png',
    coverAlt: 'Modern contemporary custom home exterior with warm wood accents at dusk',
    images: [
      { src: '/images/p1-interior-bath.png', alt: 'Modern contemporary custom home exterior with wood and stucco detailing', type: 'exterior' },
      { src: '/images/p1-interior-living.png', alt: 'Aerial view of modern contemporary custom home and landscaping', type: 'aerial' },
      { src: '/images/p1-exterior-aerial.png', alt: 'Warm open living, dining, and kitchen interior with outdoor connection', type: 'interior' },
      { src: '/images/p1-exterior-front.png', alt: 'Contemporary bathroom with double vanity and glass shower', type: 'bath' },
    ],
    tags: ['Contemporary', ...commonTags],
  },
  {
    id: 2,
    slug: 'luxury-estate-with-pool',
    title: 'Luxury Estate',
    style: 'Luxury Estate',
    location: 'Sugar Land, TX',
    sqft: '6,200 sq ft',
    coverImage: '/images/p2-interior-bath.png',
    coverAlt: 'Luxury estate custom home exterior at dusk with landscape lighting',
    images: [
      { src: '/images/p2-interior-bath.png', alt: 'Luxury custom estate front elevation at dusk', type: 'exterior' },
      { src: '/images/p2-interior-living.png', alt: 'Aerial view of luxury estate with pool and outdoor living', type: 'aerial' },
      { src: '/images/p2-exterior-aerial.png', alt: 'Light-filled luxury living room opening to a pool terrace', type: 'interior' },
      { src: '/images/p2-exterior-front.png', alt: 'Large luxury primary bathroom with tub and glass shower', type: 'bath' },
    ],
    tags: ['Luxury Estate', 'Pool', 'New Construction'],
  },
  {
    id: 3,
    slug: 'french-chateau-estate',
    title: 'French Château Estate',
    style: 'French Country',
    location: 'Katy, TX',
    sqft: '7,500 sq ft',
    coverImage: '/images/p3-interior-bath.png',
    coverAlt: 'French country château exterior with arched entry and stone detailing',
    images: [
      { src: '/images/p3-interior-bath.png', alt: 'French country estate exterior with arched entry and warm lighting', type: 'exterior' },
      { src: '/images/p3-interior-living.png', alt: 'Aerial view of French country custom home estate', type: 'aerial' },
      { src: '/images/p3-exterior-aerial.png', alt: 'Grand interior living space with arched windows and chandelier', type: 'interior' },
      { src: '/images/p3-exterior-front.png', alt: 'Marble bathroom with freestanding tub and chandelier', type: 'bath' },
    ],
    tags: ['French Country', 'Luxury Estate', 'Design-Build'],
  },
  {
    id: 4,
    slug: 'modern-farmhouse',
    title: 'Modern Farmhouse',
    style: 'Farmhouse',
    location: 'Cypress, TX',
    sqft: '4,100 sq ft',
    coverImage: '/images/p4-interior-bath.png',
    coverAlt: 'Modern farmhouse custom home exterior at dusk',
    images: [
      { src: '/images/p4-interior-bath.png', alt: 'Modern farmhouse exterior front at dusk', type: 'exterior' },
      { src: '/images/p4-interior-living.png', alt: 'Aerial view of modern farmhouse custom home', type: 'aerial' },
      { src: '/images/p4-exterior-aerial.png', alt: 'Vaulted great room with kitchen and dining area', type: 'interior' },
      { src: '/images/p4-exterior-front.png', alt: 'Farmhouse bathroom with soaking tub and walk-in shower', type: 'bath' },
    ],
    tags: ['Farmhouse', ...commonTags],
  },
  {
    id: 5,
    slug: 'transitional-luxury',
    title: 'Transitional Luxury',
    style: 'Transitional',
    location: 'Pearland, TX',
    sqft: '5,400 sq ft',
    coverImage: '/images/p5-interior-bath.png',
    coverAlt: 'Transitional luxury custom home exterior with balanced stone detailing',
    images: [
      { src: '/images/p5-interior-bath.png', alt: 'Transitional luxury home exterior at dusk', type: 'exterior' },
      { src: '/images/p5-interior-living.png', alt: 'Aerial view of transitional luxury custom home', type: 'aerial' },
      { src: '/images/p5-exterior-aerial.png', alt: 'Open concept living room with stone fireplace and kitchen', type: 'interior' },
      { src: '/images/p5-exterior-front.png', alt: 'Transitional bathroom with soaking tub and walk-in shower', type: 'bath' },
    ],
    tags: ['Transitional', ...commonTags],
  },
  {
    id: 6,
    slug: 'traditional-brick-stone',
    title: 'Traditional Brick & Stone',
    style: 'Traditional',
    location: 'Spring, TX',
    sqft: '4,800 sq ft',
    coverImage: '/images/p6-interior-bath.png',
    coverAlt: 'Traditional brick and stone custom home exterior at dusk',
    images: [
      { src: '/images/p6-interior-bath.png', alt: 'Traditional brick and stone home exterior at dusk', type: 'exterior' },
      { src: '/images/p6-interior-living.png', alt: 'Aerial view of traditional brick and stone custom home', type: 'aerial' },
      { src: '/images/p6-exterior-aerial.png', alt: 'Open living room with built-ins and gourmet kitchen', type: 'interior' },
      { src: '/images/p6-exterior-front.png', alt: 'Traditional primary bathroom with soaking tub', type: 'bath' },
    ],
    tags: ['Traditional', ...commonTags],
  },
  {
    id: 7,
    slug: 'modern-white-brick',
    title: 'Modern White Brick',
    style: 'Modern',
    location: 'League City, TX',
    sqft: '3,600 sq ft',
    coverImage: '/images/p7-interior-bath.png',
    coverAlt: 'Modern white brick custom home exterior',
    images: [
      { src: '/images/p7-interior-bath.png', alt: 'Modern white brick home exterior', type: 'exterior' },
      { src: '/images/p7-interior-living.png', alt: 'Aerial view of modern white brick custom home', type: 'aerial' },
      { src: '/images/p7-exterior-aerial.png', alt: 'Open living room with connected kitchen and dining', type: 'interior' },
      { src: '/images/p7-exterior-front.png', alt: 'Spa-style bathroom with soaking tub', type: 'bath' },
    ],
    tags: ['Modern', ...commonTags],
  },
  {
    id: 8,
    slug: 'ultra-modern-with-pool',
    title: 'Ultra-Modern Residence',
    style: 'Modern Luxury',
    location: 'Houston, TX',
    sqft: '6,800 sq ft',
    coverImage: '/images/p8-interior-bath.png',
    coverAlt: 'Ultra-modern luxury custom home front exterior at dusk',
    images: [
      { src: '/images/p8-interior-bath.png', alt: 'Ultra-modern front exterior with warm interior lighting', type: 'exterior' },
      { src: '/images/p8-exterior-pool.png', alt: 'Aerial view of ultra-modern Houston home with pool', type: 'aerial' },
      { src: '/images/p8-exterior-aerial.png', alt: 'Double-height modern living room with pool view and fireplace', type: 'interior' },
      { src: '/images/p8-interior-living.png', alt: 'Spa-inspired primary bathroom with freestanding tub', type: 'bath' },
      { src: '/images/p8-exterior-front.png', alt: 'Backyard pool, covered outdoor kitchen, and modern rear elevation', type: 'pool' },
    ],
    tags: ['Modern', 'Luxury Estate', 'Pool', 'Design-Build'],
  },
];
