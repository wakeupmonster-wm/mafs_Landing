// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Border from "./border";
import { useEffect, useRef, useState } from "react";

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

// ✅ Float variants alag se - parent se independent
const floatAnimation = {
  y: ["0%", "-8%", "0%"],
  transition: {
    repeat: Infinity,
    duration: 2.5,
    ease: "easeInOut",
  },
};

export default function PremiumBenefitsCard() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const [activeState, setActiveState] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveState(true); // ✅ visible hua
          } else {
            setActiveState(false); // ✅ screen se gaya
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Border>
      <motion.div
        initial="initial"
        ref={cardRef}
        animate={activeState ? "hover" : "initial"} // ✅ parent se propagate hoga
        whileHover="hover"
        onPointerEnter={() => setActiveState(true)}
        onPointerLeave={() => setActiveState(false)}
        // onTouchStart={() => setActiveState(true)}
        // onTouchEnd={() => setActiveState(false)}
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
          {/* ✅ animate prop hataya - parent se inherit karega */}
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
          >
            {/* ✅ Float animation inner div pe */}
            <motion.div
              animate={activeState ? floatAnimation : {}}
              whileHover={floatAnimation}
            >
              <img
                src="/Action=Like Matches, Filled=False, Component=Matches Action.png"
                alt=""
                className="
                  w-[38px] h-[38px]
                  sm:w-[48px] sm:h-[48px]
                  lg:w-[58px] lg:h-[58px]
                "
                loading="lazy"
              />
            </motion.div>
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
          >
            <motion.div
              animate={
                activeState
                  ? {
                      ...floatAnimation,
                      transition: { ...floatAnimation.transition, duration: 3 },
                    }
                  : {}
              }
              whileHover={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, duration: 3 },
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
                loading="lazy"
              />
            </motion.div>
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
          >
            <motion.div
              animate={
                activeState
                  ? {
                      ...floatAnimation,
                      transition: {
                        ...floatAnimation.transition,
                        duration: 2.8,
                      },
                    }
                  : {}
              }
              whileHover={{
                ...floatAnimation,
                transition: { ...floatAnimation.transition, duration: 2.8 },
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
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Premium inner card */}
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
