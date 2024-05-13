import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar'
import HamburgerMenu from '@/app/components/HamburgerMenu'

const HomeCategories = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <section
            className="p-6 w-full h-96 sm:h-screen sm:px-16 sm:py-6 xl:px-56"
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
            <div className='mt-10 flex flex-col sm:mt-40 md:mt-32 xl:mt-24 md:ml-8 sm:w-1/2'>
                <h1 className='text-4xl font-rufina font-bold text-white mb-6 text-center sm:text-left sm:text-6xl xl:text-7xl animate-fade-right'>Explore Our Menus</h1>
                <p className='text-base font-lato text-white text-center mb-4 sm:text-left sm:text-xl animate-fade-right'>The freshest ingredients for you every day.</p>
            </div>

        </section>
    )
}

export default HomeCategories