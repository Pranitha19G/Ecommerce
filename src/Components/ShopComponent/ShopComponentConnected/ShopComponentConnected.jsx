import React, { useState } from 'react'
import ShopCategories from '../ShopCategories/ShopCategories'
import ShopPage from '../../Shop/ShopPage'

export default function ShopComponentConnected() {
  
  return (
    <div>
      <ShopCategories />
      <ShopPage />
    </div>
  )
}
