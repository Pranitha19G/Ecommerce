import React from "react";
import styles from "./OrderDetails.module.css";
import { useNavigate } from "react-router-dom";
export default function OrderDetails() {
  const orderdetailsgetting = JSON.parse(localStorage.getItem("orderdetails"));
  console.log("orderdetailsgetting", orderdetailsgetting);
  const navigate=useNavigate();

  const noOrdersfun=()=>{
     navigate('/shop')
  }

  return (
    <>
    {orderdetailsgetting?.length>0?(
      <div className={styles.OrderDetails}>
      {orderdetailsgetting?.map((val, i) => (
        <div key={val.id} className={styles.detailsContainer}>
          <div className={styles.leftimg}>
            <img src={val.products_image} alt="image" />
          </div>
          <div>{val.product_name}</div>
          <div>{val.price}</div>
          <div>{val.rating}</div>
          </div>
      ))}
    </div>
    ):(
      <div className={styles.OrderDetailscart}>
      <div className={styles.noOrders} >No orders</div>
      <div className={styles.shop} onClick={()=>noOrdersfun()}>Please Visit Shop</div>
</div>
    )}
    
    </>
  );
}
