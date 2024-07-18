import ProjectItem from './AchiveItem';
import React from 'react';
import beachesImg from '../assets/beaches.jpg';
import bestEatsImg from '../assets/bestEats.jpg';
import driveImg from '../assets/drive.jpg';
import propertyImg from '../assets/property.jpg';

const Summary = () => {
  return (
    <div id='summary' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-red-600'>
        Summary
      </h1>
      <p className='text-center py-8 text-gray-200'>
      Saya adalah Java Developer berpengalaman dalam pengembangan
       aplikasi web menggunakan Spring Boot dan ZK framework. 
       Saya telah mengerjakan proyek-proyek seperti sistem ATM,
        manajemen pelanggan, dan proyek film web Radix. 
        Keahlian saya meliputi pembuatan REST API, autentikasi dengan 
        Spring Security, dan pengujian dengan mocking.
      </p>
      {/* <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={driveImg} title='Drive App' />
        <ProjectItem img={propertyImg} title='Property App' />
        <ProjectItem img={beachesImg} title='Beaches App' />
        <ProjectItem img={bestEatsImg} title='BestEats App' />
      </div> */}
    </div>
  );
};

export default Summary;
