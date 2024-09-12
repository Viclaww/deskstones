import HeroOne from "./HeroOne";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-custom-gradient w-full px-5 lg:px-20">
      <Navbar />
      <HeroOne />
    </div>
  );
};

export default Hero;
