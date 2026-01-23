import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import gallery from '../../data/gallery'
import './Photogallery.css'

const Photogallery = () => {
  return (
    <div>
        <header className='sticky-top'>
            <Navbar/>
        </header>
        <main>
          <section>
              <div className='ui-gallery'>
              <div className='container'>
                <div className='ui-gallery-content'>
                  {gallery.map((image) => (
                     <div  className={`ui-gallery-item item-${image.size}`} key={image.id}>
                      <img src={image.img} alt="" />
                      <p>{image.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Photogallery