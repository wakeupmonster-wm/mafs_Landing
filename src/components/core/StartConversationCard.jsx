// // // eslint-disable-next-line no-unused-vars
// // import { motion } from "framer-motion";
// // import Border from "./border";

// // const smoothSpring = {
// //   type: "spring",
// //   stiffness: 80,
// //   damping: 35,
// //   mass: 0.8,
// // };

// // const floatVariants = {
// //   initial: { y: 0 },
// //   hover: (i) => ({
// //     y: [0, -8, 0, 8, 0],
// //     transition: {
// //       duration: 3 + i * 0.5,
// //       repeat: Infinity,
// //       ease: "easeInOut",
// //     },
// //   }),
// // };

// // export default function StartConversationCard() {
// //   return (
// //     <Border>
// //       <motion.div
// //         initial="initial"
// //         whileHover="hover"
// //         className="shadow-lg"
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           display: "flex",
// //           flexDirection: "column",
// //           borderRadius: "28px",
// //           overflow: "hidden",
// //           cursor: "pointer",
// //           border: "4px solid white",
// //           background: "white",
// //         }}
// //       >
// //         {/* Visual Section */}
// //         <div
// //           style={{
// //             position: "relative",
// //             height: "360px",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             overflow: "visible",
// //             background: "white",
// //           }}
// //         >
// //           {/* Background Gradient (Seamless aqua matching ProfileCard) */}
// //           <motion.div
// //             variants={{
// //               initial: { opacity: 0 },
// //               hover: { opacity: 1 },
// //             }}
// //             transition={{ duration: 0.6 }}
// //             style={{
// //               position: "absolute",
// //               inset: 0,
// //               background:
// //                 "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
// //               zIndex: 1,
// //             }}
// //           />

// //           {/* Boy Avatar (Left) */}
// //           <motion.img
// //             src="/Boy.png"
// //             alt=""
// //             style={{
// //               width: "100px",
// //               height: "100px",
// //               borderRadius: "50%",
// //               border: "4px solid white",
// //               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// //               position: "absolute",
// //               zIndex: 30,
// //             }}
// //             variants={{
// //               initial: { x: -30, y: 10, scale: 0.9 },
// //               hover: { x: -160, y: -85, scale: 1, transition: smoothSpring },
// //             }}
// //           />

// //           {/* Sparkle below Boy */}
// //           <motion.div
// //             style={{ position: "absolute", zIndex: 20 }}
// //             variants={{
// //               initial: { opacity: 0, scale: 0, x: -30, y: 10 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: -170,
// //                 y: -10,
// //                 transition: { delay: 0.4, ...smoothSpring },
// //               },
// //             }}
// //           >
// //             <motion.img
// //               src="/Vector (7).png"
// //               alt=""
// //               style={{ width: "24px", height: "24px" }}
// //               variants={floatVariants}
// //               custom={0}
// //             />
// //           </motion.div>

// //           {/* Bubble 1 (Boy) */}
// //           <motion.div
// //             style={{
// //               position: "absolute",
// //               background: "white",
// //               padding: "12px 20px",
// //               borderRadius: "20px",
// //               boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
// //               fontSize: "14px",
// //               fontWeight: 500,
// //               zIndex: 25,
// //               whiteSpace: "nowrap",
// //             }}
// //             variants={{
// //               initial: { opacity: 0, scale: 0.8, x: -30, y: 10 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: 40,
// //                 y: -90,
// //                 transition: { delay: 0.6, ...smoothSpring },
// //               },
// //             }}
// //           >
// //             Hey! I liked your profile.
// //             {/* <img src="public/Frame 110.png" alt="" className="w-40 h-10"/> */}
// //           </motion.div>

// //           {/* Girl Avatar (Right) */}
// //           <motion.img
// //             src="/Girl.png"
// //             alt=""
// //             style={{
// //               width: "100px",
// //               height: "100px",
// //               borderRadius: "50%",
// //               border: "4px solid white",
// //               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
// //               position: "absolute",
// //               zIndex: 30,
// //             }}
// //             variants={{
// //               initial: { x: 30, y: 20, scale: 0.9 },
// //               hover: { x: 160, y: 75, scale: 1, transition: smoothSpring },
// //             }}
// //           />

// //           {/* Sparkle above Girl */}
// //           <motion.div
// //             style={{ position: "absolute", zIndex: 20 }}
// //             variants={{
// //               initial: { opacity: 0, scale: 0, x: 30, y: 20 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: 205,
// //                 y: -5,
// //                 transition: { delay: 0.5, ...smoothSpring },
// //               },
// //             }}
// //           >
// //             <motion.img
// //               src="/Vector (7).png"
// //               alt=""
// //               style={{ width: "24px", height: "24px" }}
// //               variants={floatVariants}
// //               custom={1}
// //             />
// //           </motion.div>

// //           {/* Bubble 2 (Girl) */}
// //           <motion.div
// //             style={{
// //               position: "absolute",
// //               background: "white",
// //               padding: "12px 20px",
// //               borderRadius: "20px",
// //               boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
// //               fontSize: "14px",
// //               fontWeight: 500,
// //               zIndex: 25,
// //               whiteSpace: "nowrap",
// //             }}
// //             variants={{
// //               initial: { opacity: 0, scale: 0.8, x: 30, y: 20 },
// //               hover: {
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: -70,
// //                 y: 95,
// //                 transition: { delay: 0.7, ...smoothSpring },
// //               },
// //             }}
// //           >
// //             Thanks! Glad we matched.
// //           </motion.div>
// //         </div>

// //         {/* Text Section */}
// //         <div
// //           style={{
// //             padding: "36px 40px",
// //             background: "white",
// //             flex: 1,
// //           }}
// //         >
// //           <h2
// //             style={{
// //               margin: 0,
// //               fontSize: "30px",
// //               fontWeight: 800,
// //               color: "#111",
// //               letterSpacing: "-0.5px",
// //             }}
// //           >
// //             Start a Conversation
// //           </h2>
// //           <p
// //             style={{
// //               color: "#707070",
// //               marginTop: "2px",
// //               fontSize: "16px",
// //               lineHeight: 1.6,
// //             }}
// //           >
// //             Connect and chat easily once there’s mutual interest.
// //           </p>
// //         </div>
// //       </motion.div>
// //     </Border>
// //   );
// // }


// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Border from "./border";

// const smoothSpring = {
//   type: "spring",
//   stiffness: 80,
//   damping: 35,
//   mass: 0.8,
// };

// const floatVariants = {
//   initial: { y: 0 },
//   hover: (i) => ({
//     y: [0, -8, 0, 8, 0],
//     transition: {
//       duration: 3 + i * 0.5,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   }),
// };

// export default function StartConversationCard() {
//   return (
//     <Border>
//       <motion.div
//         initial="initial"
//         whileHover="hover"
//         className="shadow-lg"
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           borderRadius: "28px",
//           overflow: "hidden",
//           cursor: "pointer",
//           border: "4px solid white",
//           background: "white",
//         }}
//       >
//         {/* Visual Section */}
//         <div
//           className="h-[220px] sm:h-[270px] md:h-[310px] lg:h-[360px]"
//           style={{
//             position: "relative",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             overflow: "visible",
//             background: "white",
//           }}
//         >
//           {/* Background Gradient */}
//           <motion.div
//             variants={{
//               initial: { opacity: 0 },
//               hover: { opacity: 1 },
//             }}
//             transition={{ duration: 0.6 }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
//               zIndex: 1,
//             }}
//           />

//           {/* Boy Avatar */}
//           {/* <motion.img
//             src="/Boy.png"
//             alt=""
//             className="
//               w-[60px] h-[60px]
//               sm:w-[80px] sm:h-[80px]
//               md:w-[90px] md:h-[90px]
//               lg:w-[100px] lg:h-[100px]
//             "
//             style={{
//               borderRadius: "50%",
//               border: "4px solid white",
//               boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//               position: "absolute",
//               zIndex: 30,
//             }}
//             variants={{
//               initial: { x: -30, y: 10, scale: 0.9 },
//               hover: { x: -160, y: -85, scale: 1, transition: smoothSpring },
//             }}
//           /> */}

          

//           {/* Boy Avatar */}
// <motion.img
//   src="/Boy.png"
//   alt=""
//   className="
//     w-[60px] h-[60px]
//     sm:w-[80px] sm:h-[80px]
//     md:w-[90px] md:h-[90px]
//     lg:w-[100px] lg:h-[100px]
//   "
//   style={{
//     borderRadius: "50%",
//     border: "4px solid white",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     position: "absolute",
//     zIndex: 30,
//   }}
//   variants={{
//     initial: { x: -30, y: 10, scale: 0.9 },
//     hover: {
//       x: "clamp(-110px, -12vw, -160px)",
//       y: "clamp(-50px, -7vw, -85px)",
//       scale: 1,
//       transition: smoothSpring,
//     },
//   }}
// />

// {/* Sparkle below Boy */}
// <motion.div
//   style={{ position: "absolute", zIndex: 20 }}
//   variants={{
//     initial: { opacity: 0, scale: 0, x: -30, y: 10 },
//     hover: {
//       opacity: 1,
//       scale: 1,
//       x: "clamp(-95px, -13vw, -170px)",
//       y: "clamp(-8px, -1vw, -10px)",
//       transition: { delay: 0.4, ...smoothSpring },
//     },
//   }}
// >
//   <motion.img
//     src="/Vector (7).png"
//     alt=""
//     className="
//       w-[16px] h-[16px]
//       sm:w-[20px] sm:h-[20px]
//       lg:w-[24px] lg:h-[24px]
//     "
//     variants={floatVariants}
//     custom={0}
//   />
// </motion.div>

// {/* Bubble 1 - Boy */}
// <motion.div
//   className="
//     text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px]
//     px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-[20px] lg:py-[12px]
//   "
//   style={{
//     position: "absolute",
//     background: "white",
//     borderRadius: "20px",
//     boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
//     fontWeight: 500,
//     zIndex: 25,
//     whiteSpace: "nowrap",
//   }}
//   variants={{
//     initial: { opacity: 0, scale: 0.8, x: -30, y: 10 },
//     hover: {
//       opacity: 1,
//       scale: 1,
//       x: "clamp(20px, 3vw, 40px)",
//       y: "clamp(-55px, -7vw, -90px)",
//       transition: { delay: 2, ...smoothSpring },
//     },
//   }}
// >
//   Hey! I liked your profile.
// </motion.div>

// {/* Girl Avatar */}
// <motion.img
//   src="/Girl.png"
//   alt=""
//   className="
//     w-[60px] h-[60px]
//     sm:w-[80px] sm:h-[80px]
//     md:w-[90px] md:h-[90px]
//     lg:w-[100px] lg:h-[100px]
//   "
//   style={{
//     borderRadius: "50%",
//     border: "4px solid white",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     position: "absolute",
//     zIndex: 30,
//   }}
//   variants={{
//     initial: { x: 30, y: 20, scale: 0.9 },
//     hover: {
//       x: "clamp(90px, 12vw, 160px)",
//       y: "clamp(45px, 6vw, 75px)",
//       scale: 1,
//       transition: smoothSpring,
//     },
//   }}
// />

// {/* Sparkle above Girl */}
// <motion.div
//   style={{ position: "absolute", zIndex: 20 }}
//   variants={{
//     initial: { opacity: 0, scale: 0, x: 30, y: 20 },
//     hover: {
//       opacity: 1,
//       scale: 1,
//       x: "clamp(115px, 15vw, 205px)",
//       y: "clamp(-4px, -0.5vw, -5px)",
//       transition: { delay: 0.5, ...smoothSpring },
//     },
//   }}
// >
//   <motion.img
//     src="/Vector (7).png"
//     alt=""
//     className="
//       w-[16px] h-[16px]
//       sm:w-[20px] sm:h-[20px]
//       lg:w-[24px] lg:h-[24px]
//     "
//     variants={floatVariants}
//     custom={1}
//   />
// </motion.div>

// {/* Bubble 2 - Girl */}
// <motion.div
//   className="
//     text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px]
//     px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-[20px] lg:py-[12px]
//   "
//   style={{
//     position: "absolute",
//     background: "white",
//     borderRadius: "20px",
//     boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
//     fontWeight: 500,
//     zIndex: 25,
//     whiteSpace: "nowrap",
//   }}
//   variants={{
//     initial: { opacity: 0, scale: 0.8, x: 30, y: 20 },
//     hover: {
//       opacity: 1,
//       scale: 1,
//       x: "clamp(-45px, -6vw, -70px)",
//       y: "clamp(58px, 8vw, 95px)",
//       transition: { delay: 2, ...smoothSpring },
//     },
//   }}
// >
//   Thanks! Glad we matched.
// </motion.div>


//         </div>

//         {/* Text Section */}
//         <div
//           className="
//             px-5 py-6
//             sm:px-8 sm:py-7
//             md:px-9 md:py-8
//             lg:px-[40px] lg:py-[36px]
//           "
//           style={{
//             background: "white",
//             flex: 1,
//           }}
//         >
//           <h2
//             className="
//               text-[18px]
//               sm:text-[22px]
//               md:text-[26px]
//               lg:text-[30px]
//               font-extrabold text-[#111]
//             "
//             style={{ margin: 0, letterSpacing: "-0.5px" }}
//           >
//             Start a Conversation
//           </h2>
//           <p
//             className="
//               text-[12px]
//               sm:text-[13px]
//               md:text-[14px]
//               lg:text-[16px]
//               text-[#707070] leading-relaxed
//             "
//             style={{ marginTop: "2px" }}
//           >
//             Connect and chat easily once there's mutual interest.
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
  stiffness: 80,
  damping: 35,
  mass: 0.8,
};

const floatVariants = {
  initial: { y: 0 },
  hover: (i) => ({
    y: [0, -8, 0, 8, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function StartConversationCard() {
  // ✅ Sirf mobile ke liye
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <Border>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="shadow-lg"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "28px",
          overflow: "hidden",
          cursor: "pointer",
          border: "4px solid white",
          background: "white",
        }}
      >
        {/* Visual Section */}
        <div
          className="h-[220px] sm:h-[270px] md:h-[310px] lg:h-[360px]"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
            background: "white",
          }}
        >
          {/* Background Gradient */}
          <motion.div
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
              zIndex: 1,
            }}
          />

          {/* Boy Avatar */}
          <motion.img
            src="/Boy.png"
            alt=""
            className="
              w-[60px] h-[60px]
              sm:w-[80px] sm:h-[80px]
              md:w-[90px] md:h-[90px]
              lg:w-[100px] lg:h-[100px]
            "
            style={{
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              position: "absolute",
              zIndex: 30,
            }}
            variants={{
              initial: { x: -30, y: 10, scale: 0.9 },
              hover: {
                x: isMobile ? -100 : -160,
                y: isMobile ? -50 : -85,
                scale: 1,
                transition: smoothSpring,
              },
            }}
          />

          {/* Sparkle below Boy */}
          <motion.div
            style={{ position: "absolute", zIndex: 20 }}
            variants={{
              initial: { opacity: 0, scale: 0, x: -30, y: 10 },
              hover: {
                opacity: 1,
                scale: 1,
                x: isMobile ? -90 : -170,
                y: isMobile ? -8 : -10,
                transition: { delay: 0.4, ...smoothSpring },
              },
            }}
          >
            <motion.img
              src="/Vector (7).png"
              alt=""
              className="
                w-[16px] h-[16px]
                sm:w-[20px] sm:h-[20px]
                lg:w-[24px] lg:h-[24px]
              "
              variants={floatVariants}
              custom={0}
            />
          </motion.div>

          {/* Bubble 1 - Boy */}
          <motion.div
            className="
              text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px]
              px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-[20px] lg:py-[12px]
            "
            style={{
              position: "absolute",
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              fontWeight: 500,
              zIndex: 25,
              whiteSpace: "nowrap",
            }}
            variants={{
              initial: { opacity: 0, scale: 0.8, x: -30, y: 10 },
              hover: {
                opacity: 1,
                scale: 1,
                x: isMobile ? 15 : 40,
                y: isMobile ? -55 : -90,
                transition: { delay: 0.6, ...smoothSpring },
              },
            }}
          >
            Hey! I liked your profile.
          </motion.div>

          {/* Girl Avatar */}
          <motion.img
            src="/Girl.png"
            alt=""
            className="
              w-[60px] h-[60px]
              sm:w-[80px] sm:h-[80px]
              md:w-[90px] md:h-[90px]
              lg:w-[100px] lg:h-[100px]
            "
            style={{
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              position: "absolute",
              zIndex: 30,
            }}
            variants={{
              initial: { x: 30, y: 20, scale: 0.9 },
              hover: {
                x: isMobile ? 80 : 160,
                y: isMobile ? 45 : 75,
                scale: 1,
                transition: smoothSpring,
              },
            }}
          />

          {/* Sparkle above Girl */}
          <motion.div
            style={{ position: "absolute", zIndex: 20 }}
            variants={{
              initial: { opacity: 0, scale: 0, x: 30, y: 20 },
              hover: {
                opacity: 1,
                scale: 1,
                x: isMobile ? 110 : 205,
                y: isMobile ? -4 : -5,
                transition: { delay: 0.5, ...smoothSpring },
              },
            }}
          >
            <motion.img
              src="/Vector (7).png"
              alt=""
              className="
                w-[16px] h-[16px]
                sm:w-[20px] sm:h-[20px]
                lg:w-[24px] lg:h-[24px]
              "
              variants={floatVariants}
              custom={1}
            />
          </motion.div>

          {/* Bubble 2 - Girl */}
          <motion.div
            className="
              text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px]
              px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-[20px] lg:py-[12px]
            "
            style={{
              position: "absolute",
              background: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              fontWeight: 500,
              zIndex: 25,
              whiteSpace: "nowrap",
            }}
            variants={{
              initial: { opacity: 0, scale: 0.8, x: 30, y: 20 },
              hover: {
                opacity: 1,
                scale: 1,
                x: isMobile ? -40 : -70,
                y: isMobile ? 58 : 95,
                transition: { delay: 0.7, ...smoothSpring },
              },
            }}
          >
            Thanks! Glad we matched.
          </motion.div>
        </div>

        {/* Text Section */}
        <div
          className="
            px-5 py-6
            sm:px-8 sm:py-7
            md:px-9 md:py-8
            lg:px-[40px] lg:py-[36px]
          "
          style={{
            background: "white",
            flex: 1,
          }}
        >
          <h2
            className="
              text-[18px]
              sm:text-[22px]
              md:text-[26px]
              lg:text-[30px]
              font-extrabold text-[#111]
            "
            style={{ margin: 0, letterSpacing: "-0.5px" }}
          >
            Start a Conversation
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
            Connect and chat easily once there's mutual interest.
          </p>
        </div>
      </motion.div>
    </Border>
  );
}