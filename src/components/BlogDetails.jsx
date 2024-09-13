import React from "react";
import { useParams } from "react-router-dom";
import MainHero from "./MainHero";
import rectangle from "../../public/assets/Rectangle 35.svg";

const BlogDetails = () => {
  const { blogId } = useParams();

  const blogDetails = {
    1: {
      title: "How good open source RPA?",
      content:
        "Enhance your workflows with Power Automate Desktop’s custom actions. Craft custom actions in C# to simplify complex tasks, boosting productivity and teamwork. Follow this tutorial to seamlessly integrate custom actions into your flows using Visual Studio and PowerShell.",
      date: "12th sept 2024",
    },
    2: {
      title: "AI : The next big thing?",
      content: "Exploring the latest trends in AI-driven automation...",
      date: "12th sept 2024",
    },
  };

  const blog = blogDetails[blogId];

  return (
    <MainHero>
      <div className=" py-10 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold py-5 lg:pt-0">
            {blog.date}
          </p>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="mt-5">{blog.content}</p>
        </div>
        <div>
          <img src={rectangle} alt="" />
        </div>
      </div>
    </MainHero>
  );
};

export default BlogDetails;
