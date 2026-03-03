// home.page.jsx
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

  console.log("window.innerWidth: ", window.innerWidth);

  return (
    <div
      ref={compRef}
      className="relative overflow-x-hidden flex flex-col w-full"
    >
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero-section"
        className="relative h-[75vh] xl:h-screen flex flex-col"
      >
        {/* Backgrounds */}
        <div className="absolute w-full h-full lg:h-[75vh] xl:h-screen">
          <img
            src="/aqua-bg.jpg"
            alt="Hero Background"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        <StarsBackground />
        <Header />
        <HeroContent phoneRef={phoneRef} />
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section
        id="benefits-section"
        className="relative flex items-end justify-center h-screen py-20 px-4"
      >
        <ConcentricCircles ref={concentricRef} />
      </section>
    </div>
  );
}
