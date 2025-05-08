import React from "react";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <div className={styles.txtcontainer}>
        <div className={styles.parentdiv}>
        <p>We believe in sustainable</p>
        <p>decor. We’re passionate about </p>
         <p> life at home.</p>
        </div>
        <div className={styles.normaltxt}>
          <p>Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which</p>
          <p>can be incorporated into any decor project. The pieces enchant for their sobriety, to last for
          generations,</p>
          <p>faithful to the shapes of each period, with a touch of
          the present</p>
        </div>
        </div>
      </div>
  );
}
