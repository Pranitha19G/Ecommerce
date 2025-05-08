import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import CartPage from '../CartPage/CartPage';
import styles from './CartConnected.module.css';

export default function CartConnected() {
  return (
    <div className={styles.cartpage}>
      <CartPage/>
      <Subtotal/>
    </div>
  )
}
