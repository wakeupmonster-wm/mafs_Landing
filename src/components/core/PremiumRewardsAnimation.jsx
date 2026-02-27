// // // // // /* eslint-disable react-hooks/set-state-in-effect */
// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // export default function PremiumRewardsAnimation() {
// // // // // // //   // eslint-disable-next-line no-unused-vars
// // // // // // //   const [mounted, setMounted] = useState(false);
// // // // // // //   const trackRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     // eslint-disable-next-line react-hooks/set-state-in-effect
// // // // // // //     setMounted(true);
// // // // // // //   }, []);

// // // // // // //   const cards = [
// // // // // // //     { id: 1, image: "/Image (3).png" },
// // // // // // //     { id: 2, image: "/Content.png" },
// // // // // // //     { id: 3, image: "/Image (4).png" },
// // // // // // //     { id: 4, image: "/Image (5).png" },
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     const track = trackRef.current;
// // // // // // //     if (!track) return;

// // // // // // //     let x = 0;
// // // // // // //     let rafId;
// // // // // // //     const speed = 0.6;

// // // // // // //     const animate = () => {
// // // // // // //       x -= speed;

// // // // // // //       if (Math.abs(x) >= track.scrollWidth / 2) {
// // // // // // //         x = 0;
// // // // // // //       }

// // // // // // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // // // // // //       rafId = requestAnimationFrame(animate);
// // // // // // //     };

// // // // // // //     rafId = requestAnimationFrame(animate);
// // // // // // //     return () => cancelAnimationFrame(rafId);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="relative w-full h-screen py-20">
// // // // // // //       <div className="absolute inset-0 flex flex-col">
// // // // // // //         <div className="relative z-20 pt-9 px-8 py-12 text-center">
// // // // // // //           <img
// // // // // // //             src="public/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // // // // // //             className="inline-block w-48 h-2 mb-6"
// // // // // // //             alt=""
// // // // // // //           />
// // // // // // //           {/* <img src='/3a7805e8d1f06e0e2c0b22ed0359b0ef6faa8399.png' alt=''/> */}
// // // // // // //           {/* <div className="inline-block w-16 h-1 bg-cyan-400 rounded-full mb-6"></div> */}
// // // // // // //           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // // // // // //             A Little More Than Just
// // // // // // //             <br />
// // // // // // //             Matching
// // // // // // //           </h1>
// // // // // // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // // // // // //             Every Premium member is included in a daily reward
// // // // // // //             <br />
// // // // // // //             draw, at no extra effort.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <div className="flex-1 flex items-center justify-center relative">
// // // // // // //           {/* <div
// // // // // // //         className="absolute inset-0"
// // // // // // //         style={{
// // // // // // //           background: 'radial-gradient(ellipse at center, #7dd3dd 0%, #a8e6f0 30%, #d4f1f9 50%, #e8f7fa 70%, #f5f5f5 100%)'
// // // // // // //         }}
// // // // // // //       /> */}
// // // // // // //           <div
// // // // // // //             className="absolute inset-0"
// // // // // // //             style={{
// // // // // // //               background:
// // // // // // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // // // // // //             }}
// // // // // // //           />
// // // // // // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
// // // // // // //             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
// // // // // // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // // // // // //                 {[...cards, ...cards].map((card, index) => (
// // // // // // //                   <div
// // // // // // //                     key={index}
// // // // // // //                     className="
// // // // // // //                       flex-shrink-0
// // // // // // //                       w-20 h-32
// // // // // // //                       sm:w-24 sm:h-32
// // // // // // //                       md:w-100 md:h-100
// // // // // // //                       flex items-center justify-center
// // // // // // //                       text-4xl sm:text-5xl
// // // // // // //                     "
// // // // // // //                   >
// // // // // // //                     {typeof card.image === "string" &&
// // // // // // //                     card.image.startsWith("/") ? (
// // // // // // //                       <img
// // // // // // //                         src={card.image}
// // // // // // //                         alt=""
// // // // // // //                         // className="w-12 h-12 object-contain"
// // // // // // //                         draggable={false}
// // // // // // //                       />
// // // // // // //                     ) : (
// // // // // // //                       <span>{card.image}</span>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* <div className={`relative z-10 transition-all duration-700 pointer-events-none ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// // // // // // //           <div> */}
// // // // // // //           <img
// // // // // // //             className="md:w-80 md:h-[580px] sm:w-36 sm:h-[100px] w-52 h-[400px] relative overflow-hidden pointer-events-auto"
// // // // // // //             src="public/Phone → Phone (1).png"
// // // // // // //             alt=""
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style>{`
// // // // // // //         @keyframes fadeIn {
// // // // // // //           from {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(20px);
// // // // // // //           }
// // // // // // //           to {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // export default function PremiumRewardsAnimation() {
// // // // // //   const [mounted, setMounted] = useState(false);
// // // // // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // // // // //   const trackRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     // eslint-disable-next-line react-hooks/set-state-in-effect
// // // // // //     setMounted(true);
// // // // // //   }, []);

// // // // // //   const cards = [
// // // // // //     { id: 1, image: "/Image (3).png" },
// // // // // //     { id: 2, image: "/Content.png" },
// // // // // //     { id: 3, image: "/Image (4).png" },
// // // // // //     { id: 4, image: "/Image (5).png" },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     const track = trackRef.current;
// // // // // //     if (!track) return;

// // // // // //     let x = 0;
// // // // // //     let rafId;
// // // // // //     const speed = 0.6;

// // // // // //     // Card width + gap ka calculation (adjust according to your card size)
// // // // // //     const cardWidth = 96 + 24; // 96px card width + 24px gap (md breakpoint ke liye)

// // // // // //     const animate = () => {
// // // // // //       x -= speed;

// // // // // //       // Track total scroll distance to determine current card
// // // // // //       const totalScrollDistance = Math.abs(x);
// // // // // //       const currentIndex = Math.floor(totalScrollDistance / cardWidth) % cards.length;
// // // // // //       setCurrentCardIndex(currentIndex);

// // // // // //       if (Math.abs(x) >= track.scrollWidth / 2) {
// // // // // //         x = 0;
// // // // // //       }

// // // // // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // // // // //       rafId = requestAnimationFrame(animate);
// // // // // //     };

// // // // // //     rafId = requestAnimationFrame(animate);
// // // // // //     return () => cancelAnimationFrame(rafId);
// // // // // //   }, [cards.length]);

// // // // // //   return (
// // // // // //     <div className="relative w-full h-screen py-20">
// // // // // //       <div className="absolute inset-0 flex flex-col">
// // // // // //         <div className="relative z-20 pt-9 px-8 py-12 text-center">
// // // // // //           <img
// // // // // //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // // // // //             className="inline-block w-48 h-2 mb-6"
// // // // // //             alt=""
// // // // // //           />
// // // // // //           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // // // // //             A Little More Than Just
// // // // // //             <br />
// // // // // //             Matching
// // // // // //           </h1>
// // // // // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // // // // //             Every Premium member is included in a daily reward
// // // // // //             <br />
// // // // // //             draw, at no extra effort.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div className="flex-1 flex items-center justify-center relative">
// // // // // //           <div
// // // // // //             className="absolute inset-0"
// // // // // //             style={{
// // // // // //               background:
// // // // // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // // // // //             }}
// // // // // //           />

// // // // // //           {/* Cards Animation Track */}
// // // // // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
// // // // // //             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
// // // // // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // // // // //                 {[...cards, ...cards].map((card, index) => (
// // // // // //                   <div
// // // // // //                     key={index}
// // // // // //                     className="
// // // // // //                       flex-shrink-0
// // // // // //                       w-20 h-32
// // // // // //                       sm:w-24 sm:h-32
// // // // // //                       md:w-24 md:h-32
// // // // // //                       flex items-center justify-center
// // // // // //                       text-4xl sm:text-5xl
// // // // // //                     "
// // // // // //                   >
// // // // // //                     {typeof card.image === "string" &&
// // // // // //                     card.image.startsWith("/") ? (
// // // // // //                       <img
// // // // // //                         src={card.image}
// // // // // //                         alt=""
// // // // // //                         className="w-full h-full object-contain"
// // // // // //                         draggable={false}
// // // // // //                       />
// // // // // //                     ) : (
// // // // // //                       <span>{card.image}</span>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Phone Mockup with Dynamic Image */}
// // // // // //           <div className="relative z-10">
// // // // // //             <div className="relative">
// // // // // //               {/* Phone Frame */}
// // // // // //               <img
// // // // // //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px] relative"
// // // // // //                 src="/Phone → Phone (1).png"
// // // // // //                 alt="Phone mockup"
// // // // // //               />

// // // // // //               {/* Dynamic Phone Screen Content */}
// // // // // //               <div className="absolute inset-0 flex items-center justify-center">
// // // // // //                 <div className="relative" style={{
// // // // // //                   // Adjust these values based on your phone mockup dimensions
// // // // // //                   width: '70%',
// // // // // //                   height: '75%',
// // // // // //                   top: '12%',
// // // // // //                   left: '15%',
// // // // // //                   position: 'absolute'
// // // // // //                 }}>
// // // // // //                   {/* Current Card Image in Phone */}
// // // // // //                   <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]">
// // // // // //                     <img
// // // // // //                       src={cards[currentCardIndex].image}
// // // // // //                       alt=""
// // // // // //                       className="w-full h-full object-contain transition-all duration-300"
// // // // // //                       style={{
// // // // // //                         opacity: mounted ? 1 : 0,
// // // // // //                       }}
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style>{`
// // // // // //         @keyframes fadeIn {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(20px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useEffect, useRef, useState } from "react";

// // // // // export default function PremiumRewardsAnimation() {
// // // // //   // eslint-disable-next-line no-unused-vars
// // // // //   const [mounted, setMounted] = useState(false);
// // // // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // // // //   const trackRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     setMounted(true);
// // // // //   }, []);

// // // // //   // Cards array with two images:
// // // // //   // image -> Moving cards ke liye (white background wali)
// // // // //   // phoneImage -> Phone mockup screen ke liye (transparent/no background)
// // // // //   const cards = [
// // // // //     {
// // // // //       id: 1,
// // // // //       image: "/Image (3).png", // Card ke liye (white bg)
// // // // //       phoneImage: "/Image (3).png", // Phone screen ke liye (transparent)
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       image: "/Content.png",
// // // // //       phoneImage: "/Content.png",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       image: "/Image (4).png",
// // // // //       phoneImage: "/Image (4).png",
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       image: "/Image (5).png",
// // // // //       phoneImage: "/Image (5).png",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const track = trackRef.current;
// // // // //     if (!track) return;

// // // // //     let x = 0;
// // // // //     let rafId;
// // // // //     const speed = 0.6;

// // // // //     // Card width + gap calculation
// // // // //     const cardWidth = 96 + 24; // card width + gap

// // // // //     const animate = () => {
// // // // //       x -= speed;

// // // // //       // Calculate current card index based on scroll position
// // // // //       const totalScrollDistance = Math.abs(x);
// // // // //       const currentIndex =
// // // // //         Math.floor(totalScrollDistance / cardWidth) % cards.length;
// // // // //       setCurrentCardIndex(currentIndex);

// // // // //       if (Math.abs(x) >= track.scrollWidth / 2) {
// // // // //         x = 0;
// // // // //       }

// // // // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // // // //       rafId = requestAnimationFrame(animate);
// // // // //     };

// // // // //     rafId = requestAnimationFrame(animate);
// // // // //     return () => cancelAnimationFrame(rafId);
// // // // //   }, [cards.length]);

// // // // //   return (
// // // // //     <div className="relative w-full h-screen py-20">
// // // // //       <div className="absolute inset-0 flex flex-col">
// // // // //         {/* Header Section */}
// // // // //         <div className="relative z-20  px-8 py-12 text-center">
// // // // //           <img
// // // // //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // // // //             className="inline-block w-48 h-2 mb-6"
// // // // //             alt=""
// // // // //           />
// // // // //           <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // // // //             A Little More Than Just
// // // // //             <br />
// // // // //             Matching
// // // // //           </h1>
// // // // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // // // //             Every Premium member is included in a daily reward
// // // // //             <br />
// // // // //             draw, at no extra effort.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Main Content Area */}
// // // // //         <div className="flex-1 flex items-center justify-center relative">
// // // // //           {/* Background Gradient */}
// // // // //           <div
// // // // //             className="absolute inset-0"
// // // // //             style={{
// // // // //               background:
// // // // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // // // //             }}
// // // // //           />

// // // // //           {/* Moving Cards Track */}
// // // // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
// // // // //             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
// // // // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // // // //                 {[...cards, ...cards].map((card, index) => (
// // // // //                   <div
// // // // //                     key={index}
// // // // //                     className="
// // // // //                       flex-shrink-0
// // // // //                       w-20 h-32
// // // // //                       sm:w-24 sm:h-32
// // // // //                       md:w-24 md:h-32
// // // // //                       flex items-center justify-center
// // // // //                     "
// // // // //                   >
// // // // //                     {/* Moving Cards - White background wali images */}
// // // // //                     <img
// // // // //                       src={card.image}
// // // // //                       alt=""
// // // // //                       className="w-full h-full object-contain"
// // // // //                       draggable={false}
// // // // //                     />
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Phone Mockup */}
// // // // //           <div className="relative z-10 ">
// // // // //             <div className="relative">
// // // // //               {/* Phone Frame Image */}
// // // // //               <img
// // // // //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
// // // // //                 src="/Phone → Phone (1).png"
// // // // //                 alt="Phone mockup"
// // // // //               />

// // // // //               {/* Phone Screen Content - Transparent icon images */}
// // // // //               <div
// // // // //                 className="absolute flex items-center justify-center"
// // // // //                 style={{
// // // // //                   // Adjust these values to match your phone mockup screen area
// // // // //                   top: "15%",
// // // // //                   left: "10%",
// // // // //                   width: "80%",
// // // // //                   height: "70%",
// // // // //                 }}
// // // // //               >
// // // // //                 {/* Current Card Icon - Transparent background */}
// // // // //                 <img
// // // // //                   key={currentCardIndex} // Key for triggering animation on change
// // // // //                   src={cards[currentCardIndex].phoneImage}
// // // // //                   alt="Card image"
// // // // //                   className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
// // // // //                   style={
// // // // //                     {
// // // // //                       // No background - transparent image will show phone bg
// // // // //                     }
// // // // //                   }
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style>{`
// // // // //         @keyframes fadeIn {
// // // // //           from {
// // // // //             opacity: 0;
// // // // //             transform: scale(0.9);
// // // // //           }
// // // // //           to {
// // // // //             opacity: 1;
// // // // //             transform: scale(1);
// // // // //           }
// // // // //         }
        
// // // // //         .animate-fadeIn {
// // // // //           animation: fadeIn 0.3s ease-out forwards;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import { useEffect, useRef, useState } from "react";

// // // // // Cards array moved outside to prevent re-creation on each render
// // // // const cards = [
// // // //   { id: 1, image: "/Image (3).png", phoneImage: "/Image (3).png" },
// // // //   { id: 2, image: "/Content.png", phoneImage: "/Content.png" },
// // // //   { id: 3, image: "/Image (4).png", phoneImage: "/Image (4).png" },
// // // //   { id: 4, image: "/Image (5).png", phoneImage: "/Image (5).png" },
// // // // ];

// // // // const REPEAT_COUNT = 6; // 6x repeat for smooth seamless loop
// // // // const GAP = 24; // gap-6 = 24px
// // // // const SPEED = 0.6;

// // // // export default function PremiumRewardsAnimation() {
// // // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // // //   const trackRef = useRef(null);
// // // //   const rafRef = useRef(null);
// // // //   const currentIndexRef = useRef(0);

// // // //   useEffect(() => {
// // // //     const track = trackRef.current;
// // // //     if (!track) return;

// // // //     const firstCard = track.children[0];
// // // //     if (!firstCard) return;

// // // //     // Actual card width from DOM for accurate calculation
// // // //     const cardW = firstCard.offsetWidth;
// // // //     const cardStep = cardW + GAP;
// // // //     const oneSetWidth = cards.length * cardStep;

// // // //     let x = 0;

// // // //     const animate = () => {
// // // //       x -= SPEED;

// // // //       // Update phone image only when card actually changes
// // // //       const newIndex = Math.floor(Math.abs(x) / cardStep) % cards.length;
// // // //       if (newIndex !== currentIndexRef.current) {
// // // //         currentIndexRef.current = newIndex;
// // // //         setCurrentCardIndex(newIndex);
// // // //       }

// // // //       // Seamless loop reset — when one full set has scrolled,
// // // //       // jump back by exactly one set width (identical cards, no visual jump)
// // // //       if (Math.abs(x) >= oneSetWidth) {
// // // //         x += oneSetWidth;
// // // //       }

// // // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // // //       rafRef.current = requestAnimationFrame(animate);
// // // //     };

// // // //     rafRef.current = requestAnimationFrame(animate);

// // // //     return () => {
// // // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // // //     };
// // // //   }, []);

// // // //   // Create repeated cards array for seamless looping
// // // //   const repeatedCards = Array.from({ length: REPEAT_COUNT }, () => cards).flat();

// // // //   return (
// // // //     <div className="relative w-full h-screen py-20">
// // // //       <div className="absolute inset-0 flex flex-col">
// // // //         {/* Header Section */}
// // // //         <div className="relative z-20 px-8 py-12 text-center">
// // // //           <img
// // // //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // // //             className="inline-block w-48 h-2 mb-6"
// // // //             alt=""
// // // //           />
// // // //           <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // // //             A Little More Than Just
// // // //             <br />
// // // //             Matching
// // // //           </h1>
// // // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // // //             Every Premium member is included in a daily reward
// // // //             <br />
// // // //             draw, at no extra effort.
// // // //           </p>
// // // //         </div>

// // // //         {/* Main Content Area */}
// // // //         <div className="flex-1 flex items-center justify-center relative">
// // // //           {/* Background Gradient */}
// // // //           <div
// // // //             className="absolute inset-0"
// // // //             style={{
// // // //               background:
// // // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // // //             }}
// // // //           />

// // // //           {/* ===== Moving Cards Track ===== */}
// // // //           {/* KEY CHANGES:
// // // //               1. Container wider (min(92vw, 800px)) so cards travel further after phone
// // // //               2. CSS mask-image gradient for smooth fade-in/fade-out at edges
// // // //               3. 6x card repetition for seamless loop without blink
// // // //           */}
// // // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
// // // //             <div
// // // //               className="mx-auto overflow-hidden"
// // // //               style={{
// // // //                 // WIDER container — cards travel further before disappearing
// // // //                 width: "min(92vw, 800px)",
// // // //                 // SMOOTH FADE — cards gradually disappear at both edges
// // // //                 // 0-18%: fade in from right | 18-82%: fully visible | 82-100%: fade out on left
// // // //                 maskImage:
// // // //                   "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
// // // //                 WebkitMaskImage:
// // // //                   "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
// // // //               }}
// // // //             >
// // // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // // //                 {repeatedCards.map((card, index) => (
// // // //                   <div
// // // //                     key={index}
// // // //                     className="
// // // //                       flex-shrink-0
// // // //                       w-20 h-32
// // // //                       sm:w-24 sm:h-32
// // // //                       md:w-24 md:h-32
// // // //                       flex items-center justify-center
// // // //                     "
// // // //                   >
// // // //                     <img
// // // //                       src={card.image}
// // // //                       alt=""
// // // //                       className="w-full h-full object-contain"
// // // //                       draggable={false}
// // // //                     />
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Phone Mockup — z-10 so cards go BEHIND it */}
// // // //           <div className="relative z-10">
// // // //             <div className="relative">
// // // //               <img
// // // //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
// // // //                 src="/Phone → Phone (1).png"
// // // //                 alt="Phone mockup"
// // // //               />

// // // //               {/* Phone Screen Content */}
// // // //               <div
// // // //                 className="absolute flex items-center justify-center"
// // // //                 style={{
// // // //                   top: "15%",
// // // //                   left: "10%",
// // // //                   width: "80%",
// // // //                   height: "70%",
// // // //                 }}
// // // //               >
// // // //                 <img
// // // //                   key={currentCardIndex}
// // // //                   src={cards[currentCardIndex].phoneImage}
// // // //                   alt="Card image"
// // // //                   className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
// // // //                 />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style>{`
// // // //         @keyframes fadeIn {
// // // //           from {
// // // //             opacity: 0;
// // // //             transform: scale(0.9);
// // // //           }
// // // //           to {
// // // //             opacity: 1;
// // // //             transform: scale(1);
// // // //           }
// // // //         }
// // // //         .animate-fadeIn {
// // // //           animation: fadeIn 0.3s ease-out forwards;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }




// // import { useEffect, useRef, useState } from "react";

// // const cards = [
// //   { id: 1, image: "/Image (3).png", phoneImage: "/Image (3).png" },
// //   { id: 2, image: "/Content.png", phoneImage: "/Content.png" },
// //   { id: 3, image: "/Image (4).png", phoneImage: "/Image (4).png" },
// //   { id: 4, image: "/Image (5).png", phoneImage: "/Image (5).png" },
// // ];

// // const REPEAT_COUNT = 10;
// // const GAP = 24;
// // const SPEED = 0.6;

// // export default function PremiumRewardsAnimation() {
// //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// //   const trackRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const currentIndexRef = useRef(0);

// //   useEffect(() => {
// //     const track = trackRef.current;
// //     if (!track) return;

// //     const firstCard = track.children[0];
// //     if (!firstCard) return;

// //     const cardW = firstCard.offsetWidth;
// //     const cardStep = cardW + GAP;
// //     const oneSetWidth = cards.length * cardStep;

// //     let x = 0;

// //     const animate = () => {
// //       x -= SPEED;

// //       const newIndex = Math.floor(Math.abs(x) / cardStep) % cards.length;
// //       if (newIndex !== currentIndexRef.current) {
// //         currentIndexRef.current = newIndex;
// //         setCurrentCardIndex(newIndex);
// //       }

// //       if (Math.abs(x) >= oneSetWidth) {
// //         x += oneSetWidth;
// //       }

// //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// //       rafRef.current = requestAnimationFrame(animate);
// //     };

// //     rafRef.current = requestAnimationFrame(animate);

// //     return () => {
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, []);

// //   const repeatedCards = Array.from({ length: REPEAT_COUNT }, () => cards).flat();

// //   return (
// //     <div className="relative w-full h-screen py-20">
// //       <div className="absolute inset-0 flex flex-col">
// //         {/* Header Section */}
// //         <div className="relative z-20 px-8 py-12 text-center">
// //           <img
// //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// //             className="inline-block w-48 h-2 mb-6"
// //             alt=""
// //           />
// //           <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
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

// //         {/* Main Content Area */}
// //         <div className="flex-1 flex items-center justify-center relative">
// //           {/* Background Gradient */}
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               background:
// //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// //             }}
// //           />

// //           {/* Moving Cards Track */}
// //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
// //             <div
// //               className="mx-auto overflow-hidden"
// //               style={{
// //                 /* ========== CHANGES HERE ========== */
// //                 /* Container much wider — cards travel much longer */
// //                 width: "min(98vw, 1200px)",
// //                 /* Fade zone only 8% on each side — cards stay visible 84% of the width
// //                    So on 1200px container = cards travel ~1008px visible before fading
// //                    Fade zone = ~96px gradual disappear */
// //                 maskImage:
// //                   "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
// //                 WebkitMaskImage:
// //                   "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
// //               }}
// //             >
// //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// //                 {repeatedCards.map((card, index) => (
// //                   <div
// //                     key={index}
// //                     className="
// //                       flex-shrink-0
// //                       w-20 h-32
// //                       sm:w-24 sm:h-32
// //                       md:w-24 md:h-32
// //                       flex items-center justify-center
// //                     "
// //                   >
// //                     <img
// //                       src={card.image}
// //                       alt=""
// //                       className="w-full h-full object-contain"
// //                       draggable={false}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Phone Mockup */}
// //           <div className="relative z-10">
// //             <div className="relative">
// //               <img
// //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
// //                 src="/Phone → Phone (1).png"
// //                 alt="Phone mockup"
// //               />

// //               {/* Phone Screen Content */}
// //               <div
// //                 className="absolute flex items-center justify-center"
// //                 style={{
// //                   top: "15%",
// //                   left: "10%",
// //                   width: "80%",
// //                   height: "70%",
// //                 }}
// //               >
// //                 <img
// //                   key={currentCardIndex}
// //                   src={cards[currentCardIndex].phoneImage}
// //                   alt="Card image"
// //                   className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: scale(0.9);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }
// //         .animate-fadeIn {
// //           animation: fadeIn 0.3s ease-out forwards;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }









// // // import { useEffect, useRef, useState } from "react";

// // // const cards = [
// // //   { id: 1, image: "/Image (3).png", phoneImage: "/Image (3).png" },
// // //   { id: 2, image: "/Content.png", phoneImage: "/Content.png" },
// // //   { id: 3, image: "/Image (4).png", phoneImage: "/Image (4).png" },
// // //   { id: 4, image: "/Image (5).png", phoneImage: "/Image (5).png" },
// // // ];

// // // const REPEAT_COUNT = 10;
// // // const GAP = 24;
// // // const SPEED = 0.6;

// // // export default function PremiumRewardsAnimation() {
// // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // //   const trackRef = useRef(null);
// // //   const rafRef = useRef(null);
// // //   const currentIndexRef = useRef(0);

// // //   useEffect(() => {
// // //     const track = trackRef.current;
// // //     if (!track) return;

// // //     const firstCard = track.children[0];
// // //     if (!firstCard) return;

// // //     const cardW = firstCard.offsetWidth;
// // //     const cardStep = cardW + GAP;
// // //     const oneSetWidth = cards.length * cardStep;

// // //     let x = 0;

// // //     const animate = () => {
// // //       x -= SPEED;

// // //       const newIndex = Math.floor(Math.abs(x) / cardStep) % cards.length;
// // //       if (newIndex !== currentIndexRef.current) {
// // //         currentIndexRef.current = newIndex;
// // //         setCurrentCardIndex(newIndex);
// // //       }

// // //       if (Math.abs(x) >= oneSetWidth) {
// // //         x += oneSetWidth;
// // //       }

// // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // //       rafRef.current = requestAnimationFrame(animate);
// // //     };

// // //     rafRef.current = requestAnimationFrame(animate);
// // //     return () => {
// // //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// // //     };
// // //   }, []);

// // //   const repeatedCards = Array.from({ length: REPEAT_COUNT }, () => cards).flat();

// // //   return (
// // //     <div className="relative w-full h-screen py-20">
// // //       <div className="absolute inset-0 flex flex-col">
// // //         {/* Header */}
// // //         <div className="relative z-20 px-8 py-12 text-center">
// // //           <img
// // //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // //             className="inline-block w-48 h-2 mb-6"
// // //             alt=""
// // //           />
// // //           <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // //             A Little More Than Just
// // //             <br />
// // //             Matching
// // //           </h1>
// // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // //             Every Premium member is included in a daily reward
// // //             <br />
// // //             draw, at no extra effort.
// // //           </p>
// // //         </div>

// // //         {/* Main Content Area */}
// // //         <div className="flex-1 flex items-center justify-center relative">
// // //           {/* Background Gradient */}
// // //           <div
// // //             className="absolute inset-0"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // //             }}
// // //           />

// // //           {/* Moving Cards Track */}
// // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
// // //             <div
// // //               className="mx-auto overflow-hidden"
// // //               style={{
// // //                 width: "min(100vw, 1200px)",
// // //                 /*
// // //                  * ASYMMETRIC MASK — key to 1 left : 3 right layout
// // //                  *
// // //                  * On 1200px screen, phone (320px) centered at 440-760px:
// // //                  *
// // //                  * LEFT SIDE:
// // //                  *   0-20%  = transparent (hidden)
// // //                  *   20-27% = fade-in (84px smooth transition)
// // //                  *   27%    = 324px → phone left at 440px
// // //                  *   Gap    = 440-324 = 116px ≈ 1 card ✓
// // //                  *
// // //                  * RIGHT SIDE:
// // //                  *   92%    = 1104px → phone right at 760px
// // //                  *   Gap    = 1104-760 = 344px ≈ 3 cards ✓
// // //                  *   92-100% = fade-out (96px smooth transition)
// // //                  */
// // //                 maskImage:
// // //                   "linear-gradient(to right, transparent 0%, transparent 20%, black 27%, black 92%, transparent 100%)",
// // //                 WebkitMaskImage:
// // //                   "linear-gradient(to right, transparent 0%, transparent 20%, black 27%, black 92%, transparent 100%)",
// // //               }}
// // //             >
// // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // //                 {repeatedCards.map((card, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="flex-shrink-0 w-20 h-32 sm:w-24 sm:h-32 md:w-24 md:h-32 flex items-center justify-center"
// // //                   >
// // //                     <img
// // //                       src={card.image}
// // //                       alt=""
// // //                       className="w-full h-full object-contain"
// // //                       draggable={false}
// // //                     />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Phone Mockup */}
// // //           <div className="relative z-10">
// // //             <div className="relative">
// // //               <img
// // //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
// // //                 src="/Phone → Phone (1).png"
// // //                 alt="Phone mockup"
// // //               />
// // //               <div
// // //                 className="absolute flex items-center justify-center"
// // //                 style={{
// // //                   top: "15%",
// // //                   left: "10%",
// // //                   width: "80%",
// // //                   height: "70%",
// // //                 }}
// // //               >
// // //                 <img
// // //                   key={currentCardIndex}
// // //                   src={cards[currentCardIndex].phoneImage}
// // //                   alt="Card image"
// // //                   className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn {
// // //           from { opacity: 0; transform: scale(0.9); }
// // //           to { opacity: 1; transform: scale(1); }
// // //         }
// // //         .animate-fadeIn {
// // //           animation: fadeIn 0.3s ease-out forwards;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// /* eslint-disable react-hooks/set-state-in-effect */
// // // import { useEffect, useRef, useState } from "react";

// // // export default function PremiumRewardsAnimation() {
// // //   // eslint-disable-next-line no-unused-vars
// // //   const [mounted, setMounted] = useState(false);
// // //   const trackRef = useRef(null);

// // //   useEffect(() => {
// // //     // eslint-disable-next-line react-hooks/set-state-in-effect
// // //     setMounted(true);
// // //   }, []);

// // //   const cards = [
// // //     { id: 1, image: "/Image (3).png" },
// // //     { id: 2, image: "/Content.png" },
// // //     { id: 3, image: "/Image (4).png" },
// // //     { id: 4, image: "/Image (5).png" },
// // //   ];

// // //   useEffect(() => {
// // //     const track = trackRef.current;
// // //     if (!track) return;

// // //     let x = 0;
// // //     let rafId;
// // //     const speed = 0.6;

// // //     const animate = () => {
// // //       x -= speed;

// // //       if (Math.abs(x) >= track.scrollWidth / 2) {
// // //         x = 0;
// // //       }

// // //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// // //       rafId = requestAnimationFrame(animate);
// // //     };

// // //     rafId = requestAnimationFrame(animate);
// // //     return () => cancelAnimationFrame(rafId);
// // //   }, []);

// // //   return (
// // //     <div className="relative w-full h-screen py-20">
// // //       <div className="absolute inset-0 flex flex-col">
// // //         <div className="relative z-20 pt-9 px-8 py-12 text-center">
// // //           <img
// // //             src="public/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// // //             className="inline-block w-48 h-2 mb-6"
// // //             alt=""
// // //           />
// // //           {/* <img src='/3a7805e8d1f06e0e2c0b22ed0359b0ef6faa8399.png' alt=''/> */}
// // //           {/* <div className="inline-block w-16 h-1 bg-cyan-400 rounded-full mb-6"></div> */}
// // //           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
// // //             A Little More Than Just
// // //             <br />
// // //             Matching
// // //           </h1>
// // //           <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
// // //             Every Premium member is included in a daily reward
// // //             <br />
// // //             draw, at no extra effort.
// // //           </p>
// // //         </div>

// // //         <div className="flex-1 flex items-center justify-center relative">
// // //           {/* <div
// // //         className="absolute inset-0"
// // //         style={{
// // //           background: 'radial-gradient(ellipse at center, #7dd3dd 0%, #a8e6f0 30%, #d4f1f9 50%, #e8f7fa 70%, #f5f5f5 100%)'
// // //         }}
// // //       /> */}
// // //           <div
// // //             className="absolute inset-0"
// // //             style={{
// // //               background:
// // //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// // //             }}
// // //           />
// // //           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
// // //             <div className="mx-auto overflow-hidden w-[320px] sm:w-[400px] md:w-[480px]">
// // //               <div ref={trackRef} className="flex gap-6 will-change-transform">
// // //                 {[...cards, ...cards].map((card, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="
// // //                       flex-shrink-0
// // //                       w-20 h-32
// // //                       sm:w-24 sm:h-32
// // //                       md:w-100 md:h-100
// // //                       flex items-center justify-center
// // //                       text-4xl sm:text-5xl
// // //                     "
// // //                   >
// // //                     {typeof card.image === "string" &&
// // //                     card.image.startsWith("/") ? (
// // //                       <img
// // //                         src={card.image}
// // //                         alt=""
// // //                         // className="w-12 h-12 object-contain"
// // //                         draggable={false}
// // //                       />
// // //                     ) : (
// // //                       <span>{card.image}</span>
// // //                     )}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* <div className={`relative z-10 transition-all duration-700 pointer-events-none ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// // //           <div> */}
// // //           <img
// // //             className="md:w-80 md:h-[580px] sm:w-36 sm:h-[100px] w-52 h-[400px] relative overflow-hidden pointer-events-auto"
// // //             src="public/Phone → Phone (1).png"
// // //             alt=""
// // //           />
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useRef, useState } from "react";

// // export default function PremiumRewardsAnimation() {
// //   const [mounted, setMounted] = useState(false);
// //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
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

// //     // Card width + gap ka calculation (adjust according to your card size)
// //     const cardWidth = 96 + 24; // 96px card width + 24px gap (md breakpoint ke liye)

// //     const animate = () => {
// //       x -= speed;

// //       // Track total scroll distance to determine current card
// //       const totalScrollDistance = Math.abs(x);
// //       const currentIndex = Math.floor(totalScrollDistance / cardWidth) % cards.length;
// //       setCurrentCardIndex(currentIndex);

// //       if (Math.abs(x) >= track.scrollWidth / 2) {
// //         x = 0;
// //       }

// //       track.style.transform = `translate3d(${x}px, 0, 0)`;
// //       rafId = requestAnimationFrame(animate);
// //     };

// //     rafId = requestAnimationFrame(animate);
// //     return () => cancelAnimationFrame(rafId);
// //   }, [cards.length]);

// //   return (
// //     <div className="relative w-full h-screen py-20">
// //       <div className="absolute inset-0 flex flex-col">
// //         <div className="relative z-20 pt-9 px-8 py-12 text-center">
// //           <img
// //             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
// //             className="inline-block w-48 h-2 mb-6"
// //             alt=""
// //           />
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
// //           <div
// //             className="absolute inset-0"
// //             style={{
// //               background:
// //                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
// //             }}
// //           />

// //           {/* Cards Animation Track */}
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
// //                       md:w-24 md:h-32
// //                       flex items-center justify-center
// //                       text-4xl sm:text-5xl
// //                     "
// //                   >
// //                     {typeof card.image === "string" &&
// //                     card.image.startsWith("/") ? (
// //                       <img
// //                         src={card.image}
// //                         alt=""
// //                         className="w-full h-full object-contain"
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

// //           {/* Phone Mockup with Dynamic Image */}
// //           <div className="relative z-10">
// //             <div className="relative">
// //               {/* Phone Frame */}
// //               <img
// //                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px] relative"
// //                 src="/Phone → Phone (1).png"
// //                 alt="Phone mockup"
// //               />

// //               {/* Dynamic Phone Screen Content */}
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <div className="relative" style={{
// //                   // Adjust these values based on your phone mockup dimensions
// //                   width: '70%',
// //                   height: '75%',
// //                   top: '12%',
// //                   left: '15%',
// //                   position: 'absolute'
// //                 }}>
// //                   {/* Current Card Image in Phone */}
// //                   <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]">
// //                     <img
// //                       src={cards[currentCardIndex].image}
// //                       alt=""
// //                       className="w-full h-full object-contain transition-all duration-300"
// //                       style={{
// //                         opacity: mounted ? 1 : 0,
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
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
//   // eslint-disable-next-line no-unused-vars
//   const [mounted, setMounted] = useState(false);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Cards array with two images:
//   // image -> Moving cards ke liye (white background wali)
//   // phoneImage -> Phone mockup screen ke liye (transparent/no background)
//   const cards = [
//     {
//       id: 1,
//       image: "/Image (3).png", // Card ke liye (white bg)
//       phoneImage: "/Image (3).png", // Phone screen ke liye (transparent)
//     },
//     {
//       id: 2,
//       image: "/Content.png",
//       phoneImage: "/Content.png",
//     },
//     {
//       id: 3,
//       image: "/Image (4).png",
//       phoneImage: "/Image (4).png",
//     },
//     {
//       id: 4,
//       image: "/Image (5).png",
//       phoneImage: "/Image (5).png",
//     },
//   ];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let x = 0;
//     let rafId;
//     const speed = 0.6;

//     // Card width + gap calculation
//     const cardWidth = 96 + 24; // card width + gap

//     const animate = () => {
//       x -= speed;

//       // Calculate current card index based on scroll position
//       const totalScrollDistance = Math.abs(x);
//       const currentIndex =
//         Math.floor(totalScrollDistance / cardWidth) % cards.length;
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
//         {/* Header Section */}
//         <div className="relative z-20 pt-9 px-8 py-12 text-center">
//           <img
//             src="/Light → Figure - Line Gradient → ZzXR4Xa701pprKwAZYChrznQWE.png.png"
//             className="inline-block w-48 h-2 mb-6"
//             alt=""
//           />
//           <h1 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
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

//         {/* Main Content Area */}
//         <div className="flex-1 flex items-center justify-center relative">
//           {/* Background Gradient */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
//             }}
//           />

//           {/* Moving Cards Track */}
//           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
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
//                     "
//                   >
//                     {/* Moving Cards - White background wali images */}
//                     <img
//                       src={card.image}
//                       alt=""
//                       className="w-full h-full object-contain"
//                       draggable={false}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Phone Mockup */}
//           <div className="relative z-10 ">
//             <div className="relative">
//               {/* Phone Frame Image */}
//               <img
//                 className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
//                 src="/Phone → Phone (1).png"
//                 alt="Phone mockup"
//               />

//               {/* Phone Screen Content - Transparent icon images */}
//               <div
//                 className="absolute flex items-center justify-center"
//                 style={{
//                   // Adjust these values to match your phone mockup screen area
//                   top: "15%",
//                   left: "10%",
//                   width: "80%",
//                   height: "70%",
//                 }}
//               >
//                 {/* Current Card Icon - Transparent background */}
//                 <img
//                   key={currentCardIndex} // Key for triggering animation on change
//                   src={cards[currentCardIndex].phoneImage}
//                   alt="Card image"
//                   className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
//                   style={
//                     {
//                       // No background - transparent image will show phone bg
//                     }
//                   }
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }


import { useEffect, useRef, useState, useCallback } from "react";

const cards = [
  { id: 1, image: "/Image (3).png", phoneImage: "/Image (3).png" },
  { id: 2, image: "/Content.png", phoneImage: "/Content.png" },
  { id: 3, image: "/Image (4).png", phoneImage: "/Image (4).png" },
  { id: 4, image: "/Image (5).png", phoneImage: "/Image (5).png" },
];

const REPEAT_COUNT = 10;
const GAP = 24;
const SPEED = 0.6;

export default function PremiumRewardsAnimation() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [maskGradient, setMaskGradient] = useState("none");

  const trackRef = useRef(null);
  const phoneRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const currentIndexRef = useRef(0);

  const calculateMask = useCallback(() => {
    const phone = phoneRef.current;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!phone || !container || !track || !track.children[0]) return;

    const phoneRect = phone.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const phoneLeft = phoneRect.left - containerRect.left;
    const phoneRight = phoneRect.right - containerRect.left;
    const cardStep = track.children[0].offsetWidth + GAP;

    // ✅ LEFT SIDE: Sirf 1 card dikhega, fir thodi door jakar fade out
    // Card phone ke left se niklega → 1 card distance travel karega → fade out
    const leftVisible = phoneLeft - cardStep * 1;
    const leftFadeStart = leftVisible - 70; // 70px fade zone — "thodi door" jakar disappear

    // ✅ RIGHT SIDE: 3 cards dikhenge approaching the phone
    const rightVisible = phoneRight + cardStep * 3;
    const rightFadeEnd = rightVisible + 70; // 70px fade zone

    const mask = `linear-gradient(to right,
      transparent 0px,
      transparent ${Math.max(0, leftFadeStart)}px,
      black ${Math.max(0, leftVisible)}px,
      black ${rightVisible}px,
      transparent ${rightFadeEnd}px,
      transparent 100%
    )`;

    setMaskGradient(mask);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(calculateMask, 50),
      setTimeout(calculateMask, 200),
      setTimeout(calculateMask, 500),
    ];
    window.addEventListener("resize", calculateMask);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", calculateMask);
    };
  }, [calculateMask]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;

    const cardW = track.children[0].offsetWidth;
    const cardStep = cardW + GAP;
    const oneSetWidth = cards.length * cardStep;

    let x = 0;

    const animate = () => {
      x -= SPEED;

      const newIndex = Math.floor(Math.abs(x) / cardStep) % cards.length;
      if (newIndex !== currentIndexRef.current) {
        currentIndexRef.current = newIndex;
        setCurrentCardIndex(newIndex);
      }

      if (Math.abs(x) >= oneSetWidth) {
        x += oneSetWidth;
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const repeatedCards = Array.from({ length: REPEAT_COUNT }, () => cards).flat();

  return (
    <div className="relative w-full h-screen py-20">
      <div className="absolute inset-0 flex flex-col">
        {/* Header */}
        <div className="relative z-20 px-8 py-12 text-center">
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

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 60% at 50% 50%, #6dd0db 0%, #8ddde6 25%, #b5e9f0 45%, #d9f3f7 65%, #f0f9fb 85%, #ffffff 100%)",
            }}
          />

          {/* Cards Track */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0">
            <div
              ref={containerRef}
              className="mx-auto overflow-hidden"
              style={{
                width: "min(98vw, 1200px)",
                maskImage: maskGradient,
                WebkitMaskImage: maskGradient,
              }}
            >
              <div ref={trackRef} className="flex gap-6 will-change-transform">
                {repeatedCards.map((card, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-32 sm:w-24 sm:h-32 md:w-24 md:h-32 flex items-center justify-center"
                  >
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
          <div ref={phoneRef} className="relative z-10">
            <div className="relative">
              <img
                className="md:w-80 md:h-[580px] sm:w-36 sm:h-[260px] w-52 h-[400px]"
                src="/Phone → Phone (1).png"
                alt="Phone mockup"
                onLoad={calculateMask}
              />
              <div
                className="absolute flex items-center justify-center"
                style={{ top: "15%", left: "10%", width: "80%", height: "70%" }}
              >
                <img
                  key={currentCardIndex}
                  src={cards[currentCardIndex].phoneImage}
                  alt="Card image"
                  className="max-w-full h-32 ml-6 object-contain animate-fadeIn mb-[235px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}