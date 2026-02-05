import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useEffect(() => {
    // GSAP Scroll Logic
    gsap.to("#phone-hero", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        endTrigger: "#benefits-section",
        end: "center center",
        scrub: 1,
        onUpdate: (self) => {
          const container = document.getElementById("concentric-container");
          // Jab phone land hone wala ho tabhi blast effect trigger ho
          if (self.progress > 0.7) {
            container.classList.add("is-active");
          } else {
            container.classList.remove("is-active");
          }
        },
      },
      y: "110vh",
      scale: 1,
      ease: "power2.inOut",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#F9FAFB]">
      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-screen">
        <div id="phone-hero" className="z-50 relative flex justify-center pt-20 pointer-events-none">
          <img src="public/dating-app-interface-template-vector-removebg-preview.png" alt="Phone" className="w-[800px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]" />
        </div>
      </section>

      {/* BENEFITS SECTION - EXACT FIGMA MATCH */}
      <section id="benefits-section" className="relative min-h-screen flex items-center justify-center py-20 overflow-visible">
        
        <div id="concentric-container" className="relative w-[700px] h-[700px] group flex items-center justify-center">
          
          {/* --- CHIPS (Floating Outside with Correct Figma Positions) --- */}
          
          {/* 1. Safe & Secure (Top Left) */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm
            group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[340px] group-[.is-active]:-translate-y-[150px]">
            <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/50 flex items-center gap-3">
              <img src="/shield-icon.png" alt="safe" className="w-8 h-8 object-contain" />
              <span className="font-bold text-[#4B5563] text-lg tracking-tight">Safe & Secure</span>
            </div>
          </div>

          {/* 2. Gift Box (Top Right) */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-75
            group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[260px] group-[.is-active]:-translate-y-[120px]">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/50">
              <span className="text-4xl">🎁</span>
            </div>
          </div>

          {/* 3. Ice Cream/Profile (Bottom Left) */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-150
            group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:-translate-x-[240px] group-[.is-active]:translate-y-[220px]">
            <div className="w-24 h-24 rounded-full border-[6px] border-white shadow-2xl overflow-hidden">
               <img src="/ice-cream-profile.png" alt="user" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 4. Verified Profiles (Bottom Right) */}
          <div className="absolute z-[60] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 scale-50 blur-sm delay-200
            group-[.is-active]:opacity-100 group-[.is-active]:scale-100 group-[.is-active]:blur-0 group-[.is-active]:translate-x-[320px] group-[.is-active]:translate-y-[180px]">
            <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-white/50 flex items-center gap-3">
              <div className="w-9 h-9 bg-[#A5F3FC] rounded-full flex items-center justify-center text-[#0891B2] text-sm">✓</div>
              <span className="font-bold text-[#4B5563] text-lg tracking-tight">Verified Profiles</span>
            </div>
          </div>

          {/* --- CIRCLES LAYOUT (Pure Figma Style) --- */}
          
          {/* Outer Light Circle */}
          <div className="absolute inset-0 rounded-full border border-[#E5E7EB] shadow-2xl bg-gradient-to-b from-white to-transparent flex items-center justify-center">
            
            {/* FIGMA GLOW: Blue light coming from the right side */}
            <div className="absolute right-0 w-1/2 h-1/2 bg-[#22D3EE] opacity-0 group-[.is-active]:opacity-30 blur-[120px] rounded-full transition-opacity duration-1000"></div>
            
            {/* Middle Circle */}
            <div className="w-[72%] h-[72%] rounded-full border border-[#E5E7EB]/60 bg-white/40 flex items-center justify-center relative">
               
               {/* Border Animation (Rotating Glow) */}
               <div className="absolute inset-[-2px] rounded-full bg-[conic-gradient(from_0deg,transparent_0%,#22D3EE_30%,transparent_60%)] 
                 opacity-0 group-[.is-active]:opacity-100 group-[.is-active]:animate-[spin_8s_linear_infinite] blur-[2px]"></div>

               {/* Inner Circle */}
               <div className="absolute inset-[2px] rounded-full bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
                  <div className="w-[70%] h-[70%] rounded-full border border-[#E5E7EB]/80 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"></div>
               </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}