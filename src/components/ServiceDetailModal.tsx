import { X, ShieldCheck, CheckCircle, Calendar, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export function ServiceDetailModal({ service, onClose, onOpenBooking }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8E3DA] overflow-hidden transform transition-all text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B3B2B] text-[#FAF8F5] p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#FAF8F5]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 text-xs text-[#C5A880] uppercase tracking-wider font-medium mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Confidential Consultation</span>
          </div>

          <h3 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-white">
            {service.title}
          </h3>

          <p className="text-[#FAF8F5]/80 text-sm mt-2 font-normal leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#535955] font-semibold mb-2">
              Clinical Overview
            </h4>
            <p className="text-sm sm:text-base text-[#1E2321] leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Key Discussion Topics */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#535955] font-semibold mb-3">
              Key Discussion Focus
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.discussionTopics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-2.5 text-sm text-[#1E2321]">
                  <CheckCircle className="w-4 h-4 text-[#2A563F] shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Approach */}
          <div className="p-4 rounded-xl bg-white border border-[#E8E3DA] space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#1B3B2B] font-semibold">
              Our Consultation Promise
            </h4>
            <ul className="space-y-1.5 text-xs text-[#535955]">
              {service.approachPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full bg-[#1B3B2B] hover:bg-[#12281D] text-[#FAF8F5] text-sm font-medium transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>Book Consultation for This Service</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-full border border-[#1B3B2B]/20 text-[#1B3B2B] hover:bg-[#1B3B2B]/5 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1B3B2B]" />
              <span>Call Clinic</span>
            </a>
          </div>

          <p className="text-[11px] text-[#88908B] text-center">
            All consultations are strictly confidential. We do not make unsupported medical guarantees.
          </p>
        </div>
      </div>
    </div>
  );
}
