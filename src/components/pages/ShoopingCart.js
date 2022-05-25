import React from "react";
import "../../App.css";
import "../ShoopingCart.css";
const SoopingCart = () => {
  return (
    <>
      <div className="shooping-cart">
        <div className="product-container">
          <div className="product-img">
            <img src={require("../../images/logo.png")} alt="sce"></img>
          </div>
          <span className="description">
            {" "}
            This is good! This product is a very expensive one tho!
          </span>
          <span className="add">
            <i className="fas fa-plus"></i>
          </span>
          <span className="substract">
            <i className="fas fa-minus"></i>
          </span>
          <span className="price">1 x 200$</span>
        </div>

        <div className="product-container">
          <div className="product-img">
            <img src={require("../../images/logo.png")} alt="sce"></img>
          </div>
          <span className="description">
            {" "}
            This is good! This product is a very expensive one tho!
          </span>
          <span className="add">
            <i className="fas fa-plus"></i>
          </span>
          <span className="substract">
            <i className="fas fa-minus"></i>
          </span>
          <span className="price">1 x 200$</span>
        </div>

        <div className="product-container">
          <div className="product-img">
            <img src={require("../../images/logo.png")} alt="sce"></img>
          </div>
          <span className="description">
            {" "}
            This is good! This product is a very expensive one tho!
          </span>
          <span className="add">
            <i className="fas fa-plus"></i>
          </span>
          <span className="substract">
            <i className="fas fa-minus"></i>
          </span>
          <span className="price">1 x 200$</span>
        </div>

        <div className="product-container white">
          <span className="total"><span className="black">Total:</span> 2000$</span>
        </div>
      </div>
    </>
  );
};

export default SoopingCart;
