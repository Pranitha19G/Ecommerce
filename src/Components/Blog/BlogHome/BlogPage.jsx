import React from "react";
import styles from "./BlogPage.module.css";

export default function BlogPage({setOpenModal}) {
  const createblogfun = () => {
    setOpenModal(true)
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headertext}>
          <div className={styles.ourroom}>
            <div className={styles.divparent}></div>
            <h1 className={styles.headertitle}>Our Blog</h1>
            <div className={styles.buttontxt}>
              <button onClick={() => createblogfun()}>Create Blog</button>
            </div>
          </div>
          <p className={styles.headersubtitle}>
            Home ideas and design inspiration
          </p>
        </div>
      </div>
    </div>
  );
}
