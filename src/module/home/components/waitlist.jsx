import React, { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import mafsphone from "@/assets/mafsphone.png";
import QRcode from "@/assets/qrcode.png";
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
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">

        {/* Left Side: Phone Mockup Container */}
        <div className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[450px] h-auto pointer-events-none">
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
              {!isSubmitted ? (
                <>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight sm:leading-[1.2] lg:leading-[1.1]">
                    Be one of the first to join and get free premium access for 3
                    months
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium">
                    First 1000 users get 3 months free. Join the exclusive early access list today.
                  </p>

                  <form onSubmit={handleSubmit} className="relative mt-4 sm:mt-6">
                    <div className="relative flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]/50 focus:border-[#00B4D8] transition-all"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="sm:absolute sm:right-1.5 sm:top-1.5 px-8 py-3 bg-[#00B4D8] hover:bg-[#0096B4] text-white font-bold rounded-full transition-all shadow-lg shadow-[#00B4D8]/40 flex items-center justify-center gap-2 group disabled:opacity-70"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Join Now
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2">
                    By joining, you agree to our Terms and Privacy Policy.
                  </p>
                </>
              ) : (
                <div className="py-8 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">You're on the list!</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for joining our early access. We'll notify you as soon as we launch in your area.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#00B4D8] font-bold hover:underline"
                  >
                    Use another email
                  </button>
                </div>
              )}
            </div>

            {/* QR Code Section */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="group relative transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute -inset-3 bg-[#00B4D8]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-50 rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-4 sm:p-5 lg:p-6 shadow-inner flex items-center justify-center border border-gray-100 relative overflow-hidden">
                  <img
                    src={QRcode}
                    alt="Join QR Code"
                    className="w-full h-full object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors z-0" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#00B4D8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="bg-[#00B4D8] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">Tap to Scan</div>
                </div>
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Click QR Code
              </p>
            </div>
          </div>
        </div>
      </div>
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </section>
  );
};

export default Waitlist;