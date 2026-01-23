import React from 'react'
import EurAsiaLogo from '../../assets/images/Eurasia-logo.png';
import ag_logo from '../../assets/images/AG-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css'
import { NavLink } from 'react-router-dom';
import brands from '../../data/brands'
import blogs from '../../data/blogs'
const Footer = () => {
  return (
       <div className='ui-footer text-center'>
        <div className='d-flex flex-column gap-3' >
            <div className='row align-items-center'>

            <div className='col-lg-3 col-md-6 col-sm-6 col-6 align-items-center'>
                <div className='d-flex gap-2'>
               <img src={EurAsiaLogo} className='ui-footer-eurasia' alt="EurAsia logo" />
               <img src={ag_logo} className='ui-footer-agLogo' alt="Active Group logo" />
                </div>
                <div className='ui-footer-social d-flex flex-column align-items-center justify-content-center '>
                <p>Active Group dijitalda:</p>
                <div>
                <a href="http://instagram.com/activegroup.az/" target='blank'>
                <FontAwesomeIcon className='ui-footer-social-icon' icon={faInstagram}  />
                </a>
                <a href="https://www.linkedin.com/company/active-group-llc/" target='blank'>
                <FontAwesomeIcon className='ui-footer-social-icon' icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/activegroup.az" target='blank'>
                <FontAwesomeIcon className='ui-footer-social-icon' icon={faFacebook}  />
                </a> 
                 <a href="https://youtube.com/@activegroup_official?si=PtQ6UUP4Crq-vCDU" target='blank'>
                <FontAwesomeIcon className='ui-footer-social-icon' icon={faYoutube}  />
                </a>
            
                </div>
              </div>
             
              </div>

            <div className='col-lg-3 col-md-6 col-sm-6 col-6 '>
              <h4 className='ui-footer-title text-start'>
                <NavLink to={'/'}>
                Səhifələr
                </NavLink>
                </h4>
             <ul className='ui-footer-list list-unstyled'>
              <li><NavLink to='/' >Əsas səhifə</NavLink></li>
              <li><NavLink to='/about'>Haqqımızda</NavLink></li>
              <li><NavLink to='/brands'>Brendlər</NavLink></li>
              {/* <li><NavLink to='/certificates'>Sertifikatlar</NavLink></li> */}
              <li><NavLink to='/photoGallery'>Qalereya</NavLink></li>
              <li><NavLink to='/blogs'>Bloq</NavLink></li>
              <li><NavLink to='/contact'>Əlaqə</NavLink></li>
            </ul>
              </div> 

            <div className='col-lg-3 col-md-6 col-sm-6 col-6 '>
              <h4 className='ui-footer-title text-start'>
                <NavLink to={'/brands'}>Brendlər</NavLink>
              </h4>
              <ul className='ui-footer-list list-unstyled'>

                {[...brands]
                 .sort(() => 0.5 - Math.random())
                 .slice(0, 6)
                 .map((brand) => (
                   <li key={brand.id}>
                     <NavLink to={`/brands/${brand.name}`}>{brand.name}</NavLink>
                   </li>
                 ))}
              </ul>
              </div> 

            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <h4 className='ui-footer-title text-start'>
                <NavLink to={'/blogs'}>Bloqlar</NavLink>
              </h4>

             <ul className='ui-footer-list list-unstyled'>
              {
                [...blogs]
                .sort(()=> 0.5 - Math.random())
                .slice(0, 5)
                .map((blog) => (
                  <li key={blog.title}>
                    <NavLink to={`/blogs/${blog.slug}`}>{blog.title}</NavLink>
                  </li>
                ))
              }
            </ul>
              </div>
            </div>



            <div className='ui-footer-rights row'>
                <p>© 2026  <strong>Active Group</strong></p>
                <p>
                Müəllif hüquqları qorunur.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer