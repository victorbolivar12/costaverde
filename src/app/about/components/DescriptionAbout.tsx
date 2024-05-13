import React from 'react'

const DescriptionAbout = () => {
    return (
        <section className='px-6 sm:px-16 xl:px-56 mb-10'>
            <h2 className='text-2xl font-rufina font-bold sm:mb-10 text-center sm:text-left animate-fade-right'>Authentic Portuguese and Brazilian Culinary Heritage</h2>
            <div className='flex flex-col sm:gap-20 sm:flex-row-reverse'>
                <div className='mb-5 sm:'>
                    <p className='font-lato text-base mt-5 sm:text-xl mb-3 text-center sm:text-left animate-fade-right'>Secret recipes, passed down through generations, and a deep expertise in Portuguese gastronomy have been the cornerstone of our menu since our inception. </p>
                    <p className='font-lato text-base mt-5 sm:text-xl text-center sm:text-left animate-fade-right'>These culinary treasures serve as the backbone of our identity, anchoring us in the rich culinary traditions of Portugal and Brazil.</p>
                </div>
                <img
                    src="description.png"
                    alt="Bowl of soup"
                    loading='lazy'
                    className='w-full object-cover object-center rounded-lg shadow-xl sm:w-96 sm:h-[350px] text-center sm:text-left animate-fade-right'
                />
            </div>
            <h2 className='text-2xl font-rufina font-bold mt-5 sm:mt-10 sm:mb-10 sm:ml-[470px] text-center sm:text-left animate-fade-right'>Expanding Horizons</h2>
            <div className='flex flex-col sm:gap-20 sm:flex-row'>
                <div className='mb-5 sm:'>
                    <p className='font-lato text-base mt-5 sm:text-xl mb-3 text-center sm:text-left animate-fade-right'>From our humble beginnings to our bustling current location, our commitment to quality and tradition remains unwavering. </p>
                    <p className='font-lato text-base mt-5 sm:text-xl text-center sm:text-left animate-fade-right'>Join us as we continue to share the vibrant tastes and warm hospitality that have made us a beloved culinary destination in Toronto.</p>
                </div>
                <img
                    src="about3.png"
                    loading='lazy'
                    alt="Bowl of soup"
                    className='w-full object-cover object-center rounded-lg shadow-xl sm:w-96 sm:h-[350px] animate-fade-right'
                />
            </div>
        </section>
    )
}

export default DescriptionAbout