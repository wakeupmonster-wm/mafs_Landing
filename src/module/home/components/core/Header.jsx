import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { MoreHorizontal, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "FAQ", path: "#faq-section" },
    { title: "Join Now", path: "/waitlist" },
  ];

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
    <header className="fixed top-0 left-0 w-full z-50 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-14 py-3 sm:py-4 md:py-6 transition-all duration-300">
      <div className="max-w-[1530px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to={"/"}
          className="z-50 cursor-pointer shrink-0"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <img
            src="/Vector.png"
            alt="Logo"
            loading="lazy"
            className="h-6 xs:h-7 sm:h-8 md:h-10 w-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-[#e9eaea]/80 backdrop-blur-md rounded-full px-6 lg:px-8 py-2.5 lg:py-3 border-[3px] lg:border-4 border-white shadow-lg items-center gap-5 lg:gap-7">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={(e) => {
                handleScroll(e, link.path);
                if (!link.path.startsWith("#")) setIsOpen(false);
              }}
              className="text-[#4B5563] hover:text-[#111827] cursor-pointer text-xs lg:text-sm font-semibold transition-colors whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Dropdown Logic */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 xs:w-12 xs:h-12 flex items-center justify-center bg-white rounded-xl xs:rounded-2xl shadow-xl border border-gray-100 text-black transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} className="xs:size-6" /> : <MoreHorizontal size={20} className="xs:size-6" />}
          </button>

          {/* Dropdown Card */}
          <div
            className={`
            absolute right-0 mt-4 w-44 xs:w-48 p-2 xs:p-3
            bg-white/90 backdrop-blur-xl rounded-[20px] 
            border border-white/80 shadow-2xl
            transition-all duration-300 origin-top-right z-50
            ${isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
              }
          `}
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={(e) => {
                    handleScroll(e, link.path);
                    if (!link.path.startsWith("#")) setIsOpen(false);
                  }}
                  className="px-4 py-2.5 text-[#0b0d0f] hover:bg-black/5 rounded-xl text-base font-semibold transition-colors"
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
