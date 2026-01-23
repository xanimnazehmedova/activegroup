import React, { useEffect } from 'react'
import '../scss/herosection/HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom'
const HeroSection = () => {

   useEffect(() => {
          AOS.init({
              duration: 750, 
              once: false, 
              easing: 'ease-out', 
              offset: 100, 
          });
      }, []); 


  return (
    <div className='ui-about-hero'>
        <div className='container h-100 d-flex justify-content-end'>
           <div  data-aos="fade-left" className='ui-about-hero-content'>
            <NavLink to='/' className='navigate-home d-flex gap-1'>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
            Əsas səhifə 
            </NavLink>
            <h2>Bizim Hekayəmiz...</h2>
           </div>
        </div>

    </div>
  )
}

export default HeroSection