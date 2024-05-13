import React from 'react'
import Link from 'next/link';
import { HamburgerMenuState } from './HamburgerMenu'

export interface NavbarMenu {
    open: boolean;
    setOpen: () => void;
    isHome: boolean
}

const Navbar: React.FC<NavbarMenu> = ({ open, setOpen, isHome }) => {
    return (
        <div className={`${isHome ? 'bg-[#ECEBEC] p-5 sm:px-16 xl:px-56' : 'bg-transparent px-6 sm:px-10'} flex justify-between items-center `}>
            <div className='flex'>
                <a href="/">
                    <img
                        src={isHome ? "logoHorizontal.png" : "verticalLogo.png"}
                        alt="Logo"
                        loading='lazy'
                        className={`${isHome ? "w-44" : "w-20"}`}
                    />
                </a>
                <button className='sm:hidden' onClick={setOpen}>
                    <span className={`material-symbols-outlined ${isHome ? "text-[#4D4D4D]" : "text-white"}`}>menu</span>
                </button>
            </div>
            <div className='hidden sm:block'>
                <ul className='flex gap-5'>
                    <li className={`cursor-pointer font-rufina rounded-full px-5 py-2 ${isHome ? "" : "text-white"} font-bold hover:bg-[#00461E] hover:text-white  hover:shadow-xl`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`cursor-pointer font-rufina rounded-full px-5 py-2 ${isHome ? "" : "text-white"} font-bold hover:bg-[#00461E] hover:text-white  hover:shadow-xl`}>
                        <Link href="/categories">Our Menus</Link>
                    </li>
                    <li className={`cursor-pointer font-rufina rounded-full px-5 py-2 ${isHome ? "" : "text-white"} font-bold hover:bg-[#00461E] hover:text-white  hover:shadow-xl`}>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className={`cursor-pointer font-rufina rounded-full px-5 py-2 ${isHome ? "" : "text-white"} font-bold hover:bg-[#00461E] hover:text-white  hover:shadow-xl`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <a
                href="https://www.google.com/maps/place/Costa+Verde+B.B.Q.+%26+Portuguese+Grill+House/@43.7271959,-79.4824978,17z/data=!3m1!4b1!4m6!3m5!1s0x882b319d2e3290eb:0x3ae0a36daf5ca1ba!8m2!3d43.7271959!4d-79.4824978!16s%2Fg%2F1hc1t8d5h?authuser=0&hl=es-419&entry=ttu"
                target="_blank"
            >
                <button className={`border-2 ${isHome ? 'border-[#4D4D4D] text-black' : 'text-white'}   w-28 h-12  xl:w-32 font-rufina`}>
                    Reservations
                </button>
            </a>
        </div>
    )
}

export default Navbar
