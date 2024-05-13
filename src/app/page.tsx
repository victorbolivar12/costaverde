"use client"
import type { NextPage } from "next";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Features from "./components/Features";
import Dishes from "./components/Dishes";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import { useState } from "react";

const Home: NextPage = () => {

  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <main className="min-h-[100dvh]">
      <Navbar
        open={open}
        setOpen={handleClick}
        isHome={true}
      />
      {open && (
        <HamburgerMenu
          open={open}
          setOpen={handleClick}
          isHome = {true}
        />
      )}
      <Main />
      <About />
      <Features />
      <Dishes />
      <Categories />
      <Delivery />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default Home