import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <h4>
        &copy; {new Date().getFullYear()} <span> Good Taste /</span>
        {""}
      </h4>
      {""}
      <h4> All rights reserved</h4>
    </div>
  );
}

export default Footer;
