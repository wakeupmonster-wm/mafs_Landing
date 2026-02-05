
import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "When will MATCH AT FIRST SWIPE launch in Australia?",
      answer: "MATCH AT FIRST SWIPE will be available in Australia in Q2 2026. We're working hard to ensure a smooth launch experience for all Australian users."
    },
    {
      question: "How can I join the waitlist?",
      answer: "You can join the waitlist by visiting our website and clicking the 'Join Waitlist' button. Simply enter your email address and we'll notify you as soon as we launch in your region."
    },
    {
      question: "Will the app be available on both iOS and Android?",
      answer: "Yes! MATCH AT FIRST SWIPE will be available on both iOS and Android platforms. You can download it from the App Store or Google Play Store once we launch."
    },
    {
      question: "Is MATCH AT FIRST SWIPE free to use?",
      answer: "Yes, MATCH AT FIRST SWIPE offers a free tier with core features. We also offer a Premium subscription for users who want access to advanced features and enhanced matching capabilities."
    },
    {
      question: "What benefits do Premium members get?",
      answer: "Premium members enjoy unlimited swipes, advanced filters, priority customer support, the ability to see who liked their profile, and exclusive access to special events and features before they're released to free users."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Section - Title and Description */}
          <div className="lg:sticky lg:top-16">
            <div className="relative">
              {/* Decorative accent */}
              {/* <div className="absolute -top-4 left-0 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div> */}
                <img src='/3a7805e8d1f06e0e2c0b22ed0359b0ef6faa8399.png' alt=''/>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mt-8 mb-6 leading-tight">
                Answers to Your Top Questions
              </h1>
            
              <p className="text-lg text-slate-600 leading-relaxed">
                From setup steps to feature details, our FAQs cover everything you need to know.
              </p>
            </div>
          </div>

        <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="group rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200/50"
                style={{
                  background: 'linear-gradient(to right, #FFFFFF, #E0FBFD)'
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-slate-800 pr-4" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '25.2px',
                    letterSpacing: '-0.18px',
                    color: '#3B3B3B'
                  }}>
                    {faq.question}
                  </span>
                  
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}>
                      <svg
                        className="w-5 h-5 text-cyan-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '25.2px',
                      letterSpacing: '-0.18px',
                      color: '#3B3B3B'
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;