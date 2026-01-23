import React, { useEffect } from 'react'
import '../scss/framesection/FrameSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FrameSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 750, 
            once: false, 
            easing: 'ease-in-out', 
            offset: 150,
        });
    }, []);
  return (
    <>
    <div className='ui-frame'>
        <div className='container'>
            <div className='ui-frame-content d-flex flex-column text-center gap-5'>
              <div className='d-flex flex-column gap-3'>
                <h1 data-aos="fade-up">25+ illik təcrübə</h1>
                <h3 data-aos="fade-up">Active Group – 25 ildən artıq təcrübəyə malik, Azərbaycanda avtomobil ehtiyat hissələri bazarında fəaliyyət göstərən və 2014-cü ildən “Nexus Automotive International”un üzvü olan aparıcı distribüter.
                </h3>
              </div>
                   <iframe className='ui-frame-content-media' width="100%"  src="https://www.youtube.com/embed/FgaeO2iKbgM?si=YoX87SvYWWL-8WyT" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
             </div>
        </div>
    </div>
    </>
  )
}

export default FrameSection