import React, { useState } from "react";
import "./main.css";
import ProductCard from "../ProductCard/ProductCard";
const Main = ({ createProduct }) => {
  const [productName, setProductName] = useState("");
  const [figmaUrl, setfigmaUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");

  function submitProduct(e) {
    e.preventDefault();
    createProduct(productName, figmaUrl.split("/")[4], productPrice);
  }
  return (
    <div className="main-container">
      <div className="form-add-product">
        <h2>Add products</h2>
        <form action="" className="form-container" onSubmit={submitProduct}>
          <div className="form-item">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              required
              onChange={(s) => setProductName(s.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Figma Link</label>
            <input
              type="text"
              required
              onChange={(s) => setfigmaUrl(s.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="">Price</label>
            <input
              type="text"
              required
              onChange={(s) => setProductPrice(s.target.value)}
            />
          </div>
          <button className="add-btn">Add product</button>
        </form>
      </div>
      <div className="explore">
        <h2 id="expl">Explore</h2>
        <div className="grid">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
