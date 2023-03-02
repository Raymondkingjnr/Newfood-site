import React from "react";
import { Hero, Amenities, Gallary, Services } from "../../componenets";
import "./home.css";
function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Amenities />
      <Gallary />
    </div>
  );
}

export default Home;
