import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./NavbarPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Contexts/CartContext/CartContext";
import SearchInput from "../SearchInput/SearchInput";
import CloseIcon from "@mui/icons-material/Close";
import WishListContext from "../Contexts/WishListContext/WishListContext";

export default function NavbarPage() {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [show, setShow] = useState(false);
  const navigation = useNavigate();
  const { cart } = useContext(CartContext);
  const cartlength = JSON.parse(localStorage.getItem("cartData"));
  const [menuOpen, setMenuOpen] = useState(false);
  const successdata = localStorage.getItem("login");
  const [activelink, setActivelink] = useState("");
  const { wishListArray } = useContext(WishListContext);
  const [dropDownShow, setDropDownShow]=useState(false)

  const Location = useLocation();
  console.log("location", Location.pathname);

  useEffect(() => {
    setActivelink(Location.pathname);
  }, [Location]);

  useEffect(() => {
    if (successdata === "success") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [successdata]);

  const loginfun = () => {
    navigation("/login");
  };
  const cartPage = () => {
    navigation("/cartPage");
  };
  const showSearchbarFun = () => {
    setShowSearchbar((prev) => !prev);
  };
  const logoutfun = () => {
    localStorage.removeItem("login");
    setShow(false);
  };
 const wishListFun=()=>{
  navigation("/wishList")
 }
 
 const orderPage=()=>{
  navigation("/orderdetails")
 }


  return (
    <div className={styles.navParent}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>3legant.</div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul
          className={`${styles.navItems}  ${
            menuOpen ? styles.showMenu : styles.hideMenu
          }`}
        >
          <div onClick={() => setMenuOpen(false)} className={styles.closebtn}>
            <CloseIcon />
          </div>
          <li>
            <Link
              to="/"
              className={`${activelink === "/" ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={`${activelink === "/shop" ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${activelink === "/blog" ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${activelink === "/contact" ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className={styles.icons}>
          <div className={styles.searchParent}>
            <div onClick={showSearchbarFun}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={styles.SearchInput}>
              {showSearchbar ? <SearchInput /> : ""}
            </div>
          </div>
          {show ? (
            <div className={styles.iconsParent}>
              <div className={styles.faUsericon} onMouseEnter={()=>(setDropDownShow(true))} onMouseLeave={()=>(setDropDownShow(false))}>
              <FontAwesomeIcon icon={faUser} />
              {dropDownShow?<div className={styles.yourdetails} onClick={()=>orderPage()}>your orders</div>:""}
              </div>
              <div className={styles.cartParent} onClick={() => cartPage()}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cartlength?.length}</span>
              </div>
              <div className={styles.iconstyling} onClick={()=>wishListFun()}>
               {wishListArray.length>0?<FavoriteIcon/>:<FavoriteBorderIcon />}
                <span className={styles.numberstyling}>
                  {wishListArray?.length}
                </span>
                
              </div>
              <div className={styles.LogoutIcon} onClick={() => logoutfun()}>
                <LogoutIcon/>
              </div>
            </div>
          ) : (
            <span onClick={() => loginfun()}>Login</span>
          )}
        </div>
      </nav>
    </div>
  );
}
