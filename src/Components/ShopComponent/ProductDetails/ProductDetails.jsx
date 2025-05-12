import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductDetails() {
  const [quantityCount, setquantityCount] = useState(0);
  const dynamicid = useParams();
  console.log("id", dynamicid);
  const { state: items } = useLocation();
  console.log("items", items);

  const decrement = () => {
    if (quantityCount > 0) {
      setquantityCount((prev) => prev - 1);
    }
  };
  const increment = () => setquantityCount((prev) => prev + 1);

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.parent}>
        <div className={styles.leftdiv}>
          <img src={items.products_image} />
        </div>
        <div className={styles.rightdiv}>
          <div> {items.product_name}</div>
          <div className={styles.price}> ₹{items.price}</div>
          <div className={styles.rating}> {items.rating}</div>
          <div className={styles.description}> {items.description}</div>
          <div className={styles.productDetailsbtn}>
            <div className={styles.buttonsdiv}>
              <div className={styles.quantityCount}>
                <button onClick={decrement}>-</button>
                <button>{quantityCount}</button>
                <button onClick={increment}>+</button>
              </div>
              <div className={styles.wishList}>
                <button>
                  <FavoriteBorderIcon />
                 <span> wishList </span> 
                </button>
              </div>
            </div>
            <div className={styles.addtocart}>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
