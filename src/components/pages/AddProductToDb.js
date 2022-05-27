import React from "react";
import useCategories from "../../hooks/useCategories";

const AddProductToDb = () => {
  const cats = useCategories();

  return (
    <>
      <div className="add-product">
        <form
          method="post"
          action="http://localhost:8080/api/products"
          enctype="multipart/form-data"
        >
          <label className="label-title">Photo: </label>
          <input type="file" id="photo-input" name="image" />

          <label className="label-title">Description</label>
          <input type="text" name="description" />

          <label className="label-title">Price</label>
          <input type="number" name="price" />

          <label className="label-title">Category</label>
          <select name="categoryId">
            {cats.map((cat) => (
              <option value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddProductToDb;
