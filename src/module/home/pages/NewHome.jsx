import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BackgroundPattern = () => {
  // Animation settings for the pulsing effect
  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: "-50%",
      y: "-50%",
    },
    animate: (customDelay) => ({
      opacity: [0, 0.5, 0], // Fades in and out
      scale: [0.8, 1.2], // Grows slightly
      x: "-50%",
      y: "-50%",
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: customDelay,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0, // Cards ke peeche rahega
        overflow: "hidden",
        pointerEvents: "none", // Mouse interaction card par hi rahe
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Outer Circle */}
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          custom={0}
          style={circleStyle("788px", "rgba(0,0,5,0.5)")}
        />

        {/* Middle Circle */}
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          // custom={1}
          style={circleStyle("702px", "rgba(0,0,5,0.5)")}
        />

        {/* Inner Circle */}
        <motion.div
          variants={circleVariants}
          initial="initial"
          animate="animate"
          // custom={2}
          style={circleStyle("632px", "rgba(0,0,0,0.5)")}
        />
      </div>
    </div>
  );
};

// Helper function for styling circles
const circleStyle = (size, color) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: size,
  height: size,
  borderRadius: "50%",
  border: `1px solid ${color}`, // Border animation yahan se aati hai
  willChange: "transform, opacity",
});

export default BackgroundPattern;
