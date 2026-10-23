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
  summary: string;
  materials: string;
  timeline: string;
  siteNotes: string;
}

const commonTags = ['New Construction', 'Design-Build'];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'modern-contemporary-houston',
    title: 'The Woodlands Contemporary Pavilion',
    style: 'Contemporary',
    location: 'The Woodlands, TX',
    sqft: '4,200 sq ft',
    coverImage: '/images/p1-exterior-front.png',
    coverAlt: 'Modern contemporary custom home exterior with warm wood accents and limestone at dusk in The Woodlands',
    images: [
      { src: '/images/p1-exterior-front.png', alt: 'Contemporary custom home front elevation with warm wood and smooth limestone detailing in The Woodlands TX', type: 'exterior' },
      { src: '/images/p1-exterior-aerial.png', alt: 'Aerial view of contemporary custom home and preserved forest canopy in The Woodlands', type: 'aerial' },
      { src: '/images/p1-interior-living.png', alt: 'Expansive open living, dining, and kitchen interior with seamless outdoor glass connection', type: 'interior' },
      { src: '/images/p1-interior-bath.png', alt: 'Contemporary primary bathroom with double vanity, honed stone, and frameless glass shower', type: 'bath' },
    ],
    tags: ['Contemporary', ...commonTags],
    summary: 'A 4,200-square-foot contemporary custom residence constructed in The Woodlands on a heavily wooded interior parcel under strict Woodlands Township covenants. The design brief called for an open single-story pavilion that dissolves the barrier between interior living and the preserved oak-pine forest, utilizing deep cantilevered overhangs engineered for the Texas climate and a tactile natural material palette. Saadi Construction Group directed the complete design-build scope as a single point of responsibility — architectural plans, structural and MEP engineering, Development Standards Committee (DSC) submittal, Montgomery County permitting, and precision field construction.',
    materials: 'Smooth Texas limestone and vertical tongue-and-groove cedar cladding, standing-seam metal roof, thermally broken aluminum-clad wood windows, oversized steel-and-glass pivot entry door, rift-sawn white oak flooring, honed quartzite kitchen surfaces, full-height limestone hearth, integrated panel-ready refrigeration.',
    timeline: '11 months on-site construction preceded by 5 months of preconstruction (architectural schematics, geotech borings, DSC tree preservation review, and Montgomery County permitting). Contract to occupancy: 16 months.',
    siteNotes: 'Wooded parcel with surveyed champion oaks and loblolly pines requiring a DSC-approved tree root preservation plan and continuous protective fencing. Geotechnical boring identified Conroe-Catahoula sand-clay strata; engineered a stiffened post-tension slab with deep perimeter grade beams. Surface drainage routed to the community bioswale; outside 500-year floodplain.',
  },
  {
    id: 2,
    slug: 'luxury-estate-with-pool',
    title: 'Sugar Land Waterfront Estate',
    style: 'Classical Transitional',
    location: 'Sugar Land, TX (Riverstone)',
    sqft: '6,400 sq ft',
    coverImage: '/images/p2-exterior-front.png',
    coverAlt: 'Luxury custom waterfront estate front elevation at dusk in Sugar Land TX',
    images: [
      { src: '/images/p2-exterior-front.png', alt: 'Classical transitional estate front elevation with limestone portico and landscape lighting in Sugar Land TX', type: 'exterior' },
      { src: '/images/p2-exterior-aerial.png', alt: 'Elevated aerial view of waterfront estate, infinity pool terrace, and outdoor pavilion in Sugar Land', type: 'aerial' },
      { src: '/images/p2-interior-living.png', alt: 'Grand double-height living room opening onto the negative-edge pool terrace', type: 'interior' },
      { src: '/images/p2-interior-bath.png', alt: 'Marble primary retreat with freestanding soaking tub and custom rift-oak vanity', type: 'bath' },
    ],
    tags: ['Luxury Estate', 'Pool', 'New Construction'],
    summary: 'A 6,400-square-foot waterfront estate situated in Sugar Land on a half-acre lakefront lot within Riverstone. The program incorporates an owner suite with dual independent dressing rooms, temperature-controlled wine room, four en-suite bedrooms, home theater, and an expansive covered loggia with outdoor kitchen addressing a negative-edge swimming pool. Saadi Construction Group managed all architectural design, civil shoreline bulkhead coordination, Fort Bend MUD utility connections, and City of Sugar Land permitting under one accountable contract.',
    materials: 'Cream Texas limestone with carved cast-stone window architraves, slate-look composite tile roof, solid mahogany entry double doors with hand-forged bronze hardware, wide-plank French white oak floors, book-matched Calacatta marble in primary bath, leathered quartzite countertops, negative-edge gunite pool with coping.',
    timeline: '14 months on site from foundation pour to move-in, preceded by 6 months of preconstruction (schematic design, ARC revisions, bulkhead structural sign-off, and City of Sugar Land permits). Total timeline: 20 months.',
    siteNotes: 'Lakefront parcel requiring civil engineering for bulkhead tie-in and strict ARC architectural masonry quotas. Soils report revealed expansive Beaumont clay (Plasticity Index 48); foundation engineered with 36-inch deep grade beams and high-strength post-tension cables.',
  },
  {
    id: 3,
    slug: 'french-chateau-estate',
    title: 'Katy Country Château',
    style: 'French Provincial',
    location: 'Katy, TX (Cinco Ranch Reserve)',
    sqft: '7,500 sq ft',
    coverImage: '/images/p3-exterior-front.png',
    coverAlt: 'French provincial country château exterior with arched stone entry in Katy TX',
    images: [
      { src: '/images/p3-exterior-front.png', alt: 'French provincial château exterior with arched entry portico and hand-carved stone in Katy TX', type: 'exterior' },
      { src: '/images/p3-exterior-aerial.png', alt: 'Aerial overview of one-acre Katy estate with slate mansard rooflines and motor court', type: 'aerial' },
      { src: '/images/p3-interior-living.png', alt: 'Grand open living salon with custom plaster walls, beamed ceilings, and limestone fireplace', type: 'interior' },
      { src: '/images/p3-interior-bath.png', alt: 'Calacatta marble bathroom with freestanding soaking tub and custom millwork in Katy home', type: 'bath' },
    ],
    tags: ['French Country', 'Luxury Estate', 'Design-Build'],
    summary: 'A 7,500-square-foot French country residence constructed on a 1-acre estate lot adjacent to Cinco Ranch in Katy. The architecture blends classic European symmetry — authentic mansard proportions, copper dormer details, hand-carved cast-stone accents — with open, livable modern interiors. Includes five bedroom suites, private library, butler pantry, upper-level entertainment gallery, porte-cochère, and a four-car motor court. Saadi Construction Group served as master design-builder from lot civil grading through interior handover.',
    materials: 'Full-bed Austin chalk limestone with hand-dressed quoins, slate composite mansard roof with soldered copper valleys, true divided-light clad windows, antique French terra-cotta tile accents, hand-troweled Venetian plaster, inset painted cabinetry, professional Sub-Zero / Wolf appliance suite.',
    timeline: '16 months on site, with 7 months preconstruction (design documentation, ARC approval cycles, and procurement of specialty stone and slate tile). Total duration: 23 months.',
    siteNotes: 'Expansive one-acre parcel requiring site detention and drainage swales tying to Fort Bend drainage ditch. Foundation engineered for high-plasticity clay with drilled under-reamed bell piers down to stable bearing strata at 18 feet.',
  },
  {
    id: 4,
    slug: 'modern-farmhouse',
    title: 'Bridgeland Modern Farmhouse',
    style: 'Modern Farmhouse',
    location: 'Cypress, TX (Bridgeland)',
    sqft: '4,100 sq ft',
    coverImage: '/images/p4-exterior-front.png',
    coverAlt: 'Modern farmhouse custom home exterior with board-and-batten and metal roof in Cypress TX',
    images: [
      { src: '/images/p4-exterior-front.png', alt: 'Modern farmhouse exterior with crisp white board-and-batten and dark bronze metal accents in Cypress TX', type: 'exterior' },
      { src: '/images/p4-exterior-aerial.png', alt: 'Aerial view of modern farmhouse property and neighborhood lake in Bridgeland Cypress', type: 'aerial' },
      { src: '/images/p4-interior-living.png', alt: 'Vaulted great room with exposed Douglas fir trusses, white oak floors, and large steel windows', type: 'interior' },
      { src: '/images/p4-interior-bath.png', alt: 'Farmhouse primary bathroom with black iron fixtures, soaking tub, and subway tile shower', type: 'bath' },
    ],
    tags: ['Farmhouse', ...commonTags],
    summary: 'A 4,100-square-foot modern farmhouse in Bridgeland, Cypress, balancing the timeless appeal of gable architecture with modern open-concept volume. Features a vaulted cathedral great room with structural timber trusses, expansive chef kitchen with hidden scullery, primary retreat on the ground level, and a 600-square-foot screened outdoor living pavilion with wood-burning fireplace.',
    materials: 'James Hardie artisan board-and-batten siding with standing-seam black metal roof accents, low-E black aluminum storefront glass, rough-sawn Douglas fir trusses, wide-plank wire-brushed white oak, honed quartz counters, apron-front fireclay sinks.',
    timeline: '10 months construction, preceded by 4 months preconstruction (ARC submittal, civil grading, and Harris County engineering review). Total duration: 14 months.',
    siteNotes: 'Master-planned interior parcel with ARC guidelines governing metal accent roof percentages and exterior dark trim reflectance. Harris County flood control review verified finished floor at 18 inches above 500-year base flood elevation.',
  },
  {
    id: 5,
    slug: 'transitional-luxury',
    title: 'Shadow Creek Transitional Residence',
    style: 'Transitional',
    location: 'Pearland, TX',
    sqft: '5,400 sq ft',
    coverImage: '/images/p5-exterior-front.png',
    coverAlt: 'Transitional luxury custom home exterior with balanced stone and painted brick in Pearland TX',
    images: [
      { src: '/images/p5-exterior-front.png', alt: 'Transitional luxury home exterior at dusk with architectural lighting in Shadow Creek Ranch Pearland', type: 'exterior' },
      { src: '/images/p5-exterior-aerial.png', alt: 'Aerial perspective of transitional custom home and landscaped grounds in Pearland TX', type: 'aerial' },
      { src: '/images/p5-interior-living.png', alt: 'Open concept living pavilion with full-height stone fireplace and seamless kitchen connection', type: 'interior' },
      { src: '/images/p5-interior-bath.png', alt: 'Transitional master bath with freestanding tub, marble mosaic floor, and frameless glass enclosure', type: 'bath' },
    ],
    tags: ['Transitional', ...commonTags],
    summary: 'A 5,400-square-foot transitional home in Pearland balancing formal architectural proportions with contemporary interior fluidity. Designed with a ground-floor primary wing with private loggia access, formal executive study, open-plan chef kitchen, second catering kitchen, media lounge, and 3-car garage with electric vehicle charging.',
    materials: 'Split-face Texas limestone and slurry-washed brick, copper roof accents, custom 10-foot iron-and-glass double doors, European wide-plank white oak flooring, honed Taj Mahal quartzite countertops, custom inset painted cabinetry.',
    timeline: '12 months on site, 5 months preconstruction (drainage detention calculations, ARC reviews, and City of Pearland engineering permits). Total duration: 17 months.',
    siteNotes: 'Lake Charles coastal clay with high water table; required geotech soil stabilization with lime injection down to 7 feet and an engineered stiffened slab with continuous perimeter vapor barrier.',
  },
  {
    id: 6,
    slug: 'traditional-brick-stone',
    title: 'Spring Wooded Estate',
    style: 'Traditional Texas Stone',
    location: 'Spring, TX (Auburn Lakes)',
    sqft: '4,800 sq ft',
    coverImage: '/images/p6-exterior-front.png',
    coverAlt: 'Traditional brick and stone custom home exterior at dusk in Spring TX',
    images: [
      { src: '/images/p6-exterior-front.png', alt: 'Traditional brick and stone estate with arched portico and dormer windows in Spring TX', type: 'exterior' },
      { src: '/images/p6-exterior-aerial.png', alt: 'Aerial view of custom home nestled among preserved mature pine forest in Spring Texas', type: 'aerial' },
      { src: '/images/p6-interior-living.png', alt: 'Warm traditional great room with custom built-in cabinetry and stone hearth', type: 'interior' },
      { src: '/images/p6-interior-bath.png', alt: 'Traditional primary bathroom with soaking tub, marble counters, and custom millwork in Spring TX', type: 'bath' },
    ],
    tags: ['Traditional', ...commonTags],
    summary: 'A 4,800-square-foot estate home in Spring built on a heavily forested master-planned lot. The design follows an enduring Texas architectural vernacular: stacked gables, Austin limestone, tumbled clay brick, and copper accent canopies. Includes four bedrooms, formal library with coffered ceiling, game room, and covered veranda.',
    materials: 'Tumbled brick with chopped Texas limestone accents, architectural shingles with standing seam copper details, solid mahogany exterior millwork, quarter-sawn white oak floors, leathered granite and soapstone surfaces.',
    timeline: '11 months on site, 5 months preconstruction including tree preservation permitting and MUD utility tap coordination. Total: 16 months.',
    siteNotes: 'Selective tree preservation plan enforced by community ARC; geotech borings confirmed mixed clay-sand strata; post-tension slab designed to resist tree-root moisture drawdown.',
  },
  {
    id: 7,
    slug: 'modern-white-brick',
    title: 'Coastal Prairie Modern Residence',
    style: 'Modern Brick & Glass',
    location: 'League City, TX',
    sqft: '3,600 sq ft',
    coverImage: '/images/p7-exterior-front.png',
    coverAlt: 'Modern white brick custom home exterior in League City TX',
    images: [
      { src: '/images/p7-exterior-front.png', alt: 'Clean-lined modern white brick home exterior with black steel windows in League City TX', type: 'exterior' },
      { src: '/images/p7-exterior-aerial.png', alt: 'Aerial overview of modern home in League City showing low-pitch gable and landscaped courtyard', type: 'aerial' },
      { src: '/images/p7-interior-living.png', alt: 'Sun-drenched open living room with polished concrete and oak finishes', type: 'interior' },
      { src: '/images/p7-interior-bath.png', alt: 'Minimalist primary bathroom with freestanding tub and black matte fixtures in League City home', type: 'bath' },
    ],
    tags: ['Modern', ...commonTags],
    summary: 'A 3,600-square-foot modern single-story residence in League City. Built with painted white masonry volumes, dark bronze storefront glass, and minimalist gable lines. Because League City is within the Texas Department of Insurance (TDI) windstorm zone, all structural framing, impact-rated fenestration, and roof attachments carry certified WPI-8 windstorm engineering.',
    materials: 'Painted white brick with dark bronze metal reveals, standing-seam metal roof, high-impact TDI certified aluminum windows, wide-plank engineered oak, honed dolomite kitchen surfaces.',
    timeline: '9 months on site, 4 months preconstruction (TDI windstorm engineering, soils report, City of League City permit). Total: 13 months.',
    siteNotes: 'TDI First Tier Coastal Windstorm zone (130 mph design wind speed). Foundation engineered for coastal-prairie clay with structural post-tension cable spacing and hold-down anchors tied into foundation grade beams.',
  },
  {
    id: 8,
    slug: 'ultra-modern-with-pool',
    title: 'Memorial Modernist Pavilion & Pool',
    style: 'Modern Architectural Luxury',
    location: 'Memorial (Houston), TX',
    sqft: '6,800 sq ft',
    coverImage: '/images/p8-exterior-front.png',
    coverAlt: 'Ultra-modern luxury custom home front exterior with limestone and glass at dusk in Memorial Houston TX',
    images: [
      { src: '/images/p8-exterior-front.png', alt: 'Ultra-modern Memorial residence front facade with floor-to-ceiling glass and Texas cream limestone', type: 'exterior' },
      { src: '/images/p8-exterior-aerial.png', alt: 'Aerial view of Memorial modern estate showing private courtyard and reflection pool', type: 'aerial' },
      { src: '/images/p8-interior-living.png', alt: 'Double-height modern living pavilion opening directly to pool terrace and live oaks in Memorial', type: 'interior' },
      { src: '/images/p8-interior-bath.png', alt: 'Spa-inspired primary bathroom with freestanding tub, bookmatched marble, and private garden view', type: 'bath' },
      { src: '/images/p8-exterior-pool.png', alt: 'Negative-edge swimming pool, covered outdoor kitchen, and illuminated modern rear elevation', type: 'pool' },
    ],
    tags: ['Modern', 'Luxury Estate', 'Pool', 'Design-Build'],
    summary: 'A 6,800-square-foot modernist custom residence built in Memorial on an infill teardown lot. The architectural program embraces transparency and structural purity: floor-to-ceiling minimal-frame glass systems, deep cantilevered cedar roof planes, and a central gallery opening to an integrated reflection and swimming pool. Features five bedroom suites, executive glass study, climate-controlled glass wine room, fitness studio, and outdoor kitchen. Saadi Construction Group handled teardown demolition, Chapter 19 floodplain engineering, City of Houston permitting, and luxury construction.',
    materials: 'Smooth Texas cream limestone, vertical clear western red cedar soffits, low-slope TPO roofing, oversized minimal-frame structural glass systems, large-format limestone and white oak floors, book-matched dolomite marble, Sub-Zero / Wolf refrigeration and cooking suite, pebble-sheen negative-edge pool with coping.',
    timeline: '15 months on site, preceded by 7 months preconstruction (structure demolition, tree preservation permit for mature live oaks, Chapter 19 drainage plan, and City of Houston building permit). Total: 22 months.',
    siteNotes: 'Memorial-area infill teardown lot. Soil report revealed active Beaumont clay requiring 42-inch deep engineered grade beams and void boxes under the foundation. Tree protection protocol with root-zone aeration was maintained throughout construction.',
  },
];
