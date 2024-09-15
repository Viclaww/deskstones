import MainHero from "../components/MainHero";
import Image1 from "../../public/assets/Rectangle 67.svg";
import Image2 from "../../public/assets/Rectangle 56.svg";
import Image3 from "../../public/assets/Rectangle 57.svg";
import Image4 from "../../public/assets/Rectangle 58.svg";
import Image5 from "../../public/assets/Rectangle 59.svg";
import Image6 from "../../public/assets/Rectangle 60.svg";
import Image7 from "../../public/assets/Rectangle 61.svg";
import Image8 from "../../public/assets/Rectangle 62.svg";
import Image9 from "../../public/assets/Rectangle 63.svg";
import Image10 from "../../public/assets/Rectangle 64.svg";
import Image11 from "../../public/assets/Rectangle 65.svg";
import Image12 from "../../public/assets/Rectangle 66.svg";

const Media = () => {
  return (
    <div>
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Deskstones Events
          </h1>
        </div>
      </MainHero>
      <div className="px-5 lg:p-20">
        <div className="flex flex-col lg:flex-row gap-3 justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-[40px} text-[50px] font-bold ">Kids Can Code Event</h1>
            <p className="text-[24px]">
              In Deskstones we believe everyone can be great if given the
              opportunity we get our inspiration from our co-founders started
              with nothing but were given an opportunity to learn by selfless
              individuals in the society.
            </p>
          </div>
          <div>
            <p>Surelere Lagos</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-10 ">
          <img src={Image1} alt="" className="w-full" />
          <img src={Image2} alt="" className="w-full" />
          <img src={Image3} alt="" className="w-full" />
          <img src={Image4} alt="" className="w-full" />
          <img src={Image5} alt="" className="w-full"/>
          <img src={Image6} alt="" className="w-full"/>
          <img src={Image7} alt="" className="w-full"/>
          <img src={Image8} alt="" className="w-full"/>
          <img src={Image9} alt="" className="w-full"/>
          <img src={Image10} alt="" className="w-full"/>
          <img src={Image11} alt="" className="w-full"/>
          <img src={Image12} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Media;
