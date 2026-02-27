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
          style={{
            position: "relative",
            height: "325px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
            background: "white",
          }}
        >
          {/* Background Gradient (Seamless aqua matching ProfileCard) */}
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

          {/* Boy Avatar (Left) */}
          <motion.img
            src="/Boy.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              position: "absolute",
              zIndex: 30,
            }}
            variants={{
              initial: { x: -30, y: 10, scale: 0.9 },
              hover: { x: -160, y: -85, scale: 1, transition: smoothSpring },
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
                x: -170,
                y: -10,
                transition: { delay: 0.4, ...smoothSpring },
              },
            }}
          >
            <motion.img
              src="/Vector (7).png"
              alt=""
              style={{ width: "24px", height: "24px" }}
              variants={floatVariants}
              custom={0}
            />
          </motion.div>

          {/* Bubble 1 (Boy) */}
          <motion.div
            style={{
              position: "absolute",
              background: "white",
              padding: "12px 20px",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              fontSize: "14px",
              fontWeight: 500,
              zIndex: 25,
              whiteSpace: "nowrap",
            }}
            variants={{
              initial: { opacity: 0, scale: 0.8, x: -30, y: 10 },
              hover: {
                opacity: 1,
                scale: 1,
                x: 40,
                y: -90,
                transition: { delay: 0.6, ...smoothSpring },
              },
            }}
          >
            Hey! I liked your profile.
            {/* <img src="public/Frame 110.png" alt="" className="w-40 h-10"/> */}
          </motion.div>

          {/* Girl Avatar (Right) */}
          <motion.img
            src="/Girl.png"
            alt=""
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid white",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              position: "absolute",
              zIndex: 30,
            }}
            variants={{
              initial: { x: 30, y: 20, scale: 0.9 },
              hover: { x: 160, y: 75, scale: 1, transition: smoothSpring },
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
                x: 205,
                y: -5,
                transition: { delay: 0.5, ...smoothSpring },
              },
            }}
          >
            <motion.img
              src="/Vector (7).png"
              alt=""
              style={{ width: "24px", height: "24px" }}
              variants={floatVariants}
              custom={1}
            />
          </motion.div>

          {/* Bubble 2 (Girl) */}
          <motion.div
            style={{
              position: "absolute",
              background: "white",
              padding: "12px 20px",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              fontSize: "14px",
              fontWeight: 500,
              zIndex: 25,
              whiteSpace: "nowrap",
            }}
            variants={{
              initial: { opacity: 0, scale: 0.8, x: 30, y: 20 },
              hover: {
                opacity: 1,
                scale: 1,
                x: -70,
                y: 95,
                transition: { delay: 0.7, ...smoothSpring },
              },
            }}
          >
            Thanks! Glad we matched.
          </motion.div>
        </div>

        {/* Text Section */}
        <div
          style={{
            padding: "36px 40px",
            background: "white",
            flex: 1,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: 800,
              color: "#111",
              letterSpacing: "-0.5px",
            }}
          >
            Start a Conversation
          </h2>
          <p
            style={{
              color: "#6b6b6b",
              marginTop: "4px",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Connect and chat easily once there’s mutual interest.
          </p>
        </div>
      </motion.div>
    </Border>
  );
}
