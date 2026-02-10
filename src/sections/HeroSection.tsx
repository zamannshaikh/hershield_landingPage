import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Shield, Users, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
    } else {
      // Small delay for initial render, then fade in
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-hershield-bg pt-20">
      {/* Background Blobs - Static on mobile, subtle animation on desktop */}
      <div
        className="blob-bg absolute -left-[20vw] -top-[15vh] w-[70vw] h-[80vh] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 105, 180, 0.35) 0%, transparent 70%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />
      <div
        className="blob-bg absolute -right-[15vw] -bottom-[20vh] w-[75vw] h-[85vh] opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.35) 0%, transparent 70%)',
          borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
          animationDelay: '-12s',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full px-5 lg:px-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            {/* Headline - Fade in */}
            <h1
              className={`font-poppins font-bold text-hershield-text leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              Safety that feels like{' '}
              <span className="gradient-text">you.</span>
            </h1>

            {/* Subheadline - Fade in with delay */}
            <p
              className={`text-hershield-text-secondary text-base lg:text-lg leading-relaxed mb-8 transition-all duration-300 delay-75 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              A personal safety network—alerts, location sharing, and community 
              watch—designed with privacy in mind. Stay connected, stay protected.
            </p>

            {/* CTA Buttons - Fade in with delay */}
            <div
              className={`flex flex-wrap gap-3 mb-8 transition-all duration-300 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <Button
                onClick={scrollToDownload}
                size="lg"
                className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-7 py-5 text-base font-semibold shadow-lg shadow-violet-500/20 btn-primary"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
              <Button
                onClick={scrollToFeatures}
                variant="outline"
                size="lg"
                className="rounded-full px-7 py-5 text-base font-semibold border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-150"
              >
                Learn How It Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Badges - Fade in with delay */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-300 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="trust-badge flex items-center gap-2 px-3 py-1.5">
                <Shield className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-xs font-medium text-hershield-text">Privacy First</span>
              </div>
              <div className="trust-badge flex items-center gap-2 px-3 py-1.5">
                <Users className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-xs font-medium text-hershield-text">Community Verified</span>
              </div>
              <div className="trust-badge flex items-center gap-2 px-3 py-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-xs font-medium text-hershield-text">AI-Powered Safety</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="phone-frame w-[240px] sm:w-[280px] lg:w-[300px] aspect-[9/19]">
                <img
                  src="/hero-phone.jpg"
                  alt="HerShield App Dashboard"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Decorative elements - hidden on mobile */}
              <div className="hidden lg:block absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl opacity-60 icon-float" />
              <div 
                className="hidden lg:block absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-500 rounded-lg opacity-60 icon-float" 
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
