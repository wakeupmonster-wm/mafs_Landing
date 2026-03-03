// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Border from "./border";
import { useEffect, useRef, useState } from "react";

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
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true); // ✅ visible hua - animate start
          } else {
            setIsActive(false); // ✅ screen se gaya - animate stop
          }
        });
      },
      { threshold: 0.5 } // ✅ 50% visible hone par trigger
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <Border>
      <motion.div
        ref={cardRef}
        initial="initial"
        animate={isActive ? "hover" : "initial"}
        whileHover="hover"
        onPointerEnter={() => setIsActive(true)}
        onPointerLeave={() => setIsActive(false)}
        // onTouchStart={() => setIsActive(true)}
        // onTouchEnd={() => setIsActive(false)}
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
              zIndex: 1,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "-100px", ty: "-100px" }}
            custom={{
              tx: "clamp(-90px, -8vw, -100px)",
              ty: "clamp(-95px, -8vw, -85px)",
            }}
          >
            <motion.div variants={floatVariants} custom={0}>
              {/* <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  fill="#71D7FE"
                />
              </svg> */}
              <img
                src="/Verified badge.png"
                alt=""
                className="w-8 h-8"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Music */}
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 1,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "60px", ty: "-120px" }}
            custom={{
              tx: "clamp(28px, 5vw, 60px)",
              ty: "clamp(-115px, -9vw, -100px)",
            }}
          >
            <motion.div variants={floatVariants} custom={1}>
              <img
                src="/Frame 114.png"
                alt=""
                className="w-24 h-10"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Travel */}
          <motion.div
            style={{
              position: "absolute",
              top: "42%",
              left: "45%",
              zIndex: 1,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "-150px", ty: "80px" }}
            custom={{
              tx: "clamp(-115px, -11vw, -150px)",
              ty: "clamp(80px, 6vw, 60px)",
            }}
          >
            <motion.div variants={floatVariants} custom={2}>
              <img
                src="/Frame 113.png"
                alt=""
                className="w-24 h-10"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Basketball */}
          <motion.div
            style={{
              position: "absolute",
              top: "43%",
              left: "50%",
              zIndex: 1,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "45px", ty: "105px" }}
            custom={{
              tx: "clamp(12px, 4vw, 45px)",
              ty: "clamp(75px, 8vw, 105px)",
            }}
          >
            <motion.div variants={floatVariants} custom={3}>
              <img
                src="/Frame 115.png"
                alt=""
                className="w-28 h-10"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Purple Sparkle */}
          <motion.div
            style={{
              position: "absolute",
              top: "45%",
              left: "55%",
              zIndex: 1,
              pointerEvents: "none",
            }}
            variants={chipVariants}
            // custom={{ tx: "155px", ty: "35px" }}
            custom={{
              tx: "clamp(95px, 11vw, 143px)",
              ty: "clamp(18px, 3vw, 35px)",
            }}
          >
            <motion.div variants={floatVariants} custom={4}>
              <img
                src="/Vector (5).png"
                alt=""
                className="w-8 h-8"
                loading="lazy"
              />
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
              loading="lazy"
              className="w-60 h-44 sm:w-72 sm:h-24 md:w-80 md:h-28 lg:w-92 lg:h-36 object-contain"
            />
          </motion.div>
        </div>
        <div className="px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-[32px] lg:py-[35px]">
          <h2
            className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[24px] font-extrabold text-[#222]"
            style={{ margin: "0 0 1px" }}
          >
            Create Your Profile
          </h2>
          <p
            className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] text-[#707070] leading-relaxed"
            style={{ margin: "2px" }}
          >
            Set up your profile in just a few minutes and choose what
            you&apos;re looking for.
          </p>
        </div>

        {/* <div style={{ padding: "35px 40px" }}>
          <h2
            style={{
              fontSize: "32px",
              margin: "0 0 10px",
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
        {/* <div className="px-3 py-5 sm:px-[12px] sm:py-[35px]">
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
</div> */}
      </motion.div>
    </Border>
  );
}
