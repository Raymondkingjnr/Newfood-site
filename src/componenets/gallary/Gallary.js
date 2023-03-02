import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import "./gallary.css";

function Gallary() {
  const { foods, loading, scrollRef } = useGlobalContext();
  if (loading) {
    <Loading />;
  }
  return (
    <div>
      <h2 className="gallary-header">Gallary</h2>
      <div className="gallary-container">
        <div className="gallary--imgs--container" ref={scrollRef}>
          {foods.splice(0, 10).map((food, index) => {
            const { img } = food;
            return (
              <div className="gallary--img" key={`gallary__img-${index + 1}`}>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallary;
