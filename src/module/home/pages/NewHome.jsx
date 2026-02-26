import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/core/Header";

gsap.registerPlugin(ScrollTrigger);

export default function NewHome() {
  const compRef = useRef(null);
  const phoneRef = useRef(null);
  const concentricRef = useRef(null);

  useEffect(() => {
    // gsap.context properly scopes our animations and makes cleanup effortless
    let ctx = gsap.context(() => {
      gsap.to(phoneRef.current, {
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          endTrigger: "#benefits-section",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            if (concentricRef.current) {
              // Toggle class based on scroll progress
              concentricRef.current.classList.toggle(
                "is-active",
                self.progress > 0.7
              );
            }
          },
        },
        y: "110vh",
        ease: "power2.inOut",
      });
    }, compRef);

    return () => ctx.revert(); // Perfect React cleanup
  }, []);

  return (
    <main ref={compRef} className="w-full h-screen flex flex-col bg-aqua relative">
      {/* Header ko yahan top par place kiya hai */}
      <div className="absolute top-0 max-w-7xl z-50 border mx-auto">
        <Header />
      </div>

      {/* Hero Section (GSAP Trigger Start) */}
      {/* <section
        id="hero-section"
        className="min-h-screen border border-red-500 max-w-7xl mx-auto w-full pt-32 flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold">Hero Section</h1>

        {/* Animated Phone Element 
        <div
          ref={phoneRef}
          className="w-40 h-80 bg-black rounded-3xl text-white flex items-center justify-center absolute z-20"
        >
          Phone
        </div>
      </section> */}

      {/* Benefits Section (GSAP Trigger End) */}
      {/* <section
        id="benefits-section"
        className="min-h-screen border border-blue-500 max-w-7xl mx-auto w-full flex justify-center items-center"
      >
        <div
          ref={concentricRef}
          className="w-64 h-64 border-4 border-gray-300 rounded-full flex items-center justify-center transition-all duration-500"
        >
          Concentric Target
        </div>
      </section> */}
    </main>
  );
}
