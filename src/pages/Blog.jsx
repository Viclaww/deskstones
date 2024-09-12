import MainHero from "../components/MainHero";

const Blog = () => {
  return (
    <div className="">
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
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
    </div>
  );
};

export default Blog;
