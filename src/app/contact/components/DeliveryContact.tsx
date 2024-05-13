import React from 'react'

const DeliveryContact = () => {
    return (
        <section className='p-6 sm:px-16 xl:px-56 pb-20'>
            <h2 className='text-2xl font-rufina font-bold text-center animate-fade-right'>Our Delivery Partners</h2>
            <div className='flex flex-col sm:flex-row sm:gap-8'>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <a href="https://www.ubereats.com/ca/store/costa-verde-bbq-chicken/xJNQrdpKRNa1bZ8vfbCfxQ" target="_blank" className='flex flex-col justify-end items-end'>
                        <span className="material-symbols-outlined text-[#167940] w-10 my-7 animate-fade-right">arrow_forward</span>
                        <img src="deliveryC1.png" loading='lazy' alt="Uber eats" className='object-cover object-center rounded-lg shadow-lg animate-fade-right' />
                    </a>
                </div>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <a href="https://www.skipthedishes.com/costa-verde-bbq-chicken-inc?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=gpav2" target="_blank" className='flex flex-col justify-end items-end'>
                        <span className="material-symbols-outlined text-[#167940] w-10 my-7 animate-fade-right">arrow_forward</span>
                        <img src="delivery1.jpg" alt="skip" loading='lazy' className='object-cover object-center rounded-lg shadow-lg animate-fade-right' />
                    </a>
                </div>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <a href="https://www.doordash.com/en-CA/store/costa-verde-bbq-chicken-toronto-915367/" target="_blank" className='flex flex-col justify-end items-end'>
                        <span className="material-symbols-outlined text-[#167940] w-10 my-7 animate-fade-right">arrow_forward</span>
                        <img src="DeliveryC3.png" alt="dashdoor" loading='lazy' className='object-cover object-center rounded-lg shadow-lg animate-fade-right' />
                    </a>
                </div>
            </div>

        </section>
    )
}

export default DeliveryContact