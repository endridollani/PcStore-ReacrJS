import React, { useEffect, useState } from "react";
import "../../App.css";
import "../ShoopingCart.css";
import useProduct from "../../hooks/useProduct";
import { getCartItems, deleteCartItem } from "../../helpers/cart";

const ProductItem = ({ productId, onChange }) => {
  const product = useProduct(productId);
  if (!product) return null;

  return (
    <div className="product-container">
      <div className="product-img">
        <img
          src={"http://localhost:8080/images/" + product.image}
          alt="sce"
        ></img>
      </div>
      <span className="description"> {product.description}</span>
      {/* <span className="add">
        <i className="fas fa-plus"></i>
      </span>
      <span className="substract">
        <i className="fas fa-minus"></i>
      </span> */}
      <span className="price">1 x {product.price} Lek</span>
      <span
        className="remove"
        onClick={() => {
          deleteCartItem(productId);
          onChange();
        }}
      >
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

const SoopingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  return (
    <>
      <div className="shooping-cart">
        {cartItems.map((productId) => {
          return (
            <ProductItem
              key={productId}
              productId={productId}
              onChange={() => {
                setCartItems(getCartItems());
              }}
            />
          );
        })}

        {/* <div className="product-container white">
          <span className="total">
            <span className="black">Total:</span> 2000$
          </span>
        </div> */}
      </div>
    </>
  );
};

export default SoopingCart;
