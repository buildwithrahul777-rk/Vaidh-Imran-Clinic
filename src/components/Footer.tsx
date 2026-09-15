import { useState } from 'react';
import { Phone, Globe, MapPin, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { DisclaimerModal } from './DisclaimerModal';

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="bg-[#12281D] text-[#FAF8F5] pt-16 pb-12 border-t border-[#1B3B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                VAIDH IMRAN CLINIC
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C5A880] font-sans font-medium mt-1 block">
                Sexologist • Ayurvedic Sexual Health
              </span>
            </div>

            <p className="text-sm text-[#FAF8F5]/70 max-w-md leading-relaxed">
              Professional Ayurvedic sexual health consultation in Siwan with a focus on privacy, personalised guidance, and patient comfort.
            </p>

            <div className="flex items-center space-x-2 text-xs text-[#FAF8F5]/60 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{CLINIC_INFO.city}, {CLINIC_INFO.state} • 68GW+VPW, Mairwa Road</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">Approach</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setDisclaimerOpen(true)}
                  className="hover:text-white transition-colors text-left focus:outline-none"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Clinic Contact
            </h4>
            <div className="space-y-3 text-sm text-[#FAF8F5]/80">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white font-medium"
                >
                  {CLINIC_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-[#C5A880]" />
                <a
                  href={`https://${CLINIC_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {CLINIC_INFO.website}
                </a>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-[#FAF8F5]/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Confidential Consultation</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Clear Medical Disclaimer as mandated by brief */}
        <div className="pt-8 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F5]/70 leading-relaxed text-center sm:text-left">
            <span className="font-semibold text-white">Medical Disclaimer: </span>
            “Information on this website is for general informational purposes and does not replace professional medical advice. Consult a qualified healthcare professional for individual medical concerns.”
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Vaidh Imran Clinic. All rights reserved.</p>
          <p className="flex items-center space-x-4">
            <span>Siwan, Bihar 841226</span>
            <span>•</span>
            <span>Sexologist / Ayurvedic Sexual Health</span>
          </p>
        </div>

      </div>

      {/* Modals */}
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <DisclaimerModal isOpen={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />
    </footer>
  );
}
