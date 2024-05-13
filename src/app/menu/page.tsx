"use client"
import React from 'react'
import HomeMenu from './components/HomeMenu'
import MainMenu from './components/MainMenu'
import DrinkMenu from './components/DrinkMenu'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
      <HomeMenu/>
      <MainMenu/>
      <DrinkMenu/>
      <Footer/>
    </main>
  )
}

export default page