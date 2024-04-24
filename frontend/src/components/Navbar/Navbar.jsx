import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/TradeHarborLogo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { CiSquarePlus } from 'react-icons/ci'
import useConversation from '../../zustand/useConversation';

// import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setSelectedConversation } = useConversation()
  // const { getTotalCartItems } = useContext(ShopContext);

  const handleSignout = () => {
      localStorage.removeItem('token')
      setSelectedConversation(null)
      setIsSidebarOpen(false)
      navigate('/login')
  }

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
            {!localStorage.getItem('token') && <Link to="/login">Login</Link>}
            {!localStorage.getItem('token') && <Link to="/signup">Signup</Link>}
            {/* <Link to="/cart">
              <img src={cart_icon} alt="Cart"/>
              {/* <div className="nav-cart-count">{getTotalCartItems()}</div> 
            </Link> */}
        </div>
        <div className="for_cart">

        </div>
      </div>
      
      {localStorage.getItem('token') && <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li onClick={() => setIsSidebarOpen(false)} ><FaArrowLeft className='text-white' /></li>
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setIsSidebarOpen(false)}>Explore</Link></li>
          <li><Link to="/chat" onClick={() => setIsSidebarOpen(false)}>Message</Link></li>
          <li><Link to="/account" onClick={() => setIsSidebarOpen(false)}>Account</Link></li>
          <li><Link to='/createproduct' onClick={() => setIsSidebarOpen(false)}>Create Product</Link></li>
          <li onClick={handleSignout} className='cursor-pointer'><Link to='/'>Signout</Link></li>
        </ul>
      </div>}
    </>
  );
};

export default Navbar;
