import StoryImage from "../../public/assets/story.svg";

const Story = () => {
  return (
    <div className="bg-[#55C595] px-5 lg:px-20 flex flex-col gap-5 lg:flex-row justify-between items-center py-10 lg:py-20">
      <div className="w-full lg:w-1/2 ">
        <p className="text-white text-[1.5rem] font-bold">About Us</p>
        <h1 className="text-[35px] lg:text-[50px] text-black font-extrabold">
          Our Story
        </h1>
        <div className="flex flex-col gap-3">
        <p className="text-[1rem] lg:text-[1.375rem] pt-5">
          Deskstones was born out of the spirit of selflessness and willingness
          to create an ecosystem with evenly distributed knowledge.
        </p>
        <p className="text-[1rem] lg:text-[1.375rem]">
          In Deskstones we believe everyone can be great if given the
          opportunity we get our inspiration from our co-founders started with
          nothing but were given an opportunity to learn by selfless individuals
          in the society.
        </p>
        </div>
      </div>
      <div>
        <img src={StoryImage} alt="" />
      </div>
    </div>
  );
};

export default Story;
