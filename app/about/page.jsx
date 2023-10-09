import React from 'react';
import { Lato } from 'next/font/google';
const lato=Lato({ subsets: ['latin'], weight: '300' });

const About = () => {
  return (
    <div className={`${lato.className} bg-[#e0daa2] w-full`}>
      <h1 className='font-bold text-center mt-2'>Acerca De</h1>
    </div>
  )
}

export default About;