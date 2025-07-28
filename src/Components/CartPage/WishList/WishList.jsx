import React, { useEffect, useState } from "react";
import { products } from "../../../Utils/Utils";
import styles from "./WishList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function WishList() {
  const wish = localStorage.getItem("wishList");
  const [deletebtn, setDeletebtn] = useState([]);
  useEffect(() => {
    const wishListproducts = products.filter((val) => wish?.includes(val.id));
    setDeletebtn(wishListproducts);
  }, [wish]);

  const deleteIcon = (index) => {
    const newArray = deletebtn.filter((_, i) => i !== index);
    setDeletebtn(newArray);
  };
  useEffect(() => {
    console.log(deletebtn.length);

    if (deletebtn.length === 0) {
      localStorage.removeItem("wishList");
    }
  }, [deletebtn]);
   const navigate=useNavigate();

  const gotoshop=()=>{
    navigate('/shop')

  }
  return (
    <>
      {wish?.length > 0 ? (
        <div className={styles.wishListContainer}>
          {deletebtn?.map((val, i) => (
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
      ) : (
        <div className={styles.yourCart}>
          <div>Your WishList is Empty</div>
          <div className={styles.gotoshop} onClick={() => gotoshop()}>
            Go to Shop Page
          </div>
        </div>
      )}
    </>
  );
}
