import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewCollections.css'
import Item from '../../components/Item/Item'

export const NewCollections = () => {

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