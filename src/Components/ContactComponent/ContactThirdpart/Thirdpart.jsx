import React from "react";
import styles from "./Thirdpart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faShop } from "@fortawesome/free-solid-svg-icons";

export default function Thirdpart() {
  return (
    <div className={styles.Thirdpart}>
      <div className={styles.Parent}>
        <div className={styles.contactus}>
          <span> Contact Us</span>
        </div>
        <div className={styles.addressContainer}>
          <div className={styles.childParent}>
            <FontAwesomeIcon icon={faShop} />
            <p className={styles.boldtxt}>ADDRESS</p>
            <p className={styles.brighttxt}>
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
          <div className={styles.childParent}>
            <FontAwesomeIcon icon={faPhone} />
            <p className={styles.boldtxt}>CONTACT US</p>
            <p className={styles.brighttxt}>+84 234 567 890</p>
          </div>
          <div className={styles.childParent}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p className={styles.boldtxt}>EMAIL</p>
            <p className={styles.brighttxt}>hello@3legant.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
