import React from "react";
import styles from "./Footerdiv.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footerdiv() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* LEFT SIDE */}
        <div className={styles.containervthleft}>
          <div className={styles.left}>
            <div className={styles.logo}>3legant.</div>
            <div className={styles.line}></div>
            <div className={styles.tagline}>Gift & Decoration Store</div>
          </div>

          <nav className={styles.navLinks}>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.copyRight}>
            &copy; 2023 3legant. All rights reserved
            <div className={styles.policy}>
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
          </div>
          <div className={styles.icons}>
            <a href="https://instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="https://youtube.com" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
