import Achiveitem from './AchiveItem'
import React from 'react';
import certi1Img from '../assets/certi1.jpg';
import certi2Img from '../assets/certi2.jpg';
import lomba1Img from '../assets/lomba1.jpg';
import lomba2Img from '../assets/lomba2.jpg';

const Achivement = () => {
  return (
    <div id='achivement' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-red-600 mb-12'>
        My Achivement
      </h1>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Achiveitem img={lomba1Img} title='The Winner of Student Science Research' desc='Jakarta Smart City' className='font-semibold' />
        <Achiveitem img={lomba2Img} title='The Winner of Cyber Univ Vlog Competition' desc='Cyber University' className='font-semibold' />
        <Achiveitem img={certi1Img} title='Microsoft Ready4Security Training Certification' desc='Microsoft' className='font-semibold'/>
        <Achiveitem img={certi2Img} title='AWS Cloud Practitioner Training Certification' desc='AWS' className='font-semibold'/>
      </div>
    </div>
  );
};

export default Achivement;
