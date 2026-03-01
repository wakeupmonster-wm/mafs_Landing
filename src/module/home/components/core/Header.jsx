import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { MoreHorizontal, X } from "lucide-react"; // Image ke according 'MoreHorizontal' best hai

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "FAQ", path: "#faq-section" },
    { title: "Join Now", path: "/waitlist" },
  ];

  // Menu ke bahar click karne par band karne ke liye logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to={"/"}
          className="z-50 cursor-pointer"
          onClick={(e) => {
            // Agar user home page par hi hai, toh default navigation ko prevent karein
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth transition ke liye
              });
            }
          }}
        >
          <img
            src="/Vector (4).png"
            alt="Logo"
            loading="lazy"
            className="h-7 sm:h-8 md:h-10 w-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation (Visible only on md+) */}
        <nav className="hidden md:flex bg-[#e9eaea]/80 backdrop-blur-md rounded-full px-8 py-3 border-4 border-white shadow-lg items-center gap-7">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={(e) => {
                handleScroll(e, link.path);
                if (!link.path.startsWith("#")) setIsOpen(false);
              }}
              className="text-[#4B5563] hover:text-[#111827] cursor-pointer text-sm font-medium transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Dropdown Logic */}
        <div className="md:hidden relative" ref={menuRef}>
          {/* Menu Button (Three Dots style as per your image) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-xl border border-gray-100 text-black transition-transform active:scale-90"
          >
            {isOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
          </button>

          {/* Dropdown Card (Your requested style) */}
          <div
            className={`
            absolute right-0 mt-4 w-48 p-3 lg:p-4
            bg-white/30 backdrop-blur-lg rounded-[20px] 
            border border-white/80 shadow-2xl
            transition-all duration-300 origin-top-right
            ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
            }
          `}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={(e) => {
                    handleScroll(e, link.path);
                    if (!link.path.startsWith("#")) setIsOpen(false);
                  }}
                  className="px-4 py-3 text-[#0b0d0f] lg:text-[#4B5563] cursor-pointer hover:bg-black/5 rounded-lg lg:rounded-2xl text-lg font-medium transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
