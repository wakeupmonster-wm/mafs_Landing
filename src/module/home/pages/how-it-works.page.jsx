import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
    UserPlus,
    Search,
    MessageSquareHeart,
    CalendarHeart,
    ArrowRight,
    ChevronRight,
    Menu,
    ArrowLeft,
    Smartphone,
    CheckCircle2,
} from "lucide-react";
import Dashboard from "@/components/howToMatch";
import Footer from "@/module/home/components/footer";

const sections = [
    {
        id: "profile",
        icon: UserPlus,
        title: "1. Create Your Profile",
        content: [
            {
                subtitle: "The Sign-up Process",
                text: "Getting started on MAFS is simple but thorough. We walk you through a series of personality-driven questions designed to understand who you are beyond your photos. This allows us to find matches based on deep compatibility.",
            },
            {
                subtitle: "Verification is Mandatory",
                text: "To maintain our high safety standards, all profiles must undergo photo verification before they can start swiping. This ensures every person you see is real and actively looking to connect.",
            },
        ],
    },
    {
        id: "discovery",
        icon: Search,
        title: "2. Explore & Discover",
        content: [
            {
                subtitle: "Curated Stack",
                text: "Your daily stack is a selection of profiles chosen specifically for you. We take into account your distance, age, and most importantly, your compatibility score. You can view their interests, music taste, and what they're looking for upfront.",
            },
            {
                subtitle: "Intent Filter",
                text: "See exactly what someone wants—whether it's long-term commitment or just a casual date—right there on their profile 'Intent' badge. No more mixed signals.",
            },
        ],
    },
    {
        id: "interface",
        icon: Smartphone,
        title: "3. Interface Experience",
        content: [
            {
                subtitle: "Smooth Interaction",
                text: "Our swiping interface is built for speed and elegance. Experience fluidity as you discover potential matches. Below is a live demonstration of our matchmaking interface in action.",
            },
            {
                isDashboard: true,
            },
            {
                subtitle: "Expressing Interest",
                text: "A swipe right indicates interest. If they've already liked you, it's an instant match! If not, your profile will be prioritized in their stack based on your compatibility.",
            },
        ],
    },
    {
        id: "matching",
        icon: MessageSquareHeart,
        title: "4. Building Connections",
        content: [
            {
                subtitle: "Icebreaker & Chat",
                text: "Once you match, the magic begins. We provide personalized icebreakers to get the conversation flowing. Our secure chat features allow you to share photos and voice notes effortlessly.",
            },
            {
                subtitle: "Safety First",
                text: "Our chat includes safety prompts and easy reporting features. You have full control over who you talk to and for how long.",
            },
        ],
    },
    {
        id: "dating",
        icon: CalendarHeart,
        title: "5. Meeting Your Match",
        content: [
            {
                subtitle: "Video Vibe Checks",
                text: "We recommend a video date as your first step. It's safe, convenient, and allows you to confirm the chemistry before meeting in person.",
            },
            {
                subtitle: "Offline Dates",
                text: "When you're ready, take it offline. We've even partnered with local venues to offer 'MAFS Verified' date spots where you can enjoy your first meeting with confidence.",
            },
        ],
    },
];

const HowItWorksPage = () => {
    const [activeSection, setActiveSection] = useState("profile");
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
                            <CheckCircle2 className="w-4 h-4 text-[#46C7CD]" />
                            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">The MAFS Journey</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
                            How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Works</span>
                        </h1>
                    </div>

                    <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                        Finding love on Match At First Swipe is designed to be intentional, safe, and fun. Follow our simple five-step process to go from profile creation to your first real date.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
                        <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F0F1F3" />
                    </svg>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="flex gap-10 lg:gap-14 xl:gap-20">

                    {/* ===== LEFT SIDEBAR ===== */}
                    <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">The 5 Steps</h3>
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

                            <div className="mt-10 bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm">
                                <h4 className="text-sm font-bold text-slate-900 mb-3">Explore</h4>
                                <div className="space-y-2">
                                    <Link to="/features" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
                                        Check Features
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                    <Link to="/waitlist" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
                                        Join waitlist
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* ===== MOBILE TOC ===== */}
                    <div className="lg:hidden w-full mb-8">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-full bg-white rounded-2xl border border-slate-200/50 p-4 flex items-center justify-between shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <Menu className="w-5 h-5 text-[#46C7CD]" />
                                <span className="font-bold text-slate-900 text-sm">Step-by-Step Guide</span>
                            </div>
                            <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
                        </button>

                        {isMobileMenuOpen && (
                            <div className="mt-2 bg-white rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden animate-[fadeIn_0.2s_ease]">
                                <nav className="p-2 space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-colors
                        ${activeSection === section.id
                                                    ? "bg-[#46C7CD]/10 text-[#46C7CD] font-bold"
                                                    : "text-slate-600 font-medium hover:bg-slate-50"
                                                }
                      `}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>

                    {/* ===== RIGHT CONTENT ===== */}
                    <main className="flex-1 min-w-0 space-y-12 sm:space-y-16">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <article
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-24 lg:scroll-mt-32"
                                >
                                    <div className="flex items-start gap-4 mb-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#46C7CD]" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 leading-tight pt-2 sm:pt-3">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-8 pl-0 sm:pl-16 md:pl-20">
                                        {section.content.map((item, i) => {
                                            if (item.isDashboard) {
                                                return (
                                                    <div key={i} className="my-10 -ml-0 sm:-ml-16 md:-ml-20 scale-95 sm:scale-100 lg:scale-105 origin-center">
                                                        <div className="bg-white rounded-[40px] border border-slate-200/50 shadow-xl overflow-hidden p-4 sm:p-0">
                                                            <Dashboard />
                                                        </div>
                                                        <p className="text-center text-xs text-slate-400 mt-6 font-medium">Interactive Demo: Try swiping to see the algorithm in action</p>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={i} className="max-w-3xl">
                                                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                                                        {item.subtitle}
                                                    </h4>
                                                    <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {index !== sections.length - 1 && (
                                        <div className="max-w-3xl ml-0 sm:ml-16 md:ml-20 mt-12 sm:mt-16 w-full h-px bg-slate-200/60" />
                                    )}
                                </article>
                            );
                        })}

                        <div className="mt-16 sm:mt-24 p-8 sm:p-12 text-center max-w-4xl mx-auto sm:ml-16 border-2 border-dashed border-slate-200 rounded-[40px]">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Your perfect match is just a few steps away.</h3>
                            <Link
                                to="/waitlist"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] text-white font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-[#46C7CD]/30 transition-all transform hover:-translate-y-1"
                            >
                                Join the Waitlist Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HowItWorksPage;
