import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamImage1 from "../../public/assets/team1.svg";
import teamImage2 from "../../public/assets/team2.svg";
import teamImage3 from "../../public/assets/team3.svg";
import mailicon from "../../public/assets/mail.svg";
import teamyoutube from "../../public/assets/teamyoutube.svg";
import teamlinkedin from "../../public/assets/teamlinkedin.svg";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, 
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Mentor = () => {
  const Mentors = [
    {
      id: 1,
      name: "Anders Jensen",
      title: "Founder and Youtuber",
      description:
        "We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.",
      imgSrc: teamImage1, 
      email: "mailto:anders@example.com",
      linkedin: "https://linkedin.com/in/anders",
      youtube: "https://youtube.com/yo/anders",
    },
    {
      id: 2,
      name: "Anders Jensen",
      title: "Founder and Youtuber",
      description:
        "We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.",
      imgSrc: teamImage2,
      email: "mailto:anders@example.com",
      linkedin: "https://linkedin.com/in/anders",
      youtube: "https://youtube.com/yo/anders",
    },
    {
      id: 3,
      name: "Anders Jensen",
      title: "Founder and Youtuber",
      description:
        "We always dreamed of creating something unique together. Sure, we had amazing jobs, but we knew deep down we wanted to make a bigger impact. We wanted to inspire, teach, and enjoy every moment of our lives.",
      imgSrc: teamImage3,
      email: "mailto:anders@example.com",
      linkedin: "https://linkedin.com/in/anders",
      youtube: "https://youtube.com/yo/anders",
    },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">Mentors</h2>
        
       
        <div className="block md:hidden">
          <Slider {...settings}>
            {Mentors.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg p-5">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#2D2D2D]">{member.name}</h3>
                  <p className="text-[#10CC6F] text-sm font-semibold">{member.title}</p>
                  <p className="text-[#222] text-[12px] mt-3">{member.description}</p>
                  <div className="flex space-x-3 mt-5">
                    <a href={member.email} className="text-[#6B6B6B]">
                      <img src={mailicon} alt="Mail Icon" />
                    </a>
                    <a href={member.linkedin} className="text-[#6B6B6B]">
                      <img src={teamlinkedin} alt="LinkedIn Icon" />
                    </a>
                    <a href={member.youtube} className="text-[#6B6B6B]">
                      <img src={teamyoutube} alt="YouTube Icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Mentors.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-5">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#2D2D2D]">{member.name}</h3>
                <p className="text-[#10CC6F] text-sm font-semibold">{member.title}</p>
                <p className="text-[#222] text-[12px] mt-3">{member.description}</p>
                <div className="flex space-x-3 mt-5">
                  <a href={member.email} className="text-[#6B6B6B]">
                    <img src={mailicon} alt="Mail Icon" />
                  </a>
                  <a href={member.linkedin} className="text-[#6B6B6B]">
                    <img src={teamlinkedin} alt="LinkedIn Icon" />
                  </a>
                  <a href={member.youtube} className="text-[#6B6B6B]">
                    <img src={teamyoutube} alt="YouTube Icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
