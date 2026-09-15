import { motion } from 'motion/react';
import { Lock, Shield, EyeOff, UserCheck, CheckCircle2 } from 'lucide-react';
import { PRIVACY_POINTS } from '../data/clinicData';
import { privacyRoomImage } from '../assets';

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 lg:py-28 bg-[#F6F3ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Frame Layout */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E3DA] p-8 sm:p-12 lg:p-16 shadow-[0_15px_50px_rgba(27,59,43,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
                <Lock className="w-3.5 h-3.5 text-[#1B3B2B]" />
                <span className="text-xs font-semibold tracking-widest uppercase font-sans">
                  Discretion & Dignity
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B] leading-tight">
                Your Privacy Matters.
              </h2>

              <p className="text-base sm:text-lg text-[#535955] leading-relaxed">
                Health conversations can be personal. The website should communicate a calm, respectful, and discreet consultation experience.
              </p>

              {/* Three Points from brief */}
              <div className="space-y-4 pt-2">
                {PRIVACY_POINTS.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E8E3DA]/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2A563F] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif font-semibold text-[#1B3B2B] text-base">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#535955] mt-0.5">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Discreet assurance */}
              <div className="flex items-center space-x-4 pt-4 text-xs text-[#535955]">
                <div className="flex items-center space-x-1.5">
                  <EyeOff className="w-4 h-4 text-[#1B3B2B]" />
                  <span>Private Records</span>
                </div>
                <div className="h-3 w-px bg-[#E8E3DA]" />
                <div className="flex items-center space-x-1.5">
                  <UserCheck className="w-4 h-4 text-[#1B3B2B]" />
                  <span>Direct Consultation</span>
                </div>
                <div className="h-3 w-px bg-[#E8E3DA]" />
                <div className="flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-[#1B3B2B]" />
                  <span>Zero Stigma</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E8E3DA] aspect-[16/10] bg-[#E8E3DA]">
                <img
                  src={privacyRoomImage}
                  alt="Quiet premium private healthcare consultation room at Vaidh Imran Clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-white/60 text-xs">
                  <p className="font-medium text-[#1B3B2B]">Quiet Consultation Setting</p>
                  <p className="text-[11px] text-[#535955]">Engineered for discretion, comfort, and peaceful discussion</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
