import React, { useState } from "react";
import { motion } from "framer-motion";

// Placeholder images - replace these with your real assets later
const avatars = [
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=24",
  "https://i.pravatar.cc/150?img=22",
  "https://i.pravatar.cc/150?img=10",
];

export default function PeopleAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  // Configuration
  const radius = 160; // How wide the circle expands
  const totalItems = avatars.length;

  return (
    <section className="w-full h-auto p-20 border border-blue-600 bg-black">
      <main
        className="mx-auto max-w-7xl h-[650px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Bg circle image container */}
        <div className="mx-auto w-[650px] h-[650px] flex items-center justify-center py-10 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat">
          {/* Grey Circle */}
          <motion.div
            className="relative flex h-[650px] w-[650px] items-center justify-center rounded-full border border-gray-400"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Center Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="text-center px-4"
            >
              {/* <div className="text-5xl font-bold text-gray-900 leading-tight tracking-tighter">
                <span>🇦🇺</span> Built for <br />
                <span className="text-[#46C7CD]">Australia</span>
              </div> */}
              <div className="flex flex-col items-center text-center px-6">
                {/* Logo */}
                <img
                  src="/image.png" // <-- apna logo path yahan daalo
                  alt="Logo"
                  className="w-32 h-20 bg-clip-content"
                />

                {/* Heading with Flag */}
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4">
                  <span className="text-3xl">
                    <img src="/australiaIcon.png" />
                  </span>
                  Built for Australia
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-base max-w-md leading-relaxed">
                  Designed exclusively for Australians, with a focused and local
                  dating experience.
                </p>
              </div>
            </motion.div>

            {avatars.map((img, index) => {
              // Math to position items in a circle
              const angle = (index / totalItems) * 2 * Math.PI;
              const x = isHovered ? Math.cos(angle) * radius : 0;
              const y = isHovered ? Math.sin(angle) * radius : 0;

              return (
                <motion.div
                  key={index}
                  className="absolute z-10 h-20 w-20 overflow-hidden rounded-2xl border-[3px] border-white shadow-xl bg-gray-200"
                  animate={{ x, y, rotate: isHovered ? 0 : 5 }} // Slight rotation when stacked adds realism
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 12,
                    mass: 1,
                    // Stagger effect: items pop out one by one
                    delay: isHovered ? index * 0.04 : 0,
                  }}
                >
                  <img
                    src={img}
                    alt={`User ${index}`}
                    className="h-full w-full object-cover pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </main>
    </section>
  );
}

/*

 <div className="relative flex items-center justify-center py-10 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat">
        {/* The Trigger Area (Grey Circle Background) 
        <motion.div
          className="relative flex h-[400px] w-[400px] cursor-pointer items-center justify-center rounded-full border border-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          // Optional: Animate the background circle slightly on hover
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Center Text (Visible ONLY when hovered) 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            className="z-0 text-center px-4"
          >
            {/* Using your brand colors
            <div className="text-3xl font-bold text-gray-900 leading-tight">
              Built for <br />
              <span className="text-[#46C7CD]">Connection</span>
            </div>
          </motion.div>

          {/* The Avatars
          {avatars.map((img, index) => {
            // Math to position items in a circle
            const angle = (index / totalItems) * 2 * Math.PI;
            const x = isHovered ? Math.cos(angle) * radius : 0;
            const y = isHovered ? Math.sin(angle) * radius : 0;

            return (
              <motion.div
                key={index}
                className="absolute z-10 h-20 w-20 overflow-hidden rounded-2xl border-[3px] border-white shadow-xl bg-gray-200"
                animate={{ x, y, rotate: isHovered ? 0 : 5 }} // Slight rotation when stacked adds realism
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 12,
                  mass: 1,
                  // Stagger effect: items pop out one by one
                  delay: isHovered ? index * 0.04 : 0,
                }}
              >
                <img
                  src={img}
                  alt={`User ${index}`}
                  className="h-full w-full object-cover pointer-events-none"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
*/
