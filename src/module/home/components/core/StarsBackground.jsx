import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = [
    {
      top: "40%",
      left: "6%",
      size: "text-4xl",
      opacity: "text-white/25",
    },
    {
      top: "6%",
      right: "33%",
      size: "text-2xl sm:text-3xl",
      opacity: "text-white/30",
    },
    {
      top: "48%",
      left: "29%",
      size: "text-5xl",
      opacity: "text-[#09c1c7]",
      display: "hidden xl:inline",
    },
    {
      top: "90%",
      left: "22%",
      size: "text-5xl",
      opacity: "text-white/15",
      display: "hidden xl:inline",
    },
    {
      top: "92%",
      left: "75%",
      size: "text-6xl",
      opacity: "text-white/15",
      display: "hidden xl:inline",
    },
    {
      top: "38%",
      right: "21%",
      size: "text-4xl",
      opacity: "text-[#09c1c7]",
      display: "hidden xl:inline",
    },
    {
      top: "6%",
      left: "37.5%",
      size: "text-5xl",
      opacity: "text-[#09c1c7]",
      display: "hidden xl:inline",
    },
  ];

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className={`absolute ${star.opacity} ${star.size} ${star.display}`}
          style={{ top: star.top, left: star.left, right: star.right }}
          // ✅ Entry animation - pehle fade in aur scale up
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            // ✅ Continuous float animation
            ...star.animation,
          }}
          transition={{
            // ✅ Entry transition
            opacity: { duration: 0.8, delay: star.delay },
            scale: {
              duration: 0.8,
              delay: star.delay,
              type: "spring",
              stiffness: 200,
            },
            rotate: { duration: 0.8, delay: star.delay },
            // ✅ Continuous loop
            y: {
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            },
            x: {
              duration: star.duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay + 0.3,
            },
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}
