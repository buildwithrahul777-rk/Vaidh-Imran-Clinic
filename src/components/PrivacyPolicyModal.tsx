import { X, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8E3DA] p-6 sm:p-8 space-y-5 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DA]">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-[#1B3B2B]" />
            <h3 id="privacy-policy-title" className="font-serif text-2xl font-semibold text-[#1B3B2B]">
              Privacy Policy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#535955] hover:text-[#1B3B2B] rounded-lg hover:bg-[#1B3B2B]/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-[#535955] leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          <p>
            <strong className="text-[#1E2321]">Confidentiality Commitment:</strong> At {CLINIC_INFO.name}, we hold patient confidentiality in the highest regard. Personal health discussions and consultation records are kept private between the patient and the clinic.
          </p>
          <p>
            <strong className="text-[#1E2321]">Information Collection:</strong> Any contact information provided during phone conversations or appointment inquiries is utilized strictly for scheduling your consultation and clinical correspondence.
          </p>
          <p>
            <strong className="text-[#1E2321]">Third-Party Sharing:</strong> We do not sell, rent, or share personal patient details with third-party advertisers or external marketing entities.
          </p>
          <p>
            <strong className="text-[#1E2321]">Clinic Location:</strong> Consultations take place in private rooms at our Siwan clinic (68GW+VPW, Mairwa Road, near Canara Bank, Srinagar, Ayodhyapuri, Siwan, Bihar 841226).
          </p>
        </div>

        <div className="pt-3 border-t border-[#E8E3DA] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#1B3B2B] text-[#FAF8F5] text-sm font-medium hover:bg-[#12281D] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
