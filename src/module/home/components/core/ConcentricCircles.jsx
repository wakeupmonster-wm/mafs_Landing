import { forwardRef } from "react";

// Data configuration for popout elements with responsive offsets using CSS variables
const POP_OUTS = [
  {
    src: "/Pop-out 1.png",
    delay: "0ms",
    className: "group-[.is-active]:-translate-x-[var(--offset-x-1)] group-[.is-active]:-translate-y-[var(--offset-y-1)]",
    offsets: {
      default: { x: "125px", y: "90px" },
      xs: { x: "135px", y: "90px" },
      sm: { x: "160px", y: "70px" },
      md: { x: "220px", y: "100px" },
      lg: { x: "280px", y: "120px" },
      xl: { x: "235px", y: "140px" },
    }
  },
  {
    src: "/Pop-out 2.png",
    delay: "75ms",
    className: "group-[.is-active]:translate-x-[var(--offset-x-2)] group-[.is-active]:-translate-y-[var(--offset-y-2)]",
    offsets: {
      default: { x: "100px", y: "65px" },
      xs: { x: "110px", y: "65px" },
      sm: { x: "130px", y: "60px" },
      md: { x: "165px", y: "80px" },
      lg: { x: "210px", y: "95px" },
      xl: { x: "180px", y: "110px" },
    }
  },
  {
    src: "/Pop-out 3.png",
    delay: "150ms",
    className: "group-[.is-active]:-translate-x-[var(--offset-x-3)] group-[.is-active]:translate-y-[var(--offset-y-3)]",
    offsets: {
      default: { x: "100px", y: "100px" },
      xs: { x: "90px", y: "100px" },
      sm: { x: "120px", y: "110px" },
      md: { x: "160px", y: "150px" },
      lg: { x: "195px", y: "180px" },
      xl: { x: "175px", y: "200px" },
    }
  },
  {
    src: "/Pop-out 4.png",
    delay: "200ms",
    className: "group-[.is-active]:translate-x-[var(--offset-x-4)] group-[.is-active]:translate-y-[var(--offset-y-4)]",
    offsets: {
      default: { x: "125px", y: "90px" },
      xs: { x: "130px", y: "90px" },
      sm: { x: "160px", y: "95px" },
      md: { x: "220px", y: "125px" },
      lg: { x: "260px", y: "150px" },
      xl: { x: "230px", y: "200px" },
    }
  },
];

const ConcentricCircles = forwardRef((props, ref) => {
  return (
    <div className="flex items-center justify-center w-full max-w-full overflow-visible py-10">
      <style>{`
        @keyframes spin-cw { to { transform: rotate(360deg); } }
        @keyframes spin-ccw { to { transform: rotate(-360deg); } }
        
        .spin-content-cw { animation: spin-cw 12s linear infinite paused; will-change: transform; }
        .spin-content-ccw { animation: spin-ccw 12s linear infinite paused; will-change: transform; }
        
        .group.is-active .spin-content-cw,
        .group.is-active .spin-content-ccw { animation-play-state: running; }

        :root {
          --offset-x-1: 125px; --offset-y-1: 90px;
          --offset-x-2: 100px; --offset-y-2: 65px;
          --offset-x-3: 100px; --offset-y-3: 100px;
          --offset-x-4: 125px; --offset-y-4: 90px;
        }

        @media (min-width: 480px) {
          :root {
            --offset-x-1: 160px; --offset-y-1: 70px;
            --offset-x-2: 130px; --offset-y-2: 60px;
            --offset-x-3: 120px; --offset-y-3: 110px;
            --offset-x-4: 160px; --offset-y-4: 95px;
          }
        }

        @media (min-width: 768px) {
          :root {
            --offset-x-1: 220px; --offset-y-1: 100px;
            --offset-x-2: 165px; --offset-y-2: 80px;
            --offset-x-3: 160px; --offset-y-3: 150px;
            --offset-x-4: 220px; --offset-y-4: 125px;
          }
        }

        @media (min-width: 1024px) {
          :root {
            --offset-x-1: 280px; --offset-y-1: 120px;
            --offset-x-2: 210px; --offset-y-2: 95px;
            --offset-x-3: 195px; --offset-y-3: 180px;
            --offset-x-4: 260px; --offset-y-4: 150px;
          }
        }

        @media (min-width: 1536px) {
          :root {
            --offset-x-1: 290px; --offset-y-1: 140px;
            --offset-x-2: 240px; --offset-y-2: 110px;
            --offset-x-3: 220px; --offset-y-3: 220px;
            --offset-x-4: 280px; --offset-y-4: 220px;
          }
        }

        @media (min-width: 2500px) {
          :root {
            --offset-x-1: 380px; --offset-y-1: 180px;
            --offset-x-2: 310px; --offset-y-2: 140px;
            --offset-x-3: 290px; --offset-y-3: 290px;
            --offset-x-4: 370px; --offset-y-4: 290px;
          }
        }
      `}</style>

      <div
        ref={ref}
        className="concentric-container relative w-[min(330px,85vw)] h-[min(330px,85vw)] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] lg:w-[650px] lg:h-[650px] xl:w-[720px] xl:h-[720px] 2xl:w-[850px] 2xl:h-[850px] group flex items-center justify-center transition-all duration-700 ease-out"
      >
        {/* Dynamic Pop-outs */}
        {POP_OUTS.map((popout, idx) => (
          <div
            key={idx}
            className={`absolute z-20 transition-all duration-1000 cubic-bezier(0.19,1,0.22,1) opacity-0 scale-50 blur-md group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 ${popout.className}`}
            style={{ transitionDelay: popout.delay }}
          >
            <img
              src={popout.src}
              alt="Feature Pop-out"
              loading="lazy"
              className="w-auto h-12 xs:h-14 md:h-20 lg:h-24 object-contain drop-shadow-lg"
            />
          </div>
        ))}

        {/* 1. Outer Circle */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] border border-[#e9eaec]/60 bg-gradient-to-br from-white/90 to-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">

          {/* Animated Glow Spot */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-cyan-400 opacity-0 group-[.is-active]:opacity-20 blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none" />

          <svg
            className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none p-[2px]"
            viewBox="0 0 788 788"
            fill="none"
          >
            <g clipPath="url(#svg_clip_main)">
              <g filter="url(#svg_filter_inner_shadow)">
                <circle cx="394" cy="394" r="393" fill="#F0F1F2" fillOpacity="0.4" />
              </g>

              {/* Animated Border Group (CW) */}
              <g className="spin-content-cw" style={{ transformOrigin: "394px 394px" }}>
                <g filter="url(#svg_filter_blur_1)">
                  <path
                    d="M394 2C265 2 150 64 78 160"
                    stroke="url(#svg_paint0_linear)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </g>
                <path
                  d="M394 2C265 2 150 64 78 160"
                  stroke="url(#svg_paint1_linear)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </g>

            <defs>
              <filter id="svg_filter_inner_shadow" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              </filter>
              <filter id="svg_filter_blur_1" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <linearGradient id="svg_paint0_linear" x1="394" y1="2" x2="78" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" stopOpacity="0" />
                <stop offset="0.5" stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="svg_paint1_linear" x1="394" y1="2" x2="78" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0.3" />
              </linearGradient>
              <clipPath id="svg_clip_main">
                <circle cx="394" cy="394" r="393" />
              </clipPath>
            </defs>
          </svg>

          {/* 2. Middle Circle */}
          <div className="w-[74%] h-[74%] rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.06)] border border-[#e9eaec]/80 flex items-center justify-center relative">
            <svg
              className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none p-[1px]"
              viewBox="0 0 788 788"
              fill="none"
            >
              <g clipPath="url(#svg_clip_middle)">
                <g filter="url(#svg_filter_inner_shadow_middle)">
                  <circle cx="394" cy="394" r="393" fill="#F0F1F2" fillOpacity="0.3" />
                </g>

                {/* Animated Border Group (CCW) */}
                <g className="spin-content-ccw" style={{ transformOrigin: "394px 394px" }}>
                  <g filter="url(#svg_filter_blur_middle_glow)">
                    <path
                      d="M394 786C524 786 639 724 710 628"
                      stroke="url(#svg_paint_middle_linear)"
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
                <filter id="svg_filter_inner_shadow_middle" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                </filter>
                <filter id="svg_filter_blur_middle_glow" x="0" y="0" width="788" height="788" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <linearGradient id="svg_paint_middle_linear" x1="394" y1="786" x2="710" y2="628" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D9FF" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#00D9FF" />
                  <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
                </linearGradient>
                <clipPath id="svg_clip_middle">
                  <circle cx="394" cy="394" r="393" />
                </clipPath>
              </defs>
            </svg>

            {/* 3. Inner Static Core */}
            <div className="absolute inset-[1px] rounded-full shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] bg-[#F9FAFB]/80 flex items-center justify-center overflow-hidden">
              <div className="w-[72%] h-[72%] rounded-full border border-[#E5E7EB]/70 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ConcentricCircles;
