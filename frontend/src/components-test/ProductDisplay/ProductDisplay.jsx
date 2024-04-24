import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './ProductDisplay.css'
import ProductDropdown from '../../components/ProductDropdown'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  const { product } = props;
  const [message, setMessage] = useState('')
  // const [loading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  const navigate = useNavigate()


  const sendMessage = async (message) => {
    setLoading(true)

    try {
      const res = await axios.post(`http://localhost:8000/sendmessage/${product.owner._id}`, { message }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      const data = await res.data
      if (data.error) {
        throw new Error(data.error)
      }
      setMessages([...messages, data])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      navigate('/chat')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage('')
  }

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/accountinfo', {
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
        await setLoggedInUser(response.data._id)
      }
      catch (error) {
        console.log(error)
      }
    }
    getLoggedInUser()
  }, [])


  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image_url} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        {product.owner && <Link to={`/user/${product.owner ? product.owner._id : ''}`}><h2>{product.owner.username}</h2></Link>}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">${product.price_range}</div>
        </div>
        <div className="productdisplay-right-description pb-3">{product.description}</div>
        
        {localStorage.getItem('token') && product.owner && product.owner._id !== loggedInUser && (
          <>
            <textarea className='p-2 bg-zinc-200 rounded-lg' placeholder='Send a Message...' onChange={(e) => setMessage(e.target.value)} value={message} />
            <button onClick={handleSubmit} className='bg-teal-500 text-white rounded-md p-2 mt-2'>Message Seller</button>
            <ProductDropdown offeredProduct={product} />
          </>
        )}
        {/* onClick={()=>{addToCart(product.id)}} */}
      </div>
    </div>
  )
}

export default ProductDisplay