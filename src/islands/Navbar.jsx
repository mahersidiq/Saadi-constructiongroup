import { useState, useEffect, useRef } from 'react';
import { serviceCategories } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ pathname = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-black/97 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <a href="/" className="flex-shrink-0 group">
              <img
                src="/images/logo.svg"
                alt="Saadi Construction Group"
                className="h-14 w-auto group-hover:opacity-80 transition-opacity duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text logo shown until logo.svg is uploaded */}
              <div className="hidden flex-col leading-none" aria-hidden="true">
                <span className="text-white font-heading text-xl tracking-[0.25em] font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>SAADI</span>
                <span className="text-white/50 text-[9px] tracking-[0.28em] font-light mt-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>CONSTRUCTION GROUP</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} ref={megaRef} className="relative">
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={`flex items-center gap-1.5 px-4 py-2 font-body text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                        isActive(link.href) ? 'text-gold' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {megaOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-charcoal border border-gold/20 shadow-2xl p-8" style={{ animationDuration: '0.2s' }}>
                        <div className="grid grid-cols-3 gap-8">
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug}>
                              <h4 className="font-body text-[10px] font-semibold text-gold uppercase tracking-[0.2em] mb-4 pb-2 border-b border-gold/20">{cat.name}</h4>
                              <ul className="space-y-2">
                                {cat.services.map((s) => (
                                  <li key={s.slug}>
                                    <a href={`/services/${s.slug}`} className="font-body text-xs text-white/60 hover:text-gold transition-colors duration-200 block py-0.5 tracking-wide" onClick={() => setMegaOpen(false)}>
                                      {s.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-5 border-t border-gold/20 text-center">
                          <a href="/services" className="font-body text-xs font-semibold text-gold hover:text-gold-light transition-colors tracking-[0.15em] uppercase" onClick={() => setMegaOpen(false)}>
                            View All Services &rarr;
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={link.label} href={link.href} className={`px-4 py-2 font-body text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${isActive(link.href) ? 'text-gold' : 'text-white/70 hover:text-white'}`}>
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:8322058178" className="hidden xl:flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-body text-xs tracking-wide">(832) 205-8178</span>
              </a>
              <a href="/contact" className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gold text-white font-body text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light hover:text-charcoal transition-all duration-300">
                Free Consultation
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2" aria-label="Toggle menu">
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-charcoal border-l border-gold/20 z-50 lg:hidden overflow-y-auto" style={{ animation: 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <img
                  src="/images/logo.svg"
                  alt="Saadi Construction Group"
                  className="h-10 w-auto"
                />
                <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <nav className="space-y-1">
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <div key={link.label}>
                      <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className={`flex items-center justify-between w-full px-3 py-3 font-body text-xs tracking-[0.2em] uppercase font-medium ${isActive(link.href) ? 'text-gold' : 'text-white/70'}`}>
                        {link.label}
                        <svg className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-3 border-l border-gold/20 ml-3 mb-3">
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug} className="mb-4">
                              <p className="text-[10px] font-semibold text-gold uppercase tracking-[0.2em] px-3 py-1">{cat.name}</p>
                              {cat.services.map((s) => (
                                <a key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-1.5 font-body text-xs text-white/50 hover:text-white tracking-wide">{s.name}</a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.label === 'Service Areas' ? (
                    <div key={link.label}>
                      <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className={`flex items-center justify-between w-full px-3 py-3 font-body text-xs tracking-[0.2em] uppercase font-medium ${isActive(link.href) ? 'text-gold' : 'text-white/70'}`}>
                        {link.label}
                        <svg className={`w-3.5 h-3.5 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {mobileAreasOpen && (
                        <div className="pl-3 border-l border-gold/20 ml-3 mb-3">
                          {serviceAreas.map((area) => (
                            <a key={area.slug} href={`/service-areas/${area.slug}`} className="block px-3 py-1.5 font-body text-xs text-white/50 hover:text-white tracking-wide">{area.name}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a key={link.label} href={link.href} className={`block px-3 py-3 font-body text-xs tracking-[0.2em] uppercase font-medium ${isActive(link.href) ? 'text-gold' : 'text-white/70 hover:text-white'}`}>{link.label}</a>
                  )
                )}
              </nav>

              <div className="mt-10 space-y-4 pt-8 border-t border-gold/20">
                <a href="/contact" className="block w-full text-center px-6 py-4 bg-gold text-white font-body text-xs tracking-[0.2em] uppercase font-semibold">Free Consultation</a>
                <a href="tel:8322058178" className="flex items-center justify-center gap-2 text-white/40 font-body text-xs tracking-wide">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  (832) 205-8178
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
