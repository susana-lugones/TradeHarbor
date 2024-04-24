import React from 'react'
import Hero from '../components-test/Hero/Hero'
import NewCollections from '../components-test/NewCollections/NewCollections'

export const Shop = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Hero/>
      <NewCollections/>
    </div>
  )
}


export default Shop