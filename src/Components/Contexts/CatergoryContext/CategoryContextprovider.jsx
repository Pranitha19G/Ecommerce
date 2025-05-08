import React, { useState } from 'react'
import CategoryContext from './CategoryContext'

export default function CategoryContextprovider({children}) {
    const [category, setCategory] =useState("");

  return (
    <CategoryContext.Provider value={{category,setCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}
