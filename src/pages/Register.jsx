import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div className="bg-custom-gradient w-full px-5 md:px-10 lg:px-20">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-16 lg:py-32 ">
        {/* Headline Section */}
        <div className="text-[40px] md:text-[50px] lg:text-[60px] text-white font-bold text-center lg:text-left">
          <h2>
            Become a <br /> Deskstones <br /> Mentor
          </h2>
        </div>

        {/* Form Section */}
        <form
          action=""
          className="bg-white rounded-[20px] px-8 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 lg:w-[60%] w-full"
        >
          <div className="flex gap-4 flex-col text-[#6B6B6B]">
            <p>First Name</p>
            <input
              type="text"
              className="w-full h-[50px] md:h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
            />

            <p>Last Name</p>
            <input
              type="text"
              className="w-full h-[50px] md:h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
            />

            <p>Email</p>
            <input
              type="email"
              className="w-full h-[50px] md:h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
            />

            <p>WhatsApp Number</p>
            <input
              type="text"
              className="w-full h-[50px] md:h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
            />

            <p>Role</p>
            <input
              type="text"
              className="w-full h-[50px] md:h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
            />

            <button className="w-full bg-[#10CC6F] px-5 py-3 rounded-[5px] text-white mt-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
