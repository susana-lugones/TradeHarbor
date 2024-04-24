import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

// Not implemented in the current version of the app, use a GET request to search for inputted user
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-teal-500 text-white'><IoSearchSharp className='w-6 h-6 outline-none' /></button>
    </form>
  )
}

export default SearchInput