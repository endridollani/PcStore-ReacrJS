import React from "react";
import CategorySection from "../CategorySection";
import "../../App.css";
import ProductSectionByCategory from "../ProductSectionByCategory";

const Home = () => {
  return (
    <>
      
      <div className="home">
        <CategorySection />
        <ProductSectionByCategory />
      </div>
    </>
  );
};

export default Home;
