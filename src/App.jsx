import "./App.css";
import Bookings from "./components/Bookings";
import Consultation from "./components/Consultation";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroEight from "./components/HeroEight";
import HeroFive from "./components/HeroFive";
import HeroFour from "./components/HeroFour";
import HeroSeven from "./components/HeroSeven";
import HeroSix from "./components/HeroSix";
import HeroThree from "./components/HeroThree";
import HeroTwo from "./components/HeroTwo";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";

function App() {
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
      <Footer />
      <Consultation />
      <Bookings />
      <Vision />
      <Mission />

           {/* <Editor /> */}
    </>
  );
}

export default App;
