import React from 'react'
import Link from 'next/link';

export interface HamburgerMenuState {
  open: boolean;
  setOpen: () => void;
  isHome?: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuState> = ({ open, setOpen, isHome }) => {
  return (
    <div className={`fixed w-full h-full z-40 bg-[#ECEBEC] p-6 animate-fade-right ${!isHome ? "left-0": ""}`}>
      <ul className='flex flex-col gap-5'>
        <li className='w-full hover:bg-[#167940] hover:text-white p-5 rounded-xl'><Link onClick={setOpen} href="/about" className='text-2xl font-rufina font-bold'>About</Link></li>
        <li className='w-full hover:bg-[#167940] hover:text-white p-5 rounded-xl'><Link onClick={setOpen} href="/categories" className='text-2xl font-rufina font-bold'>Our Menus</Link></li>
        <li className='w-full hover:bg-[#167940] hover:text-white p-5 rounded-xl'><Link onClick={setOpen} href="/gallery" className='text-2xl font-rufina font-bold'>Gallery</Link></li>
        <li className='w-full hover:bg-[#167940] hover:text-white p-5 rounded-xl'><Link onClick={setOpen} href="/contact" className='text-2xl font-rufina font-bold'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default HamburgerMenu