import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
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
  );
}
