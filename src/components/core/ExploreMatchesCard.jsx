import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Border from "./border";

const images = [
  {
    id: 1,
    url: "/Frame 17.png",
    name: "MONICA",
    age: 24,
    dist: "5 km",
  },
  {
    id: 2,
    url: "/Frame 17 (1).png",
    name: "ELIZA",
    age: 22,
    dist: "3 km",
  },
];

export default function ExploreMatchesCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delayedIndex, setDelayedIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  // const [isExiting, setIsExiting] = useState(false);
  //  const [activeState, setActiveState] = useState(false);
  const cardRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ Card visible hua - animation start karo
            setIsHovered(true);
          } else {
            // ✅ Card screen se gaya - animation band karo
            setIsHovered(false);
          }
        });
      },
      {
        threshold: 0.5, // ✅ 50% card visible hone par trigger
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Cards auto change karo
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 850);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  // ✅ Delayed index
  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    const timer = setTimeout(() => {
      setDelayedIndex(next);
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // useEffect(() => {
  //   const next = (currentIndex + 1) % images.length;
  //   const timer = setTimeout(() => {
  //     setDelayedIndex(next);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, [currentIndex]);

  // useEffect(() => {
  //   let interval;
  //   if (isHovered) {
  //     interval = setInterval(() => {
  //       setIsExiting(true);
  //       setTimeout(() => {
  //         setCurrentIndex((prev) => (prev + 1) % images.length);
  //         setIsExiting(false);
  //       }, 850);
  //     }, 3500);
  //   }
  //   return () => clearInterval(interval);
  // }, [isHovered]);

  return (
    <Border>
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        //  onMouseEnter={() => setActiveState(true)}
        // onMouseLeave={() => setActiveState(false)}
        // ✅ Mobile touch
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        style={{
          width: "100%",
          borderRadius: "28px",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          border: "4px solid white",
        }}
        className="shadow-lg"
      >
        {/* Image Area */}
        <div
          className="h-[220px] sm:h-[260px] md:h-[300px] lg:h-[345px]"
          style={{
            position: "relative",
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
                "linear-gradient(180deg, #A8F2F7 0%, #A8F2F7 5%, rgba(168, 242, 247, 0.6) 45%, rgba(168, 242, 247, 0.3) 65%, rgba(255, 255, 255, 0) 85%, #FFFFFF 100%)",
              zIndex: 1,
            }}
          />

          {/* ── BACK CARD ── */}
          <motion.div
            className="
              absolute  bg-cover bg-center
              w-[100px] h-[175px]
              sm:w-[130px] sm:h-[225px]
              md:w-[145px] md:h-[255px]
              lg:w-[160px] lg:h-[280px]
            "
            style={{
              backgroundImage: `url("${images[delayedIndex].url}")`,
              zIndex: 5,
            }}
            animate={{
              scale: 1,
              y: 0,
              rotate: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />

          {/* ── FRONT CARD ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="
                absolute  bg-cover bg-center
                flex flex-col justify-end
                w-[100px] h-[175px]
                sm:w-[130px] sm:h-[225px]
                md:w-[145px] md:h-[255px]
                lg:w-[160px] lg:h-[280px]
              "
              style={{
                backgroundImage: `url("${images[currentIndex].url}")`,
                padding: "12px",
                color: "white",
                zIndex: 10,
              }}
              initial={{ rotate: 0, x: 0, opacity: 1, scale: 1 }}
              animate={
                isHovered
                  ? // ? { rotate: 16, x: 100, scale: 1, opacity: 1 }
                    {
                      rotate: isMobile ? 10 : 16,
                      x: isMobile ? 70 : 100,
                      scale: 1,
                      opacity: 1,
                    }
                  : { rotate: 0, x: 0, scale: 1, opacity: 1 }
              }
              exit={{
                x: 200,
                y: -1,
                rotate: 28,
                opacity: 0,
                transition: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: "10px" }}>
                    {images[currentIndex].name}
                  </span>
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: "13px",
                      opacity: 0.9,
                    }}
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
                  style={{
                    fontSize: "11px",
                    opacity: 0.85,
                    marginTop: "3px",
                  }}
                >
                  📍{images[currentIndex].dist}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div
          className="
            px-5 py-6
            sm:px-8 sm:py-7
            md:px-9 md:py-8
            lg:px-[40px] lg:py-[36px]
          "
          style={{ background: "white", zIndex: 10 }}
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
            Explore Matches
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
            See profiles matched based on your preferences and location in
            Australia.
          </p>
        </div>
      </motion.div>
    </Border>
  );
}
