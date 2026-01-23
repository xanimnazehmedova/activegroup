import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HeroSection from './sections/HeroSection'
import BrandsSection from './sections/BrandsSection'

const Brands = () => {
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
        <BrandsSection/>
      </section>
    </main>
    <footer>
      <Footer/>
    </footer>

    </>
  )
}

export default Brands