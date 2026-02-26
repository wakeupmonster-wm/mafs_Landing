/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Border from "./border";

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

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setIsExiting(true);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsExiting(false);
        }, 850);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Border>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
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

          {/* ── BACK CARD ── */}
          <motion.div
            style={{
              position: "absolute",
              width: "210px",
              height: "280px",
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
                ? { scale: 1, opacity: 1, y: 0, rotate: 0 }
                : isHovered
                ? { scale: 0.9, opacity: 0.85, y: 8, rotate: 0 }
                : { scale: 0.82, opacity: 0.4, y: 14, rotate: 0 }
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
                height: "280px",
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
  );
}