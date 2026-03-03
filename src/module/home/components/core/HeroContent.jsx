import { useNavigate } from "react-router";

export default function HeroContent({ phoneRef, phoneArrived }) {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 w-full flex-1 flex flex-col px-4 xs:px-6 sm:px-10 lg:px-14 xl:px-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 overflow-visible">
      {/* Top Text Area */}
      <div className="text-center w-full max-w-7xl mx-auto px-2 mb-4 xs:mb-6 sm:mb-8">
        <h1 className="text-[clamp(2.25rem,7.5vw,8.5rem)] font-black text-white tracking-tight uppercase leading-[0.95] sm:leading-[0.85]">
          MATCH AT FIRST SWIPE
        </h1>
        <p className="text-white/90 text-sm xs:text-base md:text-xl lg:text-2xl font-medium tracking-tight mt-2 xs:mt-4">
          Australia's newest dating app with a spin
        </p>
      </div>

      {/* Main Content Grid - Centered in remaining space */}
      <div className="flex-1 flex flex-col justify-center items-center relative w-full max-w-[1530px] mx-auto overflow-visible pb-12 xs:pb-16 md:pb-20">

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-[700px] aspect-square pointer-events-none overflow-visible">
          <img
            src="/mobellipse.webp"
            alt=""
            className="w-full h-full object-contain opacity-30 md:opacity-50 blur-3xl scale-125 lg:scale-150"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-10 items-center lg:items-end w-full h-full relative z-10 overflow-visible">

          {/* Left Column: App Stores (Desktop) */}
          <div className="hidden lg:flex flex-col items-start mb-12 xl:mb-20 gap-8 xl:gap-14 order-1 self-end">
            <div className="space-y-3">
              <p className="text-white/80 text-sm xl:text-base font-medium">
                Launching soon on
              </p>
              <div className="flex gap-3">
                {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-white/20"
                  >
                    <img
                      src={src}
                      className="w-6 h-6 xl:w-7 xl:h-7 object-contain"
                      alt="Store Icon"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:block">
              <CircularScrollButton />
            </div>
          </div>

          {/* Middle Column: Phone (GSAP Target) */}
          <div className="flex justify-center items-center lg:items-end order-1 lg:order-2 self-center lg:self-end h-full relative py-6 md:py-0 overflow-visible">
            <div ref={phoneRef} className="pointer-events-none relative flex justify-center items-end will-change-transform z-30 overflow-visible">
              {/* Phone Image 1 (Initial) */}
              <img
                src="/Phone_main.webp"
                alt="Phone"
                className="w-[clamp(160px,28vw,330px)] lg:w-[clamp(260px,20vw,310px)] xl:w-[clamp(290px,22vw,350px)] h-auto object-contain drop-shadow-2xl"
                style={{
                  opacity: phoneArrived ? 0 : 1,
                  transition: "opacity 0.6s ease-in-out",
                }}
                loading="lazy"
              />

              {/* Phone Image 2 (After Scroll) */}
              <img
                src="/After_Scroll_1.webp"
                alt="Phone Features"
                className="w-[clamp(160px,28vw,330px)] lg:w-[clamp(260px,20vw,310px)] xl:w-[clamp(290px,22vw,350px)] h-auto object-contain drop-shadow-2xl absolute bottom-0"
                style={{
                  opacity: phoneArrived ? 1 : 0,
                  transition: "opacity 0.6s ease-in-out",
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: QR Code (Desktop) */}
          <div className="hidden lg:flex flex-col items-end mb-12 xl:mb-20 order-3 self-end">
            <div className="max-w-[200px] xl:max-w-max text-right space-y-3 xl:space-y-4">
              <h3 className="text-white text-base xl:text-xl font-bold leading-tight uppercase tracking-wide">
                Scan QR code to <br className="hidden xl:block" /> Join Early Access
              </h3>
              <p className="text-white/75 text-xs xl:text-sm font-medium flex items-center justify-end gap-2">
                Launching soon across Australia <span>🇦🇺</span>
              </p>
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl inline-block shadow-2xl">
                <img
                  src="/QR-Code.png"
                  alt="QR Code"
                  loading="lazy"
                  className="w-24 h-24 xl:w-32 xl:h-32 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-sm sm:max-w-md z-[100] transition-transform duration-300">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-4 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/50">
          <div className="flex items-center gap-3 ml-2">
            <span className="text-black text-sm xs:text-base font-extrabold tracking-tight">Get App</span>
            <div className="flex gap-2">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div key={i} className="w-8 h-8 xs:w-10 xs:h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm active:scale-90 transition-transform cursor-pointer">
                  <img src={src} className="w-5 h-5 xs:w-6 xs:h-6 object-contain" alt="Store icon" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate("/waitlist")}
            className="bg-join-gradient text-white font-bold text-xs xs:text-sm py-3 px-6 xs:px-8 rounded-full border-2 border-blue-100/30 shadow-xl active:scale-95 hover:brightness-110 transition-all font-outfit"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

function CircularScrollButton() {
  return (
    <div className="relative w-28 h-28 xl:w-32 xl:h-32 group cursor-pointer transition-transform hover:scale-105">
      <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-[2px] border border-white/10" />
      <svg
        className="absolute inset-0 w-full h-full origin-center animate-[spin_10s_linear_infinite]"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="rgba(255,255,255,0.6)" fontSize="16" fontWeight="600" letterSpacing="2.5">
          <textPath href="#circlePath">
            SCROLL TO EXPLORE MORE •&nbsp;
          </textPath>
        </text>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 xl:w-16 xl:h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
        <svg
          className="w-6 h-6 xl:w-7 xl:h-7 text-[#09c1c7]"
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
  );
}
