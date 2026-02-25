
// // // // // eslint-disable-next-line no-unused-vars
// // // // import { motion } from "framer-motion";

// // // // const smoothSpring = {
// // // //   type: "spring",
// // // //   stiffness: 100,
// // // //   damping: 45 ,
// // // //   mass: 1
// // // // };

// // // // export default function StartConversationCard() {
// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         .conv-container {
// // // //           width: 100%;
// // // //           max-width: 100%;
// // // //           background: white;
// // // //           overflow: visible; /* Stars bahar nikalne ke liye */
// // // //           cursor: pointer;
// // // //           margin: 20px auto;
// // // //           font-family: sans-serif;
// // // //         }

// // // //         .conv-visual {
// // // //           position: relative;
// // // //           height: 340px;
// // // //           display: flex;
// // // //           justify-content: center;
// // // //           align-items: center;
// // // //           background: white;
// // // //           border-radius: 40px 40px 0 0;
// // // //         }

// // // //         /* EXACT SCREENSHOT GRADIENT */
// // // //         .conv-bg-glow {
// // // //           position: absolute;
// // // //           inset: 0;
// // // //           background: radial-gradient(
// // // //             circle at 50% 35%, 
// // // //             rgba(193, 244, 246, 0.9) 0%, 
// // // //             rgba(255, 255, 255, 0) 80%
// // // //           );
// // // //           opacity: 0;
// // // //           transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
// // // //           z-index: 1;
// // // //         }
// // // //         .conv-container:hover .conv-bg-glow { opacity: 1; }

// // // //         .avatar {
// // // //           width: 95px;
// // // //           height: 95px;
// // // //           border-radius: 50%;
// // // //           border: 4px solid white;
// // // //           box-shadow: 0 12px 30px rgba(0,0,0,0.1);
// // // //           object-fit: cover;
// // // //           position: absolute;
// // // //           z-index: 30;
// // // //         }

// // // //         .chat-bubble {
// // // //           position: absolute;
// // // //           background: white;
// // // //           padding: 14px 24px;
// // // //           border-radius: 20px;
// // // //           font-size: 15px;
// // // //           font-weight: 500;
// // // //           color: #1a1a1a;
// // // //           box-shadow: 0 10px 35px rgba(0,0,0,0.07);
// // // //           z-index: 25;
// // // //           white-space: nowrap;
// // // //           border: 1px solid rgba(0,0,0,0.02);
// // // //         }

// // // //         /* Star (Sparkle) Styling */
// // // //         .star-element {
// // // //           position: absolute;
// // // //           z-index: 10;
// // // //           pointer-events: none;
// // // //         }

// // // //         .conv-footer { padding: 40px; }
// // // //         .conv-footer h2 { margin: 0; font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
// // // //         .conv-footer p { color: #666; margin-top: 10px; font-size: 18px; line-height: 1.5; }
// // // //       `}</style>

// // // //       <motion.div className="conv-container" initial="initial" whileHover="hover">
// // // //         <div className="conv-visual">
// // // //           <div className="conv-bg-glow" />

// // // //           {/* LEFT AVATAR - Moves to Top Left */}
// // // //           <motion.img 
// // // //             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" 
// // // //             className="avatar"
// // // //             variants={{
// // // //               initial: { x: -25, y: -10 },
// // // //               hover: { x: -160, y: -80, transition: smoothSpring }
// // // //             }}
// // // //           />
// // // //           {/* Star near Left Avatar (Screenshot style) */}
// // // //           <motion.div 
// // // //             className="star-element"
// // // //             style={{ left: '15%', top: '45%' }}
// // // //             variants={{
// // // //               initial: { scale: 0, opacity: 0 },
// // // //               hover: { scale: 1, opacity: 1, transition: { delay: 0.5, type: 'spring' } }
// // // //             }}
// // // //           >
// // // //             <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
// // // //               <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" stroke="#c1f4f6" strokeWidth="1"/>
// // // //             </svg>
// // // //           </motion.div>

// // // //           {/* RIGHT AVATAR - Moves to Bottom Right */}
// // // //           <motion.img 
// // // //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" 
// // // //             className="avatar"
// // // //             style={{ zIndex: 31 }}
// // // //             variants={{
// // // //               initial: { x: 25, y: 15 },
// // // //               hover: { x: 160, y: 60, transition: smoothSpring }
// // // //             }}
// // // //           />
// // // //           {/* Star near Right Avatar */}
// // // //           <motion.div 
// // // //             className="star-element"
// // // //             style={{ right: '12%', top: '35%' }}
// // // //             variants={{
// // // //               initial: { scale: 0, opacity: 0 },
// // // //               hover: { scale: 1.2, opacity: 1, transition: { delay: 0.7, type: 'spring' } }
// // // //             }}
// // // //           >
// // // //             <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
// // // //               <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
// // // //             </svg>
// // // //           </motion.div>

// // // //           {/* CHAT BUBBLE 1 - Comes after Avatars reach destination */}
// // // //           <motion.div 
// // // //             className="chat-bubble"
// // // //             variants={{
// // // //               initial: { opacity: 0, scale: 0.7, x: -30, y: -20 },
// // // //               hover: { 
// // // //                 opacity: 1, scale: 1, x: 50, y: -90, 
// // // //                 transition: { ...smoothSpring, delay: 1 } 
// // // //               }
// // // //             }}
// // // //           >
// // // //             Hey! I liked your profile.
// // // //           </motion.div>

// // // //           {/* CHAT BUBBLE 2 */}
// // // //           <motion.div 
// // // //             className="chat-bubble"
// // // //             variants={{
// // // //               initial: { opacity: 0, scale: 0.7, x: 30, y: 40 },
// // // //               hover: { 
// // // //                 opacity: 1, scale: 1, x: -60, y: 80, 
// // // //                 transition: { ...smoothSpring, delay: 1 } 
// // // //               }
// // // //             }}
// // // //           >
// // // //             Thanks! Glad we matched.
// // // //           </motion.div>
// // // //         </div>

// // // //         <div className="conv-footer">
// // // //           <h2>Start a Conversation</h2>
// // // //           <p>Connect and chat easily once there’s mutual interest.</p>
// // // //         </div>
// // // //       </motion.div>
// // // //     </>
// // // //   );
// // // // }



// // // // eslint-disable-next-line no-unused-vars
// // // import { motion } from "framer-motion";

// // // const smoothSpring = {
// // //   type: "spring",
// // //   stiffness: 100,
// // //   damping: 45,
// // //   mass: 1,
// // // };

// // // const floatVariants = {
// // //   initial: { y: 0 },
// // //   hover: (i) => ({
// // //     y: [0, -8, 0, 5, 0],
// // //     transition: {
// // //       duration: 2.6 + i * 0.4,
// // //       repeat: Infinity,
// // //       ease: "easeInOut",
// // //       delay: 1.2 + i * 0.15,
// // //     },
// // //   }),
// // // };

// // // export default function StartConversationCard() {
// // //   return (
// // //     <>
// // //       <style>{`
// // //         .conv-container {
// // //           width: 100%;
// // //           max-width: 100%;
// // //           background: white;
// // //           overflow: hidden;
// // //           cursor: pointer;
// // //           margin: 20px auto;
// // //           font-family: sans-serif;
// // //           box-shadow: 0 4px 20px rgba(0,0,0,0.03);
// // //         }

// // //         .conv-visual {
// // //           position: relative;
// // //           height: 340px;
// // //           display: flex;
// // //           justify-content: center;
// // //           align-items: center;
// // //           background: white;
// // //           overflow: visible;
// // //         }

// // //         /* ✅ Top glow - strong cyan */
// // //         .conv-glow-main {
// // //           position: absolute;
// // //           inset: 0;
// // //           opacity: 0;
// // //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// // //           pointer-events: none;
// // //           background:
// // //             radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%),
// // //             radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%);
// // //           z-index: 1;
// // //         }

// // //         /* ✅ Bottom shadow - separate div, blurred, no line */
// // //         .conv-glow-bottom {
// // //           position: absolute;
// // //           bottom: -60px;
// // //           left: -40px;
// // //           right: -40px;
// // //           height: 160px;
// // //           opacity: 0;
// // //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// // //           pointer-events: none;
// // //           background: radial-gradient(ellipse 60% 80% at 50% 20%, rgba(168, 85, 247, 0.13) 0%, transparent 70%);
// // //           filter: blur(12px);
// // //           z-index: 1;
// // //         }

// // //         .conv-container:hover .conv-glow-main { opacity: 1; }
// // //         .conv-container:hover .conv-glow-bottom { opacity: 1; }

// // //         .avatar {
// // //           width: 95px;
// // //           height: 95px;
// // //           border-radius: 50%;
// // //           border: 4px solid white;
// // //           box-shadow: 0 12px 30px rgba(0,0,0,0.1);
// // //           object-fit: cover;
// // //           position: absolute;
// // //           z-index: 30;
// // //         }

// // //         .chat-bubble {
// // //           position: absolute;
// // //           background: white;
// // //           padding: 14px 24px;
// // //           border-radius: 20px;
// // //           font-size: 15px;
// // //           font-weight: 500;
// // //           color: #1a1a1a;
// // //           box-shadow: 0 10px 35px rgba(0,0,0,0.07);
// // //           z-index: 25;
// // //           white-space: nowrap;
// // //           border: 1px solid rgba(0,0,0,0.02);
// // //         }

// // //         .star-element {
// // //           position: absolute;
// // //           z-index: 20;
// // //           pointer-events: none;
// // //         }

// // //         .conv-footer { padding: 40px; }
// // //         .conv-footer h2 { margin: 0; font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
// // //         .conv-footer p { color: #666; margin-top: 10px; font-size: 18px; line-height: 1.5; }
// // //       `}</style>

// // //       <motion.div className="conv-container" initial="initial" whileHover="hover">
// // //         <div className="conv-visual">
// // //           {/* ✅ Glow layers */}
// // //           <div className="conv-glow-main" />
// // //           <div className="conv-glow-bottom" />

// // //           {/* LEFT AVATAR */}
// // //           <motion.img
// // //             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
// // //             className="avatar"
// // //             variants={{
// // //               initial: { x: -25, y: -10 },
// // //               hover: { x: -160, y: -80, transition: smoothSpring },
// // //             }}
// // //           />

// // //           {/* ✅ Star near Left Avatar - NOW VISIBLE */}
// // //           <motion.div
// // //             className="star-element"
// // //             style={{ left: "15%", top: "45%" }}
// // //             variants={{
// // //               initial: { scale: 0, opacity: 0 },
// // //               hover: {
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 transition: { delay: 0.5, type: "spring", stiffness: 200 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={0}>
// // //               <svg width="28" height="28" viewBox="0 0 24 24">
// // //                 <defs>
// // //                   <linearGradient id="starGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                     <stop offset="0%" stopColor="#71D7FE" />
// // //                     <stop offset="100%" stopColor="#a855f7" />
// // //                   </linearGradient>
// // //                 </defs>
// // //                 <path
// // //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// // //                   fill="url(#starGrad1)"
// // //                   filter="drop-shadow(0 2px 6px rgba(113, 215, 254, 0.5))"
// // //                 />
// // //               </svg>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* ✅ Small star - top right area */}
// // //           <motion.div
// // //             className="star-element"
// // //             style={{ right: "22%", top: "20%" }}
// // //             variants={{
// // //               initial: { scale: 0, opacity: 0 },
// // //               hover: {
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 transition: { delay: 0.8, type: "spring", stiffness: 200 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={1}>
// // //               <svg width="16" height="16" viewBox="0 0 24 24">
// // //                 <path
// // //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// // //                   fill="#71D7FE"
// // //                   filter="drop-shadow(0 2px 4px rgba(113, 215, 254, 0.4))"
// // //                 />
// // //               </svg>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* ✅ Star near Right Avatar - NOW VISIBLE */}
// // //           <motion.div
// // //             className="star-element"
// // //             style={{ right: "12%", top: "55%" }}
// // //             variants={{
// // //               initial: { scale: 0, opacity: 0 },
// // //               hover: {
// // //                 scale: 1.2,
// // //                 opacity: 1,
// // //                 transition: { delay: 0.7, type: "spring", stiffness: 200 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={2}>
// // //               <svg width="24" height="24" viewBox="0 0 24 24">
// // //                 <defs>
// // //                   <linearGradient id="starGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
// // //                     <stop offset="0%" stopColor="#a855f7" />
// // //                     <stop offset="100%" stopColor="#71D7FE" />
// // //                   </linearGradient>
// // //                 </defs>
// // //                 <path
// // //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// // //                   fill="url(#starGrad2)"
// // //                   filter="drop-shadow(0 2px 6px rgba(168, 85, 247, 0.5))"
// // //                 />
// // //               </svg>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* ✅ Extra tiny star - bottom left */}
// // //           <motion.div
// // //             className="star-element"
// // //             style={{ left: "25%", bottom: "18%" }}
// // //             variants={{
// // //               initial: { scale: 0, opacity: 0 },
// // //               hover: {
// // //                 scale: 1,
// // //                 opacity: 1,
// // //                 transition: { delay: 0.9, type: "spring", stiffness: 200 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={3}>
// // //               <svg width="14" height="14" viewBox="0 0 24 24">
// // //                 <path
// // //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// // //                   fill="#a855f7"
// // //                   filter="drop-shadow(0 2px 4px rgba(168, 85, 247, 0.4))"
// // //                 />
// // //               </svg>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* RIGHT AVATAR */}
// // //           <motion.img
// // //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
// // //             className="avatar"
// // //             style={{ zIndex: 31 }}
// // //             variants={{
// // //               initial: { x: 25, y: 15 },
// // //               hover: { x: 160, y: 60, transition: smoothSpring },
// // //             }}
// // //           />

// // //           {/* CHAT BUBBLE 1 */}
// // //           <motion.div
// // //             className="chat-bubble"
// // //             variants={{
// // //               initial: { opacity: 0, scale: 0.7, x: -30, y: -20 },
// // //               hover: {
// // //                 opacity: 1,
// // //                 scale: 1,
// // //                 x: 50,
// // //                 y: -90,
// // //                 transition: { ...smoothSpring, delay: 1 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={4}>
// // //               Hey! I liked your profile.
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* CHAT BUBBLE 2 */}
// // //           <motion.div
// // //             className="chat-bubble"
// // //             variants={{
// // //               initial: { opacity: 0, scale: 0.7, x: 30, y: 40 },
// // //               hover: {
// // //                 opacity: 1,
// // //                 scale: 1,
// // //                 x: -60,
// // //                 y: 80,
// // //                 transition: { ...smoothSpring, delay: 1 },
// // //               },
// // //             }}
// // //           >
// // //             <motion.div variants={floatVariants} custom={5}>
// // //               Thanks! Glad we matched.
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>

// // //         <div className="conv-footer">
// // //           <h2>Start a Conversation</h2>
// // //           <p>Connect and chat easily once there&apos;s mutual interest.</p>
// // //         </div>
// // //       </motion.div>
// // //     </>
// // //   );
// // // }


// // // eslint-disable-next-line no-unused-vars
// // import { motion } from "framer-motion";

// // const smoothSpring = {
// //   type: "spring",
// //   stiffness: 100,
// //   damping: 45,
// //   mass: 1,
// // };

// // const floatVariants = {
// //   initial: { y: 0 },
// //   hover: (i) => ({
// //     y: [0, -8, 0, 5, 0],
// //     transition: {
// //       duration: 2.6 + i * 0.4,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //       delay: 1.2 + i * 0.15,
// //     },
// //   }),
// // };

// // export default function StartConversationCard() {
// //   return (
// //     <>
// //       <style>{`
// //         .conv-container {
// //           width: 100%;
// //           max-width: 100%;
// //           background : transparent;
// //           overflow: hidden;
// //           cursor: pointer;
// //           margin: 20px auto;
// //           font-family: sans-serif;
// //           border-radius: 32px;
// //           box-shadow: 0 4px 20px rgba(0,0,0,0.03);
// //           border: 2.5px solid rgba(255, 255, 255, 0.6);
// //           outline: 2.5px solid rgba(200, 220, 230, 0.25);
// //         }

// //         .conv-visual {
// //           position: relative;
// //           height: 340px;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           background: white;
// //           overflow: visible;
// //         }

// //         /* ✅ Top glow - FULL coverage, no white gaps */
// //         .conv-glow-main {
// //           position: absolute;
// //           top: -2px;
// //           left: -2px;
// //           right: -2px;
// //           bottom: 0;
// //           opacity: 0;
// //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// //           pointer-events: none;
// //           background:
// //             linear-gradient(180deg, rgba(113, 215, 254, 0.30) 0%, rgba(193, 244, 246, 0.15) 40%, transparent 85%),
// //             radial-gradient(ellipse 120% 60% at 50% 0%, rgba(113, 215, 254, 0.35) 0%, transparent 70%),
// //             radial-gradient(ellipse 80% 50% at 50% 30%, rgba(193, 244, 246, 0.12) 0%, transparent 100%);
// //           z-index: 1;
// //         }

// //         /* ✅ Bottom shadow - soft, no line */
// //         .conv-glow-bottom {
// //           position: absolute;
// //           bottom: -60px;
// //           left: -40px;
// //           right: -40px;
// //           height: 160px;
// //           opacity: 0;
// //           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
// //           pointer-events: none;
// //           background: radial-gradient(ellipse 60% 80% at 50% 20%, rgba(168, 85, 247, 0.13) 0%, transparent 70%);
// //           filter: blur(12px);
// //           z-index: 1;
// //         }

// //         .conv-container:hover .conv-glow-main { opacity: 1; }
// //         .conv-container:hover .conv-glow-bottom { opacity: 1; }

// //         .avatar {
// //           width: 95px;
// //           height: 95px;
// //           border-radius: 50%;
// //           border: 4px solid white;
// //           box-shadow: 0 12px 30px rgba(0,0,0,0.1);
// //           object-fit: cover;
// //           position: absolute;
// //           z-index: 30;
// //         }

// //         .chat-bubble {
// //           position: absolute;
// //           background: white;
// //           padding: 14px 24px;
// //           border-radius: 20px;
// //           font-size: 15px;
// //           font-weight: 500;
// //           color: #1a1a1a;
// //           box-shadow: 0 10px 35px rgba(0,0,0,0.07);
// //           z-index: 25;
// //           white-space: nowrap;
// //           border: 1px solid rgba(0,0,0,0.02);
// //         }

// //         .star-element {
// //           position: absolute;
// //           z-index: 20;
// //           pointer-events: none;
// //         }

// //         .conv-footer { padding: 40px; }
// //         .conv-footer h2 { margin: 0; font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
// //         .conv-footer p { color: #666; margin-top: 10px; font-size: 18px; line-height: 1.5; }
// //       `}</style>

// //       <motion.div className="conv-container" initial="initial" whileHover="hover">
// //         <div className="conv-visual">
// //           {/* Glow layers */}
// //           <div className="conv-glow-main" />
// //           <div className="conv-glow-bottom" />

// //           {/* LEFT AVATAR */}
// //           <motion.img
// //             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
// //             className="avatar"
// //             variants={{
// //               initial: { x: -25, y: -10 },
// //               hover: { x: -160, y: -80, transition: smoothSpring },
// //             }}
// //           />

// //           {/* ⭐ Star near LEFT avatar TOP */}
// //           <motion.div
// //             className="star-element"
// //             style={{ left: "15%", top: "22%" }}
// //             variants={{
// //               initial: { scale: 0, opacity: 0 },
// //               hover: {
// //                 scale: 1,
// //                 opacity: 1,
// //                 transition: { delay: 0.5, type: "spring", stiffness: 200 },
// //               },
// //             }}
// //           >
// //             <motion.div variants={floatVariants} custom={0}>
// //               <svg width="26" height="26" viewBox="0 0 24 24">
// //                 <defs>
// //                   <linearGradient id="starLeft" x1="0%" y1="0%" x2="100%" y2="100%">
// //                     <stop offset="0%" stopColor="#71D7FE" />
// //                     <stop offset="100%" stopColor="#a855f7" />
// //                   </linearGradient>
// //                 </defs>
// //                 <path
// //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// //                   fill="url(#starLeft)"
// //                   filter="drop-shadow(0 2px 6px rgba(113, 215, 254, 0.5))"
// //                 />
// //               </svg>
// //             </motion.div>
// //           </motion.div>

// //           {/* RIGHT AVATAR */}
// //           <motion.img
// //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
// //             className="avatar"
// //             style={{ zIndex: 31 }}
// //             variants={{
// //               initial: { x: 25, y: 15 },
// //               hover: { x: 160, y: 60, transition: smoothSpring },
// //             }}
// //           />

// //           {/* ⭐ Star near RIGHT avatar BOTTOM */}
// //           <motion.div
// //             className="star-element"
// //             style={{ right: "12%", bottom: "20%" }}
// //             variants={{
// //               initial: { scale: 0, opacity: 0 },
// //               hover: {
// //                 scale: 1.1,
// //                 opacity: 1,
// //                 transition: { delay: 0.7, type: "spring", stiffness: 200 },
// //               },
// //             }}
// //           >
// //             <motion.div variants={floatVariants} custom={1}>
// //               <svg width="22" height="22" viewBox="0 0 24 24">
// //                 <defs>
// //                   <linearGradient id="starRight" x1="0%" y1="0%" x2="100%" y2="100%">
// //                     <stop offset="0%" stopColor="#a855f7" />
// //                     <stop offset="100%" stopColor="#71D7FE" />
// //                   </linearGradient>
// //                 </defs>
// //                 <path
// //                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
// //                   fill="url(#starRight)"
// //                   filter="drop-shadow(0 2px 6px rgba(168, 85, 247, 0.5))"
// //                 />
// //               </svg>
// //             </motion.div>
// //           </motion.div>

// //           {/* CHAT BUBBLE 1 - No float */}
// //           <motion.div
// //             className="chat-bubble"
// //             variants={{
// //               initial: { opacity: 0, scale: 0.7, x: -30, y: -20 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: 50,
// //                 y: -90,
// //                 transition: { ...smoothSpring, delay: 1 },
// //               },
// //             }}
// //           >
// //             Hey! I liked your profile.
// //           </motion.div>

// //           {/* CHAT BUBBLE 2 - No float */}
// //           <motion.div
// //             className="chat-bubble"
// //             variants={{
// //               initial: { opacity: 0, scale: 0.7, x: 30, y: 40 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: -60,
// //                 y: 80,
// //                 transition: { ...smoothSpring, delay: 1 },
// //               },
// //             }}
// //           >
// //             Thanks! Glad we matched.
// //           </motion.div>
// //         </div>

// //         <div className="conv-footer">
// //           <h2>Start a Conversation</h2>
// //           <p>Connect and chat easily once there&apos;s mutual interest.</p>
// //         </div>
// //       </motion.div>
// //     </>
// //   );
// // }


// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const smoothSpring = {
//   type: "spring",
//   stiffness: 100,
//   damping: 45,
//   mass: 1,
// };

// const floatVariants = {
//   initial: { y: 0 },
//   hover: (i) => ({
//     y: [0, -8, 0, 5, 0],
//     transition: {
//       duration: 2.6 + i * 0.4,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: 1.2 + i * 0.15,
//     },
//   }),
// };

// export default function StartConversationCard() {
//   return (
//     <>
//       <style>{`
//         .conv-container {
//           width: 100%;
//           max-width: 100%;
//           overflow: hidden;
//           cursor: pointer;
//           margin: 20px auto;
//           font-family: sans-serif;
//           border-radius: 32px;
//           box-shadow: 0 5px 20px rgba(0,0,0,0.03);

//           /* ✅ Beautiful permanent border - same on initial & hover */
//           border: 2.5px solid rgba(255, 255, 255, 0.6);
//           outline: 2.5px solid rgba(200, 220, 230, 0.25);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//         }

//         .conv-visual {
//           position: relative;
//           height: 340px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: transparent; /* No white here either */
//           overflow: visible;
//         }

//         /* Top glow - FULL coverage */
//         .conv-glow-main {
//           position: absolute;
//           top: -2px;
//           left: -2px;
//           right: -2px;
//           bottom: 0;
//           opacity: 0;
//           transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
//           pointer-events: none;
//           background:
//             linear-gradient(180deg, rgba(113, 215, 254, 0.33) 0%, rgba(193, 244, 246, 0.15) 45%, transparent 90%),
//             radial-gradient(ellipse 130% 65% at 50% 0%, rgba(113, 215, 254, 0.38) 0%, transparent 75%),
//             radial-gradient(ellipse 80% 50% at 50% 30%, rgba(193, 244, 246, 0.14) 0%, transparent 100%);
//           z-index: 1;
//         }

//         /* Bottom shadow - soft purple */
//         .conv-glow-bottom {
//           position: absolute;
//           bottom: -60px;
//           left: -40px;
//           right: -40px;
//           height: 160px;
//           opacity: 0;
//           transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1);
//           pointer-events: none;
//           background: radial-gradient(ellipse 60% 80% at 50% 20%, rgba(168, 85, 247, 0.14) 0%, transparent 70%);
//           filter: blur(12px);
//           z-index: 1;
//         }

//         .conv-container:hover .conv-glow-main,
//         .conv-container:hover .conv-glow-bottom {
//           opacity: 1;
//         }

//         .avatar {
//           width: 95px;
//           height: 95px;
//           border-radius: 50%;
//           border: 4px solid white;
//           box-shadow: 0 12px 30px rgba(0,0,0,0.1);
//           object-fit: cover;
//           position: absolute;
//           z-index: 30;
//         }

//         .chat-bubble {
//           position: absolute;
//           background: white;
//           padding: 14px 24px;
//           border-radius: 20px;
//           font-size: 15px;
//           font-weight: 500;
//           color: #1a1a1a;
//           box-shadow: 0 10px 35px rgba(0,0,0,0.07);
//           z-index: 25;
//           white-space: nowrap;
//           border: 1px solid rgba(0,0,0,0.02);
//         }

//         .star-element {
//           position: absolute;
//           z-index: 20;
//           pointer-events: none;
//         }

//         .conv-footer { 
//           padding: 40px; 
//           background: white;
//           border-radius: 0 0 32px 32px;
//         }
//         .conv-footer h2 { 
//           margin: 0; 
//           font-size: 32px; 
//           font-weight: 800; 
//           color: #111; 
//           letter-spacing: -0.5px; 
//         }
//         .conv-footer p { 
//           color: #666; 
//           margin-top: 10px; 
//           font-size: 18px; 
//           line-height: 1.5; 
//         }
//       `}</style>

//       <motion.div className="conv-container" initial="initial" whileHover="hover">
//         <div className="conv-visual">
//           <div className="conv-glow-main" />
//           <div className="conv-glow-bottom" />

//           {/* LEFT AVATAR */}
//           <motion.img
//             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
//             className="avatar"
//             variants={{
//               initial: { x: -25, y: -10 },
//               hover: { x: -160, y: -80, transition: smoothSpring },
//             }}
//           />

//           {/* Star - Top of Left Avatar */}
//           <motion.div
//             className="star-element"
//             style={{ left: "15%", top: "22%" }}
//             variants={{
//               initial: { scale: 0, opacity: 0 },
//               hover: { scale: 1, opacity: 1, transition: { delay: 0.5, type: "spring", stiffness: 200 } },
//             }}
//           >
//             <motion.div variants={floatVariants} custom={0}>
//               <svg width="26" height="26" viewBox="0 0 24 24">
//                 <defs>
//                   <linearGradient id="starLeft" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#71D7FE" />
//                     <stop offset="100%" stopColor="#a855f7" />
//                   </linearGradient>
//                 </defs>
//                 <path
//                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
//                   fill="url(#starLeft)"
//                   filter="drop-shadow(0 2px 6px rgba(113, 215, 254, 0.5))"
//                 />
//               </svg>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT AVATAR */}
//           <motion.img
//             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
//             className="avatar"
//             style={{ zIndex: 31 }}
//             variants={{
//               initial: { x: 25, y: 15 },
//               hover: { x: 160, y: 60, transition: smoothSpring },
//             }}
//           />

//           {/* Star - Bottom of Right Avatar */}
//           <motion.div
//             className="star-element"
//             style={{ right: "12%", bottom: "20%" }}
//             variants={{
//               initial: { scale: 0, opacity: 0 },
//               hover: { scale: 1.1, opacity: 1, transition: { delay: 0.7, type: "spring", stiffness: 200 } },
//             }}
//           >
//             <motion.div variants={floatVariants} custom={1}>
//               <svg width="22" height="22" viewBox="0 0 24 24">
//                 <defs>
//                   <linearGradient id="starRight" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#a855f7" />
//                     <stop offset="100%" stopColor="#71D7FE" />
//                   </linearGradient>
//                 </defs>
//                 <path
//                   d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
//                   fill="url(#starRight)"
//                   filter="drop-shadow(0 2px 6px rgba(168, 85, 247, 0.5))"
//                 />
//               </svg>
//             </motion.div>
//           </motion.div>

//           {/* Chat Bubbles - No floating */}
//           <motion.div className="chat-bubble" variants={{
//             initial: { opacity: 0, scale: 0.7, x: -30, y: -20 },
//             hover: { opacity: 1, scale: 1, x: 50, y: -90, transition: { ...smoothSpring, delay: 1 } },
//           }}>
//             Hey! I liked your profile.
//           </motion.div>

//           <motion.div className="chat-bubble" variants={{
//             initial: { opacity: 0, scale: 0.7, x: 30, y: 40 },
//             hover: { opacity: 1, scale: 1, x: -60, y: 80, transition: { ...smoothSpring, delay: 1 } },
//           }}>
//             Thanks! Glad we matched.
//           </motion.div>
//         </div>

//         {/* Footer stays white (text area) */}
//         <div className="conv-footer">
//           <h2>Start a Conversation</h2>
//           <p>Connect and chat easily once there&apos;s mutual interest.</p>
//         </div>
//       </motion.div>
//     </>
//   );
// }



// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 45,
  mass: 1,
};

const floatVariants = {
  initial: { y: 0 },
  hover: (i) => ({
    y: [0, -8, 0, 5, 0],
    transition: {
      duration: 2.6 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.2 + i * 0.15,
    },
  }),
};

export default function StartConversationCard() {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      style={{
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "32px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
        border: "2.5px solid rgba(255, 255, 255, 0.6)",
        outline: "2.5px solid rgba(200, 220, 230, 0.25)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "340px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
          flex: "1 1 auto",
        }}
      >
        {/* Top cyan glow */}
        <motion.div
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.65 }}
          style={{
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: 0,
            pointerEvents: "none",
            background:
               "radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%), radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%)",
            zIndex: 1,
          }}
        />
        {/* Bottom purple glow */}
        <motion.div
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.65 }}
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            right: "-40px",
            height: "160px",
            pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 80% at 50% 20%, rgba(168, 85, 247, 0.14) 0%, transparent 70%)",
            filter: "blur(12px)",
            zIndex: 1,
          }}
        />

        {/* Left Avatar */}
        <motion.img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
          alt="User 1"
          style={{
            width: "95px",
            height: "95px",
            borderRadius: "50%",
            border: "4px solid white",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            objectFit: "cover",
            position: "absolute",
            zIndex: 30,
          }}
          variants={{
            initial: { x: -25, y: -10 },
            hover: { x: -160, y: -80, transition: smoothSpring },
          }}
        />

        {/* Star Top-Left */}
        <motion.div
          style={{ position: "absolute", left: "15%", top: "22%", zIndex: 20, pointerEvents: "none" }}
          variants={{
            initial: { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1, transition: { delay: 0.5, type: "spring", stiffness: 200 } },
          }}
        >
          <motion.div variants={floatVariants} custom={0}>
            <svg width="26" height="26" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="starLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#71D7FE" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                fill="url(#starLeft)"
                filter="drop-shadow(0 2px 6px rgba(113, 215, 254, 0.5))"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Right Avatar */}
        <motion.img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="User 2"
          style={{
            width: "95px",
            height: "95px",
            borderRadius: "50%",
            border: "4px solid white",
            boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
            objectFit: "cover",
            position: "absolute",
            zIndex: 31,
          }}
          variants={{
            initial: { x: 25, y: 15 },
            hover: { x: 160, y: 60, transition: smoothSpring },
          }}
        />

        {/* Star Bottom-Right */}
        <motion.div
          style={{ position: "absolute", right: "12%", bottom: "20%", zIndex: 20, pointerEvents: "none" }}
          variants={{
            initial: { scale: 0, opacity: 0 },
            hover: { scale: 1.1, opacity: 1, transition: { delay: 0.7, type: "spring", stiffness: 200 } },
          }}
        >
          <motion.div variants={floatVariants} custom={1}>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="starRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#71D7FE" />
                </linearGradient>
              </defs>
              <path
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                fill="url(#starRight)"
                filter="drop-shadow(0 2px 6px rgba(168, 85, 247, 0.5))"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Chat Bubbles */}
        <motion.div
          style={{
            position: "absolute",
            background: "white",
            padding: "14px 24px",
            borderRadius: "20px",
            fontSize: "15px",
            fontWeight: 500,
            color: "#1a1a1a",
            boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
            zIndex: 25,
            whiteSpace: "nowrap",
            border: "1px solid rgba(0,0,0,0.02)",
          }}
          variants={{
            initial: { opacity: 0, scale: 0.7, x: -30, y: -20 },
            hover: { opacity: 1, scale: 1, x: 50, y: -90, transition: { ...smoothSpring, delay: 1 } },
          }}
        >
          Hey! I liked your profile.
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            background: "white",
            padding: "14px 24px",
            borderRadius: "20px",
            fontSize: "15px",
            fontWeight: 500,
            color: "#1a1a1a",
            boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
            zIndex: 25,
            whiteSpace: "nowrap",
            border: "1px solid rgba(0,0,0,0.02)",
          }}
          variants={{
            initial: { opacity: 0, scale: 0.7, x: 30, y: 40 },
            hover: { opacity: 1, scale: 1, x: -60, y: 80, transition: { ...smoothSpring, delay: 1 } },
          }}
        >
          Thanks! Glad we matched.
        </motion.div>
      </div>

      <div style={{ padding: "40px", background: "white", borderRadius: "0 0 32px 32px" }}>
        <h2 style={{ margin: 0, fontSize: "32px", fontWeight: 800, color: "#111", letterSpacing: "-0.5px" }}>
          Start a Conversation
        </h2>
        <p style={{ color: "#666", marginTop: "10px", fontSize: "18px", lineHeight: 1.5 }}>
          Connect and chat easily once there&apos;s mutual interest.
        </p>
      </div>
    </motion.div>
  );
}
