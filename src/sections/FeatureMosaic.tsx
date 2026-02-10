import { useInView } from '@/hooks/useInView';
import { Smartphone, Users, Link2, Bell, MapPin, Clock, Shield, Eye } from 'lucide-react';

const FeatureMosaic = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="features"
      className="relative w-full py-20 lg:py-28 bg-hershield-bg overflow-hidden"
    >
      {/* Label */}
      <div className="text-center mb-12">
        <span
          className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-violet-500 transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Features
        </span>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Left Card - App Features */}
          <div
            className={`feature-card w-full lg:w-1/2 p-8 lg:p-10 transition-all duration-300 delay-75 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-hershield-text">
                App-first safety
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bell className="w-4 h-4 text-violet-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">SOS with one tap</p>
                  <p className="text-sm text-hershield-text-secondary">Instant alerts to your emergency contacts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-violet-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">Share your route</p>
                  <p className="text-sm text-hershield-text-secondary">Real-time location with trusted contacts</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-violet-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">Check-in reminders</p>
                  <p className="text-sm text-hershield-text-secondary">Automated safety check notifications</p>
                </div>
              </li>
            </ul>

            {/* Mini phone mockup inside card */}
            <div className="mt-8 flex justify-end">
              <div className="w-20 h-36 rounded-2xl bg-gradient-to-b from-violet-100 to-white shadow-md overflow-hidden border border-violet-100">
                <div className="w-full h-5 bg-violet-500/20" />
                <div className="p-2 space-y-2">
                  <div className="h-6 bg-violet-100 rounded-lg" />
                  <div className="h-6 bg-violet-50 rounded-lg" />
                  <div className="h-6 bg-violet-50 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Link Icon - Desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <Link2 className="w-5 h-5 text-violet-500" />
            </div>
          </div>

          {/* Right Card - Community Features */}
          <div
            className={`feature-card w-full lg:w-1/2 p-8 lg:p-10 transition-all duration-300 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <Users className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-hershield-text">
                Community watch
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">Verified nearby responders</p>
                  <p className="text-sm text-hershield-text-secondary">ID-verified community helpers</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bell className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">Real-time alerts</p>
                  <p className="text-sm text-hershield-text-secondary">Instant safety notifications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="font-medium text-hershield-text">Safe-zone maps</p>
                  <p className="text-sm text-hershield-text-secondary">Community-marked safe areas</p>
                </div>
              </li>
            </ul>

            {/* Mini map graphic inside card */}
            <div className="mt-8 flex justify-end">
              <div className="w-28 h-20 rounded-2xl bg-gradient-to-br from-pink-50 to-violet-50 shadow-md overflow-hidden border border-pink-100 relative">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-violet-500" />
                  <div className="absolute top-6 left-10 w-2 h-2 rounded-full bg-pink-500" />
                  <div className="absolute bottom-5 right-6 w-2 h-2 rounded-full bg-violet-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMosaic;
