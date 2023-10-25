import React from 'react'
import './CSS/shopcategory.css';
// import { ShopContext } from '../Context/Context';
import dropdownicon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
import all_product from '../Components/Assets/all_product';


const Shopcategory = (props) => {
  // const {all_product}= useContext(ShopContext);
  // const filteredProducts = all_product.filter(item => props.category === item.category);
  
  return (
    <div className='shop-category'>
        <img  className="shopcategorybanner" src={props.banner} alt="carousel" />
        <div className="shop-category-indexSort">
            <p>
              <span>
                Showing 1-13
              </span>
              out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdownicon} alt="dropdown icon" />
            </div>
        </div>
        <div className="shopcategory-products">
        {all_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default Shopcategory
