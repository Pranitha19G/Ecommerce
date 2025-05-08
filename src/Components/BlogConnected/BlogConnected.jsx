import React, { useState } from 'react'
import BlogPage from '../Blog/BlogHome/BlogPage'
import BlogCards from '../Blog/BlogCards/BlogCards';
import Modalpage from '../Modal/Modalpage';
export default function BlogConnected() {
  const [openModal, setOpenModal]=useState(false)
  return (
    <div>
      <BlogPage setOpenModal={setOpenModal}/>
      <BlogCards/>
      <Modalpage openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  )
}
