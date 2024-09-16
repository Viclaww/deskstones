import Consultation from "../components/Consultation";
import HeroFive from "../components/HeroFive";
import HeroSevenn from "../../public/assets/Frame 71.svg";
import HeroSix from "../components/HeroSix";
import MainHero from "../components/MainHero";

const Programs = () => {
  return (
    <div>
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            For Kids and Adult
          </p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Inspiring People for the Future
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            Join our hands-on RPA and AI courses in Microsoft Copilot, Microsoft
            Power Automate, and OpenAI ChatGPT. Perfect for both individuals and
            companies. Benefit from our successful YouTube teaching style to
            ensure personal career and team growth.
          </p>
        </div>
      </MainHero>
      <HeroFive />
      <HeroSix />
      <Consultation />
      <div className="bg-[#E7F9E9] p-5 lg:p-20">
        <div>
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">Trusted By</p>
          <h1 className="text-[35px] lg:text-[50px] font-extrabold">
            Customers and partners
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center  gap-5 lg:justify-between pt-10">
            <div>
              <img src={HeroSevenn} alt="" />
            </div>
            <div>
              <img src={HeroSevenn} alt="" />
            </div>
            <div>
              <img src={HeroSevenn} alt="" />
            </div>
            <div>
              <img src={HeroSevenn} alt="" />
            </div>
            <div>
              <img src={HeroSevenn} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 py-14">
          <button className="bg-[#10CC6F] rounded-[0.3125rem] text-white text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent hover:text-[#10CC6F]">
            Contact Us
          </button>
          <button className="border border-[#10CC6F] text-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] hover:text-white">
            Customized training and consulting
          </button>
        </div>
      </div>

      <div className="bg-white px-5 py-12 lg:px-20 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[50%]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold pt-10">
              How can we help?
            </p>
            <h1 className="text-[30px] lg:text-[40px] font-extrabold">
              Questions, feedback or <br className="hidden lg:block" />
              bookings
            </h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-[#222] pt-5">
              For more questions, details, and booking, contact Stine at
              info@andersjensen.org or fill out the contact form. We respond
              within 24 hours and are happy to arrange a meeting or chat to
              discuss how we can meet your specific needs.
            </p>
          </div>
          <div className="">
            <form className="mt-4">
              <div className="flex gap-4 flex-col lg:flex-row">
                <input
                  type="text"
                  className="w-full lg:w-[238px] h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="bg-[#F1F1F1]  lg:w-[238px] h-[60px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                  placeholder="Last Name"
                />
              </div>
              <div className="pt-4 flex gap-4 flex-col lg:flex-row">
                <input
                  type="email"
                  className="bg-[#F1F1F1] lg:w-[238px] h-[60px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="bg-[#F1F1F1] lg:w-[238px] h-[60px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                  placeholder="Phone"
                />
              </div>
              <div className="relative pt-2">
                <select className="bg-[#F1F1F1] w-full h-[60px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none appearance-none">
                  <option value="" disabled selected>
                    Select a Program
                  </option>
                  <option value="program1">Program 1</option>
                  <option value="program2">Program 2</option>
                  <option value="program3">Program 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-[#6B6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              <textarea
                name=""
                id=""
                className="bg-[#F1F1F1] h-[200px] w-full mt-5 outline-none px-4 py-2"
              ></textarea>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="privacy-policy" className="mr-2" />
                <label htmlFor="privacy-policy">
                  I agree to the{" "}
                  <span className="underline">Privacy Policy.</span>
                </label>
              </div>

              <div className="mt-4">
                <button className="bg-[#10CC6F] px-[20px] py-[10px] rounded-[5px] text-white font-bold text-[14px]">
                  Send a message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
