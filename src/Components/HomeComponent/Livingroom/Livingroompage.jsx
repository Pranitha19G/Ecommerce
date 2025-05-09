import React from "react";
import styles from "./Livingroompage.module.css";
import img4 from '../../../assets/img4.jpg';
import { useNavigate } from "react-router-dom";

export default function Livingroompage() {

  const navigation= useNavigate();
   const shopnowfun=()=>{
    navigation("/shop")
  }
  return (
    <div>
      <div className={styles.Parentcont}>
        <div className={styles.cont1}>
          <img src={img4} alt="img" />
        </div>
        <div className={styles.cont2}>
          <span className={styles.bluetxt}>SALE UP TO 35% OFF</span>
          <span className={styles.halfcont1}>
            HUNDREDS of 
          <span>New lower prices!</span>
          </span>
          <span className={styles.halfcont2}>
            It’s more affordable than ever
            <span> to give every room in your home a
            stylish makeover </span>
          </span>
          <span className={styles.shopnowtxt} onClick={()=>shopnowfun("All")}>Shop Now</span>
        </div>
      </div>
    </div>
  );
}
