import Navbar from "@/components/core/navbar";
import Footer from "@/module/home/components/footer";
import { Outlet } from "react-router"; // Import Outlet

// Using Outlet is standard for Route wrappers
export default function LayoutV1({ children }) {
  return (
    // FIX: Changed 'overflow-hidden' to 'overflow-x-hidden'
    <main className="relative max-w-screen-2xl min-h-screen flex flex-col">
      <Navbar />
      {/* If passed as children (manual wrap) */}
      {children}
      {/* If used in Router config (Option 1) */}
      {!children && <Outlet />}
      <Footer />
    </main>
  );
}
