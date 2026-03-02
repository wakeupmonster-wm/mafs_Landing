// import FAQAccordion from "./components/core/FAQAccordion";
// import PeopleAnimation from "./components/core/peopleAnimation";
// import PremiumRewardsAnimation from "./components/core/PremiumRewardsAnimation";
// import Dashboard from "./components/howToMatch";
// import Waitlist from "@/module/home/components/waitlist";
// import Footer from "./module/home/components/footer";
// import HomePage from "./module/home/pages/home.page";

// // ✅ Main site ka layout
// function MainLayout() {
//   return (
//     <>
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

// export default function App() {
//   return <MainLayout />;
// }

// import Header from "@/components/core/Header";
import Footer from "@/module/home/components/footer";
import HomePage from "@/module/home/pages/home.page";
import Dashboard from "@/components/howToMatch";
import PeopleAnimation from "@/components/core/peopleAnimation";
import PremiumRewardsAnimation from "@/components/core/PremiumRewardsAnimation";
import FAQAccordion from "@/components/core/FAQAccordion";
import Waitlist from "@/module/home/components/waitlist";

// ✅ Ye ab sirf Landing Page (Home) hai
export default function App() {
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