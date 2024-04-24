import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA 
          DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION
          BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA 
          DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION </p>
        <p>
          222 BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA 
          DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION
          BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA 
          DESCRIPTION BLAH BLHA DESCRIPTION BLAH BLHA DESCRIPTION
        </p>
      </div>

    </div>
  )
}

export default DescriptionBox