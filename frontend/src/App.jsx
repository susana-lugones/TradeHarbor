import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Account from './pages/Account'

import CreateProduct from './pages/CreateProduct'
import AboutUs from './pages-test/AboutUs'
import Chat from './pages/Chat'
import User from './pages/User'
import Footer from './components/Footer/Footer'

import SignupTest from './pages/SignupTest'
import LoginTest from './pages/Login'
import Shop from './pages/Shop'
import ProductTest from './pages/Product'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import ContactUs from './pages/ContactUs'
import ShopCategory from './pages/ShopCategory'

function App() {

  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="flex flex-col flex-grow h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        {isUserSignedIn && <Route path="/account" element={<Account />} />}
        {isUserSignedIn && <Route path="/createproduct" element={<CreateProduct />} />}
        <Route path="/product/:id" element={<ProductTest />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/signup" element={<SignupTest />} />
        <Route path="/login" element={<LoginTest />} />
        <Route path="/producttest/:id" element={<ProductTest />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/shop' element={<ShopCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
