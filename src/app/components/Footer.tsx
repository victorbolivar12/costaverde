import React from 'react'

const Footer = () => {
  return (
    <section id='contact' className='p-6 sm:px-16 xl:px-56 bg-[#00461E]'>
      <div className='flex justify-between items-center mb-10'>
        <img src="verticalLogo.png" loading='lazy' alt="logo" className='w-24 object-cover object-center xl:w-28' />
        <div className='flex flex-col gap-5 w-56 sm:flex-row sm:w-3/4 sm:gap-10'>
          <div className='flex flex-col'>
            <h2 className='font-rufina text-white font-bold text-xl mb-2 text-center sm:text-left'>Hours</h2>
            <p className='font-lato text-white text-xs sm:text-base text-center sm:text-left'>Tuesday - Saturday:  11:00 am - 8:00 pm  Sunday: 11:00 am - 7:00 pm</p>
          </div>
          <div>
            <h2 className='font-rufina text-white font-bold text-xl mb-2 text-center sm:text-left'>Contact</h2>
            <p className='font-lato text-white text-xs sm:text-base text-center sm:text-left'>2764 Keele St, Toronto, ON M6M 2G2</p>
            <p className='font-lato text-white text-xs sm:text-base text-center sm:text-left' >Tlf: (416) 653-5629</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center sm:flex-row-reverse sm:justify-between'>
        <div className='flex gap-2'>
          <a href="https://www.facebook.com/CostaVerdeBBQ/?locale=es_LA" target="_blank">
            <img
              src='Icon_facebook.png'
              alt="Icon facebook"
              width={15}
              loading='lazy'
            />
          </a>
          <a href="https://www.instagram.com/costaverdebbq/?hl=es" target="_blank">
            <img
              src="Icon_instagram.png"
              alt="Icon instagran"
              width={15}
              loading='lazy'
            />
          </a>
          <a href="https://www.skipthedishes.com/costa-verde-bbq-chicken-inc?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=gpav2" target="_blank">
            <img
              src='uberEats.png'
              alt="Icon uberEats"
              width={20}
              loading='lazy'
            />
          </a>
          <a href="https://www.doordash.com/en-CA/store/costa-verde-bbq-chicken-toronto-915367/" target="_blank">
            <img
              src='delivery.png'
              alt="Icon delivery"
              width={20}
              loading='lazy'
            />
          </a>
          <a href="https://www.ubereats.com/ca/store/costa-verde-bbq-chicken/xJNQrdpKRNa1bZ8vfbCfxQ" target="_blank">
            <img
              src='3.png'
              alt="Icon delivery"
              width={20}
              loading='lazy'
            />
          </a>
        </div>
        <span className='text-white text-xs sm:text-base'>© 2024 Costa Verde All Rights Reserved</span>
        <div>
        </div>
      </div>

    </section>

  )
}

export default Footer