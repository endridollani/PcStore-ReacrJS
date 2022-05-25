import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 980) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              src={require("../images/logo.png")}
              className="navbar-logo-icon"
              alt="logo"
            ></img>
            <span className="navbar-logo-text">PC STORE</span>
          </Link>

          <div className="menu-icon" onClick={handeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/favorites" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shoopingCart" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addProduct"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Add <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">
              <i className="fas fa-plus"></i>
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
