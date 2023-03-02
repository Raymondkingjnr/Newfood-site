import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
function Hero() {
  return (
    <div className="hero--bg">
      <div className="overlay"></div>
      <div className="hero-text">
        <h3>
          Get all you favorite food at a go all in one place <br /> Experience
          real taste of good food{" "}
        </h3>
        <div className="hero--btns">
          <button type="button" className="btn hero-btn">
            <Link to="/menu" className="hero-link">
              Menu
            </Link>
          </button>
          <button type="button" className="btn hero-btn">
            Make an order
          </button>
          <button type="button" className="btn hero-btn">
            <Link to="/book" className="hero-link">
              Book Us Today
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
