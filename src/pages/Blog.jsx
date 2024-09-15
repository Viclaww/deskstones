import Button from "../components/Button";
import MainHero from "../components/MainHero";
import Blogcomponent from "../components/BlogComponent";

const Blog = () => {
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
    {
      blogId: 4,
      title: "The Genesis of shipping",
      date: "Sep 20, 2024",
      description: "Exploring the latest trends in AI-driven automation...",
    },
  ];

  return (
    <div className="">
      <MainHero>
        <div className="py-10 lg:py-20 pb-32 w-full lg:w-[671px]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Stay informed and inspired{" "}
          </p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Blog
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            Welcome to our blog with insights and inspiration about RPA and AI.
            You will find expert articles, success stories, and the latest
            trends that keep you ahead in automation.
          </p>
        </div>
      </MainHero>
      <div className="bg-[#E7F9E9]">
        <div className="relative bg-white mx-5 lg:mx-20 z-50 mt-[-50px] rounded-[20px]">
          <div className="flex gap-3 py-10 lg:py-20 px-5 lg:px-20 overflow-x-auto">
            <Button>All Posts</Button>
            <Button>Misc</Button>
            <Button>Misc</Button>
            <Button>Misc</Button>
            <Button>Misc</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-10 pb-32">
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
        </div>
      </div>
    </div>
  );
};

export default Blog;
