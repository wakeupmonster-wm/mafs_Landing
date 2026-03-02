// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles/index.css";
// // import { RouterProvider } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./app/routes";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ v7 Import
import "./styles/index.css";

// ✅ Imports
import App from "@/App"; // Home Page
import WaitlistFormPage from "@/module/home/components/WaitlistPage"; // QR Scan Page
import PrivacyPolicyPage from "@/module/home/pages/privacy-policy.page";
import ContactUsPage from "@/module/home/pages/contact-us.page";
import TermsAndConditionsPage from "@/module/home/pages/terms-conditions.page";
import FeaturesPage from "@/module/home/pages/features.page";
import HowItWorksPage from "@/module/home/pages/how-it-works.page";
import WaitlistLandingPage from "@/module/home/pages/waitlist.page";
import AboutPage from "./module/home/pages/about.page";

// ✅ Router YAHIN define karo (Sabse safe tarika)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Landing Page
  },
  {
    path: "/join", // ✅ QR Code Page
    element: <WaitlistFormPage />,
  },
  {
    path: "/waitlist",
    element: <WaitlistLandingPage />,
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
  // 404 Page (Agar URL galat ho)
  {
    path: "*",
    element: (
      <div className="h-screen flex items-center justify-center bg-black text-white flex-col">
        <h1 className="text-4xl font-bold">404</h1>
        <p>Page not found</p>
        <a href="/" className="mt-4 text-cyan-400 underline">Go Home</a>
      </div>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);