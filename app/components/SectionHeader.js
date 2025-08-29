import React from "react";

const SectionHeader = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-bold font-sans scale-y-120 ${className}`}>
    {children}
  </h2>
);

export default SectionHeader; 