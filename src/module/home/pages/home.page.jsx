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
//     let ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // ✅ Desktop
//       mm.add("(min-width: 1024px)", () => {
//         gsap.to(phoneRef.current, {
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             endTrigger: "#benefits-section",
//             end: "center center",
//             scrub: 1.5,
//             onUpdate: (self) => {
//               if (concentricRef.current) {
//                 concentricRef.current.classList.toggle(
//                   "is-active",
//                   self.progress > 0.7
//                 );
//               }
//               setPhoneArrived(self.progress > 0.75);
//               //  setPhoneArrived(self.progress > 0.95);
//             },
//           },
//           y: "90vh",
//           ease: "power2.inOut",
//         });
//       });

//       // ✅ Tablet
//       mm.add("(max-width: 1024px) and (min-width: 760px)", () => {
//         gsap.to(phoneRef.current, {
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             endTrigger: "#benefits-section",
//             end: "center center",
//             scrub: 1,
//             onUpdate: (self) => {
//               if (concentricRef.current) {
//                 concentricRef.current.classList.toggle(
//                   "is-active",
//                   self.progress > 0.82
//                 );
//               }
//               setPhoneArrived(self.progress > 0.85);
//             },
//           },
//           y: "55vh",
//           ease: "power2.inOut",
//         });
//       });

//       // ✅ Mobile
//       mm.add("(max-width: 428px) and (min-width: 360px)", () => {
//         gsap.to(phoneRef.current, {
//           scrollTrigger: {
//             trigger: "#hero-section",
//             start: "top top",
//             endTrigger: "#benefits-section",
//             end: "center center",
//             scrub: 1,
//             onUpdate: (self) => {
//               if (concentricRef.current) {
//                 concentricRef.current.classList.toggle(
//                   "is-active",
//                   self.progress > 0.88
//                 );
//               }
//               setPhoneArrived(self.progress > 0.86);
//             },
//           },
//           y: "61vh",
//           ease: "power2.inOut",
//         });
//       });
//     }, compRef);

//     return () => ctx.revert();
//   }, []);

//   console.log("window.innerWidth: ", window.innerWidth);

//   return (
//     <div ref={compRef} className="overflow-hidden w-full h-auto">
//       {/* ===== HERO SECTION ===== */}
//       <section
//         id="hero-section"
//         className="relative h-[80vh] md:h-[75vh] lg:h-[110vh]"
//       >
//         {/* Backgrounds */}
//         <div className="absolute z-0 h-[75vh] md:h-[70vh] lg:h-[110vh] w-full">
//           <img
//             src="/aqua-bg.webp"
//             alt="Hero Background"
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         {/* <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" /> */}

//         <StarsBackground />
//         <Header />
//         <HeroContent phoneRef={phoneRef} phoneArrived={phoneArrived} />
//       </section>

//       {/* ===== BENEFITS SECTION ===== */}
//       {/* <section
//         id="benefits-section"
//         className="relative h-[80vh] lg:h-[130vh] flex items-center justify-center py-16 sm:py-20 md:py-20 lg:py-44 overflow-hidden px-4"
//       >
//         <ConcentricCircles ref={concentricRef} />
//       </section> */}
//       <section
//         id="benefits-section"
//         className="relative flex items-center justify-center overflow-hidden px-4 min-h-[65vh] lg:min-h-[120vh]"
//       >
//         <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
//       </section>
//     </div>
//   );
// }


// HomePage.jsx
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

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const mm = gsap.matchMedia();

  //     // ✅ Big Desktop 1280
  //     mm.add("(max-width: 1530px) and (min-width: 1280px)", () => {
  //       gsap.to(phoneRef.current, {
  //         scrollTrigger: {
  //           trigger: "#hero-section",
  //           start: "top top",
  //           endTrigger: "#benefits-section",
  //           end: "center center",
  //           scrub: 1.5,
  //           onUpdate: (self) => {
  //             if (concentricRef.current) {
  //               concentricRef.current.classList.toggle(
  //                 "is-active",
  //                 self.progress > 0.7
  //               );
  //             }
  //             setPhoneArrived(self.progress > 0.75);
  //             //  setPhoneArrived(self.progress > 0.95);
  //           },
  //         },
  //         y: "86vh",
  //         ease: "power2.inOut",
  //       });
  //     });

  //     // ✅ Small Desktop 1024px
  //     mm.add("(max-width: 1260px) and (min-width: 1024px)", () => {
  //       gsap.to(phoneRef.current, {
  //         scrollTrigger: {
  //           trigger: "#hero-section",
  //           start: "top top",
  //           endTrigger: "#benefits-section",
  //           end: "center center",
  //           scrub: 1.5,
  //           onUpdate: (self) => {
  //             if (concentricRef.current) {
  //               concentricRef.current.classList.toggle(
  //                 "is-active",
  //                 self.progress > 0.7
  //               );
  //             }
  //             setPhoneArrived(self.progress > 0.75);
  //             //  setPhoneArrived(self.progress > 0.95);
  //           },
  //         },
  //         y: "96.5vh",
  //         ease: "power2.inOut",
  //       });
  //     });

  //     // ✅ Tablet
  //     mm.add("(max-width: 1024px) and (min-width: 760px)", () => {
  //       gsap.to(phoneRef.current, {
  //         scrollTrigger: {
  //           trigger: "#hero-section",
  //           start: "top top",
  //           endTrigger: "#benefits-section",
  //           end: "center center",
  //           scrub: 1,
  //           onUpdate: (self) => {
  //             if (concentricRef.current) {
  //               concentricRef.current.classList.toggle(
  //                 "is-active",
  //                 self.progress > 0.82
  //               );
  //             }
  //             setPhoneArrived(self.progress > 0.85);
  //           },
  //         },
  //         y: "63vh",
  //         ease: "power2.inOut",
  //       });
  //     });

  //     // ✅ Mobile
  //     mm.add("(max-width: 428px) and (min-width: 360px)", () => {
  //       gsap.to(phoneRef.current, {
  //         scrollTrigger: {
  //           trigger: "#hero-section",
  //           start: "top top",
  //           endTrigger: "#benefits-section",
  //           end: "center center",
  //           scrub: 1,
  //           onUpdate: (self) => {
  //             if (concentricRef.current) {
  //               concentricRef.current.classList.toggle(
  //                 "is-active",
  //                 self.progress > 0.88
  //               );
  //             }
  //             setPhoneArrived(self.progress > 0.86);
  //           },
  //         },
  //         y: "61vh",
  //         ease: "power2.inOut",
  //       });
  //     });
  //   }, compRef);

  //   return () => ctx.revert();
  // }, []);

  // console.log("window.innerWidth: ", window.innerWidth);

  useEffect(() => {
    // Mobile address bar resizing fix
    // ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollTrigger.normalizeScroll(true); // Isse mobile scroll smooth hota hai

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Breakpoints Table for Reference:
      // xs: < 480px | sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px

      mm.add(
        {
          is2xl: "(min-width: 1536px)",
          isXl: "(min-width: 1280px) and (max-width: 1535px)",
          isLg: "(min-width: 1024px) and (max-width: 1279px)",
          isMd: "(min-width: 768px) and (max-width: 1023px)",
          isSm: "(min-width: 480px) and (max-width: 767px)",
          isXs: "(max-width: 479px)",
        },
        (context) => {
          let { is2xl, isXl, isLg, isMd, isSm, isXs } = context.conditions;

          // Dynamic Y movement based on screen size
          let targetY = "85vh";
          if (is2xl) targetY = "95vh";
          if (isXl) targetY = "70vh";
          if (isLg) targetY = "92vh";
          if (isMd) targetY = "58vh";
          if (isSm) targetY = "62vh";
          if (isXs) targetY = "56vh";

          gsap.to(phoneRef.current, {
            scrollTrigger: {
              trigger: "#hero-section",
              start: "top top",
              endTrigger: "#benefits-section",
              end: "center center",
              scrub: 1.5,
              invalidateOnRefresh: true, // Resize hone par recalibrate karega
              onUpdate: (self) => {
                // Smooth transition for activation
                const threshold = isMd || isSm || isXs ? 0.85 : 0.75;

                if (concentricRef.current) {
                  concentricRef.current.classList.toggle(
                    "is-active",
                    self.progress > threshold
                  );
                }
                setPhoneArrived(self.progress > threshold);
              },
            },
            y: targetY,
            ease: "power1.inOut",
          });
        }
      );
    }, compRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false); // Cleanup
    };
  }, []);

  return (
    <div
      ref={compRef}
      className="overflow-x-hidden flex flex-col w-full h-auto"
    >
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero-section"
        className="relative h-[75vh] xl:min-h-screen flex flex-col"
      >
        {/* Backgrounds */}
        {/* <div className="absolute z-0 h-[75vh] md:h-[70vh] lg:h-[110vh] w-full"> */}
        <div className="absolute z-0 h-full lg:h-[75vh] xl:h-auto w-full">
          <img
            src="/aqua-bg.webp"
            alt="Hero Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <StarsBackground />
        <Header />
        <HeroContent phoneRef={phoneRef} phoneArrived={phoneArrived} />
      </section>
      {/* <section
        id="benefits-section"
        className="relative flex items-center justify-center overflow-hidden px-4 min-h-[65vh] lg:min-h-[120vh]"
      > */}
      <section
        id="benefits-section"
        className="relative flex items-end justify-center h-auto xl:min-h-screen 2xl:min-h-[135vh] py-20 px-4"
      >
        <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
      </section>
    </div>
  );
}