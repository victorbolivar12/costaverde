"use client"
import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import HamburgerMenu from '@/app/components/HamburgerMenu';

const HomeAbout = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <section
            className="p-6 xl:px-56 w-full h-96 sm:h-screen"
            style={{
                backgroundImage: "linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.6)), url(main.png)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                overflow: 'hidden'
            }}
        >
            <Navbar
                open={open}
                setOpen={handleClick}
                isHome={false}
            />
            {open && (
                <HamburgerMenu
                    open={open}
                    setOpen={handleClick}
                />
            )}
            <div className='mt-10 flex flex-col sm:mt-40 md:mt-32 xl:mt-28'>
                <h1 className='text-4xl font-rufina font-bold text-white mb-6 text-center sm:text-left sm:text-6xl xl:text-8xl animate-fade-right'>Who We Are</h1>
                <p className='text-base font-lato text-white text-center mb-4 sm:text-xl sm:text-left animate-fade-right'>Unveiling Our Heritage</p>
                <p className='text-base font-lato text-white text-center sm:text-xl sm:text-left animate-fade-right'>A Journey Through Portuguese and Brazilian Flavors</p>
            </div>

        </section>
    )
}

export default HomeAbout