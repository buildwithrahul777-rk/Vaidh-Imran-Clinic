import { Phone, Navigation, Calendar, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ConsultationCtaProps {
  onOpenBooking: () => void;
}

export function ConsultationCta({ onOpenBooking }: ConsultationCtaProps) {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name}, ${CLINIC_INFO.plusCode}, ${CLINIC_INFO.streetAddress}, ${CLINIC_INFO.landmark}, ${CLINIC_INFO.city}, ${CLINIC_INFO.state} ${CLINIC_INFO.pincode}`
  )}`;

  return (
    <section className="py-20 lg:py-24 bg-[#1B3B2B] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C5A880]/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#2A563F]/50 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Subtle trust badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C5A880]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-widest uppercase font-sans">
            Private & Confidential
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Take the First Step Toward Better Health.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-xl mx-auto leading-relaxed">
          Speak with the clinic and discuss your concerns in a private consultation.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            id="consultation-cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1B3B2B] text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="w-4 h-4 text-[#1B3B2B]" />
            <span>Call for Consultation</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="consultation-cta-schedule-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-medium transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            <span>Request Time Slot</span>
          </button>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="consultation-cta-directions-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white text-base font-medium transition-colors"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="text-xs text-[#FAF8F5]/60 pt-2">
          Vaidh Imran Clinic • 68GW+VPW, Mairwa Road, near Canara Bank, Siwan • 094106 24243
        </p>

      </div>
    </section>
  );
}
