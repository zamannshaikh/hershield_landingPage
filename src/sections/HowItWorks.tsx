import { useInView } from '@/hooks/useInView';
import { Download, UserPlus, HeartHandshake, Shield } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download',
    description: 'Get the app and create your account in seconds.',
    color: 'from-violet-100 to-violet-200',
    iconColor: 'text-violet-600',
  },
  {
    icon: UserPlus,
    title: 'Add contacts',
    description: 'Invite trusted people and choose your emergency responders.',
    color: 'from-pink-100 to-pink-200',
    iconColor: 'text-pink-500',
  },
  {
    icon: HeartHandshake,
    title: 'Stay connected',
    description: 'Check in, share routes, and get alerts when it matters.',
    color: 'from-violet-100 to-violet-200',
    iconColor: 'text-violet-600',
  },
];

const HowItWorks = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative w-full py-20 lg:py-28 bg-hershield-bg-secondary overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.3) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 w-full px-5">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className={`inline-block text-xs font-medium tracking-[0.2em] uppercase text-violet-500 mb-4 transition-all duration-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Simple Setup
          </span>
          <h2
            className={`font-poppins font-bold text-3xl lg:text-4xl text-hershield-text mb-4 transition-all duration-300 delay-75 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            How it works
          </h2>
          <p
            className={`text-hershield-text-secondary text-lg transition-all duration-300 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Set up in minutes. Use it for years.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`step-card flex-1 p-7 lg:p-8 transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: `${150 + index * 50}ms` }}
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>
                <span className="text-4xl font-poppins font-bold text-gray-100">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-poppins font-semibold text-lg text-hershield-text mb-2">
                {step.title}
              </h3>
              <p className="text-hershield-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div
          className={`text-center mt-10 transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium text-hershield-text-secondary">
              Built with privacy-by-design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
