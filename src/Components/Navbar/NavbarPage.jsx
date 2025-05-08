import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./NavbarPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Contexts/CartContext/CartContext";

export default function NavbarPage() {
  const navigation=useNavigate();
  const {cart}=useContext(CartContext);
  const cartlength=JSON.parse(localStorage.getItem('cartData'))
  const [menuOpen, setMenuOpen] = useState(false);
  const successdata=(localStorage.getItem('login'));
  const loginfun=()=>{
    navigation('/login')
  }
  const cartPage=()=>{
    navigation('/cartPage')
  }

  return (
    <div className={styles.navParent}>
    <nav className={styles.navbar}>
      <div className={styles.logo}>3legant.</div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <ul className={`${styles.navItems} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">ContactUs</Link>
        </li>
      </ul>

      <div className={styles.icons}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        {successdata==='success'?<>
          <FontAwesomeIcon icon={faUser} />
          <div className={styles.cartParent} onClick={()=>cartPage()}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>{cartlength.length}</span>
          </div>
        </>:<span onClick={()=>loginfun()}>Login</span>
        }
       
      </div>
    </nav>
    </div>
  );
}
