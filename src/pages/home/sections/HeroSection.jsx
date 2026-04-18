import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../scss/herosection/HeroSection.css'
import banner1 from '../../../assets/images/homepage/AGC-banner-1900x800.jpg'
import banner2 from '../../../assets/images/blog/swag-quba-banner.jpg'
import banner3 from '../../../assets/images/blog/total-dst-banner.jpg'
import banner4 from '../../../assets/images/blog/blog-eurolub.jpg'
import banner5 from '../../../assets/images/blog/blog-teknorot.jpg'
import { useNavigate } from 'react-router-dom';
import blogs from '../../../data/blogs';


const slides = [
  {
    img: banner1,
    slug: 'active-group-conferance2025',
    title: 'Active Group Conference 3',
    desc: '2 Oktyabr 2025-ci il Baku Marriott Hotel Boulevard-da!'
  },
  {
    img: banner2,
    slug: "swag-quba-seminar-2026",
    title: "Active Group SWAG seminarı - Quba",
    desc: "7 Aprel 2026-cı il – Quba"
  },
  {
    img: banner3,
    slug: "totalenergies-dst-gorusu-2025",
    title: 'TotalEnergies DST Görüşü',
    desc: "19–21 Oktyabr 2025-ci il – Şimali Kipr"
  }, 
  {
    img: banner4,
    slug: "active-group-eurolub",
    title: "Eurolub Tədbiri",
    desc: "Alman keyfiyyəti Azərbaycanda!"
  },
   {
    img: banner5,
    slug: "active-group-teknorot-kautek-trip",
    title: "Teknorot və Kautek zavodlarına səyahət ",
    desc: "23-26 Aprel 2024-cü il - Türkiyə"
  },
   
];

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className='ui-hero'>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        className="ui-banner"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="ui-banner-slide"
              style={{ backgroundImage: `url(${slide.img})`, width: '100%' }}
              onClick={() => {
                const blog = blogs.find(blog => blog.slug === slide.slug)
                if (blog) {
                  navigate(`/blogs/${blog.slug}`)
                }
              }}
            >
              {slide.title && slide.desc && <div className="ui-banner-overlay p-4">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection