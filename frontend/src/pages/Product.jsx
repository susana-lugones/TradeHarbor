import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductDropdown from '../components/ProductDropdown'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
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

  const fetchProduct = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`http://localhost:8000/product/${id}`)
      setProduct(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
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
    fetchProduct()
    getLoggedInUser()
  }, [id])

  return (
    <div className='flex flex-grow bg-[#ececec] text-gray-800'>
      {loading ?
        (
          <div className='flex items-center justify-center w-full'>
            <div className='loading loading-spinner'></div>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center w-full'>
            <img
              src={product.image_url}
              alt={product.name}
              className='w-auto h-auto object-cover'
            />
            <h1 className='text-3xl font-semibold'>{product.name}</h1>
            <p className='text-sm'>{product.description}</p>
            <Link to={`/user/${product.owner ? product.owner._id : ''}`}><p className='text-sm'>{product.owner ? product.owner.username : ''}</p></Link>
            <p className='text-lg font-semibold'>${product.price_range}</p>
            {localStorage.getItem('token') && product.owner && product.owner._id !== loggedInUser && (
              <>
                <textarea className='p-2 bg-zinc-200 rounded-lg' placeholder='Send a Message...' onChange={(e) => setMessage(e.target.value)} value={message} />
                <button onClick={handleSubmit} className='bg-teal-500 text-white rounded-md p-2 mt-2'>Message Seller</button>
                <ProductDropdown offeredProduct={product} />
              </>
            )}
            <Link to='/products' className='absolute bottom-20 text-gray-800 bg-teal-500 rounded-md p-2'>Back to Products</Link>
          </div>
        )}
    </div>
  )
}

export default Product