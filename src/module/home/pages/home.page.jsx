// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Header from "../components/core/Header";
// import StarsBackground from "../components/core/StarsBackground";
// import HeroContent from "../components/core/HeroContent";
// import ConcentricCircles from "../components/core/ConcentricCircles";

// gsap.registerPlugin(ScrollTrigger);

// export default function HomePage() {
//   const compRef = useRef(null);
//   const phoneRef = useRef(null);
//   const concentricRef = useRef(null);
//   const [phoneArrived, setPhoneArrived] = useState(false);

//   useEffect(() => {
//     ScrollTrigger.normalizeScroll(true);

//     let ctx = gsap.context(() => {
//       const phone = phoneRef.current;
//       const mm = gsap.matchMedia();

//       if (!phone) return;

//       // ----------------------------------------------------------------------
//       // MOBILE-SPECIFIC ANIMATION (Isolating logic for 320px - 480px)
//       // ----------------------------------------------------------------------
//       mm.add("(max-width: 480px)", () => {
//         gsap.set(phone, { clearProps: "all" });

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             endTrigger: "#benefits-section",
//             end: "center center",
//             scrub: 1,
//             invalidateOnRefresh: true,
//             onUpdate: (self) => {
//               // Mobile Threshold: Syncs chips precisely as phone lands in rings
//               const mobileThreshold = 0.85;
//               if (concentricRef.current) {
//                 concentricRef.current.classList.toggle("is-active", self.progress > mobileThreshold);
//               }
//               setPhoneArrived(self.progress > mobileThreshold);
//             },
//           },
//         });

//         tl.to(phone, {
//           y: () => {
//             const phoneRect = phone.getBoundingClientRect();
//             const target = document.querySelector("#benefits-section .concentric-container");
//             if (!target) return 0;
//             const targetRect = target.getBoundingClientRect();

//             // Dynamic distance calculation for absolute mobile centering
//             const centerDistance = (targetRect.top + targetRect.height / 2) - (phoneRect.top + phoneRect.height / 2);
//             return centerDistance;
//           },
//           ease: "none",
//         });
//       });

//       // ----------------------------------------------------------------------
//       // TABLET & DESKTOP ANIMATION
//       // ----------------------------------------------------------------------
//       mm.add("(min-width: 481px)", () => {
//         gsap.set(phone, { clearProps: "all" });

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             endTrigger: "#benefits-section",
//             end: "center center",
//             scrub: 1.2,
//             invalidateOnRefresh: true,
//             onUpdate: (self) => {
//               const desktopThreshold = 0.8;
//               if (concentricRef.current) {
//                 concentricRef.current.classList.toggle("is-active", self.progress > desktopThreshold);
//               }
//               setPhoneArrived(self.progress > desktopThreshold);
//             },
//           },
//         });

//         tl.to(phone, {
//           y: () => {
//             const phoneRect = phone.getBoundingClientRect();
//             const target = document.querySelector("#benefits-section .concentric-container");
//             if (!target) return 0;
//             const targetRect = target.getBoundingClientRect();
//             return (targetRect.top + targetRect.height / 2) - (phoneRect.top + phoneRect.height / 2);
//           },
//           ease: "none",
//         });
//       });
//     }, compRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.normalizeScroll(false);
//     };
//   }, []);

//   return (
//     <div
//       ref={compRef}
//       className="overflow-x-hidden flex flex-col w-full h-auto"
//     >
//       {/* ===== HERO SECTION ===== */}
//       <section
//         id="hero-section"
//         className="relative min-h-[100dvh] flex flex-col overflow-visible"
//       >
//         {/* Background Backgrounds */}
//         <div className="absolute z-0 inset-0 w-full h-full overflow-hidden">
//           <img
//             src="/aqua-bg.webp"
//             alt="Hero Background"
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <StarsBackground />
//         <Header />
//         <HeroContent phoneRef={phoneRef} phoneArrived={phoneArrived} />
//       </section>

//       {/* ===== BENEFITS SECTION ===== */}
//       <section
//         id="benefits-section"
//         className="relative flex items-center justify-center pt-20 pb-44 xs:pt-24 xs:pb-48 sm:py-32 md:py-40 px-4 overflow-visible"
//       >
//         <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
//       </section>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/core/Header";
import StarsBackground from "../components/core/StarsBackground";
import HeroContent from "../components/core/HeroContent";
import ConcentricCircles from "../components/core/ConcentricCircles";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const compRef = useRef(null);
  const phoneRef = useRef(null);
  const concentricRef = useRef(null);
  const [phoneArrived, setPhoneArrived] = useState(false);

  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      const phone = phoneRef.current;
      const mm = gsap.matchMedia();
      if (!phone) return;

      /* ---- helper: build timeline for any breakpoint ---- */
      const buildTimeline = (scrubVal, threshold) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            endTrigger: "#benefits-section",
            end: "center center",
            scrub: scrubVal,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (concentricRef.current) {
                concentricRef.current.classList.toggle(
                  "is-active",
                  self.progress > threshold
                );
              }
              setPhoneArrived(self.progress > threshold);
            },
          },
        });

        tl.to(phone, {
          y: () => {
            const phoneRect = phone.getBoundingClientRect();
            const target = document.querySelector(
              "#benefits-section .concentric-container"
            );
            if (!target) return 0;
            const targetRect = target.getBoundingClientRect();
            return (
              targetRect.top +
              targetRect.height / 2 -
              (phoneRect.top + phoneRect.height / 2)
            );
          },
          ease: "none",
        });
      };

      /* ---------- SMALL MOBILE (≤479px) ---------- */
      mm.add("(max-width: 479px)", () => {
        gsap.set(phone, { clearProps: "all" });
        buildTimeline(0.8, 0.88);
      });

      /* ---------- LARGE MOBILE + SMALL TABLET (480–767px) ---------- */
      mm.add("(min-width: 480px) and (max-width: 767px)", () => {
        gsap.set(phone, { clearProps: "all" });
        buildTimeline(1, 0.85);
      });

      /* ---------- TABLET (768–1023px) ---------- */
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.set(phone, { clearProps: "all" });
        buildTimeline(1, 0.82);
      });

      /* ---------- DESKTOP (≥1024px) ---------- */
      mm.add("(min-width: 1024px)", () => {
        gsap.set(phone, { clearProps: "all" });
        buildTimeline(1.2, 0.8);
      });
    }, compRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return (
    <div
      ref={compRef}
      className="overflow-x-hidden flex flex-col w-full h-auto"
    >
      {/* ===== HERO ===== */}
      <section
        id="hero-section"
        className="relative min-h-[100dvh] flex flex-col overflow-visible"
      >
        <div className="absolute z-0 inset-0 w-full h-full overflow-hidden">
          <img
            src="/aqua-bg.webp"
            alt="Hero Background"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        <StarsBackground />
        <Header />
        <HeroContent phoneRef={phoneRef} phoneArrived={phoneArrived} />
      </section>

      {/* ===== BENEFITS ===== */}
      <section
        id="benefits-section"
        className="relative flex items-center justify-center
                   pt-16 pb-32
                   xs:pt-20 xs:pb-40
                   sm:pt-24 sm:pb-44
                   md:pt-28 md:pb-48
                   lg:py-32
                   xl:py-40
                   3xl:py-52
                   px-4 overflow-visible"
      >
        <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
      </section>
    </div>
  );
}