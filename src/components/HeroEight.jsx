import Blog from "./BlogComponent";
import next from "../../public/assets/next.svg";
import Blogcomponent from "./BlogComponent";

const HeroEight = () => {
    const blogPosts = [
        {
          blogId: 1,
          title: "How good open source RPA?",
          date: "Aug 14, 2024",
          description:
            "Learn to improve your productivity with Microsoft Copilot 365...",
        },
        {
          blogId: 2,
          title: "AI: The next big thing?",
          date: "Sep 5, 2024",
          description: "Exploring the latest trends in AI-driven automation...",
        },
        {
          blogId: 3,
          title: "Tech:Passion Or Money?",
          date: "Sep 5, 2024",
          description: "Exploring the latest trends in AI-driven automation...",
        },
        
      ];
    return ( 
        <div className="bg-[#E7F9E9] p-5  lg:p-20">
            <div>
            <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Stay informed and inspired
            </p>
            <h1 className="text-[35px] lg:text-[50px] font-extrabold">Blog</h1>
            <div className="flex flex-col lg:flex-row gap-5 pt-10">
            {blogPosts.map((post) => (
              <Blogcomponent
                key={post.blogId}
                blogId={post.blogId}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            ))}
            </div>
            <div className="flex gap-2 items-center pt-5 text-[#10CC6F]">
            <p className="lg:text-[24px]">All Blogs</p>
            <img src={next}/>
            </div>
            </div>
        </div>
     );
}
 
export default HeroEight;