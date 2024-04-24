import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Breadcrum from '../components/Breadcrums/Breadcrum'
import ProductDisplay from '../components-test/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components-test/RelatedProducts/RelatedProducts'

const ProductTest = () => {
  // The id of the product is taken from the URL
  const { id } = useParams()
  // States used for rendering the product information
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)

  const navigate = useNavigate()


  
  // Fetch the product information from the API
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
    // Fetch the product and the logged in user through useEffect
    const getLoggedInUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/accountinfo', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
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
      {/* If the page is loading display the loading spinner else display the page */}
      {loading ?
        (
          <div className='flex items-center justify-center w-full'>
            <div className='loading loading-spinner'></div>
          </div>
        ) : (
          <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
          </div>
        )}
    </div>
  )
}

export default ProductTest