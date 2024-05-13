import React from 'react';

const Delivery = () => {
    return (
        <section className='p-6 sm:px-16 xl:px-56'>
            <h2 className='font-rufina font-bold text-3xl text-center mb-10 animate-fade-right'>Our Delivery Partners</h2>
            <div className='flex gap-5 mb-10 justify-center items-center sm:gap-10 animate-fade-right'>
                <a href="">
                    <img
                        src="delivery1.png"
                        alt=""
                        className='w-full object-cover object-center'
                        loading='lazy'
                    />
                </a>
                <a href="">
                    <img
                        src="delivery2.png"
                        alt=""
                        className='w-full object-cover object-center'
                        loading='lazy'
                    />
                </a>
                <a href="">
                    <img
                        src="delivery3.png"
                        alt=""
                        className='w-full object-cover object-center sm:w-64'
                        loading='lazy'
                    />
                </a>
            </div>
            <p className='font-lato text-base text-center animate-fade-right'>Bringing Portuguese and Brazilian Flavors to Your Doorstep</p>
        </section>
    )
}

export default Delivery;
