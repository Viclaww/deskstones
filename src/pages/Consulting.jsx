import MainHero from "../components/MainHero";

const Consulting = () => {
  return (
    <div>
      <MainHero>
        <div className="py-10 lg:py-20 w-full lg:w-[671px]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">
            Tailored to your needs
          </p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Customized training and consulting
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            We offer 1:1 personal training and consulting, mirroring our YouTube
            style, where we guide you step-by-step through each solution. Our
            proven track record ensures we can tackle any topic. Available in
            bundles of minimum 10 hours at €2,025 / DKK 15.000
          </p>
        </div>
      </MainHero>
    </div>
  );
};

export default Consulting;
