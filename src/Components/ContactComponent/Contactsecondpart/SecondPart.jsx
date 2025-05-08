import React from "react";
import styles from "./SecondPart.module.css";
import img4 from "../../../assets/img4.jpg";

export default function SecondPart() {
  return (
    <div className={styles.SecondPart}>
    <div className={styles.Parentdiv}>
      <div>
        <img src={img4} alt="img" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.boldtxt}>About Us</p>
        <div className={styles.normaltxt}>
         <p> 3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.</p>
          <p>Our customer service is always prepared to support you</p>
          <p>24/7
        </p>
        </div>
        <p className={styles.underlinetxt}>Shop Now</p>
      </div>
    </div>
    </div>
  );
}
