import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

export default function CartContextprovider({ children }) {
    const[cart, setCart]=useState([]);
    console.log("cart",cart.length);
    
  
    
  return (
  
  <CartContext.Provider value={{cart, setCart}}>
    
    {children}

   </CartContext.Provider>
  )
}
