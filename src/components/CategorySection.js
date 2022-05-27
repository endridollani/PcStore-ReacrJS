import "./CategorySection.css";
import "../App.css";
import useCategories from '../hooks/useCategories'

const CategorySection = ()=> {
  const cats = useCategories();

    return (
      <>
        <div className="categories-section">
          <h1 className="category-title">CATEGORIES</h1>
          <span className="title-underline"></span>
          <div className="category-list-container">
            <ul className="menu">
                  {cats.map((cat)=>{
                    return (<li>
                      <a href={`/products/cat/${cat.id}`} className="title">{cat.name}</a>
                      <ul>
                        {cat.sub_categories.map((subCat) => {
                          return (
                            <li>
                              <span className="subcategory">{subCat.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </li>)
                  })}
            </ul>
          </div>
        </div>
      </>
    );
}
export default CategorySection;
