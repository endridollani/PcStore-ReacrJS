import React from "react";
import "./ProductSection.css";
import "../App.css";

const ProductSection = () => {
  return (
    <div className="products">
      <h1 className="category-name">COMPUTERS</h1>
      <div className="cards">
        <div className="product-card">
          <div className="product-card-content">
            <div className="img-container">
              <img
                className="card-image"
                src={require("../images/09.jpg")}
                alt="Product card"
              ></img>
            </div>
            <div className="card-content-container">
              <div className="product-description">
                This is good! This product !
              </div>
              <div className="product-price">200$</div>
              <div className="preferences">
                <a className="add-to-favorites" href="/favorites">
                  <i className="fas fa-heart"></i>
                </a>
                <a className="add-to-card" href="/shoopingCart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-card-content">
            <div className="img-container">
              <img
                className="card-image"
                src={require("../images/logo.png")}
                alt="Product card"
              ></img>
            </div>
            <div className="card-content-container">
              <div className="product-description">
                This is good! This product is a very expensive one tho!
              </div>
              <div className="product-price">200$</div>
              <div className="preferences">
                <a className="add-to-favorites" href="/favorites">
                  <i className="fas fa-heart"></i>
                </a>
                <a className="add-to-card" href="/shoopingCart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-card-content">
            <div className="img-container">
              <img
                className="card-image"
                src={require("../images/logo.png")}
                alt="Product card"
              ></img>
            </div>
            <div className="card-content-container">
              <div className="product-description">
                This is good! This product is a very expensive one tho!
              </div>
              <div className="product-price">200$</div>
              <div className="preferences">
                <a className="add-to-favorites" href="/favorites">
                  <i className="fas fa-heart"></i>
                </a>
                <a className="add-to-card" href="/shoopingCart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-card-content">
            <div className="img-container">
              <img
                className="card-image"
                src={require("../images/logo.png")}
                alt="Product card"
              ></img>
            </div>
            <div className="card-content-container">
              <div className="product-description">
                This is good! This product is a very expensive one tho!
              </div>
              <div className="product-price">200$</div>
              <div className="preferences">
                <a className="add-to-favorites" href="/favorites">
                  <i className="fas fa-heart"></i>
                </a>
                <a className="add-to-card" href="/shoopingCart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="product-card">
          <div className="product-card-content">
            <div className="img-container">
              <img
                className="card-image"
                src={require("../images/logo.png")}
                alt="Product card"
              ></img>
            </div>
            <div className="card-content-container">
              <div className="product-description">
                This is good! This product is a very expensive one tho!
              </div>
              <div className="product-price">200$</div>
              <div className="preferences">
                <a className="add-to-favorites" href="/favorites">
                  <i className="fas fa-heart"></i>
                </a>
                <a className="add-to-card" href="/shoopingCart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
