import { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(27,59,43,0.06)] border-b border-[#E8E3DA]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-5 border-b border-[#E8E3DA]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/20 rounded-md p-1 -m-1"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1B3B2B] transition-colors group-hover:text-[#12281D]">
                VAIDH IMRAN CLINIC
              </span>
            </div>
            <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#535955] font-sans font-medium mt-0.5">
              Ayurvedic Sexual Health • Siwan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="text-sm font-medium text-[#1E2321] hover:text-[#1B3B2B] px-3.5 py-2 rounded-lg transition-colors hover:bg-[#1B3B2B]/5 focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA Group */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              id="nav-phone-call-desktop"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#1B3B2B] hover:text-[#12281D] bg-[#1B3B2B]/5 hover:bg-[#1B3B2B]/10 px-3 py-2 rounded-full border border-[#1B3B2B]/15 transition-all"
              title="Call Vaidh Imran Clinic directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B3B2B]" />
              <span className="tracking-wide">{CLINIC_INFO.displayPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="nav-book-consultation-btn"
              className="inline-flex items-center space-x-2 text-sm font-medium text-[#FAF8F5] bg-[#1B3B2B] hover:bg-[#12281D] px-4 py-2 rounded-full shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1B3B2B]"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Actions: Phone Call & Hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              id="nav-mobile-quick-call"
              className="inline-flex items-center justify-center p-2 rounded-full text-[#1B3B2B] bg-[#1B3B2B]/10 hover:bg-[#1B3B2B]/20 transition-colors"
              aria-label="Call clinic directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle-btn"
              className="p-2 rounded-lg text-[#1E2321] hover:bg-[#1B3B2B]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FAF8F5] border-b border-[#E8E3DA] px-4 pt-3 pb-6 space-y-3 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E2321] hover:text-[#1B3B2B] hover:bg-[#1B3B2B]/5 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E3DA] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#535955] px-2 py-1">
              <span className="flex items-center space-x-1">
                <Shield className="w-3.5 h-3.5 text-[#1B3B2B]" />
                <span>Confidential Consultation</span>
              </span>
              <span>Siwan, Bihar</span>
            </div>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl border border-[#1B3B2B]/20 text-[#1B3B2B] font-medium text-sm bg-white"
            >
              <Phone className="w-4 h-4 text-[#1B3B2B]" />
              <span>Call {CLINIC_INFO.displayPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl text-[#FAF8F5] font-medium text-sm bg-[#1B3B2B] hover:bg-[#12281D] shadow-sm flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
