// import { forwardRef } from "react";

// // Data configuration for popout elements with responsive offsets using CSS variables
// const POP_OUTS = [
//   {
//     src: "/Pop-out 1.png",
//     delay: "0ms",
//     className: "group-[.is-active]:-translate-x-[var(--offset-x-1)] group-[.is-active]:-translate-y-[var(--offset-y-1)]",
//     offsets: {
//       default: { x: "125px", y: "90px" },
//       xs: { x: "135px", y: "90px" },
//       sm: { x: "160px", y: "70px" },
//       md: { x: "220px", y: "100px" },
//       lg: { x: "280px", y: "120px" },
//       xl: { x: "235px", y: "140px" },
//     }
//   },
//   {
//     src: "/Pop-out 2.png",
//     delay: "75ms",
//     className: "group-[.is-active]:translate-x-[var(--offset-x-2)] group-[.is-active]:-translate-y-[var(--offset-y-2)]",
//     offsets: {
//       default: { x: "100px", y: "65px" },
//       xs: { x: "110px", y: "65px" },
//       sm: { x: "130px", y: "60px" },
//       md: { x: "165px", y: "80px" },
//       lg: { x: "210px", y: "95px" },
//       xl: { x: "180px", y: "110px" },
//     }
//   },
//   {
//     src: "/Pop-out 3.png",
//     delay: "150ms",
//     className: "group-[.is-active]:-translate-x-[var(--offset-x-3)] group-[.is-active]:translate-y-[var(--offset-y-3)]",
//     offsets: {
//       default: { x: "100px", y: "100px" },
//       xs: { x: "90px", y: "100px" },
//       sm: { x: "120px", y: "110px" },
//       md: { x: "160px", y: "150px" },
//       lg: { x: "195px", y: "180px" },
//       xl: { x: "175px", y: "200px" },
//     }
//   },
//   {
//     src: "/Pop-out 4.png",
//     delay: "200ms",
//     className: "group-[.is-active]:translate-x-[var(--offset-x-4)] group-[.is-active]:translate-y-[var(--offset-y-4)]",
//     offsets: {
//       default: { x: "125px", y: "90px" },
//       xs: { x: "130px", y: "90px" },
//       sm: { x: "160px", y: "95px" },
//       md: { x: "220px", y: "125px" },
//       lg: { x: "260px", y: "150px" },
//       xl: { x: "230px", y: "200px" },
//     }
//   },
// ];

// const ConcentricCircles = forwardRef((props, ref) => {
//   return (
//     <div className="flex items-center justify-center w-full max-w-full overflow-visible py-10">
//       <style>{`
//         @keyframes spin-cw { to { transform: rotate(360deg); } }
//         @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        
//         .spin-content-cw { animation: spin-cw 12s linear infinite paused; will-change: transform; }
//         .spin-content-ccw { animation: spin-ccw 12s linear infinite paused; will-change: transform; }
        
//         .group.is-active .spin-content-cw,
//         .group.is-active .spin-content-ccw { animation-play-state: running; }

//         :root {
//           --offset-x-1: 125px; --offset-y-1: 90px;
//           --offset-x-2: 100px; --offset-y-2: 65px;
//           --offset-x-3: 100px; --offset-y-3: 100px;
//           --offset-x-4: 125px; --offset-y-4: 90px;
//         }

//         @media (max-width: 480px) {
//           :root {
//             --offset-x-1: 130px; --offset-y-1: 80px;
//             --offset-x-2: 110px; --offset-y-2: 55px;
//             --offset-x-3: 100px; --offset-y-3: 100px;
//             --offset-x-4: 130px; --offset-y-4: 90px;
//           }
//         }

//         @media (min-width: 768px) {
//           :root {
//             --offset-x-1: 220px; --offset-y-1: 100px;
//             --offset-x-2: 165px; --offset-y-2: 80px;
//             --offset-x-3: 160px; --offset-y-3: 150px;
//             --offset-x-4: 220px; --offset-y-4: 125px;
//           }
//         }

//         @media (min-width: 1024px) {
//           :root {
//             --offset-x-1: 280px; --offset-y-1: 120px;
//             --offset-x-2: 210px; --offset-y-2: 95px;
//             --offset-x-3: 195px; --offset-y-3: 180px;
//             --offset-x-4: 260px; --offset-y-4: 150px;
//           }
//         }

//         @media (min-width: 1536px) {
//           :root {
//             --offset-x-1: 290px; --offset-y-1: 140px;
//             --offset-x-2: 240px; --offset-y-2: 110px;
//             --offset-x-3: 220px; --offset-y-3: 220px;
//             --offset-x-4: 280px; --offset-y-4: 220px;
//           }
//         }

//         @media (min-width: 2500px) {
//           :root {
//             --offset-x-1: 380px; --offset-y-1: 180px;
//             --offset-x-2: 310px; --offset-y-2: 140px;
//             --offset-x-3: 290px; --offset-y-3: 290px;
//             --offset-x-4: 370px; --offset-y-4: 290px;
//           }
//         }
//       `}</style>

//       <div
//         ref={ref}
//         className="concentric-container relative w-[min(330px,85vw)] h-[min(330px,85vw)] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] lg:w-[650px] lg:h-[650px] xl:w-[720px] xl:h-[720px] 2xl:w-[850px] 2xl:h-[850px] group flex items-center justify-center transition-all duration-700 ease-out"
//       >
//         {/* Dynamic Pop-outs */}
//         {POP_OUTS.map((popout, idx) => (
//           <div
//             key={idx}
//             className={`absolute z-20 transition-all duration-500 cubic-bezier(0.19,1,0.22,1) opacity-0 scale-50 blur-md group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 ${popout.className}`}
//           >
//             <img
//               src={popout.src}
//               alt="Feature Pop-out"
//               loading="lazy"
//               className="w-auto h-12 xs:h-14 md:h-20 lg:h-24 object-contain drop-shadow-lg"
//             />
//           </div>
//         ))}

//         {/* 1. Outer Circle */}
//         <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] border border-[#e9eaec]/60 bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">

//           {/* Animated Glow Spot */}
//           <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-cyan-400 opacity-0 group-[.is-active]:opacity-20 blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none" />

//           <svg
//             className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none p-[2px]"
//             viewBox="0 0 788 788"
//             fill="none"
//           >
//             <g clipPath="url(#svg_clip_main)">
//               <g filter="url(#svg_filter_inner_shadow)">
//                 <circle cx="394" cy="394" r="393" fill="#F0F1F2" fillOpacity="0.4" />
//               </g>

//               {/* Animated Border Group (CW) */}
//               <g className="spin-content-cw" style={{ transformOrigin: "394px 394px" }}>
//                 <g filter="url(#svg_filter_blur_1)">
//                   <path
//                     d="M394 2C265 2 150 64 78 160"
//                     stroke="url(#svg_paint0_linear)"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                   />
//                 </g>
//                 <path
//                   d="M394 2C265 2 150 64 78 160"
//                   stroke="url(#svg_paint1_linear)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                 />
//               </g>
//             </g>

//             <defs>
//               <filter id="svg_filter_inner_shadow" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
//                 <feGaussianBlur stdDeviation="8" />
//                 <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
//                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
//               </filter>
//               <filter id="svg_filter_blur_1" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
//                 <feGaussianBlur stdDeviation="6" />
//               </filter>
//               <linearGradient id="svg_paint0_linear" x1="394" y1="2" x2="78" y2="160" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#00D9FF" stopOpacity="0" />
//                 <stop offset="0.5" stopColor="#00D9FF" />
//                 <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient id="svg_paint1_linear" x1="394" y1="2" x2="78" y2="160" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#00D9FF" />
//                 <stop offset="1" stopColor="#00D9FF" stopOpacity="0.3" />
//               </linearGradient>
//               <clipPath id="svg_clip_main">
//                 <circle cx="394" cy="394" r="393" />
//               </clipPath>
//             </defs>
//           </svg>

//           {/* 2. Middle Circle */}
//           <div className="w-[74%] h-[74%] rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.06)] border border-[#e9eaec]/80 flex items-center justify-center relative">
//             <svg
//               className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none p-[1px]"
//               viewBox="0 0 788 788"
//               fill="none"
//             >
//               <g clipPath="url(#svg_clip_middle)">
//                 <g filter="url(#svg_filter_inner_shadow_middle)">
//                   <circle cx="394" cy="394" r="393" fill="#F0F1F2" fillOpacity="0.3" />
//                 </g>

//                 {/* Animated Border Group (CCW) */}
//                 <g className="spin-content-ccw" style={{ transformOrigin: "394px 394px" }}>
//                   <g filter="url(#svg_filter_blur_middle_glow)">
//                     <path
//                       d="M394 786C524 786 639 724 710 628"
//                       stroke="url(#svg_paint_middle_linear)"
//                       strokeWidth="14"
//                       strokeLinecap="round"
//                     />
//                   </g>
//                   <path
//                     d="M394 786C524 786 639 724 710 628"
//                     stroke="#00D9FF"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                   />
//                 </g>
//               </g>

//               <defs>
//                 <filter id="svg_filter_inner_shadow_middle" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
//                   <feGaussianBlur stdDeviation="6" />
//                   <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
//                   <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
//                 </filter>
//                 <filter id="svg_filter_blur_middle_glow" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
//                   <feGaussianBlur stdDeviation="8" />
//                 </filter>
//                 <linearGradient id="svg_paint_middle_linear" x1="394" y1="786" x2="710" y2="628" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#00D9FF" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#00D9FF" />
//                   <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
//                 </linearGradient>
//                 <clipPath id="svg_clip_middle">
//                   <circle cx="394" cy="394" r="393" />
//                 </clipPath>
//               </defs>
//             </svg>

//             {/* 3. Inner Static Core */}
//             <div className="absolute inset-[1px] rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] bg-[#F9FAFB]/80 flex items-center justify-center overflow-hidden">
//               <div className="w-[72%] h-[72%] rounded-full border border-[#E5E7EB]/70 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ConcentricCircles;


import { forwardRef } from "react";

const POP_OUTS = [
  {
    src: "/Pop-out 1.png",
    delay: "delay-0",
    translate:
      "group-[.is-active]:-translate-x-[125px] xs:group-[.is-active]:-translate-x-[135px] group-[.is-active]:-translate-y-[90px] sm:group-[.is-active]:-translate-x-[160px] sm:group-[.is-active]:-translate-y-[70px] md:group-[.is-active]:-translate-x-[220px] md:group-[.is-active]:-translate-y-[100px] lg:group-[.is-active]:-translate-x-[280px] lg:group-[.is-active]:-translate-y-[120px] xl:group-[.is-active]:-translate-x-[230px] xl:group-[.is-active]:-translate-y-[140px]",
  },
  {
    src: "/Pop-out 2.png",
    delay: "delay-75",
    translate:
      "group-[.is-active]:translate-x-[100px] xs:group-[.is-active]:translate-x-[110px] group-[.is-active]:-translate-y-[65px] sm:group-[.is-active]:translate-x-[130px] sm:group-[.is-active]:-translate-y-[60px] md:group-[.is-active]:translate-x-[165px] md:group-[.is-active]:-translate-y-[80px] lg:group-[.is-active]:translate-x-[210px] lg:group-[.is-active]:-translate-y-[95px] xl:group-[.is-active]:translate-x-[175px] xl:group-[.is-active]:-translate-y-[110px]",
  },
  {
    src: "/Pop-out 3.png",
    delay: "delay-150",
    translate:
      "group-[.is-active]:-translate-x-[100px] xs:group-[.is-active]:-translate-x-[90px] group-[.is-active]:translate-y-[100px] sm:group-[.is-active]:-translate-x-[120px] sm:group-[.is-active]:translate-y-[110px] md:group-[.is-active]:-translate-x-[160px] md:group-[.is-active]:translate-y-[150px] lg:group-[.is-active]:-translate-x-[195px] lg:group-[.is-active]:translate-y-[180px] xl:group-[.is-active]:-translate-x-[172px] xl:group-[.is-active]:translate-y-[200px]",
  },
  {
    src: "/Pop-out 4.png",
    delay: "delay-200",
    translate:
      "group-[.is-active]:translate-x-[125px] xs:group-[.is-active]:translate-x-[130px] group-[.is-active]:translate-y-[90px] sm:group-[.is-active]:translate-x-[160px] sm:group-[.is-active]:translate-y-[95px] md:group-[.is-active]:translate-x-[220px] md:group-[.is-active]:translate-y-[125px] lg:group-[.is-active]:translate-x-[260px] lg:group-[.is-active]:translate-y-[150px] xl:group-[.is-active]:translate-x-[222px] xl:group-[.is-active]:translate-y-[200px]",
  },
];

const ConcentricCircles = forwardRef((_props, ref) => {
  return (
    <div className="flex items-center justify-center w-full max-w-full overflow-visible py-6 sm:py-10 2xl:mt-72 sm:mt-0 xl:mt-0 md:mt-0 lg:mt-0">
      {/* ── Responsive CSS Custom Properties ── */}
      <style>{`
        @keyframes spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }

        .spin-content-cw  { animation: spin-cw  12s linear infinite paused; will-change: transform; }
        .spin-content-ccw { animation: spin-ccw 12s linear infinite paused; will-change: transform; }

        .group.is-active .spin-content-cw,
        .group.is-active .spin-content-ccw { animation-play-state: running; }

        /* ── BASE  320px ── */
        :root {
          --ox1: 85px;  --oy1: 60px;
          --ox2: 70px;  --oy2: 42px;
          --ox3: 65px;  --oy3: 70px;
          --ox4: 85px;  --oy4: 62px;
        }

        /* ── 375px (iPhone SE / 13 mini) ── */
        @media (min-width: 375px) {
          :root {
            --ox1: 100px; --oy1: 70px;
            --ox2: 82px;  --oy2: 48px;
            --ox3: 78px;  --oy3: 82px;
            --ox4: 100px; --oy4: 72px;
          }
        }

        /* ── xs  480px ── */
        @media (min-width: 480px) {
          :root {
            --ox1: 120px; --oy1: 78px;
            --ox2: 98px;  --oy2: 56px;
            --ox3: 92px;  --oy3: 95px;
            --ox4: 120px; --oy4: 80px;
          }
        }

        /* ── sm  640px ── */
        @media (min-width: 640px) {
          :root {
            --ox1: 150px; --oy1: 88px;
            --ox2: 125px; --oy2: 65px;
            --ox3: 115px; --oy3: 110px;
            --ox4: 150px; --oy4: 92px;
          }
        }

        /* ── md  768px ── */
        @media (min-width: 768px) {
          :root {
            --ox1: 195px; --oy1: 100px;
            --ox2: 155px; --oy2: 78px;
            --ox3: 145px; --oy3: 140px;
            --ox4: 195px; --oy4: 115px;
          }
        }

        /* ── lg  1024px ── */
        @media (min-width: 1024px) {
          :root {
            --ox1: 240px; --oy1: 115px;
            --ox2: 195px; --oy2: 90px;
            --ox3: 180px; --oy3: 170px;
            --ox4: 240px; --oy4: 138px;
          }
        }

        /* ── xl  1280px ── */
        @media (min-width: 1280px) {
          :root {
            --ox1: 275px; --oy1: 132px;
            --ox2: 225px; --oy2: 102px;
            --ox3: 205px; --oy3: 195px;
            --ox4: 275px; --oy4: 160px;
          }
        }

        /* ── 2xl  1536px ── */
        @media (min-width: 1536px) {
          :root {
            --ox1: 320px; --oy1: 155px;
            --ox2: 260px; --oy2: 120px;
            --ox3: 240px; --oy3: 230px;
            --ox4: 320px; --oy4: 195px;
          }
        }

        /* ── 3xl  1920px ── */
        @media (min-width: 1920px) {
          :root {
            --ox1: 370px; --oy1: 178px;
            --ox2: 300px; --oy2: 138px;
            --ox3: 278px; --oy3: 268px;
            --ox4: 370px; --oy4: 228px;
          }
        }

        /* ── 4K  2560px ── */
        @media (min-width: 2560px) {
          :root {
            --ox1: 430px; --oy1: 210px;
            --ox2: 350px; --oy2: 160px;
            --ox3: 325px; --oy3: 315px;
            --ox4: 430px; --oy4: 270px;
          }
        }
      `}</style>

      <div
        ref={ref}
        className="concentric-container group relative flex items-center justify-center
                   transition-all duration-700 ease-out
                   w-[min(265px,76vw)] h-[min(265px,76vw)]
                   min-[375px]:w-[min(310px,80vw)] min-[375px]:h-[min(310px,80vw)]
                   xs:w-[340px]  xs:h-[340px]
                   sm:w-[430px]  sm:h-[430px]
                   md:w-[530px]  md:h-[530px]
                   lg:w-[610px]  lg:h-[610px]
                   xl:w-[700px]  xl:h-[700px]
                   2xl:w-[820px] 2xl:h-[820px]
                   3xl:w-[930px] 3xl:h-[930px]"
      >
        {/* ── Dynamic Pop-outs ── */}
        {POP_OUTS.map((popout, idx) => (
          <div
            key={idx}
            className={`absolute z-[100] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm ${
              popout.delay
            } group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 ${popout.translate.replace()}`}
          >
            <img
              src={popout.src}
              alt="Feature"
              loading="lazy"
              className="w-auto object-contain drop-shadow-lg
                         h-8 min-[375px]:h-9
                         xs:h-11
                         sm:h-14
                         md:h-[4.5rem]
                         lg:h-20
                         xl:h-24
                         2xl:h-28
                         3xl:h-32"
            />
          </div>
        ))}

        {/* ── 1. Outer Circle ── */}
        <div
          className="absolute inset-0 rounded-full
                     shadow-[inset_0_0_15px_rgba(0,0,0,0.08)]
                     border border-[#e9eaec]/60
                     bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-sm
                     flex items-center justify-center overflow-hidden"
        >
          {/* Animated Glow */}
          <div
            className="absolute top-0 right-0 w-2/3 h-2/3 bg-cyan-400
                       opacity-0 group-[.is-active]:opacity-20
                       blur-[100px] rounded-full transition-opacity duration-1000
                       pointer-events-none"
          />

          {/* Outer SVG ring */}
          <svg
            className="absolute inset-0 w-full h-full opacity-0
                       group-[.is-active]:opacity-100
                       transition-opacity duration-1000 pointer-events-none p-[2px]"
            viewBox="0 0 788 788"
            fill="none"
          >
            <g clipPath="url(#clip_outer)">
              <g filter="url(#f_inner_outer)">
                <circle
                  cx="394"
                  cy="394"
                  r="393"
                  fill="#F0F1F2"
                  fillOpacity="0.4"
                />
              </g>

              <g
                className="spin-content-cw"
                style={{ transformOrigin: "394px 394px" }}
              >
                <g filter="url(#f_blur_outer)">
                  <path
                    d="M394 2C265 2 150 64 78 160"
                    stroke="url(#g_outer_blur)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
                <path
                  d="M394 2C265 2 150 64 78 160"
                  stroke="url(#g_outer_sharp)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </g>

            <defs>
              <filter
                id="f_inner_outer"
                x="0"
                y="0"
                width="788"
                height="788"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="8" />
                <feComposite
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.12 0"
                />
              </filter>
              <filter
                id="f_blur_outer"
                x="0"
                y="0"
                width="788"
                height="788"
                filterUnits="userSpaceOnUse"
              >
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <linearGradient
                id="g_outer_blur"
                x1="394"
                y1="2"
                x2="78"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D9FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="g_outer_sharp"
                x1="394"
                y1="2"
                x2="78"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0.3" />
              </linearGradient>
              <clipPath id="clip_outer">
                <circle cx="394" cy="394" r="393" />
              </clipPath>
            </defs>
          </svg>

          {/* ── 2. Middle Circle ── */}
          <div
            className="w-[74%] h-[74%] rounded-full
                       shadow-[inset_0_0_12px_rgba(0,0,0,0.06)]
                       border border-[#e9eaec]/80
                       flex items-center justify-center relative"
          >
            {/* Middle SVG ring */}
            <svg
              className="absolute inset-0 w-full h-full opacity-0
                         group-[.is-active]:opacity-100
                         transition-opacity duration-1000 pointer-events-none p-[1px]"
              viewBox="0 0 788 788"
              fill="none"
            >
              <g clipPath="url(#clip_mid)">
                <g filter="url(#f_inner_mid)">
                  <circle
                    cx="394"
                    cy="394"
                    r="393"
                    fill="#F0F1F2"
                    fillOpacity="0.3"
                  />
                </g>

                <g
                  className="spin-content-ccw"
                  style={{ transformOrigin: "394px 394px" }}
                >
                  <g filter="url(#f_blur_mid)">
                    <path
                      d="M394 786C524 786 639 724 710 628"
                      stroke="url(#g_mid)"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                  </g>
                  <path
                    d="M394 786C524 786 639 724 710 628"
                    stroke="#00D9FF"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
              </g>

              <defs>
                <filter
                  id="f_inner_mid"
                  x="0"
                  y="0"
                  width="788"
                  height="788"
                  filterUnits="userSpaceOnUse"
                >
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0"
                  />
                </filter>
                <filter
                  id="f_blur_mid"
                  x="0"
                  y="0"
                  width="788"
                  height="788"
                  filterUnits="userSpaceOnUse"
                >
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <linearGradient
                  id="g_mid"
                  x1="394"
                  y1="786"
                  x2="710"
                  y2="628"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00D9FF" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#00D9FF" />
                  <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip_mid">
                  <circle cx="394" cy="394" r="393" />
                </clipPath>
              </defs>
            </svg>

            {/* ── 3. Inner Core ── */}
            <div
              className="absolute inset-[1px] rounded-full
                         shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]
                         bg-[#F9FAFB]/80
                         flex items-center justify-center overflow-hidden"
            >
              <div
                className="w-[72%] h-[72%] rounded-full
                           border border-[#E5E7EB]/70
                           bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});


export default ConcentricCircles;
