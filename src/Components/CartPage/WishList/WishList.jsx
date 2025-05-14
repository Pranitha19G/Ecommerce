import React, { useState } from "react";
import { products } from "../../../Utils/Utils";
import styles from "./WishList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function WishList() {
  const wish = localStorage.getItem("wishList");
  const [deletebtn, setDeletebtn] = useState([]);

  const wishListproducts = products.filter((val) => wish.includes(val.id));

  console.log(wishListproducts);

  const deleteIcon = (index) => {
    const newArray = wishListproducts.filter((_, i) => i !== index);
    setDeletebtn(newArray);
  };

  return (
    <div className={styles.wishListContainer}>
      {(deletebtn.length? deletebtn : wishListproducts||[]).map((val, i) => (
        <div className={styles.wishlistparent}>
          <div key={val.id} className={styles.wishlist}>
            <div className={styles.leftdiv}>
              <img src={val.products_image} alt="image" />
            </div>
            <div>{val.product_name}</div>
            <div>{val.price}</div>
            <div>{val.rating}</div>
            <DeleteIcon onClick={() => deleteIcon(i)} />
          </div>
        </div>
      ))}
    </div>
  );
}
