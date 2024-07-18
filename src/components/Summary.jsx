import React from 'react';

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
    </div>
  );
};

export default Summary;
