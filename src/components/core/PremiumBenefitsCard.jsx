// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Border from "./border";

// const smoothSpring = {
//   type: "spring",
//   stiffness: 100,
//   damping: 15,
//   mass: 0.8,
// };

// const iconVariants = {
//   initial: { opacity: 0, scale: 0, x: "-50%", y: "-50%" },
//   hover: (p) => ({
//     opacity: 1,
//     scale: 1,
//     x: p.tx,
//     y: p.ty,
//     transition: { ...smoothSpring, delay: p.delay || 0 },
//   }),
// };

// export default function PremiumBenefitsCard() {
//   return (
//     <Border>
//       <motion.div
//         initial="initial"
//         whileHover="hover"
//         style={{
//           width: "100%",
//           overflow: "hidden",
//           cursor: "pointer",
//           borderRadius: "28px",
//           border: "4px solid white",
//           background: "white",
//           // outline: "2.5px solid rgba(200, 220, 230, 0.25)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//         }}
//         className="shadow-lg"
//       >
//         <div
//           style={{
//             position: "relative",
//             height: "350px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flex: "1 1 auto",
//           }}
//         >
//           {/* Background glow */}
//           <motion.div
//             variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
//             transition={{ duration: 0.6 }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               // background:
//               //   "radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%), radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%)",
//               background:
//                 "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
//               zIndex: 1,
//               borderRadius: "25px",
//             }}
//           />

//           {/* Floating icons */}
//           <motion.div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               zIndex: 50,
//               pointerEvents: "none",
//             }}
//             variants={iconVariants}
//             custom={{ tx: "-130px", ty: "-125px" }}
//             animate={{ y: ["0%", "-8%", "0%"] }}
//             transition={{
//               y: {
//                 repeat: Infinity,
//                 duration: 2.5,
//                 ease: "easeInOut",
//                 delay: 0.6,
//               },
//             }}
//           >
//             <div
//               style={{
//                 width: "58px",
//                 height: "58px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="/Action=Like Matches, Filled=False, Component=Matches Action.png"
//                 alt=""
//                 style={{ width: "58px", height: "58px" }}
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               zIndex: 50,
//               pointerEvents: "none",
//             }}
//             variants={iconVariants}
//             custom={{ tx: "-32px", ty: "-150px" }}
//             animate={{ y: ["0%", "-12%", "0%"] }}
//             transition={{
//               y: {
//                 repeat: Infinity,
//                 duration: 3,
//                 ease: "easeInOut",
//                 delay: 0.7,
//               },
//             }}
//           >
//             <div
//               style={{
//                 width: "58px",
//                 height: "58px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="/Action=Like Matches, Filled=False, Component=Matches Action (1).png"
//                 alt=""
//                 style={{ width: "58px", height: "58px" }}
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               zIndex: 50,
//               pointerEvents: "none",
//             }}
//             variants={iconVariants}
//             custom={{ tx: "70px", ty: "-125px" }}
//             animate={{ y: ["0%", "-8%", "0%"] }}
//             transition={{
//               y: {
//                 repeat: Infinity,
//                 duration: 2.8,
//                 ease: "easeInOut",
//                 delay: 0.8,
//               },
//             }}
//           >
//             <div
//               style={{
//                 width: "58px",
//                 height: "58px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="/Action=Like Matches, Filled=False, Component=Matches Action (2).png"
//                 alt=""
//                 style={{ width: "58px", height: "58px" }}
//               />
//             </div>
//           </motion.div>

//           {/* Premium inner card */}
//           <motion.div
//             variants={{
//               initial: { scale: 1, y: 0 },
//               hover: { scale: 1, y: 45, transition: { duration: 0.5 } },
//             }}
//             style={{
//               position: "relative",
//               zIndex: 10,
//               background: "white",
//               borderRadius: "28px",
//               width: "300px",
//               padding: "15px",
//               boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
//               border: "1px solid rgba(0,0,0,0.04)",
//             }}
//           >
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h4 style={{ margin: 0 }}>Premium</h4>
//               <span
//                 style={{
//                   background: "#333",
//                   color: "white",
//                   padding: "5px 14px",
//                   borderRadius: "12px",
//                   fontSize: "12px",
//                   fontWeight: 600,
//                 }}
//               >
//                 Plus
//               </span>
//             </div>
//             <p
//               style={{ color: "#777", fontSize: "14px", margin: "10px 0 20px" }}
//             >
//               Go deeper with smarter matches.
//             </p>
//             <div
//               style={{
//                 height: "46px",
//                 background: "linear-gradient(to top, #EE6EFF, transparent)",
//                 borderRadius: "12px",
//                 marginBottom: "20px",
//               }}
//             />
//             <button
//               style={{
//                 width: "100%",
//                 background: "#1a1a1a",
//                 color: "white",
//                 border: "none",
//                 padding: "10px",
//                 borderRadius: "100px",
//                 fontWeight: 590,
//                 cursor: "pointer",
//               }}
//             >
//               BUY NOW
//             </button>
//           </motion.div>
//         </div>

//         <div style={{ padding: "30px" }}>
//           <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800 }}>
//             Unlock Premium Benefits
//           </h2>
//           <p style={{ color: "#707070", marginTop: "2px", fontSize: "16px" }}>
//             Premium members get access to exclusive <br /> features and daily
//             rewards.
//           </p>
//         </div>
//       </motion.div>
//     </Border>
//   );
// }



// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Border from "./border";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

const iconVariants = {
  initial: { opacity: 0, scale: 0, x: "-50%", y: "-50%" },
  hover: (p) => ({
    opacity: 1,
    scale: 1,
    x: p.tx,
    y: p.ty,
    transition: { ...smoothSpring, delay: p.delay || 0 },
  }),
};

export default function PremiumBenefitsCard() {
  // ✅ Sirf mobile ke liye
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <Border>
      <motion.div
        initial="initial"
        whileHover="hover"
        style={{
          width: "100%",
          overflow: "hidden",
          cursor: "pointer",
          borderRadius: "28px",
          border: "4px solid white",
          background: "white",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg"
      >
        {/* Visual Section */}
        <div
          className="h-[220px] sm:h-[270px] md:h-[300px] lg:h-[350px]"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 1 auto",
          }}
        >
          {/* Background glow */}
          <motion.div
            variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
              zIndex: 1,
              borderRadius: "25px",
            }}
          />

          {/* Icon 1 - Left */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{
              tx: isMobile ? "-80px" : "-130px",
              ty: isMobile ? "-80px" : "-125px",
            }}
            animate={{ y: ["0%", "-8%", "0%"] }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.6,
              },
            }}
          >
            <div
              className="
                w-[38px] h-[38px]
                sm:w-[48px] sm:h-[48px]
                lg:w-[58px] lg:h-[58px]
              "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action.png"
                alt=""
                className="
                  w-[38px] h-[38px]
                  sm:w-[48px] sm:h-[48px]
                  lg:w-[58px] lg:h-[58px]
                "
              />
            </div>
          </motion.div>

          {/* Icon 2 - Center Top */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{
              tx: isMobile ? "-20px" : "-32px",
              ty: isMobile ? "-95px" : "-150px",
            }}
            animate={{ y: ["0%", "-12%", "0%"] }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.7,
              },
            }}
          >
            <div
              className="
                w-[38px] h-[38px]
                sm:w-[48px] sm:h-[48px]
                lg:w-[58px] lg:h-[58px]
              "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action (1).png"
                alt=""
                className="
                  w-[38px] h-[38px]
                  sm:w-[48px] sm:h-[48px]
                  lg:w-[58px] lg:h-[58px]
                "
              />
            </div>
          </motion.div>

          {/* Icon 3 - Right */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{
              tx: isMobile ? "40px" : "70px",
              ty: isMobile ? "-80px" : "-125px",
            }}
            animate={{ y: ["0%", "-8%", "0%"] }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
          >
            <div
              className="
                w-[38px] h-[38px]
                sm:w-[48px] sm:h-[48px]
                lg:w-[58px] lg:h-[58px]
              "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action (2).png"
                alt=""
                className="
                  w-[38px] h-[38px]
                  sm:w-[48px] sm:h-[48px]
                  lg:w-[58px] lg:h-[58px]
                "
              />
            </div>
          </motion.div>

          <motion.div
  variants={{
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1,
      y: isMobile ? 30 : 45,
      transition: { duration: 0.5 },
    },
  }}
  className="w-[160px] sm:w-[240px] md:w-[270px] lg:w-[300px]"
  style={{
    position: "relative",
    zIndex: 10,
    background: "white",
    borderRadius: "18px",
    padding: isMobile ? "10px" : "15px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
  }}
>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <h4
      className="text-[11px] sm:text-[14px] lg:text-[16px]"
      style={{ margin: 0 }}
    >
      Premium
    </h4>
    <span
      className="text-[9px] sm:text-[11px] lg:text-[12px]"
      style={{
        background: "#333",
        color: "white",
        padding: "4px 10px",
        borderRadius: "12px",
        fontWeight: 600,
      }}
    >
      Plus
    </span>
  </div>

  <p
    className="text-[9px] sm:text-[12px] lg:text-[14px]"
    style={{ color: "#777", margin: "6px 0 10px" }}
  >
    Go deeper with smarter matches.
  </p>

  <div
    className="h-[20px] sm:h-[36px] lg:h-[46px] mb-2 sm:mb-3 lg:mb-5"
    style={{
      background: "linear-gradient(to top, #EE6EFF, transparent)",
      borderRadius: "12px",
    }}
  />

  <button
    className="text-[9px] sm:text-[12px] lg:text-[14px]"
    style={{
      width: "100%",
      background: "#1a1a1a",
      color: "white",
      border: "none",
      padding: "8px",
      borderRadius: "100px",
      fontWeight: 590,
      cursor: "pointer",
    }}
  >
    BUY NOW
  </button>
</motion.div>

          {/* Premium inner card */}
          {/* <motion.div
            variants={{
              initial: { scale: 1, y: 0 },
              hover: {
                scale: 1,
                y: isMobile ? 30 : 45,
                transition: { duration: 0.5 },
              },
            }}
            className="
              w-[200px] sm:w-[240px] md:w-[270px] lg:w-[300px]
            "
            style={{
              position: "relative",
              zIndex: 10,
              background: "white",
              borderRadius: "28px",
              padding: "15px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4
                className="text-[13px] sm:text-[14px] lg:text-[16px]"
                style={{ margin: 0 }}
              >
                Premium
              </h4>
              <span
                className="text-[10px] sm:text-[11px] lg:text-[12px]"
                style={{
                  background: "#333",
                  color: "white",
                  padding: "5px 14px",
                  borderRadius: "12px",
                  fontWeight: 600,
                }}
              >
                Plus
              </span>
            </div>
            <p
              className="text-[11px] sm:text-[12px] lg:text-[14px]"
              style={{ color: "#777", margin: "8px 0 14px" }}
            >
              Go deeper with smarter matches.
            </p>
            <div
              className="h-[30px] sm:h-[36px] lg:h-[46px] mb-3 lg:mb-5"
              style={{
                background: "linear-gradient(to top, #EE6EFF, transparent)",
                borderRadius: "12px",
              }}
            />
            <button
              className="text-[11px] sm:text-[12px] lg:text-[14px]"
              style={{
                width: "100%",
                background: "#1a1a1a",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "100px",
                fontWeight: 590,
                cursor: "pointer",
              }}
            >
              BUY NOW
            </button>
          </motion.div> */}
        </div>

        {/* Text Section */}
        <div
          className="
            px-5 py-6
            sm:px-6 sm:py-6
            md:px-7 md:py-7
            lg:px-[30px] lg:py-[30px]
          "
        >
          <h2
            className="
              text-[18px]
              sm:text-[22px]
              md:text-[26px]
              lg:text-[30px]
              font-extrabold text-[#111]
            "
            style={{ margin: 0 }}
          >
            Unlock Premium Benefits
          </h2>
          <p
            className="
              text-[12px]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[16px]
              text-[#707070] leading-relaxed
            "
            style={{ marginTop: "2px" }}
          >
            Premium members get access to exclusive features and daily rewards.
          </p>
        </div>
      </motion.div>
    </Border>
  );
}