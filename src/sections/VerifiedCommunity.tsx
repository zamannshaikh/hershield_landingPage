import { useInView } from '@/hooks/useInView';
import { BadgeCheck, ArrowRight } from 'lucide-react';

const VerifiedCommunity = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 lg:py-28 bg-hershield-bg overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="feature-card overflow-hidden">
          <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12">
            {/* Pink blob behind phone */}
            <div
              className="absolute left-[5%] top-[10%] w-[45%] h-[70%] opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 105, 180, 0.4) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />

            {/* Phone Mockup */}
            <div
              className={`w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="phone-frame w-[220px] sm:w-[260px] aspect-[9/19]">
                <img
                  src="/verified-phone.jpg"
                  alt="Verified Community"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`w-full lg:w-2/5 lg:ml-auto text-center lg:text-left transition-all duration-300 delay-75 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* Badge Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 mb-5">
                <BadgeCheck className="w-6 h-6 text-pink-500" />
              </div>

              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-hershield-text mb-4">
                Verified community
              </h2>

              <p className="text-hershield-text-secondary leading-relaxed mb-5">
                Every responder completes ID verification. You decide who can see 
                your location—and when.
              </p>

              <button className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors duration-150 group">
                Learn about privacy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedCommunity;
