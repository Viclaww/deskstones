import Blog from "./Blog";
import next from "../../public/assets/next.svg";

const HeroEight = () => {
    return ( 
        <div className="bg-[#E7F9E9] p-5  lg:p-20">
            <div>
            <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Stay informed and inspired
            </p>
            <h1 className="text-[35px] lg:text-[50px] font-extrabold">Blog</h1>
            <div className="flex flex-col lg:flex-row gap-5 pt-10">
               <Blog /> 
               <Blog />
               <Blog />
            </div>
            <div className="flex gap-2 items-center pt-5 text-[#10CC6F]">
            <p className="lg:text-[24px]">All Blogs</p>
            <img src={next}/>
            </div>
            </div>
        </div>
     );
}
 
export default HeroEight;