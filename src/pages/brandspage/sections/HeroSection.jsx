

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/herosection/HeroSection.css';
import brands from '../../../data/brands';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    const prev = activeIndex === 0 ? brands.length - 1 : activeIndex - 1;
    const next = activeIndex === brands.length - 1 ? 0 : activeIndex + 1;
    return [
      { ...brands[prev], position: 'prev' },
      { ...brands[activeIndex], position: 'active' },
      { ...brands[next], position: 'next' },
    ];
  };

  const visibleLogos = getVisibleLogos();
  const activeBrand = brands[activeIndex];

  return (
    <div className="hero-wrapper" style={{ background: activeBrand.background }}>
      <div className="hero-content">
        <div className="hero-text">
          <h2>{activeBrand.name}</h2>
          <p>{activeBrand.title}</p>
          <Link to={`/brands/${activeBrand.name}`} className="detail-link">
            Daha çox →
          </Link>
        </div>

        <div className="hero-logos">
          <div className="logo-strip" >
            {visibleLogos.map((brand, index) => (
              <div  key={index} className={`logo ${brand.position} bg-white`}>
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
              />
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
