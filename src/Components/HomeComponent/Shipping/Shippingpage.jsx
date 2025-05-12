import React from "react";
import Styles from "./Shippingpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLock,
  faMoneyBill,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function Shippingpage() {
  return (
    <div className={Styles.shippingContainer}>
      <div className={Styles.parentdiv}>
        <div className={Styles.firstdiv}>
          <FontAwesomeIcon icon={faTruck} className={Styles.icon} />
          <div>Free Shipping</div>
          <div className={Styles.graytxt}>Order above $200</div>
        </div>
        <div className={Styles.firstdiv}>
          <FontAwesomeIcon icon={faMoneyBill} className={Styles.icon} />
          <div>Money-back</div>
          <div className={Styles.graytxt}>30 days guarantee</div>
        </div>
        <div className={Styles.firstdiv}>
          <FontAwesomeIcon icon={faLock} className={Styles.icon} />
          <div>Secure Payments</div>
          <div className={Styles.graytxt}>Secured by Stripe</div>
        </div>
        <div className={Styles.firstdiv}>
          <FontAwesomeIcon icon={faPhone} className={Styles.icon} />

          <div>24/7 Support</div>
          <div className={Styles.graytxt}>Phone and Email support</div>
        </div>
      </div>
    </div>
  );
}
