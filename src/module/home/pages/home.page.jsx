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
            scrub: 1.5,
            onUpdate: (self) => {
              if (concentricRef.current) {
                concentricRef.current.classList.toggle(
                  "is-active",
                  self.progress > 0.7
                );
              }
              setPhoneArrived(self.progress > 0.75);
              //  setPhoneArrived(self.progress > 0.95);
            },
          },
          y: "90vh",
          ease: "power2.inOut",
        });
      });

      // ✅ Tablet
      mm.add("(max-width: 1024px) and (min-width: 760px)", () => {
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
              setPhoneArrived(self.progress > 0.85);
            },
          },
          y: "55vh",
          ease: "power2.inOut",
        });
      });

      // ✅ Mobile
      mm.add("(max-width: 428px) and (min-width: 360px)", () => {
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
              setPhoneArrived(self.progress > 0.86);
            },
          },
          y: "61vh",
          ease: "power2.inOut",
        });
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  console.log("window.innerWidth: ", window.innerWidth);

  return (
    <div ref={compRef} className="overflow-hidden w-full h-auto">
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero-section"
        className="relative h-[80vh] md:h-[75vh] lg:h-[110vh]"
      >
        {/* Backgrounds */}
        <div className="absolute z-0 h-[75vh] md:h-[70vh] lg:h-[110vh] w-full">
          <img
            src="/aqua-bg.webp"
            alt="Hero Background"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" /> */}

        <StarsBackground />
        <Header />
        <HeroContent phoneRef={phoneRef} phoneArrived={phoneArrived} />
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      {/* <section
        id="benefits-section"
        className="relative h-[80vh] lg:h-[130vh] flex items-center justify-center py-16 sm:py-20 md:py-20 lg:py-44 overflow-hidden px-4"
      >
        <ConcentricCircles ref={concentricRef} />
      </section> */}
      <section
        id="benefits-section"
        className="relative flex items-center justify-center overflow-hidden px-4 min-h-[65vh] lg:min-h-[120vh]"
      >
        <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
      </section>
    </div>
  );
}
