// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";

// const smoothSpring = {
//   type: "spring",
//   stiffness: 100,
//   damping: 15,
//   mass: 0.8
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
//     <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//       <style>{`
//         .premium-container {
//           width: 100%;
//           background: white;
//           overflow: visible; 
//           cursor: pointer;
//              border-radius: 32px;
//           border: 2.5px solid rgba(255, 255, 255, 0.6);
//           outline: 2.5px solid rgba(200, 220, 230, 0.25);
//            backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//         }
//         .visual-area {
//           position: relative;
//           height: 400px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .bg-glow {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(circle at 60% 30%, rgba(193, 244, 246, 0.9) 60%, rgba(255, 255, 255, 0) 100%);
//           opacity: 0;
//           transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//           z-index: 1;
//           border-radius: 32px;
//         }
//         .premium-container:hover .bg-glow { opacity: 1; }
//         .icon-item { position: absolute; top: 50%; left: 50%; z-index: 50; pointer-events: none; }
//         .icon-circle {
//           width: 58px; height: 58px; 
//           display: flex; align-items: center; justify-content: center;
//         }
//         .premium-inner-card {
//           position: relative; z-index: 10; background: white; border-radius: 28px;
//           width: 300px; padding: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.06);
//           border: 1px solid rgba(0,0,0,0.04);
//         }
//         .plus-tag { background: #333; color: white; padding: 5px 14px; border-radius: 12px; font-size: 12px; font-weight: 600; }
//         .action-btn { width: 100%; background: #1a1a1a; color: white; border: none; padding: 16px; border-radius: 100px; font-weight: 700; }
//       `}</style>

//       <motion.div className="premium-container" initial="initial" whileHover="hover">
//         <div className="visual-area">
//           <div className="bg-glow" />
          
//           <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "-120px", ty: "-140px" }} animate={{ y: ["0%", "-8%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.6 } }}>
//             <img src="/Action=Like Matches, Filled=False, Component=Matches Action.png" alt=""  className="icon-circle"/>
//           </motion.div>

//           <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "-22px", ty: "-180px" }} animate={{ y: ["0%", "-10%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.7 } }}>
//                <img src="/Action=Like Matches, Filled=False, Component=Matches Action (1).png" alt=""  className="icon-circle"/>
//           </motion.div>

//           <motion.div className="icon-item" variants={iconVariants} custom={{ tx: "80px", ty: "-140px" }} animate={{ y: ["0%", "-8%", "0%"] }} transition={{ y: { repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.8 } }}>
//                <img src="/Action=Like Matches, Filled=False, Component=Matches Action (2).png" alt=""  className="icon-circle"/>
//           </motion.div>

//           <motion.div className="premium-inner-card" variants={{ initial: { scale: 1, y: 0 }, hover: { scale: 0.92, y: 35, transition: { duration: 0.5 } } }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <h4 style={{ margin: 0 }}>Premium</h4>
//               <span className="plus-tag">Plus</span>
//             </div>
//             <p style={{ color: '#777', fontSize: '14px', margin: '10px 0 20px' }}>Go deeper with smarter matches.</p>
//             <div style={{ height: '46px', background: 'linear-gradient(to top, #EE6EFF, transparent)', borderRadius: '12px', marginBottom: '20px' }} />
//             <button className="action-btn">BUY NOW</button>
//           </motion.div>
//         </div>

//         <div style={{ padding: '40px' }}>
//           <h2 style={{ margin: 0, fontSize: '30px', fontWeight: '800' }}>Unlock Premium Benefits</h2>
//           <p style={{ color: '#666', marginTop: '10px', fontSize: '17px' }}>Premium members get access to exclusive features and daily rewards.</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }




// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      style={{
        width: "100%",
        overflow: "visible",
        cursor: "pointer",
        borderRadius: "32px",
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
          height: "400px",
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
               "radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%), radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%)",
            zIndex: 1,
            borderRadius: "32px",
          }}
        />

        {/* Floating icons */}
        <motion.div
          style={{ position: "absolute", top: "50%", left: "50%", zIndex: 50, pointerEvents: "none" }}
          variants={iconVariants}
          custom={{ tx: "-120px", ty: "-140px" }}
          animate={{ y: ["0%", "-8%", "0%"] }}
          transition={{ y: { repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.6 } }}
        >
          <div style={{ width: "58px", height: "58px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/Action=Like Matches, Filled=False, Component=Matches Action.png" alt="" style={{ width: "58px", height: "58px" }} />
          </div>
        </motion.div>

        <motion.div
          style={{ position: "absolute", top: "50%", left: "50%", zIndex: 50, pointerEvents: "none" }}
          variants={iconVariants}
          custom={{ tx: "-22px", ty: "-180px" }}
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.7 } }}
        >
          <div style={{ width: "58px", height: "58px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/Action=Like Matches, Filled=False, Component=Matches Action (1).png" alt="" style={{ width: "58px", height: "58px" }} />
          </div>
        </motion.div>

        <motion.div
          style={{ position: "absolute", top: "50%", left: "50%", zIndex: 50, pointerEvents: "none" }}
          variants={iconVariants}
          custom={{ tx: "80px", ty: "-140px" }}
          animate={{ y: ["0%", "-8%", "0%"] }}
          transition={{ y: { repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.8 } }}
        >
          <div style={{ width: "58px", height: "58px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/Action=Like Matches, Filled=False, Component=Matches Action (2).png" alt="" style={{ width: "58px", height: "58px" }} />
          </div>
        </motion.div>

        {/* Premium inner card */}
        <motion.div
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 0.92, y: 35, transition: { duration: 0.5 } },
          }}
          style={{
            position: "relative",
            zIndex: 10,
            background: "white",
            borderRadius: "28px",
            width: "300px",
            padding: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ margin: 0 }}>Premium</h4>
            <span
              style={{
                background: "#333",
                color: "white",
                padding: "5px 14px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Plus
            </span>
          </div>
          <p style={{ color: "#777", fontSize: "14px", margin: "10px 0 20px" }}>Go deeper with smarter matches.</p>
          <div
            style={{
              height: "46px",
              background: "linear-gradient(to top, #EE6EFF, transparent)",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <button
            style={{
              width: "100%",
              background: "#1a1a1a",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "100px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            BUY NOW
          </button>
        </motion.div>
      </div>

      <div style={{ padding: "40px" }}>
        <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800 }}>Unlock Premium Benefits</h2>
        <p style={{ color: "#666", marginTop: "10px", fontSize: "17px" }}>
          Premium members get access to exclusive features and daily rewards.
        </p>
      </div>
    </motion.div>
  );
}
