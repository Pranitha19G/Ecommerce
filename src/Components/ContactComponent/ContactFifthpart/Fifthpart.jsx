import React from "react";
import styles from "./Fifthpart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone, faLock , faMoneyBill,  faTruck} from "@fortawesome/free-solid-svg-icons";


export default function Fifthpart() {
  return (
    <div className={styles.Fifthpart}>
      <div className={styles.Parent}>
        <div className={styles.divParent}>
        <FontAwesomeIcon icon={faTruck} className={styles.icon}/>
          <span className={styles.blacktxt}>Free Shipping</span>
          <span className={styles.graytxt}>Order above $200</span>
        </div>
        <div className={styles.divParent}>
        <FontAwesomeIcon icon={faMoneyBill} className={styles.icon}/>
        <span className={styles.blacktxt}>Money-back</span>
          <span className={styles.graytxt}>30 days guarantee</span>
        </div>
        <div className={styles.divParent}>
        <FontAwesomeIcon icon={faLock} className={styles.icon}/>
        <span className={styles.blacktxt}>Secure Payments</span>
          <span className={styles.graytxt}>Secured by Stripe</span>
        </div>
        <div className={styles.divParent}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
          <span className={styles.blacktxt}>24/7 Support</span>
          <span className={styles.graytxt}>Phone and Email support</span>
        </div>
      </div>
    </div>
  );
}
