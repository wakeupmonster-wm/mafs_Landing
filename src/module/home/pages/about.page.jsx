// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import {
//     Info,
//     Heart,
//     Globe,
//     Users,
//     ShieldCheck,
//     Zap,
//     Star,
//     ArrowLeft,
//     ChevronRight,
//     Menu,
//     MapPin,
//     Flag,
// } from "lucide-react";
// import Footer from "@/module/home/components/footer";

// const sections = [
//     {
//         id: "our-story",
//         icon: Heart,
//         title: "Our Story",
//         content: [
//             {
//                 subtitle: "Born in Australia",
//                 text: "Match At First Swipe (MAFS) was conceived with a simple yet powerful idea: dating should be more about real chemistry and less about endless, shallow swiping. Built right here in Australia, we wanted to create a platform that reflects the genuine, down-to-earth nature of Aussie dating.",
//             },
//             {
//                 subtitle: "The Vision",
//                 text: "We noticed that most dating apps felt like they were designed for a global audience, missing the local nuances and cultural vibes that make dating in Sydney, Melbourne, Brisbane, and beyond so unique. MAFS is our answer to that—a homegrown solution for a homegrown problem.",
//             },
//         ],
//     },
//     {
//         id: "mission",
//         icon: Globe,
//         title: "Our Mission",
//         content: [
//             {
//                 subtitle: "Real Connections",
//                 text: "Our mission is to facilitate meaningful connections that transcend the digital screen. We believe that everyone deserves to find someone who gets them, and we're committed to providing the tools and the environment to make that happen.",
//             },
//             {
//                 subtitle: "Built for Quality",
//                 text: "We focus on quality over quantity. Every feature in MAFS—from our rigorous photo verification to our intelligent matching algorithm—is designed to ensure you're meeting real, compatible people who are looking for the same thing you are.",
//             },
//         ],
//     },
//     {
//         id: "why-australia",
//         icon: Flag,
//         title: "Built for Australia",
//         content: [
//             {
//                 subtitle: "Local First",
//                 text: "Match At First Swipe is designed exclusively for Australians. This isn't just a marketing slogan; it's baked into our DNA. We prioritize local matching, understanding the geography and the social landscape of our beautiful country.",
//             },
//             {
//                 subtitle: "Australia's Newest Dating App",
//                 text: "As Australia's newest dating app, we bring a fresh perspective and a 'spin' on the traditional dating experience, tailor-made for the modern Aussie lifestyle.",
//             },
//         ],
//     },
//     {
//         id: "the-experience",
//         icon: Zap,
//         title: "The Experience",
//         content: [
//             {
//                 subtitle: "Seamless & Effortless",
//                 text: "From setting up your profile to unlocking premium rewards, everything is designed to stay simple and effortless. We want you to spend less time on the app and more time on your dates.",
//             },
//             {
//                 list: true,
//                 items: [
//                     "Verified Profiles: Meet real people with our blue-badge photo verification.",
//                     "Local Matches: Discover singles in your specific city and neighborhood.",
//                     "Premium Rewards: Get recognized and rewarded for being a great community member.",
//                     "Simple Interface: A clean, intuitive design that focuses on the photos and the bio.",
//                 ],
//             },
//         ],
//     },
// ];

// const AboutPage = () => {
//     const [activeSection, setActiveSection] = useState("our-story");
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
//                             <Info className="w-4 h-4 text-[#46C7CD]" />
//                             <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Our Story</span>
//                         </div>
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
//                             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Us</span>
//                         </h1>
//                     </div>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/50 text-sm sm:text-base">
//                         <p>Built for Australians, by Australians.</p>
//                     </div>
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

//                     {/* ===== LEFT SIDEBAR ===== */}
//                     <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
//                         <div className="sticky top-24">
//                             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h3>
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
//                         </div>
//                     </aside>

//                     {/* ===== MOBILE TOC ===== */}
//                     <div className="lg:hidden w-full mb-8">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="w-full bg-white rounded-2xl border border-slate-200/50 p-4 flex items-center justify-between shadow-sm"
//                         >
//                             <div className="flex items-center gap-3">
//                                 <Menu className="w-5 h-5 text-[#46C7CD]" />
//                                 <span className="font-bold text-slate-900 text-sm">Contents</span>
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
//                                         <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
//                                             <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
//                                         </div>
//                                         <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight pt-1.5 sm:pt-2">
//                                             {section.title}
//                                         </h2>
//                                     </div>

//                                     <div className="space-y-6 sm:space-y-8 pl-0 sm:pl-16">
//                                         {section.content.map((item, i) => (
//                                             <div key={i} className="prose prose-slate max-w-none text-slate-600 text-[15px] sm:text-base leading-relaxed">
//                                                 {item.subtitle && (
//                                                     <h4 className="text-[17px] font-bold text-slate-800 mb-2">
//                                                         {item.subtitle}
//                                                     </h4>
//                                                 )}
//                                                 {item.list ? (
//                                                     <ul className="space-y-2.5 mt-2 lg:ml-2">
//                                                         {item.items.map((listItem, j) => (
//                                                             <li key={j} className="flex items-start gap-3">
//                                                                 <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[#46C7CD]" />
//                                                                 <span>{listItem}</span>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 ) : (
//                                                     <p>{item.text}</p>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>

//                                     {index !== sections.length - 1 && (
//                                         <div className="max-w-3xl ml-0 sm:ml-16 mt-8 sm:mt-12 w-full h-px bg-slate-200/60" />
//                                     )}
//                                 </article>
//                             );
//                         })}
//                     </main>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default AboutPage;



import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
    Info,
    Heart,
    Globe,
    Users,
    ShieldCheck,
    Zap,
    Star,
    ArrowLeft,
    ChevronRight,
    Menu,
    MapPin,
    Flag,
    X,
} from "lucide-react";
import Footer from "@/module/home/components/footer";

const sections = [
    {
        id: "our-story",
        icon: Heart,
        title: "Our Story",
        content: [
            {
                subtitle: "Born in Australia",
                text: "Match At First Swipe (MAFS) was conceived with a simple yet powerful idea: dating should be more about real chemistry and less about endless, shallow swiping. Built right here in Australia, we wanted to create a platform that reflects the genuine, down-to-earth nature of Aussie dating.",
            },
            {
                subtitle: "The Vision",
                text: "We noticed that most dating apps felt like they were designed for a global audience, missing the local nuances and cultural vibes that make dating in Sydney, Melbourne, Brisbane, and beyond so unique. MAFS is our answer to that—a homegrown solution for a homegrown problem.",
            },
        ],
    },
    {
        id: "mission",
        icon: Globe,
        title: "Our Mission",
        content: [
            {
                subtitle: "Real Connections",
                text: "Our mission is to facilitate meaningful connections that transcend the digital screen. We believe that everyone deserves to find someone who gets them, and we're committed to providing the tools and the environment to make that happen.",
            },
            {
                subtitle: "Built for Quality",
                text: "We focus on quality over quantity. Every feature in MAFS—from our rigorous photo verification to our intelligent matching algorithm—is designed to ensure you're meeting real, compatible people who are looking for the same thing you are.",
            },
        ],
    },
    {
        id: "why-australia",
        icon: Flag,
        title: "Built for Australia",
        content: [
            {
                subtitle: "Local First",
                text: "Match At First Swipe is designed exclusively for Australians. This isn't just a marketing slogan; it's baked into our DNA. We prioritize local matching, understanding the geography and the social landscape of our beautiful country.",
            },
            {
                subtitle: "Australia's Newest Dating App",
                text: "As Australia's newest dating app, we bring a fresh perspective and a 'spin' on the traditional dating experience, tailor-made for the modern Aussie lifestyle.",
            },
        ],
    },
    {
        id: "the-experience",
        icon: Zap,
        title: "The Experience",
        content: [
            {
                subtitle: "Seamless & Effortless",
                text: "From setting up your profile to unlocking premium rewards, everything is designed to stay simple and effortless. We want you to spend less time on the app and more time on your dates.",
            },
            {
                list: true,
                items: [
                    "Verified Profiles: Meet real people with our blue-badge photo verification.",
                    "Local Matches: Discover singles in your specific city and neighborhood.",
                    "Premium Rewards: Get recognized and rewarded for being a great community member.",
                    "Simple Interface: A clean, intuitive design that focuses on the photos and the bio.",
                ],
            },
        ],
    },
];

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState("our-story");
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
        <div className="min-h-screen bg-[#F0F1F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

            {/* ===== HERO HEADER ===== */}
            <section className="relative overflow-hidden bg-footerBg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
                <div className="absolute top-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-[#46C7CD]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#00B4D8]/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] translate-y-1/3 -translate-x-1/4" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 xs:pt-10 sm:pt-14 md:pt-16 pb-12 xs:pb-14 sm:pb-20 md:pb-24">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300 mb-6 xs:mb-8 sm:mb-12 group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        Back to Home
                    </Link>

                    <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 xs:gap-2.5 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                            <Info className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#46C7CD]" />
                            <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Our Story</span>
                        </div>
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Us</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/50 text-xs xs:text-sm sm:text-base">
                        <p>Built for Australians, by Australians.</p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                        <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F0F1F3" />
                    </svg>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-14 2xl:gap-20">

                    {/* ===== LEFT SIDEBAR (Desktop) ===== */}
                    <aside className="hidden lg:block w-56 xl:w-64 2xl:w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Contents</h3>
                            <nav className="space-y-1 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-200">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`relative w-full text-left py-2.5 pl-8 pr-3 text-sm transition-all duration-300 group
                                            ${activeSection === section.id
                                                ? "text-[#46C7CD] font-bold"
                                                : "text-slate-600 font-medium hover:text-slate-900"
                                            }
                                        `}
                                    >
                                        <div
                                            className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300
                                                ${activeSection === section.id
                                                    ? "bg-[#46C7CD] scale-y-100"
                                                    : "bg-slate-300 scale-y-0 group-hover:scale-y-100"
                                                }
                                            `}
                                        />
                                        <div
                                            className={`absolute left-[8px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full border-2 bg-white transition-all duration-300 z-10
                                                ${activeSection === section.id
                                                    ? "border-[#46C7CD] scale-125"
                                                    : "border-slate-300 scale-100 group-hover:border-slate-400"
                                                }
                                            `}
                                        />
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* ===== MOBILE/TABLET TOC ===== */}
                    <div className="lg:hidden w-full">
                        <div className="sticky top-2 z-30">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-full bg-white rounded-xl xs:rounded-2xl border border-slate-200/50 p-3 xs:p-4 flex items-center justify-between shadow-sm active:scale-[0.99] transition-transform"
                            >
                                <div className="flex items-center gap-2.5 xs:gap-3">
                                    <Menu className="w-4 h-4 xs:w-5 xs:h-5 text-[#46C7CD]" />
                                    <span className="font-bold text-slate-900 text-xs xs:text-sm">
                                        {sections.find(s => s.id === activeSection)?.title || "Contents"}
                                    </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 xs:w-5 xs:h-5 text-slate-400 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
                            </button>

                            {isMobileMenuOpen && (
                                <>
                                    {/* Backdrop */}
                                    <div
                                        className="fixed inset-0 bg-black/20 z-20 sm:hidden"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    />
                                    <div className="relative z-30 mt-2 bg-white rounded-xl xs:rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden animate-[fadeIn_0.2s_ease]">
                                        <nav className="p-1.5 xs:p-2 space-y-0.5 xs:space-y-1">
                                            {sections.map((section) => {
                                                const Icon = section.icon;
                                                return (
                                                    <button
                                                        key={section.id}
                                                        onClick={() => scrollToSection(section.id)}
                                                        className={`w-full text-left px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm rounded-lg xs:rounded-xl transition-colors flex items-center gap-2.5 xs:gap-3
                                                            ${activeSection === section.id
                                                                ? "bg-[#46C7CD]/10 text-[#46C7CD] font-bold"
                                                                : "text-slate-600 font-medium hover:bg-slate-50 active:bg-slate-100"
                                                            }
                                                        `}
                                                    >
                                                        <Icon className={`w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0 ${activeSection === section.id ? "text-[#46C7CD]" : "text-slate-400"}`} />
                                                        {section.title}
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* ===== RIGHT CONTENT ===== */}
                    <main className="flex-1 min-w-0 space-y-10 xs:space-y-12 sm:space-y-16">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <article
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-28 sm:scroll-mt-24 lg:scroll-mt-32"
                                >
                                    <div className="flex items-start gap-3 xs:gap-4 mb-4 xs:mb-5 sm:mb-6 group">
                                        <div className="flex-shrink-0 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
                                            <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
                                        </div>
                                        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight pt-1 xs:pt-1.5 sm:pt-2">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-5 xs:space-y-6 sm:space-y-8 pl-0 xs:pl-0 sm:pl-16">
                                        {section.content.map((item, i) => (
                                            <div key={i} className="prose prose-slate max-w-none text-slate-600 text-sm xs:text-[15px] sm:text-base leading-relaxed">
                                                {item.subtitle && (
                                                    <h4 className="text-[15px] xs:text-[16px] sm:text-[17px] font-bold text-slate-800 mb-1.5 xs:mb-2">
                                                        {item.subtitle}
                                                    </h4>
                                                )}
                                                {item.list ? (
                                                    <ul className="space-y-2 xs:space-y-2.5 mt-2 lg:ml-2">
                                                        {item.items.map((listItem, j) => (
                                                            <li key={j} className="flex items-start gap-2.5 xs:gap-3">
                                                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 xs:mt-2.5 rounded-full bg-[#46C7CD]" />
                                                                <span className="text-sm xs:text-[15px] sm:text-base">{listItem}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-sm xs:text-[15px] sm:text-base">{item.text}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {index !== sections.length - 1 && (
                                        <div className="max-w-3xl ml-0 sm:ml-16 mt-6 xs:mt-8 sm:mt-12 w-full h-px bg-slate-200/60" />
                                    )}
                                </article>
                            );
                        })}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;