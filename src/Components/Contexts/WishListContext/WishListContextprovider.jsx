import React, { useState } from 'react'
import WishListContext from './WishListContext'

export default function WishListContextprovider({children}) {
    const[wishListArray, setWishListArray]=useState([]);
    console.log("wishListArray" ,wishListArray);
    

  return (
    <WishListContext.Provider value={{wishListArray, setWishListArray}}>
      {children}
    </WishListContext.Provider>
  )
}
