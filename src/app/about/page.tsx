"use client"
import React from 'react';
import HomeAbout from './components/HomeAbout';
import Footer from '../components/Footer';
import MainAbout from './components/MainAbout';
import DescriptionAbout from './components/DescriptionAbout';

const About: React.FC = () => {
  return (
    <main>
      <HomeAbout/>
      <MainAbout/>
      <DescriptionAbout/>
      <Footer/>
    </main>
  );
};

export default About;
