export const serviceCategories = [
  {
    name: 'Design & Build',
    slug: 'design-build',
    services: [
      {
        slug: 'custom-home-design-build',
        name: 'Custom Home Design-Build',
        category: 'Design & Build',
        description: 'Full architectural plans, structural engineering, permits, and construction under one contract. You approve the design — we deliver the home.',
      },
      {
        slug: 'luxury-custom-homes',
        name: 'Luxury Custom Homes',
        category: 'Design & Build',
        description: 'High-specification residential construction where every detail is designed before a single nail is driven. We coordinate plans, handle all engineering, and build to spec.',
      },
    ],
  },
  {
    name: 'Construction',
    slug: 'construction',
    services: [
      {
        slug: 'new-home-construction',
        name: 'New Home Construction',
        category: 'Construction',
        description: 'Ground-up residential builds on your lot. Plans, permits, site work, and full construction — one fixed-price contract, one team.',
      },
      {
        slug: 'home-additions-expansions',
        name: 'Home Additions & Expansions',
        category: 'Construction',
        description: 'Room additions, second-story builds, and garage conversions. We handle structural engineering and permits so the addition ties in right — the first time.',
      },
    ],
  },
  {
    name: 'Planning & Permits',
    slug: 'planning-permits',
    services: [
      {
        slug: 'plans-permits-engineering',
        name: 'Plans, Permits & Engineering',
        category: 'Planning & Permits',
        description: 'Architectural plans, structural engineering, soil reports, and city permit submission — managed start to finish. Included in every build we manage or available standalone.',
      },
      {
        slug: 'construction-management',
        name: 'Construction Management',
        category: 'Planning & Permits',
        description: "Already have a design team? We step in as your owner's representative — managing contractors, schedule, budget, and quality control through every phase.",
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((cat) => cat.services);

export default serviceCategories;
