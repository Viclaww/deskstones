import MainHero from "../components/MainHero";
import aboutImage from "../../public/assets/Rectangle 35.svg";
import Story from "../components/Story";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import Team from "../components/Team";
import CommunitySection from "../components/CommunitySection.Jsx";


const About = () => {
  return (
    <div className="">
      <MainHero>
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 lg:py-20">
          <div className="w-full lg:w-[671px]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold">
              Who are we?
            </p>
            <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
              Deskstones
            </h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
              Stine and Anders founded andersjensenorg. Our mission is clear:
              Make RPA and AI training straightforward and fun for everyone,
              from pros to everyday users. With hands-on, practical,
              easy-to-follow courses in Microsoft Copilot, Microsoft Power
              Automate, and OpenAI ChatGPT, we make complex topics something
              anyone can get excited about
            </p>
            <div className="flex gap-3 py-14 flex-col lg:flex-row ">
              <button className="bg-[#10CC6F] rounded-[0.3125rem] text-white text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent hover:text-[#10CC6F] w-fit">
                Contact Us
              </button>
              <button className="border border-[#10CC6F] text-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] w-fit hover:text-white">
                Customized training and consulting
              </button>
            </div>
          </div>
          <div>
            <img src={aboutImage} alt="" />
          </div>
        </div>
      </MainHero>
      <Story />
      <div className=" bg-[#E7F9E9] px-5 lg:px-20 lg:py-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between  gap-10">
          <Vision />
          <Mission />
        </div>
        <Team />
        
      </div>
     <CommunitySection />
    </div>
  );
};

export default About;
