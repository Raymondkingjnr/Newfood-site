import React from "react";
import Loading from "../Loading";
import { useGlobalContext } from "../../context";
import "./services.css";

const Services = () => {
  const { foods, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="serve-sec">
      <h1>we serve</h1>
      <div className="serve-sec-gallary">
        {foods.splice(0, 4).map((food) => {
          const { id, category, img, meal, tag } = food;

          return (
            <div className="serve-items" key={id}>
              <div className="serve-img">
                <img src={img} alt="" />
              </div>
              <h3>{category}</h3>
              <p>{tag}</p>
              <p>{meal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
