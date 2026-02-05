// import React, { useEffect, useRef, useState } from "react";

// export default function PremiumRewardsAnimation() {
//   const [mounted, setMounted] = useState(false);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);

//   // 4 cards ONLY
//   const cards = [
//     { id: 1, image: "🎁" },
//     { id: 2, image: "💎" },
//     { id: 3, image: "⭐" },
//     { id: 4, image: "🏆" },
//   ];

//   // ===== CONTINUOUS NO-BLINK LOOP =====
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let x = 0;
//     let rafId;
//     const speed = 0.60; // px per frame (smooth)

//     const animate = () => {
//       x -= speed;

//       // reset invisibly (off-screen)
//       if (Math.abs(x) >= track.scrollWidth / 2) {
//         x = 0;
//       }

//       track.style.transform = `translate3d(${x}px, 0, 0)`;
//       rafId = requestAnimationFrame(animate);
//     };

//     rafId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafId);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-600">
//       <div className="absolute inset-0 flex items-center justify-center">
        
//         {/* ===== MOVING CARDS (ONLY 4 VISIBLE, CONTINUOUS) ===== */}
//         <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
//           {/* VIEWPORT = EXACT WIDTH OF 4 CARDS */}
//           <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
//             <div
//               ref={trackRef}
//               className="flex gap-6 will-change-transform"
//             >
//               {/* Track = 8 cards (4 + 4), viewport shows only 4 */}
//               {[...cards, ...cards].map((card, index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex-shrink-0
//                     w-20 h-28
//                     sm:w-24 sm:h-32
//                     md:w-28 md:h-36
//                     bg-white/20 backdrop-blur-md
//                     rounded-2xl shadow-lg
//                     flex items-center justify-center
//                     text-4xl sm:text-5xl
//                     border border-white/30
//                   "
//                 >
//                   {card.image}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===== PHONE MOCKUP (UNCHANGED) ===== */}
//         <div className="relative z-10 pointer-events-none">
//           <div className="w-72 h-[580px] rounded-[3rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden pointer-events-auto">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
//           </div>
//         </div>
//       </div>

//       {/* ===== FADE IN (UNCHANGED) ===== */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         ${mounted ? `
//           .relative.z-10 {
//             animation: fadeIn 0.8s ease-out;
//           }
//         ` : ''}
//       `}</style>
//     </div>
//   );
// }



import { useEffect, useRef, useState } from 'react';

export default function PremiumRewardsAnimation() {
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const cards = [
    { id: 1, image: '🎁' },
    { id: 2, image: '💎' },
    { id: 3, image: '⭐' },
    { id: 4, image: '🏆' },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let rafId;
    const speed = 0.60;

    const animate = () => {
      x -= speed;

      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-100 via-cyan-100 to-cyan-400">
      <div className="absolute inset-0 flex flex-col">
        <div className="relative z-20 pt-12 px-8 text-center">
              <img src='/3a7805e8d1f06e0e2c0b22ed0359b0ef6faa8399.png'  className="inline-block w-16 h-1 bg-cyan-400 rounded-full mb-6" alt=''/>
          {/* <div className="inline-block w-16 h-1 bg-cyan-400 rounded-full mb-6"></div> */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A Little More Than Just<br />Matching
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
            Every Premium member is included in a daily reward<br />draw, at no extra effort.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
              <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
              >
                {[...cards, ...cards].map((card, index) => (
                  <div
                    key={index}
                    className="
                      flex-shrink-0
                      w-20 h-28
                      sm:w-24 sm:h-32
                      md:w-28 md:h-36
                      bg-white/20 backdrop-blur-md
                      rounded-2xl shadow-lg
                      flex items-center justify-center
                      text-4xl sm:text-5xl
                      border border-white/30
                    "
                  >
                    {card.image}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`relative z-10 transition-all duration-700 pointer-events-none ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-72 h-[580px] rounded-[3rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden pointer-events-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
