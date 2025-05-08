import React, { useState } from 'react';
import ShopContext from './ShopContext';


export default function ShopContextprovider({children}) {
    const [inputContext, setInputContext]=useState("")
  return (
    <ShopContext.Provider value={{inputContext, setInputContext}}>
      {children}
    </ShopContext.Provider>
  )
}
