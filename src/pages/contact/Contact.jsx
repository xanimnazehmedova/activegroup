import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CTASection from './sections/CTASection'
import ContactInfoSection from './sections/ContactInfoSection'

const Contact = () => {
  return (
    <>
    <header className='sticky-top'>
        <Navbar/>
    </header>
    <main>
         <section>
                <ContactInfoSection/>
            </section>
        <section>
            <CTASection/>
        </section>
    </main>
    <footer>
        <Footer/>
    </footer>

    </>
  )
}

export default Contact