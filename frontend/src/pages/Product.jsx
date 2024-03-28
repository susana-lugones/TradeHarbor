import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-grow bg-[#1a1a1a] text-white'>Product { id }</div>
  )
}

export default Product