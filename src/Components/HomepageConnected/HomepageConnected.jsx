import React from 'react'
import HomePage from '../HomeComponent/Home/HomePage'
import Simpleunique from '../HomeComponent/SimpleUnique/Simpleunique'
import Roompage from '../HomeComponent/Rooms/Roompage'
import Shippingpage from '../HomeComponent/Shipping/Shippingpage'
import Livingroompage from '../HomeComponent/Livingroom/Livingroompage'

export default function HomepageConnected() {
  return (
    <div>
      <HomePage/>
      <Simpleunique/>
      <Roompage />
      <Shippingpage/>
      <Livingroompage />

    
    </div>
  )
}
