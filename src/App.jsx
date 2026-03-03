// App.jsx
import HomePage from "@/module/home/pages/home.page";
import Dashboard from "@/components/howToMatch";
import PeopleAnimation from "@/components/core/peopleAnimation";
import PremiumRewardsAnimation from "@/components/core/PremiumRewardsAnimation";
import FAQAccordion from "@/components/core/FAQAccordion";
import Waitlist from "@/module/home/components/waitlist";
import Footer from "./module/home/components/footer";

export default function App() {
  return (
    <>
      {/* <ComingSoonPage /> */}
      {/* <HeroAnimation /> */}
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
