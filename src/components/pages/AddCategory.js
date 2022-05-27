import React from "react";

const AddCategory = () => {
  return (
    <>
      <div className="add-product">
        <form method="post" action="http://localhost:8080/api/category">
          <label className="label-title">Name of category</label>
          <input type="text" name="name"></input>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddCategory;
