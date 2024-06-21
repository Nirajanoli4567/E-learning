import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import "../../css/Dashnav.css";
import { NavLink } from "react-router-dom";

function Dashnav() {
  return (
    <div>
      <div className="dashboard">
        <div className="navtopbar">
          <div className="logo">
            <NavLink to="/">E-Learning</NavLink>
          </div>
          <div className="links">
            <div className="photo">
              <FaUserLarge />
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="navlinks">
            <NavLink to="/dashboard">dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/">dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/">dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/">dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/">dashboard</NavLink>
          </div>
          <div className="navlinks">
            <NavLink to="/">dashboard</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashnav;
