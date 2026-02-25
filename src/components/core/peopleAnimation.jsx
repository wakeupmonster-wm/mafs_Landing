// import React, { useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import peoples from "@/constants/peoples";
// import person1 from "@/assets/peoplesimgs/person1.png";

// export default function PeopleAnimation() {
//   const [isHovered, setIsHovered] = useState(false);

//   // Configuration
//   const radius = 300; // How wide the circle expands
//   const totalItems = peoples.length;

//   return (

//     <section className="w-full h-auto p-20">
//       <main
//         className="mx-auto max-w-7xl h-auto cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)} // Changed to false for testing
//       >
//         {/* Main Background Image Container */}
//         {/* bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat */}
//         <div className="mx-auto w-[735px] h-[735px] relative flex items-center justify-center py-10">
//           {/* 1. Background Layer (Opacity is applied here) */}
//           <div
//             className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat"
//             // opacity-20 makes the image faint. Adjust as needed (opacity-10, opacity-50, etc.)
//           />

//           {/* 1. The Wrapper (Static, holds everything together) */}
//           <div className="relative flex items-center justify-center">
//             {/* 2. The SCALING Circle (Background Layer) */}
//             {/* This sits absolutely behind the content and scales independently */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               animate={{ scale: isHovered ? 1.08 : 1}}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//             />

//             {/* 3. The Content Layer (Text + Cards) */}
//             {/* This sits on top and DOES NOT scale */}
//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* Center Text */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{
//                   opacity: isHovered ? 1 : 0,
//                   scale: 1,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-[400px] h-64 text-center z-0"
//               >
//                 {/* Your existing Text Code... */}
//                 <div className="flex flex-col items-center text-center justify-center px-10">
//                   <img
//                     src="/image.png"
//                     alt="Logo"
//                     className="mx-auto w-36 h-[86px]"
//                   />
//                   <h2 className="text-[38px] leading-tight font-extrabold text-gray-900 tracking-tighter flex flex-col items-center mb-4">
//                     <span className="flex gap-2">
//                       <img
//                         src="/australiaIcon.png"
//                         className="w-[35px] h-[35px]"
//                       />
//                       Built for
//                     </span>
//                     Australia
//                   </h2>
//                   <p className="text-gray-500 text-[14px] max-w-[270px] leading-relaxed">
//                     Designed exclusively for Australians, with a focused and
//                     local dating experience.
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Cards / Avatars Loop */}
//               {peoples.map((img, index) => {
//                 const isMainPerson = img === person1; // Ensure person1 is defined in your imports
//                 const angle = (index / totalItems) * 2 * Math.PI;
//                 const x = isHovered ? Math.cos(angle) * radius : 0;
//                 const y = isHovered ? Math.sin(angle) * radius : 0;

//                 return (
//                   <motion.div
//                     key={index}
//                     className="absolute rounded-2xl shadow-xl bg-transparent p-1 h-36 w-40 border border-[#00000014]"
//                     style={{
//                       zIndex: isHovered ? 10 : isMainPerson ? 50 : index,
//                     }}
//                     // Note: No scale animation here, only x/y movement
//                     animate={{ x, y }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 40,
//                       damping: 12,
//                       delay: isHovered ? index * 0.004 : 0,
//                     }}
//                   >
//                     <div className="border-[3px] border-white rounded-[14px] object-cover h-full w-full">
//                       <img
//                         src={img}
//                         alt={`User ${index}`}
//                         className="h-full w-full rounded-xl pointer-events-none object-cover"
//                       />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//           {/* --- THE FIX ENDS HERE --- */}
//         </div>
//       </main>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import peoples from "@/constants/peoples";
import person1 from "@/assets/peoplesimgs/person1.png";

export default function PeopleAnimation() {
  const sectionRef = useRef(null);

  // IMPORTANT: offset controls WHEN animation starts and ends
  // "start center" = jab section ka top viewport ke center pe aaye → animation START
  // "center center" = jab section ka center viewport ke center pe aaye → animation END (fully expanded)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  const radius = 300;
  const totalItems = peoples.length;

  // Background circle scale
  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Center text - sirf 60-100% scroll mein dikhe
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.5, 0.85], [0.5, 1]);

  return (
    <section className="w-full h-auto p-20">
      {/* Space above for scroll room */}
      {/* <div className="h-[50vh]" /> */}

      <main ref={sectionRef} className="mx-auto max-w-7xl h-auto">
        <div className="mx-auto w-[735px] h-[735px] relative flex items-center justify-center py-10">
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat" />

          <div className="relative flex items-center justify-center">
            {/* Scaling Circle */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ scale: circleScale }}
            />

            <div className="relative h-full w-full flex items-center justify-center">
              {/* Center Text */}
              <motion.div
                style={{
                  opacity: textOpacity,
                  scale: textScale,
                }}
                className="w-[400px] h-64 text-center z-0"
              >
                <div className="flex flex-col items-center text-center justify-center px-10">
                  <img
                    src="/image.png"
                    alt="Logo"
                    className="mx-auto w-36 h-[86px]"
                  />
                  <h2 className="text-[38px] leading-tight font-extrabold text-gray-900 tracking-tighter flex flex-col items-center mb-4">
                    <span className="flex gap-2">
                      <img
                        src="/australiaIcon.png"
                        className="w-[35px] h-[35px]"
                      />
                      Built for
                    </span>
                    Australia
                  </h2>
                  <p className="text-gray-500 text-[14px] max-w-[270px] leading-relaxed">
                    Designed exclusively for Australians, with a focused and
                    local dating experience.
                  </p>
                </div>
              </motion.div>

              {/* Cards */}
              {peoples.map((img, index) => {
                const isMainPerson = img === person1;
                const angle = (index / totalItems) * 2 * Math.PI;

                return (
                  <ScrollCard
                    key={index}
                    img={img}
                    index={index}
                    angle={angle}
                    radius={radius}
                    totalItems={totalItems}
                    isMainPerson={isMainPerson}
                    scrollYProgress={scrollYProgress}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Space below */}
      {/* <div className="h-[50vh]" /> */}
    </section>
  );
}

function ScrollCard({
  img,
  index,
  angle,
  radius,
  totalItems,
  isMainPerson,
  scrollYProgress,
}) {
  // STAGGER LOGIC:
  // Cards expand between 0% to 90% of scroll progress
  // Each card has a small delay based on its index
  // Total stagger window = 0.3 (30% of scroll is used for staggering)
  const staggerWindow = 0.3;
  const perCardDelay = (index / totalItems) * staggerWindow;

  // Each card:
  // - STARTS moving at: perCardDelay (e.g., card 0 = 0%, card 5 = 15%)
  // - FULLY expanded at: perCardDelay + 0.6 (e.g., card 0 = 60%, card 5 = 75%)
  const cardStart = perCardDelay;
  const cardEnd = Math.min(perCardDelay + 0.6, 0.95);

  const x = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, Math.cos(angle) * radius]
  );

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, Math.sin(angle) * radius]
  );

  // Cards start invisible, become visible as they move
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.05, cardEnd],
    [0, 1, 1]
  );

  // Cards scale up from small to full size
  const scale = useTransform(scrollYProgress, [cardStart, cardEnd], [0.6, 1]);

  return (
    <motion.div
      className="absolute rounded-2xl shadow-xl bg-transparent p-1 h-36 w-40 border border-[#00000014]"
      style={{
        x,
        y,
        opacity,
        scale,
        zIndex: isMainPerson ? 50 : index,
      }}
    >
      <div className="border-[3px] border-white rounded-[14px] object-cover h-full w-full">
        <img
          src={img}
          alt={`User ${index}`}
          className="h-full w-full rounded-xl pointer-events-none object-cover"
        />
      </div>
    </motion.div>
  );
}
