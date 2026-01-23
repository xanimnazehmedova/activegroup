import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link, useParams } from 'react-router-dom'
import brands from '../../data/brands'
import brand_detail from '../../data/brand-detail'
import AOS from 'aos';
import 'aos/dist/aos.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './BrandDetail.css'
import BrandsSection from '../brandspage/sections/BrandsSection'

const BrandDetail = () => {

  
    const {name}= useParams()
    const brand = brands.find((b)=> b.name === name)
    const detail = brand_detail.find((d)=> d.name === name)

    
 useEffect(() => {
          AOS.init({
              duration: 750, 
              once: false, 
              easing: 'ease-in-out', 
              offset: 100, 
          });
      }, []); 
  return (
    <>
    <header className='sticky-top'>
        <Navbar/>
    </header>
    <main>
    <div className='ui-brand'>
    <div className="container">
        <div className="breadcrumb d-flex gap-2 text-center" >
          <Link to="/">Əsas Səhifə</Link>
          <span>&gt;&gt;</span>
          <Link to="/brands">Brendlər</Link>
          <span>&gt;&gt;</span>
          <span>{brand.name}</span>
        </div>
      <div>
        <div className="row w-100" >
          <div className='ui-brand-banner' style={{backgroundImage: `url(${detail.img1})`, }}>
          <div className=' ui-brand-banner-content d-flex flex-column justify-content-around align-items-center text-center ' >
            <div className='logo-wrapper bg-white p-2' data-aos="fade-up" >
                <img 
              src={brand.logo} 
              alt={brand.name} 
              className="ui-brand-logo" 
            />
            </div>
            <div data-aos="fade-up" >
              {brand.site && (<a href={brand.site} className='ui-brand-site' target='blank'>
                Ətraflı 
                <FontAwesomeIcon icon={faAngleDoubleRight}/>
                </a>)}
            </div>
            </div>
          </div>
      </div>

        <div className='row ui-brand-content ' >
          <div data-aos="fade-up">
            <p>{detail.text1}</p>
          </div>
          <div className='ui-brand-content-img' >
            <div>
            <img src={detail.img2} alt={brand.name} data-aos="fade-up"/>
            </div>
            <div>
            <img src={detail.img3} alt={brand.name} data-aos="fade-up"/>
            </div>
          </div>
          <div data-aos="fade-up">
            <p>{detail.text2}</p>
          </div>
          <div className='ui-brand-content-img w-100' data-aos="fade-up">
            <img src={detail.img4} alt={brand.name} />
          </div>
          <div data-aos="fade-up">
            <p>{detail.text3}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div>
          <BrandsSection/>
        </div>

    </main>
    <footer>
        <Footer/>
    </footer>
        
    </>
  )
}

export default BrandDetail