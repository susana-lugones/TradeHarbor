import React from 'react'

const CreateProduct = () => {
  return (
    <div className='flex flex-grow justify-center items-center bg-[#ececec] text-gray-800'>
      <div className='flex flex-col gap-4 p-4 bg-teal-500 rounded-md'>
        <h1 className='text-3xl font-semibold'>Create Product</h1>
        <form className='flex flex-col gap-3'>
          <input type='text' placeholder='Product Name' className='p-2 bg-zinc-200 rounded-lg'/>
          <input type='text' placeholder='Product Description' className='p-2 bg-zinc-200 rounded-lg'/>
          <input type='text' placeholder='Product Image URL' className='p-2 bg-zinc-200 rounded-lg'/>
          <button type='submit' className='p-2 bg-[#ececec] hover:bg-zinc-200 rounded-lg'>Create Product</button>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct