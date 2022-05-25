import React from "react";
import CategorySection from "../CategorySection";
import "../../App.css";
import ProductSection from "../ProductSection";

const Home = () => {
  return (
    <>
      
      <div className="home">
        <CategorySection />
        <ProductSection />
      </div>
    </>
  );
};

export default Home;
