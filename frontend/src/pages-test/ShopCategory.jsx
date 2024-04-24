import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CSS/ShopCategory.css'
import dropdown_icon from '../components-test/Assets/dropdown_icon.png'
import Item from '../components-test/Item/Item'

export const ShopCategory = () => {
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
    <div className='shop-category'>
      <div className="shopcategory-products">
        {productList.map((product, i) => {
          return <Item key={i} id={product._id} name={product.name} image={product.image_url} new_price={product.price_range} />
        })}

      </div>
    </div>
  )
}

export default ShopCategory