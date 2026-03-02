// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router";
// // // import {
// // //     Search,
// // //     ChevronRight,
// // //     ThumbsUp,
// // //     ThumbsDown,
// // //     Mail,
// // //     MessageCircle,
// // //     Shield,
// // //     Phone,
// // //     ArrowLeft,
// // //     ExternalLink,
// // //     HelpCircle,
// // //     Bell,
// // //     FileText,
// // //     Heart,
// // //     Users,
// // //     AlertTriangle,
// // //     Settings,
// // //     Smartphone,
// // // } from "lucide-react";
// // // import Footer from "@/module/home/components/footer";

// // // const sidebarLinks = [
// // //     { label: "Ways of contacting us", href: "#", active: true },
// // //     { label: "Account & profile help", href: "#" },
// // //     { label: "Managing your subscription", href: "#" },
// // //     { label: "Safety features", href: "#" },
// // //     { label: "Reporting a concern", href: "#" },
// // //     { label: "Understanding Premium", href: "#" },
// // //     { label: "Switching modes", href: "#" },
// // //     { label: "Signing up & logging in", href: "#" },
// // //     { label: "Privacy & data", href: "#" },
// // //     { label: "See more", href: "#", seeMore: true },
// // // ];

// // // const relatedTopics = [
// // //     {
// // //         icon: Settings,
// // //         title: "Managing your account",
// // //         desc: "Update profile, change settings and preferences",
// // //     },
// // //     {
// // //         icon: Shield,
// // //         title: "Our safety features",
// // //         desc: "Learn about tools that keep you safe",
// // //     },
// // //     {
// // //         icon: AlertTriangle,
// // //         title: "Reporting a user",
// // //         desc: "How to flag inappropriate behaviour",
// // //     },
// // //     {
// // //         icon: Heart,
// // //         title: "Understanding Premium",
// // //         desc: "Features, pricing and subscription details",
// // //     },
// // //     {
// // //         icon: Users,
// // //         title: "Matching & connections",
// // //         desc: "How our matching algorithm works",
// // //     },
// // //     {
// // //         icon: Smartphone,
// // //         title: "App troubleshooting",
// // //         desc: "Common fixes for technical issues",
// // //     },
// // // ];

// // // const ContactUsPage = () => {
// // //     const [searchQuery, setSearchQuery] = useState("");
// // //     const [feedbackGiven, setFeedbackGiven] = useState(null); // 'yes' | 'no' | null

// // //     useEffect(() => {
// // //         window.scrollTo(0, 0);
// // //     }, []);

// // //     return (
// // //         <div className="min-h-screen bg-[#F0F1F3]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

// // //             {/* ===== HEADER / NAV ===== */}
// // //             <header className="bg-white border-b border-slate-200/60 sticky top-0 z-50">
// // //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
// // //                     <Link to="/" className="flex items-center gap-2 group">
// // //                         <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#46C7CD] transition-colors" />
// // //                         <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
// // //                             MAFS Support
// // //                         </span>
// // //                     </Link>
// // //                     <Link
// // //                         to="/"
// // //                         className="text-[13px] font-bold text-white bg-footerBg hover:bg-slate-700 px-5 py-2 rounded-full transition-colors duration-200"
// // //                     >
// // //                         Back to Home
// // //                     </Link>
// // //                 </div>
// // //             </header>

// // //             {/* ===== BREADCRUMBS ===== */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
// // //                 <nav className="flex items-center gap-1.5 text-xs text-slate-400">
// // //                     <Link to="/" className="hover:text-[#46C7CD] transition-colors">MAFS Support</Link>
// // //                     <ChevronRight className="w-3 h-3" />
// // //                     <span className="text-slate-600 font-medium">Contact & Support</span>
// // //                 </nav>
// // //             </div>

// // //             {/* ===== HERO SECTION (Brand Color BG like Bumble) ===== */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
// // //                 <div className="bg-gradient-to-br from-[#AAE1FE] via-[#B8E8FC] to-[#E6FFFD] rounded-[28px] sm:rounded-[36px] px-6 sm:px-10 md:px-14 pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden">
// // //                     {/* Subtle decorative elements */}
// // //                     <div className="absolute top-6 right-8 text-[#46C7CD]/20 text-2xl hidden sm:block">✦</div>
// // //                     <div className="absolute bottom-10 left-10 text-[#46C7CD]/15 text-xl hidden sm:block">✦</div>
// // //                     <div className="absolute top-1/2 right-[15%] w-40 h-40 bg-white/15 rounded-full blur-[60px]" />

// // //                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.05] mb-6 sm:mb-8 relative z-10">
// // //                         Contact & Support
// // //                     </h1>

// // //                     {/* Search Bar */}
// // //                     <div className="relative max-w-lg z-10">
// // //                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
// // //                         <input
// // //                             type="text"
// // //                             value={searchQuery}
// // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // //                             placeholder="Search for help..."
// // //                             className="w-full pl-12 pr-5 py-3.5 sm:py-4 rounded-full bg-white border-0 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/40 transition-all duration-200"
// // //                         />
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* ===== MAIN CONTENT (Sidebar + Article) ===== */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
// // //                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14">

// // //                     {/* ===== LEFT SIDEBAR ===== */}
// // //                     <aside className="w-full lg:w-[240px] xl:w-[260px] flex-shrink-0">
// // //                         <nav className="lg:sticky lg:top-24 space-y-0.5">
// // //                             {sidebarLinks.map((link, i) => (
// // //                                 <a
// // //                                     key={i}
// // //                                     href={link.href}
// // //                                     className={`block text-[13px] sm:text-sm py-2.5 px-3 rounded-xl transition-all duration-200 ${link.active
// // //                                             ? "text-[#46C7CD] font-bold bg-[#46C7CD]/8"
// // //                                             : link.seeMore
// // //                                                 ? "text-[#46C7CD] font-semibold hover:bg-[#46C7CD]/5"
// // //                                                 : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-medium"
// // //                                         }`}
// // //                                 >
// // //                                     {link.label}
// // //                                 </a>
// // //                             ))}
// // //                         </nav>
// // //                     </aside>

// // //                     {/* ===== RIGHT CONTENT (Article Style) ===== */}
// // //                     <main className="flex-1 min-w-0">
// // //                         {/* Article Header */}
// // //                         <div className="mb-8 sm:mb-10">
// // //                             <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 tracking-tight leading-tight mb-2">
// // //                                 Ways of contacting us
// // //                             </h2>
// // //                             <p className="text-xs sm:text-sm text-slate-400 font-medium">
// // //                                 Last updated &nbsp;·&nbsp; February 2026
// // //                             </p>
// // //                         </div>

// // //                         {/* Intro */}
// // //                         <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
// // //                             No matter what you need, we're here to help! There are several ways to contact
// // //                             our team and get the support you need quickly.
// // //                         </p>

// // //                         {/* ===== Section 1: In-App Help Hub ===== */}
// // //                         <section className="mb-10 sm:mb-12">
// // //                             <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
// // //                                 <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
// // //                                 Through our in-app Help Hub
// // //                             </h3>
// // //                             <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-5 max-w-2xl">
// // //                                 We've launched our Help Hub to make it easier than ever for you to get the
// // //                                 support you need, straight from the app. With our Help Hub, you can:
// // //                             </p>

// // //                             <ul className="space-y-3 mb-6 max-w-2xl">
// // //                                 {[
// // //                                     "Search and browse our Help Centre articles to quickly resolve common questions.",
// // //                                     "Chat with our AI Support agent to receive instant, personalised support.",
// // //                                     "Stay informed on safety reports you've submitted and get real-time updates so you always know what's happening.",
// // //                                 ].map((item, i) => (
// // //                                     <li key={i} className="flex items-start gap-3">
// // //                                         <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]" />
// // //                                         <span className="text-[15px] sm:text-base text-slate-600 leading-relaxed">{item}</span>
// // //                                     </li>
// // //                                 ))}
// // //                             </ul>

// // //                             <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-4 max-w-2xl">
// // //                                 We have two main sections:
// // //                             </p>
// // //                             <ul className="space-y-3 mb-6 max-w-2xl">
// // //                                 <li className="flex items-start gap-3">
// // //                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]" />
// // //                                     <span className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
// // //                                         <strong className="text-slate-800">Get help:</strong> Here, you can search for something specific,
// // //                                         browse through different topics, or explore our most popular topics.
// // //                                     </span>
// // //                                 </li>
// // //                                 <li className="flex items-start gap-3">
// // //                                     <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#46C7CD] to-[#00B4D8]" />
// // //                                     <span className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
// // //                                         <strong className="text-slate-800">Notifications:</strong> This is where you'll be able to see any
// // //                                         updates on reports you've submitted, and summaries of support chats.
// // //                                     </span>
// // //                                 </li>
// // //                             </ul>

// // //                             {/* Steps Card  */}
// // //                             <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 max-w-xl shadow-sm mb-4">
// // //                                 <h4 className="text-sm font-bold text-slate-900 mb-3.5 flex items-center gap-2">
// // //                                     <MessageCircle className="w-4 h-4 text-[#46C7CD]" />
// // //                                     To access the Help Hub:
// // //                                 </h4>
// // //                                 <ol className="space-y-2.5 text-sm text-slate-600 list-none">
// // //                                     {[
// // //                                         "Open your Profile page",
// // //                                         "Tap the question mark icon in the top right corner",
// // //                                     ].map((step, i) => (
// // //                                         <li key={i} className="flex items-start gap-3">
// // //                                             <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#46C7CD] to-[#00B4D8] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
// // //                                                 {i + 1}
// // //                                             </span>
// // //                                             <span className="leading-relaxed">{step}</span>
// // //                                         </li>
// // //                                     ))}
// // //                                 </ol>
// // //                             </div>

// // //                             <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 max-w-xl shadow-sm">
// // //                                 <h4 className="text-sm font-bold text-slate-900 mb-3.5 flex items-center gap-2">
// // //                                     <Bell className="w-4 h-4 text-[#46C7CD]" />
// // //                                     To start a chat with our AI Support agent:
// // //                                 </h4>
// // //                                 <ol className="space-y-2.5 text-sm text-slate-600 list-none">
// // //                                     {[
// // //                                         "Open the Help Hub",
// // //                                         "Scroll down to 'Start Chat'",
// // //                                         "Describe your issue and our AI will guide you",
// // //                                     ].map((step, i) => (
// // //                                         <li key={i} className="flex items-start gap-3">
// // //                                             <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#46C7CD] to-[#00B4D8] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
// // //                                                 {i + 1}
// // //                                             </span>
// // //                                             <span className="leading-relaxed">{step}</span>
// // //                                         </li>
// // //                                     ))}
// // //                                 </ol>
// // //                             </div>
// // //                         </section>

// // //                         {/* Divider */}
// // //                         <div className="w-full h-px bg-slate-200/80 mb-10 sm:mb-12" />

// // //                         {/* ===== Section 2: Contact via Email ===== */}
// // //                         <section className="mb-10 sm:mb-12">
// // //                             <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
// // //                                 <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
// // //                                 Contact us via email
// // //                             </h3>
// // //                             <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-5 max-w-2xl">
// // //                                 You can reach our support team directly via email. We aim to respond to all
// // //                                 enquiries within <strong className="text-slate-800">24 hours</strong> during
// // //                                 business days (Monday – Friday, 9 AM – 6 PM AEST).
// // //                             </p>

// // //                             <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 max-w-xl shadow-sm">
// // //                                 <div className="space-y-3.5">
// // //                                     <div className="flex items-center gap-3">
// // //                                         <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#46C7CD]/15 to-[#00B4D8]/10 flex items-center justify-center">
// // //                                             <Mail className="w-4 h-4 text-[#46C7CD]" />
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-slate-400 font-medium">General Support</p>
// // //                                             <a href="mailto:support@matchatfirstswipe.com" className="text-sm font-semibold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
// // //                                                 support@matchatfirstswipe.com
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center gap-3">
// // //                                         <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#46C7CD]/15 to-[#00B4D8]/10 flex items-center justify-center">
// // //                                             <Shield className="w-4 h-4 text-[#46C7CD]" />
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-slate-400 font-medium">Privacy & Data Requests</p>
// // //                                             <a href="mailto:privacy@matchatfirstswipe.com" className="text-sm font-semibold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
// // //                                                 privacy@matchatfirstswipe.com
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                     <div className="flex items-center gap-3">
// // //                                         <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#46C7CD]/15 to-[#00B4D8]/10 flex items-center justify-center">
// // //                                             <Phone className="w-4 h-4 text-[#46C7CD]" />
// // //                                         </div>
// // //                                         <div>
// // //                                             <p className="text-xs text-slate-400 font-medium">Phone Support</p>
// // //                                             <a href="tel:9125855632" className="text-sm font-semibold text-[#46C7CD] hover:text-[#00B4D8] transition-colors">
// // //                                                 9125855632
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>

// // //                             <p className="text-sm text-slate-500 mt-4 max-w-2xl leading-relaxed">
// // //                                 Including your <strong className="text-slate-700">MAFS User ID</strong> when you contact us helps
// // //                                 our team quickly find your profile and offer prompt assistance.
// // //                             </p>
// // //                         </section>

// // //                         {/* Divider */}
// // //                         <div className="w-full h-px bg-slate-200/80 mb-10 sm:mb-12" />

// // //                         {/* ===== Section 3: Find Your User ID ===== */}
// // //                         <section className="mb-10 sm:mb-12">
// // //                             <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
// // //                                 <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#46C7CD]" />
// // //                                 To find your User ID
// // //                             </h3>
// // //                             <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6 max-w-xl shadow-sm">
// // //                                 <ol className="space-y-2.5 text-sm text-slate-600 list-none">
// // //                                     {[
// // //                                         "Tap on the Profile tab",
// // //                                         "Open your Settings (top right corner)",
// // //                                         "Scroll all the way down and double-tap on the MAFS logo",
// // //                                         "You can then tap to copy your User ID",
// // //                                     ].map((step, i) => (
// // //                                         <li key={i} className="flex items-start gap-3">
// // //                                             <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#46C7CD] to-[#00B4D8] text-white text-[11px] font-bold flex items-center justify-center mt-0.5">
// // //                                                 {i + 1}
// // //                                             </span>
// // //                                             <span className="leading-relaxed">{step}</span>
// // //                                         </li>
// // //                                     ))}
// // //                                 </ol>
// // //                             </div>
// // //                         </section>

// // //                         {/* Divider */}
// // //                         <div className="w-full h-px bg-slate-200/80 mb-10 sm:mb-12" />

// // //                         {/* ===== Section 4: Feedback ===== */}
// // //                         <section className="mb-10 sm:mb-12">
// // //                             <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
// // //                                 Got feedback for us?
// // //                             </h3>
// // //                             <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-3 max-w-2xl">
// // //                                 We're always looking to improve! Send us your feedback and we'll make sure it
// // //                                 reaches the right team as we work on upcoming updates.
// // //                             </p>
// // //                             <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-2xl">
// // //                                 Please note that we do not have a direct email address for feedback. If you've
// // //                                 still got questions or need further support, feel free to
// // //                                 <a href="mailto:support@matchatfirstswipe.com" className="text-[#46C7CD] hover:text-[#00B4D8] font-medium underline underline-offset-2 transition-colors"> reach out to our support team</a>,
// // //                                 and a member of our team will get back to you as soon as possible.
// // //                             </p>
// // //                         </section>

// // //                         {/* ===== Feedback CTA ===== */}
// // //                         <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 max-w-md shadow-sm text-center mb-4">
// // //                             <p className="text-base sm:text-lg font-bold text-slate-900 mb-4">
// // //                                 Was this article helpful?
// // //                             </p>
// // //                             <div className="flex items-center justify-center gap-3">
// // //                                 <button
// // //                                     onClick={() => setFeedbackGiven("yes")}
// // //                                     className={`flex items-center gap-2 px-6 py-2.5 rounded-full border-2 text-sm font-bold transition-all duration-200 ${feedbackGiven === "yes"
// // //                                             ? "border-[#46C7CD] bg-[#46C7CD]/10 text-[#46C7CD]"
// // //                                             : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
// // //                                         }`}
// // //                                 >
// // //                                     <ThumbsUp className="w-4 h-4" />
// // //                                     Yes
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={() => setFeedbackGiven("no")}
// // //                                     className={`flex items-center gap-2 px-6 py-2.5 rounded-full border-2 text-sm font-bold transition-all duration-200 ${feedbackGiven === "no"
// // //                                             ? "border-red-400 bg-red-50 text-red-500"
// // //                                             : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
// // //                                         }`}
// // //                                 >
// // //                                     <ThumbsDown className="w-4 h-4" />
// // //                                     No
// // //                                 </button>
// // //                             </div>
// // //                             {feedbackGiven && (
// // //                                 <p className="text-xs text-slate-400 mt-3 animate-[fadeIn_0.3s_ease]">
// // //                                     Thank you for your feedback!
// // //                                 </p>
// // //                             )}
// // //                         </div>
// // //                     </main>
// // //                 </div>
// // //             </div>

// // //             {/* ===== RELATED TOPICS GRID ===== */}
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
// // //                     {relatedTopics.map((topic, i) => {
// // //                         const IconComp = topic.icon;
// // //                         return (
// // //                             <a
// // //                                 key={i}
// // //                                 href="#"
// // //                                 className="group bg-white rounded-2xl border border-slate-200/50 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
// // //                             >
// // //                                 <div className="flex items-start gap-3.5">
// // //                                     <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#46C7CD]/12 to-[#00B4D8]/8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // //                                         <IconComp className="w-4 h-4 text-[#46C7CD]" />
// // //                                     </div>
// // //                                     <div className="flex-1 min-w-0">
// // //                                         <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1 group-hover:text-[#46C7CD] transition-colors duration-200">
// // //                                             {topic.title}
// // //                                         </h4>
// // //                                         <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
// // //                                             {topic.desc}
// // //                                         </p>
// // //                                     </div>
// // //                                     <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#46C7CD] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
// // //                                 </div>
// // //                             </a>
// // //                         );
// // //                     })}
// // //                 </div>
// // //             </div>

// // //             {/* Footer */}
// // //             <Footer />
// // //         </div>
// // //     );
// // // };

// // // export default ContactUsPage;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router";
// import {
//     Mail,
//     Phone,
//     MapPin,
//     Clock,
//     Send,
//     ArrowLeft,
//     MessageCircle,
//     Headphones,
//     ChevronDown,
// } from "lucide-react";
// import Footer from "@/module/home/components/footer";

// const contactMethods = [
//     {
//         icon: Mail,
//         title: "Email Us",
//         description: "Our team typically responds within 24 hours",
//         value: "support@matchatfirstswipe.com",
//         href: "mailto:support@matchatfirstswipe.com",
//         color: "from-[#46C7CD] to-[#00B4D8]",
//     },
//     {
//         icon: Phone,
//         title: "Call Us",
//         description: "Available during business hours (AEST)",
//         value: "9125855632",
//         href: "tel:9125855632",
//         color: "from-[#00B4D8] to-[#0096B4]",
//     },
//     {
//         icon: MapPin,
//         title: "Visit Us",
//         description: "Our headquarters",
//         value: "Sydney, NSW, Australia",
//         href: null,
//         color: "from-[#46C7CD] to-[#38B2AC]",
//     },
//     {
//         icon: Clock,
//         title: "Business Hours",
//         description: "Monday – Friday",
//         value: "9:00 AM – 6:00 PM AEST",
//         href: null,
//         color: "from-[#38B2AC] to-[#46C7CD]",
//     },
// ];

// const subjectOptions = [
//     "General Enquiry",
//     "Account & Profile Help",
//     "Report a Bug",
//     "Safety & Privacy Concern",
//     "Premium Subscription",
//     "Feedback & Suggestions",
//     "Partnership & Collaboration",
//     "Other",
// ];

// const ContactUsPage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubjectOpen, setIsSubjectOpen] = useState(false);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const handleChange = (e) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleSubjectSelect = (option) => {
//         setFormData((prev) => ({ ...prev, subject: option }));
//         setIsSubjectOpen(false);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // In production, this would send to your API
//         console.log("Form submitted:", formData);
//         setIsSubmitted(true);
//         setTimeout(() => {
//             setIsSubmitted(false);
//             setFormData({ name: "", email: "", subject: "", message: "" });
//         }, 4000);
//     };

//     return (
//         <div className="min-h-screen bg-[#F0F1F3]">
//             {/* ===== HERO HEADER ===== */}
//             <section className="relative overflow-hidden bg-footerBg">
//                 {/* Gradient Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#46C7CD]/15 via-transparent to-[#00B4D8]/10" />
//                 <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22D3EE]/8 rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4" />
//                 <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#46C7CD]/6 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4" />

//                 {/* Decorative Stars */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <div className="absolute top-[15%] right-[10%] text-white/15 text-lg">
//                         ✦
//                     </div>
//                     <div className="absolute top-[35%] left-[12%] text-white/10 text-xl">
//                         ✦
//                     </div>
//                     <div className="absolute bottom-[25%] right-[20%] text-white/8 text-base">
//                         ✦
//                     </div>
//                     <div className="absolute top-[50%] left-[30%] text-white/12 text-sm">
//                         ✦
//                     </div>
//                 </div>

//                 <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-20 md:pb-24">
//                     {/* Back Navigation */}
//                     <Link
//                         to="/"
//                         className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-300 mb-10 sm:mb-14 group"
//                     >
//                         <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
//                         Back to Home
//                     </Link>

//                     {/* Title Section */}
//                     <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
//                         <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#46C7CD] to-[#00B4D8] flex items-center justify-center shadow-lg shadow-[#46C7CD]/25">
//                             <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                         </div>
//                         <div>
//                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
//                                 Contact Us
//                             </h1>
//                         </div>
//                     </div>

//                     <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed">
//                         Have a question, feedback, or need help? We're here for you. Reach
//                         out and our team will get back to you as soon as possible.
//                     </p>
//                 </div>

//                 {/* Bottom Wave */}
//                 <div className="absolute bottom-0 left-0 right-0">
//                     <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
//                         <path
//                             d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
//                             fill="#F0F1F3"
//                         />
//                     </svg>
//                 </div>
//             </section>

//             {/* ===== CONTACT METHODS GRID ===== */}
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//                     {contactMethods.map((method, i) => {
//                         const IconComponent = method.icon;
//                         return (
//                             <div
//                                 key={i}
//                                 className="group bg-white rounded-2xl border border-slate-200/50 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                             >
//                                 <div
//                                     className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
//                                 >
//                                     <IconComponent className="w-5 h-5 text-white" />
//                                 </div>
//                                 <h3 className="text-sm font-bold text-slate-900 mb-1">
//                                     {method.title}
//                                 </h3>
//                                 <p className="text-xs text-slate-400 mb-2.5">
//                                     {method.description}
//                                 </p>
//                                 {method.href ? (
//                                     <a
//                                         href={method.href}
//                                         className="text-sm font-semibold text-[#46C7CD] hover:text-[#00B4D8] transition-colors duration-200 break-all"
//                                     >
//                                         {method.value}
//                                     </a>
//                                 ) : (
//                                     <span className="text-sm font-semibold text-slate-700">
//                                         {method.value}
//                                     </span>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* ===== MAIN CONTENT: FORM + FAQ ===== */}
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
//                     {/* Contact Form */}
//                     <div className="lg:col-span-3">
//                         <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/50 p-6 sm:p-8 md:p-10 shadow-sm">
//                             <div className="flex items-center gap-3 mb-2">
//                                 <Headphones className="w-5 h-5 text-[#46C7CD]" />
//                                 <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
//                                     Send Us a Message
//                                 </h2>
//                             </div>
//                             <p className="text-sm text-slate-500 mb-6 sm:mb-8">
//                                 Fill out the form and we'll respond within 24 hours.
//                             </p>

//                             {isSubmitted ? (
//                                 <div className="text-center py-12 sm:py-16">
//                                     <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-[#46C7CD]/15 to-[#00B4D8]/10 flex items-center justify-center mb-4 sm:mb-5">
//                                         <Send className="w-7 h-7 sm:w-8 sm:h-8 text-[#46C7CD]" />
//                                     </div>
//                                     <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
//                                         Message Sent!
//                                     </h3>
//                                     <p className="text-sm text-slate-500 max-w-sm mx-auto">
//                                         Thank you for reaching out. We'll get back to you within 24
//                                         hours.
//                                     </p>
//                                 </div>
//                             ) : (
//                                 <form
//                                     onSubmit={handleSubmit}
//                                     className="space-y-5 sm:space-y-6"
//                                 >
//                                     {/* Name & Email Row */}
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                                         <div>
//                                             <label
//                                                 htmlFor="name"
//                                                 className="block text-sm font-semibold text-slate-700 mb-2"
//                                             >
//                                                 Full Name <span className="text-red-400">*</span>
//                                             </label>
//                                             <input
//                                                 id="name"
//                                                 type="text"
//                                                 name="name"
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 required
//                                                 placeholder="Your full name"
//                                                 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all duration-200"
//                                             />
//                                         </div>
//                                         <div>
//                                             <label
//                                                 htmlFor="email"
//                                                 className="block text-sm font-semibold text-slate-700 mb-2"
//                                             >
//                                                 Email Address <span className="text-red-400">*</span>
//                                             </label>
//                                             <input
//                                                 id="email"
//                                                 type="email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 required
//                                                 placeholder="your@email.com"
//                                                 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all duration-200"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Subject - Custom Dropdown */}
//                                     <div className="relative">
//                                         <label
//                                             htmlFor="subject"
//                                             className="block text-sm font-semibold text-slate-700 mb-2"
//                                         >
//                                             Subject <span className="text-red-400">*</span>
//                                         </label>
//                                         <button
//                                             type="button"
//                                             onClick={() => setIsSubjectOpen(!isSubjectOpen)}
//                                             className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-left focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all duration-200 flex items-center justify-between"
//                                         >
//                                             <span
//                                                 className={
//                                                     formData.subject ? "text-slate-800" : "text-slate-400"
//                                                 }
//                                             >
//                                                 {formData.subject || "Select a topic"}
//                                             </span>
//                                             <ChevronDown
//                                                 className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSubjectOpen ? "rotate-180" : ""}`}
//                                             />
//                                         </button>
//                                         {isSubjectOpen && (
//                                             <div className="absolute z-20 w-full mt-1.5 bg-white rounded-xl border border-slate-200 shadow-lg py-1.5 max-h-52 overflow-y-auto">
//                                                 {subjectOptions.map((option, i) => (
//                                                     <button
//                                                         key={i}
//                                                         type="button"
//                                                         onClick={() => handleSubjectSelect(option)}
//                                                         className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#46C7CD]/5 transition-colors duration-150 ${formData.subject === option
//                                                                 ? "text-[#46C7CD] font-medium bg-[#46C7CD]/5"
//                                                                 : "text-slate-700"
//                                                             }`}
//                                                     >
//                                                         {option}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* Message */}
//                                     <div>
//                                         <label
//                                             htmlFor="message"
//                                             className="block text-sm font-semibold text-slate-700 mb-2"
//                                         >
//                                             Message <span className="text-red-400">*</span>
//                                         </label>
//                                         <textarea
//                                             id="message"
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             required
//                                             rows={5}
//                                             placeholder="Tell us how we can help you..."
//                                             className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#46C7CD]/30 focus:border-[#46C7CD] transition-all duration-200 resize-none"
//                                         />
//                                     </div>

//                                     {/* Submit Button */}
//                                     <button
//                                         type="submit"
//                                         className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#46C7CD] to-[#00B4D8] hover:from-[#3BB8BE] hover:to-[#0096B4] text-white font-bold text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg shadow-[#46C7CD]/25 hover:shadow-xl hover:shadow-[#46C7CD]/30 transform hover:scale-[1.02] active:scale-100"
//                                     >
//                                         <Send className="w-4 h-4" />
//                                         Send Message
//                                     </button>
//                                 </form>
//                             )}
//                         </div>
//                     </div>

//                     {/* Right Side: Quick Help */}
//                     <div className="lg:col-span-2 space-y-5 sm:space-y-6">
//                         {/* Response Time Card */}
//                         <div className="bg-gradient-to-br from-footerBg to-[#1a1a1f] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white relative overflow-hidden">
//                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#46C7CD]/10 rounded-full blur-[60px] translate-x-1/4 -translate-y-1/4" />
//                             <div className="relative z-10">
//                                 <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
//                                     <Clock className="w-5 h-5 text-[#46C7CD]" />
//                                 </div>
//                                 <h3 className="text-base sm:text-lg font-bold mb-2">
//                                     Quick Response
//                                 </h3>
//                                 <p className="text-white/50 text-sm leading-relaxed mb-5">
//                                     Our dedicated support team aims to respond to all enquiries
//                                     within 24 hours during business days.
//                                 </p>
//                                 <div className="grid grid-cols-2 gap-3">
//                                     <div className="bg-white/5 rounded-xl px-3 py-3 text-center border border-white/5">
//                                         <p className="text-xl sm:text-2xl font-bold text-[#46C7CD]">
//                                             &lt; 24h
//                                         </p>
//                                         <p className="text-[11px] text-white/40 mt-0.5">
//                                             Email Response
//                                         </p>
//                                     </div>
//                                     <div className="bg-white/5 rounded-xl px-3 py-3 text-center border border-white/5">
//                                         <p className="text-xl sm:text-2xl font-bold text-[#46C7CD]">
//                                             24/7
//                                         </p>
//                                         <p className="text-[11px] text-white/40 mt-0.5">
//                                             Help Centre
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Common Topics */}
//                         <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/50 p-6 sm:p-7 shadow-sm">
//                             <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
//                                 Common Topics
//                             </h3>
//                             <div className="space-y-2.5">
//                                 {[
//                                     { label: "How to verify my profile?", tag: "Account" },
//                                     { label: "Cancel or change subscription", tag: "Billing" },
//                                     { label: "Report a suspicious user", tag: "Safety" },
//                                     { label: "How matching algorithm works", tag: "Features" },
//                                     { label: "Delete my account & data", tag: "Privacy" },
//                                 ].map((item, i) => (
//                                     <div
//                                         key={i}
//                                         className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50/70 hover:bg-[#46C7CD]/5 border border-slate-100 hover:border-[#46C7CD]/20 transition-all duration-200 cursor-pointer group"
//                                     >
//                                         <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
//                                             {item.label}
//                                         </span>
//                                         <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 group-hover:bg-[#46C7CD]/10 group-hover:text-[#46C7CD] px-2 py-1 rounded-md transition-all">
//                                             {item.tag}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Safety Note */}
//                         <div className="bg-gradient-to-r from-[#46C7CD]/5 to-[#00B4D8]/5 rounded-2xl border border-[#46C7CD]/15 p-5 sm:p-6">
//                             <div className="flex items-start gap-3">
//                                 <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#46C7CD]/10 flex items-center justify-center mt-0.5">
//                                     <MessageCircle className="w-4 h-4 text-[#46C7CD]" />
//                                 </div>
//                                 <div>
//                                     <h4 className="text-sm font-bold text-slate-800 mb-1">
//                                         Your Safety Matters
//                                     </h4>
//                                     <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
//                                         If you're experiencing harassment or feel unsafe, please use
//                                         the in-app report feature for immediate action, or contact
//                                         us directly.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default ContactUsPage;

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowLeft,
  MessageCircle,
  Headphones,
  ChevronDown,
} from "lucide-react";
import Footer from "../components/footer";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    value: "support@matchatfirstswipe.com",
    href: "mailto:support@matchatfirstswipe.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Available during business hours (AEST)",
    value: "9125855632",
    href: "tel:9125855632",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "Sydney, NSW, Australia",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday – Friday",
    value: "9:00 AM – 6:00 PM AEST",
    href: null,
  },
];

const subjectOptions = [
  "General Enquiry",
  "Account & Profile Help",
  "Report a Bug",
  "Safety & Privacy Concern",
  "Premium Subscription",
  "Feedback & Suggestions",
  "Partnership & Collaboration",
  "Other",
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubjectSelect = (option) => {
    setFormData((prev) => ({ ...prev, subject: option }));
    setIsSubjectOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO HEADER ===== */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#2C3E50_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          {/* Back Navigation */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </a>

          {/* Title Section */}
          <div className="flex items-start gap-4 sm:gap-5 mb-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#46C7CD] flex items-center justify-center">
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Contact Us
              </h1>
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Have a question, feedback, or need help? We're here for you. Reach
            out and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ===== CONTACT METHODS GRID ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method, i) => {
            const IconComponent = method.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {method.description}
                </p>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-sm font-semibold text-[#46C7CD] hover:text-[#46C7CD] transition-colors duration-200 break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-700">
                    {method.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== MAIN CONTENT: FORM + INFO ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form - Left Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Headphones className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                Fill out the form and we'll respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4 sm:mb-5">
                    <Send className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject - Custom Dropdown */}
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 flex items-center justify-between"
                    >
                      <span
                        className={
                          formData.subject ? "text-slate-800" : "text-slate-400"
                        }
                      >
                        {formData.subject || "Select a topic"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSubjectOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isSubjectOpen && (
                      <div className="absolute z-20 w-full mt-2 bg-white rounded-lg border border-gray-300 shadow-lg py-1.5 max-h-52 overflow-y-auto">
                        {subjectOptions.map((option, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleSubjectSelect(option)}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-150 ${formData.subject === option
                                ? "text-[#46C7CD] font-medium bg-blue-50"
                                : "text-slate-700"
                              }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#46C7CD] hover:bg-[#3dabb1] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-100"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side: Information Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-7 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#46C7CD]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Response</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our dedicated support team aims to respond to all enquiries
                within 24 hours during business days.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg px-4 py-4 text-center border border-white/10">
                  <p className="text-2xl font-bold text-[#46C7CD]">{"<24h"}</p>
                  <p className="text-xs text-slate-400 mt-1">Email Response</p>
                </div>
                <div className="bg-white/5 rounded-lg px-4 py-4 text-center border border-white/10">
                  <p className="text-2xl font-bold text-[#46C7CD]">24/7</p>
                  <p className="text-xs text-slate-400 mt-1">Help Centre</p>
                </div>
              </div>
            </div>

            {/* Common Topics */}
            <div className="bg-white rounded-xl border border-gray-200 p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Common Topics
              </h3>
              <div className="space-y-3">
                {[
                  { label: "How to verify my profile?", tag: "Account" },
                  { label: "Cancel or change subscription", tag: "Billing" },
                  { label: "Report a suspicious user", tag: "Safety" },
                  { label: "Recover my password", tag: "Security" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 group flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium bg-blue-100 text-[#46C7CD] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
