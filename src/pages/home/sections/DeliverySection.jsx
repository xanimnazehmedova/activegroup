import React, { useEffect } from 'react'
import '../scss/deliverysection/DeliverySection.css'
import map_az from '../../../assets/images/homepage/map-aze.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DeliverySection = () => {

    
 useEffect(() => {
          AOS.init({
              duration: 750, // Animasiya müddəti
              once: false, // Animasiyanın yalnız bir dəfə işə düşməsi
              easing: 'ease-out', // Animasiya funksiyası
              offset: 100, // Animasiyanın başlaması üçün piksellərin sayı
          });
      }, []);  

  return (
    <div className='ui-delivery'>
        <div className='container'>
        <div className='ui-delivery-content'>
            <div className='row justify-content-center'>
                <h1 data-aos="fade-up"> 
                    Ölkədaxili çatdırılma
                </h1>
                <h3 data-aos="fade-up">
                   Active Group Azərbaycanda ölkədaxili bir çox nöqtəyə sürətli və etibarlı çatdırılma xidmətləri təqdim edir. Xidmətimizə mühərrik yağları, akkumulyatorlar və digər avtomobil ehtiyat hissələrinin çatdırılması daxildir.
                </h3>
                <div className='ui-delivery-mapImg'>
                    <img src={map_az} alt="" />
                </div>
            </div>

        </div>

        </div>

    </div>
  )
}

export default DeliverySection