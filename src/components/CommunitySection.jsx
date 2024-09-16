import CommunityCard from "./CommunityCard";
import cyber from "../../public/assets/cyber.svg";
import chatgpt from "../../public/assets/chatgpt.svg";
import chatgpt2 from "../../public/assets/rpa.svg";

const CommunitySection = () => {
  const communities = [
    {
      title: "Cyber Security",
      description:
        "Join 13,000+ DBA and AI enthusiasts that network and help each other.",
      linkText: "Automation on Discord",
      imgSrc: cyber,
      link: "#",
    },
    {
      title: "ChatGPT",
      description: "News and best practices about ChatGPT.",
      linkText: "LinkedIn Group",
      imgSrc: chatgpt,
      link: "#",
    },
    {
      title: "ChatGPT",
      description: "News and best practices about ChatGPT.",
      linkText: "LinkedIn Group",
      imgSrc: chatgpt2,
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-5 lg:px-20">
      <p className="text-[#10CC6F] font-bold text-[24px]  mb-5">
        Free support, problem-solving, and networking
      </p>
      <h2 className="font-extrabold text-[40px]">Online Communities</h2>
      <p className="text-black text-[18px] py-5">
        Join our vibrant online communities to connect with +15,000 members for{" "}
        <br />
        ongoing support, problem-solving, and networking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            title={community.title}
            description={community.description}
            linkText={community.linkText}
            imgSrc={community.imgSrc}
            link={community.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
