import React, { useState,useContext } from "react";
import { products } from "../Utils";
import styles from "./UtilsFetch.module.css";
import UtilsContext from "../UtilsContext/UtilsContext";
import { useNavigate } from "react-router-dom";

export default function UtilsFetch() {
    const { addtofun } = useContext(UtilsContext);
    const navigate= useNavigate();

    const gotoCartfun=()=>{
        navigate('/cart')

    }
 
  return (
    <div className={styles.Container}>
<button onClick={()=>gotoCartfun()}>gotoCart</button>
      {products.map((val, i) => (
        <div key={i} className={styles.parent}>
          <img src={val.products_image} alt="image" />
          <div>{val.product_name}</div>
          <div>₹{val.price}</div>
          <button onClick={() => addtofun(val)}>addtocart</button>
        </div>
      ))}
    </div>
  );
}
