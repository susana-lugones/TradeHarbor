import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CSS/ShopCategory.css'
import Item from '../components/Item/Item'

export const ShopCategory = () => {
  const [productList, setProductList] = useState([])

  const fetchProducts = async () => {
    try {
      // Fetch all the products from the backend and set the productList state
      const { data } = await axios.get('http://localhost:8000/allproducts')
      setProductList(data)
    } catch (error) {
      console.log(error)
    }
  }

  // UseEffect to fetch all the products
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
        {/* Render all the fetched products as item elements */}
        {productList.map((product, i) => {
          return <Item key={i} id={product._id} name={product.name} image={product.image_url} new_price={product.price_range} />
        })}

      </div>
    </div>
  )
}

export default ShopCategory