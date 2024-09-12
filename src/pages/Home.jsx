import "../App.css"
import Bookings from "../components/Bookings.jsx";
import Consultation from "../components/Consultation.jsx";
import Editor from "../components/Editor.jsx";
import Footer from "../../src/components/Footer.jsx";
import Hero from "../../src/components/Hero.jsx";
import HeroEight from "../../src/components/HeroEight.jsx";
import HeroFive from "../../src/components/HeroFive.jsx";
import HeroFour from "../../src/components/HeroFour.jsx";
import HeroSeven from "../../src/components/HeroSeven.jsx";
import HeroSix from "../../src/components/HeroSix.jsx";
import HeroThree from "../../src/components/HeroThree.jsx";
import HeroTwo from "../../src/components/HeroTwo.jsx";
import Mission from "../../src/components/Mission.jsx";
import Navbar from "../../src/components/Navbar.jsx";
import Vision from "../../src/components/Vision.jsx";

function Home() {
  return (
    <>
      <Hero/>
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix /> 
      <HeroSeven />
      <HeroEight />
     
      

           {/* <Editor /> */}
    </>
  );
}

export default Home;
