import React from 'react';
import Navbar from './Navbar.jsx'; // Adjust the import path as needed

const MainHero = ({ children }) => {
  return (
    <div className="relative bg-hero-gradient min-h-screen flex flex-col px-5 lg:px-20 ">
      <Navbar /> 
      <div className="flex-grow flex flex-col w-full  text-white">
        {children}
      </div>
    </div>
  );
};

export default MainHero;
