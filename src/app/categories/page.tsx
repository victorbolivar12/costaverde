"use client"
import React from 'react'
import HomeCategories from './components/HomeCategories'
import ContentCategories from './components/ContentCategories'
import Footer from '../components/Footer'

const page = () => {
  return (
    <main>
        <HomeCategories/>
        <ContentCategories/>
        <Footer/>
    </main>
  )
}

export default page