import { Star, ShieldCheck, ExternalLink, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function ReviewsSection() {
  const googleSearchReviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(
    'Vaidh Imran Clinic Siwan Bihar reviews'
  )}`;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1B3B2B]/5 border border-[#1B3B2B]/10 text-[#1B3B2B]">
            <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
            <span className="text-xs font-semibold tracking-widest uppercase font-sans">
              Patient Feedback & Trust
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B3B2B]">
            Google Business Rating
          </h2>

          <p className="text-base sm:text-lg text-[#535955] leading-relaxed max-w-2xl mx-auto">
            Reported public rating on Google Business from patients who have visited our Siwan clinic.
          </p>
        </div>

        {/* Central Trust Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#E8E3DA] p-8 sm:p-12 shadow-[0_10px_40px_rgba(27,59,43,0.04)] relative">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Big Numbers */}
              <div className="md:col-span-5 text-center md:text-left space-y-4 md:border-r border-[#E8E3DA] md:pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-medium text-[#1B3B2B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A563F]" />
                  <span>Google Verified Business</span>
                </div>

                <div className="flex items-baseline justify-center md:justify-start space-x-2">
                  <span className="font-serif text-6xl sm:text-7xl font-bold text-[#1B3B2B]">
                    {CLINIC_INFO.rating.toFixed(1)}
                  </span>
                  <div className="space-y-1 text-left">
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#535955] font-medium">Out of 5.0 Stars</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-[#1E2321]">
                    <MessageCircle className="w-4 h-4 text-[#1B3B2B]" />
                    <span className="font-serif text-2xl font-bold text-[#1B3B2B]">
                      {CLINIC_INFO.reviewCount}
                    </span>
                    <span className="text-sm text-[#535955]">Patient Reviews</span>
                  </div>
                  <p className="text-xs text-[#88908B] mt-1">
                    Registered on Google Business Profile
                  </p>
                </div>
              </div>

              {/* Right Column: Context & Discretion Policy */}
              <div className="md:col-span-7 space-y-5">
                <h3 className="font-serif text-2xl font-semibold text-[#1B3B2B]">
                  Discretion & Public Ratings
                </h3>

                <p className="text-sm sm:text-base text-[#535955] leading-relaxed">
                  Sexual wellness is an inherently private domain. While hundreds of visitors have voluntarily shared positive ratings on Google, we adhere strictly to patient privacy standards and do not publish private consultation records or promotional testimonials.
                </p>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA] space-y-2 text-xs text-[#535955]">
                  <div className="flex items-center space-x-2 text-[#1B3B2B] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#2A563F]" />
                    <span>Privacy Policy in Reviews</span>
                  </div>
                  <p>
                    All review figures reflect authentic business records supplied for Vaidh Imran Clinic in Siwan, Bihar.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={googleSearchReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="reviews-view-more-cta"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F3EFE9] text-[#1B3B2B] border border-[#E8E3DA] text-sm font-medium transition-colors shadow-xs"
                  >
                    <span>View More Reviews on Google</span>
                    <ExternalLink className="w-4 h-4 text-[#88908B]" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
