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

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const navStyle = {
    background: scrolled ? 'rgba(5,5,5,0.96)' : 'transparent',
    borderBottom: scrolled ? '1px solid rgba(200,155,90,0.15)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={navStyle}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">

            {/* Logo */}
            <a href="/" className="flex-shrink-0 group">
              <img
                src="/images/logo.png"
                alt="Saadi Construction Group"
                style={{ height: '110px', width: 'auto' }}
                className="transition-opacity duration-300 group-hover:opacity-75"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', letterSpacing: '0.25em', fontWeight: 300, color: '#F5F5F5' }}>
                  SAADI<span style={{ display: 'block', fontSize: '0.55rem', letterSpacing: '0.35em', color: '#B8B8B8', marginTop: '2px' }}>CONSTRUCTION GROUP</span>
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} ref={megaRef} className="relative">
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={`nav-link flex items-center gap-1.5 font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${isActive(link.href) ? 'text-[#C89B5A]' : 'text-[#B8B8B8] hover:text-[#F5F5F5]'}`}
                    >
                      {link.label}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {megaOpen && (
                      <div style={{ background: '#0A0A0A', border: '1px solid rgba(200,155,90,0.25)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] p-8">
                        <div className="grid grid-cols-3 gap-8">
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug}>
                              <h4 style={{ borderBottom: '1px solid rgba(200,155,90,0.2)', color: '#C89B5A', fontFamily: "'Inter', sans-serif", fontSize: '9px', letterSpacing: '0.22em' }} className="uppercase font-medium mb-4 pb-2">
                                {cat.name}
                              </h4>
                              <ul className="space-y-2.5">
                                {cat.services.map((s) => (
                                  <li key={s.slug}>
                                    <a href={`/services/${s.slug}`} style={{ color: '#B8B8B8', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
                                      className="hover:text-[#C89B5A] transition-colors duration-200 block tracking-wide"
                                      onClick={() => setMegaOpen(false)}>
                                      {s.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div style={{ borderTop: '1px solid rgba(200,155,90,0.15)' }} className="mt-6 pt-5 text-center">
                          <a href="/services" style={{ color: '#C89B5A', fontSize: '10px', letterSpacing: '0.18em' }}
                            className="font-body uppercase font-medium hover:text-[#D4AF6E] transition-colors" onClick={() => setMegaOpen(false)}>
                            View All Services &rarr;
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={link.label} href={link.href}
                    className={`nav-link font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${isActive(link.href) ? 'text-[#C89B5A]' : 'text-[#B8B8B8] hover:text-[#F5F5F5]'}`}>
                    {link.label}
                  </a>
                )
              )}
            </nav>

            <div className="flex items-center gap-5">
              <a href="tel:8322058178" className="hidden xl:block font-body text-[11px] tracking-[0.12em] text-[#666666] hover:text-[#C89B5A] transition-colors duration-300">
                (832) 205-8178
              </a>
              <a href="/contact" className="hidden lg:inline-flex btn-luxe py-3 px-6 text-[10px]">
                Request a Quote
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#B8B8B8] p-2" aria-label="Toggle menu">
                {mobileOpen
                  ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div style={{ background: '#0A0A0A', borderLeft: '1px solid rgba(200,155,90,0.2)', animation: 'slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)' }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] z-50 lg:hidden overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <img src="/images/logo.png" alt="Saadi Construction Group" className="h-14 w-auto"
                  onError={(e) => { e.currentTarget.style.display='none'; }} />
                <button onClick={() => setMobileOpen(false)} className="text-[#666666] hover:text-[#F5F5F5] p-1 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <nav className="space-y-0" style={{ borderTop: '1px solid rgba(200,155,90,0.1)' }}>
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <div key={link.label} style={{ borderBottom: '1px solid rgba(200,155,90,0.1)' }}>
                      <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`flex items-center justify-between w-full py-4 font-body text-[11px] tracking-[0.18em] uppercase ${isActive(link.href) ? 'text-[#C89B5A]' : 'text-[#B8B8B8]'}`}>
                        {link.label}
                        <svg className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {mobileServicesOpen && (
                        <div className="pb-4 pl-3" style={{ borderLeft: '1px solid rgba(200,155,90,0.2)', marginLeft: '4px', marginBottom: '8px' }}>
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug} className="mb-4">
                              <p style={{ color: '#C89B5A', fontSize: '9px', letterSpacing: '0.2em' }} className="uppercase font-body px-3 py-1">{cat.name}</p>
                              {cat.services.map((s) => (
                                <a key={s.slug} href={`/services/${s.slug}`} style={{ color: '#666666', fontSize: '12px' }} className="block px-3 py-1.5 hover:text-[#F5F5F5] transition-colors tracking-wide">{s.name}</a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : link.label === 'Service Areas' ? (
                    <div key={link.label} style={{ borderBottom: '1px solid rgba(200,155,90,0.1)' }}>
                      <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                        className={`flex items-center justify-between w-full py-4 font-body text-[11px] tracking-[0.18em] uppercase ${isActive(link.href) ? 'text-[#C89B5A]' : 'text-[#B8B8B8]'}`}>
                        {link.label}
                        <svg className={`w-3.5 h-3.5 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      {mobileAreasOpen && (
                        <div className="pb-4 grid grid-cols-2 gap-x-4 gap-y-1 pl-2">
                          {serviceAreas.map((area) => (
                            <a key={area.slug} href={`/service-areas/${area.slug}`} style={{ color: '#666666', fontSize: '11px' }} className="py-1 hover:text-[#F5F5F5] transition-colors tracking-wide">{area.name}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a key={link.label} href={link.href} style={{ borderBottom: '1px solid rgba(200,155,90,0.1)', display: 'block' }}
                      className={`py-4 font-body text-[11px] tracking-[0.18em] uppercase ${isActive(link.href) ? 'text-[#C89B5A]' : 'text-[#B8B8B8]'}`}>{link.label}</a>
                  )
                )}
              </nav>

              <div className="mt-8 space-y-4">
                <a href="/contact" className="btn-luxe w-full justify-center py-4">Request a Quote</a>
                <a href="tel:8322058178" style={{ color: '#666666', fontSize: '11px', letterSpacing: '0.1em' }} className="flex justify-center font-body hover:text-[#C89B5A] transition-colors">(832) 205-8178</a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
