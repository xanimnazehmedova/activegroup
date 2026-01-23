import React, { useEffect } from 'react'
import brands from '../../../data/brands'
import '../scss/brandssection/BrandsSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'

const BrandsSection = () => {

    useEffect(() => {
          AOS.init({
              duration: 750,
              once: false,
              easing: 'ease-out',
              offset: 100, 
          });
      }, []); 
      
  return (
    <div className='ui-homeBrands'>
        <div className='container'>
            <div className='row text-center'>
                <h1 data-aos="fade-up" >50+ brendlə əməkdaşlıq</h1>
                <h3 data-aos='fade-up'> 
                      Dünya avtomobil ehtiyat hissələri, mühərrik yağları, akkumulyatorlar, test və diaqnostika avadanlıqları, eləcə də qatqı istehsalı bazarında lider olan brendlərin Azərbaycandakı ən böyük distribüterlərindən biridir.
                </h3>
            </div>
            <div className='ui-homeBrands-slider'>
                <div className='ui-homeBrands-slider-track'>
                    {brands.map((brand, index) =>(
                        <div className='slide' key={index}>
                            <Link to={`/brands/${brand.name}`} className='d-flex flex-column  align-items-center h-100'>
                            <img src={brand.logo} alt={brand.name}  className="img-fluid" />
                            </Link>
                        </div>
                    ))}

                    {brands.map((brand, index) =>(
                        <div className='slide' key={index}>
                            <Link to={`/brands/${brand.name}`}  className='d-flex flex-column align-items-center h-100'>
                            <img src={brand.logo} alt={brand.name}  className="img-fluid"  />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    </div>
  )
}

export default BrandsSection