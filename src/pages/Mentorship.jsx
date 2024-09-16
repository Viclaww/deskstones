import MainHero from "../components/MainHero";
import mentorImage from "../../public/assets/Mentor.svg"
import Mentor from "../components/MentorCard";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import CommunitySection from "../components/CommunitySection.Jsx";

const Mentorsship = () => {
  return (
    <div>
      <MainHero>
        <div className="flex  items-center gap-5 lg:gap-20 flex-col lg:flex-row">
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Become a Deskstones Mentor
          </p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Customized training and consulting
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            Stine and Anders founded andersjensenorg. Our mission is clear: Make
            RPA and AI training straightforward and fun for everyone, from pros
            to everyday users. With hands-on, practical, easy-to-follow courses
            in Microsoft Copilot, Microsoft Power Automate, and OpenAI ChatGPT,
            we make complex topics something anyone can get excited about
          </p>
        </div>
        <div>
            <img src={mentorImage} alt="" />
        </div>
        </div>
      </MainHero>
      <div className=" bg-[#E7F9E9] px-5 lg:px-20 lg:py-20 py-10">
        <div className="flex flex-col lg:flex-row justify-between  gap-10">
          <Vision />
          <Mission />
        </div>
        <Mentor />
      </div>
      <CommunitySection />
    </div>
  );
};

export default Mentorsship;
