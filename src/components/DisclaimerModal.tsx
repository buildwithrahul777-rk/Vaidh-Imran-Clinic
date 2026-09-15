import { X, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8E3DA] p-6 sm:p-8 space-y-5 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E3DA]">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-[#C5A880]" />
            <h3 id="disclaimer-title" className="font-serif text-2xl font-semibold text-[#1B3B2B]">
              Medical Disclaimer
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
          <p className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#1E2321] font-medium">
            “Information on this website is for general informational purposes and does not replace professional medical advice. Consult a qualified healthcare professional for individual medical concerns.”
          </p>
          <p>
            The content presented on this demo website for {CLINIC_INFO.name} is intended to describe general clinical consultation areas and traditional Ayurvedic wellbeing principles.
          </p>
          <p>
            No statements on this website are intended to diagnose, treat, cure, or prevent any specific illness or guarantee a predetermined medical result. Each person’s physical constitution, health history, and response to wellness practices vary.
          </p>
          <p>
            In the event of an urgent or emergency medical condition, please contact local emergency medical services or seek acute hospital care immediately.
          </p>
        </div>

        <div className="pt-3 border-t border-[#E8E3DA] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#1B3B2B] text-[#FAF8F5] text-sm font-medium hover:bg-[#12281D] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
