import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar.css";
import Logo from "../../assets/logo/logo.jpg";
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
  const Navlinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Features",
      to: "/features",
    },
    {
      label: "Login",
      to: "/login",
    },
    {
      label: "Signup",
      to: "/signup",
    },
  ];

  const [showNavlinks, setShowNavlinks] = useState(false);

  const toggleNavlinks = () => {
    setShowNavlinks(!showNavlinks);
  };

  const hideNavlinks = () => {
    setShowNavlinks(false);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className={`navlinks ${showNavlinks ? "show" : ""}`}>
          {Navlinks.map((v, key) => (
            <NavLink to={v.to} key={key} onClick={hideNavlinks}>
              {v.label}
            </NavLink>
          ))}
        </div>
        <div className="burger" onClick={toggleNavlinks}>
          <FiAlignJustify />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
