import { motion } from 'motion/react';
import { Phone, Calendar, MapPin, Shield, ChevronDown } from 'lucide-react';
import { heroImage } from '../assets';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const headlines = [
    'Confidential Care.',
    'Personalised Guidance.',
    'Better Health.'
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-[#FAF8F5] via-[#F6F3ED] to-[#FAF8F5] overflow-hidden"
    >
      {/* Subtle organic background accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E5ECE7]/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F2EDE4]/80 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1B3B2B]/8 border border-[#1B3B2B]/15 text-[#1B3B2B]"
            >
              <Shield className="w-3.5 h-3.5 text-[#1B3B2B]" />
              <span className="text-xs font-semibold tracking-widest uppercase font-sans">
                AYURVEDIC SEXUAL HEALTH • SIWAN
              </span>
            </motion.div>

            {/* Headline line-by-line entrance */}
            <div className="space-y-1 sm:space-y-2">
              {headlines.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1B3B2B] leading-[1.12] ${
                      index === 2 ? 'text-[#C5A880] italic' : ''
                    }`}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#535955] max-w-xl font-normal leading-relaxed"
            >
              Professional Ayurvedic sexual health consultation in Siwan with a focus on privacy, personalised guidance, and patient comfort.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                id="hero-book-consultation-cta"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#1B3B2B] hover:bg-[#12281D] text-[#FAF8F5] text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1B3B2B] group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C5A880] transition-transform group-hover:scale-110" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EFE9] text-[#1B3B2B] border border-[#E8E3DA] text-base font-medium transition-all duration-300 shadow-sm hover:shadow"
              >
                <Phone className="w-4 h-4 text-[#1B3B2B]" />
                <span>Call {CLINIC_INFO.displayPhone}</span>
              </a>
            </motion.div>

            {/* Subtle Trust & Location Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center space-x-6 pt-4 border-t border-[#E8E3DA]/80 text-xs sm:text-sm text-[#535955]"
            >
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#1B3B2B]" />
                <span className="font-medium text-[#1E2321]">{CLINIC_INFO.city}, {CLINIC_INFO.state}</span>
              </div>
              <div className="h-3 w-px bg-[#E8E3DA]" />
              <div className="flex items-center space-x-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2A563F]" />
                <span>Private & Confidential</span>
              </div>
              <div className="h-3 w-px bg-[#E8E3DA]" />
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-[#1E2321]">5.0 ★</span>
                <span className="text-[#535955]">(615 reviews)</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-[#E8E3DA] to-[#FAF8F5] shadow-[0_20px_50px_rgba(27,59,43,0.12)]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <motion.img
                    src={heroImage}
                    alt="Vaidh Imran Clinic calm and discreet consultation environment in Siwan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12281D]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-white/90 backdrop-blur-md border border-white/50 text-[#1E2321] text-xs flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#1B3B2B]">Private Clinical Environment</p>
                      <p className="text-[11px] text-[#535955]">Mairwa Road, Siwan</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] font-medium text-[10px] tracking-wide">
                      Discreet Care
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-6 -right-6 -z-10 w-44 h-44 rounded-2xl border border-[#C5A880]/30 bg-[#C5A880]/5 hidden sm:block" />
            </motion.div>
          </div>

        </div>

        {/* Small subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mt-12 lg:mt-16"
        >
          <a
            href="#trust"
            id="hero-scroll-indicator"
            aria-label="Scroll to trust and credentials section"
            className="flex flex-col items-center space-y-1 text-[#88908B] hover:text-[#1B3B2B] transition-colors group"
          >
            <span className="text-[11px] uppercase tracking-widest font-sans font-medium">Explore Overview</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
