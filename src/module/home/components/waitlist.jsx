// import React from "react";
// import mafsphone from "@/assets/mafsphone.png";
// import QRcode from "@/assets/qrcode.png";

// const Waitlist = () => {
//   return (
//     <section className="w-full px-6 md:p-14 flex justify-center">
//       <div className="max-w-7xl w-full h-auto p-5 flex flex-col md:flex-row items-center justify-center gap-8">
//         {/* Left Side: Phone Mockup Container */}
//         <div className="w-[350px] md:w-[400px] h-auto">
//           {/* Phone Frame */}
//           <img
//             src={mafsphone}
//             alt="Phone Frame"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Right Side: Waitlist Card */}
//         <div className="max-w-3xl bg-transparent p-2 border borer-cardBorder rounded-[32px]">
//           <div className="flex flex-col md:flex-row items-center rounded-[32px] border p-8 shadow-2xl shadow-gray-400/50 gap-8">
//             {/* Text Content */}
//             <div className="flex-1 space-y-6 text-center md:text-left">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.1]">
//                 Be one of the first to join and get free premium access for 3
//                 months
//               </h2>
//               <p className="text-gray-500 font-medium">
//                 First 1000 users get 3 months free
//               </p>
//               <button className="bg-[#00B4D8] hover:bg-[#0096B4] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-[#00B4D8]/30">
//                 Join the Waitlist
//               </button>
//             </div>

//             {/* QR Code Section */}
//             <div className="w-48 h-48 bg-gray-50 rounded-[32px] p-6 shadow-inner flex items-center justify-center border border-gray-100">
//               <img
//                 src={QRcode} // Extract QR from image_8b1ad1.png
//                 alt="Join QR Code"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Waitlist;



import React from "react";
import mafsphone from "@/assets/mafsphone.png";
import QRcode from "@/assets/qrcode.png";

const Waitlist = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
        
        {/* Left Side: Phone Mockup Container */}
        <div className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[450px] h-auto">
          <img
            src={mafsphone}
            alt="Phone Frame"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side: Waitlist Card */}
        <div className="w-full lg:max-w-2xl xl:max-w-3xl bg-transparent p-1 sm:p-2 border border-cardBorder rounded-2xl sm:rounded-3xl lg:rounded-[32px]">
          <div className="flex flex-col md:flex-row items-center rounded-2xl sm:rounded-3xl lg:rounded-[32px] border p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl shadow-gray-300/40 sm:shadow-gray-400/50 gap-4 sm:gap-6 md:gap-8">
            
            {/* Text Content */}
            <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center md:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight sm:leading-[1.2] lg:leading-[1.1]">
                Be one of the first to join and get free premium access for 3
                months
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">
                First 1000 users get 3 months free
              </p>
              <button className="w-full sm:w-auto bg-[#00B4D8] hover:bg-[#0096B4] active:bg-[#0077A0] text-white font-semibold sm:font-bold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full transition-all shadow-md sm:shadow-lg shadow-[#00B4D8]/20 sm:shadow-[#00B4D8]/30 transform hover:scale-105 active:scale-100">
                Join the Waitlist
              </button>
            </div>

            {/* QR Code Section */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-50 rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-4 sm:p-5 lg:p-6 shadow-inner flex items-center justify-center border border-gray-100">
                <img
                  src={QRcode}
                  alt="Join QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Optional: QR Code instruction for mobile */}
              <p className="text-xs text-gray-400 text-center mt-2 md:hidden">
                Scan to join
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;