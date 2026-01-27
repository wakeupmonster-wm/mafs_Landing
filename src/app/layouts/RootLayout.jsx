import { Heart } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Public Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
              <span className="text-xl font-black tracking-tight text-gray-900">
                MAFS<span className="text-pink-600">.</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2026 MAFS Dating App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
