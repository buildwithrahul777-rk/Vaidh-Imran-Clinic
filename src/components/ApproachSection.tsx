import { motion } from 'motion/react';
import { APPROACH_STEPS } from '../data/clinicData';
import { ayurvedicDetailImage } from '../assets';
import { Leaf, Check, ShieldCheck } from 'lucide-react';

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B2B]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
            <Leaf className="w-3.5 h-3.5 text-[#1B3B2B]" />
            <span className="text-xs font-semibold tracking-widest uppercase font-sans">
              Our Methodology
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B] leading-tight">
            An Ayurvedic Approach to Personal Wellbeing.
          </h2>

          <p className="text-base sm:text-lg text-[#535955] leading-relaxed max-w-2xl mx-auto">
            Grounded in traditional Ayurvedic philosophy, our clinical approach prioritizes balanced lifestyle habits, personal constitution, and respectful dialogue.
          </p>
        </div>

        {/* Three-Part Clean Layout Paired with Editorial Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl p-2 bg-[#F2EDE4] border border-[#E8E3DA] shadow-[0_15px_40px_rgba(27,59,43,0.06)]">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <img
                    src={ayurvedicDetailImage}
                    alt="Tasteful Ayurvedic wellness elements in a contemporary healthcare environment"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12281D]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Editorial Callout */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#E8E3DA] text-xs text-[#535955] flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#1B3B2B] shrink-0" />
                <p>
                  Responsible Ayurvedic guidance focusing on sustainable physical balance and mental ease.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-6">
              {APPROACH_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E3DA] hover:border-[#C5A880]/50 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-start space-x-5">
                    {/* Number Indicator */}
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A880] group-hover:text-[#1B3B2B] transition-colors shrink-0">
                      {step.number}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-semibold text-[#1B3B2B]">
                        {step.title}
                      </h3>
                      <p className="text-base text-[#535955] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Respectful Note */}
            <div className="p-4 rounded-xl bg-[#F6F3ED] border border-[#E8E3DA]/80 text-xs text-[#535955] flex items-center space-x-2.5">
              <Check className="w-4 h-4 text-[#2A563F] shrink-0" />
              <span>
                Ayurvedic guidance at Vaidh Imran Clinic is provided responsibly to support natural wellbeing without making unverified medical cure claims.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
