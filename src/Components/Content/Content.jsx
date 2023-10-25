import React from 'react';
import './content.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from'../Assets/arrow.png';
import image from '../Assets/hero_image.png';
const Content = () => {
  return (
    <div className="content">
      <div className="content-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-icon">
              <p>New</p>
              <img src={hand_icon} alt="icon" />
            </div>
            <p>Collections</p>
            <p>For everyone</p>
        </div>
        <div className="latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="content-right">
        <img src={image} alt="heroimage" />
      </div>
    </div>
  )
}

export default Content
