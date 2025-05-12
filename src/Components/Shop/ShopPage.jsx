import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../../Utils/Utils";
import styles from "./ShopPage.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CategoryContext from "../Contexts/CatergoryContext/CategoryContext";
import CartContext from "../Contexts/CartContext/CartContext";
import ShopContext from "../Contexts/ShopContext/ShopContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WishListContext from "../Contexts/WishListContext/WishListContext";
export default function ShopPage() {
  const [updated, setUpdated] = useState("");
  const { inputContext, setInputContext } = useContext(ShopContext);
  const [shopcartdata, setShopcartdata] = useState([]);
  const [shopProducts, setShopProducts] = useState(products);
  const [wishlistadded, setWishlistadded] = useState(
    ()=>{
      const stored= localStorage.getItem("wishList");
      return stored?JSON.parse(stored):[]
    }
  );
  useEffect(()=>{
    localStorage.setItem("wishList",JSON.stringify(wishlistadded))

  },[wishlistadded])
  const {setWishListArray} =useContext(WishListContext);

  const { setCart } = useContext(CartContext);
  const { category } = useContext(CategoryContext);
  const { state: rooms } = useLocation();
  console.log("rooms", rooms);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredList = updated?.length ? updated : shopProducts;
  const totalPages = Math.ceil(filteredList.length / 15);

  const startIndex = (currentPage - 1) * 15;
  const currentItems = filteredList.slice(startIndex, startIndex + 15);

  const handleOnclick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const searchedImage = products.filter((val) =>
      val.product_name.toLowerCase().includes(inputContext.toLowerCase())
    );
    setShopProducts(searchedImage);
    console.log("searchedImage", searchedImage);
  }, [inputContext]);

  const addtocartfun = (index, items) => {
    setCount((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
    console.log("items", items);
    const newArray = [...shopcartdata];
    newArray.push(items);
    setShopcartdata(newArray);
    console.log("set", newArray);
    setCart(newArray);
    localStorage.setItem("cartData", JSON.stringify(newArray));
    
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (products) => products.category === category
    );
    console.log("fp", filteredProducts);
    setUpdated(filteredProducts);
  }, [category]);

  console.log("InputContext", inputContext);
  const navigation = useNavigate();

  const productDetails = (id, items) => {
    navigation(`/productDetails/${id}`, { state: items });
  };

  const wishlistArrayfun = (e, id) => {
    e.stopPropagation();
    console.log("wishlistadded",id);
    setWishlistadded((prev) =>
      prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id]

    );
    console.log("wishlistadded",wishlistadded);
    // localStorage.setItem("wishListData", JSON.stringify(wishlistadded));

    // setWishListArray((prev) =>
    //   prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id]

    // );
  };
  useEffect(()=>{
    setWishListArray(wishlistadded)

  },[wishlistadded])

  return (
    <>
      <div className={styles.mainContainer}>
        {currentItems.map((items, i) => (
          <div key={i} className={styles.Parent}>
            <div
              className={styles.image}
              onClick={() => productDetails(items.id, items)}
            >
              <div
                className={styles.wishListicon}
                onClick={(e) => wishlistArrayfun(e, items.id)}
              >
                {wishlistadded.includes(items.id) ? <FavoriteIcon sx={{color:"orange"}}/> : <FavoriteBorderIcon />}
              </div>

              <img src={items.products_image} alt="img" />
            </div>
            <div className={styles.productname}>
              <div>{items.product_name}</div>
              <div className={styles.cartcount}>
                <div onClick={() => addtocartfun(i, items)}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <span>{count[i] || ""}</span>
              </div>
            </div>

            <div className={styles.ratings}>
              <div>
                <Rating style={{ maxWidth: 60 }} value={items.rating} />
              </div>
              <div>₹{items.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.paginationdiv}>
        <button onClick={() => handleOnclick(currentPage - 1)}>prev</button>
        {[...Array(totalPages)].map((val, i) => (
          <button
            style={{
              backgroundColor: currentPage === i + 1 ? "lightcoral" : "white",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              color: currentItems === i + 1 ? "white" : "black",
            }}
            onClick={() => handleOnclick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handleOnclick(currentPage + 1)}>next</button>
      </div>
    </>
  );
}
