import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = [
    {
      top: "34%",
      left: "6%",
      size: "text-4xl",
      opacity: "text-white/25",
    },
    {
      top: "6%",
      right: "32%",
      size: "text-xl sm:text-2xl",
      opacity: "text-white/30",
    },
    { top: "48%", left: "29%", size: "text-5xl", opacity: "text-[#09c1c7]" },
    {
      top: "95%",
      left: "22%",
      size: "text-5xl",
      opacity: "text-white/15",
    },
    {
      top: "88%",
      left: "65%",
      size: "text-6xl",
      opacity: "text-white/15",
    },
    { top: "31%", right: "21.5%", size: "text-4xl", opacity: "text-[#09c1c7]" },
    { top: "6%", left: "37.5%", size: "text-5xl", opacity: "text-[#09c1c7]" },
  ];

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className={`absolute ${star.opacity} ${star.size}`}
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
