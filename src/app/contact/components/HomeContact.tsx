import React,{useState} from 'react'
import Navbar from '@/app/components/Navbar';
import HamburgerMenu from '@/app/components/HamburgerMenu';

const HomeContact = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <section
            className="p-6 w-full h-96 sm:h-screen sm:px-16 sm:py-6 xl:px-56"
            style={{
                backgroundImage: "linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.1)), url(bg.png)",
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
            <div className='mt-16 flex flex-col sm:mt-40 md:ml-8 '>
                <h1 className='text-4xl font-rufina font-bold text-white text-center  sm:text-6xl xl:text-7xl animate-fade-right'>Contact us</h1>
            </div>

        </section>
    )
}

export default HomeContact