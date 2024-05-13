import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id='about' className='px-6 pb-10 relative bg-[#ECEBEC] sm:flex sm:px-16 xl:px-56'>
      <img src="main2.png" loading='lazy' alt="" className={`rounded-xl drop-shadow-xl w-full h-52 object-cover object-center mb-5 sm:hidden ${inView ? 'animate-fade-up' : ''}`} />
      <img src="main.png" loading='lazy' alt="" className={`hidden rounded-xl drop-shadow-xl w-6/12 object-cover object-center mb-5 sm:block mt-10 mr-10 ${inView ? 'animate-fade-up' : ''}`} />
      <div className={`flex flex-col gap-4 pt-6 sm:pt-10 ${inView ? 'animate-fade-up' : ''}`} ref={ref}>
        <p className='text-2xl font-rufina font-bold text-center'>From Family Kitchen to Yours</p>
        <p className='text-base font-lato text-center'>Welcome to our Portuguese and Brazilian Restaurant, where every dish tells a story of tradition and taste passed down through generations. Explore our menu to discover the vibrant flavors of Brazil and Portugal expertly fused together. Join us for a culinary journey that promises to evoke the warmth of home-cooked meals in every bite.</p>
      </div>
    </section>
  )
}

export default About;
