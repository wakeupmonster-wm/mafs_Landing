// // import React, { useState } from "react";
// // // eslint-disable-next-line no-unused-vars
// // import { motion } from "framer-motion";
// // import peoples from "@/constants/peoples";
// // import person1 from "@/assets/peoplesimgs/person1.png";

// // export default function PeopleAnimation() {
// //   const [isHovered, setIsHovered] = useState(false);

// //   // Configuration
// //   const radius = 300; // How wide the circle expands
// //   const totalItems = peoples.length;

// //   return (

// //     <section className="w-full h-auto p-20">
// //       <main
// //         className="mx-auto max-w-7xl h-auto cursor-pointer"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)} // Changed to false for testing
// //       >
// //         {/* Main Background Image Container */}
// //         {/* bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat */}
// //         <div className="mx-auto w-[735px] h-[735px] relative flex items-center justify-center py-10">
// //           {/* 1. Background Layer (Opacity is applied here) */}
// //           <div
// //             className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat"
// //             // opacity-20 makes the image faint. Adjust as needed (opacity-10, opacity-50, etc.)
// //           />

// //           {/* 1. The Wrapper (Static, holds everything together) */}
// //           <div className="relative flex items-center justify-center">
// //             {/* 2. The SCALING Circle (Background Layer) */}
// //             {/* This sits absolutely behind the content and scales independently */}
// //             <motion.div
// //               className="absolute inset-0 rounded-full"
// //               animate={{ scale: isHovered ? 1.08 : 1}}
// //               transition={{ duration: 0.4, ease: "easeOut" }}
// //             />

// //             {/* 3. The Content Layer (Text + Cards) */}
// //             {/* This sits on top and DOES NOT scale */}
// //             <div className="relative h-full w-full flex items-center justify-center">
// //               {/* Center Text */}
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.5 }}
// //                 animate={{
// //                   opacity: isHovered ? 1 : 0,
// //                   scale: 1,
// //                 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="w-[400px] h-64 text-center z-0"
// //               >
// //                 {/* Your existing Text Code... */}
// //                 <div className="flex flex-col items-center text-center justify-center px-10">
// //                   <img
// //                     src="/image.png"
// //                     alt="Logo"
// //                     className="mx-auto w-36 h-[86px]"
// //                   />
// //                   <h2 className="text-[38px] leading-tight font-extrabold text-gray-900 tracking-tighter flex flex-col items-center mb-4">
// //                     <span className="flex gap-2">
// //                       <img
// //                         src="/australiaIcon.png"
// //                         className="w-[35px] h-[35px]"
// //                       />
// //                       Built for
// //                     </span>
// //                     Australia
// //                   </h2>
// //                   <p className="text-gray-500 text-[14px] max-w-[270px] leading-relaxed">
// //                     Designed exclusively for Australians, with a focused and
// //                     local dating experience.
// //                   </p>
// //                 </div>
// //               </motion.div>

// //               {/* Cards / Avatars Loop */}
// //               {peoples.map((img, index) => {
// //                 const isMainPerson = img === person1; // Ensure person1 is defined in your imports
// //                 const angle = (index / totalItems) * 2 * Math.PI;
// //                 const x = isHovered ? Math.cos(angle) * radius : 0;
// //                 const y = isHovered ? Math.sin(angle) * radius : 0;

// //                 return (
// //                   <motion.div
// //                     key={index}
// //                     className="absolute rounded-2xl shadow-xl bg-transparent p-1 h-36 w-40 border border-[#00000014]"
// //                     style={{
// //                       zIndex: isHovered ? 10 : isMainPerson ? 50 : index,
// //                     }}
// //                     // Note: No scale animation here, only x/y movement
// //                     animate={{ x, y }}
// //                     transition={{
// //                       type: "spring",
// //                       stiffness: 40,
// //                       damping: 12,
// //                       delay: isHovered ? index * 0.004 : 0,
// //                     }}
// //                   >
// //                     <div className="border-[3px] border-white rounded-[14px] object-cover h-full w-full">
// //                       <img
// //                         src={img}
// //                         alt={`User ${index}`}
// //                         className="h-full w-full rounded-xl pointer-events-none object-cover"
// //                       />
// //                     </div>
// //                   </motion.div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //           {/* --- THE FIX ENDS HERE --- */}
// //         </div>
// //       </main>
// //     </section>
// //   );
// // }


// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import peoples from "@/constants/peoples";
// import person1 from "@/assets/peoplesimgs/person1.png";

// export default function PeopleAnimation() {
//   const sectionRef = useRef(null);

//   // IMPORTANT: offset controls WHEN animation starts and ends
//   // "start center" = jab section ka top viewport ke center pe aaye → animation START
//   // "center center" = jab section ka center viewport ke center pe aaye → animation END (fully expanded)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start center", "center center"],
//   });

//   const radius = 300;
//   const totalItems = peoples.length;

//   // Background circle scale
//   const circleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

//   // Center text - sirf 60-100% scroll mein dikhe
//   const textOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
//   const textScale = useTransform(scrollYProgress, [0.5, 0.85], [0.5, 1]);

//   return (
//     <section className="w-full h-auto p-20">
//       {/* Space above for scroll room */}
//       <div className="h-[50vh]" />

//       <main ref={sectionRef} className="mx-auto max-w-7xl h-auto">
//         <div className="mx-auto w-[735px] h-[735px] relative flex items-center justify-center py-10">
//           {/* Background */}
//           <div className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat" />

//           <div className="relative flex items-center justify-center">
//             {/* Scaling Circle */}
//             <motion.div
//               className="absolute inset-0 rounded-full"
//               style={{ scale: circleScale }}
//             />

//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* Center Text */}
//               <motion.div
//                 style={{
//                   opacity: textOpacity,
//                   scale: textScale,
//                 }}
//                 className="w-[400px] h-64 text-center z-0"
//               >
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

//               {/* Cards */}
//               {peoples.map((img, index) => {
//                 const isMainPerson = img === person1;
//                 const angle = (index / totalItems) * 2 * Math.PI;

//                 return (
//                   <ScrollCard
//                     key={index}
//                     img={img}
//                     index={index}
//                     angle={angle}
//                     radius={radius}
//                     totalItems={totalItems}
//                     isMainPerson={isMainPerson}
//                     scrollYProgress={scrollYProgress}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Space below */}
//       <div className="h-[50vh]" />
//     </section>
//   );
// }

// function ScrollCard({
//   img,
//   index,
//   angle,
//   radius,
//   totalItems,
//   isMainPerson,
//   scrollYProgress,
// }) {
//   // STAGGER LOGIC:
//   // Cards expand between 0% to 90% of scroll progress
//   // Each card has a small delay based on its index
//   // Total stagger window = 0.3 (30% of scroll is used for staggering)
//   const staggerWindow = 0.3;
//   const perCardDelay = (index / totalItems) * staggerWindow;

//   // Each card:
//   // - STARTS moving at: perCardDelay (e.g., card 0 = 0%, card 5 = 15%)
//   // - FULLY expanded at: perCardDelay + 0.6 (e.g., card 0 = 60%, card 5 = 75%)
//   const cardStart = perCardDelay;
//   const cardEnd = Math.min(perCardDelay + 0.6, 0.95);

//   const x = useTransform(
//     scrollYProgress,
//     [cardStart, cardEnd],
//     [0, Math.cos(angle) * radius]
//   );

//   const y = useTransform(
//     scrollYProgress,
//     [cardStart, cardEnd],
//     [0, Math.sin(angle) * radius]
//   );

//   // Cards start invisible, become visible as they move
//   const opacity = useTransform(
//     scrollYProgress,
//     [cardStart, cardStart + 0.05, cardEnd],
//     [0, 1, 1]
//   );

//   // Cards scale up from small to full size
//   const scale = useTransform(
//     scrollYProgress,
//     [cardStart, cardEnd],
//     [0.6, 1]
//   );

//   return (
//     <motion.div
//       className="absolute rounded-2xl shadow-xl bg-transparent p-1 h-36 w-40 border border-[#00000014]"
//       style={{
//         x,
//         y,
//         opacity,
//         scale,
//         zIndex: isMainPerson ? 50 : index,
//       }}
//     >
//       <div className="border-[3px] border-white rounded-[14px] object-cover h-full w-full">
//         <img
//           src={img}
//           alt={`User ${index}`}
//           className="h-full w-full rounded-xl pointer-events-none object-cover"
//         />
//       </div>
//     </motion.div>
//   );
// }

import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import peoples from "@/constants/peoples";
import person1 from "@/assets/peoplesimgs/person1.png";

export default function PeopleAnimation() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const totalItems = peoples.length;

  // Background circle scale - smooth
  const circleScale = useTransform(scrollYProgress, [0.1, 0.5], [0.95, 1.08], {
    clamp: true,
  });

  // Center text - appears smoothly
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.25, 0.45], [0.7, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.45], [30, 0]);

  return (
    <section className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 md:py-20">
      {/* Space above for scroll room */}
      <div className="h-[30vh] sm:h-[40vh] md:h-[50vh]" />

      <main ref={sectionRef} className="mx-auto max-w-7xl h-auto">
        <div
          className="
            mx-auto relative flex items-center justify-center
            w-[320px] h-[320px]
            sm:w-[450px] sm:h-[450px]
            md:w-[580px] md:h-[580px]
            lg:w-[735px] lg:h-[735px]
          "
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat rounded-full" />

          <div className="relative flex items-center justify-center w-full h-full">
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
                  y: textY,
                }}
                className="
                  w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px]
                  text-center z-10
                "
              >
                <div className="flex flex-col items-center text-center justify-center px-2 sm:px-4 md:px-6 lg:px-10">
                  <img
                    src="/image.png"
                    alt="Logo"
                    className="mx-auto w-20 h-12 sm:w-24 sm:h-14 md:w-32 md:h-[72px] lg:w-36 lg:h-[86px]"
                  />
                  <h2
                    className="
                      text-[22px] sm:text-[28px] md:text-[33px] lg:text-[38px]
                      leading-tight font-extrabold text-gray-900 tracking-tighter
                      flex flex-col items-center mb-2 sm:mb-3 md:mb-4
                    "
                  >
                    <span className="flex gap-1 sm:gap-2 items-center">
                      <img
                        src="/australiaIcon.png"
                        className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[35px] lg:h-[35px]"
                      />
                      Built for
                    </span>
                    Australia
                  </h2>
                  <p
                    className="
                      text-gray-500
                      text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]
                      max-w-[180px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[270px]
                      leading-relaxed
                    "
                  >
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
      <div className="h-[30vh] sm:h-[40vh] md:h-[50vh]" />
    </section>
  );
}

function ScrollCard({
  img,
  index,
  angle,
  totalItems,
  isMainPerson,
  scrollYProgress,
}) {
  // Stagger logic - smoother and longer animation window
  const staggerWindow = 0.2;
  const perCardDelay = (index / totalItems) * staggerWindow;

  const cardStart = 0.15 + perCardDelay;
  const cardEnd = Math.min(cardStart + 0.35, 0.65);

  // Use CSS custom properties approach for responsive radius
  // We'll compute for the largest and use CSS clamp via multiple transforms
  const radiusSm = 130;
  const radiusMd = 200;
  const radiusLg = 260;
  const radiusXl = 300;

  // We need to pick radius based on window - since useTransform doesn't support CSS units,
  // we'll use a hook to get the current radius
  const [radius, setRadius] = React.useState(300);

  React.useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 640) setRadius(radiusSm);
      else if (w < 768) setRadius(radiusMd);
      else if (w < 1024) setRadius(radiusLg);
      else setRadius(radiusXl);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const targetX = Math.cos(angle) * radius;
  const targetY = Math.sin(angle) * radius;

  const x = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, targetX]
  );

  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, targetY]
  );

  // Smooth opacity - fade in gradually
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.08, cardEnd],
    [0, 1, 1]
  );

  // Smooth scale with slight overshoot feel
  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardEnd * 0.85, cardEnd],
    [0.3, 0.95, 1]
  );

  // Subtle rotation for organic feel
  const rotate = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [index % 2 === 0 ? -15 : 15, 0]
  );

  return (
    <motion.div
      className="
        absolute rounded-2xl shadow-xl bg-transparent border border-[#00000014]
        p-0.5 sm:p-1
        h-[72px] w-[80px]
        sm:h-[100px] sm:w-[112px]
        md:h-[120px] md:w-[135px]
        lg:h-36 lg:w-40
      "
      style={{
        x,
        y,
        opacity,
        scale,
        rotate,
        zIndex: isMainPerson ? 50 : index,
        willChange: "transform, opacity",
      }}
    >
      <div
        className="
          border-2 sm:border-[3px] border-white rounded-[10px] sm:rounded-[12px] md:rounded-[14px]
          object-cover h-full w-full overflow-hidden
        "
      >
        <img
          src={img}
          alt={`User ${index}`}
          className="h-full w-full rounded-[8px] sm:rounded-[10px] md:rounded-xl pointer-events-none object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}