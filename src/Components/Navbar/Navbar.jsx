import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/TradeHarborLogo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="top-navbar">
        <div className="nav-logo" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <img src={logo} alt="TradeHarbor" style={{cursor: 'pointer'}} />
            <p>TradeHarbor</p>
        </div>

        <div className="top-nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart">
              <img src={cart_icon} alt="Cart"/>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </Link>
        </div>
        <div className="for_cart">

        </div>
      </div>
      
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/explore" onClick={() => setIsSidebarOpen(false)}>Explore</Link></li>
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Dashboard</Link></li>
          <li><Link to="/mens" onClick={() => setIsSidebarOpen(false)}>Message</Link></li>
          <li><Link to="/womens" onClick={() => setIsSidebarOpen(false)}>Settings</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
