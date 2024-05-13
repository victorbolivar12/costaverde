import React from 'react'

const MainAbout = () => {
    return (
        <section className='p-6 sm:px-16 xl:px-56'>
            <div className='flex flex-col gap-5 sm:flex-row'>
                <div className='flex flex-col gap-5 sm:mt-14'>
                    <h2 className='text-2xl font-rufina font-bold text-center sm:text-left animate-fade-right'>From Humble Beginnings to Culinary Hub</h2>
                    <p className='font-lato text-base sm:text-xl text-center sm:text-left animate-fade-right'>Embark on a culinary voyage through the heart of Toronto, where the fusion of Portuguese and Brazilian cuisine awaits.</p>
                </div>
                <img 
                    loading='lazy' 
                    src="mainAbout.png" 
                    alt="about" 
                    className='w-full rounded-lg shadow-xl sm:w-96 animate-fade-right' 
                />
            </div>
            <p className='font-lato text-base sm:text-xl mt-5 text-center sm:text-left animate-fade-right'>Our story begins at Keele and Eglinton, where our small eatery captured the essence of tradition and flavor.</p>
        </section>
    )
}

export default MainAbout