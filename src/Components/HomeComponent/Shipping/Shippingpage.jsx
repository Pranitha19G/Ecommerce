import React from "react";
import Styles from "./Shippingpage.module.css";

export default function Shippingpage() {
  return (
    <div className={Styles.shippingContainer}>
      <div className={Styles.parentdiv}>
        <div className={Styles.firstdiv}>
          <div>icon1</div>
          <div>Free Shipping</div>
          <div className={Styles.graytxt}>Order above $200</div>
        </div>
        <div className={Styles.firstdiv}>
          <div>2</div>
          <div>Money-back</div>
          <div className={Styles.graytxt}>30 days guarantee</div>
        </div>
        <div className={Styles.firstdiv}>
          <div>3</div>
          <div>Secure Payments</div>
          <div className={Styles.graytxt}>Secured by Stripe</div>
        </div>
        <div className={Styles.firstdiv}>
          <div>4</div>
          <div>24/7 Support</div>
          <div className={Styles.graytxt}>Phone and Email support</div>
        </div>
      </div>
    </div>
  );
}
