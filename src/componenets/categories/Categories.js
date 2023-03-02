import React from "react";
import { useGlobalContext } from "../../context";
import "./categories.css";
const url2 = "www.themealdb.com/api/json/v1/1/categories.php";
function Categories() {
  const { allCategories, filterItems } = useGlobalContext();

  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn category-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
