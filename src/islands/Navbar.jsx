import { useState, useEffect, useRef } from 'react';
import { serviceCategories } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Service Areas', href: '/service-areas', hasAreas: true },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || mobileOpen ? 'rgba(251,246,237,.96)' : 'linear-gradient(180deg, rgba(20,34,50,.78), rgba(20,34,50,0))',
          borderBottom: scrolled || mobileOpen ? '1px solid rgba(71,57,40,.13)' : '1px solid transparent',
          backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
        }}
      >
        <div className="container-main">
          <div className="flex h-24 md:h-28 items-center justify-between gap-5">
            <a href="/" className="flex min-w-0 items-center" aria-label="Saadi Construction Group home">
              <img
                src={scrolled || mobileOpen ? '/images/saadi-logo-horizontal.svg' : '/images/saadi-logo-horizontal-light.svg'}
                alt="Saadi Construction Group"
                className="h-auto w-[138px] shrink-0 object-contain sm:w-[154px] md:w-[176px]"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} ref={megaRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setMegaOpen(!megaOpen)}
                      className={`nav-link font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${isActive(link.href) ? 'active text-[#b88a4a]' : scrolled ? 'text-[#17202a] hover:text-[#b88a4a]' : 'text-[#fff8ed] hover:text-[#e7c797]'}`}
                    >
                      {link.label}
                    </button>
                    {megaOpen && (
                      <div className="absolute left-1/2 top-full mt-7 w-[720px] -translate-x-1/2 border border-[rgba(71,57,40,.15)] bg-[#fbf6ed] p-8 shadow-[0_28px_80px_rgba(20,34,50,.24)]">
                        <div className="grid grid-cols-3 gap-8">
                          {serviceCategories.map((cat) => (
                            <div key={cat.slug}>
                              <p className="eyebrow mb-4 border-b border-[rgba(71,57,40,.12)] pb-3">{cat.name}</p>
                              <ul className="space-y-3">
                                {cat.services.map((s) => (
                                  <li key={s.slug}>
                                    <a href={`/services/${s.slug}`} onClick={() => setMegaOpen(false)} className="block text-sm leading-6 text-[#334155] transition-colors hover:text-[#b88a4a]">
                                      {s.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <a href="/services" onClick={() => setMegaOpen(false)} className="mt-7 inline-flex text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b88a4a] hover:text-[#17202a]">View all services →</a>
                      </div>
                    )}
                  </div>
                ) : (
                  <a key={link.label} href={link.href} className={`nav-link font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${isActive(link.href) ? 'active text-[#b88a4a]' : scrolled ? 'text-[#17202a] hover:text-[#b88a4a]' : 'text-[#fff8ed] hover:text-[#e7c797]'}`}>{link.label}</a>
                )
              )}
            </nav>

            <div className="hidden items-center gap-5 lg:flex">
              <a href="tel:+18322058178" className={`text-[12px] font-semibold tracking-[0.12em] transition-colors ${scrolled ? 'text-[#17202a] hover:text-[#b88a4a]' : 'text-[#fff8ed] hover:text-[#e7c797]'}`}>(832) 205-8178</a>
              <a href="/contact" className="btn-luxe-fill px-5 py-3 text-[10px]">Request a Quote</a>
            </div>

            <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-3 ${scrolled || mobileOpen ? 'text-[#17202a]' : 'text-[#fff8ed]'}`} aria-label="Toggle navigation" aria-expanded={mobileOpen}>
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbf6ed] pt-28 lg:hidden">
          <div className="container-main h-full overflow-y-auto pb-10">
            <nav className="divide-y divide-[rgba(71,57,40,.13)]" aria-label="Mobile navigation">
              {navLinks.map((link) => link.hasMega ? (
                <div key={link.label}>
                  <button type="button" onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#17202a]">Services <span>{mobileServicesOpen ? '−' : '+'}</span></button>
                  {mobileServicesOpen && <div className="grid gap-5 pb-5">
                    {serviceCategories.map((cat) => <div key={cat.slug}><p className="eyebrow mb-2">{cat.name}</p>{cat.services.map((s) => <a key={s.slug} href={`/services/${s.slug}`} className="block py-1.5 text-sm text-[#334155]">{s.name}</a>)}</div>)}
                  </div>}
                </div>
              ) : link.hasAreas ? (
                <div key={link.label}>
                  <button type="button" onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#17202a]">Service Areas <span>{mobileAreasOpen ? '−' : '+'}</span></button>
                  {mobileAreasOpen && <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-5">{serviceAreas.map((area) => <a key={area.slug} href={`/service-areas/${area.slug}`} className="text-sm text-[#334155]">{area.name}</a>)}</div>}
                </div>
              ) : <a key={link.label} href={link.href} className="block py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#17202a]">{link.label}</a>)}
            </nav>
            <div className="mt-8 grid gap-4">
              <a href="/contact" className="btn-luxe-fill w-full">Request a Quote</a>
              <a href="tel:+18322058178" className="btn-luxe w-full">Call (832) 205-8178</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
