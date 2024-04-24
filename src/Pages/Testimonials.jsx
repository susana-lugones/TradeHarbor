import React, { useState } from 'react';
import './CSS/Testimonials.css';

const testimonials = [
  { id: 1, quote: "TradeHarbor has revolutionized the way we think about trading. The platform is user-friendly and incredibly efficient.", author: "Jane Doe, Entrepreneur" },
  { id: 2, quote: "Thanks to TradeHarbor, we can exchange goods with others who value our products as much as we do.", author: "John Smith, Small Business Owner" },
  { id: 3, quote: "TradeHarbor provides an excellent platform for trading items without the need for cash transactions. It's seamless and straightforward.", author: "Sarah Lee, Freelancer" },
  { id: 4, quote: "I've met so many amazing traders on TradeHarbor. It's a community as much as it is a marketplace.", author: "Miguel Sanchez, Collector" },
  { id: 5, quote: "As an artist, TradeHarbor has allowed me to trade my art for wonderful treasures. It's a unique experience.", author: "Alicia Yoon, Artist" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="testimonials-container">
      <h1>What Our Users Say</h1>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((test, index) => (
            <div key={test.id} className="testimonial">
              <p>"{test.quote}"</p>
              <small>- {test.author}</small>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevTestimonial}>&#10094;</button>
      <button onClick={nextTestimonial}>&#10095;</button>
    </div>
  );
};

export default Testimonials;
