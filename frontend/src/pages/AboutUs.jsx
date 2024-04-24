import React from 'react';
import './CSS/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About TradeHarbor</h1>
        <p>Your gateway to barter-based e-commerce.</p>
      </div>
      <div className="about-content">
        <h2>Our Solution</h2>
        <p>
          TradeHarbor is an innovative e-commerce platform designed to enable people to trade items of similar value. 
          Our platform facilitates the creation of user accounts, allowing individuals and businesses to list items for trade. 
          Users can initiate trades by offering items of equivalent value, which can then be accepted or declined by the other party, 
          supporting a dynamic and user-driven marketplace.
        </p>
        <h2>Project Vision</h2>
        <p>
          For individuals and businesses seeking alternative methods of commerce, TradeHarbor offers a digital marketplace 
          that facilitates seamless transactions without the traditional reliance on currency. Unlike conventional e-commerce platforms, 
          our product provides a versatile environment where users can engage in mutually beneficial trades, thus promoting a sustainable 
          and community-oriented trading experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
