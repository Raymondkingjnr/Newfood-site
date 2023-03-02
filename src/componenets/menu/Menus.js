import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import "./menus.css";
function Menu() {
  const { foods, loading } = useGlobalContext();
  const [search, setSearch] = React.useState("");

  if (loading) {
    <Loading />;
  }

  if (foods.length < 1) {
    <h2 className="no-item-title">No meals found</h2>;
  }
  return (
    <div>
      <div className="search-container">
        <input
          className="input"
          type="text"
          placeholder="meals, categories..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="menu-container">
        {foods
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (
              item.category.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return item;
            } else if (
              item.meal.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((food) => {
            const { id, img, category, tag, meal } = food;
            return (
              <div className="menu-card" key={id}>
                <img src={img} alt="" />
                <div className="menu-text">
                  <h2>Category: {category}</h2>

                  {tag ? <p>Tags: {tag}</p> : ""}

                  <p>Meal: {meal}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menu;
