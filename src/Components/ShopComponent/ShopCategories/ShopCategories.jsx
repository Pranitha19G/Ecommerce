import React, { useContext, useEffect, useState } from "react";
import { products } from "../../../Utils/Utils";
import styles from "./ShopCategories.module.css";
import CategoryContext from "../../Contexts/CatergoryContext/CategoryContext";

export default function ShopCategories() {
  const [selectCategory, setSelectCategory] = useState([]);
  const{ setCategory}=useContext(CategoryContext);
  
  const category2 = products.filter(
    (item, index, self) =>
      index === self.findIndex((S) => S.category === item.category)
  );

  useEffect(() => {
    setCategory(selectCategory);
  }, [selectCategory]);

  const selectfun = (e) => {
    setSelectCategory(e.target.value);
    console.log("e.target.value", e.target.value);
  };

  return (
    <div className={styles.ShopCategories}>
      <select onChange={selectfun} value={selectCategory}>
        <option className={styles.optionsdiv} value="all">
          All
        </option>
        {category2?.map((item, i) => (
          <option className={styles.optionsdiv} value={item.category}>
            {item.category}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}
