import React from "react";
import "./ProductSection.css";
import "../App.css";
import useProductsByCategory from "../hooks/useProductsByCategory";
import { addToCart } from "../helpers/cart";
import { useParams } from "react-router-dom";

const ProductSection = () => {
  const params = useParams();
  const categoryId = params.categoryId;
  const products = useProductsByCategory(categoryId);

  return (
    <div className="products">
      <div className="cards">
        {products.map((product) => {
          return (
            <div className="product-card">
              <div className="product-card-content">
                <div className="img-container">
                  <img
                    className="card-image"
                    src={"http://localhost:8080/images/" + product.image}
                    alt="Product card"
                  ></img>
                </div>
                <div className="card-content-container">
                  <div className="product-description">
                    {product.description}
                  </div>
                  <div className="product-price">{product.price} LEK</div>
                  <div className="preferences">
                    {/* <a className="add-to-card" href="/addProduct">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="add-to-card" href="/">
                      <i className="fas fa-trash"></i>
                    </a> */}
                    <div
                      className="add-to-cart"
                      onClick={() => addToCart(product.id)}
                    >
                      <i className="fas fa-shopping-cart"></i> Shto Shport
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
