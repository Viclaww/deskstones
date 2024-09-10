import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-10 text-white text-[14px] font-bold">
        <div>
          <img src="/assets/Desktone logo 1.svg" alt="Desktone Logo" />
        </div>
        <div className="hidden lg:flex gap-10 ">
          <a href="#">Programs</a>
          <a href="#">Consulting</a>
          <a href="#">Mentors</a>
          <a href="#">Blog</a>
          <a href="#">Media</a>
          <a href="#">About</a>
        </div>
        <button className="hidden lg:block bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent">
          Contact
        </button>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-black text-white flex flex-col items-center gap-5 py-5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-5 right-5 text-white"
        >
          <FaTimes size={24} />
        </button>
        
          <a href="#" onClick={toggleMenu} className='pt-20'>
          Programs
        </a>
        <a href="#" onClick={toggleMenu}>
          Consulting
        </a>
        <a href="#" onClick={toggleMenu}>
          Mentors
        </a>
        <a href="#" onClick={toggleMenu}>
          Blog
        </a>
        <a href="#" onClick={toggleMenu}>
          Media
        </a>
        <a href="#" onClick={toggleMenu}>
          About
        </a>
        
        <button
          onClick={toggleMenu}
          className="bg-[#10CC6F] rounded-[0.3125rem] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:border border-[#10CC6F] hover:bg-transparent"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
