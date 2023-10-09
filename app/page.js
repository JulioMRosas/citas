import React from 'react';
import { Lato } from 'next/font/google';
const lato=Lato({ subsets: ['latin'], weight: '300' });

const HomePage = () => {
  return (
    <main className={`${lato.className} bg-[#e0daa2] w-full`}>
      <h1 className='font-bold text-center mt-2'>Citas Médicas</h1>
    </main>
  )
}

export default HomePage;
