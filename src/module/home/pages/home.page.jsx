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

  // gsap.context properly scopes our animations and makes cleanup effortless
  // gsap.to(phoneRef.current, {
  //   scrollTrigger: {
  //     trigger: "#hero-section",
  //     start: "top top",
  //     endTrigger: "#benefits-section",
  //     end: "center center",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       if (concentricRef.current) {
  //         // Toggle class based on scroll progress
  //         concentricRef.current.classList.toggle(
  //           "is-active",
  //           self.progress > 0.7
  //         );
  //       }
  //     },
  //   },
  //   y: "100vh",
  //   ease: "power2.inOut",
  // });
  useEffect(() => {
    // matchMedia perfect responsiveness handle karta hai
    let mm = gsap.matchMedia();

    mm.add(
      {
        // Breakpoints define karein
        isMobile: "(max-width: 428px) and (min-width: 360px)",
        isTablet: "(max-width: 1024px) and (min-width: 769px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        // Conditions ko access karein
        let { isMobile, isTablet } = context.conditions;

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
                  self.progress > 0.6
                );
              }
            },
          },
          // Fixed Logic: Mobile aur Tablet par 60vh, Desktop par 100vh
          y: isMobile ? "45vh" : isTablet ? "58vh" : "98vh",
          // Phone size adjustment
          scale: isMobile ? 0.7 : isTablet ? 0.85 : 1,
          ease: "none",
        });
      }
    );

    return () => mm.revert(); // Best practice cleanup
  }, []);

  console.log("window.innerWidth: ", window.innerWidth);

  return (
    <div ref={compRef} className="overflow-hidden w-full">
      {/* ===== HERO SECTION ===== */}
      <section id="hero-section" className="relative h-[60vh] lg:h-screen">
        {/* Backgrounds */}
        <div className="absolute z-0 h-[70vh] lg:h-[110vh] w-full">
          <img
            src="/aqua-bg.jpg"
            alt="Hero Background"
            loading="lazy"
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
        className="relative h-[80vh] lg:h-[130vh] flex items-center justify-center py-16 sm:py-20 md:py-20 lg:py-44 overflow-hidden px-4"
      >
        <ConcentricCircles ref={concentricRef} />
      </section>
    </div>
  );
}
