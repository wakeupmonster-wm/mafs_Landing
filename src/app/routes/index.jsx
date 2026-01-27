import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";
import App from "@/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { index: true, element: <App /> }, // Now renders landing page your stylized hero
    // ],
  },

  // { path: "*", element: <NotFoundPage /> },
]);
