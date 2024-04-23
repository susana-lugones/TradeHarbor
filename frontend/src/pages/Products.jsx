import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
  // Dummy product list
  const [productList, setProductList] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/allproducts')
      setProductList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='flex flex-grow w-full justify-center items-center bg-[#ececec] text-gray-800'>
      <div className='grid grid-cols-3 gap-4'>
        {productList.map((product) => (
          <div key={product._id} >
            <Link to={`/product/${product._id}`}>
              {/* <img
                src={product.image}
                alt={product.name}
                className='w-[200px] h-[200px] object-cover'
              /> */}
              <p>{product.image_url}</p>
              {product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products