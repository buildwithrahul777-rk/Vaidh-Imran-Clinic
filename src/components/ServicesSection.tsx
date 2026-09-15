import { useState } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Leaf, ShieldCheck, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#1B3B2B]" />;
      case 'leaf':
        return <Leaf className="w-6 h-6 text-[#1B3B2B]" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-[#1B3B2B]" />;
      case 'compass':
        return <Compass className="w-6 h-6 text-[#1B3B2B]" />;
      case 'heart-handshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-[#1B3B2B]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F6F3ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B3B2B]" />
            <span className="text-xs font-semibold tracking-widest uppercase font-sans">
              Clinical Areas
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B]">
            Sexual Health Consultation
          </h2>

          <p className="text-base sm:text-lg text-[#535955] leading-relaxed max-w-2xl mx-auto">
            Broad, respectful clinical consultation categories conducted in a private setting in Siwan, focused on patient dignity and personalized guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-[#FAF8F5] rounded-2xl p-7 sm:p-8 border border-[#E8E3DA] hover:border-[#C5A880]/60 shadow-[0_4px_20px_rgba(27,59,43,0.03)] hover:shadow-[0_12px_30px_rgba(27,59,43,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Minimal Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E3DA] flex items-center justify-center mb-6 group-hover:bg-[#1B3B2B]/5 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1B3B2B] mb-3 group-hover:text-[#12281D] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#535955] leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Button: Learn More */}
              <div className="pt-4 border-t border-[#E8E3DA]/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  id={`service-learn-more-${service.id}`}
                  className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1B3B2B] group-hover:text-[#12281D] focus:outline-none"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transform group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] text-[#88908B] font-medium">
                  Confidential
                </span>
              </div>
            </motion.div>
          ))}

          {/* Dedicated Consultation Notice Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1B3B2B] text-[#FAF8F5] rounded-2xl p-7 sm:p-8 border border-[#12281D] shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center space-x-1 text-xs text-[#C5A880] uppercase tracking-wider font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Private Clinical Setting</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                Have a Personal Question?
              </h3>

              <p className="text-sm text-[#FAF8F5]/80 leading-relaxed mb-6">
                All consultations begin with a quiet, respectful discussion. Discuss your concerns directly with the clinic in total confidentiality.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              id="services-request-consultation-btn"
              className="w-full py-3 px-5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1B3B2B] font-medium text-sm transition-all shadow hover:shadow-md flex items-center justify-center space-x-2"
            >
              <span>Schedule a Conversation</span>
              <ArrowRight className="w-4 h-4 text-[#1B3B2B]" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
