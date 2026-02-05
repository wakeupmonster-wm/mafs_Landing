import LayoutV1 from "@/app/layouts/layoutV1";
import PeopleAnimation from "@/components/core/peopleAnimation";
import ComingSoonPage from "@/module/coming-soon/pages/comingsoon.page";
import Waitlist from "@/module/home/components/waitlist";

export default function App() {
  return (
    <LayoutV1>
      <ComingSoonPage />
      <PeopleAnimation />
      <Waitlist />
    </LayoutV1>
  );
}
