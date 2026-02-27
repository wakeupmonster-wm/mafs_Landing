// // // // eslint-disable-next-line no-unused-vars
// // // import { motion } from "framer-motion";

// // // /* ================= PRESET CONFIGURATIONS ================= */

// // // // Transition jo Apple jaisa smooth "spring" feel degi
// // // const smoothSpring = {
// // //   type: "spring",
// // //   stiffness: 80,   // Thoda kam stiffness for elegance
// // //   damping: 12,     // Control bounce
// // //   mass: 0.8,
// // // };

// // // // const chipVariants = {
// // // //   initial: {
// // // //     opacity: 0,
// // // //     scale: 0.2,
// // // //     x: "-50%",
// // // //     y: "-50%",
// // // //     filter: "blur(4px)"
// // // //   },
// // // //   hover: (p) => ({
// // // //     opacity: 1,
// // // //     scale: 1,
// // // //     x: p.tx,
// // // //     y: p.ty,
// // // //     filter: "blur(0px)",
// // // //     transition: smoothSpring, // Pehle wala fast & smooth transition
// // // //     // Floating animation jo hover ke baad start hogi
// // // //     animate: {
// // // //       y: [p.ty, p.ty - 7, p.ty],
// // // //       transition: {
// // // //         duration: 2.5,
// // // //         repeat: Infinity,
// // // //         ease: "easeInOut",
// // // //       }
// // // //     }
// // // //   }),
// // // // };

// // // const chipVariants = {
// // //   initial: {
// // //     opacity: 0,
// // //     scale: 0.2,
// // //     x: "-50%",
// // //     y: "-50%",
// // //     filter: "blur(4px)"
// // //   },
// // //   hover: (p) => ({
// // //     opacity: 1,
// // //     scale: 1,
// // //     x: p.tx,
// // //     y: p.ty, // Pehle apni jagah par aayega center se
// // //     filter: "blur(0px)",
// // //     transition: smoothSpring, // Bilkul pehle jaisa fast movement

// // //     // Floating effect yahan separate hai, jo position hit karne ke baad trigger hoga
// // //     animate: {
// // //       y: [p.ty, p.ty - 6, p.ty],
// // //       transition: {
// // //         duration: 2.5,
// // //         repeat: Infinity,
// // //         ease: "easeInOut",
// // //         delay: 0.5 // Taki pehle center se nikalne wala animation khatam ho jaye
// // //       }
// // //     }
// // //   }),
// // // };

// // // export default function ProfileCard() {
// // //   return (
// // //     <>
// // //       <style>{`
// // //         .visual-container {
// // //           position: relative;
// // //           height: 320px;
// // //           width: 100%;
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           background: #ffffff;
// // //           overflow: visible; /* Chips ko card ke bahar dikhne ke liye */
// // //         }

// // //         .gradient-glow {
// // //           position: absolute;
// // //           inset: 0;
// // //           background: radial-gradient(circle at 50% 30%, #c1f4f6 0%, #ffffff 70%);
// // //           opacity: 0;
// // //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// // //         }

// // //         .card-wrapper:hover .gradient-glow {
// // //           opacity: 0.6;
// // //         }

// // //         /* Essential for smooth performance */
// // //         .chip-element {
// // //           position: absolute;
// // //           top: 50%;
// // //           left: 50%;
// // //           will-change: transform, opacity;
// // //           z-index: 5;
// // //           pointer-events: none;
// // //         }

// // //         .chip-box {
// // //           background: white;
// // //           padding: 10px 20px;
// // //           border-radius: 100px;
// // //           font-size: 15px;
// // //           font-weight: 500;
// // //           color: #1a1a1a;
// // //           box-shadow: 0 10px 25px rgba(0,0,0,0.06);
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           border: 1px solid rgba(0,0,0,0.04);
// // //         }

// // //         .profile-card-main {
// // //           position: relative;
// // //           z-index: 10;
// // //           background: white;
// // //           border-radius: 24px;
// // //           padding: 16px 20px;
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 16px;
// // //           width: 320px;
// // //           box-shadow: 0 15px 35px rgba(0,0,0,0.07);
// // //           border: 1px solid rgba(0,0,0,0.02);
// // //         }

// // //         .avatar-img {
// // //           width: 68px;
// // //           height: 68px;
// // //           border-radius: 50%;
// // //           object-fit: cover;
// // //           border: 3px solid #71d7fe;
// // //         }
// // //       `}</style>

// // //       <motion.div
// // //         className="card-wrapper"
// // //         initial="initial"
// // //         whileHover="hover"
// // //         style={{
// // //           width: "450px",
// // //           borderRadius: "32px",
// // //           overflow: "hidden",
// // //           background: "white",
// // //           boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
// // //         }}
// // //       >
// // //         <div className="visual-container">
// // //           <div className="gradient-glow" />

// // //           {/* 1. Blue Tick (Top Left - Exactly like screenshot) */}
// // //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-100px", ty: "-130px" }}>
// // //             <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
// // //               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#71D7FE"/>
// // //             </svg>
// // //           </motion.div>

// // //           {/* 2. Music (Top Right) */}
// // //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "60px", ty: "-150px" }} animate={{ y: ["0%", "-2%", "2%", "0%"] }}
// // //   transition={{
// // //     y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
// // //   }}>
// // //             <div className="chip-box">Music 🎵</div>
// // //           </motion.div>

// // //           {/* 3. Travel (Bottom Left) */}
// // //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-150px", ty: "60px" }}>
// // //             <div className="chip-box">Travel ✈️</div>
// // //           </motion.div>

// // //           {/* 4. Basketball (Bottom Right) */}
// // //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "45px", ty: "85px" }}>
// // //             <div className="chip-box">Basketball 🏀</div>
// // //           </motion.div>

// // //           {/* 5. Purple Sparkle (Right Side) */}
// // //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "155px", ty: "15px" }}>
// // //             <svg width="24" height="24" viewBox="0 0 24 24" fill="#a855f7">
// // //               <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
// // //             </svg>
// // //           </motion.div>

// // //           {/* Main Card */}
// // //           <motion.div
// // //             className="profile-card-main"
// // //             variants={{
// // //               initial: { y: 0 },
// // //               hover: { y: -40, transition: { duration: 0.4, ease: "easeOut" } }
// // //             }}
// // //           >
// // //             <img className="avatar-img" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" alt="Elizabeth" />
// // //             <div>
// // //               <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>Elizabeth (25)</h3>
// // //               <p style={{ margin: "2px 0 0", color: "#777", fontSize: "15px" }}>7 km away</p>
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         <div style={{ padding: "35px 40px" }}>
// // //           <h2 style={{ fontSize: "32px", margin: "0 0 12px", fontWeight: "800", color: "#222" }}>Create Your Profile</h2>
// // //           <p style={{ color: "#666", fontSize: "17px", lineHeight: "1.5", margin: 0 }}>
// // //             Set up your profile in just a few minutes and choose what you’re looking for.
// // //           </p>
// // //         </div>
// // //       </motion.div>
// // //     </>
// // //   );
// // // }

// // // eslint-disable-next-line no-unused-vars
// // import { motion } from "framer-motion";
// // const smoothSpring = {
// //   type: "spring",
// //   stiffness: 80,
// //   damping: 12,
// //   mass: 0.8,
// // };

// // const chipVariants = {
// //   initial: {
// //     opacity: 0,
// //     scale: 0.2,
// //     x: "-50%",
// //     y: "-50%",
// //     filter: "blur(4px)"
// //   },
// //   hover: (p) => ({
// //     opacity: 1,
// //     scale: 1,
// //     x: p.tx,
// //     y: p.ty,
// //     filter: "blur(0px)",
// //     transition: smoothSpring,

// //     // Floating effect: Jab target position par pahunch jaye tab move kare
// //     animate: {
// //       y: [p.ty, p.ty - 6, p.ty],
// //       transition: {
// //         duration: 2.5,
// //         repeat: Infinity,
// //         ease: "easeInOut",
// //         delay: 0.5 // Initial burst ke baad floating start hogi
// //       }
// //     }
// //   }),
// // };

// // export default function ProfileCard() {
// //   return (
// //     <>
// //       <style>{`
// //         .visual-container {
// //           position: relative;
// //           height: 320px;
// //           width: 100%;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           background: #ffffff;
// //           overflow: visible;

// //         }

// //         .gradient-glow {
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(circle at 7% 0%, #c1f4f6 0%, #ffffff 250%);
// //           opacity: 0;
// //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// //         }

// //         .card-wrapper:hover .gradient-glow {
// //           opacity: 0.6;
// //         }

// //         .chip-element {
// //           position: absolute;
// //           top: 50%;
// //           left: 50%;
// //           will-change: transform, opacity;
// //           z-index: 20;
// //           pointer-events: none;
// //         }

// //         .chip-box {
// //           background: white;
// //           padding: 10px 20px;
// //           border-radius: 100px;
// //           font-size: 15px;
// //           font-weight: 500;
// //           color: #1a1a1a;
// //           box-shadow: 0 10px 25px rgba(0,0,0,0.06);
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           border: 1px solid rgba(0,0,0,0.04);
// //         }

// //         .profile-card-main {
// //           position: relative;
// //           z-index: 10;
// //           background: white;
// //           border-radius: 24px;
// //           padding: 16px 20px;
// //           display: flex;
// //           align-items: center;
// //           gap: 16px;
// //           width: 320px;
// //           box-shadow: 0 15px 35px rgba(0,0,0,0.07);
// //           border: 1px solid rgba(0,0,0,0.02);
// //         }

// //         .avatar-img {
// //           width: 68px;
// //           height: 68px;
// //           border-radius: 50%;
// //           object-fit: cover;
// //           border: 3px solid #71d7fe;
// //         }
// //       `}</style>

// //       <motion.div
// //         className="card-wrapper"
// //         initial="initial"
// //         whileHover="hover"
// //         style={{
// //           borderRadius: "32px",
// //           overflow: "hidden",
// //           background: "white",
// //           boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
// //         }}
// //       >
// //         <div className="visual-container">
// //           <div className="gradient-glow" />

// //           {/* 1. Blue Tick */}
// //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-100px", ty: "-130px" }}>
// //             <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
// //               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#71D7FE"/>
// //             </svg>
// //           </motion.div>

// //           {/* 2. Music */}
// //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "60px", ty: "-150px" }}>
// //             <div className="chip-box">Music 🎵</div>
// //           </motion.div>

// //           {/* 3. Travel */}
// //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-150px", ty: "60px" }}>
// //             <div className="chip-box">Travel ✈️</div>
// //           </motion.div>

// //           {/* 4. Basketball */}
// //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "45px", ty: "85px" }}>
// //             <div className="chip-box">Basketball 🏀</div>
// //           </motion.div>

// //           {/* 5. Purple Sparkle */}
// //           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "155px", ty: "15px" }}>
// //             <svg width="24" height="24" viewBox="0 0 24 24" fill="#a855f7">
// //               <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
// //             </svg>
// //           </motion.div>

// //           {/* Main Card */}
// //           <motion.div
// //             className="profile-card-main"
// //             variants={{
// //               initial: { y: 60 },
// //               hover: { y: -40, transition: { duration: 0.4, ease: "easeOut" } }
// //             }}
// //           >
// //             <img className="avatar-img" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" alt="Elizabeth" />
// //             <div>
// //               <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>Elizabeth (25)</h3>
// //               <p style={{ margin: "2px 0 0", color: "#777", fontSize: "15px" }}>7 km away</p>
// //             </div>
// //           </motion.div>
// //         </div>
// //         <div style={{ padding: "35px 40px" }}>
// //           <h2 style={{ fontSize: "32px", margin: "0 0 12px", fontWeight: "800", color: "#222" }}>Create Your Profile</h2>
// //           <p style={{ color: "#666", fontSize: "17px", lineHeight: "1.5", margin: 0 }}>
// //             Set up your profile in just a few minutes and choose what you’re looking for.
// //           </p>
// //         </div>
// //       </motion.div>
// //     </>
// //   );
// // }

// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const smoothSpring = {
//   type: "spring",
//   stiffness: 80,
//   damping: 12,
//   mass: 0.8,
// };

// const chipVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0.2,
//     x: "-50%",
//     y: "-50%",
//     filter: "blur(4px)",
//   },
//   hover: (p) => ({
//     opacity: 1,
//     scale: 1,
//     x: p.tx,
//     y: p.ty,
//     filter: "blur(0px)",
//     transition: smoothSpring,
//   }),
// };

// // ✅ NEW: Separate float variants for the inner wrapper
// const floatVariants = {
//   initial: { y: 0 },
//   hover: (i) => ({
//     y: [0, -9, 0, 6, 0],
//     transition: {
//       duration: 2.6 + i * 0.4,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: 0.5 + i * 0.12, // stagger so each chip floats differently
//     },
//   }),
// };

// export default function ProfileCard() {
//   return (
//     <>
//       <style>{`
//         .visual-container {
//           position: relative;
//           height: 320px;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           overflow: visible;
//           border-radius : 32px;
//         }

//         /* ✅ FIXED: Shadow glow instead of lines */
//         .gradient-glow {
//           position: absolute;
//           inset: 0;
//           opacity: 0;
//           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//           pointer-events: none;

//           background:
//  radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%),
//             radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%);
//         }

//         .card-wrapper:hover .gradient-glow {
//           opacity: 1;
//           border-radius : 32px;
//         }
//           .card-wrapper {
//           border: 2.5px solid rgba(255, 255, 255, 0.6);
//           outline: 2.5px solid rgba(200, 220, 230, 0.25);
//            backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//          border-radius : 32px;
//           }

//         .chip-element {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           will-change: transform, opacity;
//           z-index: 20;
//           pointer-events: none;
//         }

//         .chip-box {
//           background: white;
//           padding: 10px 20px;
//           border-radius: 100px;
//           font-size: 15px;
//           font-weight: 500;
//           color: #1a1a1a;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.06);
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border: 1px solid rgba(0,0,0,0.04);
//         }

//         .profile-card-main {
//           position: relative;
//           z-index: 10;
//           background: white;
//           border-radius: 24px;
//           padding: 16px 20px;
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           width: 320px;
//           box-shadow: 0 15px 35px rgba(0,0,0,0.07);
//           border: 1px solid rgba(0,0,0,0.02);
//         }

//         .avatar-img {
//           width: 68px;
//           height: 68px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 3px solid #71d7fe;
//         }
//       `}</style>

//       <motion.div
//         className="card-wrapper"
//         initial="initial"
//         whileHover="hover"
//         style={{
//           borderRadius: "2px",
//           overflow: "hidden",
//           boxShadow: "0 8px 80px rgba(0,0,0,0.03)",
//         }}
//       >
//         <div className="visual-container">
//           <div className="gradient-glow" />

//           {/* 1. Blue Tick */}
//           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-100px", ty: "-130px" }}>
//             <motion.div variants={floatVariants} custom={0}>
//               <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#71D7FE" />
//               </svg>
//             </motion.div>
//           </motion.div>

//           {/* 2. Music */}
//           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "60px", ty: "-150px" }}>
//             <motion.div variants={floatVariants} custom={1}>
//               <div className="chip-box">Music 🎵</div>
//             </motion.div>
//           </motion.div>

//           {/* 3. Travel */}
//           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "-150px", ty: "60px" }}>
//             <motion.div variants={floatVariants} custom={2}>
//               <div className="chip-box">Travel ✈️</div>
//             </motion.div>
//           </motion.div>

//           {/* 4. Basketball */}
//           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "45px", ty: "85px" }}>
//             <motion.div variants={floatVariants} custom={3}>
//               <div className="chip-box">Basketball 🏀</div>
//             </motion.div>
//           </motion.div>

//           {/* 5. Purple Sparkle */}
//           <motion.div className="chip-element" variants={chipVariants} custom={{ tx: "155px", ty: "15px" }}>
//             <motion.div variants={floatVariants} custom={4}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="#a855f7">
//                 <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
//               </svg>
//             </motion.div>
//           </motion.div>

//           {/* Main Card */}
//           <motion.div
//             className="profile-card-main"
//             variants={{
//               initial: { y: 60 },
//               hover: { y: -40, transition: { duration: 0.4, ease: "easeOut" } },
//             }}
//           >
//             <img className="avatar-img" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200" alt="Elizabeth" />
//             <div>
//               <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}>Elizabeth (25)</h3>
//               <p style={{ margin: "2px 0 0", color: "#777", fontSize: "15px" }}>7 km away</p>
//             </div>
//           </motion.div>
//         </div>

//         <div style={{ padding: "35px 40px" }}>
//           <h2 style={{ fontSize: "32px", margin: "0 0 12px", fontWeight: "800", color: "#222" }}>Create Your Profile</h2>
//           <p style={{ color: "#666", fontSize: "17px", lineHeight: "1.5", margin: 0 }}>
//             Set up your profile in just a few minutes and choose what you&apos;re looking for.
//           </p>
//         </div>
//       </motion.div>
//     </>
//   );
// }

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Border from "./border";

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 12,
  mass: 0.8,
};

const chipVariants = {
  initial: {
    opacity: 0,
    scale: 0.2,
    x: "-50%",
    y: "-50%",
    filter: "blur(4px)",
  },
  hover: (p) => ({
    opacity: 1,
    scale: 1,
    x: p.tx,
    y: p.ty,
    filter: "blur(0px)",
    transition: smoothSpring,
  }),
};

const floatVariants = {
  initial: { y: 0 },
  hover: (i) => ({
    y: [0, -9, 0, 6, 0],
    transition: {
      duration: 2.6 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5 + i * 0.12,
    },
  }),
};

export default function ProfileCard() {
  return (
    <Border>
      <motion.div
        initial="initial"
        whileHover="hover"
        style={{
          borderRadius: "28px",
          overflow: "hidden",
          background: "white",
          border: "4px solid white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg"
      >
        
        <div
          style={{
            position: "relative",
            height: "320px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
            flex: "1 1 auto",
          }}
        >
          {/* Gradient glow on hover - Shifted Up & Seamless */}
          <motion.div
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
            }}
          />

          {/* Blue Tick */}
          <motion.div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              zIndex: 20,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "-100px", ty: "-100px" }}
            custom={{ tx: "clamp(-90px, -8vw, -100px)", ty: "clamp(-95px, -8vw, -85px)" }}
          >
            <motion.div variants={floatVariants} custom={0}>
              {/* <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="#71D7FE"
                />
              </svg> */}
              <img src="/Verified badge.png" alt="" className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Music */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 20,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "60px", ty: "-120px" }}
            custom={{ tx: "clamp(28px, 5vw, 60px)", ty: "clamp(-115px, -9vw, -100px)" }}
          >
            <motion.div variants={floatVariants} custom={1}>
              
              <img src="/Frame 114.png" alt="" className="w-24 h-10" />
            </motion.div>
          </motion.div>

          {/* Travel */}
          <motion.div
            style={{
              position: "absolute",
              top: "42%",
              left: "45%",
              zIndex: 20,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "-150px", ty: "80px" }}
            custom={{ tx: "clamp(-115px, -11vw, -150px)", ty: "clamp(80px, 6vw, 60px)" }}
          >
            <motion.div variants={floatVariants} custom={2}>
              <img src="/Frame 113.png" alt="" className="w-24 h-10" />
            </motion.div>
          </motion.div>

          {/* Basketball */}
          <motion.div
            style={{
              position: "absolute",
              top: "43%",
              left: "50%",
              zIndex: 20,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "45px", ty: "105px" }}
            custom={{ tx: "clamp(12px, 4vw, 45px)", ty: "clamp(75px, 8vw, 105px)" }}
          >
            <motion.div variants={floatVariants} custom={3}>
          
              <img src="/Frame 115.png" alt="" className="w-28 h-10" />
            </motion.div>
          </motion.div>

          {/* Purple Sparkle */}
          <motion.div
            style={{
              position: "absolute",
              top: "45%",
              left: "55%",
              zIndex: 20,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "155px", ty: "35px" }}
            custom={{ tx: "clamp(95px, 11vw, 143px)", ty: "clamp(18px, 3vw, 35px)" }}
          >
            <motion.div variants={floatVariants} custom={4}>
            
              <img src="/Vector (5).png" alt="" className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Main Profile Card */}
          <motion.div
            variants={{
              initial: { y: 60 },
              hover: { y: -2, transition: { duration: 0.4, ease: "easeOut" } },
            }}
        
          >
            {/* <img src="/Frame 112.png" alt="Elizabeth" className="w-92 h-24 md:w-92 md:h-36" /> */}
             <img
    src="/Frame 112.png"
    alt="Elizabeth"
    className="w-60 h-44 sm:w-72 sm:h-24 md:w-80 md:h-28 lg:w-92 lg:h-36 object-contain"
  />
        
          </motion.div>
        </div>

        {/* <div style={{ padding: "35px 12px" }}>
          <h2
            style={{
              fontSize: "28px",
              margin: "0 0 8px",
              fontWeight: 800,
              color: "#222",
            }}
          >
            Create Your Profile
          </h2>
          <p
            style={{
              color: "#707070",
              fontSize: "16px",
              lineHeight: 1.5,
              margin: "2px",
            }}
          >
            Set up your profile in just a few minutes and choose what
            you&apos;re looking for.
          </p>
        </div> */}
        <div className="px-3 py-5 sm:px-[12px] sm:py-[35px]">
  <h2
    className="text-[18px] sm:text-[28px] font-extrabold text-[#222]"
    style={{ margin: "0 0 8px" }}
  >
    Create Your Profile
  </h2>
  <p
    className="text-[12px] sm:text-[16px] text-[#707070] leading-relaxed"
    style={{ margin: "2px" }}
  >
    Set up your profile in just a few minutes and choose what
    you&apos;re looking for.
  </p>
</div>
      </motion.div>
    </Border>
  );
}
