import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';


import './scss/herosection/HeroSection.css'
import HeroSection from './sections/HeroSection';
import Footer from '../../components/footer/Footer';
import FrameSection from './sections/FrameSection';
import BrandsSection from './sections/BrandsSection';
import ContactSection from './sections/ContactSection';
import FAQSection from './sections/FAQSection';
import DeliverySection from './sections/DeliverySection';
  

const Home = () => {
  return (
    <>
    
    <header className='sticky-top'>
        <Navbar/>
    </header>
    <main>
    <section>
      <HeroSection/>
    </section>
     <section>
      <FrameSection/>
     </section>
     <section>
      <BrandsSection/>
     </section>
     <section>
      <DeliverySection/>
     </section>
     <section>
      <ContactSection/>
     </section>
     <section>
      <FAQSection/>
     </section>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Home