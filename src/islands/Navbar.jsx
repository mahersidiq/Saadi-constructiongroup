import { useState, useEffect, useRef } from 'react';
import { serviceCategories } from '@/data/services';

const primaryLinks = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Neighborhoods', href: '/service-areas' },
  { label: 'Guides', href: '/blog' },
  { label: 'Planning Tools', href: '/tools' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ pathname = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#1c1917]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3 shadow-md'
            : 'bg-gradient-to-b from-[#1c1917]/90 to-transparent py-5'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between gap-6">
            {/* Brand Wordmark */}
            <a
              href="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none"
              aria-label="Saadi Construction Group Home"
            >
              <img
                src="/images/Emblem.png"
                alt="SCG Emblem"
                className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-heading text-xl font-semibold tracking-[0.16em] uppercase text-[#fffdf8] md:text-2xl whitespace-nowrap">
                Saadi <span className="font-sans font-light text-xs tracking-[0.22em] text-[#dfc8a7] hidden sm:inline">Construction Group</span>
              </span>
            </a>

            {/* Primary Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-sans font-semibold uppercase tracking-[0.18em]" aria-label="Primary navigation">
              {primaryLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`uppercase whitespace-nowrap transition-colors py-2 flex items-center gap-1.5 ${
                        isActive(link.href) ? 'text-[#dfc8a7]' : 'text-[#fffdf8]/85 hover:text-[#dfc8a7]'
                      }`}
                    >
                      {link.label}
                      <span className="text-[9px] opacity-60">▾</span>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-80 border border-[rgba(28,25,23,0.12)] bg-[#fbf9f5] p-6 shadow-xl text-[#1c1917]">
                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8c6d46] pb-2 border-b border-[rgba(28,25,23,0.08)] mb-3">
                          Design-Build Capabilities
                        </p>
                        <ul className="space-y-2.5">
                          {serviceCategories[0]?.services.map((s) => (
                            <li key={s.slug}>
                              <a
                                href={`/services/${s.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="block text-xs font-sans font-normal normal-case tracking-normal text-[#1c1917]/80 hover:text-[#8c6d46] transition-colors"
                              >
                                {s.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-[rgba(28,25,23,0.08)]">
                          <a
                            href="/services"
                            onClick={() => setDropdownOpen(false)}
                            className="block font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8c6d46] hover:underline"
                          >
                            All 21 Services →
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`whitespace-nowrap transition-colors py-2 relative ${
                      isActive(link.href)
                        ? 'text-[#dfc8a7] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#dfc8a7]'
                        : 'text-[#fffdf8]/85 hover:text-[#dfc8a7]'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Primary Action */}
            <div className="hidden sm:flex items-center gap-5 shrink-0">
              <a
                href="tel:+18323603804"
                className="hidden xl:inline text-xs font-sans font-medium text-[#dfc8a7] hover:text-[#fffdf8] transition-colors tracking-wider tabular-nums"
              >
                (832) 360-3804
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#8c6d46] px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fffdf8] transition hover:bg-[#a68254] whitespace-nowrap"
              >
                Consultation
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#fffdf8] border border-white/20 px-3.5 py-2"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbf9f5] pt-24 lg:hidden">
          <div className="container-main py-6 flex flex-col justify-between h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="divide-y divide-[rgba(28,25,23,0.08)]">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-heading text-2xl font-medium text-[#1c1917] hover:text-[#8c6d46]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="space-y-4 pt-6 border-t border-[rgba(28,25,23,0.1)]">
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#8c6d46] py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#fffdf8]"
              >
                Request Feasibility Consultation
              </a>
              <a
                href="tel:+18323603804"
                className="block w-full text-center border border-[rgba(28,25,23,0.2)] py-3 font-sans text-xs font-semibold uppercase tracking-wider text-[#1c1917] tabular-nums"
              >
                Call (832) 360-3804
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
