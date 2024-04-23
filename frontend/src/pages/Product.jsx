import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import useConversation from '../zustand/useConversation'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { selectedConversation, setSelectedConversation } = useConversation()

  
  const createConversation = async () => {
    try {
      if (product.owner) {
        console.log('Creating conversation with owner id:', product.owner._id)
        console.log('Token:', localStorage.getItem('token'))
        const { data } = await axios.post(`http://localhost:8000/conversation/${product.owner._id}`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        )
  
        console.log('Conversation created:', data)
        await setSelectedConversation(data)
        console.log('Selected conversation:', selectedConversation)
        navigate('/chat', { state: { conversation: data }})
      } else {
        console.log('Product has no owner')
      }
    } catch (error) {
      console.log('Error creating conversation:', error.response)
    }
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
    fetchProduct()
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
              className='w-[200px] h-[200px] object-cover'
            />
            <h1 className='text-3xl font-semibold'>{product.name}</h1>
            <p className='text-sm'>{product.description}</p>
            <p className='text-sm'>{product.owner ? product.owner.username : ''} {'<- owner'}</p>
            <p className='text-lg font-semibold'>${product.price_range}</p>
            {localStorage.getItem('token') && (
              <button onClick={createConversation} className='bg-teal-500 text-white rounded-md p-2 mt-2'>Message Seller</button>
            )}
            <Link to='/products' className='absolute bottom-20 text-gray-800 bg-teal-500 rounded-md p-2'>Back to Products</Link>
          </div>
        )}
    </div>
  )
}

export default Product