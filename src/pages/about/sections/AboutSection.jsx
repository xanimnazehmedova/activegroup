import React, { useEffect } from 'react'
import '../scss/aboutsection/AboutSection.css'
import ag_logo from '../../../assets/images/AG-logo.png'
import history_img from '../../../assets/images/aboutpage/history.png'
import mision from '../../../assets/images/aboutpage/mision.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {

  
 useEffect(() => {
          AOS.init({
              duration: 800, 
              once: false, 
              easing: 'ease-out', 
              offset: 100, 
          });
      }, []);  


  return (
    <div className='ui-about'>
      <div className='container'>
      <div className='ui-about-content d-flex flex-column gap-4 m-5'>
          <div className='row align-items-center bg-light gap-4 p-3'>
          <div data-aos="fade"  className='col-lg-3 d-flex justify-content-center align-items-center'>
            <img src={ag_logo}  className='ui-about-content-image' alt="Active Group" />
          </div>
          <div className='ui-about-content-text col pt-2' >
            <h3 data-aos="fade-left" >“Active Group” haqqında</h3>
            <p data-aos="fade-left" >“Active Group” şirkəti, dünya avtomobil ehtiyat hissələri, mühərrik yağları, diaqnostika və kondisioner avadanlıqları, qatqılar və s. üzrə lider olan 75-dən çox brendin Azərbaycandakı ən böyük distribüterlərindən biridir.
            İstehlakçıların daim dəyişən tələblərini nəzərə alan “Active Group” keyfiyyətdən uzaqlaşmadan Avropa, Asiya və Amerika istehsalı bütün növ benzin və dizel mühərrikli avtomobillərin ehtiyat hissələrini təqdim edir və müştərilərinə hər zaman dost yanaşması ilə seçilir.</p>
            </div>
        </div>


         <div className='row align-items-center p-3 gap-4 border border-light'>
          <div className='ui-about-content-text col pt-2 order-lg-1 order-2' >
           
            <h3  data-aos="fade-right" >Tariximiz</h3>
            <p  data-aos="fade-right">XX əsrin 90-cı illərində atılan ilk addımlar nəticəsində 2001-ci ildə şirkət “REEN” adı ilə fəaliyyətə başladı.
            2005-ci ildən etibarən “Active Group” adını aldı və ildən-ilə uğurlarla bazarda etibarlılığını möhkəmləndirdi.
            2014-cü ildə qlobal “Nexus Automotive International” şəbəkəsinə rəsmi üzv oldu.
            2015-ci ildə yeni mərkəzi ofis və anbar istifadəyə verildi.
            2018-ci ildə Gəncə regional anbarı fəaliyyətə başladı.
            Active Group Conference (AGC)
            Azərbaycanda avtomobil ehtiyat hissələri ilə bağlı ilk iri-miqyaslı konfransın təşkilatçısı olan “Active Group”, istehsalçı, satıcı və müştərilərin bir araya gəlməsində öncül rol oynayır.
            AGC 1 – 2017-ci il
            AGC 2 – 2019-cu il
            AGC 3 – 2025-ci ilin oktyabr ayında keçiriləcək</p>
          </div>
           <div  data-aos="fade" className='col-lg-3 order-lg-2 order-1  d-flex justify-content-center align-items-center'>
            <img src={history_img} className='ui-about-content-image' alt="Active Group " />
          </div>
        </div>


         <div className='row align-items-center bg-light gap-4 p-3'>
          <div  data-aos="fade" className='col-lg-3  d-flex justify-content-center align-items-center'>
            <img src={mision} className='ui-about-content-image' alt="Active Group " />
          </div>
          <div className='ui-about-content-text col pt-2' >
            <h3  data-aos="fade-left">Missiyamız</h3>
            <p  data-aos="fade-left"> “Active Group” olaraq əsas məqsədimiz təchizatçılar və müştərilərimizlə uzunmüddətli və güvənli əməkdaşlıq qurmaqdır. Bunun üçün:
            Yalnız etibarlı və təhlükəsiz ehtiyat hissələri istehsalçıları ilə işləyirik,
            İstehlakçı hüquqlarını daim diqqət mərkəzində saxlayırıq,
            Müştərilərimiz və əməkdaşlarımız üçün mütəmadi olaraq təlimlər və seminarlar təşkil edirik,
            Ən əsası isə bütün tərəfdaşlarımızı dostumuz kimi görürük.</p>
          </div>
        </div>


      </div>
      </div>

    </div>
  )
}

export default AboutSection