import React from 'react'

const MapContact = () => {
    return (
        <section className='p-6 sm:px-16 xl:px-56'>
            <h2 className='text-2xl font-rufina font-bold mb-7 text-center sm:text-4xl sm:mt-16 xl:text-5xl animate-fade-right'>Our Location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11532.795385296376!2d-79.4824978!3d43.7271959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b319d2e3290eb%3A0x3ae0a36daf5ca1ba!2sCosta%20Verde%20B.B.Q.%20%26%20Portuguese%20Grill%20House!5e0!3m2!1ses!2sve!4v1715137197426!5m2!1ses!2sve"
                width="100%"
                className='object-cover object-center rounded-lg shadow-xl h-[400px] animate-fade-right'
                style={{ border: "0" }}
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
            />
            <div className='mt-10 flex flex-col gap-7 sm:flex-row sm:justify-between'>
                <div>
                    <h3 className='text-xl font-rufina font-bold mb-3 text-center sm:text-left animate-fade-right'>Address</h3>
                    <p className='text-base font-lato text-center sm:text-left animate-fade-right'>2764 Keele St, Toronto, ON M6M 2G2</p>
                </div>
                <div>
                    <h3 className='text-xl font-rufina font-bold mb-3 text-center sm:text-left animate-fade-right'>Social Media</h3>
                    <div className='flex gap-4 items-center justify-center animate-fade-right'>
                        <a href="https://www.facebook.com/CostaVerdeBBQ/?locale=es_LA" target="_blank">
                            <img
                                src='facebook.png'
                                alt="Icon facebook"
                                width={30}
                            />
                        </a>
                        <a href="https://www.instagram.com/costaverdebbq/?hl=es" target="_blank">
                            <img
                                src="instagram.png"
                                alt="Icon instagran"
                                width={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapContact