import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const NavBar = () => {
  return (
    <nav className='bg-[#470d0d] p-4 w-[15%] w-min-[400]'>
        <ul className='text-white space-y-3 mt-3'>
            <li className='flex space-x-2'>
              <div className='tw-translate-y:1'>
                <Link href={'./'}><HomeIcon /></Link>
              </div>
              <div className='text-[#470d0d] md:text-white'>
                <Link href={'./'}>Inicio</Link>
              </div>
            </li>
            <li className='flex space-x-2'>
              <div className='tw-translate-y:1'>
                <Link href={'/appointments'}><MenuBookIcon /></Link>
              </div>
              <div className='text-[#470d0d] md:text-white'>
                <Link href={'/appointments'}>Agendar Cita</Link>
              </div>
            </li>
            <li className='flex space-x-2'>
              <div className='tw-translate-y:1'>
                <Link href={'/about'}><HelpCenterIcon /></Link>
              </div>
              <div className='text-[#470d0d] md:text-white'>
                <Link href={'/about'}>Acerca De</Link>
              </div>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;