import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../Utils/Utils";
import styles from "./ShopPage.module.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CategoryContext from "../Contexts/CatergoryContext/CategoryContext";
import CartContext from "../Contexts/CartContext/CartContext";
import ShopContext from "../Contexts/ShopContext/ShopContext";

export default function ShopPage() {
  const [updated, setUpdated] = useState("");
  const { inputContext, setInputContext } = useContext(ShopContext);
  const [shopcartdata, setShopcartdata] = useState([]);
  const [shopProducts, setShopProducts] = useState(products);

  const { setCart } = useContext(CartContext);
  const { category } = useContext(CategoryContext);
  const { state: rooms } = useLocation();
  console.log("rooms", rooms);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredList = updated?.length?updated:shopProducts
  const totalPages = Math.ceil(filteredList.length / 15);

  const startIndex = currentPage - 1 * 15;
  const currentItems = filteredList.slice(startIndex, startIndex + 15);


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
  return (
    <>
    <div className={styles.mainContainer}>
      {currentItems.map((items, i) => (
        <div key={i} className={styles.Parent}>
          <div className={styles.image}>
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
    <div>
      {[...Array(totalPages)].map((val,i)=>(
        <button onClick={()=>handleOnclick(i+1)}>{i+1}</button>
      ))}
    </div>
    </>
  );
}
