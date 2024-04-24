import React, { useState } from 'react';
import './CSS/FAQ.css';
import { useNavigate  } from 'react-router-dom';

const FAQItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
      <div className="faq-item-title">
        <div className="faq-title-text">{title}</div>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div className="faq-item-content">{content}</div>
    </div>
  );
};

const FAQ = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contact'); 
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <h1 className="faq-description">Got more questions? Feel free to contact us for more information</h1>
        <button className="faq-button" onClick={handleContactUsClick}>Contact us</button>
      </div>
      <ul className="faq-list">
        <FAQItem title="How can I accept a trade offer?" content="To accept a trade offer, navigate to your trades dashboard, select the offer you wish to accept, and click 'Accept'. Ensure you review the offer details before confirming your acceptance." />
        <FAQItem title="Can I remove reviews?" content="Reviews can only be removed if they violate our community guidelines or terms of service. To request a review removal, please report it through our customer support with a valid reason." />
        <FAQItem title="What do badges mean?" content="Badges are a way to recognize and reward users for their trading activities, achievements, and contributions to the community. Each badge has specific criteria and signifies a different level of accomplishment." />
        <FAQItem title="How can I download my trade confirmation?" content="After completing a trade, you can download your trade confirmation by going to the 'History' section of your account, selecting the relevant trade, and clicking the 'Download Confirmation' button." />
        <FAQItem title="What payment methods are accepted?" content="We accept a variety of payment methods including credit/debit cards, PayPal, and direct bank transfers. For more details on each payment method, please visit our payment information page."/>
      </ul>
    </div>
  );
};

export default FAQ;
