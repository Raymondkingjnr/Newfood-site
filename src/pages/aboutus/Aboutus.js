import React from "react";
import aboutimg from "../../assets/aboutus.png";
import "./aboutus.css";
function Aboutus() {
  return (
    <div className="aboutus-sec section">
      <div className="about-text">
        <div className="about-header">
          <h3>About us</h3>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea
          optio sed. Laudantium delectus hic earum inventore voluptatem placeat
          corporis iste, sapiente vitae aspernatur assumenda architecto numquam
          amet beatae nemo itaque sed? Hic optio temporibus repellat enim quia
          assumenda corporis eaque, sequi quam necessitatibus dolores vero dolor
          laboriosam ex magni architecto itaque voluptatem sint ea quidem, aut
          ducimus fugiat quisquam.
        </p>
      </div>

      <img src={aboutimg} alt="about" />
    </div>
  );
}

export default Aboutus;
