import Navbar from "@/components/core/navbar";
import { Outlet } from "react-router"; // Import Outlet

// Using Outlet is standard for Route wrappers
export default function LayoutV1({ children }) {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      {/* <Navbar /> */}
      {/* If passed as children (manual wrap) */}
      {children}
      {/* If used in Router config (Option 1) */}
      {!children && <Outlet />}
    </main>
  );
}
