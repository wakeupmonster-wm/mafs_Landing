import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowUp } from "lucide-react";

// Profile Card Component for reusable styling
const ProfileCard = ({ image, name, age, distance, isTop, rotation, xOffset, zIndex, isHovered }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "210px",
        height: "300px",
        left: "calc(50% - 105px)",
        top: "calc(50% - 150px)",
        borderRadius: "24px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
        border: "4px solid white",
        boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        color: "white",
        zIndex: zIndex,
        overflow: "hidden"
      }}
      animate={{
        rotate: isHovered ? rotation * 1.5 : rotation,
        x: isHovered ? xOffset * 1.8 : xOffset,
        y: isHovered ? -10 : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
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
            {name} ({age})
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
            <span role="img" aria-label="location">📍</span> {distance}
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
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}</style>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
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
          {/* Back Card */}
          <ProfileCard
            image={profiles[1].image}
            name={profiles[1].name}
            age={profiles[1].age}
            distance={profiles[1].distance}
            isTop={false}
            rotation={-8}
            xOffset={-20}
            zIndex={10}
            isHovered={isHovered}
          />

          {/* Front Card */}
          <ProfileCard
            image={profiles[0].image}
            name={profiles[0].name}
            age={profiles[0].age}
            distance={profiles[0].distance}
            isTop={true}
            rotation={6}
            xOffset={30}
            zIndex={20}
            isHovered={isHovered}
          />
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
  );
}
