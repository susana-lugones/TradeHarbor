import React from 'react'
import './Footer.css'
import footer_logo from '../../components/Assets/TradeHarborLogo.png'

import { Link } from 'react-router-dom';

// Footer component to display the footer of the website
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>TradeHarbor</p>
        </div>
        <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ TradeHarbor 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer