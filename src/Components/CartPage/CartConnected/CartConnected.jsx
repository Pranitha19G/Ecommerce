import React, { useState } from 'react'
import Subtotal from '../Subtotal/Subtotal'
import CartPage from '../CartPage/CartPage';
import styles from './CartConnected.module.css';
import PaymentPagemodal from '../PaymentPage/PaymentPagemodal';

export default function CartConnected() {
  const[showPayment, setShowPayment]=useState(false)
  return (
    <div className={styles.cartpage}>
      <CartPage/>
      <Subtotal setShowPayment={setShowPayment}/>
      <PaymentPagemodal showPayment={showPayment}   setShowPayment={setShowPayment} />
    </div>
  )
}
