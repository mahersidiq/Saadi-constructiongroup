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
    title: 'Modern Contemporary',
    style: 'Contemporary',
    location: 'The Woodlands, TX',
    sqft: '3,800 sq ft',
    coverImage: '/images/p1-interior-bath.png',
    coverAlt: 'Modern contemporary custom home exterior with warm wood accents at dusk',
    images: [
      { src: '/images/p1-interior-bath.png', alt: 'Modern contemporary custom home exterior with wood and stucco detailing in The Woodlands TX', type: 'exterior' },
      { src: '/images/p1-interior-living.png', alt: 'Aerial view of modern contemporary custom home and landscaping in The Woodlands', type: 'aerial' },
      { src: '/images/p1-exterior-aerial.png', alt: 'Warm open living, dining, and kitchen interior with outdoor connection in modern Woodlands custom home', type: 'interior' },
      { src: '/images/p1-exterior-front.png', alt: 'Contemporary primary bathroom with double vanity and glass shower in custom Woodlands home', type: 'bath' },
    ],
    tags: ['Contemporary', ...commonTags],
    summary: 'A 3,800-square-foot contemporary custom home built in The Woodlands on a heavily wooded interior lot inside The Woodlands Township covenants. The brief was an open single-story plan that opens fully to the rear yard, with a low-pitch shed-and-flat roof composition, deep covered overhangs for the Texas sun, and a material palette that reads warm rather than cold-modern. Saadi Construction Group ran the project as a single design-build contract — architectural plans, structural and MEP engineering, Development Standards Committee submittal, Montgomery County permit, and full construction — so the homeowners worked with one team from soils report through final walkthrough.',
    materials: 'Smooth stucco and stained vertical cedar exterior cladding, standing-seam metal roof, aluminum-clad wood windows, oversized steel-and-glass pivot entry door, white oak engineered flooring throughout main areas, quartzite kitchen island and perimeter counters, full-height honed limestone fireplace surround, custom rift-cut white oak cabinetry, integrated panel-ready appliances.',
    timeline: 'Approximately 11 months on site from foundation pour to certificate of occupancy, preceded by roughly 5 months of preconstruction (design development, DSC submittal and approval, structural engineering, soils report, MEP design, and Montgomery County permit). Total project duration from contract signature to move-in was approximately 16 months.',
    siteNotes: 'Interior wooded Woodlands lot with surveyed protected oaks and pines requiring a Development Standards Committee tree preservation plan and root-zone fencing during construction. Geotech recommended a modified post-tensioned slab with additional perimeter reinforcement for the Conroe-Catahoula sand-clay soils typical of The Woodlands. Drainage routed to the community swale; no floodplain issues.',
  },
  {
    id: 2,
    slug: 'luxury-estate-with-pool',
    title: 'Luxury Estate',
    style: 'Luxury Estate',
    location: 'Sugar Land, TX',
    sqft: '6,200 sq ft',
    coverImage: '/images/p2-interior-bath.png',
    coverAlt: 'Luxury estate custom home exterior at dusk with landscape lighting in Sugar Land TX',
    images: [
      { src: '/images/p2-interior-bath.png', alt: 'Luxury custom estate front elevation at dusk in Sugar Land, Texas', type: 'exterior' },
      { src: '/images/p2-interior-living.png', alt: 'Aerial view of luxury estate with pool and outdoor living in Sugar Land Riverstone', type: 'aerial' },
      { src: '/images/p2-exterior-aerial.png', alt: 'Light-filled luxury living room opening to a pool terrace in custom Sugar Land estate', type: 'interior' },
      { src: '/images/p2-exterior-front.png', alt: 'Large luxury primary bathroom with freestanding tub and glass shower in Sugar Land custom home', type: 'bath' },
    ],
    tags: ['Luxury Estate', 'Pool', 'New Construction'],
    summary: 'A 6,200-square-foot luxury estate built in Sugar Land on a half-acre waterfront lot inside a Riverstone-area master plan. The program included a primary suite with separate his-and-hers baths, a study, a wine display, four secondary suites, a media room, and a fully integrated outdoor kitchen with negative-edge pool addressing the lake. The exterior balances a primary stone elevation with cast-stone trim and a slate-look tile roof to satisfy the Architectural Review Committee while keeping a contemporary-leaning interior. Saadi Construction Group managed the full design-build scope including ARC submittal, civil and structural engineering, City of Sugar Land permitting, MUD coordination, pool engineering, and bulkhead inspection.',
    materials: 'Texas limestone primary exterior with cast-stone window and door trim, clay-look concrete tile roof, mahogany double front doors with sidelights and transom, aluminum-clad wood windows throughout, wide-plank white oak flooring on main level, polished marble primary bath, dolomite kitchen island with leathered granite perimeter, custom inset shaker cabinetry in painted and stained finishes, professional-grade range and integrated refrigeration, pebble-finish negative-edge pool with stone coping.',
    timeline: 'Approximately 14 months on site from foundation pour to certificate of occupancy, preceded by approximately 6 months of preconstruction (schematic design, ARC submittal and revisions, structural and civil engineering, MUD utility coordination, pool engineering, and City of Sugar Land permit). Total project duration from contract signature to move-in was approximately 20 months.',
    siteNotes: 'Waterfront lakefront lot inside a Sugar Land master-planned community with active Architectural Review Committee oversight on elevation materials, masonry percentage, roof pitch, and rear-yard improvements. Geotech recommended a stiffened post-tensioned slab for the expansive Beaumont clay; pool engineering required separate review for bulkhead tie-in and water-feature plumbing. MUD water and wastewater hookups handled through the community district.',
  },
  {
    id: 3,
    slug: 'french-chateau-estate',
    title: 'French Château Estate',
    style: 'French Country',
    location: 'Katy, TX',
    sqft: '7,500 sq ft',
    coverImage: '/images/p3-interior-bath.png',
    coverAlt: 'French country château exterior with arched entry and stone detailing in Katy TX',
    images: [
      { src: '/images/p3-interior-bath.png', alt: 'French country estate exterior with arched entry and warm lighting in Cinco Ranch Katy', type: 'exterior' },
      { src: '/images/p3-interior-living.png', alt: 'Aerial view of French country custom home estate in Katy Texas', type: 'aerial' },
      { src: '/images/p3-exterior-aerial.png', alt: 'Grand interior living space with arched windows and chandelier in French château Katy custom home', type: 'interior' },
      { src: '/images/p3-exterior-front.png', alt: 'Marble primary bathroom with freestanding tub and chandelier in French country custom Katy home', type: 'bath' },
    ],
    tags: ['French Country', 'Luxury Estate', 'Design-Build'],
    summary: 'A 7,500-square-foot French country château built in Katy on a one-acre lot inside a Cinco Ranch-adjacent master plan. The clients wanted a true château silhouette — steep mansard roof, arched entry, dormers, and cast-stone surrounds — combined with a livable open-plan interior. The build included a primary wing with sitting room and dual closets, a paneled study, formal dining and informal kitchen-family great room, a butler’s pantry, four upstairs suites, a media room with bar, a porte-cochère, and an oversized four-car garage. Saadi Construction Group managed the full design-build scope including ARC submittal and revisions, Fort Bend County permit, structural and civil engineering, MUD coordination, and full construction through closeout.',
    materials: 'Full-bed Texas limestone exterior with hand-carved cast-stone window surrounds, slate-look composite tile mansard roof with copper detailing, mahogany arched entry doors with custom ironwork, aluminum-clad wood windows in true divided-light pattern, wide-plank French oak flooring throughout main level, hand-troweled plaster wall finishes in formal areas, marble primary bath with custom millwork, hand-glazed inset cabinetry in painted and stained finishes, antique reclaimed terra-cotta accents in the kitchen, professional-grade range and integrated refrigeration.',
    timeline: 'Approximately 16 months on site from foundation pour to certificate of occupancy, preceded by approximately 7 months of preconstruction (schematic and design development, ARC submittal with two revision cycles, structural and civil engineering, MUD utility coordination, Fort Bend County permit, and long-lead material procurement for the slate-look roof, cast-stone, and reclaimed terra-cotta). Total project duration from contract signature to move-in was approximately 23 months.',
    siteNotes: 'One-acre Cinco Ranch-adjacent Katy lot inside an active ARC master plan with rigorous elevation, masonry percentage, and roof-pitch review. Geotech recommended a stiffened post-tensioned slab for the highly plastic Beaumont clay soils typical of Katy. MUD water and wastewater hookups handled through the community district. Long-lead material procurement (slate-look roof tile, hand-carved cast-stone, reclaimed terra-cotta) was sequenced during permitting so the schedule did not stall at framing.',
  },
  {
    id: 4,
    slug: 'modern-farmhouse',
    title: 'Modern Farmhouse',
    style: 'Farmhouse',
    location: 'Cypress, TX',
    sqft: '4,100 sq ft',
    coverImage: '/images/p4-interior-bath.png',
    coverAlt: 'Modern farmhouse custom home exterior at dusk in Cypress TX',
    images: [
      { src: '/images/p4-interior-bath.png', alt: 'Modern farmhouse exterior front at dusk in Bridgeland Cypress Texas', type: 'exterior' },
      { src: '/images/p4-interior-living.png', alt: 'Aerial view of modern farmhouse custom home in Cypress TX', type: 'aerial' },
      { src: '/images/p4-exterior-aerial.png', alt: 'Vaulted great room with kitchen and dining area in modern farmhouse Cypress custom home', type: 'interior' },
      { src: '/images/p4-exterior-front.png', alt: 'Farmhouse primary bathroom with soaking tub and walk-in shower in custom Cypress home', type: 'bath' },
    ],
    tags: ['Farmhouse', ...commonTags],
    summary: 'A 4,100-square-foot modern farmhouse built in Cypress on a master-planned interior lot. The clients wanted the classic farmhouse silhouette — gabled roof with metal accents, board-and-batten siding, deep wraparound porches — combined with a strictly contemporary interior: vaulted great room, exposed beams, oversized steel windows, and a clean white-and-oak palette. The plan included a primary wing on the main level, a paneled study with built-ins, an oversized kitchen with prep pantry, three upstairs suites with a flex loft, and an extended covered outdoor living area with a wood-burning fireplace. Saadi Construction Group ran the build as a single design-build contract from ARC submittal through final walkthrough.',
    materials: 'Hardie board-and-batten and lap siding exterior in white with black trim, standing-seam metal accent roof over architectural composition main field, oversized black steel windows and entry door, white oak engineered flooring throughout main areas, white quartz kitchen counters with butcher block island insert, custom shaker cabinetry in painted and natural oak finishes, exposed Douglas fir ceiling beams in great room, subway tile and honed marble bath finishes, professional-grade range, farmhouse apron sink.',
    timeline: 'Approximately 10 months on site from foundation pour to certificate of occupancy, preceded by approximately 4 months of preconstruction (design development, ARC submittal, structural engineering, soils report, MUD utility coordination, and Harris County permit). Total project duration from contract signature to move-in was approximately 14 months.',
    siteNotes: 'Master-planned Cypress interior lot inside an active ARC community with elevation and material review (the board-and-batten percentages, metal-roof accent area, and dark trim color all required ARC pre-approval). Geotech recommended a stiffened post-tensioned slab for the Beaumont clay soils. Harris County Flood Control District drainage compliance required a grading plan integrated with the community swale system; no floodplain issues on this interior lot.',
  },
  {
    id: 5,
    slug: 'transitional-luxury',
    title: 'Transitional Luxury',
    style: 'Transitional',
    location: 'Pearland, TX',
    sqft: '5,400 sq ft',
    coverImage: '/images/p5-interior-bath.png',
    coverAlt: 'Transitional luxury custom home exterior with balanced stone detailing in Pearland TX',
    images: [
      { src: '/images/p5-interior-bath.png', alt: 'Transitional luxury home exterior at dusk in Shadow Creek Ranch Pearland', type: 'exterior' },
      { src: '/images/p5-interior-living.png', alt: 'Aerial view of transitional luxury custom home in Pearland Texas', type: 'aerial' },
      { src: '/images/p5-exterior-aerial.png', alt: 'Open concept living room with stone fireplace and kitchen in transitional Pearland custom home', type: 'interior' },
      { src: '/images/p5-exterior-front.png', alt: 'Transitional primary bathroom with soaking tub and walk-in shower in custom Pearland home', type: 'bath' },
    ],
    tags: ['Transitional', ...commonTags],
    summary: 'A 5,400-square-foot transitional luxury home built in Pearland on a master-planned lot. Transitional design balances traditional silhouette (gables, stone, formal proportions) with contemporary details (clean trim, oversized windows, restrained color palette). The plan included a primary suite with sitting area and dual closets, a study, an open kitchen-family-dining great room with a covered outdoor extension, three secondary bedrooms, a media room, and a three-car garage with workshop bay. Saadi Construction Group managed the full design-build scope including ARC submittal, City of Pearland permit, civil drainage engineering, MUD coordination, and full construction.',
    materials: 'Mixed limestone and painted brick exterior with cast-stone trim, architectural composition roof with copper accent flashing, mahogany double entry doors, aluminum-clad wood windows, wide-plank European white oak flooring on main level, quartzite kitchen island with quartz perimeter counters, full-height stacked stone fireplace surround, custom inset cabinetry in painted finishes, marble primary bath with freestanding tub, professional-grade range and integrated refrigeration.',
    timeline: 'Approximately 12 months on site from foundation pour to certificate of occupancy, preceded by approximately 5 months of preconstruction (design development, ARC submittal and revisions, structural and civil engineering, MUD utility coordination, and City of Pearland permit including drainage and detention compliance). Total project duration from contract signature to move-in was approximately 17 months.',
    siteNotes: 'Master-planned Pearland lot with active ARC oversight on elevation materials, masonry percentage, and rear-yard improvements. Geotech recommended a stiffened post-tensioned slab for the Lake Charles clay soils with elevated water table typical of Pearland. City of Pearland required a civil drainage plan with finished-floor elevation above the lot drainage swale and detention compliance for the lot’s impervious cover. MUD water and wastewater hookups handled through the community district.',
  },
  {
    id: 6,
    slug: 'traditional-brick-stone',
    title: 'Traditional Brick & Stone',
    style: 'Traditional',
    location: 'Spring, TX',
    sqft: '4,800 sq ft',
    coverImage: '/images/p6-interior-bath.png',
    coverAlt: 'Traditional brick and stone custom home exterior at dusk in Spring TX',
    images: [
      { src: '/images/p6-interior-bath.png', alt: 'Traditional brick and stone home exterior at dusk in Auburn Lakes Spring Texas', type: 'exterior' },
      { src: '/images/p6-interior-living.png', alt: 'Aerial view of traditional brick and stone custom home in Spring TX', type: 'aerial' },
      { src: '/images/p6-exterior-aerial.png', alt: 'Open living room with built-ins and gourmet kitchen in traditional Spring custom home', type: 'interior' },
      { src: '/images/p6-exterior-front.png', alt: 'Traditional primary bathroom with soaking tub in custom Spring TX home', type: 'bath' },
    ],
    tags: ['Traditional', ...commonTags],
    summary: 'A 4,800-square-foot traditional brick-and-stone custom home built in Spring on a heavily wooded master-planned lot. The design follows a classic Texas traditional vocabulary — stacked gables, mixed brick and stone, cast-stone trim, dormers, and a copper accent porch roof. Inside, the plan balances formal rooms (study, dining) with an open kitchen-family great room and a covered outdoor living extension. The second floor includes three suites, a game room, and a media room. Saadi Construction Group ran the project as a single design-build contract from ARC submittal through final walkthrough, including selective tree clearing under the community tree preservation plan.',
    materials: 'Full-bed brick exterior with limestone accent walls and cast-stone trim, architectural composition roof with copper porch roof accent, mahogany front doors with leaded sidelights, aluminum-clad wood windows in true divided-light pattern, wide-plank rift-and-quartered white oak flooring on main level, marble kitchen island with leathered granite perimeter, custom inset cabinetry in stained and painted finishes, paneled study with built-in bookcases, marble primary bath with freestanding tub, professional-grade range and integrated refrigeration.',
    timeline: 'Approximately 11 months on site from foundation pour to certificate of occupancy, preceded by approximately 5 months of preconstruction (design development, ARC submittal, structural engineering, tree survey and preservation plan, soils report, MUD utility coordination, and Harris County permit). Total project duration from contract signature to move-in was approximately 16 months.',
    siteNotes: 'Heavily wooded master-planned Spring lot inside an active ARC community with elevation, material, and tree-preservation review. Site prep required selective tree clearing, stump grinding, and additional cut-and-fill for the building pad. Geotech recommended a stiffened post-tensioned slab for the Beaumont-Conroe clay-sand mix soils typical of Spring. MUD water and wastewater hookups handled through the community district; no floodplain issues.',
  },
  {
    id: 7,
    slug: 'modern-white-brick',
    title: 'Modern White Brick',
    style: 'Modern',
    location: 'League City, TX',
    sqft: '3,600 sq ft',
    coverImage: '/images/p7-interior-bath.png',
    coverAlt: 'Modern white brick custom home exterior in League City TX',
    images: [
      { src: '/images/p7-interior-bath.png', alt: 'Modern white brick home exterior in League City Texas Tuscan Lakes', type: 'exterior' },
      { src: '/images/p7-interior-living.png', alt: 'Aerial view of modern white brick custom home in League City TX', type: 'aerial' },
      { src: '/images/p7-exterior-aerial.png', alt: 'Open living room with connected kitchen and dining in modern white brick League City custom home', type: 'interior' },
      { src: '/images/p7-exterior-front.png', alt: 'Spa-style primary bathroom with soaking tub in custom League City home', type: 'bath' },
    ],
    tags: ['Modern', ...commonTags],
    summary: 'A 3,600-square-foot modern custom home built in League City on a master-planned lot. The design uses a contemporary single-volume primary form clad in painted white brick with dark trim, a low-pitch gable composition, and oversized black steel windows. The plan is a single-story program with three bedrooms, a study, an open kitchen-family-dining great room with a covered outdoor extension, and a two-car garage. Because League City is inside the Texas Department of Insurance windstorm coverage area, the structural design carries full windstorm certification and the build was inspected through the WPI-8 third-party process. Saadi Construction Group managed the full design-build scope.',
    materials: 'Painted white brick exterior with black metal trim, standing-seam metal accent roof, oversized black steel windows and entry door, white oak engineered flooring throughout main areas, quartz kitchen counters with butcher block island insert, custom shaker cabinetry in painted finishes, honed marble bath finishes, professional-grade range, integrated panel-ready refrigeration, exposed white oak ceiling beam in great room.',
    timeline: 'Approximately 9 months on site from foundation pour to certificate of occupancy, preceded by approximately 4 months of preconstruction (design development, structural engineering with windstorm certification, soils report, MUD utility coordination, City of League City permit, and WPI-8 inspection scheduling). Total project duration from contract signature to move-in was approximately 13 months.',
    siteNotes: 'Master-planned League City lot inside an active ARC community with elevation and material review. The white-painted brick percentage and metal-roof accent required ARC pre-approval. League City sits inside the TDI windstorm coverage area, which required WPI-8 third-party inspections of roof decking, fenestration, and wall sheathing in addition to standard residential code. Geotech recommended a stiffened post-tensioned slab for the coastal-prairie clay soils with elevated water table. MUD water and wastewater hookups handled through the community district.',
  },
  {
    id: 8,
    slug: 'ultra-modern-with-pool',
    title: 'Ultra-Modern Residence',
    style: 'Modern Luxury',
    location: 'Houston, TX',
    sqft: '6,800 sq ft',
    coverImage: '/images/p8-interior-bath.png',
    coverAlt: 'Ultra-modern luxury custom home front exterior at dusk in Houston TX',
    images: [
      { src: '/images/p8-interior-bath.png', alt: 'Ultra-modern front exterior with warm interior lighting in Memorial Houston custom home', type: 'exterior' },
      { src: '/images/p8-exterior-pool.png', alt: 'Aerial view of ultra-modern Houston custom home with pool', type: 'aerial' },
      { src: '/images/p8-exterior-aerial.png', alt: 'Double-height modern living room with pool view and fireplace in Houston custom home', type: 'interior' },
      { src: '/images/p8-interior-living.png', alt: 'Spa-inspired primary bathroom with freestanding tub in ultra-modern Houston custom home', type: 'bath' },
      { src: '/images/p8-exterior-front.png', alt: 'Backyard pool, covered outdoor kitchen, and modern rear elevation of Houston custom home', type: 'pool' },
    ],
    tags: ['Modern', 'Luxury Estate', 'Pool', 'Design-Build'],
    summary: 'A 6,800-square-foot ultra-modern custom residence built in Houston on a tear-down rebuild Memorial-area lot. The brief was a strictly contemporary architecture with a flat-roof primary volume, a double-height living-pool axis, and a fully integrated outdoor program (covered kitchen, fireplace, negative-edge pool). The plan includes a primary suite with separate baths and dual closets, a paneled study, four secondary suites, a media room, a glass-walled wine display, a fitness room, and a three-car garage. Saadi Construction Group ran the full design-build scope including demolition of the existing structure, City of Houston permitting, structural and civil engineering, drainage and tree-protection plans, pool engineering, and full construction through closeout.',
    materials: 'Smooth white stucco and stained vertical cedar exterior cladding, low-slope TPO roof, oversized aluminum-frame floor-to-ceiling glazing, steel-and-glass pivot entry door, large-format porcelain flooring throughout main areas, book-matched dolomite kitchen island, integrated panel-ready full-size appliances, full-height honed limestone fireplace surrounds, custom rift-cut white oak cabinetry, polished marble primary bath, glass-walled wine display with climate control, pebble-finish negative-edge pool with stone coping and integrated outdoor kitchen.',
    timeline: 'Approximately 15 months on site from foundation pour to certificate of occupancy, preceded by approximately 7 months of preconstruction (demolition of existing structure, schematic and design development, structural and civil engineering, drainage and tree-protection plans, City of Houston permit including Chapter 19 floodplain review, pool engineering, and long-lead material procurement for large-format glazing and integrated appliances). Total project duration from contract signature to move-in was approximately 22 months.',
    siteNotes: 'Memorial-area Houston tear-down rebuild on a tight Inner Loop lot with protected trees and an updated City of Houston Chapter 19 drainage and floodplain review. Demolition of the existing structure required separate permitting, asbestos survey, and utility disconnects. Geotech recommended a stiffened post-tensioned slab with additional reinforcement for the highly expansive Beaumont clay typical of Memorial-area Houston. Tree protection plan with root-zone fencing was required for the surveyed oaks. Pool engineering ran in parallel with the structural design so the pool plumbing, electrical, and tie-ins coordinated with the main slab.',
  },
];
