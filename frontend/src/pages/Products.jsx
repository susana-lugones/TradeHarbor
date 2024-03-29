import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  // Dummy product list
  const productList = [
    {
      _id: '1',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random/200x200',
    },
    {
      _id: '2',
      name: 'Product 2',
      image: 'https://source.unsplash.com/random/200x200',
    },
    {
      _id: '3',
      name: 'Product 3',
      image: 'https://source.unsplash.com/random/200x200',
    },
    {
      _id: '4',
      name: 'Product 4',
      image: 'https://source.unsplash.com/random/200x200',
    },
    {
      _id: '5',
      name: 'Product 5',
      image: 'https://source.unsplash.com/random/200x200',
    }]

  return (
    <div className='flex flex-grow w-full justify-center items-center bg-[#ececec] text-gray-800'>
      <div className='grid grid-cols-3 gap-4'>
        {productList.map((product) => (
          <div key={product._id} >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className='w-[200px] h-[200px] object-cover'
              />
              {product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products