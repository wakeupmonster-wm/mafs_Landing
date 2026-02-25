import React from "react";
import { Link } from "react-router";

const FooterLinks = ({ data }) => {
  return (
    <div className="flex flex-col space-y-2.5">
      {data.map((item) => (
        <Link
          key={item.id}
          to={item.href}
          className="font-['Inter'] font-normal text-[16px] leading-[24px] text-gray-400 hover:text-white transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
