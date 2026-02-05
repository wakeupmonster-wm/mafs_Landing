// import LayoutV1 from "./app/layouts/layoutV1";
import FAQAccordion from "./components/core/FAQAccordion";
import HeroAnimation from "./components/core/HeroAnimation";
import PeopleAnimation from "./components/core/peopleAnimation";
import PremiumRewardsAnimation from "./components/core/PremiumRewardsAnimation";
import Dashboard from "./components/howToMatch";
// import ComingSoonPage from "./module/coming-soon/pages/comingsoon.page";

export default function App() {
  return (
    <>
    <HeroAnimation/>
      {/* <ComingSoonPage /> */}
      <PeopleAnimation />
      <Dashboard/>
      <FAQAccordion/>
      <PremiumRewardsAnimation/>
    </>
  );
}
