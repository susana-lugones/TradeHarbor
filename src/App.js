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
    <div>
      <h1>Recent Searches</h1>
      <ul>
        <li><a href="/mens">Men</a></li>
        <li><a href="/womens">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/watches">Watches</a></li>
        <li><a href="/glasses">Glasses</a></li>
        <li><a href="/skirts">Skirts</a></li>
        <li><a href="/shoes">Shoes</a></li>
      </ul>
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
