import React, { useEffect, useState } from 'react'
import ActiveGroupLogo from '../../assets/images/AG-logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => setIsOpen(!isOpen);
    



 
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.ui-navbar-burger-menu') &&
      !event.target.closest('.burger-dropdown')
    ) {
      setIsOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


    
  return (
   
     <div className='ui-header'>
     <div>
        <div className='row align-items-center justify-content-between'>
    
        <div className='col-6 col-md-4 order-1 order-md-1'>
          <Link to='/'>
            <img className='ui-header-logo' src={ActiveGroupLogo} alt="logo"/>
          </Link>
        </div>
    
        <div className=' ui-header-slogan col-12 col-md-4 order-0 order-md-2 text-md-start'>
          <h1 className='ui-header-slogan-text'>Keyfiyyət üçün əzmlə!</h1>
        </div>
       
        <div className='col-6 col-md-4 order-2 order-md-3 d-lg-none p-0 d-flex justify-content-end'>
          <div className={`ui-navbar-burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className='ui-navbar-burger-menu-icon'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className='d-flex align-items-center justify-content-evenly p-1'>
        <div className='ui-navbar '>
          <div className='ui-navbar-bigScreen col-12'>
            <ul className='ui-navbar-list gap-5 list-unstyled mb-0'>
              <li><NavLink  className='ui-navbar-listItem' to='/'>Əsas səhifə</NavLink></li>
              <li><NavLink  className='ui-navbar-listItem' to='/about'>Haqqımızda</NavLink></li>
              <li><NavLink  className='ui-navbar-listItem' to='/brands'>Brendlər</NavLink></li>
              {/* <li><NavLink  className='ui-navbar-listItem' to='/certificates'>Sertifikatlar</NavLink></li> */}
              <li><NavLink  className='ui-navbar-listItem' to='/photoGallery'>Qalereya</NavLink></li>
              <li><NavLink  className='ui-navbar-listItem' to='/blogs'>Bloq</NavLink></li>
              <li><NavLink  className='ui-navbar-listItem' to='/contact'>Əlaqə</NavLink></li>
            </ul>
          </div>
          
          {isOpen && (
            <ul className='burger-dropdown list-unstyled' >
              <li><NavLink to='/' >Əsas səhifə</NavLink></li>
              <li><NavLink to='/about'>Haqqımızda</NavLink></li>
              <li><NavLink to='/brands'>Brendlər</NavLink></li>
              {/* <li><NavLink to='/certificates'>Sertifikatlar</NavLink></li> */}
              <li><NavLink to='/photoGallery'>Qalereya</NavLink></li>
              <li><NavLink to='/blogs'>Bloq</NavLink></li>
              <li><NavLink to='/contact'>Əlaqə</NavLink></li>
            </ul>
          )}
        </div>
        {/* <div className=''>
          <select name="lang" id="">
            <option value="aze" >az</option>
            <option value="rus">rus</option>
          </select>
        </div> */}
      </div>
     </div>
 
    </div>
  
  

  )
}

export default Navbar