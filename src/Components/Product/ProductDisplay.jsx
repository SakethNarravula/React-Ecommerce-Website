import React from 'react';
import './productdisplay.css';
import staricon from '../Assets/star_icon.png'
import stardullicon from'../Assets/star_dull_icon.png'
import { useCart } from 'react-use-cart';


const ProductDisplay = (props,id) => {
    const {product,productId}=props;
    console.log(props.id)
    const {addItem}=useCart();
    //
    
    // // const [show,setShow]=useState(true);

    // const [cart,setCart]=useState([]);
    
    // function addTocart(product){
    //     cart.forEach((item)=>{
    //     setCart(product.id)
    //     })
        
    // }
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                    <img src={product.image} alt="productimage" />
                    <img src={product.image} alt="productimage" />
                    <img src={product.image} alt="productimage" />
                    <img src={product.image} alt="productimage" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="productimage" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.name}</h2>
            <div className="productdisplay-right-star">
                    <img src={staricon} alt="staricon" />
                    <img src={staricon} alt="staricon" />
                    <img src={staricon} alt="staricon" />
                    <img src={staricon} alt="staricon" />
                    <img src={stardullicon} alt="stardullicon" />
                    <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda non? Laborum, tempore in! Dignissimos enim harum possimus, et, accusamus asperiores iusto facere eaque aspernatur tempora ipsam excepturi, qui atque.
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addItem(product.id)}}>Add to cart</button>
            <p>Item:{productId}</p>
            <p className="productdisplay-right-category"><span>Category:</span>Women,T-shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern,Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
