import { Link } from "react-router";

export default function Header() {
  const navLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Features",
      path: "/features",
    },
    {
      title: "FAQ",
      path: "/",
    },
    {
      title: "Join Now",
      path: "/waitlist",
    },
  ];

  return (
    <>
      {/* Logo */}
      <div className="absolute top-6 sm:top-8 md:top-10 left-6 sm:left-8 md:left-10 lg:left-14 z-30">
        <img
          src="/Vector (4).png"
          alt="Logo"
          className="h-7 sm:h-8 md:h-10 w-auto"
        />
      </div>

      {/* Navigation */}
      <div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 lg:right-14 z-30">
        <nav className="bg-[#e9eaea] backdrop-blur-md rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-4 border-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex items-center gap-3 sm:gap-5 md:gap-7">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#4B5563] hover:text-[#111827] text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
