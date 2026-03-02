// import { forwardRef } from "react";

// // Data configuration for popout elements to reduce JSX clutter
// const POP_OUTS = [
//   {
//     src: "/Pop-out 1.png",
//     delay: "delay-0",
//     translate:
//       "group-[.is-active]:-translate-x-[142px] xs:group-[.is-active]:-translate-x-[130px] group-[.is-active]:-translate-y-[90px] sm:group-[.is-active]:-translate-x-[160px] sm:group-[.is-active]:-translate-y-[70px] md:group-[.is-active]:-translate-x-[225px] md:group-[.is-active]:-translate-y-[100px] lg:group-[.is-active]:-translate-x-[280px] lg:group-[.is-active]:-translate-y-[120px] xl:group-[.is-active]:-translate-x-[220px] xl:group-[.is-active]:-translate-y-[140px]",
//   },
//   {
//     src: "/Pop-out 2.png",
//     delay: "delay-75",
//     translate:
//       "group-[.is-active]:translate-x-[115px] xs:group-[.is-active]:translate-x-[110px] group-[.is-active]:-translate-y-[65px] sm:group-[.is-active]:translate-x-[130px] sm:group-[.is-active]:-translate-y-[60px] md:group-[.is-active]:translate-x-[165px] md:group-[.is-active]:-translate-y-[80px] lg:group-[.is-active]:translate-x-[210px] lg:group-[.is-active]:-translate-y-[95px] xl:group-[.is-active]:translate-x-[175px] xl:group-[.is-active]:-translate-y-[110px]",
//   },
//   {
//     src: "/Pop-out 3.png",
//     delay: "delay-150",
//     translate:
//       "group-[.is-active]:-translate-x-[105px] xs:group-[.is-active]:-translate-x-[90px] group-[.is-active]:translate-y-[100px] sm:group-[.is-active]:-translate-x-[120px] sm:group-[.is-active]:translate-y-[110px] md:group-[.is-active]:-translate-x-[160px] md:group-[.is-active]:translate-y-[150px] lg:group-[.is-active]:-translate-x-[195px] lg:group-[.is-active]:translate-y-[180px] xl:group-[.is-active]:-translate-x-[165px] xl:group-[.is-active]:translate-y-[200px]",
//   },
//   {
//     src: "/Pop-out 4.png",
//     delay: "delay-200",
//     translate:
//       "group-[.is-active]:translate-x-[140px] xs:group-[.is-active]:translate-x-[130px] group-[.is-active]:translate-y-[90px] sm:group-[.is-active]:translate-x-[160px] sm:group-[.is-active]:translate-y-[95px] md:group-[.is-active]:translate-x-[220px] md:group-[.is-active]:translate-y-[125px] lg:group-[.is-active]:translate-x-[260px] lg:group-[.is-active]:translate-y-[150px] xl:group-[.is-active]:translate-x-[220px] xl:group-[.is-active]:translate-y-[200px]",
//   },
// ];

// const ConcentricCircles = forwardRef((props, ref) => {
//   return (
//     <>
//       <style>{`
//         @keyframes spin-cw { to { transform: rotate(360deg); } }
//         @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        
//         .spin-content-cw { animation: spin-cw 10s linear infinite paused; will-change: transform; }
//         .spin-content-ccw { animation: spin-ccw 10s linear infinite paused; will-change: transform; }
        
//         .group.is-active .spin-content-cw,
//         .group.is-active .spin-content-ccw { animation-play-state: running; }
//       `}</style>

//       <div
//         ref={ref}
//         className="relative w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] xl:w-[680px] xl:h-[680px] group flex items-center justify-center"
//       >
//         {/* Dynamic Pop-outs */}
//         {POP_OUTS.map((popout, idx) => (
//           <div
//             key={idx}
//             className={`absolute z-10 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm ${
//               popout.delay
//             } group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 ${popout.translate.replace()}`}
//           >
//             <img
//               src={popout.src}
//               alt="Pop Out"
//               loading="lazy"
//               className="w-full md:h-24 h-16 object-contain"
//             />
//           </div>
//         ))}

//         {/* 1. Outer Circle */}
//         <div className="absolute inset-0 rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] border border-[#e9eaec] bg-gradient-to-b from-white/80 to-transparent flex items-center justify-center">
//           <div className="absolute right-0 w-1/2 h-1/2 bg-[#22D3EE] opacity-0 group-[.is-active]:opacity-30 blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full transition-opacity duration-1000" />

//           <svg
//             className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
//             viewBox="0 0 788 788"
//             fill="none"
//           >
//             <g clipPath="url(#svg_clip_main)">
//               {/* 1. Background Circle with Inner Shadow Filter */}
//               <g filter="url(#svg_filter_inner_shadow)">
//                 <circle
//                   cx="393.801"
//                   cy="394"
//                   r="393.432"
//                   fill="#F0F1F2"
//                   fillOpacity="0.4"
//                 />
//               </g>

//               {/* 2. ANIMATED BORDER GROUP (Clockwise Spin) */}
//               {/* Is group ke andar aapke dono glowing paths hain */}
//               <g
//                 className="spin-content-cw"
//                 style={{ transformOrigin: "394px 394px" }}
//               >
//                 {/* Path 1 with Blur */}
//                 <g filter="url(#svg_filter_blur_1)">
//                   <path
//                     d="M393.801 0.56842C264.186 0.56842 149.211 63.2467 77.5303 159.947"
//                     stroke="url(#svg_paint0_linear)"
//                     strokeWidth="4" // Width thodi badhayi hai taaki glow dikhe
//                     strokeLinecap="round"
//                   />
//                 </g>

//                 {/* Path 2 (Overlay for extra brightness) */}
//                 <g filter="url(#svg_filter_blur_2)">
//                   <path
//                     d="M393.801 0.56842C264.186 0.56842 149.211 63.2467 77.5303 159.947"
//                     stroke="url(#svg_paint1_linear)"
//                     strokeWidth="4"
//                     strokeLinecap="round"
//                   />
//                 </g>
//               </g>
//             </g>

//             <defs>
//               {/* Inner Shadow Filter */}
//               <filter
//                 id="svg_filter_inner_shadow"
//                 x="0.369141"
//                 y="0.56842"
//                 width="786.863"
//                 height="786.863"
//                 filterUnits="userSpaceOnUse"
//               >
//                 <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                 <feBlend
//                   mode="normal"
//                   in="SourceGraphic"
//                   in2="BackgroundImageFix"
//                   result="shape"
//                 />
//                 <feColorMatrix
//                   in="SourceAlpha"
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                   result="hardAlpha"
//                 />
//                 <feOffset />
//                 <feGaussianBlur stdDeviation="5" />{" "}
//                 {/* Depth badhane ke liye value 5 ki hai */}
//                 <feComposite
//                   in2="hardAlpha"
//                   operator="arithmetic"
//                   k2="-1"
//                   k3="1"
//                 />
//                 <feColorMatrix
//                   type="matrix"
//                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
//                 />
//                 <feBlend mode="normal" in2="shape" result="effect1" />
//               </filter>

//               {/* Glow/Blur Filters for the paths */}
//               <filter
//                 id="svg_filter_blur_1"
//                 x="50"
//                 y="-20"
//                 width="400"
//                 height="250"
//                 filterUnits="userSpaceOnUse"
//               >
//                 <feGaussianBlur stdDeviation="3" />
//               </filter>
//               <filter
//                 id="svg_filter_blur_2"
//                 x="50"
//                 y="-20"
//                 width="400"
//                 height="250"
//                 filterUnits="userSpaceOnUse"
//               >
//                 <feGaussianBlur stdDeviation="6" />
//               </filter>

//               {/* Linear Gradients */}
//               <linearGradient
//                 id="svg_paint0_linear"
//                 x1="393.801"
//                 y1="0.568"
//                 x2="77.53"
//                 y2="159.9"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#00D9FF" stopOpacity="0" />
//                 <stop offset="0.5" stopColor="#00D9FF" />
//                 <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient
//                 id="svg_paint1_linear"
//                 x1="393.801"
//                 y1="0.568"
//                 x2="77.53"
//                 y2="159.9"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#00D9FF" stopOpacity="0" />
//                 <stop offset="0.5" stopColor="#00D9FF" />
//                 <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
//               </linearGradient>

//               <clipPath id="svg_clip_main">
//                 <circle cx="393.801" cy="394" r="393.432" />
//               </clipPath>
//             </defs>
//           </svg>

//           {/* 2. Middle Circle */}
//           <div className="w-[72%] h-[72%] rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] border border-[#e9eaec] flex items-center justify-center relative">
//             {/* <svg
//               className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
//               viewBox="0 0 200 200"
//               fill="none"
//             >
//               <defs>
//                 <linearGradient
//                   id="arcGradientInner"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="0%"
//                 >
//                   <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
//                   <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.9" />
//                   <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
//                 </linearGradient>
//               </defs>
//               <g
//                 className="spin-content-ccw"
//                 style={{ transformOrigin: "100px 100px" }}
//               >
//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="99"
//                   stroke="url(#arcGradientInner)"
//                   strokeWidth="3.5"
//                   strokeDasharray="130 490"
//                   strokeLinecap="round"
//                 />
//               </g>
//             </svg> */}
//             <svg
//               className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
//               viewBox="0 0 788 788"
//               fill="none"
//             >
//               <g clipPath="url(#svg_clip_middle)">
//                 {/* 1. Background Circle with Inner Shadow (Same as Outer) */}
//                 <g filter="url(#svg_filter_inner_shadow_middle)">
//                   <circle
//                     cx="393.801"
//                     cy="394"
//                     r="393.432"
//                     fill="#F0F1F2"
//                     fillOpacity="0.4"
//                   />
//                 </g>

//                 {/* 2. ANIMATED BORDER GROUP (Anti-Clockwise Spin - CCW) */}
//                 <g
//                   className="spin-content-ccw"
//                   style={{ transformOrigin: "394px 394px" }}
//                 >
//                   {/* Path 1: Heavy Glow Layer (Stroke Width 16) */}
//                   <g filter="url(#svg_filter_blur_middle_glow)">
//                     <path
//                       d="M393.801 787.432C523.416 787.432 638.391 724.753 710.072 628.053"
//                       stroke="url(#svg_paint_middle_linear)"
//                       strokeWidth="16"
//                       strokeLinecap="round"
//                     />
//                   </g>

//                   {/* Path 2: Sharp Core Layer (Stroke Width 8) */}
//                   <path
//                     d="M393.801 787.432C523.416 787.432 638.391 724.753 710.072 628.053"
//                     stroke="#00D9FF"
//                     strokeWidth="8"
//                     strokeLinecap="round"
//                   />
//                 </g>
//               </g>

//               <defs>
//                 {/* Inner Shadow Filter for Depth */}
//                 <filter
//                   id="svg_filter_inner_shadow_middle"
//                   x="0.369141"
//                   y="0.56842"
//                   width="786.863"
//                   height="786.863"
//                   filterUnits="userSpaceOnUse"
//                 >
//                   <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                   <feBlend
//                     mode="normal"
//                     in="SourceGraphic"
//                     in2="BackgroundImageFix"
//                     result="shape"
//                   />
//                   <feColorMatrix
//                     in="SourceAlpha"
//                     type="matrix"
//                     values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                     result="hardAlpha"
//                   />
//                   <feOffset />
//                   <feGaussianBlur stdDeviation="5" />
//                   <feComposite
//                     in2="hardAlpha"
//                     operator="arithmetic"
//                     k2="-1"
//                     k3="1"
//                   />
//                   <feColorMatrix
//                     type="matrix"
//                     values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.25 0"
//                   />
//                   <feBlend mode="normal" in2="shape" result="effect1" />
//                 </filter>

//                 {/* Standard Blur Filter for Glow */}
//                 <filter
//                   id="svg_filter_blur_middle_glow"
//                   x="0"
//                   y="0"
//                   width="788"
//                   height="788"
//                   filterUnits="userSpaceOnUse"
//                 >
//                   <feGaussianBlur stdDeviation="6" />
//                 </filter>

//                 {/* Linear Gradient for Smooth Fade-in/out of the path */}
//                 <linearGradient
//                   id="svg_paint_middle_linear"
//                   x1="393.801"
//                   y1="787.432"
//                   x2="710.072"
//                   y2="628.053"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#00D9FF" stopOpacity="0" />
//                   <stop offset="0.5" stopColor="#00D9FF" />
//                   <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
//                 </linearGradient>

//                 {/* Clipping to keep everything inside the circle bounds */}
//                 <clipPath id="svg_clip_middle">
//                   <circle cx="393.801" cy="394" r="393.432" />
//                 </clipPath>
//               </defs>
//             </svg>

//             {/* 3. Inner Static Circle */}
//             <div className="absolute inset-[1px] rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
//               <div className="w-[70%] h-[70%] rounded-full border border-[#E5E7EB]/80 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });

// export default ConcentricCircles;


import { forwardRef } from "react";

const POP_OUTS = [
  {
    src: "/Pop-out 1.png",
    delay: "delay-0",
    translate:

      "group-[.is-active]:-translate-x-[125px] xs:group-[.is-active]:-translate-x-[135px] group-[.is-active]:-translate-y-[90px] sm:group-[.is-active]:-translate-x-[160px] sm:group-[.is-active]:-translate-y-[70px] md:group-[.is-active]:-translate-x-[220px] md:group-[.is-active]:-translate-y-[100px] lg:group-[.is-active]:-translate-x-[280px] lg:group-[.is-active]:-translate-y-[120px] xl:group-[.is-active]:-translate-x-[235px] xl:group-[.is-active]:-translate-y-[140px]",
  },
  {
    src: "/Pop-out 2.png",
    delay: "delay-75",
    translate:

      "group-[.is-active]:translate-x-[100px] xs:group-[.is-active]:translate-x-[110px] group-[.is-active]:-translate-y-[65px] sm:group-[.is-active]:translate-x-[130px] sm:group-[.is-active]:-translate-y-[60px] md:group-[.is-active]:translate-x-[165px] md:group-[.is-active]:-translate-y-[80px] lg:group-[.is-active]:translate-x-[210px] lg:group-[.is-active]:-translate-y-[95px] xl:group-[.is-active]:translate-x-[180px] xl:group-[.is-active]:-translate-y-[110px]",
  },
  {
    src: "/Pop-out 3.png",
    delay: "delay-150",
    translate:

      "group-[.is-active]:-translate-x-[100px] xs:group-[.is-active]:-translate-x-[90px] group-[.is-active]:translate-y-[100px] sm:group-[.is-active]:-translate-x-[120px] sm:group-[.is-active]:translate-y-[110px] md:group-[.is-active]:-translate-x-[160px] md:group-[.is-active]:translate-y-[150px] lg:group-[.is-active]:-translate-x-[195px] lg:group-[.is-active]:translate-y-[180px] xl:group-[.is-active]:-translate-x-[175px] xl:group-[.is-active]:translate-y-[200px]",
  },
  {
    src: "/Pop-out 4.png",
    delay: "delay-200",
    translate:
      "group-[.is-active]:translate-x-[125px] xs:group-[.is-active]:translate-x-[130px] group-[.is-active]:translate-y-[90px] sm:group-[.is-active]:translate-x-[160px] sm:group-[.is-active]:translate-y-[95px] md:group-[.is-active]:translate-x-[220px] md:group-[.is-active]:translate-y-[125px] lg:group-[.is-active]:translate-x-[260px] lg:group-[.is-active]:translate-y-[150px] xl:group-[.is-active]:translate-x-[230px] xl:group-[.is-active]:translate-y-[200px]",
  },
];

const ConcentricCircles = forwardRef((props, ref) => {
  return (
    <>
      <style>{`
        @keyframes spin-cw { to { transform: rotate(360deg); } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        
        .spin-content-cw { animation: spin-cw 10s linear infinite paused; will-change: transform; }
        .spin-content-ccw { animation: spin-ccw 10s linear infinite paused; will-change: transform; }
        
        .group.is-active .spin-content-cw,
        .group.is-active .spin-content-ccw { animation-play-state: running; }
      `}</style>

      {/* ✅ Circle - har device pe sahi size */}
      <div
        ref={ref}

        className="relative w-[330px] h-[330px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] xl:w-[680px] xl:h-[680px] group flex items-center justify-center"
      >
        {/* ✅ Pop-outs */}
        {POP_OUTS.map((popout, idx) => (
          <div
            key={idx}
            className={`
              absolute z-10
              transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]
              opacity-0 scale-50 blur-sm
              ${popout.delay}
              group-[.is-active]:opacity-100
              group-[.is-active]:scale-100
              group-[.is-active]:blur-0
              ${popout.translate}
            `}
          >
            <img
              src={popout.src}
              alt="Pop Out"
              loading="lazy"
              className="w-full h-12 xs:h-14 md:h-24 object-contain"
            />
          </div>
        ))}

        {/* ✅ 1. Outer Circle */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] border border-[#e9eaec] bg-gradient-to-b from-white/80 to-transparent flex items-center justify-center">

          {/* Cyan glow */}
          <div className="absolute right-0 w-1/2 h-1/2 bg-[#22D3EE] opacity-0 group-[.is-active]:opacity-30 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full transition-opacity duration-1000" />

          {/* Outer Arc SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
            viewBox="0 0 788 788"
            fill="none"
          >
            <g clipPath="url(#svg_clip_main)">
              <g filter="url(#svg_filter_inner_shadow)">
                <circle cx="393.801" cy="394" r="393.432" fill="#F0F1F2" fillOpacity="0.4" />
              </g>
              <g className="spin-content-cw" style={{ transformOrigin: "394px 394px" }}>
                <g filter="url(#svg_filter_blur_1)">
                  <path d="M393.801 0.56842C264.186 0.56842 149.211 63.2467 77.5303 159.947" stroke="url(#svg_paint0_linear)" strokeWidth="4" strokeLinecap="round" />
                </g>
                <g filter="url(#svg_filter_blur_2)">
                  <path d="M393.801 0.56842C264.186 0.56842 149.211 63.2467 77.5303 159.947" stroke="url(#svg_paint1_linear)" strokeWidth="4" strokeLinecap="round" />
                </g>
              </g>
            </g>
            <defs>
              <filter id="svg_filter_inner_shadow" x="0.369141" y="0.56842" width="786.863" height="786.863" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset /><feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="shape" result="effect1" />
              </filter>
              <filter id="svg_filter_blur_1" x="50" y="-20" width="400" height="250" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="3" />
              </filter>
              <filter id="svg_filter_blur_2" x="50" y="-20" width="400" height="250" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <linearGradient id="svg_paint0_linear" x1="393.801" y1="0.568" x2="77.53" y2="159.9" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="svg_paint1_linear" x1="393.801" y1="0.568" x2="77.53" y2="159.9" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
              </linearGradient>
              <clipPath id="svg_clip_main">
                <circle cx="393.801" cy="394" r="393.432" />
              </clipPath>
            </defs>
          </svg>

          {/* ✅ 2. Middle Circle */}
          <div className="w-[72%] h-[72%] rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] border border-[#e9eaec] flex items-center justify-center relative">

            {/* Middle Arc SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
              viewBox="0 0 788 788"
              fill="none"
            >
              <g clipPath="url(#svg_clip_middle)">
                <g filter="url(#svg_filter_inner_shadow_middle)">
                  <circle cx="393.801" cy="394" r="393.432" fill="#F0F1F2" fillOpacity="0.4" />
                </g>
                <g className="spin-content-ccw" style={{ transformOrigin: "394px 394px" }}>
                  <g filter="url(#svg_filter_blur_middle_glow)">
                    <path d="M393.801 787.432C523.416 787.432 638.391 724.753 710.072 628.053" stroke="url(#svg_paint_middle_linear)" strokeWidth="16" strokeLinecap="round" />
                  </g>
                  <path d="M393.801 787.432C523.416 787.432 638.391 724.753 710.072 628.053" stroke="#00D9FF" strokeWidth="8" strokeLinecap="round" />
                </g>
              </g>
              <defs>
                <filter id="svg_filter_inner_shadow_middle" x="0.369141" y="0.56842" width="786.863" height="786.863" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset /><feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="shape" result="effect1" />
                </filter>
                <filter id="svg_filter_blur_middle_glow" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
                <linearGradient id="svg_paint_middle_linear" x1="393.801" y1="787.432" x2="710.072" y2="628.053" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D9FF" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#00D9FF" />
                  <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
                </linearGradient>
                <clipPath id="svg_clip_middle">
                  <circle cx="393.801" cy="394" r="393.432" />
                </clipPath>
              </defs>
            </svg>

            {/* ✅ 3. Inner Static Circle */}
            <div className="absolute inset-[1px] rounded-full shadow-[inset_0_0_5px_rgba(0,0,0,0.20)] bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
              <div className="w-[70%] h-[70%] rounded-full border border-[#E5E7EB]/80 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ConcentricCircles.displayName = "ConcentricCircles";
export default ConcentricCircles;