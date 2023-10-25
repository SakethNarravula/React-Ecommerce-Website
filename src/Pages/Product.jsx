import React,{ useContext}from 'react';
import { ShopContext } from '../Context/Context';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import ProductDisplay from '../Components/Product/ProductDisplay';
import Descriptionbox from '../Components/Description Box/Descriptionbox';
import Relatedproducts from '../Components/RelatedProducts\'/Relatedproducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product
