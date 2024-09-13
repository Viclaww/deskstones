import React from "react";
import { Link } from "react-router-dom";
import calendar from "../../public/assets/calendar.svg";
import Blogimage from "../../public/assets/Rectangle 27.svg";

const Blogcomponent = ({ blogId, title, date, description }) => {
  return (
    <div className="bg-white p-5 rounded-[10px]">
      <div>
        <img src={Blogimage} alt="Blog Thumbnail" />
      </div>
      <div className="flex gap-3 items-center pt-5">
        <img src={calendar} alt="Calendar" />
        <p className="text-[14px] font-bold">{date}</p>
      </div>
      <div className="pt-2">
        <p className="text-[#222] text-[18px] font-bold">
          {title}
        </p>
      </div>
      <div>
        <p className="text-[12px] text-[#737373] pt-5">
          {description}
        </p>
      </div>
      <div className="pt-5">
        
        <Link to={`/blog/${blogId}`}>
          <button className="rounded-[5px] py-[10px] border border-[#10CC6F] text-[#10CC6F] font-bold text-[14px] w-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogcomponent;
