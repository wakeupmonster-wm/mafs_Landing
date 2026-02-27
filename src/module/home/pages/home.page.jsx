// import React from "react";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex flex-col bg-aqua">MainHeroAnimation</div>
//   );
// };

// export default HomePage;

import { useEffect, useRef } from "react";
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

  useEffect(() => {
  let ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    // ✅ Desktop
    mm.add("(min-width: 1024px)", () => {
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#benefits-section",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            if (concentricRef.current) {
              concentricRef.current.classList.toggle(
                "is-active",
                self.progress > 0.7
              );
            }
          },
        },
        y: "100vh",
        ease: "power2.inOut",
      });
    });

    // ✅ Tablet
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#benefits-section",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            if (concentricRef.current) {
              concentricRef.current.classList.toggle(
                "is-active",
                self.progress > 0.82
              );
            }
          },
        },
        y: "136vh",
        ease: "power2.inOut",
      });
    });

    // ✅ Mobile
    mm.add("(max-width: 767px)", () => {
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#benefits-section",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            if (concentricRef.current) {
              concentricRef.current.classList.toggle(
                "is-active",
                self.progress > 0.88
              );
            }
          },
        },
        y: "150vh",
        ease: "power2.inOut",
      });
    });
  }, compRef);

  return () => ctx.revert();
}, []);

  // useEffect(() => {
  //   // gsap.context properly scopes our animations and makes cleanup effortless
  //   let ctx = gsap.context(() => {
  //     gsap.to(phoneRef.current, {
  //       scrollTrigger: {
  //         trigger: "#hero-section",
  //         start: "top top",
  //         endTrigger: "#benefits-section",
  //         end: "center center",
  //         scrub: 1,
  //         onUpdate: (self) => {
  //           if (concentricRef.current) {
  //             // Toggle class based on scroll progress
  //             concentricRef.current.classList.toggle(
  //               "is-active",
  //               self.progress > 0.7
  //             );
  //           }
  //         },
  //       },
  //       y: "100vh",
  //       ease: "power2.inOut",
  //     });
  //   }, compRef);

  //   return () => ctx.revert(); // Perfect React cleanup
  // }, []);

  return (
    <div ref={compRef} className="overflow-x-hidden w-full">
      {/* ===== HERO SECTION ===== */}
      <section id="hero-section" className="relative min-h-screen">
        {/* Backgrounds */}
        <div className="absolute z-0">
          <img
            src="/aqua-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" /> */}

        <StarsBackground />
        <Header />
        <HeroContent phoneRef={phoneRef} />
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section
        id="benefits-section"
        className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-20 lg:py-32 overflow-hidden px-4"
      >
        <ConcentricCircles ref={concentricRef} />
      </section>
    </div>
  );
}
