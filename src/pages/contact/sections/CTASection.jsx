import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import '../scss/ctasection/CTASection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTASection = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading , setLoading] = useState(false)
    const [formError, setFormError] = useState("");
    


    const sendEmail = (data) => {
        setLoading(true);
        emailjs
            .send(
                'xnmnz_gmail_service', 
                'template_bj6c8cl', 
                data,
               'BXYslyr50U7i3L5NY' 
            )
            .then(
                (response) => {
                    alert('Mesajınız uğurla göndərildi!');
                    reset(); 
                    setLoading(false);
                    setFormError(""); 
                },
                (error) => {
                    alert('Mesaj göndərilərkən xəta baş verdi:', error);
                    setLoading(false);
                }
            );
    };
const onError = () => {
  if (errors.name) return setFormError("Ad xanasi düzgün doldurulmayıb!");
  if (errors.email) return setFormError("Email düzgün formatda deyil!");
  if (errors.tel) return setFormError("Telefon nömrəsi düzgün deyil!");
  if (errors.message) return setFormError("Mesaj xanası boş ola bilməz!");

  setFormError("Xanaları düzgün doldurun!");
};

    return (
        <div className='ui-contact'>
            <div className='container'>
                <div className='row'>
                    <div className='ui-contact-wrapper'>
                        <h1 data-aos="fade-left">Suallar yaranıb?</h1>
                        <h3 data-aos="fade-right">Elə indi bizim ilə əlaqə saxlayıb ətraflı məlumat alın!</h3>
                       
                        <form className='ui-contact-form' onSubmit={handleSubmit(sendEmail, onError)}>
                            <div>

                              {formError && <p className="ui-contact-form-error">{formError}</p>}
                            </div>

                            <div className='input-wrapper'>
                                <input
                                    type="text"
                                    className='input-field'
                                    id='name'
                                    placeholder=" "
                                    {...register('name', { required: true })} 
                                />
                                <label htmlFor="name">*Adınız</label>
                            </div>


                          <div className='input-wrapper'>
                            <input
                              type="email"
                              className='input-field'
                              id='email'
                              placeholder=" "
                              {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/ 
                              })}
                            />
                            <label htmlFor="email">*E-poçtunuz</label>
                          </div>

                          <div className='input-wrapper'>
                              <input
                                type="tel"
                                className='input-field'
                                id='tel'
                                placeholder=" "
                                {...register('tel', {
                                  required: true,
                                  pattern: /^(?:\+994|0)(50|51|55|70|77|10)\d{7}$/ 
                                })}
                              />
                              <label htmlFor="tel">*Əlaqə nömrəniz</label>
                            </div>

                          


                            <div className='input-wrapper'>
                                <textarea
                                    className='input-field textarea'
                                    id='message'
                                    placeholder=" "
                                    {...register('message', { required: true })}
                                />
                                <label htmlFor="message">*Mesajınız</label>
                            </div>
                            <div className="form-actions">
                                <button type="button" className="btn btn-cancel"    onClick={() => reset({name: "",email: "",message:""})}>
                                    Ləğv Et
                                </button>
                                <button type="submit"   disabled={loading} className="btn btn-submit">
                                    {loading ? (
                                      <>
                                        <FaSpinner className="animate-spin mr-2" /> Göndərilir...
                                      </>
                                    ) : (
                                      "Təsdiq Et"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='row'>
                    <div className='ui-contact-loc'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.867123727502!2d49.71934801160521!3d40.478204551776344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085737b3e1aa5%3A0x779169d477c0d4df!2sActive%20Group!5e0!3m2!1saz!2saz!4v1754075149655!5m2!1saz!2saz" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;