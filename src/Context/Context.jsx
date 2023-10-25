import React,{createContext,useState}from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for(let index=0;index<all_product.length+1;index++){
    cart[index]=0;
  }
}


const ShopContextProvider = (props) => {

  const [cartItems,setCartItems]= useState(getDefaultCart());

  const addTocart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    // console.log(cartItems);
  }
  const removefromcart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const contextValue={all_product,cartItems,addTocart,removefromcart};
  return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
