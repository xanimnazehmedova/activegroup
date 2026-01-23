import React from 'react'
import '../scss/contactinfo/ContactInfoSection.css'

const ContactInfoSection = () => {
  return (
    <>
        <div className="contact-info">
          <h1>Əlaqə</h1>
          <div className="container">
          <div className="row w-100">
            <div className="contact-info-card col-md-6 col-lg-3">
              <p>
                <i className="fa-solid fa-phone"></i> <strong>Telefon:</strong>
              </p>
              <p><a href="tel:+994123493035">+994 12 349 30 35</a></p>
              <p><a href="tel:+994123493457">+994 12 349 34 57</a></p>
            </div>
            <div className="contact-info-card col-md-6 col-lg-3 ">
              <p>
                <i className="fa-solid fa-location-dot"></i>{" "}
                <strong>Ünvan:</strong>
              </p>
              <p>
                Azərbaycan Respublikası, Xırdalan şəhəri,
                <br />
                Həsən Əliyev küçəsi, Dalan 1/10
              </p>
            </div>
            <div className="contact-info-card col-md-6 col-lg-3 ">
              <p className="d-flex">
                <i className="fa-solid fa-clock"></i>{" "}
                <strong>Fəaliyyət saatları:</strong>
              </p>
              <p>Bazar ertəsi - Şənbə</p>
              <p>09:00 - 19:00</p>
            </div>
            <div className="contact-info-card col-md-6 col-lg-3 ">
              <p>
                <i className="fa-solid fa-envelope"></i> <strong>E-poçt:</strong>
              </p>
              <p><a href="mailto:office@activegroup.az">office@activegroup.az</a></p>
            </div>
          </div>
        </div>

    </div>


    </>
  )
}

export default ContactInfoSection