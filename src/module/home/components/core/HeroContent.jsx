// // import { useNavigate } from "react-router";

// // export default function HeroContent({ phoneRef, phoneArrived }) {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="relative z-20 w-full flex-1 flex flex-col px-4 xs:px-6 sm:px-10 lg:px-14 xl:px-20 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 overflow-visible">

// //       {/* Top Text Area - Stable positioning */}
// //       <div className="text-center w-full max-w-7xl mx-auto px-2 mb-4 xs:mb-6 md:mb-8 lg:mb-10">
// //         <h1 className="text-[clamp(1.75rem,7vw,3.5rem)] xs:text-[clamp(2rem,8vw,4.5rem)] lg:text-[clamp(3.5rem,6.5vw,5.5rem)] font-black text-white tracking-tight uppercase leading-[0.9] sm:leading-[0.85]">
// //           MATCH AT FIRST SWIPE
// //         </h1>
// //         <p className="text-white/90 text-sm xs:text-base md:text-lg lg:text-xl font-medium tracking-tight mt-1.5 xs:mt-2">
// //           Australia's newest dating app with a spin
// //         </p>
// //       </div>

// //       {/* Main Content Area - Optical Centering */}
// //       <div className="flex-1 flex flex-col justify-center items-center relative w-full max-w-[1530px] mx-auto overflow-visible pb-12 sm:pb-16 md:pb-20">

// //         {/* Background Glow */}
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-[700px] aspect-square pointer-events-none overflow-visible">
// //           <img
// //             src="/mobellipse.webp"
// //             alt=""
// //             className="w-full h-full object-contain opacity-30 md:opacity-50 blur-3xl scale-125 lg:scale-150"
// //             loading="lazy"
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-10 items-center lg:items-end w-full h-full relative z-10 overflow-visible">

// //           {/* Left Column: App Stores (Desktop) */}
// //           <div className="hidden lg:flex flex-col items-start mb-12 xl:mb-20 gap-8 xl:gap-14 order-1 self-end">
// //             <div className="space-y-3">
// //               <p className="text-white/80 text-sm xl:text-base font-medium">
// //                 Launching soon on
// //               </p>
// //               <div className="flex gap-3">
// //                 {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
// //                   <div
// //                     key={i}
// //                     className="w-10 h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white/20"
// //                   >
// //                     <img
// //                       src={src}
// //                       className="w-6 h-6 xl:w-7 xl:h-7 object-contain"
// //                       alt="Store Icon"
// //                       loading="lazy"
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="hidden xl:block">
// //               <CircularScrollButton />
// //             </div>
// //           </div>

// //           {/* Middle Column: Phone (GSAP Target) */}
// //           <div className="flex justify-center items-center lg:items-end order-1 lg:order-2 self-center lg:self-end relative py-6 md:py-0 overflow-visible">
// //             <div ref={phoneRef} className="pointer-events-none relative flex justify-center items-end will-change-transform z-30 overflow-visible">
// //               {/* Phone Image 1 (Initial) */}
// //               <img
// //                 src="/Phone_main.webp"
// //                 alt="Phone"
// //                 className="w-[clamp(150px,25vw,300px)] lg:w-[clamp(240px,18vw,280px)] xl:w-[clamp(260px,20vw,320px)] h-auto object-contain drop-shadow-2xl"
// //                 style={{
// //                   opacity: phoneArrived ? 0 : 1,
// //                   transition: "opacity 0.6s ease-in-out",
// //                 }}
// //                 loading="lazy"
// //               />
// //               {/* Phone Image 2 (After Scroll) */}
// //               <img
// //                 src="/After_Scroll_1.webp"
// //                 alt="Phone Features"
// //                 className="w-[clamp(150px,25vw,300px)] lg:w-[clamp(240px,18vw,280px)] xl:w-[clamp(260px,20vw,320px)] h-auto object-contain drop-shadow-2xl absolute bottom-0"
// //                 style={{
// //                   opacity: phoneArrived ? 1 : 0,
// //                   transition: "opacity 0.6s ease-in-out",
// //                 }}
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>

// //           {/* Right Column: QR Code (Desktop) */}
// //           <div className="hidden lg:flex flex-col items-end mb-12 xl:mb-20 order-3 self-end">
// //             <div className="max-w-[200px] xl:max-w-max text-right space-y-3 xl:space-y-4">
// //               <h3 className="text-white text-base xl:text-xl font-bold leading-tight uppercase tracking-wide">
// //                 Scan QR code to <br className="hidden xl:block" /> Join Early Access
// //               </h3>
// //               <p className="text-white/75 text-xs xl:text-sm font-medium flex items-center justify-end gap-2">
// //                 Launching soon across Australia <span>🇦🇺</span>
// //               </p>
// //               <div className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl inline-block shadow-2xl">
// //                 <img
// //                   src="/QR-Code.png"
// //                   alt="QR Code"
// //                   loading="lazy"
// //                   className="w-24 h-24 xl:w-32 xl:h-32 rounded-xl"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Sticky Bar */}
// //       <div className="lg:hidden fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-sm sm:max-w-md z-[100] transition-transform duration-300">
// //         <div className="bg-white/95 backdrop-blur-md rounded-full px-4 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50">
// //           <div className="flex items-center gap-3 ml-2">
// //             <span className="text-black text-sm xs:text-base font-extrabold tracking-tight">Get App</span>
// //             <div className="flex gap-2">
// //               {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
// //                 <div key={i} className="w-8 h-8 xs:w-10 xs:h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm active:scale-90 transition-transform cursor-pointer">
// //                   <img src={src} className="w-5 h-5 xs:w-6 xs:h-6 object-contain" alt="Store icon" />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <button
// //             onClick={() => navigate("/waitlist")}
// //             className="bg-join-gradient text-white font-bold text-xs xs:text-sm py-3 px-6 xs:px-8 rounded-full border-2 border-blue-100/30 shadow-xl active:scale-95 hover:brightness-110 transition-all font-outfit"
// //           >
// //             Join Waitlist
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function CircularScrollButton() {
// //   return (
// //     <div className="relative w-28 h-28 xl:w-32 xl:h-32 group cursor-pointer transition-transform hover:scale-105">
// //       <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[2px] border border-white/10" />
// //       <svg
// //         className="absolute inset-0 w-full h-full origin-center animate-[spin_10s_linear_infinite]"
// //         viewBox="0 0 200 200"
// //       >
// //         <defs>
// //           <path
// //             id="circlePath"
// //             d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
// //           />
// //         </defs>
// //         <text fill="rgba(255,255,255,0.6)" fontSize="16" fontWeight="600" letterSpacing="2.5">
// //           <textPath href="#circlePath">
// //             SCROLL TO EXPLORE MORE •&nbsp;
// //           </textPath>
// //         </text>
// //       </svg>
// //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
// //         <svg
// //           className="w-6 h-6 xl:w-7 xl:h-7 text-[#09c1c7]"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth={3}
// //             d="M19 14l-7 7m0 0l-7-7m7 7V3"
// //           />
// //         </svg>
// //       </div>
// //     </div>
// //   );
// // }



// import { useNavigate } from "react-router";

// export default function HeroContent({ phoneRef, phoneArrived }) {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative z-20 w-full flex-1 flex flex-col
//                  px-4 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20 3xl:px-28
//                  pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-28 xl:pt-32 3xl:pt-40
//                  pb-24 xs:pb-28 sm:pb-28 md:pb-28 lg:pb-12 xl:pb-16
//                  overflow-visible"
//     >
//       {/* ── Heading ── */}
//       <div className="text-center w-full max-w-7xl mx-auto px-1 mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
//         <h1
//           className="font-black text-white tracking-tight uppercase leading-[0.92]
//                      text-[1.625rem]
//                      xs:text-[2.125rem]
//                      sm:text-[2.75rem]
//                      md:text-[3.125rem]
//                      lg:text-[3.5rem]
//                      xl:text-[4.25rem]
//                      2xl:text-[4.75rem]
//                      3xl:text-[5.5rem]"
//         >
//           MATCH AT FIRST SWIPE
//         </h1>
//         <p
//           className="text-white/90 font-medium tracking-tight
//                      text-[0.8rem] mt-1
//                      xs:text-[0.9rem] xs:mt-1.5
//                      sm:text-base sm:mt-2
//                      md:text-lg
//                      lg:text-xl
//                      xl:text-[1.35rem]
//                      2xl:text-2xl
//                      3xl:text-[1.7rem]"
//         >
//           Australia's newest dating app with a spin
//         </p>
//       </div>

//       {/* ── Main Content ── */}
//       <div
//         className="flex-1 flex flex-col justify-center items-center relative
//                    w-full max-w-[1600px] 3xl:max-w-[1900px] mx-auto
//                    overflow-visible pb-6 sm:pb-10 md:pb-14 lg:pb-16"
//       >
//         {/* Background Glow */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-[700px] 3xl:max-w-[900px] aspect-square pointer-events-none overflow-visible">
//           <img
//             src="/mobellipse.webp"
//             alt=""
//             className="w-full h-full object-contain opacity-30 md:opacity-50 blur-3xl scale-125 lg:scale-150"
//             loading="lazy"
//           />
//         </div>

//         {/* Grid */}
//         <div
//           className="grid grid-cols-1 lg:grid-cols-3
//                      gap-4 xs:gap-5 sm:gap-6 lg:gap-4 xl:gap-8 2xl:gap-12 3xl:gap-16
//                      items-center lg:items-end
//                      w-full h-full relative z-10 overflow-visible"
//         >
//           {/* ── Left: App Stores (desktop) ── */}
//           <div className="hidden lg:flex flex-col items-start mb-10 xl:mb-16 2xl:mb-20 3xl:mb-24 gap-6 xl:gap-10 2xl:gap-14 order-1 self-end">
//             <div className="space-y-3">
//               <p className="text-white/80 text-sm xl:text-base 2xl:text-lg font-medium">
//                 Launching soon on
//               </p>
//               <div className="flex gap-3">
//                 {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
//                   <div
//                     key={i}
//                     className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14
//                                bg-white rounded-full flex items-center justify-center
//                                shadow-lg hover:scale-110 transition-transform cursor-pointer
//                                border-2 border-white/20"
//                   >
//                     <img
//                       src={src}
//                       className="w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain"
//                       alt="Store Icon"
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="hidden xl:block">
//               <CircularScrollButton />
//             </div>
//           </div>

//           {/* ── Middle: Phone ── */}
//           <div
//             className="flex justify-center items-center lg:items-end
//                        order-1 lg:order-2 self-center lg:self-end
//                        relative py-4 xs:py-5 sm:py-6 md:py-4 lg:py-0 overflow-visible"
//           >
//             <div
//               ref={phoneRef}
//               className="pointer-events-none relative flex justify-center items-end
//                          will-change-transform z-30 overflow-visible"
//             >
//               {/* Phone — initial */}
//               <img
//                 src="/Phone_main.webp"
//                 alt="Phone"
//                 className="h-auto object-contain drop-shadow-2xl
//                            w-[min(170px,44vw)]
//                            xs:w-[195px]
//                            sm:w-[225px]
//                            md:w-[255px]
//                            lg:w-[235px]
//                            xl:w-[275px]
//                            2xl:w-[315px]
//                            3xl:w-[360px]"
//                 style={{
//                   opacity: phoneArrived ? 0 : 1,
//                   transition: "opacity 0.6s ease-in-out",
//                 }}
//                 loading="eager"
//               />
//               {/* Phone — after scroll */}
//               <img
//                 src="/After_Scroll_1.webp"
//                 alt="Phone Features"
//                 className="absolute bottom-0 h-auto object-contain drop-shadow-2xl
//                            w-[min(170px,44vw)]
//                            xs:w-[195px]
//                            sm:w-[225px]
//                            md:w-[255px]
//                            lg:w-[235px]
//                            xl:w-[275px]
//                            2xl:w-[315px]
//                            3xl:w-[360px]"
//                 style={{
//                   opacity: phoneArrived ? 1 : 0,
//                   transition: "opacity 0.6s ease-in-out",
//                 }}
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* ── Right: QR Code (desktop) ── */}
//           <div className="hidden lg:flex flex-col items-end mb-10 xl:mb-16 2xl:mb-20 3xl:mb-24 order-3 self-end">
//             <div className="max-w-[200px] xl:max-w-max text-right space-y-3 xl:space-y-4">
//               <h3
//                 className="text-white font-bold leading-tight uppercase tracking-wide
//                            text-base xl:text-xl 2xl:text-2xl"
//               >
//                 Scan QR code to <br className="hidden xl:block" /> Join Early
//                 Access
//               </h3>
//               <p
//                 className="text-white/75 font-medium flex items-center justify-end gap-2
//                            text-xs xl:text-sm 2xl:text-base"
//               >
//                 Launching soon across Australia <span>🇦🇺</span>
//               </p>
//               <div className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl inline-block shadow-2xl">
//                 <img
//                   src="/QR-Code.png"
//                   alt="QR Code"
//                   loading="lazy"
//                   className="rounded-xl
//                              w-24 h-24
//                              xl:w-32 xl:h-32
//                              2xl:w-36 2xl:h-36
//                              3xl:w-40 3xl:h-40"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Mobile Sticky Bar ── */}
//       <div
//         className="lg:hidden fixed z-[100] left-1/2 -translate-x-1/2
//                    bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8
//                    w-[91%] max-w-[360px] xs:max-w-sm sm:max-w-md
//                    transition-transform duration-300"
//       >
//         <div
//           className="bg-white/95 backdrop-blur-md rounded-full
//                      px-3 xs:px-4 py-2.5 xs:py-3
//                      flex items-center justify-between
//                      shadow-[0_16px_48px_rgba(0,0,0,0.18)]
//                      border border-white/50"
//         >
//           <div className="flex items-center gap-2 xs:gap-3 ml-1 xs:ml-2">
//             <span className="text-black text-xs xs:text-sm sm:text-base font-extrabold tracking-tight whitespace-nowrap">
//               Get App
//             </span>
//             <div className="flex gap-1.5 xs:gap-2">
//               {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
//                 <div
//                   key={i}
//                   className="w-7 h-7 xs:w-9 xs:h-9 sm:w-10 sm:h-10
//                              bg-gray-50 rounded-full flex items-center justify-center
//                              border border-gray-100 shadow-sm
//                              active:scale-90 transition-transform cursor-pointer"
//                 >
//                   <img
//                     src={src}
//                     className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 object-contain"
//                     alt="Store icon"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={() => navigate("/waitlist")}
//             className="bg-join-gradient text-white font-bold rounded-full
//                        border-2 border-blue-100/30 shadow-xl
//                        active:scale-95 hover:brightness-110 transition-all font-outfit
//                        text-[0.65rem] py-2.5 px-4
//                        xs:text-xs xs:py-3 xs:px-6
//                        sm:text-sm sm:px-8"
//           >
//             Join Waitlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ── Circular Scroll Button (desktop only) ── */
// function CircularScrollButton() {
//   return (
//     <div className="relative w-28 h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 group cursor-pointer transition-transform hover:scale-105">
//       <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[2px] border border-white/10" />
//       <svg
//         className="absolute inset-0 w-full h-full origin-center animate-[spin_10s_linear_infinite]"
//         viewBox="0 0 200 200"
//       >
//         <defs>
//           <path
//             id="circlePath"
//             d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//           />
//         </defs>
//         <text
//           fill="rgba(255,255,255,0.6)"
//           fontSize="16"
//           fontWeight="600"
//           letterSpacing="2.5"
//         >
//           <textPath href="#circlePath">
//             SCROLL TO EXPLORE MORE •&nbsp;
//           </textPath>
//         </text>
//       </svg>
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                    w-14 h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18
//                    bg-white rounded-full flex items-center justify-center shadow-xl"
//       >
//         <svg
//           className="w-6 h-6 xl:w-7 xl:h-7 text-[#09c1c7]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={3}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }



import { useNavigate } from "react-router";

export default function HeroContent({ phoneRef, phoneArrived }) {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 w-full flex-1 flex flex-col px-3 xs:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pt-16 xs:pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 overflow-visible">

      <div className="text-center w-full max-w-7xl mx-auto px-2 mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <h1 className="text-[clamp(1.5rem,6vw,2.5rem)] xs:text-[clamp(1.75rem,7vw,3.5rem)] sm:text-[clamp(2rem,8vw,4rem)] lg:text-[clamp(3rem,6vw,4.5rem)] xl:text-[clamp(3.5rem,6.5vw,5.5rem)] 2xl:text-[clamp(4rem,6vw,6rem)] font-black text-white tracking-tight uppercase leading-[0.95] xs:leading-[0.9] sm:leading-[0.85]">
          MATCH AT FIRST SWIPE
        </h1>
        <p className="text-white/90 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tight mt-1 xs:mt-1.5 sm:mt-2">
          Australia's newest dating app with a spin
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center relative w-full max-w-[1600px] mx-auto overflow-visible pb-10 xs:pb-12 sm:pb-16 md:pb-20 lg:pb-24">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-[500px] xs:max-w-[600px] sm:max-w-[700px] lg:max-w-[800px] aspect-square pointer-events-none overflow-visible">
          <img
            src="/mobellipse.webp"
            alt=""
            className="w-full h-full object-contain opacity-20 xs:opacity-25 md:opacity-35 lg:opacity-50 blur-2xl sm:blur-3xl scale-110 xs:scale-125 lg:scale-150"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10 items-center lg:items-end w-full h-full relative z-10 overflow-visible">

          <div className="hidden lg:flex flex-col items-start mb-8 lg:mb-10 xl:mb-16 2xl:mb-20 gap-6 lg:gap-8 xl:gap-12 2xl:gap-14 order-1 self-end">
            <div className="space-y-2.5 lg:space-y-3">
              <p className="text-white/80 text-xs lg:text-sm xl:text-base font-medium">
                Launching soon on
              </p>
              <div className="flex gap-2 lg:gap-2.5 xl:gap-3">
                {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white/20"
                  >
                    <img
                      src={src}
                      className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 object-contain"
                      alt="Store Icon"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:block">
              <CircularScrollButton />
            </div>
          </div>

          <div className="flex justify-center items-center lg:items-end order-1 lg:order-2 self-center lg:self-end relative py-4 xs:py-6 md:py-0 overflow-visible">
            <div ref={phoneRef} className="pointer-events-none relative flex justify-center items-end will-change-transform z-30 overflow-visible">
              <img
                src="/Phone_main.webp"
                alt="Phone"
                className="w-[clamp(140px,35vw,220px)] xs:w-[clamp(160px,30vw,240px)] sm:w-[clamp(180px,28vw,260px)] md:w-[clamp(200px,26vw,280px)] lg:w-[clamp(220px,18vw,260px)] xl:w-[clamp(240px,19vw,300px)] 2xl:w-[clamp(280px,20vw,340px)] 3xl:w-[clamp(300px,18vw,360px)] h-auto object-contain drop-shadow-2xl"
                style={{
                  opacity: phoneArrived ? 0 : 1,
                  transition: "opacity 0.6s ease-in-out",
                }}
                loading="lazy"
              />
              <img
                src="/After_Scroll_1.webp"
                alt="Phone Features"
                className="w-[clamp(140px,35vw,220px)] xs:w-[clamp(160px,30vw,240px)] sm:w-[clamp(180px,28vw,260px)] md:w-[clamp(200px,26vw,280px)] lg:w-[clamp(220px,18vw,260px)] xl:w-[clamp(240px,19vw,300px)] 2xl:w-[clamp(280px,20vw,340px)] 3xl:w-[clamp(300px,18vw,360px)] h-auto object-contain drop-shadow-2xl absolute bottom-0"
                style={{
                  opacity: phoneArrived ? 1 : 0,
                  transition: "opacity 0.6s ease-in-out",
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end mb-8 lg:mb-10 xl:mb-16 2xl:mb-20 order-3 self-end">
            <div className="max-w-[180px] lg:max-w-[200px] xl:max-w-[220px] 2xl:max-w-[240px] text-right space-y-2.5 lg:space-y-3 xl:space-y-4">
              <h3 className="text-white text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold leading-tight uppercase tracking-wide">
                Scan QR code to <br className="hidden xl:block" /> Join Early Access
              </h3>
              <p className="text-white/75 text-[10px] lg:text-xs xl:text-sm font-medium flex items-center justify-end gap-1.5 lg:gap-2">
                Launching soon across Australia <span>🇦🇺</span>
              </p>
              <div className="p-2.5 lg:p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl lg:rounded-3xl inline-block shadow-2xl">
                <img
                  src="/QR-Code.png"
                  alt="QR Code"
                  loading="lazy"
                  className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-lg lg:rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[94%] xs:w-[92%] sm:w-[90%] max-w-[420px] sm:max-w-md z-[100] transition-transform duration-300">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3 xs:px-4 py-2.5 xs:py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50">
          <div className="flex items-center gap-2 xs:gap-3 ml-1 xs:ml-2">
            <span className="text-black text-xs xs:text-sm sm:text-base font-extrabold tracking-tight">Get App</span>
            <div className="flex gap-1.5 xs:gap-2">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div key={i} className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm active:scale-90 transition-transform cursor-pointer">
                  <img src={src} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 object-contain" alt="Store icon" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate("/waitlist")}
            className="bg-join-gradient text-white font-bold text-[10px] xs:text-xs sm:text-sm py-2 xs:py-2.5 sm:py-3 px-4 xs:px-6 sm:px-8 rounded-full border-2 border-blue-100/30 shadow-xl active:scale-95 hover:brightness-110 transition-all font-outfit whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

function CircularScrollButton() {
  return (
    <div className="relative w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 group cursor-pointer transition-transform hover:scale-105">
      <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[2px] border border-white/10" />
      <svg
        className="absolute inset-0 w-full h-full origin-center animate-[spin_10s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="rgba(255,255,255,0.6)" fontSize="16" fontWeight="600" letterSpacing="2.5">
          <textPath href="#circlePath">
            SCROLL TO EXPLORE MORE •&nbsp;
          </textPath>
        </text>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-white rounded-full flex items-center justify-center shadow-xl">
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#09c1c7]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
