import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  return (
    <nav className='bg-[#470d0d] p-4 w-min-[400] w-[20%]'>
        <ul className='text-white space-y-3 mt-3'>
            <li className='space-x-2 flex'>
              <div className='tw-translate-y:1'>
                <HomeIcon />
              </div>
              <div>
                <Link href={'./'}>Inicio</Link>
              </div>
            </li>
            <li>
              <Link href={'/appointments'}>Agendar Cita</Link>
            </li>
            <li>
              <Link href={'/about'}>Acerca De</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar