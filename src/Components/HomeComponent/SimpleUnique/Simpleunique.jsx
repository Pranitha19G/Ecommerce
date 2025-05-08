import React from "react";
import styles from "./Simpleunique.module.css";

export default function Simpleunique() {
  return (
    <div className={styles.ParenttextContainer}>
      <div className={styles.textContainer}>
        <div className={styles.left}>
          <span>
            Simply Unique
            <span className={styles.symbol}>/</span>
          </span>
          <span>
            Simply Better
            <span className={styles.symbol}>.</span>
          </span>
        </div>
        <div className={styles.right}>
          <p>
            <span>3legant</span> is a gift & decorations store based in HCMC,
            Vietnam. Est since 2019.
          </p>
        </div>
      </div>
    </div>
  );
}
