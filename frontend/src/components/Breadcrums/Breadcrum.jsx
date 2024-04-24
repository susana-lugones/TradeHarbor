import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../../components/Assets/breadcrum_arrow.png'

// Frontend formatting so users can see the path they've taken to get to the current page
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
