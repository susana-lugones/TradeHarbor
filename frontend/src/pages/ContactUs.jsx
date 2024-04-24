import React, { useState } from 'react';
import './CSS/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', { name, email, phone, message });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="Your phone number" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info-container">
        <h1>Contact Us</h1>
        <p>For questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
        <div className="contact-details">
          <div className="contact-item">
            <span>Phone: +123-456-7890</span>
          </div>
          <div className="contact-item">
            <span>Email: hi@thisIsTradeHarbor.com</span>
          </div>
          <div className="contact-item">
            <span>Address: Any Address, Any City, GAINESVILLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
