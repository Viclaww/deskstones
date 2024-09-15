import Bookings from "../components/Bookings";
import MainHero from "../components/MainHero";

const Contact = () => {
  return (
    <div>
      <MainHero>
        <div className="py-20">
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            How can we help?
          </h1>
        </div>
      </MainHero>
      <Bookings />
    </div>
  );
};

export default Contact;
