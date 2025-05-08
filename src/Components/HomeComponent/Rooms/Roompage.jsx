import React from "react";
import styles from "./Roompage.module.css";
import category1 from "../../../assets/category1.png";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.png";
import { useNavigate } from "react-router-dom";

export default function Roompage() {
  const navigation= useNavigate();
  const shopnowfun=(rooms)=>{
    navigation("/shop",{state:rooms})
  }
  return (
    <div className={styles.thirdContainer}>
      <div className={styles.shopnowContainer}>
        <div className={styles.leftsideParent}>
          <div className={styles.txt}>
            <span>Living Room</span>
            <span className={styles.shopnow}onClick={()=>shopnowfun("Living Room")}>Shop Now</span>
          </div>
          <div className={styles.imgpart}>
            <img src={category1} alt="c1"></img>
          </div>
        </div>
        <div className={styles.rightsideParent}>
          <div className={styles.firstpart}>
            <div className={styles.innerleft}>
              <span>Bed Room</span>
              <span className={styles.shopnow}onClick={()=>shopnowfun("Bed Room")}>Shop Now</span>
            </div>
            <div className={styles.innerright}>
              <img src={category3} alt="c3"></img>
            </div>
          </div>
          <div className={styles.secondpart}>
            <div className={styles.innerleft}>
              <span>Kitchen</span>
              <span className={styles.shopnow}onClick={()=>shopnowfun("Kitchen")}>Shop Now</span>
            </div>
            <div className={styles.innerright}>
              <img src={category2} alt="c2"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
