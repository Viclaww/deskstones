import MainHero from "../components/MainHero";

const About = () => {
  return (
    <div className="">
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">Who are we?</p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Deskstones
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            Stine and Anders founded andersjensenorg. Our mission is clear: Make
            RPA and AI training straightforward and fun for everyone, from pros
            to everyday users. With hands-on, practical, easy-to-follow courses
            in Microsoft Copilot, Microsoft Power Automate, and OpenAI ChatGPT,
            we make complex topics something anyone can get excited about
          </p>
        </div>
      </MainHero>
    </div>
  );
};

export default About;
