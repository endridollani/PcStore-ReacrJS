import React from "react";

const AddProductToDb = () => {
  return (
    <>
      <div className="add-product">
        <form>
          <label className="label-title">Photo: </label>
          <input type="file" id="photo-input" name="filename" />
          <label className="label-title">Description</label>
          <input type="text"></input>
          <label className="label-title">Price</label>
          <input type="number"></input>
          <label className="label-title">Category</label>
          <span className="select-category">
            <input
              type="radio"
              id="all-in-one-pc"
              name="all-in-one-pc"
              value="all-in-one-pc"
            />
            <label for="all-in-one-pc">all-in-one-pc</label>
          </span>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddProductToDb;
