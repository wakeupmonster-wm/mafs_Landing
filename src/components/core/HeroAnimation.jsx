// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from "react-router";
// import JoinModal from "@/module/home/components/JoinModal";
// import { useState } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroAnimation() {
//   const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
//   useEffect(() => {
//     // Phone Animation
//     gsap.to("#phone-hero", {
//       scrollTrigger: {
//         trigger: "#hero-section",
//         start: "top top",
//         endTrigger: "#benefits-section",
//         end: "center center",
//         scrub: 1,
//         onUpdate: (self) => {
//           const container = document.getElementById("concentric-container");
//           if (container) {
//             if (self.progress > 0.7) {
//               container.classList.add("is-active");
//             } else {
//               container.classList.remove("is-active");
//             }
//           }
//         },
//       },
//       y: "110vh",
//       scale: 1,
//       ease: "power2.inOut",
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (

//     <div className="overflow-x-hidden w-full">
//       {/* ===== Custom CSS for Perfect Rotation ===== */}
//       <style>{`
//         /* Clockwise Animation */
//         @keyframes spin-cw {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         /* Anti-Clockwise Animation */
//         @keyframes spin-ccw {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         /* Classes applied to the GROUP (<g>) inside SVG */
//         .spin-content-cw {
//           animation: spin-cw 10s linear infinite;
//           animation-play-state: paused;
//           will-change: transform; /* Critical for performance & preventing shake */
//         }
        
//         .spin-content-ccw {
//           animation: spin-ccw 10s linear infinite;
//           animation-play-state: paused;
//           will-change: transform; /* Critical for performance & preventing shake */
//         }

//         /* Trigger animations only when 'is-active' class is present */
//         .group.is-active .spin-content-cw,
//         .group.is-active .spin-content-ccw {
//           animation-play-state: running;
//         }
//       `}</style>

//       {/* ===== HERO SECTION ===== */}
//       <section id="hero-section" className="relative min-h-screen">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="/Background.png"
//             alt="Hero Background"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" />

//         {/* Decorative Stars */}
//         <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
//           <div className="absolute top-[15%] left-[8%] text-white/30 text-xl sm:text-2xl">
//             ✦
//           </div>
//           <div className="absolute top-[35%] left-[5%] text-white/25 text-base sm:text-lg">
//             ✦
//           </div>
//           <div className="absolute top-[20%] right-[12%] text-white/30 text-xl sm:text-2xl">
//             ✦
//           </div>
//           <div className="absolute bottom-[45%] left-[10%] text-white/20 text-lg">
//             ✦
//           </div>
//           <div className="absolute bottom-[50%] right-[15%] text-white/25 text-xl">
//             ✦
//           </div>
//         </div>

//         {/* Logo */}
//         <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 lg:left-14 z-30">
//           <img
//             src="/Vector (4).png"
//             alt="Logo"
//             className="h-7 sm:h-8 md:h-10 w-auto"
//           />
//         </div>

//         {/* Navigation */}
//         <div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 lg:right-14 z-30">
//           <nav className="bg-white/90 backdrop-blur-md rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex items-center gap-3 sm:gap-5 md:gap-7">
//             <Link to="/about" className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap">About</Link>

//             <Link to="/features" className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap">Features</Link>
//             <button
//               onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
//               className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
//             >
//               FAQ
//             </button>
//             <Link to="/waitlist" className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap">Join Now</Link>

//           </nav>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 w-full min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16">
//           <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
//             <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-black text-white tracking-tight leading-[0.92] mb-3 sm:mb-4">
//               MATCH AT FIRST SWIPE
//             </h1>
//             <p className="text-white/90 text-sm sm:text-base md:text-lg font-inter font-medium tracking-wide">
//               Australia's newest dating app with a spin
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-10 items-end max-w-[1200px] mx-auto w-full">
//             {/* Left */}
//             <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 order-2 lg:order-1">
//               <div className="text-center lg:text-left">
//                 <p className="text-white/70 text-xs sm:text-[13px] mb-2.5 font-medium tracking-wide uppercase">
//                   Launching soon on
//                 </p>
//                 <div className="flex gap-2.5 justify-center lg:justify-start">
//                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
//                     <img
//                       src="/Frame 120.png"
//                       className="w-6 h-6 sm:w-10 sm:h-10"
//                       alt="App Store"
//                     />
//                   </div>
//                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
//                     <img
//                       src="/Frame 121.png"
//                       className="w-6 h-6 sm:w-8 sm:h-8"
//                       alt="Play Store"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col items-center lg:items-start">
//                 <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 group">
//                   <div className="absolute inset-0 bg-white/10 rounded-full" />
//                   <svg
//                     className="absolute inset-0 w-full h-full origin-center animate-[spin_1s_linear_infinite] rotate-svg"
//                     viewBox="0 0 200 200"
//                   >
//                     <defs>
//                       <path
//                         id="circlePath"
//                         d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//                       />
//                     </defs>
//                     <text
//                       fill="white"
//                       fontSize="20"
//                       fontWeight="500"
//                       letterSpacing="2"
//                     >
//                       <textPath href="#circlePath" startOffset="0%">
//                         Scroll To Explore More
//                       </textPath>
//                     </text>
//                   </svg>
//                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
//                     <svg
//                       className="w-8 h-8 sm:w-10 sm:h-10 text-[#22D3EE]"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={3}
//                         d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Middle (Phone) */}
//             <div className="flex justify-center items-end order-1 lg:order-2">
//               <div id="phone-hero" className="pointer-events-none">
//                 <img
//                   src="/Phone.png"
//                   alt="Phone"
//                   className="w-[200px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[300px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
//                 />
//               </div>
//             </div>

//             {/* Right */}
//             <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-3 sm:gap-4 order-3">
//               <div>
//                 <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-bold mb-1.5 leading-snug">
//                   Scan QR code to
//                   <br />
//                   Join the Early Access
//                 </h3>
//                 <p className="text-white/75 text-xs sm:text-[13px] font-inter font-medium flex items-center justify-center lg:justify-end gap-1.5">
//                   Launching soon across Australia{" "}
//                   <span className="text-sm">🇦🇺</span>
//                 </p>
//               </div>
//               <div>
//                 <img
//                   src="/Image (6).png"
//                   alt="QR Code"
//                   className="w-28 h-28 sm:w-30 sm:h-30 md:w-40 md:h-40 rounded-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Modal */}
//       <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />

//       {/* ===== BENEFITS SECTION ===== */}
//       <section
//         id="benefits-section"
//         className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-16 overflow-hidden px-4"
//       >
//         <div
//           id="concentric-container"
//           className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] xl:w-[680px] xl:h-[680px] group flex items-center justify-center"
//         >
//           {/* Pop-out elements */}
//           <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[120px] group-[.is-active]:-translate-y-[50px] sm:group-[.is-active]:-translate-x-[160px] sm:group-[.is-active]:-translate-y-[70px] md:group-[.is-active]:-translate-x-[220px] md:group-[.is-active]:-translate-y-[100px] lg:group-[.is-active]:-translate-x-[280px] lg:group-[.is-active]:-translate-y-[120px] xl:group-[.is-active]:-translate-x-[240px] xl:group-[.is-active]:-translate-y-[140px]">
//             <img src="/Pop-out 1.png" alt="" className="w-full md:h-24 h-16" />
//           </div>
//           <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-75 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[100px] group-[.is-active]:-translate-y-[45px] sm:group-[.is-active]:translate-x-[130px] sm:group-[.is-active]:-translate-y-[60px] md:group-[.is-active]:translate-x-[170px] md:group-[.is-active]:-translate-y-[80px] lg:group-[.is-active]:translate-x-[210px] lg:group-[.is-active]:-translate-y-[95px] xl:group-[.is-active]:translate-x-[180px] xl:group-[.is-active]:-translate-y-[110px]">
//             <img src="/Pop-out 2.png" alt="" className="w-full h-24" />
//           </div>
//           <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-150 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[90px] group-[.is-active]:translate-y-[80px] sm:group-[.is-active]:-translate-x-[120px] sm:group-[.is-active]:translate-y-[110px] md:group-[.is-active]:-translate-x-[160px] md:group-[.is-active]:translate-y-[150px] lg:group-[.is-active]:-translate-x-[195px] lg:group-[.is-active]:translate-y-[180px] xl:group-[.is-active]:-translate-x-[185px] xl:group-[.is-active]:translate-y-[210px]">
//             <img src="/Pop-out 3.png" alt="" className="w-full h-24" />
//           </div>
//           <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-200 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[120px] group-[.is-active]:translate-y-[70px] sm:group-[.is-active]:translate-x-[160px] sm:group-[.is-active]:translate-y-[95px] md:group-[.is-active]:translate-x-[210px] md:group-[.is-active]:translate-y-[125px] lg:group-[.is-active]:translate-x-[260px] lg:group-[.is-active]:translate-y-[150px] xl:group-[.is-active]:translate-x-[230px] xl:group-[.is-active]:translate-y-[175px]">
//             <img src="/Pop-out 4.png" alt="" className="w-full md:h-24 h-16" />
//           </div>

//           {/* ===== 1. OUTER CIRCLE ===== */}
//           <div className="absolute inset-0 rounded-full border border-[#E5E7EB] bg-gradient-to-b from-white/80 to-transparent flex items-center justify-center">

//             {/* Cyan glow */}
//             <div className="absolute right-0 w-1/2 h-1/2 bg-[#22D3EE] opacity-0 group-[.is-active]:opacity-30 blur-[80px] md:blur-[100px] lg:blur-[120px] rounded-full transition-opacity duration-1000" />

//             {/* Outer Blue Arc (CLOCKWISE) */}
//             <svg
//               className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
//               viewBox="0 0 200 200"
//               fill="none"
//             >
//               <defs>
//                 <linearGradient
//                   id="arcGradientOuter"
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
//               {/* Rotating Group - Clockwise */}
//               <g
//                 className="spin-content-cw"
//                 style={{ transformOrigin: "100px 100px" }}
//               >
//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="99"
//                   stroke="url(#arcGradientOuter)"
//                   strokeWidth="1.5"
//                   strokeDasharray="155 467"
//                   strokeLinecap="round"
//                 />
//               </g>
//             </svg>

//             {/* ===== 2. MIDDLE CIRCLE ===== */}

//             <div className="w-[72%] h-[72%] rounded-full border border-[#E5E7EB]/60 flex items-center justify-center relative">
//               {/* Inner Blue Arc (ANTI-CLOCKWISE) */}
//               <svg
//                 className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
//                 viewBox="0 0 200 200"
//                 fill="none"
//               >
//                 <defs>
//                   <linearGradient
//                     id="arcGradientInner"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="0%"
//                   >
//                     <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
//                     <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.9" />
//                     <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//                 {/* Rotating Group - Anti-Clockwise */}
//                 <g
//                   className="spin-content-ccw"
//                   style={{ transformOrigin: "100px 100px" }}
//                 >
//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="99"
//                     stroke="url(#arcGradientInner)"
//                     // Slightly thicker stroke to match visual weight of outer circle
//                     strokeWidth="3.5"
//                     strokeDasharray="130 490"
//                     strokeLinecap="round"
//                   />
//                 </g>
//               </svg>

//               {/* ===== 3. INNER STATIC CIRCLE ===== */}
//               <div className="absolute inset-[1px] rounded-full bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
//                 <div className="w-[70%] h-[70%] rounded-full border border-[#E5E7EB]/80 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";
import JoinModal from "@/module/home/components/JoinModal";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.to("#phone-hero", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#benefits-section",
        end: "center center",
        scrub: 1,
        onUpdate: (self) => {
          const container = document.getElementById("concentric-container");
          if (container) {
            if (self.progress > 0.7) {
              container.classList.add("is-active");
            } else {
              container.classList.remove("is-active");
            }
          }
        },
      },
      y: "110vh",
      scale: 1,
      ease: "power2.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      {/* ===== Custom CSS for Perfect Rotation ===== */}
      <style>{`
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .spin-content-cw {
          animation: spin-cw 10s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }
        
        .spin-content-ccw {
          animation: spin-ccw 10s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }

        .group.is-active .spin-content-cw,
        .group.is-active .spin-content-ccw {
          animation-play-state: running;
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section id="hero-section" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src="/Background.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" />

        {/* Decorative Stars */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] text-white/30 text-lg sm:text-xl md:text-2xl">
            ✦
          </div>
          <div className="absolute top-[35%] left-[5%] text-white/25 text-sm sm:text-base md:text-lg">
            ✦
          </div>
          <div className="absolute top-[20%] right-[12%] text-white/30 text-lg sm:text-xl md:text-2xl">
            ✦
          </div>
          <div className="absolute bottom-[45%] left-[10%] text-white/20 text-base md:text-lg">
            ✦
          </div>
          <div className="absolute bottom-[50%] right-[15%] text-white/25 text-base md:text-xl">
            ✦
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 left-4 sm:left-6 md:left-8 lg:left-14 z-30">
          <img
            src="/Vector (4).png"
            alt="Logo"
            className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-10 right-4 sm:right-6 md:right-8 lg:right-14 z-30">
          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-white/90 backdrop-blur-md rounded-full p-2.5 border border-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#4B5563]" />
            ) : (
              <Menu className="w-5 h-5 text-[#4B5563]" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex bg-white/90 backdrop-blur-md rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-white/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)] items-center gap-3 sm:gap-5 md:gap-7">
            <Link
              to="/about"
              className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              Features
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("faq-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              FAQ
            </button>
            <Link
              to="/waitlist"
              className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              Join Now
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 w-[75%] max-w-[300px] h-full bg-white/95 backdrop-blur-xl shadow-2xl p-6 pt-20 flex flex-col gap-1">
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#4B5563]" />
              </button>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#4B5563] hover:text-[#111827] hover:bg-gray-50 text-base font-medium transition-colors py-3 px-4 rounded-xl"
              >
                About
              </Link>
              <Link
                to="/features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#4B5563] hover:text-[#111827] hover:bg-gray-50 text-base font-medium transition-colors py-3 px-4 rounded-xl"
              >
                Features
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("faq-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#4B5563] hover:text-[#111827] hover:bg-gray-50 text-base font-medium transition-colors py-3 px-4 rounded-xl text-left"
              >
                FAQ
              </button>
              <Link
                to="/waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#4B5563] hover:text-[#111827] hover:bg-gray-50 text-base font-medium transition-colors py-3 px-4 rounded-xl"
              >
                Join Now
              </Link>

              {/* App Store Links in Mobile Menu */}
              <div className="mt-auto pb-8">
                <p className="text-[#9CA3AF] text-xs mb-3 font-medium tracking-wide uppercase px-4">
                  Launching soon on
                </p>
                <div className="flex gap-2.5 px-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                      src="/Frame 120.png"
                      className="w-6 h-6"
                      alt="App Store"
                    />
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                      src="/Frame 121.png"
                      className="w-6 h-6"
                      alt="Play Store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-20 w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-14 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-14 lg:pb-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16 xl:mb-20">
            <h1 className="text-[28px] xs:text-[34px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-black text-white tracking-tight leading-[0.92] mb-2 sm:mb-3 md:mb-4">
              MATCH AT
              <br className="sm:hidden" />
              {" "}FIRST SWIPE
            </h1>
            <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg font-inter font-medium tracking-wide max-w-[90%] sm:max-w-none mx-auto">
              Australia's newest dating app with a spin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-10 items-end max-w-[1200px] mx-auto w-full">
            {/* Left */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 md:gap-8 order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <p className="text-white/70 text-[11px] sm:text-xs md:text-[13px] mb-2 sm:mb-2.5 font-medium tracking-wide uppercase">
                  Launching soon on
                </p>
                <div className="flex gap-2 sm:gap-2.5 justify-center lg:justify-start">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src="/Frame 120.png"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10"
                      alt="App Store"
                    />
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src="/Frame 121.png"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                      alt="Play Store"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 group">
                  <div className="absolute inset-0 bg-white/10 rounded-full" />
                  <svg
                    className="absolute inset-0 w-full h-full origin-center animate-[spin_1s_linear_infinite] rotate-svg"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="20"
                      fontWeight="500"
                      letterSpacing="2"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        Scroll To Explore More
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#22D3EE]"
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
              </div>
            </div>

            {/* Middle (Phone) */}
            <div className="flex justify-center items-end order-1 lg:order-2">
              <div id="phone-hero" className="pointer-events-none">
                <img
                  src="/Phone.png"
                  alt="Phone"
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[300px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-2 sm:gap-3 md:gap-4 order-3">
              <div>
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] font-bold mb-1 sm:mb-1.5 leading-snug">
                  Scan QR code to
                  <br />
                  Join the Early Access
                </h3>
                <p className="text-white/75 text-[11px] sm:text-xs md:text-[13px] font-inter font-medium flex items-center justify-center lg:justify-end gap-1 sm:gap-1.5">
                  Launching soon across Australia{" "}
                  <span className="text-xs sm:text-sm">🇦🇺</span>
                </p>
              </div>
              <div>
                <img
                  src="/Image (6).png"
                  alt="QR Code"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* ===== BENEFITS SECTION ===== */}
      <section
        id="benefits-section"
        className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-16 lg:py-16 overflow-hidden px-4"
      >
        <div
          id="concentric-container"
          className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[620px] xl:h-[620px] 2xl:w-[680px] 2xl:h-[680px] group flex items-center justify-center"
        >
          {/* Pop-out elements */}
          {/* Pop-out 1 - Top Left */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[80px] group-[.is-active]:-translate-y-[35px] sm:group-[.is-active]:-translate-x-[120px] sm:group-[.is-active]:-translate-y-[50px] md:group-[.is-active]:-translate-x-[180px] md:group-[.is-active]:-translate-y-[80px] lg:group-[.is-active]:-translate-x-[240px] lg:group-[.is-active]:-translate-y-[100px] xl:group-[.is-active]:-translate-x-[240px] xl:group-[.is-active]:-translate-y-[140px]">
            <img
              src="/Pop-out 1.png"
              alt=""
              className="w-full h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
            />
          </div>

          {/* Pop-out 2 - Top Right */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-75 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[70px] group-[.is-active]:-translate-y-[30px] sm:group-[.is-active]:translate-x-[100px] sm:group-[.is-active]:-translate-y-[45px] md:group-[.is-active]:translate-x-[140px] md:group-[.is-active]:-translate-y-[65px] lg:group-[.is-active]:translate-x-[180px] lg:group-[.is-active]:-translate-y-[85px] xl:group-[.is-active]:translate-x-[180px] xl:group-[.is-active]:-translate-y-[110px]">
            <img
              src="/Pop-out 2.png"
              alt=""
              className="w-full h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
            />
          </div>

          {/* Pop-out 3 - Bottom Left */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-150 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[60px] group-[.is-active]:translate-y-[55px] sm:group-[.is-active]:-translate-x-[90px] sm:group-[.is-active]:translate-y-[80px] md:group-[.is-active]:-translate-x-[130px] md:group-[.is-active]:translate-y-[120px] lg:group-[.is-active]:-translate-x-[170px] lg:group-[.is-active]:translate-y-[155px] xl:group-[.is-active]:-translate-x-[185px] xl:group-[.is-active]:translate-y-[210px]">
            <img
              src="/Pop-out 3.png"
              alt=""
              className="w-full h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
            />
          </div>

          {/* Pop-out 4 - Bottom Right */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-200 group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[80px] group-[.is-active]:translate-y-[50px] sm:group-[.is-active]:translate-x-[120px] sm:group-[.is-active]:translate-y-[70px] md:group-[.is-active]:translate-x-[170px] md:group-[.is-active]:translate-y-[100px] lg:group-[.is-active]:translate-x-[220px] lg:group-[.is-active]:translate-y-[130px] xl:group-[.is-active]:translate-x-[230px] xl:group-[.is-active]:translate-y-[175px]">
            <img
              src="/Pop-out 4.png"
              alt=""
              className="w-full h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24"
            />
          </div>

          {/* ===== 1. OUTER CIRCLE ===== */}
          <div className="absolute inset-0 rounded-full border border-[#E5E7EB] bg-gradient-to-b from-white/80 to-transparent flex items-center justify-center">
            {/* Cyan glow */}
            <div className="absolute right-0 w-1/2 h-1/2 bg-[#22D3EE] opacity-0 group-[.is-active]:opacity-30 blur-[50px] sm:blur-[60px] md:blur-[80px] lg:blur-[100px] xl:blur-[120px] rounded-full transition-opacity duration-1000" />

            {/* Outer Blue Arc (CLOCKWISE) */}
            <svg
              className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="arcGradientOuter"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                  <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g
                className="spin-content-cw"
                style={{ transformOrigin: "100px 100px" }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="99"
                  stroke="url(#arcGradientOuter)"
                  strokeWidth="1.5"
                  strokeDasharray="155 467"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            {/* ===== 2. MIDDLE CIRCLE ===== */}
            <div className="w-[72%] h-[72%] rounded-full border border-[#E5E7EB]/60 flex items-center justify-center relative">
              {/* Inner Blue Arc (ANTI-CLOCKWISE) */}
              <svg
                className="absolute inset-0 w-full h-full opacity-0 group-[.is-active]:opacity-100 transition-opacity duration-1000 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="arcGradientInner"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                    <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g
                  className="spin-content-ccw"
                  style={{ transformOrigin: "100px 100px" }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="99"
                    stroke="url(#arcGradientInner)"
                    strokeWidth="3.5"
                    strokeDasharray="130 490"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              {/* ===== 3. INNER STATIC CIRCLE ===== */}
              <div className="absolute inset-[1px] rounded-full bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
                <div className="w-[70%] h-[70%] rounded-full border border-[#E5E7EB]/80 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}