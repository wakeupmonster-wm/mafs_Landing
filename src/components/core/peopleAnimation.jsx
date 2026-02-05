import React, { useState } from "react";
import { motion } from "framer-motion";
import peoples from "@/constants/peoples";
import person1 from "@/assets/peoplesimgs/person1.png";

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
  const radius = 300; // How wide the circle expands
  const totalItems = peoples.length;

  return (
    <section className="w-full h-auto p-20">
      <main
        className="mx-auto max-w-7xl h-auto cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} // Changed to false for testing
      >
        {/* Main Background Image Container */}
        {/* bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat */}
        <div className="mx-auto w-[735px] h-[735px] relative flex items-center justify-center py-10">
          {/* 1. Background Layer (Opacity is applied here) */}
          <div
            className="absolute inset-0 bg-[url('/Background.svg')] bg-cover bg-center bg-no-repeat"
            // opacity-20 makes the image faint. Adjust as needed (opacity-10, opacity-50, etc.)
          />

          {/* 1. The Wrapper (Static, holds everything together) */}
          <div className="relative flex items-center justify-center">
            {/* 2. The SCALING Circle (Background Layer) */}
            {/* This sits absolutely behind the content and scales independently */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* 3. The Content Layer (Text + Cards) */}
            {/* This sits on top and DOES NOT scale */}
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Center Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-[400px] h-64 text-center z-0"
              >
                {/* Your existing Text Code... */}
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

              {/* Cards / Avatars Loop */}
              {peoples.map((img, index) => {
                const isMainPerson = img === person1; // Ensure person1 is defined in your imports
                const angle = (index / totalItems) * 2 * Math.PI;
                const x = isHovered ? Math.cos(angle) * radius : 0;
                const y = isHovered ? Math.sin(angle) * radius : 0;

                return (
                  <motion.div
                    key={index}
                    className="absolute rounded-2xl shadow-xl bg-transparent p-1 h-36 w-40 border border-[#00000014]"
                    style={{
                      zIndex: isHovered ? 10 : isMainPerson ? 50 : index,
                    }}
                    // Note: No scale animation here, only x/y movement
                    animate={{ x, y }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 12,
                      delay: isHovered ? index * 0.004 : 0,
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
              })}
            </div>
          </div>
          {/* --- THE FIX ENDS HERE --- */}
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
