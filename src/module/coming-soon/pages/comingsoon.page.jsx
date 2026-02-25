// import React from "react";
// import { Sparkles } from "lucide-react";

// export default function ComingSoonPage() {
//   return (
//     <div className="min-h-[80vh] relative bg-aqua-gradient-start flex flex-col items-center justify-center px-6 text-center">
//       {/* Background Orbs */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-aqua-gradient blur-[120px] opacity-95" />

//       <main className="max-w-3xl w-full space-y-10 z-10 py-20">
//         <div className="flex justify-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46C7CD]/10 border border-[#46C7CD]/20 rounded-full font-bold text-grey-800">
//             <Sparkles className="w-4 h-4" />
//             <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
//               Coming soon 2026
//             </span>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-grey-900">
//             Match At First <br />
//             <span className="text-brand-aqua drop-shadow-sm">Swipe</span>
//           </h1>
//           <p className="text-lg md:text-2xl text-grey-500 max-w-xl mx-auto font-medium leading-relaxed">
//             The future of connection is almost here. Love shouldn't be a waiting
//             game.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Sparkles } from "lucide-react";
// Import the new component
// import PeoplesAnimation from "../components/PeoplesAnimation";

export default function ComingSoonPage() {
  return (
    // bg-aqua-gradient-start
    <div className="min-h-[80vh] relative flex flex-col items-center justify-center px-6 text-center overflow-x-hidden">
      {/* Background Orbs - Kept your original style */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-aqua-gradient blur-[120px] opacity-95" />

      <main className="max-w-7xl w-full space-y-10 z-10 py-20 flex flex-col items-center">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#46C7CD]/10 border border-[#46C7CD]/20 rounded-full font-bold text-grey-800">
            <Sparkles className="w-4 h-4 text-[#46C7CD]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-700">
              Coming soon 2026
            </span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-grey-900">
            Match At First <br />
            <span className="text-[#46C7CD] drop-shadow-sm">Swipe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
            The future of connection is almost here. Hover below to see who's
            waiting.
          </p>
        </div>
      </main>
    </div>
  );
} 
