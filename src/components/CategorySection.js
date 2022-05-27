import "./CategorySection.css";
import "../App.css";

const CategorySection = ()=> {

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
            </ul>
          </div>
        </div>
      </>
    );
}
export default CategorySection;
