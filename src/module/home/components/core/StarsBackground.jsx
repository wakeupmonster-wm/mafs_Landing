import { motion } from "framer-motion";

export default function StarsBackground() {
  const stars = [
    {
      top: "15%",
      left: "10%",
      size: "text-2xl sm:text-4xl",
      opacity: "text-white/20",
      delay: 0.2,
      duration: 4,
    },
    {
      top: "10%",
      right: "15%",
      size: "text-xl sm:text-3xl",
      opacity: "text-white/25",
      delay: 0.5,
      duration: 5,
    },
    {
      top: "45%",
      left: "25%",
      size: "text-4xl sm:text-5xl",
      opacity: "text-[#09c1c7]/40",
      display: "hidden md:inline",
      delay: 0.8,
      duration: 6,
    },
    {
      top: "85%",
      left: "15%",
      size: "text-4xl sm:text-5xl",
      opacity: "text-white/10",
      display: "hidden xl:inline",
      delay: 1.2,
      duration: 7,
    },
    {
      top: "88%",
      right: "20%",
      size: "text-5xl sm:text-6xl",
      opacity: "text-white/10",
      display: "hidden xl:inline",
      delay: 1.5,
      duration: 5.5,
    },
    {
      top: "40%",
      right: "12%",
      size: "text-3xl sm:text-4xl",
      opacity: "text-[#09c1c7]/30",
      display: "hidden lg:inline",
      delay: 0.3,
      duration: 4.5,
    },
    {
      top: "8%",
      left: "40%",
      size: "text-4xl sm:text-5xl",
      opacity: "text-[#09c1c7]/20",
      display: "hidden lg:inline",
      delay: 1,
      duration: 6.5,
    },
  ];

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className={`absolute ${star.opacity} ${star.size} ${star.display || ""}`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: star.delay },
            scale: {
              duration: 1,
              delay: star.delay,
              type: "spring",
              stiffness: 100,
            },
            rotate: { duration: 1, delay: star.delay },
            y: {
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: star.duration * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}
