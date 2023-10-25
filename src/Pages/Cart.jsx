import React from 'react';
import {useCart} from 'react-use-cart';
import './CSS/cart.css';


const Cart =() => {
  const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart();
  if(isEmpty) return <h2 className='empty'>Your Cart is Empty ...Please add products to cart</h2>
  return (
    <div>
     
    </div>
  )
}

export default Cart
