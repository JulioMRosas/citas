import React from 'react';
import Form from '../../components/Form';
import { Lato } from 'next/font/google';
const lato=Lato({ subsets: ['latin'], weight: '300' });

const Appointments = () => {
  return (
    <main className={`${lato.className} bg-[#e0daa2] w-full`}>
      <h1 className='font-bold text-center mt-2'>Agendar Citas</h1>
      <section className='m-5'>
        <Form />
      </section>
    </main>
  )
}

export default Appointments;