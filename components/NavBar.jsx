"use client";
import React from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
  <nav className='bg-[#470d0d]'>
    {/* Normal menu */}
    <Popover className='hidden sm:block p-2'>
       <ul className='text-white space-y-3 mt-3 w-[30%]'>
          <li className='flex space-x-2'>
            <div className='tw-translate-y:1'>
              <Link href={'./'}><HomeIcon/></Link>
            </div>
            <div>
              <Link href={'./'}>Inicio</Link>
            </div>
          </li>
          <li className='flex space-x-2'>
            <div className='tw-translate-y:1'>
              <Link href={'/appointments'}><MenuBookIcon/></Link>
            </div>
            <div>
              <Link href={'/appointments'}>Agendar Cita</Link>
            </div>
          </li>
          <li className='flex space-x-2'>
            <div className='tw-translate-y:1'>
              <Link href={'/about'}><HelpIcon/></Link>
            </div>
            <div>
              <Link href={'/about'}>Acerca De</Link>
            </div>
          </li>
      </ul>
    </Popover>

    {/* Responsive menu */}
    <Popover className='sm:hidden p-2'>
      <Popover.Button>
        <MenuIcon className='text-white'/>
      </Popover.Button>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Popover.Panel className='absolute bg-[#e0daa2] p-4 rounded-md w-2/4 border-2 border-[#333]'>
          <ul className='space-y-5'>
            <li>
              <Link href={'./'}><HomeIcon/>Inicio</Link>
            </li>
            <li>
              <Link href={'/appointments'}><MenuBookIcon/>Agendar Cita</Link>
            </li>
            <li>
              <Link href={'/about'}><HelpIcon/>Acerca De</Link>
            </li>
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  </nav>
  )
}

export default NavBar;