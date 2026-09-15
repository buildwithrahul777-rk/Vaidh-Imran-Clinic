import { Star, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function TrustStrip() {
  return (
    <section
      id="trust"
      className="bg-[#FAF8F5] border-y border-[#E8E3DA] py-8 sm:py-10 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E8E3DA]">
          
          {/* Rating */}
          <div className="flex items-center space-x-3.5 pt-4 md:pt-0 sm:px-4">
            <div className="p-2.5 rounded-full bg-[#1B3B2B]/5 text-[#1B3B2B]">
              <Star className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="font-serif text-2xl font-bold text-[#1B3B2B] tracking-tight">
                  {CLINIC_INFO.rating.toFixed(1)}
                </span>
                <span className="text-xs font-semibold text-[#C5A880]">★</span>
              </div>
              <p className="text-xs text-[#535955] uppercase tracking-wider font-sans font-medium">
                Reported Rating
              </p>
            </div>
          </div>

          {/* Review Count */}
          <div className="flex items-center space-x-3.5 pt-4 md:pt-0 sm:px-4">
            <div className="p-2.5 rounded-full bg-[#1B3B2B]/5 text-[#1B3B2B]">
              <MessageCircle className="w-5 h-5 text-[#1B3B2B]" />
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#1B3B2B] tracking-tight">
                {CLINIC_INFO.reviewCount}
              </p>
              <p className="text-xs text-[#535955] uppercase tracking-wider font-sans font-medium">
                Google Reviews
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3.5 pt-4 md:pt-0 sm:px-4">
            <div className="p-2.5 rounded-full bg-[#1B3B2B]/5 text-[#1B3B2B]">
              <MapPin className="w-5 h-5 text-[#1B3B2B]" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-[#1B3B2B] tracking-tight">
                {CLINIC_INFO.city}, {CLINIC_INFO.state}
              </p>
              <p className="text-xs text-[#535955] uppercase tracking-wider font-sans font-medium">
                Clinic Location
              </p>
            </div>
          </div>

          {/* Confidential Consultation */}
          <div className="flex items-center space-x-3.5 pt-4 md:pt-0 sm:px-4">
            <div className="p-2.5 rounded-full bg-[#1B3B2B]/5 text-[#1B3B2B]">
              <ShieldCheck className="w-5 h-5 text-[#1B3B2B]" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold text-[#1B3B2B] tracking-tight">
                Confidential
              </p>
              <p className="text-xs text-[#535955] uppercase tracking-wider font-sans font-medium">
                Consultation
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
