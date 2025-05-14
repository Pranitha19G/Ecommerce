import React, { useState } from "react";
import Subtotal from "../Subtotal/Subtotal";
import CartPage from "../CartPage/CartPage";
import styles from "./CartConnected.module.css";
import PaymentPagemodal from "../PaymentPage/PaymentPagemodal";
import {  useNavigate } from "react-router-dom";

export default function CartConnected() {
  const [showPayment, setShowPayment] = useState(false);
  const getcartData = JSON.parse(localStorage.getItem("cartData"));
 const navigate=useNavigate();

  const gotoshop=()=>{
      navigate("/shop")
  }
  return (
    <>
      {getcartData?.length > 0 ? (
        <div className={styles.cartpage}>
          <>
            <CartPage />
            <Subtotal setShowPayment={setShowPayment} />
            <PaymentPagemodal
              showPayment={showPayment}
              setShowPayment={setShowPayment}
            />
          </>
        </div>
      ) : (
        <div className={styles.yourCart}>
        <div >Your Cart is Empty</div>
        <div  className={styles.gotoshop} onClick={()=>gotoshop()}>Go to Shop Page</div>
        </div>
      )}
    </>
  );
}
