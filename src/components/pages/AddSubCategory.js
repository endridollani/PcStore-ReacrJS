import React from "react";
import useCategories from '../../hooks/useCategories'

const AddCategory = () => {
  const cats = useCategories()

  return (
    <>
      <div className="add-product">
        <form method="post" action="http://localhost:8080/api/sub_category">
          <select name="categoryId">
            {cats.map((cat) => (<option value={cat.id}>{cat.name}</option>))}
          </select>
          <label className="label-title">Name of sub category</label>
          <input type="text" name="name"></input>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddCategory;
