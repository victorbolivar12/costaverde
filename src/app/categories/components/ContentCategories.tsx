import React from 'react'
import MainMenu from '@/app/menu/components/MainMenu'

const ContentCategories = () => {
    return (
        <>
            <section className='p-6 sm:px-16 xl:px-56 sm:mt-10 relative'>
                <img src="Orange.png" alt="Orange" className='absolute z-20 w-24 top-0 right-0 sm:w-40  lg:left-[450px] xl:left-[550px]' />
                <div className='flex flex-col gap-7 lg:flex-row-reverse lg:gap-36'>
                    <p className='pt-10  font-lato text-base xl:w-2/3 text-center sm:text-left animate-fade-right'>Welcome to our menus page, where you can explore our offerings for take-out, dine-in, and catering. Whether you are craving a cozy meal at home, planning a special night out, or organizing an event, we have something for everyone.</p>
                    <img
                        src="categories1.png"
                        alt=""
                        loading='lazy'
                        className='w-full h-44 sm:h-56 object-cover object-center rounded-lg shadow-xl lg:w-1/2 lg:h-96 z-20 animate-fade-right'
                    />
                </div>
            </section>
            <section className='p-6 sm:px-16 xl:px-56 lg:mt-10'>
                <div className='flex flex-col lg:flex-row lg:gap-28 xl:gap-32'>
                    <div className='mb-10'>
                        <div className='flex flex-col mb-7'>
                            <div className='flex justify-between mb-5'>
                                <h2 className='text-2xl font-rufina font-bold text-center sm:text-left animate-fade-right'>Take-Out Menu:</h2>
                                <button className='border-2 w-28 h-12  xl:w-32 font-rufina m-auto sm:m-0 animate-fade-right'>
                                    See more
                                </button>
                            </div>
                            <p className='font-lato text-base text-center sm:text-left animate-fade-right'>Indulge in the flavors of Portuguese and Brazilian cuisine from the comfort of your home with our take-out menu. Enjoy our buffet of regular menu items, along with the special of the day. Simply place your order online or give us a call to experience the taste of tradition at your convenience.</p>

                            <MainMenu />
                        </div>
                        <img
                            src="categorie2.png"
                            alt=""
                            loading='lazy'
                            className='w-full h-56 sm:h-72 object-cover object-center rounded-lg shadow-xl mb-7 lg:hidden'
                        />
                        <div className='flex flex-col gap-7 lg:flex-row sm:gap-20'>
                            <div className=''>
                                <div className='flex justify-between mb-10'>
                                    <h2 className='text-2xl font-rufina font-bold text-center sm:text-left animate-fade-right'>Dine-In Menu:</h2>
                                    <button className='border-2 w-28 h-12  xl:w-32 font-rufina m-auto sm:m-0 animate-fade-right'>
                                        See more
                                    </button>
                                </div>

                                <p className='font-lato text-base text-center sm:text-left animate-fade-right'>Join us for a memorable dining experience at our restaurant, where every dish tells a story of tradition and love. Explore our dine-in menu, featuring a selection of our signature dishes and daily specials. We recommend making reservations for tables of four or more to ensure we can accommodate your party and provide you with the best possible experience.</p>
                            </div>

                            <img
                                src="img.jpg"
                                loading='lazy'
                                alt=""
                                className='hidden w-full h-44 sm:h-56 mb-7 object-cover object-center rounded-lg shadow-xl lg:block  lg:w-1/2 lg:h-[350px] animate-fade-right'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-6 mb-10 sm:px-16 xl:px-56 lg:mt-10'>
                <div className='flex flex-col lg:flex-row lg:gap-20'>
                    <img
                        src="categories3.png"
                        alt=""
                        className='w-full h-44 sm:h-56 mb-7 object-cover object-center rounded-lg shadow-xl  lg:w-1/2 lg:h-[350px] animate-fade-right'
                        loading='lazy'
                    />
                    <div className='flex flex-col gap-7'>
                        <div className='flex justify-between'>
                            <h2 className='text-2xl font-rufina font-bold text-center sm:text-left animate-fade-right'>Catering Menu:</h2>
                            <button className='border-2 w-28 h-12  xl:w-32 font-rufina m-auto sm:m-0 animate-fade-right'>
                                See more
                            </button>
                        </div>
                        <p className='font-lato text-base text-center sm:text-left animate-fade-right'>Planning an event? Let us take care of the food! Explore our catering menu, designed to impress your guests with the authentic flavors of Portuguese and Brazilian cuisine.
                            From corporate gatherings to weddings and everything in between, we offer a variety of options to suit your needs. Contact us today for a free quote and let us make your next event unforgettable.</p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ContentCategories