import React from 'react'
import Hero from '../components/Hero/Hero'
import NewCollections from '../components-test/NewCollections/NewCollections'

export const Shop = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Render the two components for the home shop page */}
      <Hero/>
      <NewCollections/>
    </div>
  )
}


export default Shop