import React from "react";

const CommunityCard = ({ title, description, linkText, imgSrc, link }) => {
  return (
    <div className="border border-[#10CC6F] rounded-lg p-5 pb-20 hover:shadow-lg transition-shadow duration-300">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-t-lg w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <a href={link} className="text-green-500 font-medium">
        {linkText}
      </a>
    </div>
  );
};

export default CommunityCard;
