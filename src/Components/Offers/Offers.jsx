import React from 'react';
import './offers.css';
import Exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offers for you</h2>
            <p>Only on Best Sellers products</p>
            <button>Check Now</button>
      </div>
      <div className="offers-right">
            <img src={Exclusive} alt="offersimage" />
      </div>
    </div>
  )
}

export default Offers
