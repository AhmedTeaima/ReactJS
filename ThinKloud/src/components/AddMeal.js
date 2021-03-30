import React, { useRef, useState } from "react";
import "./AddMeal.css";
function AddMeal() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [nameErr, setNameErr] = useState({});
  const [priceErr, setPriceErr] = useState({});
  const [categoryErr, setCategoryErr] = useState({});

  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValidation();
  };
  const inputValidation = () => {
    const nameErr = {};
    const priceErr = {};
    const categoryErr = {};
    let isValid = true;
    if (name.trim().length <= 0) {
      nameErr.nameIsRequired = "Please Set The Meal Name";
      isValid = false;
    }
    if (price.length <= 0) {
      priceErr.priceIsRequired = "Please Set The Meal Price";
      isValid = false;
    }
    if (categoryRef.current.value === "default") {
      categoryErr.categoryIsRequired = "Please Choose The Category";
      isValid = false;
    }
    setNameErr(nameErr);
    setPriceErr(priceErr);
    setCategoryErr(categoryErr);
    return isValid;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="name-input ">
          <span>*</span>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="m-3"
            id="name"
          />
          {Object.keys(nameErr).map((key, index) => {
            return (
              <div key={index} style={{ fontSize: "12px", color: "red" }}>
                {nameErr[key]}
              </div>
            );
          })}
        </div>
        <div className="name-input">
          <span>*</span>
          <label htmlFor="price">Price:</label>
          <br />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="m-3"
            id="price"
          />
          {Object.keys(priceErr).map((key, index) => {
            return (
              <div key={index} style={{ fontSize: "12px", color: "red" }}>
                {priceErr[key]}
              </div>
            );
          })}
          <input className="file-input" type="file" accept="image/*" />
        </div>
        <div className="name-input  ">
          <label htmlFor="description">Description:</label>
          <br />
          <textarea className="m-3" id="description" cols="40" rows="2" />
        </div>
        <div>
          <span>*</span>
          <label htmlFor="category">Category</label>
          <br />
          <select
            ref={categoryRef}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="default">--Choose--</option>
            <option value="meat">Meat</option>
            <option value="chiken">Chiken</option>
          </select>
          {Object.keys(categoryErr).map((key, index) => {
            return (
              <div key={index} style={{ fontSize: "12px", color: "red" }}>
                {categoryErr[key]}
              </div>
            );
          })}
        </div>
        <button type="submit" className="btn save btn-primary">
          Save
        </button>
      </form>
    </>
  );
}

export default AddMeal;
