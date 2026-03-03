// HeroContent.jsx
import { useNavigate } from "react-router";

export default function HeroContent({ phoneRef, phoneArrived }) {
  const navigate = useNavigate();
  return (
    <div className="relative z-20 w-full h-[60vh] lg:h-screen flex flex-col gap-0 2xl:gap-0 px-3 xs:px-6 sm:px-10 lg:px-14 xl:px-20 pt-28 md:pt-40 xl:pt-40 pb-10">
      {/* Title Section */}
      <div className="text-center w-full max-w-max mx-auto">
        <h1 className="text-[28px] xs:text-[32px] sm:text-[50px] md:text-[60px] lg:text-[85px] font-black text-white tracking-tight leading-[1.1] lg:leading-[0.92] mb-3">
          MATCH AT FIRST SWIPE
        </h1>
        <p className="text-white/90 text-sm md:text-xl lg:text-2xl font-medium tracking-tight mt-4">
          Australia's newest dating app with a spin
        </p>
      </div>

      {/* Grid Layout: Laptop mein 3 columns, Mobile mein Stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10 items-end justify-center w-full max-w-[1530px] 2xl:max-w-[1850px] mt-10 mx-auto">
        {/* Left: App Stores & Scroll Button */}
        <div className="hidden lg:flex flex-col items-center md:items-start mb-10 lg:mb-20 gap-6 order-1">
          <div className="text-center lg:text-left">
            <p className="text-white/70 text-[10px] sm:text-xs mb-3 font-medium uppercase tracking-widest">
              Launching soon on
            </p>
            <div className="flex gap-3 justify-center lg:justify-start">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={src}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                    alt="Store Icon"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <CircularScrollButton />
          </div>
        </div>

        <img
          src="/mobellipse.webp"
          alt="mobellipse.webp"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[450px] opacity-60"
          loading="lazy"
        />

        {/* Middle (Phone) */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div ref={phoneRef} className="pointer-events-none relative">
            {/* ✅ Phone 1 - fade out jab center pe aaye */}
            <img
              src="/Phone.png"
              alt="Phone"
              // className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[290px] drop-shadow-[0_25px_50px_rgba(5,5,5,0.70)]"
              className="w-[180px] sm:w-[250px] md:w-[280px] lg:w-[290px] xl:w-[310px] 2xl:w-[320px] h-[22rem] sm:h-[30rem] lg:h-auto"
              style={{
                opacity: phoneArrived ? 0 : 1,
                transition: "opacity 0.8s ease-in-out",
                display: "block",
              }}
              loading="lazy"
            />

            {/* ✅ Phone 2 - fade in jab center pe aaye */}
            <img
              src="/After_Scroll_1.webp"
              alt="Phone New"
              // className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[290px] drop-shadow-[0_25px_50px_rgba(5,5,5,0.70)]"
              className="w-[180px] sm:w-[250px] md:w-[280px] lg:w-[290px] xl:w-[310px] 2xl:w-[380px] 3xl:w-[450px] h-[22rem] sm:h-[30rem] lg:h-auto"
              style={{
                opacity: phoneArrived ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: QR Code */}
        <div className="hidden lg:flex flex-col items-center lg:items-end mb-24 sm:mb-5 lg:mb-16 order-3">
          <div className="w-full max-w-[240px] text-start md:text-left space-y-2 sm:space-y-4 p-1 md:p-5 rounded-3xl lg:p-0">
            <h3 className="text-white text-sm sm:text-base md:text-xl font-bold leading-tight">
              Scan QR code to <br className="hidden lg:block" /> Join the Early
              Access
            </h3>
            <p className="text-white/75 text-[10px] sm:text-xs font-medium flex items-center justify-center lg:justify-start gap-2">
              Launching soon across Australia <span>🇦🇺</span>
            </p>
            <img
              src="/QR-Code.png"
              alt="QR Code"
              loading="lazy"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 p-2 bg-transparent border border-white/20 rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* 4. MOBILE BOTTOM NAV BAR (As per your Image) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-md md:max-w-xl z-[100]">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-2 md:px-3 py-2 md:py-3 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/40">
          {/* Left: Text and Icons */}
          <div className="flex items-center gap-2 ml-3">
            <span className="text-black text-[14px] sm:text-base font-bold whitespace-nowrap">
              Get App
            </span>
            <div className="flex gap-1.5 ml-1">
              {/* Apple Store Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-100 shadow-inner shadow-slate-300 active:scale-90 transition-transform cursor-pointer">
                <img
                  src="/Frame 120.png"
                  className="w-7 h-7 object-contain"
                  alt="Apple"
                  loading="lazy"
                />
              </div>
              {/* Play Store Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-100 shadow-inner shadow-slate-300 active:scale-90 transition-transform cursor-pointer">
                <img
                  src="/Frame 121.png"
                  className="w-7 h-7 object-contain"
                  alt="Google"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Join the Waitlist Button */}
          <button
            onClick={() => navigate("/waitlist")}
            className=" transition-all duration-500 bg-join-gradient btn-shadow text-white font-semibold text-[12px] sm:text-sm py-2.5 px-6 sm:px-8 rounded-full border-4 border-[#e0ecfe] whitespace-nowrap"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

function CircularScrollButton() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 group">
      <div className="absolute inset-0 bg-white/10 rounded-full" />
      <svg
        className="absolute inset-0 w-full h-full origin-center animate-[spin_1s_linear_infinite] rotate-svg"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" fontSize="20" fontWeight="500" letterSpacing="2">
          <textPath href="#circlePath" startOffset="0%">
            Scroll To Explore More
          </textPath>
        </text>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
        <svg
          className="w-8 h-8 text-[#22D3EE]"
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
