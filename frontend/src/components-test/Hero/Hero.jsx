import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Find Your Favorites, All You Need Is Here</h2>
        <div className="hero-latest-btn">
          <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <div>Shop Now</div>
            <img src={arrow_icon} alt="arrow icon"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
