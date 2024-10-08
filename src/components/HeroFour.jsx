import HeroFourr from "../../public/assets/Rectangle 13 (1).svg";
const HeroFour = () => {
    return (
      <div className="bg-[#E7F9E9] px-5 py-12 lg:px-20 lg:py-32">
        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <div className="">
            <img src={HeroFourr} />
          </div>
          <div className="w-full lg:w-[50%]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold pt-10 lg:pt-0">
              Your Expert from Youtube
            </p>
            <h1 className="text-[35px] lg:text-[50px] font-extrabold">RPA and AI courses <br className="hidden lg:block" />for everyone</h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-[#222] pt-5">
              Stine and Anders founded andersjensenorg. Our mission is clear: Make
              RPA and AI training straightforward and fun for everyone, from pros
              to everyday users. With hands-on, practical, easy-to-follow courses
              in Microsoft Copilot, Microsoft Power Automate, and OpenAI ChatGPT,
              we make complex topics something anyone can get excited about.
            </p>
            <div className="pt-10 flex gap-3 ">
              <button className="bg-[#10CC6F] text-white rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC67] hover:bg-transparent hover:text-[#10CC6F]">All Programs</button>
              <button className="border border-[#10CC6F] rounded-[0.3125rem] text-[#10CC6F] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] hover:text-white">See More</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroFour;
  