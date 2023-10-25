import React from 'react';
import './breadcrum.css';
import arrowicon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
    const {product} =props;
  return (
    <div className='breadcrum'>
      Home <img src={arrowicon} alt="arrowicon" />Shop <img src={arrowicon} alt="arrowicon" />{product.category} <img src={arrowicon} alt="arrowicon" />{product.name}
    </div>
  )
}

export default Breadcrumb
