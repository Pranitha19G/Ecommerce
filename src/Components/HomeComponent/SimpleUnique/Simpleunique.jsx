import React, { useEffect } from "react";
import styles from "./Simpleunique.module.css";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Simpleunique() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.ParenttextContainer}>
      <div className={styles.textContainer}>
        <div className={styles.left} data-aos="fade-up">
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
