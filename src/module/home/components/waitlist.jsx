import React from "react";
import mafsphone from "@/assets/mafsphone.png";
import QRcode from "@/assets/qrcode.png";

const Waitlist = () => {
  return (
    <section className="w-full px-6 md:p-14 flex justify-center">
      <div className="max-w-7xl w-full h-auto p-5 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side: Phone Mockup Container */}
        <div className="w-[350px] md:w-[400px] h-auto">
          {/* Phone Frame */}
          <img
            src={mafsphone}
            alt="Phone Frame"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side: Waitlist Card */}
        <div className="max-w-3xl bg-transparent p-2 border borer-cardBorder rounded-[32px]">
          <div className="flex flex-col md:flex-row items-center rounded-[32px] border p-8 shadow-2xl shadow-gray-400/50 gap-8">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.1]">
                Be one of the first to join and get free premium access for 3
                months
              </h2>
              <p className="text-gray-500 font-medium">
                First 1000 users get 3 months free
              </p>
              <button className="bg-[#00B4D8] hover:bg-[#0096B4] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-[#00B4D8]/30">
                Join the Waitlist
              </button>
            </div>

            {/* QR Code Section */}
            <div className="w-48 h-48 bg-gray-50 rounded-[32px] p-6 shadow-inner flex items-center justify-center border border-gray-100">
              <img
                src={QRcode} // Extract QR from image_8b1ad1.png
                alt="Join QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
