import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HeroSection from './sections/HeroSection'
import ExperienceSetion from './sections/AboutSection'

const About = () => {
  return (
    <div>
      <header className='sticky-top'>
        <Navbar/>
      </header>
      <main>
       <section>
        <HeroSection/>
       </section>
       <section>
        <ExperienceSetion/>
       </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default About