import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Products from './pages/Products'
import Product from './pages/Product'
import CreateProduct from './pages/CreateProduct'
import About from './pages/About'
import Chat from './pages/Chat'
import Footer from './components/Footer'

function App() {

  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {isUserSignedIn && <Route path="/account" element={<Account />} />}
        <Route path="/products" element={<Products />} />
        {isUserSignedIn && <Route path="/createproduct" element={<CreateProduct />} />}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
