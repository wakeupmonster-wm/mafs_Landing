/* eslint-disable react-hooks/set-state-in-effect */
// // import { useEffect, useRef, useState } from "react";

// // export default function PremiumRewardsAnimation() {
// //   // eslint-disable-next-line no-unused-vars
// //   const [mounted, setMounted] = useState(false);
// //   const trackRef = useRef(null);

// //   useEffect(() => {
// //     // eslint-disable-next-line react-hooks/set-state-in-effect
// //     setMounted(true);
// //   }, []);

// //   const cards = [
// //     { id: 1, image: "/Image (3).png" },
// //     { id: 2, image: "/Content.png" },
// //     { id: 3, image: "/Image (4).png" },
// //     { id: 4, image: "/Image (5).png" },
// //   ];

// //   useEffect(() => {
// //     const track = trackRef.current;
// //     if (!track) return;

// //     let x = 0;
// //     let rafId;
// //     const speed = 0.6;

// //     const animate = () => {
// //       x -= speed;

// //       if (Math.abs(x) >= track.scrollWidth / 2) {
// //         x = 0;
// //       }

// //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// //       rafId = requestAnimationFrame(animate);
// //     };

// //     rafId = requestAnimationFrame(animate);
// //     return () => cancelAnimationFrame(rafId);
// //   }, []);

// //   return (
// //     <div className="relative w-full h-screen py-20">
// //       <div className="absolute inset-0 flex flex-col">
// //         <div className="relative z-20 pt-9 px-8 py-12 text-center">
// //           <img
// //             src="public/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// //             className="inline-block w-48 h-2 mb-6"
// //             alt=""
// //           />
// //           {/* <img src='/3a7805e8d1f06e0e2c0b22ed0359b0ef6faa8399.png' alt=''/> */}
// //           {/* <div className="inline-block w-16 h-1 bg-cyan-400 rounded-full mb-6"></div> */}
// //           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// //             A Little More Than Just
// //             <br />
// //             Matching
// //           </h1>
// //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// //             Every Premium member is included in a daily reward
// //             <br />
// //             draw, at no extra effort.
// //           </p>
// //         </div>

// //         <div className="flex-1 flex items-center justify-center relative">
// //           {/* <div
// //         className="absolute inset-0"
// //         style={{
// //           background: 'radial-gradient(ellipse at center, #7dd3dd 0%, #a8e6f0 30%, #d4f1f9 50%, #e8f7fa 70%, #f5f5f5 100%)'
// //         }}
// //       /> */}
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               background:
// //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// //             }}
// //           />
// //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
// //             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
// //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// //                 {[...cards, ...cards].map((card, index) => (
// //                   <div
// //                     key={index}
// //                     className="
// //                       flex-shrink-0
// //                       w-20 h-32
// //                       sm:w-24 sm:h-32
// //                       md:w-100 md:h-100
// //                       flex items-center justify-center
// //                       text-4xl sm:text-5xl
// //                     "
// //                   >
// //                     {typeof card.image === "string" &&
// //                     card.image.startsWith("/") ? (
// //                       <img
// //                         src={card.image}
// //                         alt=""
// //                         // className="w-12 h-12 object-contain"
// //                         draggable={false}
// //                       />
// //                     ) : (
// //                       <span>{card.image}</span>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* <div className={`relative z-10 transition-all duration-700 pointer-events-none ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //           <div> */}
// //           <img
// //             className="md:w-80 md:h-[580px] sm:w-36 sm:h-[100px] w-52 h-[400px] relative overflow-hidden pointer-events-auto"
// //             src="public/Phone → Phone (1).png"
// //             alt=""
// //           />
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// import { useEffect, useRef, useState } from "react";

// export default function PremiumRewardsAnimation() {
//   const [mounted, setMounted] = useState(false);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setMounted(true);
//   }, []);

//   const cards = [
//     { id: 1, image: "/Image (3).png" },
//     { id: 2, image: "/Content.png" },
//     { id: 3, image: "/Image (4).png" },
//     { id: 4, image: "/Image (5).png" },
//   ];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let x = 0;
//     let rafId;
//     const speed = 0.6;

//     // Card width + gap ka calculation (adjust according to your card size)
//     const cardWidth = 96 + 24; // 96px card width + 24px gap (md breakpoint ke liye)

//     const animate = () => {
//       x -= speed;

//       // Track total scroll distance to determine current card
//       const totalScrollDistance = Math.abs(x);
//       const currentIndex = Math.floor(totalScrollDistance / cardWidth) % cards.length;
//       setCurrentCardIndex(currentIndex);

//       if (Math.abs(x) >= track.scrollWidth / 2) {
//         x = 0;
//       }

//       track.style.transform = `translate3d(${x}px, 0, 0)`;
//       rafId = requestAnimationFrame(animate);
//     };

//     rafId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(rafId);
//   }, [cards.length]);

//   return (
//     <div className="relative w-full h-screen py-20">
//       <div className="absolute inset-0 flex flex-col">
//         <div className="relative z-20 pt-9 px-8 py-12 text-center">
//           <img
//             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
//             className="inline-block w-48 h-2 mb-6"
//             alt=""
//           />
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//             A Little More Than Just
//             <br />
//             Matching
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
//             Every Premium member is included in a daily reward
//             <br />
//             draw, at no extra effort.
//           </p>
//         </div>

//         <div className="flex-1 flex items-center justify-center relative">
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
//             }}
//           />

//           {/* Cards Animation Track */}
//           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
//             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
//               <div ref={trackRef} className="flex gap-6 will-change-transform">
//                 {[...cards, ...cards].map((card, index) => (
//                   <div
//                     key={index}
//                     className="
//                       flex-shrink-0
//                       w-20 h-32
//                       sm:w-24 sm:h-32
//                       md:w-24 md:h-32
//                       flex items-center justify-center
//                       text-4xl sm:text-5xl
//                     "
//                   >
//                     {typeof card.image === "string" &&
//                     card.image.startsWith("/") ? (
//                       <img
//                         src={card.image}
//                         alt=""
//                         className="w-full h-full object-contain"
//                         draggable={false}
//                       />
//                     ) : (
//                       <span>{card.image}</span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Phone Mockup with Dynamic Image */}
//           <div className="relative z-10">
//             <div className="relative">
//               {/* Phone Frame */}
//               <img
//                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px] relative"
//                 src="/Phone → Phone (1).png"
//                 alt="Phone mockup"
//               />

//               {/* Dynamic Phone Screen Content */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative" style={{
//                   // Adjust these values based on your phone mockup dimensions
//                   width: '70%',
//                   height: '75%',
//                   top: '12%',
//                   left: '15%',
//                   position: 'absolute'
//                 }}>
//                   {/* Current Card Image in Phone */}
//                   <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]">
//                     <img
//                       src={cards[currentCardIndex].image}
//                       alt=""
//                       className="w-full h-full object-contain transition-all duration-300"
//                       style={{
//                         opacity: mounted ? 1 : 0,
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
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
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function PremiumRewardsAnimation() {
  // eslint-disable-next-line no-unused-vars
  const [mounted, setMounted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cards array with two images:
  // image -> Moving cards ke liye (white background wali)
  // phoneImage -> Phone mockup screen ke liye (transparent/no background)
  const cards = [
    {
      id: 1,
      image: "/Image (3).png", // Card ke liye (white bg)
      phoneImage: "/Image (3).png", // Phone screen ke liye (transparent)
    },
    {
      id: 2,
      image: "/Content.png",
      phoneImage: "/Content.png",
    },
    {
      id: 3,
      image: "/Image (4).png",
      phoneImage: "/Image (4).png",
    },
    {
      id: 4,
      image: "/Image (5).png",
      phoneImage: "/Image (5).png",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let rafId;
    const speed = 0.6;

    // Card width + gap calculation
    const cardWidth = 96 + 24; // card width + gap

    const animate = () => {
      x -= speed;

      // Calculate current card index based on scroll position
      const totalScrollDistance = Math.abs(x);
      const currentIndex =
        Math.floor(totalScrollDistance / cardWidth) % cards.length;
      setCurrentCardIndex(currentIndex);

      if (Math.abs(x) >= track.scrollWidth / 2) {
        x = 0;
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [cards.length]);

  return (
    <div className="relative w-full h-screen py-20">
      <div className="absolute inset-0 flex flex-col">
        {/* Header Section */}
        <div className="relative z-20 pt-9 px-8 py-12 text-center">
          <img
            src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
            className="inline-block w-48 h-2 mb-6"
            alt=""
          />
          <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A Little More Than Just
            <br />
            Matching
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
            Every Premium member is included in a daily reward
            <br />
            draw, at no extra effort.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Background Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
            }}
          />

          {/* Moving Cards Track */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
            <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
              <div ref={trackRef} className="flex gap-6 will-change-transform">
                {[...cards, ...cards].map((card, index) => (
                  <div
                    key={index}
                    className="
                      flex-shrink-0
                      w-20 h-32
                      sm:w-24 sm:h-32
                      md:w-24 md:h-32
                      flex items-center justify-center
                    "
                  >
                    {/* Moving Cards - White background wali images */}
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative z-10 ">
            <div className="relative">
              {/* Phone Frame Image */}
              <img
                className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
                src="/Phone → Phone (1).png"
                alt="Phone mockup"
              />

              {/* Phone Screen Content - Transparent icon images */}
              <div
                className="absolute flex items-center justify-center"
                style={{
                  // Adjust these values to match your phone mockup screen area
                  top: "15%",
                  left: "10%",
                  width: "80%",
                  height: "70%",
                }}
              >
                {/* Current Card Icon - Transparent background */}
                <img
                  key={currentCardIndex} // Key for triggering animation on change
                  src={cards[currentCardIndex].phoneImage}
                  alt="Card image"
                  className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
                  style={
                    {
                      // No background - transparent image will show phone bg
                    }
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
