import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewCollections.css'
import Item from '../../components/Item/Item'

export const NewCollections = () => {
  // State to hold the list of products
  const [productList, setProductList] = useState([])

  // Function to fetch the products from the server
  const fetchProducts = async () => {
    try {
      // Send a GET request to the server to get all products
      const { data } = await axios.get('http://localhost:8000/allproducts')
      setProductList(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch the products when the component mounts
  useEffect(() => {
    fetchProducts()
  }, [])

  // Display the new products
  return (
    <div className='new-collections'>
        <h1>Recent Products Added</h1>
        <hr />
        <div className="collections">
        {productList.slice(-6).map((product,i)=>{
                return <Item key={i} id={product._id} name={product.name} image={product.image_url} new_price={product.price_range}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections