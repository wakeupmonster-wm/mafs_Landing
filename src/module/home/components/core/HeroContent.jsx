
import { useNavigate } from "react-router";

//         {/* Left - Desktop only */}
//         <div className="hidden lg:flex flex-col items-start mb-20 gap-6 order-1">
//           <div>
//             <p className="text-white text-sm mb-3 font-inter font-normal">
//               Launching soon on
//             </p>
//             <div className="flex gap-3">
//               {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
//                 <div
//                   key={i}
//                   className="w-11 h-11 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
//                 >
//                   <img
//                     src={src}
//                     className="w-8 h-8 md:w-9 md:h-9"
//                     alt="Store Icon"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <CircularScrollButton />
//         </div>

//         {/* ✅ Middle - Phone */}
//         <div className="flex justify-center items-end order-1 lg:order-2">
//           {/* Ellipse bg */}
//           <img
//             src="/mobellipse.webp"
//             alt=""
//             className="
//               absolute
//               w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px]
//               opacity-60
//               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//             "
//             loading="lazy"
//           />

//           <div ref={phoneRef} className="pointer-events-none mt-6 sm:mt-10 relative">
//             {/* Phone 1 - fade out */}
//             <img
//               src="/Phone_main.webp"
//               alt="Phone"
//               className="
//                 w-[150px]
//                 xs:w-[170px]
//                 sm:w-[220px]
//                 md:w-[260px]
//                 lg:w-[290px]
//                 h-auto
//               "
//               style={{
//                 opacity: phoneArrived ? 0 : 1,
//                 transition: "opacity 0.8s ease-in-out",
//                 display: "block",
//               }}
//               loading="lazy"
//             />

//             {/* Phone 2 - fade in */}
//             <img
//               src="/After_Scroll_1.webp"
//               alt="Phone New"
//               className="
//                 w-[150px]
//                 xs:w-[170px]
//                 sm:w-[220px]
//                 md:w-[260px]
//                 lg:w-[290px]
//                 h-auto
//               "
//               style={{
//                 opacity: phoneArrived ? 1 : 0,
//                 transition: "opacity 0.8s ease-in-out",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//               }}
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Right - QR - Desktop only */}
//         <div className="hidden lg:flex flex-col items-end mb-16 order-3">
//           <div className="text-left space-y-3">
//             <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
//               Scan QR code to <br /> Join the Early Access
//             </h3>
//             <p className="text-white/75 text-xs sm:text-sm font-medium flex items-center gap-2">
//               Launching soon across Australia <span>🇦🇺</span>
//             </p>
//             <img
//               src="/QR-Code.png"
//               alt="QR Code"
//               loading="lazy"
//               className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 p-2 border border-white/20 rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Bottom Nav */}
//       <div className="lg:hidden fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[100]">
//         <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-2 sm:py-3 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/40">
//           {/* Left */}
//           <div className="flex items-center gap-2 ml-2">
//             <span className="text-black text-sm sm:text-base font-bold whitespace-nowrap">
//               Get App
//             </span>
//             <div className="flex gap-1.5 ml-1">
//               {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
//                 <div
//                   key={i}
//                   className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center shadow-inner shadow-slate-300 active:scale-90 transition-transform cursor-pointer"
//                 >
//                   <img
//                     src={src}
//                     className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
//                     alt="Store"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Join Button */}
//           <button
//             onClick={() => navigate("/waitlist")}
//             className="bg-join-gradient btn-shadow text-white font-semibold text-xs sm:text-sm py-2.5 px-5 sm:px-7 rounded-full border-4 border-[#cfe0f7ed] whitespace-nowrap transition-all duration-300 active:scale-95"
//           >
//             Join the Waitlist
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CircularScrollButton() {
//   return (
//     <div className="relative w-28 h-28 sm:w-32 sm:h-32">
//       <div className="absolute inset-0 bg-white/10 rounded-full" />
//       <svg
//         className="absolute inset-0 w-full h-full origin-center animate-[spin_10s_linear_infinite]"
//         viewBox="0 0 200 200"
//       >
//         <defs>
//           <path
//             id="circlePath"
//             d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
//           />
//         </defs>
//         <text fill="white" fontSize="20" fontWeight="500" letterSpacing="2">
//           <textPath href="#circlePath" startOffset="0%">
//             Scroll To Explore More
//           </textPath>
//         </text>
//       </svg>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
//         <svg
//           className="w-8 h-8 text-[#22D3EE]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={3}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }


// HeroContent.jsx
export default function HeroContent({ phoneRef, phoneArrived }) {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 w-full h-[60vh] lg:h-screen flex flex-col justify-between px-3 xs:px-6 sm:px-10 lg:px-14 xl:px-20 pt-28 md:pt-40 xl:pt-44 pb-10">
      {/* Title Section */}
      <div className="text-center w-full max-w-max mx-auto">
        <h1 className="text-[28px] xs:text-[32px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[100px] font-black text-white tracking-tight leading-[1.1] lg:leading-[0.92] mb-3">
          MATCH AT FIRST SWIPE
        </h1>
        <p className="
          text-white/90
          text-xs sm:text-base md:text-xl lg:text-xl xl:text-2xl
          font-medium tracking-tight mt-2 sm:mt-4
        ">
          Australia's newest dating app with a spin
        </p>
      </div>

      {/* Grid Layout: Laptop mein 3 columns, Mobile mein Stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10 items-center md:items-end lg:items-center xl:items-end justify-center w-full max-w-[1530px] mt-10 mx-auto">
        {/* Left: App Stores & Scroll Button */}
        <div className="hidden lg:flex flex-col items-center md:items-start lg:items-start mb-10 lg:mb-20 xl:mb-48 2xl:mb-20 gap-14 2xl:gap-16 order-1">
          <div className="text-center lg:text-left">
            <p className="text-white text-[10px] sm:text-base mb-3 font-inter font-normal">
              Launching soon on
            </p>
            <div className="flex gap-2 lg:gap-3">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={src}
                    className="w-6 h-6 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
                    alt="Store Icon"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <CircularScrollButton />
        </div>

        <img
          src="/mobellipse.png"
          alt="mobellipse.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] md:w-[450px] opacity-60"
          loading="lazy"
        />

        {/* Middle (Phone) */}
        <div className="flex justify-center items-end order-1 lg:order-2">
          <div ref={phoneRef} className="pointer-events-none relative">
            {/* ✅ Phone 1 - fade out jab center pe aaye */}
            <img
              src="/Phone_main.webp"
              alt="Phone"
              // className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[290px] drop-shadow-[0_25px_50px_rgba(5,5,5,0.70)]"
              className="w-[180px] sm:w-[250px] md:w-[280px] lg:w-[290px] xl:w-[310px] h-[22rem] sm:h-[30rem] lg:h-auto"
              style={{
                opacity: phoneArrived ? 0 : 1,
                transition: "opacity 0.8s ease-in-out",
                display: "block",
              }}
              loading="lazy"
            />

            {/* Phone 2 - fade in */}
            <img
              src="/After_Scroll_1.webp"
              alt="Phone New"
              // className="w-[140px] sm:w-[220px] md:w-[260px] lg:w-[280px] xl:w-[290px] drop-shadow-[0_25px_50px_rgba(5,5,5,0.70)]"
              className="w-[180px] sm:w-[250px] md:w-[280px] lg:w-[290px] xl:w-[310px] h-[22rem] sm:h-[30rem] lg:h-auto"
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
        <div className="hidden lg:flex flex-col items-center lg:items-end mb-10 lg:mb-20 xl:mb-56 2xl:mb-28 order-3">
          <div className="w-full max-w-max text-start md:text-left space-y-2 sm:space-y-4 p-1 md:p-5 rounded-3xl lg:p-0">
            <h3 className="text-white text-sm sm:text-base md:text-xl font-bold leading-tight">
              Scan QR code to <br className="hidden lg:block" /> Join the Early
              Access
            </h3>
            <p className="text-white/75 text-xs lg:text-sm font-medium flex items-center gap-2">
              Launching soon across Australia <span>🇦🇺</span>
            </p>
            <img
              src="/QR-Code.png"
              alt="QR Code"
              loading="lazy"
              className="
                w-24 h-24
                lg:w-32 lg:h-32
                xl:w-40 xl:h-40
                p-2 border border-white/20 rounded-2xl
              "
            />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[100]">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-2 sm:py-3 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/40">
          <div className="flex items-center gap-2 ml-2">
            <span className="text-black text-sm sm:text-base font-bold whitespace-nowrap">
              Get App
            </span>
            <div className="flex gap-1.5 ml-1">
              {["/Frame 120.png", "/Frame 121.png"].map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center shadow-inner shadow-slate-300 active:scale-90 transition-transform cursor-pointer"
                >
                  <img
                    src={src}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    alt="Store"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => navigate("/waitlist")}
            className=" transition-all duration-500 bg-join-gradient text-white font-semibold text-[12px] sm:text-sm py-2.5 px-6 sm:px-8 rounded-full border-4 border-[#cfe0f7ed] whitespace-nowrap"
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
    <div className="relative w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
      <div className="absolute inset-0 bg-white/10 rounded-full" />
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
        <text fill="white" fontSize="19" fontWeight="500" letterSpacing="1.5">
          <textPath href="#circlePath" startOffset="0%">
            Scroll To Explore More
          </textPath>
        </text>
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
        <svg
          className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-[#22D3EE]"
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