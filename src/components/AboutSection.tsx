import { motion } from 'motion/react';
import { HeartHandshake, Shield, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B3B2B]" />
            <span className="text-xs font-semibold tracking-widest uppercase font-sans">
              About The Clinic
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B] leading-tight">
            Care That Begins With a Conversation.
          </h2>

          <p className="text-base sm:text-lg text-[#535955] leading-relaxed max-w-2xl mx-auto">
            Vaidh Imran Clinic provides a private setting for individuals seeking guidance related to sexual health and wellbeing.
          </p>
        </div>

        {/* Editorial Layout: Philosophy & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E3DA] shadow-[0_10px_30px_rgba(27,59,43,0.03)] space-y-6">
              
              <blockquote className="border-l-2 border-[#C5A880] pl-5 sm:pl-6 text-xl sm:text-2xl font-serif text-[#1B3B2B] italic leading-snug">
                “Every consultation should begin with listening, understanding, and personalised guidance.”
              </blockquote>

              <p className="text-[#535955] text-base leading-relaxed">
                At Vaidh Imran Clinic in Siwan, we understand that sexual health conversations can feel sensitive and daunting. Our clinical practice is built on complete discretion, mutual respect, and unhurried dialogue. We do not rush patients through impersonal checklists; rather, we take the time to hear your individual journey.
              </p>

              <p className="text-[#535955] text-base leading-relaxed">
                By combining traditional Ayurvedic health principles with modern clinical attentiveness, our consultations focus on overall constitution, lifestyle harmony, and responsible guidance tailored to the individual.
              </p>

              <div className="pt-4 border-t border-[#E8E3DA] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2A563F] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#1B3B2B] text-base">Private Clinical Space</h3>
                    <p className="text-xs text-[#535955] mt-0.5">Separate consultation rooms ensuring complete discretion</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2A563F] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#1B3B2B] text-base">Respectful Dialogue</h3>
                    <p className="text-xs text-[#535955] mt-0.5">Non-judgmental communication centered on patient dignity</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Commitments */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C5A880]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B]">
                Absolute Confidentiality
              </h3>
              <p className="text-sm text-[#535955] leading-relaxed">
                Your records, discussions, and personal identity remain strictly confidential. Every patient interaction is protected by professional clinical privacy standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-[#C5A880]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B]">
                Patient-Centered Guidance
              </h3>
              <p className="text-sm text-[#535955] leading-relaxed">
                We believe in providing clear, sensible guidance without exaggerated claims. Recommendations are customized to support your long-term physical and mental balance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3ED] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B3B2B] text-[#FAF8F5] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#C5A880]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1B3B2B]">
                Dedicated Consultation Time
              </h3>
              <p className="text-sm text-[#535955] leading-relaxed">
                Patients receive uninterrupted one-on-one attention in Siwan, providing ample opportunity to voice concerns and receive thoughtful responses.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
