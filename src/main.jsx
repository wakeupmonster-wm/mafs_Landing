// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles/index.css";
// // import {  RouterProvider } from "react-router";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./app/routes";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import "./styles/index.css";

// ✅ Sahi Imports Check karo
import App from "@/App"; 
import WaitlistFormPage from "@/module/home/components/WaitlistPage"; // <-- Ye file exist karni chahiye
import WaitlistLandingPage from "@/module/home/pages/waitlist.page";
import PrivacyPolicyPage from "@/module/home/pages/privacy-policy.page";
import ContactUsPage from "@/module/home/pages/contact-us.page";
import TermsAndConditionsPage from "@/module/home/pages/terms-conditions.page";
import FeaturesPage from "@/module/home/pages/features.page";
import HowItWorksPage from "@/module/home/pages/how-it-works.page";
import HomePage from "@/module/home/pages/home.page";
import BackgroundPattern from "@/module/home/pages/NewHome";
import AboutPage from "./module/home/pages/about.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/join", // ✅ Ye route hona bahut zaroori hai
    element: <WaitlistFormPage />,
  },
  {
    path: "/waitlist",
    element: <WaitlistLandingPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/new",
    element: <BackgroundPattern />,
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
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "*",
    element: <div className="p-10 text-white text-center">404 - Page Not Found</div>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);