import React from "react";
import { links } from "../../constant";
import { Link } from "react-router-dom";
import { RiRestaurant2Fill } from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useGlobalContext } from "../../context";
import "./sidebar.css";
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logo} alt="" />
        </div>
        <div onClick={closeSidebar} className="close-btn">
          <RiRestaurant2Fill />
        </div>
      </div>

      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link to={url} className="links" onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
