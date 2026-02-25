/* eslint-disable no-unused-vars */
// // // // /* eslint-disable no-unused-vars */
// // // // // import { motion } from "framer-motion";
// // // // // import { useState } from "react";
// // // // // import { Check, ArrowUp } from "lucide-react";

// // // // // // Profile Card Component for reusable styling
// // // // // const ProfileCard = ({ image, name, age, distance, isTop, rotation, xOffset, zIndex, isHovered }) => {
// // // // //   return (
// // // // //     <motion.div
// // // // //       style={{
// // // // //         position: "absolute",
// // // // //         width: "210px",
// // // // //         height: "300px",
// // // // //         left: "calc(50% - 105px)",
// // // // //         top: "calc(50% - 150px)",
// // // // //         borderRadius: "24px",
// // // // //         backgroundSize: "cover",
// // // // //         backgroundPosition: "center",
// // // // //         backgroundImage: `url(${image})`,
// // // // //         border: "4px solid white",
// // // // //         boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
// // // // //         display: "flex",
// // // // //         flexDirection: "column",
// // // // //         justifyContent: "space-between",
// // // // //         padding: "16px",
// // // // //         color: "white",
// // // // //         zIndex: zIndex,
// // // // //         overflow: "hidden"
// // // // //       }}
// // // // //       animate={{
// // // // //         rotate: isHovered ? rotation * 1.5 : rotation,
// // // // //         x: isHovered ? xOffset * 1.8 : xOffset,
// // // // //         y: isHovered ? -10 : 0,
// // // // //         scale: isHovered ? 1.05 : 1,
// // // // //       }}
// // // // //       transition={{
// // // // //         type: "spring",
// // // // //         stiffness: 260,
// // // // //         damping: 20
// // // // //       }}
// // // // //     >
// // // // //       {/* Story Bars */}
// // // // //       <div style={{ display: "flex", gap: "4px", width: "100%", opacity: 0.8 }}>
// // // // //         <div style={{ height: "3px", flex: 1, background: "white", borderRadius: "2px" }} />
// // // // //         <div style={{ height: "3px", flex: 1, background: "rgba(255,255,255,0.4)", borderRadius: "2px" }} />
// // // // //       </div>

// // // // //       {/* Keen Logo */}
// // // // //       {isTop && (
// // // // //         <div style={{
// // // // //           position: "absolute",
// // // // //           top: "25px",
// // // // //           left: "20px",
// // // // //           color: "#46d2d2",
// // // // //           fontSize: "24px",
// // // // //           fontWeight: "800",
// // // // //           fontStyle: "italic",
// // // // //           fontFamily: "'Dancing Script', cursive",
// // // // //           textShadow: "0 2px 4px rgba(0,0,0,0.2)"
// // // // //         }}>
// // // // //           Keen
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Info Overlay */}
// // // // //       <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
// // // // //         <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
// // // // //           <span style={{ fontWeight: 800, fontSize: "16px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
// // // // //             {name} ({age})
// // // // //           </span>
// // // // //           <div style={{ background: "#3b82f6", borderRadius: "50%", padding: "2px", width: "14px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
// // // // //             <Check size={10} color="white" strokeWidth={4} />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
// // // // //           <div style={{
// // // // //             background: "rgba(0,0,0,0.3)",
// // // // //             backdropFilter: "blur(8px)",
// // // // //             padding: "4px 10px",
// // // // //             borderRadius: "100px",
// // // // //             fontSize: "10px",
// // // // //             fontWeight: "700",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             gap: "4px"
// // // // //           }}>
// // // // //             <span role="img" aria-label="location">📍</span> {distance}
// // // // //           </div>

// // // // //           <div style={{
// // // // //             background: "rgba(255, 255, 255, 0.2)",
// // // // //             backdropFilter: "blur(8px)",
// // // // //             width: "24px",
// // // // //             height: "24px",
// // // // //             borderRadius: "50%",
// // // // //             display: "flex",
// // // // //             alignItems: "center",
// // // // //             justifyContent: "center"
// // // // //           }}>
// // // // //             <ArrowUp size={14} color="white" strokeWidth={3} />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default function ExploreMatchesCard() {
// // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // //   // Mock data matching the screenshot
// // // // //   const profiles = [
// // // // //     {
// // // // //       image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
// // // // //       name: "MONICA",
// // // // //       age: 24,
// // // // //       distance: "5 km"
// // // // //     },
// // // // //     {
// // // // //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
// // // // //       name: "ELIZA",
// // // // //       age: 22,
// // // // //       distance: "3 km"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <style>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
// // // // //       `}</style>
// // // // //       <motion.div
// // // // //         onMouseEnter={() => setIsHovered(true)}
// // // // //         onMouseLeave={() => setIsHovered(false)}
// // // // //         style={{
// // // // //           width: "100%",
// // // // //           background: "white",
// // // // //           borderRadius: "40px",
// // // // //           border: "1px solid #f0f0f0",
// // // // //           overflow: "hidden",
// // // // //           cursor: "pointer",
// // // // //           boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
// // // // //           position: "relative",
// // // // //           display: "flex",
// // // // //           flexDirection: "column"
// // // // //         }}
// // // // //       >
// // // // //         {/* Dynamic Visual Section */}
// // // // //         <div style={{
// // // // //           position: "relative",
// // // // //           height: "440px",
// // // // //           display: "flex",
// // // // //           justifyContent: "center",
// // // // //           alignItems: "center",
// // // // //           background: "radial-gradient(circle at 50% 100%, #b2eff2 0%, #ffffff 70%)",
// // // // //           overflow: "visible"
// // // // //         }}>
// // // // //           {/* Back Card */}
// // // // //           <ProfileCard
// // // // //             image={profiles[1].image}
// // // // //             name={profiles[1].name}
// // // // //             age={profiles[1].age}
// // // // //             distance={profiles[1].distance}
// // // // //             isTop={false}
// // // // //             rotation={-8}
// // // // //             xOffset={-20}
// // // // //             zIndex={10}
// // // // //             isHovered={isHovered}
// // // // //           />

// // // // //           {/* Front Card */}
// // // // //           <ProfileCard
// // // // //             image={profiles[0].image}
// // // // //             name={profiles[0].name}
// // // // //             age={profiles[0].age}
// // // // //             distance={profiles[0].distance}
// // // // //             isTop={true}
// // // // //             rotation={6}
// // // // //             xOffset={30}
// // // // //             zIndex={20}
// // // // //             isHovered={isHovered}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Content Section */}
// // // // //         <div style={{ padding: "40px", background: "white" }}>
// // // // //           <h2 style={{
// // // // //             margin: 0,
// // // // //             fontSize: "32px",
// // // // //             fontWeight: "800",
// // // // //             color: "#1a1a1a",
// // // // //             letterSpacing: "-0.5px"
// // // // //           }}>
// // // // //             Explore Matches
// // // // //           </h2>
// // // // //           <p style={{
// // // // //             color: "#666",
// // // // //             marginTop: "12px",
// // // // //             fontSize: "17px",
// // // // //             lineHeight: 1.6,
// // // // //             maxWidth: "90%"
// // // // //           }}>
// // // // //             See profiles matched based on your preferences and location in Australia.
// // // // //           </p>
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { useState, useEffect } from "react";

// // // // const images = [
// // // //   { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA (24)", dist: "5 km" },
// // // //   { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA (22)", dist: "3 km" },
// // // //   { id: 3, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500", name: "SARA (25)", dist: "8 km" },
// // // // ];

// // // // export default function ExploreMatchesCard() {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   useEffect(() => {
// // // //     let interval;
// // // //     if (isHovered) {
// // // //       interval = setInterval(() => {
// // // //         setCurrentIndex((prev) => (prev + 1) % images.length);
// // // //       }, 2200);
// // // //     }
// // // //     return () => {
// // // //       if (interval) clearInterval(interval);
// // // //     };
// // // //   }, [isHovered]);

// // // //   const nextIndex = (currentIndex + 1) % images.length;

// // // //   return (
// // // //     <motion.div
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //       style={{
// // // //         width: "100%",
// // // //         borderRadius: "32px",
// // // //         overflow: "hidden",
// // // //         cursor: "pointer",
// // // //         position: "relative",
// // // //         boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
// // // //         border: "2.5px solid rgba(255, 255, 255, 0.6)",
// // // //         outline: "2.5px solid rgba(200, 220, 230, 0.25)",
// // // //         backdropFilter: "blur(10px)",
// // // //         WebkitBackdropFilter: "blur(10px)",
// // // //         height: "100%",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //       }}
// // // //     >
// // // //       <div
// // // //         style={{
// // // //           position: "relative",
// // // //           height: "420px",
// // // //           display: "flex",
// // // //           justifyContent: "center",
// // // //           alignItems: "center",
// // // //           background: "white",
// // // //           overflow: "visible",
// // // //           flex: "1 1 auto",
// // // //         }}
// // // //       >
// // // //         {/* Background glow */}
// // // //         <motion.div
// // // //           animate={{ opacity: isHovered ? 1 : 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           style={{
// // // //             position: "absolute",
// // // //             inset: 0,
// // // //                background:
// // // //               "radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%), radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%)",
// // // //             // background: "radial-gradient(circle at 75% 60%, rgba(193, 244, 246, 0.9) 50%, rgba(255, 255, 255, 0) 110%)",
// // // //             zIndex: 1,
// // // //           }}
// // // //         />

// // // //         {/* Back card */}
// // // //         <motion.div
// // // //           key={`back-${nextIndex}`}
// // // //           style={{
// // // //             position: "absolute",
// // // //             width: "210px",
// // // //             height: "300px",
// // // //             borderRadius: "24px",
// // // //             backgroundSize: "cover",
// // // //             backgroundPosition: "center",
// // // //             backgroundImage: `url(${images[nextIndex].url})`,
// // // //             border: "4px solid white",
// // // //             boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
// // // //             zIndex: 5,
// // // //           }}
// // // //           animate={{
// // // //             scale: isHovered ? 0.9 : 0.85,
// // // //             opacity: isHovered ? 0.8 : 0.5,
// // // //           }}
// // // //           transition={{ duration: 0.5 }}
// // // //         />

// // // //         {/* Front card */}
// // // //         <AnimatePresence mode="wait">
// // // //           <motion.div
// // // //             key={`front-${currentIndex}`}
// // // //             style={{
// // // //               position: "absolute",
// // // //               width: "210px",
// // // //               height: "300px",
// // // //               borderRadius: "24px",
// // // //               backgroundSize: "cover",
// // // //               backgroundPosition: "center",
// // // //               backgroundImage: `url(${images[currentIndex].url})`,
// // // //               border: "4px solid white",
// // // //               boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
// // // //               display: "flex",
// // // //               flexDirection: "column",
// // // //               justifyContent: "flex-end",
// // // //               padding: "15px",
// // // //               color: "white",
// // // //               zIndex: 20,
// // // //             }}
// // // //             initial={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
// // // //             animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
// // // //             exit={{
// // // //               x: 350,
// // // //               rotate: 25,
// // // //               opacity: 0,
// // // //               transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] },
// // // //             }}
// // // //           >
// // // //             <div
// // // //               style={{
// // // //                 position: "absolute",
// // // //                 top: "15px",
// // // //                 left: "15px",
// // // //                 background: "rgba(255, 255, 255, 0.2)",
// // // //                 backdropFilter: "blur(10px)",
// // // //                 color: "#C1F4F6",
// // // //                 padding: "4px 12px",
// // // //                 borderRadius: "100px",
// // // //                 fontWeight: 800,
// // // //                 fontStyle: "italic",
// // // //                 fontSize: "14px",
// // // //               }}
// // // //             >
// // // //               Keen
// // // //             </div>
// // // //             <div style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
// // // //               <div style={{ fontWeight: 800, fontSize: "15px" }}>{images[currentIndex].name}</div>
// // // //               <div style={{ fontSize: "11px", opacity: 0.9 }}>:round_pushpin: {images[currentIndex].dist}</div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </AnimatePresence>
// // // //       </div>

// // // //       <div style={{ padding: "40px", position: "relative", zIndex: 10, background: "white" }}>
// // // //         <h2 style={{ margin: 0, fontSize: "32px", fontWeight: 800, color: "#111" }}>Explore Matches</h2>
// // // //         <p style={{ color: "#666", marginTop: "10px", fontSize: "17px", lineHeight: 1.5 }}>
// // // //           See profiles matched based on your preferences and location in Australia.
// // // //         </p>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // }


// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useState, useEffect } from "react";

// // // const images = [
// // //   { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA", age: 24, dist: "5 km" },
// // //   { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA", age: 22, dist: "3 km" },
// // //   { id: 3, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500", name: "SARA", age: 25, dist: "8 km" },
// // // ];

// // // export default function ExploreMatchesCard() {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   const [isExiting, setIsExiting] = useState(false);

// // //   useEffect(() => {
// // //     let interval;
// // //     if (isHovered) {
// // //       interval = setInterval(() => {
// // //         if (!isExiting) {
// // //           setIsExiting(true);
// // //           setTimeout(() => {
// // //             setCurrentIndex((prev) => (prev + 1) % images.length);
// // //             setIsExiting(false);
// // //           }, 700); // exit animation duration
// // //         }
// // //       }, 2200);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isHovered, isExiting]);

// // //   const nextIndex = (currentIndex + 1) % images.length;

// // //   return (
// // //     <motion.div
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //       style={{
// // //         width: "100%",
// // //         borderRadius: "32px",
// // //         overflow: "hidden",
// // //         cursor: "pointer",
// // //         position: "relative",
// // //         boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
// // //         border: "2.5px solid rgba(255, 255, 255, 0.6)",
// // //         backdropFilter: "blur(10px)",
// // //         WebkitBackdropFilter: "blur(10px)",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //       }}
// // //     >
// // //       {/* Image Area */}
// // //       <div
// // //         style={{
// // //           position: "relative",
// // //           height: "420px",
// // //           display: "flex",
// // //           justifyContent: "center",
// // //           alignItems: "center",
// // //           background: "white",
// // //           overflow: "hidden",
// // //         }}
// // //       >
// // //         {/* Background glow on hover */}
// // //         <motion.div
// // //           animate={{ opacity: isHovered ? 1 : 0 }}
// // //           transition={{ duration: 0.5 }}
// // //           style={{
// // //             position: "absolute",
// // //             inset: 0,
// // //             background:
// // //               "radial-gradient(ellipse 120% 60% at 50% 10%, rgba(113, 215, 254, 0.45) 0%, transparent 70%)",
// // //             zIndex: 1,
// // //           }}
// // //         />

// // //         {/* ── BACK CARD ── */}
// // //         <motion.div
// // //           key={`back-${nextIndex}`}
// // //           style={{
// // //             position: "absolute",
// // //             width: "210px",
// // //             height: "300px",
// // //             borderRadius: "20px",
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //             backgroundImage: `url(${images[nextIndex].url})`,
// // //             border: "4px solid white",
// // //             boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
// // //             zIndex: 5,
// // //             originX: "50%",
// // //             originY: "100%",
// // //           }}
// // //           animate={
// // //             isHovered
// // //               ? {
// // //                   // Slightly left & behind, small left tilt
// // //                   x: -30,
// // //                   y: 10,
// // //                   rotate: -6,
// // //                   scale: 0.88,
// // //                   opacity: 1,
// // //                 }
// // //               : {
// // //                   x: 0,
// // //                   y: 0,
// // //                   rotate: 0,
// // //                   scale: 0.82,
// // //                   opacity: 0.5,
// // //                 }
// // //           }
// // //           transition={{ duration: 0.5, ease: "easeOut" }}
// // //         />

// // //         {/* ── FRONT CARD ── */}
// // //         <AnimatePresence mode="wait">
// // //           <motion.div
// // //             key={`front-${currentIndex}`}
// // //             style={{
// // //               position: "absolute",
// // //               width: "210px",
// // //               height: "300px",
// // //               borderRadius: "20px",
// // //               backgroundSize: "cover",
// // //               backgroundPosition: "center",
// // //               backgroundImage: `url(${images[currentIndex].url})`,
// // //               border: "4px solid white",
// // //               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               justifyContent: "flex-end",
// // //               padding: "12px",
// // //               color: "white",
// // //               zIndex: 20,
// // //               originX: "50%",
// // //               originY: "100%",
// // //             }}
// // //             // Enter: come in straight
// // //             initial={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
// // //             // While shown: on hover tilt right slightly
// // //             animate={
// // //               isHovered
// // //                 ? { x: 20, rotate: 8, scale: 1, opacity: 1 }
// // //                 : { x: 0, rotate: 0, scale: 1, opacity: 1 }
// // //             }
// // //             // Exit: fly off right with strong rotation
// // //             exit={{
// // //               x: 380,
// // //               y: -20,
// // //               rotate: 30,
// // //               opacity: 0,
// // //               transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
// // //             }}
// // //             transition={{ duration: 0.45, ease: "easeOut" }}
// // //           >
// // //             {/* Keen badge */}
// // //             <div
// // //               style={{
// // //                 position: "absolute",
// // //                 top: "14px",
// // //                 left: "14px",
// // //                 background: "rgba(255,255,255,0.15)",
// // //                 backdropFilter: "blur(8px)",
// // //                 WebkitBackdropFilter: "blur(8px)",
// // //                 color: "#71D7FE",
// // //                 padding: "4px 14px",
// // //                 borderRadius: "100px",
// // //                 fontWeight: 800,
// // //                 fontStyle: "italic",
// // //                 fontSize: "15px",
// // //                 border: "1px solid rgba(255,255,255,0.3)",
// // //               }}
// // //             >
// // //               Keen
// // //             </div>

// // //             {/* Gradient overlay at bottom */}
// // //             <div
// // //               style={{
// // //                 position: "absolute",
// // //                 bottom: 0,
// // //                 left: 0,
// // //                 right: 0,
// // //                 height: "120px",
// // //                 borderRadius: "0 0 16px 16px",
// // //                 background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
// // //               }}
// // //             />

// // //             {/* Name & distance */}
// // //             <div style={{ position: "relative", zIndex: 2 }}>
// // //               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // //                 <span style={{ fontWeight: 800, fontSize: "15px", letterSpacing: "0.5px" }}>
// // //                   {images[currentIndex].name}
// // //                 </span>
// // //                 <span style={{ fontWeight: 400, fontSize: "13px", opacity: 0.9 }}>
// // //                   ({images[currentIndex].age})
// // //                 </span>
// // //                 {/* Online dot */}
// // //                 <span style={{
// // //                   width: "8px", height: "8px", borderRadius: "50%",
// // //                   background: "#71D7FE", display: "inline-block", marginLeft: "2px"
// // //                 }} />
// // //               </div>
// // //               <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "3px", display: "flex", alignItems: "center", gap: "4px" }}>
// // //                 <span>📍</span> {images[currentIndex].dist}
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </AnimatePresence>
// // //       </div>

// // //       {/* Text Section */}
// // //       <div style={{ padding: "36px 40px", background: "white", position: "relative", zIndex: 10 }}>
// // //         <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#111" }}>
// // //           Explore Matches
// // //         </h2>
// // //         <p style={{ color: "#666", marginTop: "10px", fontSize: "16px", lineHeight: 1.6 }}>
// // //           See profiles matched based on your preferences and location in Australia.
// // //         </p>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }




// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";

// // const images = [
// //   { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA", age: 24, dist: "5 km" },
// //   { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA", age: 22, dist: "3 km" },
// //   { id: 3, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500", name: "SARA", age: 25, dist: "8 km" },
// // ];

// // export default function ExploreMatchesCard() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isHovered, setIsHovered] = useState(false);

// //   useEffect(() => {
// //     let interval;
// //     if (isHovered) {
// //       interval = setInterval(() => {
// //         setCurrentIndex((prev) => (prev + 1) % images.length);
// //       }, 2500);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isHovered]);

// //   const nextIndex = (currentIndex + 1) % images.length;

// //   return (
// //     <motion.div
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       style={{
// //         width: "100%",
// //         borderRadius: "32px",
// //         overflow: "hidden",
// //         cursor: "pointer",
// //         position: "relative",
// //         border: "2.5px solid rgba(255,255,255,0.6)",
// //         backdropFilter: "blur(10px)",
// //         WebkitBackdropFilter: "blur(10px)",
// //         display: "flex",
// //         flexDirection: "column",
// //       }}
// //     >
// //       {/* Image Area */}
// //       <div
// //         style={{
// //           position: "relative",
// //           height: "420px",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           background: "white",
// //           overflow: "hidden",
// //         }}
// //       >
// //         {/* Background glow */}
// //         <motion.div
// //           animate={{ opacity: isHovered ? 1 : 0 }}
// //           transition={{ duration: 0.5 }}
// //           style={{
// //             position: "absolute",
// //             inset: 0,
// //             background:
// //               "radial-gradient(ellipse 120% 60% at 50% 10%, rgba(113,215,254,0.45) 0%, transparent 70%)",
// //             zIndex: 1,
// //           }}
// //         />

// //         {/* ── BACK CARD — always straight (0 deg), just scale down ── */}
// //         <motion.div
// //           key={`back-${nextIndex}`}
// //           style={{
// //             position: "absolute",
// //             width: "210px",
// //             height: "300px",
// //             borderRadius: "20px",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             backgroundImage: `url(${images[nextIndex].url})`,
// //             border: "4px solid white",
// //             boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
// //             zIndex: 5,
// //           }}
// //           animate={
// //             isHovered
// //               ? { scale: 0.9, opacity: 0.9, y: 10 }
// //               : { scale: 0.82, opacity: 0.45, y: 14 }
// //           }
// //           transition={{ duration: 0.5, ease: "easeOut" }}
// //         />

// //         {/* ── FRONT CARD ── */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={`front-${currentIndex}`}
// //             style={{
// //               position: "absolute",
// //               width: "210px",
// //               height: "300px",
// //               borderRadius: "20px",
// //               backgroundSize: "cover",
// //               backgroundPosition: "center",
// //               backgroundImage: `url(${images[currentIndex].url})`,
// //               border: "4px solid white",
// //               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "flex-end",
// //               padding: "12px",
// //               color: "white",
// //               zIndex: 20,
// //             }}
// //             // Enter straight
// //             initial={{ x: 0, rotate: 0, opacity: 1, scale: 1 }}
// //             // Hover: tilt right slightly
// //             animate={
// //               isHovered
// //                 ? { rotate: 16, x: 100, scale: 1, opacity: 1 }
// //                 : { rotate: 0, x: 0, scale: 1, opacity: 1 }
// //             }
// //             // Exit: fly off to right
// //             exit={{
// //               x: 200,
// //               y: -10,
// //               rotate: 28,
// //               opacity: 0,
// //               transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
// //             }}
// //             transition={{ duration: 0.4, ease: "easeOut" }}
// //           >
// //             {/* Keen badge */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 top: "14px",
// //                 left: "14px",
// //                 background: "rgba(255,255,255,0.15)",
// //                 backdropFilter: "blur(8px)",
// //                 WebkitBackdropFilter: "blur(8px)",
// //                 color: "#71D7FE",
// //                 padding: "4px 14px",
// //                 borderRadius: "100px",
// //                 fontWeight: 800,
// //                 fontStyle: "italic",
// //                 fontSize: "15px",
// //                 border: "1px solid rgba(255,255,255,0.25)",
// //               }}
// //             >
// //               Keen
// //             </div>

// //             {/* Bottom gradient */}
// //             <div
// //               style={{
// //                 position: "absolute",
// //                 bottom: 0, left: 0, right: 0,
// //                 height: "120px",
// //                 borderRadius: "0 0 16px 16px",
// //                 background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
// //               }}
// //             />

// //             {/* Name & distance */}
// //             <div style={{ position: "relative", zIndex: 2 }}>
// //               <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
// //                 <span style={{ fontWeight: 800, fontSize: "15px" }}>
// //                   {images[currentIndex].name}
// //                 </span>
// //                 <span style={{ fontWeight: 400, fontSize: "13px", opacity: 0.9 }}>
// //                   ({images[currentIndex].age})
// //                 </span>
// //                 <span style={{
// //                   width: "8px", height: "8px", borderRadius: "50%",
// //                   background: "#71D7FE", display: "inline-block",
// //                 }} />
// //               </div>
// //               <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "3px" }}>
// //                 📍 {images[currentIndex].dist}
// //               </div>
// //             </div>
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>

// //       {/* Text Section */}
// //       <div style={{ padding: "36px 40px", background: "white", zIndex: 10 }}>
// //         <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#111" }}>
// //           Explore Matches
// //         </h2>
// //         <p style={{ color: "#666", marginTop: "10px", fontSize: "16px", lineHeight: 1.6 }}>
// //           See profiles matched based on your preferences and location in Australia.
// //         </p>
// //       </div>
// //     </motion.div>
// //   );
// // }


// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const images = [
//   { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA", age: 24, dist: "5 km" },
//   { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA", age: 22, dist: "3 km" },
// ];

// export default function ExploreMatchesCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const nextIndex = (currentIndex + 1) % images.length;

//   useEffect(() => {
//     let interval;
//     if (isHovered) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 3500);
//     }
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <motion.div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         width: "100%",
//         borderRadius: "32px",
//         overflow: "hidden",
//         cursor: "pointer",
//         position: "relative",
//         border: "2.5px solid rgba(255,255,255,0.6)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           height: "420px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "white",
//           overflow: "hidden",
//         }}
//       >
//         {/* Background glow */}
//         <motion.div
//           animate={{ opacity: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "radial-gradient(ellipse 120% 60% at 50% 10%, rgba(113,215,254,0.45) 0%, transparent 70%)",
//             zIndex: 1,
//           }}
//         />

//         {/* ── BACK CARD — hamesha seedha, peche, zIndex 5 ── */}
//         <motion.div
//           style={{
//             position: "absolute",
//             width: "210px",
//             height: "300px",
//             borderRadius: "20px",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundImage: `url(${images[nextIndex].url})`,
//             border: "4px solid white",
//             boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
//             zIndex: 5,
//             rotate: 0,
//           }}
//           animate={
//             isHovered
//               ? { scale: 0.9, opacity: 0.85, y: 8 }
//               : { scale: 0.82, opacity: 0.4, y: 14 }
//           }
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         />

//         {/* ── FRONT CARD — ye right side fly karega ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             style={{
//               position: "absolute",
//               width: "210px",
//               height: "290px",
//               borderRadius: "20px",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundImage: `url(${images[currentIndex].url})`,
//               border: "4px solid white",
//               boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-end",
//               padding: "12px",
//               color: "white",
//               zIndex: 20,
//             }}
//             // Naya card seedha aata hai, koi flash nahi
//             initial={{ rotate: 0, x: 0, opacity: 1, scale: 1 }}
//             // Hover pe thoda right tilt
//             animate={
//               isHovered
//                 ? { rotate: 16, x: 100, scale: 1, opacity: 1 }
//                 : { rotate: 0, x: 0, scale: 1, opacity: 1 }
//             }
//             // EXIT: sirf front card right side fly kare
//             exit={{
//               x: 200,
//               y: -10,
//               rotate: 28,
//               opacity: 0,
//               transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] },
//             }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//             {/* Keen badge */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "14px",
//                 left: "14px",
//                 background: "rgba(255,255,255,0.15)",
//                 backdropFilter: "blur(8px)",
//                 WebkitBackdropFilter: "blur(8px)",
//                 color: "#71D7FE",
//                 padding: "4px 14px",
//                 borderRadius: "100px",
//                 fontWeight: 800,
//                 fontStyle: "italic",
//                 fontSize: "15px",
//                 border: "1px solid rgba(255,255,255,0.25)",
//               }}
//             >
//               Keen
//             </div>

//             {/* Bottom gradient */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0, left: 0, right: 0,
//                 height: "120px",
//                 borderRadius: "0 0 16px 16px",
//                 background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
//               }}
//             />

//             {/* Name & distance */}
//             <div style={{ position: "relative", zIndex: 2 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//                 <span style={{ fontWeight: 800, fontSize: "15px" }}>
//                   {images[currentIndex].name}
//                 </span>
//                 <span style={{ fontWeight: 400, fontSize: "13px", opacity: 0.9 }}>
//                   ({images[currentIndex].age})
//                 </span>
//                 <span style={{
//                   width: "8px", height: "8px", borderRadius: "50%",
//                   background: "#71D7FE", display: "inline-block",
//                 }} />
//               </div>
//               <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "3px" }}>
//                 📍 {images[currentIndex].dist}
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Text Section */}
//       <div style={{ padding: "36px 40px", background: "white", zIndex: 10 }}>
//         <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#111" }}>
//           Explore Matches
//         </h2>
//         <p style={{ color: "#666", marginTop: "10px", fontSize: "16px", lineHeight: 1.6 }}>
//           See profiles matched based on your preferences and location in Australia.
//         </p>
//       </div>
//     </motion.div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// const images = [
//   { id: 1, url: "/Frame 17.png", name: "MONICA", age: 24, dist: "5 km" },
//   { id: 2, url: "/Frame 17 (1).png", name: "ELIZA", age: 22, dist: "3 km" },
// ];
const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA", age: 24, dist: "5 km" },
  { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA", age: 22, dist: "3 km" },
];

export default function ExploreMatchesCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const nextIndex = (currentIndex + 1) % images.length;

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        // Exit phase shuru karo
        setIsExiting(true);

        // Front card exit duration ke baad index change karo (850ms)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsExiting(false);
        }, 850);

      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        borderRadius: "32px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        border: "2.5px solid rgba(255,255,255,0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "420px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 120% 60% at 50% 10%, rgba(113,215,254,0.45) 0%, transparent 70%)",
            zIndex: 1,
          }}
        />

        {/* ── BACK CARD ──
            isExiting=true hone par ye scale up hoga smoothly
            taaki jab front hat jaye tab ye already sahi position par ho — no blink
        */}
        <motion.div
          style={{
            position: "absolute",
            width: "210px",
            height: "300px",
            borderRadius: "20px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${images[nextIndex].url})`,
            border: "4px solid white",
            boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
            zIndex: 5,
          }}
          animate={
            isExiting
              ? { scale: 1, opacity: 1, y: 0, rotate: 0 }      // front exit ke saath saath ye aage aa rha hai
              : isHovered
              ? { scale: 0.9, opacity: 0.85, y: 8, rotate: 0 }  // normal hover
              : { scale: 0.82, opacity: 0.4, y: 14, rotate: 0 } // no hover
          }
          transition={{ duration: 0.85, ease: "easeOut" }}
        />

        {/* ── FRONT CARD ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            style={{
              position: "absolute",
              width: "210px",
              height: "300px",
              borderRadius: "20px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${images[currentIndex].url})`,
              border: "4px solid white",
              boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "12px",
              color: "white",
              zIndex: 20,
            }}
            initial={{ rotate: 0, x: 0, opacity: 1, scale: 1 }}
            animate={
              isHovered
                ? { rotate: 16, x: 100, scale: 1, opacity: 1 }
                : { rotate: 0, x: 0, scale: 1, opacity: 1 }
            }
            exit={{
              x: 200,
              y: -1,
              rotate: 28,
              opacity: 0,
              transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Keen badge */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                color: "#71D7FE",
                padding: "4px 14px",
                borderRadius: "100px",
                fontWeight: 800,
                fontStyle: "italic",
                fontSize: "15px",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Keen
            </div>

            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "120px",
                borderRadius: "0 0 16px 16px",
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
              }}
            />

            {/* Name & distance */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ fontWeight: 800, fontSize: "15px" }}>
                  {images[currentIndex].name}
                </span>
                <span style={{ fontWeight: 400, fontSize: "13px", opacity: 0.9 }}>
                  ({images[currentIndex].age})
                </span>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#71D7FE", display: "inline-block",
                }} />
              </div>
              <div style={{ fontSize: "11px", opacity: 0.85, marginTop: "3px" }}>
                📍 {images[currentIndex].dist}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Section */}
      <div style={{ padding: "36px 40px", background: "white", zIndex: 10 }}>
        <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#111" }}>
          Explore Matches
        </h2>
        <p style={{ color: "#666", marginTop: "10px", fontSize: "16px", lineHeight: 1.6 }}>
          See profiles matched based on your preferences and location in Australia.
        </p>
      </div>
    </motion.div>
  );
}