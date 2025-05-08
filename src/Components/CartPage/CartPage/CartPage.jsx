import React from "react";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const getcartData = JSON.parse(localStorage.getItem("cartData"));
  const RemoveDuplicates = getcartData.filter(
    (item, index, self) =>
      index ===
      self.findIndex((item2) => item2.product_name === item.product_name)
  );
  console.log("gd", getcartData);
  const productCount = getcartData.reduce((acc, val) => {
    acc[val.product_name] = (acc[val.product_name] || 0) + 1;

    return acc;
  }, {});
  console.log("pc", productCount);
  const keys = Object.keys(productCount);
  
  return (
    <div className={styles.Parent}>
      {RemoveDuplicates?.map((items, i) => (
        <div className={styles.priceContainer}>
          <div>
            <img src={items.products_image} alt="img" />
          </div>
          <div>{items.product_name}</div>
          <div>₹{items.price}</div>
          <div>{productCount[items.product_name]}</div>
          <div>₹{productCount[items.product_name] * items.price}</div>
        </div>
      ))}
    </div>
  );
}
