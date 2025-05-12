import React from "react";
import Button from "@mui/material/Button";
import styles from "./Subtotal.module.css";

export default function Subtotal({setShowPayment}) {
  const getcartData = JSON.parse(localStorage.getItem("cartData"));

  const grandTotal = getcartData.reduce((acc, val) => {
    console.log("val", acc);
    
    return acc + Number(val.price);
  },0);

  const modalfun=()=>{
    setShowPayment((prev)=>!prev)
  }

  return (
    <div className={styles.Parent}>
      <div className={styles.cartPage}>
        <div className={styles.totaldiv}>
          <h2>SubTotal</h2>
          <div className={styles.grandTotal}>₹{grandTotal}</div>
        </div>
        <Button variant="contained" onClick={()=>modalfun()}>Pay Now </Button>
      </div>
    </div>
  );
}
