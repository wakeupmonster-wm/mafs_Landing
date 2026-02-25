import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Shield, Lock, Eye, UserCheck, Database, Globe, Mail, ArrowLeft, ChevronRight, Menu } from "lucide-react";
import Footer from "@/module/home/components/footer";

const sections = [
    {
        id: "info-collect",
        icon: Database,
        title: "1. Information We Collect",
        content: [
            {
                subtitle: "Personal Information",
                text: "When you create an account on Match At First Swipe, we collect information such as your name, email address, date of birth, gender, sexual orientation, photographs, and location data. This information is essential to provide you with a personalised dating experience.",
            },
            {
                subtitle: "Usage Data",
                text: "We automatically collect information about how you interact with our app, including swipe patterns, messages sent, features used, session duration, device information, and IP address.",
            },
        ],
    },
    {
        id: "usage",
        icon: Eye,
        title: "2. How We Use Data",
        content: [
            {
                subtitle: "Personalization",
                text: "We use the information we collect to create and manage your dating profile and match you with compatible users using our intelligent matching algorithm.",
            },
            {
                subtitle: "Safety & Verification",
                text: "Your data helps us verify user identities and prevent fraudulent or fake profiles, ensuring MAFS remains a safe community for everyone.",
            },
        ],
    },
    {
        id: "sharing",
        icon: Globe,
        title: "3. Data Sharing",
        content: [
            {
                subtitle: "With Other Users",
                text: "Your profile information (name, photos, bio, age, and preferences) is visible to other users as part of the matching process. You can control visibility in settings.",
            },
            {
                subtitle: "Service Providers",
                text: "We may share your information with trusted third-party service providers who help us operate the app, such as AWS for hosting and Firebase for analytics.",
            },
        ],
    },
    {
        id: "security",
        icon: Lock,
        title: "4. Data Security",
        content: [
            {
                subtitle: "Protection Measures",
                text: "We take the security of your personal information seriously. Match At First Swipe implements industry-standard security measures including end-to-end encryption for private messages and AES-256 for data at rest.",
            },
        ],
    },
    {
        id: "rights",
        icon: UserCheck,
        title: "5. Your Rights",
        content: [
            {
                subtitle: "Australian Privacy Laws",
                text: "Under the Australian Privacy Act 1988, you have the right to access, correct, or delete the personal data we hold about you. You can also withdraw consent for location tracking at any time.",
            },
        ],
    },
    {
        id: "contact",
        icon: Mail,
        title: "6. Contact Privacy",
        content: [
            {
                subtitle: "",
                text: "If you have any questions or concerns regarding this Privacy Policy, please contact our data protection officer:",
            },
            {
                list: true,
                items: [
                    "Email: privacy@matchatfirstswipe.com",
                    "Address: Sydney, NSW, Australia",
                ],
            },
        ],
    },
];

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState("info-collect");
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
                            <Shield className="w-4 h-4 text-[#46C7CD]" />
                            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Privacy</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Policy</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/50 text-sm sm:text-base">
                        <p>Effective Date: March 1, 2026</p>
                        <span className="hidden sm:inline">•</span>
                        <p>Last Updated: February 25, 2026</p>
                    </div>
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
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Privacy Sections</h3>
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

                    {/* ===== MOBILE TOC ===== */}
                    <div className="lg:hidden w-full mb-8">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-full bg-white rounded-2xl border border-slate-200/50 p-4 flex items-center justify-between shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <Menu className="w-5 h-5 text-[#46C7CD]" />
                                <span className="font-bold text-slate-900 text-sm">Policy Contents</span>
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
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
                                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
                                        </div>
                                        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight pt-1.5 sm:pt-2">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-6 sm:space-y-8 pl-0 sm:pl-16">
                                        {section.content.map((item, i) => (
                                            <div key={i} className="prose prose-slate max-w-none text-slate-600 text-[15px] sm:text-base leading-relaxed">
                                                {item.subtitle && (
                                                    <h4 className="text-[17px] font-bold text-slate-800 mb-2">
                                                        {item.subtitle}
                                                    </h4>
                                                )}
                                                {item.list ? (
                                                    <ul className="space-y-2.5 mt-2 lg:ml-2">
                                                        {item.items.map((listItem, j) => (
                                                            <li key={j} className="flex items-start gap-3">
                                                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[#46C7CD]" />
                                                                <span>{listItem}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{item.text}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {index !== sections.length - 1 && (
                                        <div className="max-w-3xl ml-0 sm:ml-16 mt-8 sm:mt-12 w-full h-px bg-slate-200/60" />
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

export default PrivacyPolicyPage;
