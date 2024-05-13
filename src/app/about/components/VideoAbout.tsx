import React from 'react'

const VideoAbout = () => {
  return (
    <section
      className='mt-10 relative'>
      <video
        src="video.mp4" muted loop autoPlay
        className='sm:h-[500px] w-full object-cover object-center'
      />
      <div className='absolute w-full h-full bg-[#00461E] opacity-25 top-0 right-0 sm:h-[500px]'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-white text-center text-3xl font-rufina mb-10 sm:text-4xl xl:text-8xl'>It looks delicious</h3>
      </div>

    </section>
  )
}

export default VideoAbout