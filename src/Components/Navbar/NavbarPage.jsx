import React, { useContext, useState,useEffect} from "react";
import { Link,useNavigate, useLocation} from "react-router-dom";
import styles from "./NavbarPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Contexts/CartContext/CartContext";
import SearchInput from "../SearchInput/SearchInput";

export default function NavbarPage() {
  const [showSearchbar, setShowSearchbar]=useState(false)
  const navigation=useNavigate();
  const {cart}=useContext(CartContext);
  const cartlength=JSON.parse(localStorage.getItem('cartData'))
  const [menuOpen, setMenuOpen] = useState(false);
  const successdata=(localStorage.getItem('login'));
  const [activelink, setActivelink] = useState("");


  const Location = useLocation();
  console.log("location", Location.pathname);
 
  
  useEffect(() => {
    setActivelink(Location.pathname);
  }, [Location]);


  const loginfun=()=>{
    navigation('/login')
  }
  const cartPage=()=>{
    navigation('/cartPage')
  }
  const showSearchbarFun=()=>{
    setShowSearchbar((prev)=>!prev)
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
          <Link to="/"  className={`${activelink === "/" ? styles.active : ""}`}>Home</Link>
        </li>
        <li>
          <Link to="/shop"  className={`${activelink === "/shop" ? styles.active : ""}`}>Shop</Link>
        </li>
        <li>
          <Link to="/blog"  className={`${activelink === "/blog" ? styles.active : ""}`}>Blog</Link>
        </li>
        <li>
          <Link to="/contact"  className={`${activelink === "/contact" ? styles.active : ""}`}>Contact Us</Link>
        </li>
      </ul>

      <div className={styles.icons}>
        <div className={styles.searchParent}>
        <div onClick={showSearchbarFun}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className={styles.SearchInput}>
        {showSearchbar?<SearchInput/>:""}
        </div>
        </div>
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
