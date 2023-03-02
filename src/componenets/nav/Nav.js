import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { links } from "../../constant";
import "./nav.css";
function Nav() {
  const { openSidebar } = useGlobalContext();
  return (
    <div className="">
      <nav>
        <div className="logo">
          <Link to="/" className="logo-icon">
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul className="nav__links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="links">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="toggle" onClick={openSidebar}>
          <FaBars />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
