import React, { useEffect } from 'react'
import '../scss/contactsection/ContactSection.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const ContactSection = () => {
  
 useEffect(() => {
          AOS.init({
              duration: 750, // Animasiya müddəti
              once: false, // Animasiyanın yalnız bir dəfə işə düşməsi
              easing: 'ease-out', // Animasiya funksiyası
              offset: 100, // Animasiyanın başlaması üçün piksellərin sayı
          });
      }, []); 
  return (
    <>
        <div className="ui-contactSec">
          
           <div className='container'>
             <div className="ui-contact-content">
              <h1 data-aos="fade-up">Sizə Necə Kömək Edə Bilərik?</h1>
              <h3 data-aos="fade-up">Bizimlə əlaqə saxlayaraq suallarınıza ən qısa zamanda, dəqiq və ətraflı cavablar ala, bütün məsələlərdə peşəkar dəstəkdən yararlana bilərsiniz.</h3>
              <div data-aos='fade-up'>
                <NavLink to='/contact'>Əlaqəyə Keç</NavLink>
              {/* <a href="/contact" ></a> */}
              </div>
            </div>
           </div>
          
        </div>
    </>
  )
}

export default ContactSection