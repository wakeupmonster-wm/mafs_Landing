export default function HeroContent({ phoneRef }) {
  return (
    <div className="relative z-20 w-full min-h-screen top-16 flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 pt-24 pb-10">
      <div className="text-center mb-5 lg:mb-10">
        <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[100px] font-black text-white tracking-tight leading-[0.92] mb-3">
          MATCH AT FIRST SWIPE
        </h1>
        <p className="text-white/90 mt-6 text-sm md:text-xl lg:text-2xl font-medium tracking-tight">
          Australia's newest dating app with a spin
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-10 items-end justify-between mx-auto w-11/12">
        {/* Left Widget */}
        <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-8 mb-20 order-2 lg:order-1">
          <div className="text-center lg:text-left">
            <p className="text-white/70 text-xs sm:text-[13px] mb-2.5 font-medium tracking-wide uppercase">
              Launching soon on
            </p>
            <div className="flex gap-2.5 justify-center lg:justify-start">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={src}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    alt="Store Icon"
                  />
                </div>
              ))}
            </div>
          </div>
          <CircularScrollButton />
        </div>

        {/* Middle (Phone) */}
        <img
          src="/mobellipse.png"
          alt="ellipse.png"
          className="absolute w-80 h-72 left-[450px] md:left-[460px] xl:left-[490px] top-72"
        />
        <div className="flex justify-center items-end order-1 lg:order-2">
          <div ref={phoneRef} className="pointer-events-none mt-10">
            <img
              src="/Phone.png"
              alt="Phone"
              className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[290px] drop-shadow-[0_25px_50px_rgba(5,5,5,0.70)]"
            />
          </div>
        </div>

        {/* Right Widget */}
        <div className="flex flex-col items-center lg:items-end text-center mb-14 gap-3 order-3">
          <div className="w-60 h-auto text-left space-y-5">
            <h3 className="text-white text-base md:text-xl lg:text-[22px] font-bold mb-1.5 leading-snug">
              Scan QR code to <br /> Join the Early Access
            </h3>
            <p className="text-white/75 text-xs sm:text-[13px] font-medium flex items-center justify-start gap-1.5">
              Launching soon across Australia{" "}
              <span className="text-sm">🇦🇺</span>
            </p>
            <img
              src="/QR-Code.png"
              alt="QR Code"
              className="w-28 h-28 md:w-48 md:h-48 p-2 bg-transparent border border-cardBorder rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for the spinning text button
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
