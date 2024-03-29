import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full flex-grow bg-[#ececec] text-gray-800 flex flex-col justify-center items-center'>
      <h2 className='text-3xl'>HOME</h2>
      <Link to='/products' className='bg-zinc-700 hover:bg-teal-500 text-white px-4 py-2 rounded-lg mt-4'>View Products</Link>
      <Link to='/about' className='bg-zinc-700 hover:bg-teal-500 text-white px-4 py-2 rounded-lg mt-4'>About Us</Link>
    </div>
  )
}

export default Home