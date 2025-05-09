import React, { useState } from 'react'
import ShopCategories from '../ShopCategories/ShopCategories'
import ShopPage from '../../Shop/ShopPage'
import ShopHome from '../../Shop/ShopHome/ShopHome'
import Pagination from '../../Pagination/Pagination'

export default function ShopComponentConnected() {
  
  return (
    
    <div>
      <ShopHome/>
      <ShopCategories />
      <ShopPage />
      <Pagination/>
    </div>
  )
}
