export default function StarsBackground() {
  const stars = [
    // {
    //   top: "15%",
    //   left: "8%",
    //   size: "text-xl sm:text-2xl",
    //   opacity: "text-white/30",
    // },
    {
      top: "34%",
      left: "6%",
      size: "text-4xl",
      opacity: "text-white/25",
    },
    {
      top: "6%",
      right: "32%",
      size: "text-xl sm:text-2xl",
      opacity: "text-white/30",
    },
    { top: "48%", left: "29%", size: "text-5xl", opacity: "text-[#09c1c7]" },
    {
      top: "95%",
      left: "22%",
      size: "text-5xl",
      opacity: "text-white/15",
    },
    {
      top: "88%",
      left: "65%",
      size: "text-6xl",
      opacity: "text-white/15",
    },
    { top: "31%", right: "21.5%", size: "text-4xl", opacity: "text-[#09c1c7]" },
    { top: "6%", left: "37.5%", size: "text-5xl", opacity: "text-[#09c1c7]" },
  ];

  return (
    <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className={`absolute ${star.opacity} ${star.size}`}
          style={{ top: star.top, left: star.left, right: star.right }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}
