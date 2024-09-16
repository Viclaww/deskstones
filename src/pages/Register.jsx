import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div className="bg-custom-gradient w-full px-5 lg:px-20">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:py-32 pb-[300px]">
        <div className=" text-[60px] text-white font-bold">
          <h2>Become a <br />Deskstones <br /> Mentor</h2>
        </div>
        <form action="" className="bg-white rounded-[20px] px-16 py-20 lg:w-[60%] ">
            
            <div className="flex gap-4 flex-col  text-[#6B6B6B]">
                <p>First Name</p>
              <input
                type="text"
                className="w-full  h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
               
              />
              <p>Last Name</p>
              <input
                type="text"
                className="bg-[#F1F1F1]  h-[60px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
              />
              <p>Email</p>
               <input
                type="email"
                className="w-full  h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
              />
               <p>Whatsapp Number</p>
               <input
                type="text"
                className="w-full  h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
               
              />
              <p>Role</p>
               <input
                type="text"
                className="w-full  h-[60px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
              />
               <button className="w-full bg-[#10CC6F] px-5 py-3 rounded-[5px] text-white">Register</button>
            </div>
           
        </form>
      </div>
    </div>
  );
};

export default Register;
