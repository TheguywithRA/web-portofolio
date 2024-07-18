import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineTrophy,
} from 'react-icons/ai';
import React, { useState } from 'react';

import Achivement from './Achivement';
import { BsPerson } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-[99] bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 flex justify-center items-center py-8 text-gray-300 font-semibold">
          <AiOutlineMenu onClick={handleNav} className="md:hidden cursor-pointer" size={40} />
          <div className="hidden md:flex space-x-32">
            <a href='#main' className='flex items-center cursor-pointer hover:text-red-600 active:text-red-500 ease-in duration-200'>
              <AiOutlineHome className="text-red-600" size={20} />
              <span className='pl-2'>Home</span> 
            </a>
            <a href='#education' className='flex items-center cursor-pointer hover:text-red-600 active:text-red-500 ease-in duration-200'>
              <FaGraduationCap className="text-red-600" size={20} />
              <span className='ml-2'>Education</span>
            </a>
            <a href='#achivement' className='flex items-center cursor-pointer hover:text-red-600 active:text-red-500 ease-in duration-200'>
            <AiOutlineTrophy className="text-red-600" size={20} />
              <span className='pl-2'>Achivement</span>
            </a>
            <a href='#summary' className='flex items-center cursor-pointer hover:text-red-600 active:text-red-500 ease-in duration-200'>
              <BsPerson className="text-red-600" size={20} />
              <span className='pl-2'>Summary</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
