// import React from "react";
// import { Heart } from "lucide-react";
// import mafsVector from "@/assets/svg/mafs-vectors.svg";
// import { contacts, navigation, social } from "@/constants/footerlinks";
// import FooterLinks from "@/components/core/footer-links";

// const Footer = () => {
//   return (
//     <footer className="p-4 md:p-8 mx-auto">
//       {/* Main Dark Card Container */}
//       <main className="w-full bg-footerBg text-white rounded-3xl p-20 md:px-32 relative overflow-hidden">
//         {/* Top Section: Logo & Links */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
//           {/* Left Side: Large Logo Area */}
//           <div className="w-2/3 md:w-3/4 flex items-center justify-start">
//             <img
//               src={mafsVector}
//               alt="MAFS Logo"
//               className="w-full h-auto" // 'invert' if your logo is black, remove if it's already white
//             />
//           </div>

//           {/* Right Side: Navigation Links */}
//           {/* Grid with 3 columns for links */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400">
//             {/* Col 1: Navigation */}
//             <FooterLinks data={navigation} />

//             {/* Col 2: Social */}
//             <FooterLinks data={social} />

//             {/* Col 3: Contact */}
//             <div className="flex flex-col space-y-4">
//               <span className="hover:text-white text-gray-400 text-base md:text-xl font-medium cursor-pointer">
//                 Contact Us
//               </span>
//               <FooterLinks data={contacts} />
//             </div>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className="w-full h-[1.5px] bg-white/20 mb-8" />

//         {/* Bottom Bar: Copyright & Tagline */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-lg text-gray-500 font-medium tracking-wide">
//           <p className="uppercase">© 2025 MATCH AT FIRST SWIPE.</p>

//           <div className="flex items-center gap-1 mt-4 text-lg md:mt-0">
//             <span>Built for Australia</span>
//             <Heart className="w-3 h-3 text-gray-500 fill-gray-500" />
//           </div>
//         </div>
//       </main>
//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import mafsVector from "@/assets/svg/mafs-vectors.svg";
import { contacts, navigation, social } from "@/constants/footerlinks";
import FooterLinks from "@/components/core/footer-links";

const Footer = () => {
  return (
    <footer className="p-3 sm:p-4 md:p-6 lg:p-8 mx-auto">
      {/* Main Dark Card Container */}
      <main className="w-full bg-footerBg text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden">

        {/* Top Section: Logo & Links */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16 lg:mb-20">

          {/* Left Side: Large Logo Area */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 flex items-center justify-start lg:justify-start">
            <img
              src={mafsVector}
              alt="MAFS Logo"
              className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] h-auto"
            />
          </div>

          {/* Right Side: Navigation Links */}
          <div className="w-full lg:w-1/2 xl:w-3/5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 text-sm sm:text-base text-gray-400">

              {/* Col 1: Navigation */}
              <div className="col-span-1">
                <FooterLinks data={navigation} />
              </div>

              {/* Col 2: Social */}
              <div className="col-span-1">
                <FooterLinks data={social} />
              </div>

              {/* Col 3: Contact */}
              <div className="col-span-2 sm:col-span-1 flex flex-col space-y-3 sm:space-y-4">
                <Link to="/contact-us" className="text-gray-400 text-base sm:text-lg md:text-xl font-medium hover:text-white cursor-pointer transition-colors duration-200">
                  Contact Us
                </Link>
                <FooterLinks data={contacts} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] sm:h-[1.5px] bg-white/20 mb-6 sm:mb-8" />

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 font-medium tracking-wide">

          {/* Copyright */}
          <p className="uppercase text-center sm:text-left order-2 sm:order-1">
            © 2025 MATCH AT FIRST SWIPE.
          </p>

          {/* Built for Australia */}
          <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2">
            <span className="text-sm sm:text-base md:text-lg">Built for Australia</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 fill-gray-500" />
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;