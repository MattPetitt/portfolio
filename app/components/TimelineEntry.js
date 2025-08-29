import React from "react";

const TimelineEntry = ({
  title,
  subtitle,
  date,
  description,
  link,
  className = "",
}) => (
  <div className={className}>
    <h3 className="text-xl font-semibold font-sans">
      {link ? (
        <a href={link} className="hover:text-blue-700">
          {title}
        </a>
      ) : (
        title
      )}
    </h3>
    <div className="mt-1 text-md sm:text-md text-gray-800 font-sans">
      {subtitle} {subtitle && date && "·"} {date}
    </div>
    <p className="mt-3 text-md sm:text-md font-serif leading-relaxed">{description}</p>
  </div>
);

export default TimelineEntry; 