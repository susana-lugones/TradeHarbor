// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';


// export const ProductTest = () => {
//   // const {all_product} = useContext(ShopContext);
//   const [product, setProduct] = useState({});
//   const { productId } = useParams();

//   const fetchProduct = async () => {
//     try {
//       console.log(productId)
//       const { data } = await axios.get(`http://localhost:8000/product/${productId}`)
//       setProduct(data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchProduct()
//   }, [])

//   return (
//     <div>
//       <Breadcrum product={product}/>
//       <ProductDisplay product={product}/>
//       <DescriptionBox/>
//       <RelatedProducts/>
//     </div>
//   )
// }

// export default ProductTest

import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Breadcrum from '../components-test/Breadcrums/Breadcrum'
import ProductDisplay from '../components-test/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components-test/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components-test/RelatedProducts/RelatedProducts'
import ProductDropdown from '../components/ProductDropdown'

const ProductTest = () => {
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