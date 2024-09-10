import youtube from "../../public/assets/mdi_youtube.svg";
import youtube2 from "../../public/assets/Rectangle 45.svg";
const HeroOne = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between text-[#ffffff] py-5 lg:py-20">
        <div className="">
          <div className="flex gap-3 items-center">
            <div>
              <img src={youtube}/>
            </div>
            <div>
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold">Your Expert from Youtube</p>
            </div>
          </div>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold">Inspiring People <br />for the Future</h1>
          <p className="text-[1.375rem">
            is the fastest growing digital learnin platform, <br className="hidden lg:block" /> providing learning
            contents for all.
          </p>
          <div className="py-10 flex gap-3">
            <button className="bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent ">All Programs</button>
            <button className="border border-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] ">See More</button>
          </div>
        </div>
        <div>
           <div className="bg-black w-full lg:w-[28.9375rem] h-[20.75rem] rounded-[1.25rem] flex items-center justify-center">
            <img src={youtube2} />
           </div>

        </div>
      </div>
    </div>
  );
};

export default HeroOne;
