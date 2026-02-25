<<<<<<< Updated upstream
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, ArrowUp } from "lucide-react";

// Mock data matching the screenshot
const profiles = [
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    name: "MONICA",
    age: 24,
    distance: "5 km"
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    name: "ELIZA",
    age: 22,
    distance: "3 km"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    name: "SARA",
    age: 25,
    distance: "8 km"
  }
];

// Profile Card Component
const ProfileCard = ({ profile, isTop, index, isHovered }) => {
  // Animation settings
  const rotation = isTop ? 6 : -8;
  const xOffset = isTop ? 30 : -20;
=======
// // // eslint-disable-next-line no-unused-vars
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect } from "react";

// // const images = [
// //   "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400", // Monica
// //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", // Eliza
// //   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"  // Profile 3
// // ];

// // export default function ExploreMatchesCard() {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [stack, setStack] = useState([0, 1, 2]);

// //   useEffect(() => {
// //     let interval;
// //     if (isHovered) {
// //       interval = setInterval(() => {
// //         setStack((prev) => {
// //           const newStack = [...prev];
// //           const top = newStack.shift();
// //           newStack.push(top);
// //           return newStack;
// //         });
// //       }, 2000); // 2 seconds ka gap taaki animation relax lage
// //     }
// //     return () => clearInterval(interval);
// //   }, [isHovered]);

// //   return (
// //     <>
// //       <style>{`
// //         .explore-container {
// //           width: 100%;
// //           max-width: 480px;
// //           background: white;
// //           border-radius: 40px;
// //           border: 1px solid #ededed;
// //           overflow: hidden;
// //           cursor: pointer;
// //           box-shadow: 0 4px 24px rgba(0,0,0,0.02);
// //         }
// //         .explore-visual {
// //           position: relative;
// //           height: 400px;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           background: white;
// //         }
// //         .explore-bg-glow {
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(circle at 50% 35%, rgba(193, 244, 246, 0.9) 0%, rgba(255, 255, 255, 0) 80%);
// //           opacity: 0;
// //           transition: opacity 0.6s ease;
// //           z-index: 1;
// //         }
// //         .explore-container:hover .explore-bg-glow { opacity: 1; }

// //         .profile-stack-card {
// //           position: absolute;
// //           width: 210px;
// //           height: 290px;
// //           border-radius: 24px;
// //           background-size: cover;
// //           background-position: center;
// //           box-shadow: 0 15px 40px rgba(0,0,0,0.12);
// //           border: 4px solid white;
// //         }
// //         .keen-badge {
// //           position: absolute;
// //           top: 15px;
// //           left: 15px;
// //           background: rgba(255,255,255,0.25);
// //           backdrop-filter: blur(8px);
// //           color: #111;
// //           padding: 4px 14px;
// //           border-radius: 100px;
// //           font-weight: 800;
// //           font-style: italic;
// //           font-size: 13px;
// //           border: 1px solid rgba(255,255,255,0.4);
// //         }
// //         .explore-footer { padding: 40px; }
// //         .explore-footer h2 { margin: 0; font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
// //         .explore-footer p { color: #666; margin-top: 10px; font-size: 17px; line-height: 1.5; }
// //       `}</style>

// //       <motion.div
// //         className="explore-container"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         <div className="explore-visual">
// //           <div className="explore-bg-glow" />

// //           <AnimatePresence mode="popLayout">
// //             {stack.slice(0, 3).map((imgIndex, i) => {
// //               const isTop = i === 0;
// //               return (
// //                 <motion.div
// //                   key={imgIndex}
// //                   className="profile-stack-card"
// //                   style={{
// //                     backgroundImage: `url(${images[imgIndex]})`,
// //                     zIndex: 10 - i
// //                   }}
// //                   layout
// //                   initial={{ opacity: 0, scale: 0.8, x: 0 }}
// //                   animate={{
// //                     opacity: 1,
// //                     scale: 1 - i * 0.06,
// //                     x: isHovered ? (isTop ? 0 : 35 * i) : 0,
// //                     y: isHovered ? (isTop ? 0 : -15 * i) : 0,
// //                     rotate: isHovered ? (isTop ? 0 : 6 * i) : 0,
// //                   }}
// //                   exit={{
// //                     x: 250, // Pehle Right turn hoga
// //                     rotate: 25, // Turn angle
// //                     opacity: 0,
// //                     scale: 0.9,
// //                     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
// //                   }}
// //                   transition={{
// //                     type: "spring",
// //                     stiffness: 100,
// //                     damping: 15
// //                   }}
// //                 >
// //                   {isTop && <div className="keen-badge">Keen</div>}
// //                 </motion.div>
// //               );
// //             })}
// //           </AnimatePresence>
// //         </div>

// //         <div className="explore-footer">
// //           <h2>Explore Matches</h2>
// //           <p>See profiles matched based on your preferences and location in Australia.</p>
// //         </div>
// //       </motion.div>
// //     </>
// //   );
// // }

// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const images = [
//   { id: 1, url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500", name: "MONICA (24)", dist: "5 km" },
//   { id: 2, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", name: "ELIZA (22)", dist: "3 km" },
//   { id: 3, url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500", name: "SARA (25)", dist: "8 km" }
// ];

// export default function ExploreMatchesCard() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isHovered) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//       }, 2200); // Har 2.2 sec mein card change hoga
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isHovered]);

//   // Peeche wala card nikalne ke liye logic
//   const nextIndex = (currentIndex + 1) % images.length;

//   return (
//     <>
//       <style>{`
//         .explore-container {
//           width: 100%;
//           max-width: 100%;
//           background: white;
//           border-radius: 40px;
//           overflow: hidden;
//           cursor: pointer;
//           position: relative;
//           box-shadow: 0 4px 24px rgba(0,0,0,0.02);
//         }

//         .explore-visual {
//           position: relative;
//           height: 420px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: white;
//           overflow: visible;
//         }

//         .explore-bg-glow {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(circle at 75% 60%, rgba(193, 244, 246, 0.9) 50%, rgba(255, 255, 255, 0) 110%);
//           opacity: 0;
//           transition: opacity 0.6s ease;
//           z-index: 1;
//         }
//         .explore-container:hover .explore-bg-glow { opacity: 1; }

//         .profile-card {
//           position: absolute;
//           width: 210px;
//           height: 300px;
//           border-radius: 24px;
//           background-size: cover;
//           background-position: center;
//           border: 4px solid white;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.1);
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           padding: 15px;
//           color: white;
//           font-family: sans-serif;
//         }

//         .keen-badge {
//           position: absolute;
//           top: 15px;
//           left: 15px;
//           background: rgba(255, 255, 255, 0.2);
//           backdrop-filter: blur(10px);
//           color: #c1f4f6;
//           padding: 4px 12px;
//           border-radius: 100px;
//           font-weight: 800;
//           font-style: italic;
//           font-size: 14px;
//         }

//         .card-meta { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }

//         .explore-footer { padding: 40px; position: relative; z-index: 10; background: white; }
//         .explore-footer h2 { margin: 0; font-size: 32px; font-weight: 800; color: #111; }
//         .explore-footer p { color: #666; margin-top: 10px; font-size: 17px; line-height: 1.5; }
//       `}</style>

//       <motion.div
//         className="explore-container"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="explore-visual">
//           <div className="explore-bg-glow" />

//           {/* BACK CARD - Jo peeche wait kar raha hai */}
//           <motion.div
//             key={`back-${nextIndex}`}
//             className="profile-card"
//             style={{
//               backgroundImage: `url(${images[nextIndex].url})`,
//               zIndex: 5
//             }}
//             animate={{
//               scale: isHovered ? 0.9 : 0.85,
//               rotate: isHovered ? 0 : 0,
//               x: isHovered ? 0 : 0,
//               opacity: isHovered ? 0.8 : 0.5
//             }}
//             transition={{ duration: 10 }}
//           />

//           {/* FRONT CARD - Jo swipe hokar remove hoga */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`front-${currentIndex}`}
//               className="profile-card"
//               style={{
//                 backgroundImage: `url(${images[currentIndex].url})`,
//                 zIndex: 20
//               }}
//               initial={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
//               animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
//               exit={{
//                 x: 350,       // Card right side nikal jayga
//                 rotate: 25,   // Thoda tilt hoga
//                 opacity: 0,
//                 transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] }
//               }}
//             >
//               <div className="keen-badge">Keen</div>
//               <div className="card-meta">
//                 <div style={{ fontWeight: '800', fontSize: '15px' }}>{images[currentIndex].name}</div>
//                 <div style={{ fontSize: '11px', opacity: 0.9 }}>📍 {images[currentIndex].dist}</div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="explore-footer">
//           <h2>Explore Matches</h2>
//           <p>See profiles matched based on your preferences and location in Australia.</p>
//         </div>
//       </motion.div>
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Border from "./border";

// const images = [
//   { id: 1, url: "/Frame 17.png", name: "MONICA", age: 24, dist: "5 km" },
//   { id: 2, url: "/Frame 17 (1).png", name: "ELIZA", age: 22, dist: "3 km" },
// ];
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
    name: "MONICA",
    age: 24,
    dist: "5 km",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    name: "ELIZA",
    age: 22,
    dist: "3 km",
  },
];

export default function ExploreMatchesCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const nextIndex = (currentIndex + 1) % images.length;
>>>>>>> Stashed changes

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, x: 0, rotate: 0 }}
      animate={{
        opacity: 1,
        scale: isTop ? (isHovered ? 1.05 : 1) : 0.9,
        rotate: isHovered ? rotation * 1.5 : rotation,
        x: isHovered ? xOffset * 1.8 : xOffset,
        y: isHovered ? -10 : 0,
        zIndex: 20 - index,
      }}
      exit={{
        x: 400,
        rotate: 30,
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{
        position: "absolute",
        width: "210px",
        height: "300px",
        left: "calc(50% - 105px)",
        top: "calc(50% - 150px)",
        borderRadius: "24px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${profile.image})`,
        border: "4px solid white",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        color: "white",
        overflow: "hidden"
      }}
    >
      {/* Story Bars */}
      <div style={{ display: "flex", gap: "4px", width: "100%", opacity: 0.8 }}>
        <div style={{ height: "3px", flex: 1, background: "white", borderRadius: "2px" }} />
        <div style={{ height: "3px", flex: 1, background: "rgba(255,255,255,0.4)", borderRadius: "2px" }} />
      </div>

      {/* Keen Logo */}
      {isTop && (
        <div style={{
          position: "absolute",
          top: "25px",
          left: "20px",
          color: "#46d2d2",
          fontSize: "24px",
          fontWeight: "800",
          fontStyle: "italic",
          fontFamily: "'Dancing Script', cursive",
          textShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}>
          Keen
        </div>
      )}

      {/* Info Overlay */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ fontWeight: 800, fontSize: "16px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            {profile.name} ({profile.age})
          </span>
          <div style={{ background: "#3b82f6", borderRadius: "50%", padding: "2px", width: "14px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Check size={10} color="white" strokeWidth={4} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(8px)",
            padding: "4px 10px",
            borderRadius: "100px",
            fontSize: "10px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}>
            <span role="img" aria-label="location">📍</span> {profile.distance}
          </div>

          <div style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <ArrowUp size={14} color="white" strokeWidth={3} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExploreMatchesCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [stack, setStack] = useState([0, 1, 2]);

  // Interval logic to cycle cards like playing cards
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
<<<<<<< Updated upstream
        setStack((prev) => {
          const newStack = [...prev];
          const top = newStack.shift();
          newStack.push(top);
          return newStack;
        });
      }, 2500); // 2.5s gap for a smooth cycling feel
=======
        // Exit phase shuru karo
        setIsExiting(true); // Front card exit duration ke baad index change karo (850ms)

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsExiting(false);
        }, 850);
      }, 3500);
>>>>>>> Stashed changes
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
<<<<<<< Updated upstream
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}</style>
=======
    <Border>
>>>>>>> Stashed changes
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
<<<<<<< Updated upstream
          background: "white",
          borderRadius: "40px",
          border: "1px solid #f0f0f0",
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Dynamic Visual Section */}
        <div style={{
          position: "relative",
          height: "440px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(circle at 50% 100%, #b2eff2 0%, #ffffff 70%)",
          overflow: "visible"
        }}>
          <AnimatePresence mode="popLayout">
            {stack.slice(0, 2).map((imgIndex, i) => (
              <ProfileCard
                key={imgIndex} // key is the original index to track identity for AnimatePresence
                profile={profiles[imgIndex]}
                isTop={i === 0}
                index={i}
                isHovered={isHovered}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div style={{ padding: "40px", background: "white" }}>
          <h2 style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "800",
            color: "#1a1a1a",
            letterSpacing: "-0.5px"
          }}>
            Explore Matches
          </h2>
          <p style={{
            color: "#666",
            marginTop: "12px",
            fontSize: "17px",
            lineHeight: 1.6,
            maxWidth: "90%"
          }}>
            See profiles matched based on your preferences and location in Australia.
          </p>
        </div>
      </motion.div>
    </>
=======
          borderRadius: "28px",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          border: "4px solid white",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg"
      >
        <div
          style={{
            position: "relative",
            height: "325px",
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
                ? { scale: 1, opacity: 1, y: 0, rotate: 0 } // front exit ke saath saath ye aage aa rha hai
                : isHovered
                ? { scale: 0.9, opacity: 0.85, y: 8, rotate: 0 } // normal hover
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
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "120px",
                  borderRadius: "0 0 16px 16px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                }}
              />
              {/* Name & distance */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <span style={{ fontWeight: 800, fontSize: "15px" }}>
                    {images[currentIndex].name}
                  </span>
                  <span
                    style={{ fontWeight: 400, fontSize: "13px", opacity: 0.9 }}
                  >
                    ({images[currentIndex].age})
                  </span>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#71D7FE",
                      display: "inline-block",
                    }}
                  />
                </div>
                <div
                  style={{ fontSize: "11px", opacity: 0.85, marginTop: "3px" }}
                >
                  📍{images[currentIndex].dist}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Text Section */}
        <div style={{ padding: "36px 40px", background: "white", zIndex: 10 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: 800,
              color: "#111",
            }}
          >
            Explore Matches
          </h2>
          <p
            style={{
              color: "#666",
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            See profiles matched based on your preferences and location in
            Australia.
          </p>
        </div>
      </motion.div>
    </Border>
>>>>>>> Stashed changes
  );
}
