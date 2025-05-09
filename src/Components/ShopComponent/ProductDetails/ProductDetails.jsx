import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const dynamicid= useParams()
  return (
    <div>
      ProductDetails{dynamicid}
    </div>
  )
}
