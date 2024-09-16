import MainHero from "../components/MainHero";
import consultingImage from "../../public/assets/consulting.svg";
import Bookings from "../components/Bookings";

const Consulting = () => {
  return (
    <div>
      <MainHero>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-20 py-10 lg:py-20">
          <div className=" w-full lg:w-[671px]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold">
              Tailored to your needs
            </p>
            <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
              Customized training and consulting
            </h1>
            <p className="text-[1rem] lg:text-[22px] text-white pt-5">
              We offer 1:1 personal training and consulting, mirroring our
              YouTube style, where we guide you step-by-step through each
              solution. Our proven track record ensures we can tackle any topic.
              Available in bundles of minimum 10 hours at €2,025 / DKK 15.000
            </p>
          </div>
          <div>
            <img src={consultingImage} alt="" />
          </div>
        </div>
      </MainHero>
      <Bookings />
      <div className="bg-[#E7F9E9] lg:py-32 py-20 px-5 lg:px-20 text-[20px] lg:text-[24px]">
        <h1 className="text-[40px] lg:text-[60px] font-bold">Terms And Conditions</h1>
        <p>
          The following special terms and conditions apply to our training and
          consulting package:
        </p>
        <div className="px-10 flex flex-col gap-3 pt-5">
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        <p>
          Price: Our package is only available in bundles of a minimum of 10
          hours at €2,025 / DKK 15.000 (+ VAT if applicable).
        </p>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
