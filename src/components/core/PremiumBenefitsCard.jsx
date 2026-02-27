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
          // outline: "2.5px solid rgba(200, 220, 230, 0.25)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        className="shadow-lg"
      >
        <div
          style={{
            position: "relative",
            height: "350px",
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
              // background:
              //   "radial-gradient(ellipse 8000% 45% at 50% 20%, rgba(113, 215, 254, 0.28) 0%, transparent 200%), radial-gradient(ellipse 70% 55% at 50% 50%, rgba(193, 244, 246, 0.08) 0%, transparent 100%)",
              background:
                "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
              zIndex: 1,
              borderRadius: "25px",
            }}
          />

          {/* Floating icons */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{ tx: "-130px", ty: "-125px" }}
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
              style={{
                width: "58px",
                height: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action.png"
                alt=""
                style={{ width: "58px", height: "58px" }}
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{ tx: "-32px", ty: "-150px" }}
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
              style={{
                width: "58px",
                height: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action (1).png"
                alt=""
                style={{ width: "58px", height: "58px" }}
              />
            </div>
          </motion.div>

          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 50,
              pointerEvents: "none",
            }}
            variants={iconVariants}
            custom={{ tx: "70px", ty: "-125px" }}
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
              style={{
                width: "58px",
                height: "58px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action (2).png"
                alt=""
                style={{ width: "58px", height: "58px" }}
              />
            </div>
          </motion.div>

          {/* Premium inner card */}
          <motion.div
            variants={{
              initial: { scale: 1, y: 0 },
              hover: { scale: 1, y: 45, transition: { duration: 0.5 } },
            }}
            style={{
              position: "relative",
              zIndex: 10,
              background: "white",
              borderRadius: "28px",
              width: "300px",
              padding: "15px",
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
            <p
              style={{ color: "#777", fontSize: "14px", margin: "10px 0 20px" }}
            >
              Go deeper with smarter matches.
            </p>
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
                padding: "10px",
                borderRadius: "100px",
                fontWeight: 590,
                cursor: "pointer",
              }}
            >
              BUY NOW
            </button>
          </motion.div>
        </div>

        <div style={{ padding: "30px" }}>
          <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800 }}>
            Unlock Premium Benefits
          </h2>
          <p style={{ color: "#707070", marginTop: "2px", fontSize: "16px" }}>
            Premium members get access to exclusive <br /> features and daily
            rewards.
          </p>
        </div>
      </motion.div>
    </Border>
  );
}
