import React from "react";
import styles from './ShopHome.module.css';
import shopBanner from '../../../assets/shop-banner.png'

export default function ShopHome() {
  return (
    <div className={styles.ShopHome}>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${shopBanner})` }}
      >
        <div className={styles.header}>
          <h1 className={styles.headertitle}>Shop Page</h1>
        </div>
        <p className={styles.headersubtitle}>
          Let’s design the place you always imagined.
        </p>
      </div>
    </div>
  );
}
