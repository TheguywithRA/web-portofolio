import Eduitem from './Eduitem';
import React from 'react';

const data = [
  {
    year: 2021,
    title: 'SMKN 26',
    duration: '4 years',
  },
  {
    year: 2018,
    title: 'SMP',
    duration: '3 years',
  },
  {
    year: 2012,
    title: 'SD',
    duration: '6 years',
  },
];
const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-52 '>
      <h1 className='text-4xl font-semibold text-center text-red-600 mb-12'>Education</h1>
      {data.map((item, idx) => (
        <Eduitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

export default Education;
