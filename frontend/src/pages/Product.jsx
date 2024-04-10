import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/product/${id}`)
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  return (
    <div className='flex flex-grow bg-[#ececec] text-gray-800'>
      <div className='flex flex-col items-center justify-center w-full'>
        <img
          src={product.image_url}
          alt={product.name}
          className='w-[200px] h-[200px] object-cover'
        />
        <h1 className='text-3xl font-semibold'>{product.name}</h1>
        <p className='text-sm'>{product.description}</p>
        <p className='text-sm'>{} {'<- owner'}</p>
        <p className='text-lg font-semibold'>${product.price_range}</p>
        <Link to='/products' className='absolute bottom-20 text-gray-800 bg-teal-500 rounded-md p-2'>Back to Products</Link>
      </div>
    </div>
  )
}

export default Product