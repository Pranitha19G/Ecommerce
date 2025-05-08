import React from "react";
import Button from "@mui/material/Button";
import styles from "./Subtotal.module.css";

export default function Subtotal() {
  const getcartData = JSON.parse(localStorage.getItem("cartData"));

  const grandTotal = getcartData.reduce((acc, val) => {
    return acc + val.price;
  }, 0);

  return (
    <div className={styles.Parent}>
      <div className={styles.cartPage}>
        <div className={styles.totaldiv}>
          <h2>SubTotal</h2>
          <div className={styles.grandTotal}>{grandTotal}</div>
        </div>
        <Button variant="contained">Checkout </Button>
      </div>
    </div>
  );
}
