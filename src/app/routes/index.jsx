import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";
import App from "@/App";
import PrivacyPolicyPage from "@/module/home/pages/privacy-policy.page";
import ContactUsPage from "@/module/home/pages/contact-us.page";
import TermsAndConditionsPage from "@/module/home/pages/terms-conditions.page";
import FeaturesPage from "@/module/home/pages/features.page";
import HowItWorksPage from "@/module/home/pages/how-it-works.page";
import WaitlistPage from "@/module/home/pages/waitlist.page";
import AboutPage from "@/module/home/pages/about.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/terms-conditions",
    element: <TermsAndConditionsPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorksPage />,
  },
  {
    path: "/waitlist",
    element: <WaitlistPage />,
  },
]);
