import React from 'react'

const DrinkMenu = () => {
  return (
    <section className='p-6 sm:px-16 xl:px-56'>
        <h2 className='text-2xl mb-3 font-rufina font-bold text-center sm:text-4xl sm:mb-6 xl:text-6xl'>Drinks</h2>
        <p className='font-lato text-base text-center sm:mb-10'>Explore our beverage selection and indulge in imported delights as well as house wines and beers, immersing yourself in a world of flavor.</p>
        <div className='mt-7 gap-4 grid sm:grid-cols-2 sm:grid-row-2'>
            <div className='sm:h-56'>
                <img loading='lazy' src="drink3.png" alt="" className='w-full h-full rounded-lg shadow-lg object-cover animate-fade-right'/>
            </div>
            <div className='h-56 sm:h-full sm:row-span-2'>
                <img loading='lazy' src="drink1.png" alt="" className='w-full h-full rounded-lg shadow-lg object-cover animate-fade-right'/>
            </div>
            <div className='h-56 sm:h-56'>
                <img  loading='lazy' src="drink2.png" alt="" className='w-full h-full rounded-lg shadow-lg object-cover animate-fade-right'/>
            </div>
        </div>
    </section>
  )
}

export default DrinkMenu