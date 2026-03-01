import React, { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft, Users, Bell } from "lucide-react";
import WaitlistSection from "@/module/home/components/waitlist";
import Footer from "@/module/home/components/footer";

const WaitlistPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F0F1F3]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ===== HERO HEADER ===== */}
      <section className="relative overflow-hidden bg-footerBg">
        {/* Gradient Overlays matching the suite */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#46C7CD]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B4D8]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 md:pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 mb-8 sm:mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-4 sm:gap-6 mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <Bell className="w-4 h-4 text-[#46C7CD]" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Early Access
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">
                Waitlist
              </span>
            </h1>
          </div>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Match At First Swipe is launching soon in Australia. Join thousands
            of early adopters and be the first to experience a dating app
            designed for real chemistry.
          </p>
        </div>

        {/* Bottom Wave SVG to match the theme */}
        <div className="absolute bottom-0 left-0 right-0 leading-[0] overflow-hidden">
          <svg
            viewBox="0 0 1440 59.2"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-auto"
            shapeRendering="manual" // Pixel gaps ko rokne ke liye
          >
            <path
              d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#F0F1F3"
              strokeWidth="0" // Stroke ko explicitly zero karein
            />
          </svg>
        </div>
      </section>

      {/* ===== WAITLIST SECTION ===== */}
      <main className="relative z-10 -mt-8 sm:-mt-12 md:-mt-18 pb-16 sm:pb-24">
        <WaitlistSection />

        {/* Why join waitlist section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Priority Matchmaking",
                desc: "Waitlist members get moved to the top of the stack for the first month of launch.",
              },
              {
                icon: Bell,
                title: "Launch Notifications",
                desc: "Get an exclusive invite code to join before the general public in your city.",
              },
              {
                icon: Users,
                title: "Charter Member Badge",
                desc: "A permanent unique badge on your profile showing you were here from day one.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#46C7CD]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#46C7CD]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaitlistPage;
