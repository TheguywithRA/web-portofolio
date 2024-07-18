import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import Foto from "../assets/rapa.png";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id='main'>
     <div className='flex justify-center items-center h-screen'>
        <img
          src={Foto}
          className="h-auto max-h-full mb-96 pr-96"
          alt="Profile"
        />
      </div>
      <div className='w-full h-screen absolute top-0 left-0/50'>
        <div className='max-w-[700px] m-auto flex flex-col justify-center lg:items-start h-full py-10'>
          <h1 className='sm:text-5xl text-4xl front-bold text-gray-50 mt-80'>
           Hello Everyone 
          </h1>
          <h2 className='sm:text-5xl text-4xl front-bold text-gray-50'>I'm Rava Akmal Abellon</h2>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-300'>
            I'm a
            <TypeAnimation
              sequence={[
                'BackEnd Developer', 
                2000, 
                'Student of SMKN26', 
                2000, 
                'Indivara Internship Trainee', 
                2000, 
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px', color: 'red' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full text-gray-300'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
