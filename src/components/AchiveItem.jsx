import React from 'react';

const Achiveitem = ({ img, title, desc }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl cursor-pointer group transition-transform duration-300 transform hover:scale-105 hover:opacity-90 bg-gradient-to-r from-gray-600 to-red-500'>
      <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
        <h3 className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white'>{desc}</p>
        <a href='/'>
        </a>
      </div>
    </div>
  );
};

export default Achiveitem;