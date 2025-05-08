import React, { useContext, useEffect, useState } from "react";
import { products } from "../../../Utils/Utils";
import styles from "./ShopCategories.module.css";
import CategoryContext from "../../Contexts/CatergoryContext/CategoryContext";
import { useLocation } from "react-router-dom";

export default function ShopCategories() {
  const [selectCategory, setSelectCategory] = useState("");
  const { setCategory } = useContext(CategoryContext);
  const { state: rooms } = useLocation();

  const category2 = products.filter(
    (item, index, self) =>
      index === self.findIndex((S) => S.category === item.category)
  );
  useEffect(() => {
    const newArray = [...new Set(products.map((items) => items.category))];
    if (newArray.includes(rooms)) {
      console.log("c", newArray);

      setSelectCategory(rooms);
    }
  }, [rooms]);

  useEffect(() => {
    setCategory(selectCategory);
  }, [selectCategory]);

  const selectfun = (e) => {
    setSelectCategory(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  return (
    <div className={styles.ShopCategories}>
      <select onChange={selectfun} value={"Kitchen"}>
        {/* <option className={styles.optionsdiv} value="all">
          All
        </option> */}
        {category2?.map((item, i) => (
          <option
            className={styles.optionsdiv}
            value={rooms ? rooms : item.category}
          >
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
}
