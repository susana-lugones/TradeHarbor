import React from 'react';
import './CSS/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About TradeHarbor</h1>
        <p>Your gateway to barter-based e-commerce.</p>
      </section>
      <section className="about-section">
        <h2>Our History</h2>
        <p>
          Founded in 2021, TradeHarbor was born from the idea that trade could be modernized for the digital age. Our founders noticed a gap in the market for a platform that supported bartering, and thus, TradeHarbor was created to revitalize this age-old practice.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a secure and accessible platform for people around the world to engage in trade. We aim to empower our users with the tools they need to exchange goods and services in a way that's both innovative and traditional.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          TradeHarbor envisions a global community connected through commerce without barriers. We strive to lead the charge in sustainable trade practices, creating a system where value is not just in currency, but in the quality and utility of goods and services.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Goals</h2>
        <p>
          In the next five years, TradeHarbor aims to expand its user base to include millions of active traders worldwide, develop a mobile application to trade on-the-go, and implement new features that make trading even easier and more equitable for all members of our community.
        </p>
      </section>
      <section className="about-section">
        <h2>Why Choose TradeHarbor?</h2>
        <p>
          At TradeHarbor, we pride ourselves on building a platform that prioritizes user satisfaction and community growth. Our innovative approach to e-commerce makes us the perfect choice for anyone looking to trade efficiently and effectively.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
