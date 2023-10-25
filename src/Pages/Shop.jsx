import React from 'react';
import Content from '../Components/Content/Content'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import Newcollections from '../Components/NewCollections/Newcollections';
import News from '../Components/News/News';

const Shop = () => {
  return (
    <div>
      <Content/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <News/>
    </div>
  )
}

export default Shop
