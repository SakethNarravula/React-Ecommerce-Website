import React,{useState} from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import Cart from '../../Pages/Cart';


const Navbar = () => {
    const [menu,setMenu]= useState("shop");
  return (
    <div className='navbar'>
        {/* Nav logo and brand name */}
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <h2>Urban Vogue</h2>
        </div>
        {/* Nav Menu */}
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none",color:"#000"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:"#000"}} to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"#000"}} to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#000"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        {/* Login and cart  */}
        <div className="nav-login-cart">
            <Link to="/login"><button><h4>Login</h4></button></Link>
            <Link to="/cart"><img className="cart" src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count"><h5>{Cart.length}</h5></div>
        </div>
    </div>
  )
}

export default Navbar
