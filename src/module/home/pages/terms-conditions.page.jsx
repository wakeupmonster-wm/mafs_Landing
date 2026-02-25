// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import {
//     ShieldCheck,
//     FileText,
//     UserCheck,
//     AlertTriangle,
//     Scale,
//     Ban,
//     Activity,
//     CreditCard,
//     Mail,
//     ChevronRight,
//     Menu,
//     X,
//     ArrowLeft,
// } from "lucide-react";
// import Footer from "@/module/home/components/footer";

// const sections = [
//     {
//         id: "acceptance",
//         icon: FileText,
//         title: "1. Acceptance of Terms",
//         content: [
//             {
//                 subtitle: "",
//                 text: "By creating a Match At First Swipe (MAFS) account, whether through a mobile device, mobile application, or computer, you agree to be bound by (i) these Terms of Use, (ii) our Privacy Policy, (iii) our Cookie Policy, and (iv) any terms disclosed and agreed to by you if you purchase or have purchased additional features, products, or services we offer (collectively, this 'Agreement'). If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use the Service.",
//             },
//             {
//                 subtitle: "",
//                 text: "We may make changes to this Agreement and to the Service from time to time. We may do this for a variety of reasons including to reflect changes in or requirements of the law, new features, or changes in business practices. The most recent version of this Agreement will be posted on the Service, and you should regularly check for the most recent version.",
//             },
//         ],
//     },
//     {
//         id: "eligibility",
//         icon: UserCheck,
//         title: "2. Eligibility",
//         content: [
//             {
//                 subtitle: "Age Requirement",
//                 text: "You must be at least 18 years of age to create an account on MAFS and use the Service. By creating an account and using the Service, you represent and warrant that you are 18 years of age or older and can form a legally binding contract with us.",
//             },
//             {
//                 subtitle: "Other Requirements",
//                 text: "By using the Service, you represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, and (ii) you are not on any list of individuals prohibited from conducting business with the United States. You also represent that you have not been convicted of any serious crime, and you are not required to register as a sex offender with any state, federal or local sex offender registry.",
//             },
//         ],
//     },
//     {
//         id: "rules",
//         icon: Scale,
//         title: "3. Rules and Conduct",
//         content: [
//             {
//                 subtitle: "Community Standards",
//                 text: "We aim to create a positive, respectful, and safe community. You agree to use the Service in accordance with these Terms and our Community Guidelines. You agree that you will not:",
//             },
//             {
//                 list: true,
//                 items: [
//                     "Use the Service for any purpose that is illegal or prohibited by this Agreement.",
//                     "Impersonate any person or entity or post any images of another person without their permission.",
//                     "Bully, 'stalk', intimidate, assault, harass, mistreat or defame any person.",
//                     "Post any content that violates or infringes anyone's rights, including rights of publicity, privacy, copyright, trademark or other intellectual property or contract right.",
//                     "Post any content that is hate speech, threatening, sexually explicit or pornographic, incites violence, or contains nudity or graphic or gratuitous violence.",
//                     "Promote or facilitate prostitution, escort services, or any illegal acts.",
//                     "Use another user's account, share an account with another user, or maintain more than one account.",
//                 ],
//             },
//         ],
//     },
//     {
//         id: "content",
//         icon: Activity,
//         title: "4. Your Content",
//         content: [
//             {
//                 subtitle: "License Grants",
//                 text: "When you upload or provide content on MAFS (including your profile details, photos, and messages), you retain ownership of your content. However, you grant us a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify and distribute your content.",
//             },
//             {
//                 subtitle: "Responsibility",
//                 text: "You are solely responsible for the content and information that you provide, publish, or display on the Service, or transmit to other users. We do not verify the accuracy or truthfulness of any information or content provided by you or other users.",
//             },
//         ],
//     },
//     {
//         id: "safety",
//         icon: ShieldCheck,
//         title: "5. Safety and Interactions",
//         content: [
//             {
//                 subtitle: "User Interactions",
//                 text: "You are solely responsible for your interactions with other users. You understand that MAFS does not currently conduct criminal background checks on its users or otherwise inquire into the background of its users. MAFS makes no representations or warranties as to the conduct of users.",
//             },
//             {
//                 subtitle: "Assumption of Risk",
//                 text: "MAFS is not responsible for the conduct of any user on or off the Service. You agree to use caution in all interactions with other users, particularly if you decide to communicate off the Service or meet in person. You agree to review our Safety Tips prior to using the Service.",
//             },
//         ],
//     },
//     {
//         id: "purchases",
//         icon: CreditCard,
//         title: "6. Purchases and Subscriptions",
//         content: [
//             {
//                 subtitle: "Premium Services",
//                 text: "MAFS may offer products and services for purchase through iTunes, Google Play, or other external services authorized by MAFS (each, an 'External Service'). If you purchase an Auto-Recurring Periodic Subscription through an External Service, your External Service Account will be billed continuously for the subscription until you cancel.",
//             },
//             {
//                 subtitle: "Refund Policy",
//                 text: "Generally, all charges for purchases are nonrefundable, and there are no refunds or credits for partially used periods. We may make an exception if a refund for a subscription offering is requested within fourteen days of the transaction date, or if the laws applicable in your jurisdiction provide for refunds.",
//             },
//         ],
//     },
//     {
//         id: "termination",
//         icon: Ban,
//         title: "7. Termination and Account Deletion",
//         content: [
//             {
//                 subtitle: "By You",
//                 text: "You can delete your account at any time by logging into the app, going to Settings, and following the instructions to delete your account. If you use a third-party account to log in (like Apple or Google), you may also need to manage your app settings through that account.",
//             },
//             {
//                 subtitle: "By MAFS",
//                 text: "We may terminate your account at any time without notice if we believe that you have violated this Agreement. Upon such termination, you will not be entitled to any refund for purchases.",
//             },
//         ],
//     },
//     {
//         id: "disclaimers",
//         icon: AlertTriangle,
//         title: "8. Disclaimers and Limitations of Liability",
//         content: [
//             {
//                 subtitle: "Service Availability",
//                 text: "MAFS provides the Service on an 'as is' and 'as available' basis. We do not warrant that the Service will be uninterrupted, error-free, or secure. We are not responsible for any failures or delays in the Service caused by factors outside our reasonable control.",
//             },
//             {
//                 subtitle: "Limitation of Liability",
//                 text: "To the fullest extent permitted by applicable law, in no event will MAFS, its affiliates, employees, licensors, or service providers be liable for any indirect, consequential, exemplary, incidental, special or punitive damages, including loss of profits, whether incurred directly or indirectly.",
//             },
//         ],
//     },
//     {
//         id: "contact",
//         icon: Mail,
//         title: "9. Contact Us",
//         content: [
//             {
//                 subtitle: "",
//                 text: "If you have any questions about these Terms, please contact us:",
//             },
//             {
//                 list: true,
//                 items: [
//                     "By email: legal@matchatfirstswipe.com",
//                     "By post: Match At First Swipe Legal Dept, Sydney, NSW, Australia",
//                 ],
//             },
//             {
//                 subtitle: "",
//                 text: "For general support, please visit our Help Centre or contact support@matchatfirstswipe.com.",
//             },
//         ],
//     },
// ];

// const TermsAndConditionsPage = () => {
//     const [activeSection, setActiveSection] = useState("acceptance");
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Scroll to Top on Mount
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     // Intersection Observer for Active Section
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id);
//                     }
//                 });
//             },
//             { rootMargin: "-20% 0px -80% 0px" } // Trigger when element is near top
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
//             // Offset for sticky header/mobile variations
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
//                 {/* Gradient Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
//                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#46C7CD]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
//                 <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B4D8]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

//                 {/* Decorative Grid */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />

//                 <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 md:pb-24">
//                     {/* Back Navigation */}
//                     <Link
//                         to="/"
//                         className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 mb-8 sm:mb-12 group"
//                     >
//                         <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//                         Back to Home
//                     </Link>

//                     {/* Title Section */}
//                     <div className="flex flex-col gap-4 sm:gap-6 mb-6">
//                         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
//                             <Scale className="w-4 h-4 text-[#46C7CD]" />
//                             <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Legal</span>
//                         </div>
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
//                             Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Conditions</span>
//                         </h1>
//                     </div>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/50 text-sm sm:text-base">
//                         <p>Effective Date: February 25, 2026</p>
//                         <span className="hidden sm:inline">•</span>
//                         <p>Last Updated: February 25, 2026</p>
//                     </div>
//                 </div>

//                 {/* Bottom Wave */}
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
//                                         {/* Active/Hover Indicator Line */}
//                                         <div
//                                             className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300
//                         ${activeSection === section.id
//                                                     ? "bg-[#46C7CD] scale-y-100"
//                                                     : "bg-slate-300 scale-y-0 group-hover:scale-y-100"
//                                                 }
//                       `}
//                                         />
//                                         {/* Circle on the line */}
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

//                             {/* Quick Links Card */}
//                             <div className="mt-10 bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm">
//                                 <h4 className="text-sm font-bold text-slate-900 mb-3">Related Legal</h4>
//                                 <div className="space-y-2">
//                                     <Link to="/privacy" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
//                                         Privacy Policy
//                                         <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
//                                     </Link>
//                                     <Link to="/cookies" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
//                                         Cookie Policy
//                                         <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
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
//                                 <span className="font-bold text-slate-900 text-sm">Table of Contents</span>
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

//                     {/* ===== RIGHT CONTENT (Article Area) ===== */}
//                     <main className="flex-1 min-w-0 space-y-8 sm:space-y-12">

//                         {/* Intro text */}
//                         <div className="prose prose-slate max-w-none text-slate-600 text-[15px] sm:text-base leading-relaxed">
//                             <p className="font-medium text-slate-700">
//                                 Welcome to Match At First Swipe! These Terms of Use constitute a legally binding contract between you and MAFS.
//                             </p>
//                             <p>
//                                 Please read this Agreement carefully. By creating an account or accessing or using our Service, you agree that you have read, understood, and agree to be bound by these Terms.
//                             </p>
//                         </div>

//                         {sections.map((section, index) => {
//                             const Icon = section.icon;
//                             return (
//                                 <article
//                                     key={section.id}
//                                     id={section.id}
//                                     className="scroll-mt-24 lg:scroll-mt-32"
//                                 >
//                                     {/* Section Title */}
//                                     <div className="flex items-start gap-4 mb-5 sm:mb-6 group">
//                                         <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
//                                             <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
//                                         </div>
//                                         <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight pt-1.5 sm:pt-2">
//                                             {section.title}
//                                         </h2>
//                                     </div>

//                                     {/* Section Body */}
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
//                                                                 <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-gradient-to-br from-[#46C7CD] to-[#00B4D8]" />
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

//                                     {/* Divider (except last) */}
//                                     {index !== sections.length - 1 && (
//                                         <div className="max-w-3xl ml-0 sm:ml-16 mt-8 sm:mt-12 w-full h-px bg-slate-200/60" />
//                                     )}
//                                 </article>
//                             );
//                         })}

//                         {/* End of Document Box */}
//                         <div className="mt-12 sm:mt-16 bg-white rounded-2xl border border-slate-200/50 p-6 sm:p-8 text-center max-w-3xl mx-auto sm:ml-16 shadow-sm">
//                             <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
//                                 <ShieldCheck className="w-6 h-6 text-slate-400" />
//                             </div>
//                             <h3 className="text-lg font-bold text-slate-900 mb-2">End of Terms & Conditions</h3>
//                             <p className="text-sm text-slate-500 mb-6">
//                                 Thank you for reviewing our terms. If you do not agree to these terms, please discontinue use of the application.
//                             </p>
//                             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                                 <Link to="/contact-us" className="text-sm font-bold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
//                                     Contact Legal Support
//                                 </Link>
//                                 <span className="hidden sm:inline text-slate-300">•</span>
//                                 <Link to="/privacy" className="text-sm font-bold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
//                                     Read Privacy Policy
//                                 </Link>
//                             </div>
//                         </div>

//                     </main>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default TermsAndConditionsPage;


import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
    ShieldCheck,
    FileText,
    UserCheck,
    AlertTriangle,
    Scale,
    Ban,
    Activity,
    CreditCard,
    Mail,
    ChevronRight,
    Menu,
    X,
    ArrowLeft,
} from "lucide-react";
import Footer from "@/module/home/components/footer";

const sections = [
    {
        id: "acceptance",
        icon: FileText,
        title: "1. Acceptance of Terms",
        content: [
            {
                subtitle: "",
                text: "By creating a Match At First Swipe (MAFS) account, whether through a mobile device, mobile application, or computer, you agree to be bound by (i) these Terms of Use, (ii) our Privacy Policy, (iii) our Cookie Policy, and (iv) any terms disclosed and agreed to by you if you purchase or have purchased additional features, products, or services we offer (collectively, this 'Agreement'). If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use the Service.",
            },
            {
                subtitle: "",
                text: "We may make changes to this Agreement and to the Service from time to time. We may do this for a variety of reasons including to reflect changes in or requirements of the law, new features, or changes in business practices. The most recent version of this Agreement will be posted on the Service, and you should regularly check for the most recent version.",
            },
        ],
    },
    {
        id: "eligibility",
        icon: UserCheck,
        title: "2. Eligibility",
        content: [
            {
                subtitle: "Age Requirement",
                text: "You must be at least 18 years of age to create an account on MAFS and use the Service. By creating an account and using the Service, you represent and warrant that you are 18 years of age or older and can form a legally binding contract with us.",
            },
            {
                subtitle: "Other Requirements",
                text: "By using the Service, you represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, and (ii) you are not on any list of individuals prohibited from conducting business with the United States. You also represent that you have not been convicted of any serious crime, and you are not required to register as a sex offender with any state, federal or local sex offender registry.",
            },
        ],
    },
    {
        id: "rules",
        icon: Scale,
        title: "3. Rules and Conduct",
        content: [
            {
                subtitle: "Community Standards",
                text: "We aim to create a positive, respectful, and safe community. You agree to use the Service in accordance with these Terms and our Community Guidelines. You agree that you will not:",
            },
            {
                list: true,
                items: [
                    "Use the Service for any purpose that is illegal or prohibited by this Agreement.",
                    "Impersonate any person or entity or post any images of another person without their permission.",
                    "Bully, 'stalk', intimidate, assault, harass, mistreat or defame any person.",
                    "Post any content that violates or infringes anyone's rights, including rights of publicity, privacy, copyright, trademark or other intellectual property or contract right.",
                    "Post any content that is hate speech, threatening, sexually explicit or pornographic, incites violence, or contains nudity or graphic or gratuitous violence.",
                    "Promote or facilitate prostitution, escort services, or any illegal acts.",
                    "Use another user's account, share an account with another user, or maintain more than one account.",
                ],
            },
        ],
    },
    {
        id: "content",
        icon: Activity,
        title: "4. Your Content",
        content: [
            {
                subtitle: "License Grants",
                text: "When you upload or provide content on MAFS (including your profile details, photos, and messages), you retain ownership of your content. However, you grant us a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify and distribute your content.",
            },
            {
                subtitle: "Responsibility",
                text: "You are solely responsible for the content and information that you provide, publish, or display on the Service, or transmit to other users. We do not verify the accuracy or truthfulness of any information or content provided by you or other users.",
            },
        ],
    },
    {
        id: "safety",
        icon: ShieldCheck,
        title: "5. Safety and Interactions",
        content: [
            {
                subtitle: "User Interactions",
                text: "You are solely responsible for your interactions with other users. You understand that MAFS does not currently conduct criminal background checks on its users or otherwise inquire into the background of its users. MAFS makes no representations or warranties as to the conduct of users.",
            },
            {
                subtitle: "Assumption of Risk",
                text: "MAFS is not responsible for the conduct of any user on or off the Service. You agree to use caution in all interactions with other users, particularly if you decide to communicate off the Service or meet in person. You agree to review our Safety Tips prior to using the Service.",
            },
        ],
    },
    {
        id: "purchases",
        icon: CreditCard,
        title: "6. Purchases and Subscriptions",
        content: [
            {
                subtitle: "Premium Services",
                text: "MAFS may offer products and services for purchase through iTunes, Google Play, or other external services authorized by MAFS (each, an 'External Service'). If you purchase an Auto-Recurring Periodic Subscription through an External Service, your External Service Account will be billed continuously for the subscription until you cancel.",
            },
            {
                subtitle: "Refund Policy",
                text: "Generally, all charges for purchases are nonrefundable, and there are no refunds or credits for partially used periods. We may make an exception if a refund for a subscription offering is requested within fourteen days of the transaction date, or if the laws applicable in your jurisdiction provide for refunds.",
            },
        ],
    },
    {
        id: "termination",
        icon: Ban,
        title: "7. Termination and Account Deletion",
        content: [
            {
                subtitle: "By You",
                text: "You can delete your account at any time by logging into the app, going to Settings, and following the instructions to delete your account. If you use a third-party account to log in (like Apple or Google), you may also need to manage your app settings through that account.",
            },
            {
                subtitle: "By MAFS",
                text: "We may terminate your account at any time without notice if we believe that you have violated this Agreement. Upon such termination, you will not be entitled to any refund for purchases.",
            },
        ],
    },
    {
        id: "disclaimers",
        icon: AlertTriangle,
        title: "8. Disclaimers and Limitations of Liability",
        content: [
            {
                subtitle: "Service Availability",
                text: "MAFS provides the Service on an 'as is' and 'as available' basis. We do not warrant that the Service will be uninterrupted, error-free, or secure. We are not responsible for any failures or delays in the Service caused by factors outside our reasonable control.",
            },
            {
                subtitle: "Limitation of Liability",
                text: "To the fullest extent permitted by applicable law, in no event will MAFS, its affiliates, employees, licensors, or service providers be liable for any indirect, consequential, exemplary, incidental, special or punitive damages, including loss of profits, whether incurred directly or indirectly.",
            },
        ],
    },
    {
        id: "contact",
        icon: Mail,
        title: "9. Contact Us",
        content: [
            {
                subtitle: "",
                text: "If you have any questions about these Terms, please contact us:",
            },
            {
                list: true,
                items: [
                    "By email: legal@matchatfirstswipe.com",
                    "By post: Match At First Swipe Legal Dept, Sydney, NSW, Australia",
                ],
            },
            {
                subtitle: "",
                text: "For general support, please visit our Help Centre or contact support@matchatfirstswipe.com.",
            },
        ],
    },
];

const TermsAndConditionsPage = () => {
    const [activeSection, setActiveSection] = useState("acceptance");
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

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />

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
                            <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#46C7CD]" />
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider">Legal</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-white tracking-tight leading-[1.1]">
                            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]">Conditions</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/50 text-xs sm:text-sm md:text-base">
                        <p>Effective Date: February 25, 2026</p>
                        <span className="hidden sm:inline">•</span>
                        <p>Last Updated: February 25, 2026</p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto" preserveAspectRatio="none">
                        <path d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F0F1F3" />
                    </svg>
                </div>
            </section>

            {/* ===== MAIN CONTENT ===== */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
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

                            <div className="mt-10 bg-white rounded-2xl border border-slate-200/50 p-5 shadow-sm">
                                <h4 className="text-sm font-bold text-slate-900 mb-3">Related Legal</h4>
                                <div className="space-y-2">
                                    <Link to="/privacy" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
                                        Privacy Policy
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
                                    </Link>
                                    <Link to="/cookies" className="flex items-center justify-between text-sm text-slate-600 hover:text-[#46C7CD] group transition-colors">
                                        Cookie Policy
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-1 transition-all" />
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
                                    <span className="font-bold text-slate-900 text-xs sm:text-sm truncate max-w-[200px] sm:max-w-none">
                                        {sections.find(s => s.id === activeSection)?.title || "Table of Contents"}
                                    </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isMobileMenuOpen ? "rotate-90" : ""}`} />
                            </button>

                            {isMobileMenuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 bg-black/20 z-20 sm:hidden"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    />
                                    <div className="relative z-30 mt-2 bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden animate-[fadeIn_0.2s_ease] max-h-[60vh] overflow-y-auto">
                                        <nav className="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1">
                                            {sections.map((section) => {
                                                const Icon = section.icon;
                                                return (
                                                    <button
                                                        key={section.id}
                                                        onClick={() => scrollToSection(section.id)}
                                                        className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg sm:rounded-xl transition-colors flex items-center gap-2.5 sm:gap-3
                                                            ${activeSection === section.id
                                                                ? "bg-[#46C7CD]/10 text-[#46C7CD] font-bold"
                                                                : "text-slate-600 font-medium hover:bg-slate-50 active:bg-slate-100"
                                                            }
                                                        `}
                                                    >
                                                        <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${activeSection === section.id ? "text-[#46C7CD]" : "text-slate-400"}`} />
                                                        <span className="truncate">{section.title}</span>
                                                    </button>
                                                );
                                            })}
                                        </nav>

                                        <div className="border-t border-slate-100 p-3 sm:p-4 space-y-2 sm:space-y-2.5">
                                            <Link to="/privacy" className="flex items-center justify-between text-xs sm:text-sm text-slate-600 hover:text-[#46C7CD] px-1 group transition-colors">
                                                Privacy Policy
                                                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-[#46C7CD] transition-all" />
                                            </Link>
                                            <Link to="/cookies" className="flex items-center justify-between text-xs sm:text-sm text-slate-600 hover:text-[#46C7CD] px-1 group transition-colors">
                                                Cookie Policy
                                                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-[#46C7CD] transition-all" />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* ===== RIGHT CONTENT ===== */}
                    <main className="flex-1 min-w-0 space-y-6 sm:space-y-8 md:space-y-12">

                        {/* Intro text */}
                        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
                            <p className="font-medium text-slate-700">
                                Welcome to Match At First Swipe! These Terms of Use constitute a legally binding contract between you and MAFS.
                            </p>
                            <p>
                                Please read this Agreement carefully. By creating an account or accessing or using our Service, you agree that you have read, understood, and agree to be bound by these Terms.
                            </p>
                        </div>

                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <article
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-28 sm:scroll-mt-24 lg:scroll-mt-32"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 group">
                                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center group-hover:border-[#46C7CD]/30 group-hover:bg-[#46C7CD]/5 transition-colors duration-300">
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#46C7CD]" />
                                        </div>
                                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-slate-900 leading-tight pt-1 sm:pt-1.5 md:pt-2">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-4 sm:space-y-6 md:space-y-8 pl-0 sm:pl-14 md:pl-16">
                                        {section.content.map((item, i) => (
                                            <div key={i} className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-[15px] md:text-base leading-relaxed">
                                                {item.subtitle && (
                                                    <h4 className="text-[15px] sm:text-base md:text-[17px] font-bold text-slate-800 mb-1.5 sm:mb-2">
                                                        {item.subtitle}
                                                    </h4>
                                                )}
                                                {item.list ? (
                                                    <ul className="space-y-2 sm:space-y-2.5 mt-2 lg:ml-2">
                                                        {item.items.map((listItem, j) => (
                                                            <li key={j} className="flex items-start gap-2.5 sm:gap-3">
                                                                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-gradient-to-br from-[#46C7CD] to-[#00B4D8]" />
                                                                <span className="text-sm sm:text-[15px] md:text-base">{listItem}</span>
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
                                        <div className="max-w-3xl ml-0 sm:ml-14 md:ml-16 mt-6 sm:mt-8 md:mt-12 w-full h-px bg-slate-200/60" />
                                    )}
                                </article>
                            );
                        })}

                        {/* End of Document Box */}
                        <div className="mt-8 sm:mt-12 md:mt-16 bg-white rounded-xl sm:rounded-2xl border border-slate-200/50 p-5 sm:p-6 md:p-8 text-center max-w-3xl mx-auto sm:ml-14 md:ml-16 shadow-sm">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">End of Terms & Conditions</h3>
                            <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-5 md:mb-6">
                                Thank you for reviewing our terms. If you do not agree to these terms, please discontinue use of the application.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <Link to="/contact-us" className="text-xs sm:text-sm font-bold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
                                    Contact Legal Support
                                </Link>
                                <span className="hidden sm:inline text-slate-300">•</span>
                                <Link to="/privacy" className="text-xs sm:text-sm font-bold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
                                    Read Privacy Policy
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

export default TermsAndConditionsPage;