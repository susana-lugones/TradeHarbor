import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleItems, setVisibleItems] = useState(8);

  const loadMoreItems = () => {
    setVisibleItems(currentVisible => currentVisible + 8); 
  };

  const displayedProducts = all_product.filter(item => item.category === props.category)
                                       .slice(0, visibleItems);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(visibleItems, displayedProducts.length)}</span> out of {all_product.filter(item => item.category === props.category).length} products
        </p>
      </div>
      <div className="shopcategory-products">
        {displayedProducts.map((item, index) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
      {visibleItems < all_product.filter(item => item.category === props.category).length && (
        <button className="shopcategory-loadmore" onClick={loadMoreItems}>
          Explore More
        </button>  
      )}
    </div>
  );
}

export default ShopCategory;
