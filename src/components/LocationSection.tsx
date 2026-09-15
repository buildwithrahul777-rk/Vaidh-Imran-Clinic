import { useState } from 'react';
import { MapPin, Phone, Globe, Navigation, Copy, Check, Clock, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name}, ${CLINIC_INFO.plusCode}, ${CLINIC_INFO.streetAddress}, ${CLINIC_INFO.landmark}, ${CLINIC_INFO.city}, ${CLINIC_INFO.state} ${CLINIC_INFO.pincode}`
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F3ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
            <MapPin className="w-3.5 h-3.5 text-[#1B3B2B]" />
            <span className="text-xs font-semibold tracking-widest uppercase font-sans">
              Clinic Location
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B]">
            Visit Vaidh Imran Clinic
          </h2>

          <p className="text-base sm:text-lg text-[#535955] leading-relaxed max-w-2xl mx-auto">
            Conveniently situated in Siwan, Bihar on Mairwa Road near Canara Bank, offering dedicated private consultation rooms.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-8 sm:p-10 border border-[#E8E3DA] shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C5A880]">
                  Official Address
                </span>
                <div className="mt-2 space-y-1 text-[#1E2321]">
                  <p className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B]">
                    {CLINIC_INFO.name}
                  </p>
                  <p className="text-sm sm:text-base text-[#1E2321] leading-relaxed">
                    <span className="font-medium text-[#1B3B2B]">Plus Code:</span> {CLINIC_INFO.plusCode}
                  </p>
                  <p className="text-sm sm:text-base text-[#535955] leading-relaxed">
                    {CLINIC_INFO.streetAddress}, {CLINIC_INFO.landmark}
                  </p>
                  <p className="text-sm sm:text-base text-[#535955]">
                    {CLINIC_INFO.area}
                  </p>
                  <p className="text-sm sm:text-base text-[#1B3B2B] font-medium">
                    {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.pincode}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-[#E8E3DA] space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E3DA] flex items-center justify-center text-[#1B3B2B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#535955] block">Direct Telephone</span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-[#1B3B2B] hover:text-[#12281D]"
                    >
                      {CLINIC_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E3DA] flex items-center justify-center text-[#1B3B2B]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#535955] block">Official Website</span>
                    <a
                      href={`https://${CLINIC_INFO.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1B3B2B] hover:text-[#12281D]"
                    >
                      {CLINIC_INFO.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E3DA] flex items-center justify-center text-[#1B3B2B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#535955] block">Consultation Days</span>
                    <span className="text-sm font-medium text-[#1E2321]">
                      Monday – Saturday (Appointments Encouraged)
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  id="location-call-btn"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#1B3B2B] hover:bg-[#12281D] text-[#FAF8F5] text-sm font-medium transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-directions-btn"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-white hover:bg-[#F3EFE9] text-[#1B3B2B] border border-[#E8E3DA] text-sm font-medium transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#1B3B2B]" />
                  <span>Get Directions</span>
                </a>
              </div>

              <button
                onClick={handleCopyAddress}
                id="location-copy-address-btn"
                className="w-full py-2.5 px-4 rounded-full border border-dashed border-[#1B3B2B]/30 hover:border-[#1B3B2B] text-xs font-medium text-[#1B3B2B] transition-colors flex items-center justify-center space-x-1.5 bg-white/50"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#2A563F]" />
                    <span className="text-[#2A563F]">Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#535955]" />
                    <span>Copy Full Address & Landmark</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Map View Frame */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl border border-[#E8E3DA] overflow-hidden shadow-sm flex flex-col min-h-[420px]">
            {/* Map Top Bar */}
            <div className="p-4 bg-white border-b border-[#E8E3DA] flex items-center justify-between text-xs text-[#535955]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#1B3B2B]" />
                <span className="font-medium text-[#1B3B2B]">Siwan, Bihar — Landmark: Near Canara Bank</span>
              </div>
              <span className="text-[11px] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E3DA]">
                Plus Code: 68GW+VPW
              </span>
            </div>

            {/* Embedded Interactive Map */}
            <div className="relative flex-1 w-full bg-[#E8E3DA]">
              <iframe
                title="Vaidh Imran Clinic Location in Siwan, Bihar"
                src="https://maps.google.com/maps?q=68GW%2BVPW+Mairwa+Road+near+Canara+Bank+Siwan+Bihar+841226&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[350px]"
              />
            </div>

            {/* Notice strip */}
            <div className="p-3 bg-[#FAF8F5] border-t border-[#E8E3DA] text-[11px] text-[#535955] flex items-center justify-between px-5">
              <span className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-[#1B3B2B]" />
                <span>Discreet entrance & private waiting lounge</span>
              </span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3B2B] hover:underline font-medium"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
