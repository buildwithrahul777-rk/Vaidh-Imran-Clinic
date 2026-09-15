import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { PrivacySection } from './components/PrivacySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ConsultationCta } from './components/ConsultationCta';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2321] font-sans flex flex-col selection:bg-[#1B3B2B] selection:text-[#FAF8F5]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />
        <TrustStrip />
        <AboutSection onOpenBooking={() => setBookingModalOpen(true)} />
        <ServicesSection onOpenBooking={() => setBookingModalOpen(true)} />
        <ApproachSection />
        <PrivacySection />
        <ReviewsSection />
        <LocationSection />
        <ConsultationCta onOpenBooking={() => setBookingModalOpen(true)} />
      </main>

      {/* Footer with Medical Disclaimer */}
      <Footer />

      {/* Global Interactive Booking / Consultation Modal */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
