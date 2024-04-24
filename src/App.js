import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
import AboutUs from './Pages/AboutUs';
import Testimonials from './Pages/Testimonials';
import React from 'react'
import new_collection from './Components/Assets/new_collections'
import Item from './Components/Item/Item'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/watches' element={<ShopCategory category="watches"/>}/>
        <Route path='/glasses' element={<ShopCategory category="glasses"/>}/>
        <Route path='/skirts' element={<ShopCategory category="skirts"/>}/>
        <Route path='/shoes' element={<ShopCategory category="shoes"/>}/>
        <Route path = "/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
          <Route path = '/cart' element={<Cart/>}/>
          <Route path = '/login' element={<LoginSignup/>}/>
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/FAQ' element={<FAQ/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

function Explore() {
  return (
    <div className='explore-container'>
    <div className='recent-searches-container'>
      <h1 className='recent-searches-title'>Recent Searches</h1>
      <div className='recent-searches-list'>
        <a className='search-link' href="/mens">Men</a>
        <a className='search-link' href="/womens">Women</a>
        <a className='search-link' href="/kids">Kids</a>
        <a className='search-link' href="/watches">Watches</a>
        <a className='search-link' href="/glasses">Glasses</a>
        <a className='search-link' href="/skirts">Skirts</a>
        <a className='search-link' href="/shoes">Shoes</a>
      </div>
    </div>
      <Routes>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/watches' element={<ShopCategory category="watches"/>}/>
        <Route path='/glasses' element={<ShopCategory category="glasses"/>}/>
        <Route path='/skirts' element={<ShopCategory category="skirts"/>}/>
        <Route path='/shoes' element={<ShopCategory category="shoes"/>}/>
      </Routes>
      <div className='new-collections'>
        <h1>Explore All Categories</h1>
        <hr />
        <div className="collections">
        {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
    </div>
  );
}


export default App;
