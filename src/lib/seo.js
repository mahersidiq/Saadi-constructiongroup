export const SITE_URL =
  (typeof process !== 'undefined' && process.env?.APP_URL
    ? process.env.APP_URL.replace(/\/+$/, '')
    : '') || 'https://www.saadiconstructiongroup.com';

export const SITE_NAME = 'Saadi Construction Group';

export const DEFAULT_TITLE =
  'Houston Luxury Custom Home Builder | Saadi Construction Group';

export const DEFAULT_DESCRIPTION =
  "Houston's premier design-build custom home builder. Architectural plans, structural engineering, permits & luxury construction in Memorial, River Oaks & West U.";

export const DEFAULT_KEYWORDS =
  'custom home builder Houston, luxury custom home builder Houston TX, design build contractor Houston, Memorial custom home builder, River Oaks custom homes, West University Place builder';

export const DEFAULT_OG_IMAGE = '/images/saadi-custom-home-exterior.jpg';
export const DEFAULT_OG_IMAGE_ALT =
  'Architectural luxury custom residence in Memorial Houston built by Saadi Construction Group';

export const BUSINESS_INFO = {
  name: SITE_NAME,
  legalName: 'Saadi Construction Group LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/images/saadi-logo-horizontal.svg`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: '+18323603804',
  telephoneDisplay: '(832) 360-3804',
  email: 'info@saadiconstructiongroup.com',
  priceRange: '$$$$',
  openingHours: 'Mo-Fr 07:00-18:00',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'Maher Sidiq',
    jobTitle: 'Principal & Master Builder',
    worksFor: { '@id': `${SITE_URL}/#organization` },
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '801 Travis St Suite 2101',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77002',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7589,
    longitude: -95.3677,
  },
  sameAs: ['https://share.google/qfQoFjgBOz6d67e5a'],
  knowsAbout: [
    'Luxury Custom Home Construction',
    'Architectural Design-Build Contracting',
    'Post-Tensioned Foundation Engineering on Expansive Beaumont Clay',
    'City of Houston Chapter 19 Floodplain & Stormwater Detention Compliance',
    'Residential Structural Engineering & Permitting',
    'Inner-Loop Houston Tear-Down & Rebuild Construction',
    'Architectural Review Committee (ARC) & Civic Club Submissions',
  ],
  areaServed: [
    { '@type': 'City', name: 'Houston', sameAs: 'https://en.wikipedia.org/wiki/Houston' },
    { '@type': 'AdministrativeArea', name: 'Memorial Villages, TX' },
    { '@type': 'AdministrativeArea', name: 'River Oaks, Houston TX' },
    { '@type': 'City', name: 'West University Place, TX' },
    { '@type': 'City', name: 'Bellaire, TX' },
    { '@type': 'AdministrativeArea', name: 'Tanglewood, Houston TX' },
    { '@type': 'AdministrativeArea', name: 'Houston Heights, TX' },
    { '@type': 'AdministrativeArea', name: 'The Woodlands, TX' },
    { '@type': 'City', name: 'Sugar Land, TX' },
    { '@type': 'City', name: 'Katy, TX' },
    { '@type': 'City', name: 'Fulshear, TX' },
    { '@type': 'City', name: 'Pearland, TX' },
    { '@type': 'City', name: 'League City, TX' },
    { '@type': 'City', name: 'Friendswood, TX' },
    { '@type': 'City', name: 'Conroe, TX' },
    { '@type': 'City', name: 'Spring, TX' },
    { '@type': 'AdministrativeArea', name: 'Cypress, TX' },
    { '@type': 'AdministrativeArea', name: 'Kingwood, Houston TX' },
  ],
};

/**
 * Formats a consistent, branded page title.
 * @param {string} [topic]
 * @returns {string}
 */
export function getPageTitle(topic) {
  if (!topic) return DEFAULT_TITLE;
  if (topic.includes(SITE_NAME)) return topic;
  return `${topic} | ${SITE_NAME}`;
}

/**
 * Resolves any relative path or URL into a normalized canonical URL.
 * @param {string} [pathOrUrl='']
 * @returns {string}
 */
export function getCanonicalUrl(pathOrUrl = '') {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl === `${SITE_URL}/` ? SITE_URL : pathOrUrl.replace(/\/+$/, '');
  }
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  const normalizedPath = cleanPath === '/' ? '' : cleanPath.replace(/\/+$/, '');
  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Ensures image or asset URLs are absolute for Open Graph and Schema.org crawlers.
 * @param {string} [pathOrUrl]
 * @returns {string}
 */
export function resolveAbsoluteUrl(pathOrUrl = DEFAULT_OG_IMAGE) {
  if (!pathOrUrl) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Builds the global Organization / LocalBusiness / GeneralContractor JSON-LD schema.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: DEFAULT_DESCRIPTION,
    url: BUSINESS_INFO.url,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.logo,
    },
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: 'USD',
    openingHours: BUSINESS_INFO.openingHours,
    founder: BUSINESS_INFO.founder,
    address: BUSINESS_INFO.address,
    geo: BUSINESS_INFO.geo,
    knowsAbout: BUSINESS_INFO.knowsAbout,
    areaServed: BUSINESS_INFO.areaServed,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.telephone,
      email: BUSINESS_INFO.email,
      contactType: 'sales and preconstruction advisory',
      areaServed: 'US-TX',
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Houston Custom Home Design-Build & Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Home Design-Build',
            url: `${SITE_URL}/services/custom-home-design-build`,
            description:
              'Single-contract custom home design, architectural drafting, structural engineering, permitting, and luxury construction in Houston TX.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Custom Homes',
            url: `${SITE_URL}/services/luxury-custom-homes`,
            description:
              'Estate-scale custom home construction in Memorial, River Oaks, West University Place, Tanglewood, and The Woodlands.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Home Construction on Your Lot',
            url: `${SITE_URL}/services/new-home-construction`,
            description:
              'Ground-up residential construction on homeowner lots across Greater Houston with fixed-price contracts.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Additions & Structural Expansions',
            url: `${SITE_URL}/services/home-additions-expansions`,
            description:
              'Engineered second-story additions, primary suite wings, and structural expansions in Houston TX.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architectural Plans, Permits & Structural Engineering',
            url: `${SITE_URL}/services/plans-permits-engineering`,
            description:
              'Turnkey architectural drawing sets, geotechnical soil reports, PE-stamped post-tension slab engineering, and City of Houston permit approvals.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Owner-Side Residential Construction Management',
            url: `${SITE_URL}/services/construction-management`,
            description:
              'Independent owner representation, contractor oversight, schedule governance, and quality inspection for luxury residential builds.',
          },
        },
      ],
    },
    sameAs: BUSINESS_INFO.sameAs,
  };
}

/**
 * Builds the global WebSite JSON-LD schema.
 */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
  };
}

/**
 * Builds a WebPage (or subtype like AboutPage, ContactPage, CollectionPage) JSON-LD schema.
 * @param {object} options
 * @param {string} options.title
 * @param {string} [options.description]
 * @param {string} options.canonicalUrl
 * @param {string} [options.pageType='WebPage']
 * @param {string} [options.ogImage]
 * @param {string[]} [options.speakableSelectors]
 */
export function buildWebPageSchema({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl,
  pageType = 'WebPage',
  ogImage = DEFAULT_OG_IMAGE,
  speakableSelectors,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@type': 'GeneralContractor',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: resolveAbsoluteUrl(ogImage),
    },
  };

  if (Array.isArray(speakableSelectors) && speakableSelectors.length > 0) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    };
  }

  return schema;
}

/**
 * Builds a Schema.org BreadcrumbList from an array of { name, href } items.
 * @param {Array<{ name: string, href?: string, item?: string }>} [breadcrumbs=[]]
 */
export function buildBreadcrumbSchema(breadcrumbs = []) {
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: getCanonicalUrl(crumb.href || crumb.item || '/'),
    })),
  };
}

/**
 * Builds a Schema.org FAQPage from an array of { question, answer } items.
 * @param {Array<{ question: string, answer: string }>} [faqs=[]]
 */
export function buildFaqSchema(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Resolves and normalizes all metadata props for a page template.
 * @param {object} props
 */
export function resolvePageMetadata(props = {}) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    ogImage = DEFAULT_OG_IMAGE,
    ogImageAlt = DEFAULT_OG_IMAGE_ALT,
    ogType = 'website',
    canonicalUrl,
    pathname = '/',
    noindex = false,
    pageType = 'WebPage',
    speakableSelectors,
    breadcrumbs = [],
    faqs = [],
    articleMeta = null,
    jsonLd,
  } = props;

  const resolvedTitle = getPageTitle(title);
  const resolvedCanonical = canonicalUrl
    ? getCanonicalUrl(canonicalUrl)
    : getCanonicalUrl(pathname);
  const resolvedOgImage = resolveAbsoluteUrl(
    ogImage === '/og-image.jpg' ? DEFAULT_OG_IMAGE : ogImage
  );
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const customSchemas = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean)
    : [];

  const hasCustomWebPage = customSchemas.some((s) =>
    ['WebPage', 'AboutPage', 'ContactPage', 'CollectionPage'].includes(
      Array.isArray(s?.['@type']) ? s['@type'][0] : s?.['@type']
    )
  );
  const hasCustomBreadcrumb = customSchemas.some(
    (s) => s?.['@type'] === 'BreadcrumbList'
  );
  const hasCustomFaq = customSchemas.some((s) => s?.['@type'] === 'FAQPage');

  const generatedSchemas = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
  ];

  if (!hasCustomWebPage && !noindex) {
    generatedSchemas.push(
      buildWebPageSchema({
        title: resolvedTitle,
        description,
        canonicalUrl: resolvedCanonical,
        pageType,
        ogImage: resolvedOgImage,
        speakableSelectors,
      })
    );
  }

  if (!hasCustomBreadcrumb && breadcrumbs.length > 0) {
    const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
    if (breadcrumbSchema) generatedSchemas.push(breadcrumbSchema);
  }

  if (!hasCustomFaq && faqs.length > 0) {
    const faqSchema = buildFaqSchema(faqs);
    if (faqSchema) generatedSchemas.push(faqSchema);
  }

  const allJsonLd = [...generatedSchemas, ...customSchemas];

  return {
    title: resolvedTitle,
    description,
    keywords,
    ogImage: resolvedOgImage,
    ogImageAlt: ogImageAlt || resolvedTitle,
    ogType,
    canonicalUrl: resolvedCanonical,
    robotsContent,
    noindex,
    articleMeta,
    allJsonLd,
  };
}
