import React from "react";
import { Heart } from "lucide-react";
import mafsVector from "@/assets/svg/mafs-vectors.svg";
import { contacts, navigation, social } from "@/constants/footerlinks";
import FooterLinks from "@/components/core/footer-links";

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 mx-auto">
      {/* Main Dark Card Container */}
      <main className="w-full bg-footerBg text-white rounded-3xl p-20 md:px-32 relative overflow-hidden">
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
          {/* Left Side: Large Logo Area */}
          <div className="w-2/3 md:w-3/4 flex items-center justify-start">
            <img
              src={mafsVector}
              alt="MAFS Logo"
              className="w-full h-auto" // 'invert' if your logo is black, remove if it's already white
            />
          </div>

          {/* Right Side: Navigation Links */}
          {/* Grid with 3 columns for links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400">
            {/* Col 1: Navigation */}
            <FooterLinks data={navigation} />

            {/* Col 2: Social */}
            <FooterLinks data={social} />

            {/* Col 3: Contact */}
            <div className="flex flex-col space-y-4">
              <span className="hover:text-white text-gray-400 text-base md:text-xl font-medium cursor-pointer">
                Contact Us
              </span>
              <FooterLinks data={contacts} />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1.5px] bg-white/20 mb-8" />

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lg text-gray-500 font-medium tracking-wide">
          <p className="uppercase">© 2025 MATCH AT FIRST SWIPE.</p>

          <div className="flex items-center gap-1 mt-4 text-lg md:mt-0">
            <span>Built for Australia</span>
            <Heart className="w-3 h-3 text-gray-500 fill-gray-500" />
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
