import React from 'react'

const CreateProduct = () => {
  return (
    <div className='flex flex-grow justify-center items-center bg-[#1a1a1a] text-white'>
      <div className='flex flex-col gap-4 p-4 bg-zinc-700 rounded-md'>
        <h1 className='text-3xl font-semibold'>Create Product</h1>
        <form className='flex flex-col gap-3'>
          <input type='text' placeholder='Product Name' className='p-2 bg-zinc-600 text-white rounded-lg'/>
          <input type='text' placeholder='Product Description' className='p-2 bg-zinc-600 text-white rounded-lg'/>
          <input type='text' placeholder='Product Image URL' className='p-2 bg-zinc-600 text-white rounded-lg'/>
          <button type='submit' className='p-2 bg-zinc-600 hover:bg-teal-600 text-white rounded-lg'>Create Product</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct