"use client"
import React from 'react'
import HomeContact from './components/HomeContact'
import MapContact from './components/MapContact'
import DeliveryContact from './components/DeliveryContact'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
        <HomeContact/>
        <MapContact/>
        <DeliveryContact/>
        <Footer/>
    </main>
  )
}

export default page