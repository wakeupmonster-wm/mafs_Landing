// import { motion } from "framer-motion";

// export default function StarsBackground() {
//   const stars = [
//     {
//       top: "34%",
//       left: "6%",
//       size: "text-4xl",
//       opacity: "text-white/25",
//     },
//     {
//       top: "6%",
//       right: "32%",
//       size: "text-xl sm:text-2xl",
//       opacity: "text-white/30",
//     },
//     { top: "48%", left: "29%", size: "text-5xl", opacity: "text-[#09c1c7]" },
//     {
//       top: "95%",
//       left: "22%",
//       size: "text-5xl",
//       opacity: "text-white/15",
//     },
//     {
//       top: "88%",
//       left: "65%",
//       size: "text-6xl",
//       opacity: "text-white/15",
//     },
//     { top: "31%", right: "21.5%", size: "text-4xl", opacity: "text-[#09c1c7]" },
//     { top: "6%", left: "37.5%", size: "text-5xl", opacity: "text-[#09c1c7]" },
//   ];

//   return (
//     <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
//       {stars.map((star, i) => (
//         <motion.div
//           key={i}
//           className={`absolute ${star.opacity} ${star.size}`}
//           style={{ top: star.top, left: star.left, right: star.right }}
//           // ✅ Entry animation - pehle fade in aur scale up
//           initial={{
//             opacity: 0,
//             scale: 0,
//             rotate: -30,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//             // ✅ Continuous float animation
//             ...star.animation,
//           }}
//           transition={{
//             // ✅ Entry transition
//             opacity: { duration: 0.8, delay: star.delay },
//             scale: {
//               duration: 0.8,
//               delay: star.delay,
//               type: "spring",
//               stiffness: 200,
//             },
//             rotate: { duration: 0.8, delay: star.delay },
//             // ✅ Continuous loop
//             y: {
//               duration: star.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: star.delay,
//             },
//             x: {
//               duration: star.duration * 1.2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: star.delay + 0.3,
//             },
//           }}
//         >
//           ✦
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = [
    {
      top: "34%",
      left: "6%",
      size: "text-4xl",
      color: "text-white/25",
      duration: 2.2,
      delay: 0,
      minOpacity: 0.1,
      maxOpacity: 0.4,
    },
    {
      top: "6%",
      right: "32%",
      size: "text-xl sm:text-2xl",
      color: "text-white/30",
      duration: 1.8,
      delay: 0.5,
      minOpacity: 0.1,
      maxOpacity: 0.5,
    },
    {
      top: "48%",
      left: "29%",
      size: "text-5xl",
      color: "text-[#09c1c7]",
      duration: 2.5,
      delay: 0.8,
      minOpacity: 0.3,
      maxOpacity: 1,
    },
    {
      top: "95%",
      left: "22%",
      size: "text-5xl",
      color: "text-white/15",
      duration: 3,
      delay: 1.2,
      minOpacity: 0.05,
      maxOpacity: 0.3,
    },
    {
      top: "88%",
      left: "65%",
      size: "text-6xl",
      color: "text-white/15",
      duration: 2.8,
      delay: 0.3,
      minOpacity: 0.05,
      maxOpacity: 0.25,
    },
    {
      top: "31%",
      right: "21.5%",
      size: "text-4xl",
      color: "text-[#09c1c7]",
      duration: 2,
      delay: 0.6,
      minOpacity: 0.3,
      maxOpacity: 1,
    },
    {
      top: "6%",
      left: "37.5%",
      size: "text-5xl",
      color: "text-[#09c1c7]",
      duration: 2.4,
      delay: 1,
      minOpacity: 0.3,
      maxOpacity: 1,
    },
  ];

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className={`absolute ${star.color} ${star.size}`}
          style={{ top: star.top, left: star.left, right: star.right }}

          // ✅ Entry - pehle appear ho
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -45,
          }}

          // ✅ Twinkle - opacity aur scale se timtimana
          animate={{
            opacity: [
              star.minOpacity,
              star.maxOpacity,
              star.minOpacity * 1.5,
              star.maxOpacity * 0.7,
              star.minOpacity,
            ],
            scale: [
              0.7,
              1.2,
              0.85,
              1.1,
              0.7,
            ],
            rotate: [0, 15, -10, 20, 0], // ✅ thodi rotation - alive feel
          }}

          transition={{
            // ✅ Entry
            opacity: {
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
              times: [0, 0.3, 0.5, 0.7, 1],
            },
            scale: {
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
              times: [0, 0.3, 0.5, 0.7, 1],
            },
            rotate: {
              duration: star.duration * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            },
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}