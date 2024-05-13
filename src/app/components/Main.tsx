import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Main = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.5,
    });

    return (
        <section className='p-6 flex flex-col gap-9 relative bg-[#ECEBEC] sm:gap-0 sm:flex-row sm:px-16 sm:max-xl sm:grid-cols-2  md:text-left xl:px-56 md:pb-0'>
            <div className={`flex flex-col gap-5 ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
                <p className='text-3xl font-bold font-rufina sm:text-left sm:text-5xl lg:text-5xl xl:text-6xl xl:leading-[80px]'>
                    Portuguese & Brazilian Restaurant
                </p>
                <p className='w-full text-base font-lato text-left hidden sm:block xl:w-1/2'>
                    Embark on a culinary adventure celebrating diverse flavors and rich traditions.
                </p>
                <img src="Scroll.png" loading='lazy' alt="" className='hidden sm:block w-5' />
            </div>
            <div className='flex'>
                <div className={`sm:hidden ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
                    <img
                        src="main.png"
                        alt="food table"
                        className='rounded-lg h-auto w-full drop-shadow-xl'
                        loading='lazy'
                    />
                </div>

                <div className='hidden sm:flex  absolute  gap-5 z-20 sm:top-[250px] md:top-[330px] xl:top-[380px]'>
                    <img src="dish1.png" loading='lazy' alt="dish1" className='w-28 drop-shadow-xl animate-fade-right' />
                    <img src="dish2.png"  loading='lazy' alt="dish1" className='w-28 drop-shadow-xl animate-fade-right' />
                </div>

                <div className={`hidden sm:flex sm:justify-end sm:items-start xl:w-full ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
                    <img
                        src="main2.jpg"
                        alt="buffet food"
                        className='w-full h-3/4 object-cover object-center shadow-lg rounded-lg drop-shadow-xl'
                        loading='lazy'
                    />
                </div>
            </div>
            <p className={`w-full text-base text-center font-lato sm:hidden ${inView ? 'animate-fade-right' : ''}`} ref={ref}>
                Embark on a culinary adventure celebrating diverse flavors and rich traditions.
            </p>
        </section>
    )
}

export default Main;
