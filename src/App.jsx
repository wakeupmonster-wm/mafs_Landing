// import LayoutV1 from "./app/layouts/layoutV1";
import FAQAccordion from "./components/core/FAQAccordion";
import HeroAnimation from "./components/core/HeroAnimation";
import PeopleAnimation from "./components/core/peopleAnimation";
import PremiumRewardsAnimation from "./components/core/PremiumRewardsAnimation";
import Dashboard from "./components/howToMatch";
// import ComingSoonPage from "./module/coming-soon/pages/comingsoon.page";
// import LayoutV1 from "@/app/layouts/layoutV1";
// import ComingSoonPage from "@/module/coming-soon/pages/comingsoon.page";
import Waitlist from "@/module/home/components/waitlist";
import Footer from "./module/home/components/footer";

export default function App() {
  return (
    <>
    <HeroAnimation/>
      {/* <ComingSoonPage /> */}
      <Dashboard/>
        <PeopleAnimation />
      <PremiumRewardsAnimation/>
       <FAQAccordion/>
        <Waitlist />
        <Footer/>
    </>
  );
}