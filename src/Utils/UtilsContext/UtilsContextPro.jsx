import React, { useState } from "react";
import UtilsContext from "./UtilsContext";

export default function UtilsContextPro({ children }) {
     const [cartProducts, setCartProducts] = useState([]);
    
      const addtofun = (recieve) => {
        setCartProducts((prev) => [...prev, recieve]);
        console.log("cartProducts", cartProducts);
      };
  return(
  <UtilsContext.Provider value={{cartProducts, setCartProducts, addtofun }}>
    {children}
    </UtilsContext.Provider>
  );
}
