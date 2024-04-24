import React from 'react'
import './RelatedProducts.css'
import data_product from '../../components/Assets/data'
import Item from '../../components/Item/Item'

// Hard coded data for related products, can be replaced with data from an api call GET request of similar products
export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}
        </div>

    </div>
  )
}

export default RelatedProducts
