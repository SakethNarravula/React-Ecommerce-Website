import React from 'react';
import './news.css'

const News = () => {
  return (
    <div className='news'>
        <h2>Get Exclusive Offers on your Email</h2>
        <p>Subscribe to our Newsletter and stay updated to get new offers</p>
        <div>
            <input type="email" placeholder='Please Enter your Email id'/>
            <button>Subscribe!</button>
        </div>
    </div>
  )
}

export default News
