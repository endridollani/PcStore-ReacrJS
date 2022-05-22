import React from "react";
import "../App.css";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <Navbar bg="light" style={{ height: 150 }}>
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-logo">
            <img
              src={require("../images/logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span>PC STORE</span>
          </Navbar.Brand>
          <span className="navbar-icons">
            <div className="cart">
                <span>
                    <AiOutlineHeart id="favorites-icon"></AiOutlineHeart>
                </span>
                <span>0</span>
                <span className="space-between"></span>
                <span><AiOutlineShoppingCart id="cart-icon"></AiOutlineShoppingCart></span>
                <span>0</span>
            </div>
          </span>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
