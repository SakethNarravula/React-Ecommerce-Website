import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import menbanner from './Components/Assets/banner_mens.png';
import womenbanner from './Components/Assets/banner_women.png';
import kidbanner from './Components/Assets/banner_kids.png';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Logins from './Pages/Logins';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <BrowserRouter>
      <div>
       
        <Navbar/>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Shop/>}/>
              <Route path="/mens" element={<Shopcategory banner={menbanner} category="mens"/>}/>
              <Route path="/womens" element={<Shopcategory banner={womenbanner} category="womens"/>}/>
              <Route path="/kids" element={<Shopcategory banner={kidbanner} category="kids"/>}/>
              <Route path="/product" element={<Product/>}>
                <Route path=":productId" element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path="/signup" element={<Login/>}/>
              <Route path="/login" element={<Logins/>}/>
            </Routes>
          </CartProvider>
        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App
