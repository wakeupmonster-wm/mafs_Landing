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
  const [isLoading, setIsLoading] = useState(false);
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

  // ✅ API Integration - Sheet2 (ContactUs) ke liye
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString(),
      };

      // ✅ Same API + ?sheet=ContactUs (Sheet2 ka naam)
      const response = await fetch(
        "https://sheetdb.io/api/v1/sl4zxdx7tagip?sheet=ContactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: payload }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO HEADER ===== */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#2C3E50_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </a>

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
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isSubjectOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isSubjectOpen && (
                      <div className="absolute z-20 w-full mt-2 bg-white rounded-lg border border-gray-300 shadow-lg py-1.5 max-h-52 overflow-y-auto">
                        {subjectOptions.map((option, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleSubjectSelect(option)}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors duration-150 ${
                              formData.subject === option
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
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#46C7CD] hover:bg-[#3dabb1] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
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
