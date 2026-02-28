// // import LayoutV1 from "./app/layouts/layoutV1";
// import FAQAccordion from "./components/core/FAQAccordion";
// // import HeroAnimation from "./components/core/HeroAnimation";
// import PeopleAnimation from "./components/core/peopleAnimation";
// import PremiumRewardsAnimation from "./components/core/PremiumRewardsAnimation";
// import Dashboard from "./components/howToMatch";
// // import ComingSoonPage from "./module/coming-soon/pages/comingsoon.page";
// // import LayoutV1 from "@/app/layouts/layoutV1";
// // import ComingSoonPage from "@/module/coming-soon/pages/comingsoon.page";
// import Waitlist from "@/module/home/components/waitlist";
// import Footer from "./module/home/components/footer";
// import HomePage from "./module/home/pages/home.page";

// export default function App() {
//   return (
//     <>
//       {/* <ComingSoonPage /> */}
//       {/* <HeroAnimation /> */}
//       <HomePage />
//       <Dashboard />
//       <PeopleAnimation />
//       <PremiumRewardsAnimation />
//       <FAQAccordion />
//       <Waitlist />
//       <Footer />
//     </>
//   );
// }



import { Routes, Route } from "react-router-dom";
import FAQAccordion from "./components/core/FAQAccordion";
import PeopleAnimation from "./components/core/peopleAnimation";
import PremiumRewardsAnimation from "./components/core/PremiumRewardsAnimation";
import Dashboard from "./components/howToMatch";
import Waitlist from "@/module/home/components/waitlist";
import Footer from "./module/home/components/footer";
import HomePage from "./module/home/pages/home.page";
import WaitlistPage from "./module/home/components/WaitlistPage";

// ✅ Main site ka layout
function MainLayout() {
  return (
    <>
      <HomePage />
      <Dashboard />
      <PeopleAnimation />
      <PremiumRewardsAnimation />
      <FAQAccordion />
      <Waitlist />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* ✅ Main site */}
      <Route path="/" element={<MainLayout />} />

      {/* ✅ Waitlist form page - QR scan karne par yahan aayega */}
      <Route path="/waitlist" element={<Waitlist/>} />
       <Route path="/join" element={<WaitlistPage />} />
    </Routes>
  );
}