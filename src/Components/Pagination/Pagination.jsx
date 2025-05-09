import React, { useState } from "react";
import { products } from "../../Utils/Utils";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / 15);

  const startIndex = currentPage - 1 * 15;
  const currentItems = products.slice(startIndex, startIndex + 15);

  return (
    <div>
      <ul>{currentItems.map} </ul>
    </div>
  );
}
