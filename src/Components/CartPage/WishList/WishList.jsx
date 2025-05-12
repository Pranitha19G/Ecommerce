import React from 'react'
import { products } from "../../../Utils/Utils";
import styles from "./WishList.module.css"
export default function WishList() {
 const wish= localStorage.getItem(("wishList"));
 
const wishListproducts= products.filter((val)=>wish.includes(val.id));

console.log(wishListproducts);

  return (
    <div className={styles.wishListContainer}>
      {wishListproducts.map((val,i)=>(
        <div className={styles.wishlistparent}>
      <div key={val.id} className={styles.wishlist}>
        <div className={styles.leftdiv}>
          <img src={val.products_image} alt='image'/>
        </div>
        <div>{val.product_name}</div>
        <div>{val.price}</div>
        <div>{val.rating}</div>

        </div>
        </div>



      ))}
      
    </div>
  )
}
