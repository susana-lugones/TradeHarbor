import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return (
    <div className='flex flex-grow bg-[#ececec] text-gray-800'>Product { id }</div>
  )
}

export default Product