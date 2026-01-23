import React from 'react'
import brands from '../../../data/brands'
import { Link } from 'react-router-dom'
import '../scss/brandssection/BrandsSection.css'

const BrandsSection = () => {

  return (

    <div className='ui-brands'>
    <div className='container'>
      <div className="row gap-4 align-items-center justify-content-center">
        {brands.map((brand) => (
          <div key={brand.id} className="ui-brands-brand  col-sm-4 col-md-3 col-lg-1">
            <Link 
              to={`/brands/${brand.name}`} 
              className="text-decoration-none d-flex flex-column p-3 align-items-center h-100"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="img-fluid" 
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default BrandsSection