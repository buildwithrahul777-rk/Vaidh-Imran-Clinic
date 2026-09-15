import React, { useState } from 'react';
import { X, ShieldCheck, Phone, CheckCircle, Calendar, Clock, Lock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consultationType: 'In-Person (Siwan Clinic)',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      consultationType: 'In-Person (Siwan Clinic)',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E8E3DA] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B3B2B] text-[#FAF8F5] p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#FAF8F5]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 text-xs text-[#C5A880] uppercase tracking-wider font-semibold mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Strictly Confidential</span>
          </div>

          <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-white">
            Schedule a Consultation
          </h3>

          <p className="text-[#FAF8F5]/80 text-sm mt-1.5 leading-relaxed font-normal">
            Request a private consultation time at Vaidh Imran Clinic in Siwan, Bihar.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-[#2A563F]" />
              </div>

              <h4 className="font-serif text-2xl font-semibold text-[#1B3B2B]">
                Request Received
              </h4>

              <p className="text-sm text-[#535955] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1E2321]">{formData.name || 'Patient'}</strong>. Our clinic coordinator will discreetly reach out to confirm your private time slot.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E8E3DA] text-xs text-[#535955] text-left space-y-1.5">
                <p><span className="font-medium text-[#1E2321]">Type:</span> {formData.consultationType}</p>
                <p><span className="font-medium text-[#1E2321]">Preferred Window:</span> {formData.preferredTime}</p>
                <p><span className="font-medium text-[#1E2321]">Location:</span> 68GW+VPW, Mairwa Road, Siwan</p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3 px-4 rounded-full bg-[#1B3B2B] text-white text-sm font-medium hover:bg-[#12281D] flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>Call Directly Now</span>
                </a>

                <button
                  onClick={handleReset}
                  className="py-3 px-6 rounded-full border border-[#E8E3DA] text-sm text-[#535955] hover:text-[#1E2321] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Privacy Reassurance Banner */}
              <div className="p-3 rounded-xl bg-[#F6F3ED] border border-[#E8E3DA] flex items-center space-x-2.5 text-xs text-[#535955]">
                <ShieldCheck className="w-4 h-4 text-[#2A563F] shrink-0" />
                <span>Your contact details remain confidential. No medical questions are required here.</span>
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2321] mb-1.5">
                  Name / Preferred Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., A. Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E3DA] bg-white text-sm text-[#1E2321] placeholder-[#88908B] focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/20 focus:border-[#1B3B2B]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2321] mb-1.5">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8E3DA] bg-white text-sm text-[#1E2321] placeholder-[#88908B] focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/20 focus:border-[#1B3B2B]"
                />
              </div>

              {/* Consultation Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2321] mb-1.5">
                    Consultation Type
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8E3DA] bg-white text-xs text-[#1E2321] focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/20"
                  >
                    <option value="In-Person (Siwan Clinic)">In-Person (Siwan Clinic)</option>
                    <option value="Confidential Phone Guidance">Confidential Phone Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E2321] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E8E3DA] bg-white text-xs text-[#1E2321] focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]/20"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  id="modal-submit-consultation-btn"
                  className="w-full py-3.5 px-5 rounded-full bg-[#1B3B2B] hover:bg-[#12281D] text-[#FAF8F5] text-sm font-medium transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Request Private Appointment</span>
                </button>

                <div className="text-center">
                  <span className="text-xs text-[#88908B]">or speak directly with the clinic right now:</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                    className="mt-1 flex items-center justify-center space-x-2 text-xs font-semibold text-[#1B3B2B] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1B3B2B]" />
                    <span>Call {CLINIC_INFO.displayPhone}</span>
                  </a>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
