"use client"
import React from 'react'
import HomeGallery from './components/HomeGallery'
import VideoAbout from '../about/components/VideoAbout'
import GaleryAbout from '../about/components/GaleryAbout'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
      <HomeGallery/>
      <VideoAbout/>
      <GaleryAbout/>
      <Footer/>
    </main>
  )
}

export default page