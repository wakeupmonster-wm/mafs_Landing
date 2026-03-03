// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   CheckCircle2,
//   ChevronRight,
//   Bell,
//   Zap,
//   ShieldCheck,
// } from "lucide-react";

// export default function JoinModal({ isOpen, onClose }) {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Close on Esc key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSubmitted(true);
//     }, 1500);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//           />

//           {/* Modal Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl"
//           >
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-20"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex flex-col md:flex-row h-full">
//               {/* Left Side: Visual/Incentive */}
//               <div className="hidden md:flex md:w-[40%] bg-footerBg relative overflow-hidden p-8 flex-col justify-between">
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/20 to-transparent" />

//                 <div className="relative z-10">
//                   <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
//                     <Zap className="w-6 h-6 text-[#46C7CD]" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white leading-tight mb-4">
//                     Exclusive Early Access
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-3 text-white/70 text-sm">
//                       <CheckCircle2 className="w-4 h-4 text-[#46C7CD]" />
//                       <span>3 Months Free Premium</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-white/70 text-sm">
//                       <Bell className="w-4 h-4 text-[#46C7CD]" />
//                       <span>Priority Matchmaking</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-white/70 text-sm">
//                       <ShieldCheck className="w-4 h-4 text-[#46C7CD]" />
//                       <span>Charter Member Badge</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative z-10 pt-8 opacity-50 flex items-center gap-2">
//                   <span className="text-white text-xs font-bold uppercase tracking-widest italic">
//                     Australia First
//                   </span>
//                 </div>
//               </div>

//               {/* Right Side: Form Content */}
//               <div className="flex-1 p-8 sm:p-10 md:p-12">
//                 {!isSubmitted ? (
//                   <>
//                     <div className="mb-8">
//                       <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
//                         Unlock Your Invitation
//                       </h2>
//                       <p className="text-slate-500 text-base leading-relaxed">
//                         Match At First Swipe is launching soon across Australia.
//                         Enter your email to secure your spot and premium
//                         rewards.
//                       </p>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div>
//                         <label
//                           htmlFor="email"
//                           className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1"
//                         >
//                           Email Address
//                         </label>
//                         <input
//                           id="email"
//                           type="email"
//                           required
//                           placeholder="yourname@domain.com"
//                           className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                       </div>
//                       <button
//                         type="submit"
//                         disabled={isLoading}
//                         className="w-full py-4 bg-join-gradient border-4 border-[#F0F1F2] btn-shadow text-white font-bold rounded-2xl flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100"
//                       >
//                         {isLoading ? (
//                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         ) : (
//                           <>
//                             Join the Waitlist
//                             <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                           </>
//                         )}
//                       </button>
//                     </form>
//                     <p className="text-[11px] text-slate-400 mt-6 text-center leading-relaxed">
//                       By signing up, you agree to receive launch notifications.
//                       No spam, we promise.
//                     </p>
//                   </>
//                 ) : (
//                   <div className="text-center py-6 sm:py-10 animate-in fade-in zoom-in duration-500">
//                     <div className="w-20 h-20 bg-[#46C7CD]/10 rounded-full flex items-center justify-center mx-auto mb-8">
//                       <CheckCircle2 className="w-10 h-10 text-[#46C7CD]" />
//                     </div>
//                     <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
//                       You're on the list!
//                     </h2>
//                     <p className="text-slate-500 text-lg leading-relaxed mb-8">
//                       Check your inbox soon for your exclusive invitation to
//                       Join MAFS Australia.
//                     </p>
//                     <button
//                       onClick={onClose}
//                       className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
//                     >
//                       Got it, thanks!
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }


import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ChevronRight,
  Bell,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function JoinModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // ✅ UPDATED: API Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Data prepare kar rahe hain
      const payload = {
        name: "N/A",       // Form mein nahi hai
        email: email,      // User ka email
        phone: "N/A",      // Form mein nahi hai
        city: "N/A",       // Form mein nahi hai
        source: "Web Modal", // Pata chalega ki ye popup se aaya hai
        date: new Date().toLocaleString(),
      };

      // SheetDB API Call
      const response = await fetch("https://sheetdb.io/api/v1/sl4zxdx7tagip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Left Side: Visual/Incentive */}
              <div className="hidden md:flex md:w-[40%] bg-footerBg relative overflow-hidden p-8 flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/20 to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-[#46C7CD]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                    Exclusive Early Access
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#46C7CD]" />
                      <span>3 Months Free Premium</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <Bell className="w-4 h-4 text-[#46C7CD]" />
                      <span>Priority Matchmaking</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 text-sm">
                      <ShieldCheck className="w-4 h-4 text-[#46C7CD]" />
                      <span>Charter Member Badge</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-8 opacity-50 flex items-center gap-2">
                  <span className="text-white text-xs font-bold uppercase tracking-widest italic">
                    Australia First
                  </span>
                </div>
              </div>

              {/* Right Side: Form Content */}
              <div className="flex-1 p-8 sm:p-10 md:p-12">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                        Unlock Your Invitation
                      </h2>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Match At First Swipe is launching soon across Australia.
                        Enter your email to secure your spot and premium
                        rewards.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="yourname@domain.com"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-join-gradient border-4 border-[#F0F1F2] btn-shadow text-white font-bold rounded-2xl flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Join the Waitlist
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                    <p className="text-[11px] text-slate-400 mt-6 text-center leading-relaxed">
                      By signing up, you agree to receive launch notifications.
                      No spam, we promise.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-6 sm:py-10 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-[#46C7CD]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10 text-[#46C7CD]" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                      You're on the list!
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                      Check your inbox soon for your exclusive invitation to
                      Join MAFS Australia.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}