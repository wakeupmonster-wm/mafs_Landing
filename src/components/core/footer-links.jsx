import React from "react";
import { Link } from "react-router";

const FooterLinks = ({ data }) => {
  return (
    <div className="flex flex-col space-y-4">
      {data.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className="hover:text-white text-base md:text-xl transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
