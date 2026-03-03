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
    ScrollTrigger.normalizeScroll(true);

    let ctx = gsap.context(() => {
      const phone = phoneRef.current;
      const concentric = concentricRef.current;

      if (!phone || !concentric) return;

      // Reset positioning to get clean measurements
      gsap.set(phone, { clearProps: "all" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#benefits-section",
          end: "center center",
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const threshold = window.innerWidth < 1024 ? 0.8 : 0.72;
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
          const target = document.querySelector("#benefits-section .concentric-container");
          if (!target) return 0;
          const targetRect = target.getBoundingClientRect();

          // Current scroll position offset
          const scrollOffset = window.scrollY;

          // Target Y relative to document
          const targetYFull = targetRect.top + scrollOffset + (targetRect.height / 2);
          // Initial Y relative to document (since we start from 0)
          const startYFull = phoneRect.top + scrollOffset + (phoneRect.height / 2);

          return targetYFull - startYFull;
        },
        ease: "none",
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
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero-section"
        className="relative min-h-screen flex flex-col"
      >
        {/* Backgrounds */}
        <div className="absolute z-0 inset-0 w-full h-full">
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

      {/* ===== BENEFITS SECTION ===== */}
      <section
        id="benefits-section"
        className="relative flex items-center justify-center min-h-screen py-20 px-4 overflow-hidden"
      >
        <ConcentricCircles ref={concentricRef} phoneArrived={phoneArrived} />
      </section>
    </div>
  );
}