/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import mafsphone from "@/assets/mafsphone.png";
import QRcode from "@/assets/qrcode.png";
import Border from "@/components/core/border";
import JoinModal from "./JoinModal";

const Waitlist = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (

    <section className="w-full pt-44 lg:pt-44 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-10 lg:py-14 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start justify-center gap-6">
        {/* Left Side: Phone Mockup Container */}
        <div className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[450px] h-auto">
          <img src={mafsphone} alt="Phone Frame" className="w-full h-full" />
        </div>

        {/* Right Side: Waitlist Card */}
        <Border className={"w-full max-w-[850px]"}>
          <div className="flex flex-col md:flex-row items-start rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl shadow-gray-300/40 sm:shadow-gray-400/50 gap-4 sm:gap-6 md:gap-8">
            {/* Text Content */}
            <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center md:text-left">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight sm:leading-[1.2] lg:leading-[1.1]">
                Be one of the first to join and get free premium access for 3
                months
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-inter">
                First 1000 users get 3 months free
              </p>
              <button className="w-full sm:w-auto bg-[#2cc1df] hover:bg-[#04def6] active:bg-[#0077A0] border-4 border-[#e0ecfe] text-white font-semibold sm:font-bold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full transition-all shadow-md sm:shadow-lg shadow-[#00B4D8]/20 sm:shadow-[#00B4D8]/30 transform hover:scale-105 active:scale-100">
                Join the Waitlist
              </button>
            </div>

            {/* QR Code Section */}
            <div className="flex-shrink-0">

              <div className="w-52 h-52 bg-gray-50 rounded-[26px] p-4 flex shadow-lg items-center justify-center border border-cardBorder">
                <img
                  src={QRcode}
                  alt="Join QR Code"
                  className="w-full h-full object-contain border-[5px] border-white shadow-md rounded-[26px]"
                />
              </div>
              {/* Optional: QR Code instruction for mobile */}
              <p className="text-xs text-gray-400 text-center mt-2 md:hidden">
                Scan to join
              </p>
            </div>
          </div>
        </Border>
      </div>
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </section>
  );
};

export default Waitlist;
