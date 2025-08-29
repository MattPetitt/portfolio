import React from "react";

const NavLink = ({ href, children, className = "", target = "_self" }) => (
  <a
    href={href}
    target={target}
    className={`text-md md:text-xl font-sans text-gray-900 py-1 hover:text-blue-700 ${className}`}
  >
    {children}
  </a>
);

export default NavLink;