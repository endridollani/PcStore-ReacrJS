import React from "react";
import "./CategorySection.css";
import "../App.css";

const CategorySection = () => {
  return (
    <>
      <div className="categories-section">
        <h1 className="category-title">CATEGORIES</h1>
        <span className="title-underline"></span>
        <div className="category-list-container">
          <ul class="menu">
            <li>
              <span className="title">Desktop</span>
              <ul>
                <li>
                  <a href="/">All-In-One PC</a>
                </li>
                <li>
                  <a href="/">Assembled by PC Store</a>
                </li>
                <li>
                  <a href="/">Brand New</a>
                </li>
                <li>
                  <a href="/">Gamming PC</a>
                </li>
                <li>
                  <a href="/">Workstation</a>
                </li>
              </ul>
            </li>

            <li>
              <span className="title">Laptop</span>
              <ul>
                <li>
                  <a href="/">Bussiness Notebooks</a>
                </li>
                <li>
                  <a href="/">Gamming Notebooks</a>
                </li>
                <li>
                  <a href="/">Mobile Workstation</a>
                </li>
                <li>
                  <a href="/">Notebooks</a>
                </li>
                <li>
                  <a href="/">Ultrabooks</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='category-sidenav-container'>
                <h1>CATEGORIES</h1>
                <Link to="/" className='category-links'><i className='fas fa-greater-than'></i> Category 11 1121212</Link>
                <Link to="/" className='category-links'>Category 2</Link>
                <Link to="/" className='category-links'>Category 3</Link>
            </div> */}
    </>
  );
};

export default CategorySection;
