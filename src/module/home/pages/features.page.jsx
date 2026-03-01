// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import {
//     ShieldCheck,
//     Star,
//     Activity,
//     ArrowRight,
//     ChevronRight,
//     Menu,
//     ArrowLeft,
//     Video,
//     Filter,
//     MessageCircle,
//     Zap,
//     Heart,
//     Users,
// } from "lucide-react";
// import Footer from "@/module/home/components/footer";

// const sections = [
//     {
//         id: "verification",
//         icon: ShieldCheck,
//         title: "Real & Verified Profiles",
//         content: [
//             {
//                 subtitle: "Photo Verification",
//                 text: "Every user on Match At First Swipe goes through a rigorous photo verification process. When you see a blue badge on a profile, you can be 100% sure that the person you're chatting with is exactly who they claim to be.",
//             },
//             {
//                 subtitle: "Safe Community",
//                 text: "Our dedicated moderation team works 24/7 to ensure MAFS remains a respectful and authentic space. We use advanced AI to detect and proactively remove fake accounts before they even reach your stack.",
//             },
//         ],
//     },
//     {
//         id: "compatibility",
//         icon: Filter,
//         title: "Advanced Matchmaking",
//         content: [
//             {
//                 subtitle: "Values-Based matching",
//                 text: "We believe real chemistry starts with shared values. Our matching algorithm doesn't just look at age and distance—it analyzes your lifestyle, goals, and personality traits to find people you'll actually click with.",
//             },
//             {
//                 subtitle: "Intent Filter",
//                 text: "Tired of guessing what someone wants? Our 'Match Intent' feature lets you see if someone is looking for a serious relationship, casual dating, or just making friends before you even swipe.",
//             },
//         ],
//     },
//     {
//         id: "icebreakers",
//         icon: MessageCircle,
//         title: "Effortless Conversations",
//         content: [
//             {
//                 subtitle: "Personalised Prompts",
//                 text: "Forget 'Hey' and 'How's it going'. We provide bespoke icebreaker prompts based on your shared interests, making it easier than ever to start a meaningful conversation from the very first message.",
//             },
//             {
//                 subtitle: "Interactive Profiles",
//                 text: "Our profiles are designed to be dynamic. Share your favorite Spotify tracks, your latest travel photos, and your niche interests to give matches a real window into your world.",
//             },
//         ],
//     },
//     {
//         id: "video-dating",
//         icon: Video,
//         title: "Secure Video Dates",
//         content: [
//             {
//                 subtitle: "Built-in Video Suite",
//                 text: "Take the pressure off the first date. Our secure, in-app video chat feature allows you to have a 'vibe check' from the comfort of your home without ever having to share your phone number or social media handles.",
//             },
//             {
//                 subtitle: "Privacy First",
//                 text: "Your safety is our priority. In-app video calls are end-to-end encrypted and include one-tap reporting features if things ever feel uncomfortable.",
//             },
//         ],
//     },
//     {
//         id: "discovery",
//         icon: Zap,
//         title: "Instant Discovery",
//         content: [
//             {
//                 subtitle: "Swipe & Connect",
//                 text: "Our interface is designed for discovery. Effortlessly swipe through profiles tailored to your tastes. When the feeling is mutual, it's an instant match—no waiting, just connecting.",
//             },
//             {
//                 subtitle: "Smart Stack",
//                 text: "The more you use MAFS, the smarter it gets. Your stack learns your preferences in real-time, prioritizing the types of profiles you're most likely to engage with.",
//             },
//         ],
//     },
//     {
//         id: "premium",
//         icon: Star,
//         title: "Match Premium",
//         content: [
//             {
//                 subtitle: "See Who Likes You",
//                 text: "Stop guessing. With Match Premium, you can see everyone who has already swiped right on you. Pick and choose from your admirers and skip the search.",
//             },
//             {
//                 subtitle: "Unlimited Swipes",
//                 text: "Never let a daily limit stand in the way of finding the one. Premium users enjoy unlimited swipes, five weekly Super Swipes, and one free Boost per month.",
//             },
//         ],
//     },
// ];

// const FeaturesPage = () => {
//     const [activeSection, setActiveSection] = useState("verification");
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id);
//                     }
//                 });
//             },
//             { rootMargin: "-20% 0px -80% 0px" }
//         );

//         sections.forEach((section) => {
//             const element = document.getElementById(section.id);
//             if (element) observer.observe(element);
//         });

//         return () => observer.disconnect();
//     }, []);

//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             const offset = window.innerWidth < 1024 ? 80 : 40;
//             const elementPosition = element.getBoundingClientRect().top;
//             const offsetPosition = elementPosition + window.pageYOffset - offset;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: "smooth",
//             });
//             setIsMobileMenuOpen(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#F0F1F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

//             {/* ===== HERO HEADER ===== */}
//             <section className="relative overflow-hidden bg-footerBg">
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
//                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#46C7CD]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
//                 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B4D8]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

//                 <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 md:pb-24">
//                     <Link
//                         to="/"
//                         className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 mb-8 sm:mb-12 group"
//                     >
//                         <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//                         Back to Home
//                     </Link>

//                     <div className="flex flex-col gap-4 sm:gap-6 mb-6">
//                         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
//                             <Star className="w-4 h-4 text-[#46C7CD]" />
//                             <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Experience MAFS</span>
//                         </div>
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
//                             App <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Features</span>
//                         </h1>
//                     </div>

//                     <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
//                         Discover the tools we've built to help you find real chemistry. From photo verification to advanced compatibility filters, MAFS is designed for meaningful connections.
//                     </p>
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0">
//                     <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
//                         <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F0F1F3" />
//                     </svg>
//                 </div>
//             </section>

//             {/* ===== MAIN CONTENT ===== */}
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
//                 <div className="flex gap-10 lg:gap-14 xl:gap-20">

//                     {/* ===== LEFT SIDEBAR (Desktop Table of Contents) ===== */}
//                     <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
//                         <div className="sticky top-24">
//                             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Platform Features</h3>
//                             <nav className="space-y-1 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-200">
//                                 {sections.map((section) => (
//                                     <button
//                                         key={section.id}
//                                         onClick={() => scrollToSection(section.id)}
//                                         className={`relative w-full text-left py-2.5 pl-8 pr-3 text-sm transition-all duration-300 group
//                       ${activeSection === section.id
//                                                 ? "text-[#46C7CD] font-bold"
//                                                 : "text-slate-600 font-medium hover:text-slate-900"
//                                             }
//                     `}
//                                     >
//                                         <div
//                                             className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300
//                         ${activeSection === section.id
//                                                     ? "bg-[#46C7CD] scale-y-100"
//                                                     : "bg-slate-300 scale-y-0 group-hover:scale-y-100"
//                                                 }
//                       `}
//                                         />
//                                         <div
//                                             className={`absolute left-[8px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 bg-white transition-all duration-300 z-10
//                         ${activeSection === section.id
//                                                     ? "border-[#46C7CD] scale-125"
//                                                     : "border-slate-300 scale-100 group-hover:border-slate-400"
//                                                 }
//                       `}
//                                         />
//                                         {section.title}
//                                     </button>
//                                 ))}
//                             </nav>

//                             <div className="mt-10 bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm">
//                                 <h4 className="text-sm font-bold text-slate-900 mb-3">Next Steps</h4>
//                                 <div className="space-y-4">
//                                     <Link to="/how-it-works" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
//                                         How it works
//                                         <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
//                                     </Link>
//                                     <Link to="/waitlist" className="bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm text-center block shadow-lg shadow-[#46C7CD]/20 hover:shadow-xl transition-all">
//                                         Join the waitlist
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </aside>

//                     {/* ===== MOBILE TABLE OF CONTENTS ===== */}
//                     <div className="lg:hidden w-full mb-8">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="w-full bg-white rounded-2xl border border-slate-200/50 p-4 flex items-center justify-between shadow-sm"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <Menu className="w-5 h-5 text-[#46C7CD]" />
//                                 <span className="font-bold text-slate-900 text-sm">Feature Categories</span>
//                             </div>
//                             <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
//                         </button>

//                         {isMobileMenuOpen && (
//                             <div className="mt-2 bg-white rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden animate-[fadeIn_0.2s_ease]">
//                                 <nav className="p-2 space-y-1">
//                                     {sections.map((section) => (
//                                         <button
//                                             key={section.id}
//                                             onClick={() => scrollToSection(section.id)}
//                                             className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-colors
//                         ${activeSection === section.id
//                                                     ? "bg-[#46C7CD]/10 text-[#46C7CD] font-bold"
//                                                     : "text-slate-600 font-medium hover:bg-slate-50"
//                                                 }
//                       `}
//                                         >
//                                             {section.title}
//                                         </button>
//                                     ))}
//                                 </nav>
//                             </div>
//                         )}
//                     </div>

//                     {/* ===== RIGHT CONTENT ===== */}
//                     <main className="flex-1 min-w-0 space-y-12 sm:space-y-16">
//                         {sections.map((section, index) => {
//                             const Icon = section.icon;
//                             return (
//                                 <article
//                                     key={section.id}
//                                     id={section.id}
//                                     className="scroll-mt-24 lg:scroll-mt-32"
//                                 >
//                                     <div className="flex items-start gap-4 mb-6 group">
//                                         <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
//                                             <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#46C7CD]" />
//                                         </div>
//                                         <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 leading-tight pt-2 sm:pt-3">
//                                             {section.title}
//                                         </h2>
//                                     </div>

//                                     <div className="space-y-8 sm:space-y-10 pl-0 sm:pl-16 md:pl-20">
//                                         {section.content.map((item, i) => (
//                                             <div key={i} className="max-w-3xl">
//                                                 <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
//                                                     <span className="w-1.5 h-1.5 rounded-full bg-[#46C7CD]" />
//                                                     {item.subtitle}
//                                                 </h4>
//                                                 <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
//                                                     {item.text}
//                                                 </p>
//                                             </div>
//                                         ))}

//                                         {/* Visual Placeholder for features */}
//                                         <div className="bg-white rounded-[32px] border border-slate-200/50 p-6 sm:p-8 shadow-sm max-w-3xl relative overflow-hidden group/card">
//                                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#46C7CD]/5 rounded-full blur-3xl group-hover/card:bg-[#46C7CD]/10 transition-colors" />
//                                             <div className="flex flex-col sm:flex-row items-center gap-6">
//                                                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#46C7CD]/10 flex items-center justify-center bg-slate-50 flex-shrink-0">
//                                                     <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#46C7CD] animate-pulse" />
//                                                 </div>
//                                                 <div>
//                                                     <h5 className="font-bold text-slate-800 mb-1">Interactive Engagement</h5>
//                                                     <p className="text-xs sm:text-sm text-slate-500">How we're changing the game for dating in Australia.</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {index !== sections.length - 1 && (
//                                         <div className="max-w-3xl ml-0 sm:ml-16 md:ml-20 mt-12 sm:mt-16 w-full h-px bg-slate-200/60" />
//                                     )}
//                                 </article>
//                             );
//                         })}

//                         <div className="mt-16 sm:mt-24 bg-slate-900 rounded-[40px] p-8 sm:p-12 text-center max-w-4xl mx-auto sm:ml-16 relative overflow-hidden">
//                             <div className="absolute top-0 right-0 w-64 h-64 bg-[#46C7CD]/10 rounded-full blur-[80px]" />
//                             <div className="relative z-10">
//                                 <Star className="w-12 h-12 text-[#46C7CD] mx-auto mb-6" />
//                                 <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to experience these features?</h3>
//                                 <p className="text-white/60 mb-10 max-w-xl mx-auto">
//                                     Be among the first to find better connections. Join our exclusive waitlist today and get early access.
//                                 </p>
//                                 <Link
//                                     to="/waitlist"
//                                     className="inline-flex items-center gap-2 bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] text-white font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-[#46C7CD]/30 transition-all transform hover:-translate-y-1"
//                                 >
//                                     Join the Waitlist
//                                     <ArrowRight className="w-5 h-5" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default FeaturesPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Star,
  Activity,
  ArrowRight,
  ChevronRight,
  Menu,
  ArrowLeft,
  Video,
  Filter,
  MessageCircle,
  Zap,
  Heart,
  Users,
} from "lucide-react";
import Footer from "@/module/home/components/footer";

const sections = [
  {
    id: "verification",
    icon: ShieldCheck,
    title: "Real & Verified Profiles",
    content: [
      {
        subtitle: "Photo Verification",
        text: "Every user on Match At First Swipe goes through a rigorous photo verification process. When you see a blue badge on a profile, you can be 100% sure that the person you're chatting with is exactly who they claim to be.",
      },
      {
        subtitle: "Safe Community",
        text: "Our dedicated moderation team works 24/7 to ensure MAFS remains a respectful and authentic space. We use advanced AI to detect and proactively remove fake accounts before they even reach your stack.",
      },
    ],
  },
  {
    id: "compatibility",
    icon: Filter,
    title: "Advanced Matchmaking",
    content: [
      {
        subtitle: "Values-Based matching",
        text: "We believe real chemistry starts with shared values. Our matching algorithm doesn't just look at age and distance—it analyzes your lifestyle, goals, and personality traits to find people you'll actually click with.",
      },
      {
        subtitle: "Intent Filter",
        text: "Tired of guessing what someone wants? Our 'Match Intent' feature lets you see if someone is looking for a serious relationship, casual dating, or just making friends before you even swipe.",
      },
    ],
  },
  {
    id: "icebreakers",
    icon: MessageCircle,
    title: "Effortless Conversations",
    content: [
      {
        subtitle: "Personalised Prompts",
        text: "Forget 'Hey' and 'How's it going'. We provide bespoke icebreaker prompts based on your shared interests, making it easier than ever to start a meaningful conversation from the very first message.",
      },
      {
        subtitle: "Interactive Profiles",
        text: "Our profiles are designed to be dynamic. Share your favorite Spotify tracks, your latest travel photos, and your niche interests to give matches a real window into your world.",
      },
    ],
  },
  {
    id: "video-dating",
    icon: Video,
    title: "Secure Video Dates",
    content: [
      {
        subtitle: "Built-in Video Suite",
        text: "Take the pressure off the first date. Our secure, in-app video chat feature allows you to have a 'vibe check' from the comfort of your home without ever having to share your phone number or social media handles.",
      },
      {
        subtitle: "Privacy First",
        text: "Your safety is our priority. In-app video calls are end-to-end encrypted and include one-tap reporting features if things ever feel uncomfortable.",
      },
    ],
  },
  {
    id: "discovery",
    icon: Zap,
    title: "Instant Discovery",
    content: [
      {
        subtitle: "Swipe & Connect",
        text: "Our interface is designed for discovery. Effortlessly swipe through profiles tailored to your tastes. When the feeling is mutual, it's an instant match—no waiting, just connecting.",
      },
      {
        subtitle: "Smart Stack",
        text: "The more you use MAFS, the smarter it gets. Your stack learns your preferences in real-time, prioritizing the types of profiles you're most likely to engage with.",
      },
    ],
  },
  {
    id: "premium",
    icon: Star,
    title: "Match Premium",
    content: [
      {
        subtitle: "See Who Likes You",
        text: "Stop guessing. With Match Premium, you can see everyone who has already swiped right on you. Pick and choose from your admirers and skip the search.",
      },
      {
        subtitle: "Unlimited Swipes",
        text: "Never let a daily limit stand in the way of finding the one. Premium users enjoy unlimited swipes, five weekly Super Swipes, and one free Boost per month.",
      },
    ],
  },
];

const FeaturesPage = () => {
  const [activeSection, setActiveSection] = useState("verification");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 1024 ? 80 : 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F0F1F3]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ===== HERO HEADER ===== */}
      <section className="relative overflow-hidden bg-footerBg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
        <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-[#46C7CD]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#00B4D8]/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 md:pt-16 pb-12 sm:pb-20 md:pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 mb-6 sm:mb-8 md:mb-12 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>

          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#46C7CD]" />
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider">
                Experience MAFS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
              App{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">
                Features
              </span>
            </h1>
          </div>

          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Discover the tools we've built to help you find real chemistry. From
            photo verification to advanced compatibility filters, MAFS is
            designed for meaningful connections.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 59.8"
            fill="none"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
              fill="#F0F1F3"
            />
          </svg>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-14 2xl:gap-20">
          {/* ===== LEFT SIDEBAR (Desktop Table of Contents) ===== */}
          <aside className="hidden lg:block w-56 xl:w-64 2xl:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Platform Features
              </h3>
              <nav className="space-y-1 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-200">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`relative w-full text-left py-2.5 pl-8 pr-3 text-sm transition-all duration-300 group
                                            ${
                                              activeSection === section.id
                                                ? "text-[#46C7CD] font-bold"
                                                : "text-slate-600 font-medium hover:text-slate-900"
                                            }
                                        `}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300
                                                ${
                                                  activeSection === section.id
                                                    ? "bg-[#46C7CD] scale-y-100"
                                                    : "bg-slate-300 scale-y-0 group-hover:scale-y-100"
                                                }
                                            `}
                    />
                    <div
                      className={`absolute left-[8px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 bg-white transition-all duration-300 z-10
                                                ${
                                                  activeSection === section.id
                                                    ? "border-[#46C7CD] scale-125"
                                                    : "border-slate-300 scale-100 group-hover:border-slate-400"
                                                }
                                            `}
                    />
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-10 bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-3">
                  Next Steps
                </h4>
                <div className="space-y-4">
                  <Link
                    to="/how-it-works"
                    className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors"
                  >
                    How it works
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    to="/waitlist"
                    className="bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm text-center block shadow-lg shadow-[#46C7CD]/20 hover:shadow-xl transition-all"
                  >
                    Join the waitlist
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== MOBILE/TABLET TABLE OF CONTENTS ===== */}
          <div className="lg:hidden w-full">
            <div className="sticky top-2 z-30">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 p-3 sm:p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#46C7CD]" />
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {sections.find((s) => s.id === activeSection)?.title ||
                      "Feature Categories"}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isMobileMenuOpen && (
                <>
                  {/* Backdrop for small screens */}
                  <div
                    className="fixed inset-0 bg-black/20 z-20 sm:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  <div className="relative z-30 mt-2 bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden animate-[fadeIn_0.2s_ease]">
                    <nav className="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg sm:rounded-xl transition-colors flex items-center gap-2.5 sm:gap-3
                                                            ${
                                                              activeSection ===
                                                              section.id
                                                                ? "bg-[#46C7CD]/10 text-[#46C7CD] font-bold"
                                                                : "text-slate-600 font-medium hover:bg-slate-50 active:bg-slate-100"
                                                            }
                                                        `}
                          >
                            <Icon
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${
                                activeSection === section.id
                                  ? "text-[#46C7CD]"
                                  : "text-slate-400"
                              }`}
                            />
                            {section.title}
                          </button>
                        );
                      })}
                    </nav>

                    {/* Mobile Next Steps */}
                    <div className="border-t border-slate-100 p-3 sm:p-4 space-y-2.5 sm:space-y-3">
                      <Link
                        to="/how-it-works"
                        className="flex items-center justify-between text-xs sm:text-sm text-slate-600 hover:text-[#46C7CD] px-1 group transition-colors"
                      >
                        How it works
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-[#46C7CD] transition-all" />
                      </Link>
                      <Link
                        to="/waitlist"
                        className="bg-join-gradient border-2 border-[#cfe0f7ed] text-white font-bold py-2 sm:py-2.5 px-4 rounded-xl text-xs sm:text-sm text-center block shadow-lg shadow-[#46C7CD]/20"
                      >
                        Join the waitlist
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ===== RIGHT CONTENT ===== */}
          <main className="flex-1 min-w-0 space-y-10 sm:space-y-12 md:space-y-16">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 sm:scroll-mt-24 lg:scroll-mt-32"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 group">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#46C7CD]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-slate-900 leading-tight pt-1 sm:pt-2 md:pt-3">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6 sm:space-y-8 md:space-y-10 pl-0 sm:pl-16 md:pl-20">
                    {section.content.map((item, i) => (
                      <div key={i} className="max-w-3xl">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#46C7CD] flex-shrink-0" />
                          {item.subtitle}
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}

                    {/* Visual Placeholder for features */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] border border-slate-200/50 p-4 sm:p-6 md:p-8 shadow-sm max-w-3xl relative overflow-hidden group/card">
                      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#46C7CD]/5 rounded-full blur-2xl sm:blur-3xl group-hover/card:bg-[#46C7CD]/10 transition-colors" />
                      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-[#46C7CD]/10 flex items-center justify-center bg-slate-50 flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#46C7CD] animate-pulse" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h5 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">
                            Interactive Engagement
                          </h5>
                          <p className="text-[11px] sm:text-xs md:text-sm text-slate-500">
                            How we're changing the game for dating in Australia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index !== sections.length - 1 && (
                    <div className="max-w-3xl ml-0 sm:ml-16 md:ml-20 mt-8 sm:mt-12 md:mt-16 w-full h-px bg-slate-200/60" />
                  )}
                </article>
              );
            })}

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 md:mt-24 bg-slate-900 rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto sm:ml-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#46C7CD]/10 rounded-full blur-[60px] sm:blur-[80px]" />
              <div className="relative z-10">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#46C7CD] mx-auto mb-4 sm:mb-5 md:mb-6" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Ready to experience these features?
                </h3>
                <p className="text-white/60 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto text-sm sm:text-base">
                  Be among the first to find better connections. Join our
                  exclusive waitlist today and get early access.
                </p>
                <Link
                  to="/waitlist"
                  className="inline-flex items-center gap-2 whitespace-nowrap bg-join-gradient text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full border-4 border-[#cfe0f7ed] transition-all transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
