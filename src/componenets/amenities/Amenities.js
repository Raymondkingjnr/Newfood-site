import React from "react";
import { MdPayment } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";
import { GiPartyPopper } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";

import "./amenities.css";

const amenities = [
  {
    id: 0,
    icon: <RiEBike2Line />,
    text: " Home Delivery",
  },
  {
    id: 1,
    icon: <BiShoppingBag />,
    text: " Take Away",
  },
  {
    id: 2,
    icon: <MdPayment />,
    text: " Mulitiple Payment Method",
  },
  {
    id: 3,
    icon: <GiPartyPopper />,
    text: " Party Orders",
  },
];
function Amenities() {
  return (
    <div className="amenities-container">
      <h2>Amenities</h2>
      <div className="amenities-item-container">
        {amenities.map((item) => {
          const { id, icon, text } = item;
          return (
            <div className="amenities-item" key={id}>
              <div className="amenities-icons">
                <p className="amenities-icon">{icon}</p>
              </div>
              <p className="last-p">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Amenities;
