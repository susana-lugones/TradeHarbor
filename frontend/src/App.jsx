import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Products from './pages/Products'
import About from './pages/About'
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
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
