import React from 'react';
import { useInView } from 'react-intersection-observer';

const Categories = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section id='categories' className='p-6 sm:px-16 xl:px-56' ref={ref}>
            <h2 className={`font-rufina font-bold text-3xl text-center ${inView ? 'animate-fade-right' : ''}`}>Our Menus</h2>
            <p className={`font-xs text-center mb-10 ${inView ? 'animate-fade-right' : ''}`}>Discover a world of flavors with our diverse menu categories!</p>
            <div className={`flex flex-col gap-5 sm:flex-row ${inView ? 'animate-fade-right' : ''}`}>
                <a href="" className='relative overflow-hidden'>
                    <img
                        src="menu1.png"
                        alt="Take out"
                        className={`w-full object-cover object-center rounded-xl shadow-xl sm:h-80 ${inView ? 'animate-fade-right' : ''}`}
                        loading='lazy'
                    />
                    <div className="flex  p-4 bg-transparent w-full h-full absolute top-0 left-0">
                        <h3 className='font-rufina text-xl text-white absolute botton-0 '>Take out</h3>
                        <span className="material-symbols-outlined text-white w-10 h-5 absolute top-5 right-5">arrow_forward</span>
                    </div>
                </a>
                <a href="" className='relative overflow-hidden'>
                    <img
                        src="menu2.png"
                        alt="Dine in"
                        className={`w-full object-cover object-center rounded-xl shadow-xl sm:h-80 ${inView ? 'animate-fade-right' : ''}`}
                        loading='lazy'
                    />
                    <div className="flex  p-4 bg-transparent w-full h-full absolute top-0 left-0">
                        <h3 className='font-rufina text-xl text-white absolute botton-0 '>Dine-in</h3>
                        <span className="material-symbols-outlined text-white w-10 h-5 absolute top-5 right-5">arrow_forward</span>
                    </div>
                </a>
                <a href="" className='relative overflow-hidden'>
                    <img
                        src="menu3.png"
                        alt="Catering"
                        className={`w-full object-cover object-center rounded-xl shadow-xl sm:h-80 ${inView ? 'animate-fade-right' : ''}`}
                        loading='lazy'
                    />
                    <div className="flex justify-between p-4 bg-transparent w-full h-full absolute top-0 left-0">
                        <h3 className='font-rufina text-xl text-white absolute botton-0 '>Catering</h3>
                        <span className="material-symbols-outlined text-white w-10 h-5 absolute top-5 right-5">arrow_forward</span>
                    </div>
                </a>
            </div>

        </section>
    )
}

export default Categories;
