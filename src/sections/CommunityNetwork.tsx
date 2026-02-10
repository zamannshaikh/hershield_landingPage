// import { useInView } from '@/hooks/useInView';
// import { Users, ArrowRight } from 'lucide-react';

// const CommunityNetwork = () => {
//   const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

//   return (
//     <section
//       ref={ref}
//       className="relative w-full py-20 lg:py-28 bg-hershield-bg overflow-hidden"
//     >
//       <div className="w-full max-w-6xl mx-auto px-5">
//         <div className="feature-card overflow-hidden">
//           <div className="relative flex flex-col-reverse lg:flex-row items-center p-8 lg:p-12">
//             {/* Lavender blob behind phone */}
//             <div
//               className="absolute right-[5%] top-[10%] w-[45%] h-[70%] opacity-30 pointer-events-none"
//               style={{
//                 background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.4) 0%, transparent 70%)',
//                 borderRadius: '50%',
//                 filter: 'blur(40px)',
//               }}
//             />

//             {/* Text Content - Left side */}
//             <div
//               className={`w-full lg:w-2/5 text-center lg:text-left transition-all duration-300 ${
//                 isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
//               }`}
//             >
//               {/* People Icon */}
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 mb-5">
//                 <Users className="w-6 h-6 text-pink-500" />
//               </div>

//               <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-hershield-text mb-4">
//                 Community network
//               </h2>

//               <p className="text-hershield-text-secondary leading-relaxed mb-5">
//                 Connect with verified responders and neighbors. Safety is stronger 
//                 when it&apos;s shared.
//               </p>

//               <button className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors duration-150 group">
//                 Meet the community
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
//               </button>
//             </div>

//             {/* Phone Mockup - Right side */}
//             <div
//               className={`w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:ml-auto transition-all duration-300 delay-75 ${
//                 isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
//               }`}
//             >
//               <div className="phone-frame w-[220px] sm:w-[260px] aspect-[9/19]">
//                 <img
//                   src="/community-phone.jpg"
//                   alt="Community Network"
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommunityNetwork;
import { useInView } from '@/hooks/useInView';
import { Users, ArrowRight } from 'lucide-react';

const CommunityNetwork = () => {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative w-full py-20 lg:py-28 bg-hershield-bg overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="feature-card overflow-hidden">
          <div className="relative flex flex-col-reverse lg:flex-row items-center p-8 lg:p-12">
            {/* Lavender blob behind phone */}
            <div
              className="absolute right-[5%] top-[10%] w-[45%] h-[70%] opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(123, 97, 255, 0.4) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
            />

            {/* Text Content - Left side */}
            <div
              className={`w-full lg:w-2/5 text-center lg:text-left transition-all duration-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* People Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 mb-5">
                <Users className="w-6 h-6 text-pink-500" />
              </div>

              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-hershield-text mb-4">
                Community network
              </h2>

              <p className="text-hershield-text-secondary leading-relaxed mb-5">
                Connect with verified responders and neighbors. Safety is stronger 
                when it&apos;s shared.
              </p>

              <button className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors duration-150 group">
                Meet the community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </button>
            </div>

            {/* Phone Mockup - Right side */}
            <div
              className={`w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:ml-auto transition-all duration-300 delay-75 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {/* FIX: Removed aspect-[9/19] so the container adapts to the image's real shape */}
              <div className="phone-frame w-[220px] sm:w-[260px]">
                <img
                  src="/community-phone.jpg"
                  alt="Community Network"
                  // FIX: Changed h-full to h-auto and removed object-cover
                  // This ensures the image maintains its natural aspect ratio
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityNetwork;