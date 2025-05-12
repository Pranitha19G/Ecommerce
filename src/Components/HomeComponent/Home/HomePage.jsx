import React, { useEffect, useState,  } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./HomePage.module.css";
import img1 from  "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  const newArray = [img1, img2, img3, img4];
  const [carouselimage, setCarousel] = useState(newArray);
  const [imageIndex, setImageIndex] = useState(0);
  const prevFun = () => {
    setImageIndex((prev) => (prev === 0 ? newArray.length - 1 : prev - 1));
  };
  const nextFun = () => {
    setImageIndex((prev) => (prev === newArray.length - 1 ? 0 : prev + 1));
  };
  const dotFun = (index) => {
    setImageIndex(index);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.imagecontainer}>
          <img src={newArray[imageIndex]} alt="image" />
        </div>
        <div className={styles.arrowbtnParent}>
          <div className={styles.arrowbtn} onClick={() => prevFun()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <div className={styles.arrowbtn} onClick={() => nextFun()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        </div>
        <div className={styles.parentdot}>
          {newArray.map((val, index) => (
            <span
              className={`${styles.dot} ${
                imageIndex === index ? styles.active : ""
              }`}
              onClick={() => dotFun(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
